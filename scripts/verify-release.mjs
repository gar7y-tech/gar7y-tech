import { spawnSync, spawn } from 'node:child_process';
import { mkdirSync, writeFileSync, existsSync, openSync, closeSync } from 'node:fs';
import { chromium } from '@playwright/test';
mkdirSync('evidence', { recursive: true });
const results = [];
function run(name, args) {
  const result = spawnSync('npm', args, { encoding: 'utf8', env: process.env });
  writeFileSync(`evidence/verify-${name}.log`, (result.stdout || '') + (result.stderr || '') + (result.error?.message || ''));
  results.push({ name, status: result.status === 0 ? 'PASS' : 'FAIL' });
  writeFileSync('evidence/verification.json', JSON.stringify({ date: new Date().toISOString(), results }, null, 2));
  console.log(`${name}: ${results.at(-1).status}`);
  if (result.status !== 0) throw new Error(`${name} failed; see evidence/verify-${name}.log`);
}
let server;
try {
  run('lint', ['run', 'lint']);
  run('typecheck', ['run', 'typecheck']);
  run('catalog', ['exec', '--', 'playwright', 'test', 'tests/catalog.spec.ts']);
  run('build', ['run', 'build']);
  if (!existsSync(process.env.TEST_CHROMIUM_PATH || chromium.executablePath())) {
    results.push({ name: 'browser', status: 'BLOCKED', reason: 'Chromium is not installed' });
    writeFileSync('evidence/verification.json', JSON.stringify({ date: new Date().toISOString(), results }, null, 2));
    throw new Error('Browser acceptance blocked: install Playwright Chromium in an authorized environment.');
  }
  if (!process.env.TEST_BASE_URL) {
    const origin = 'http://127.0.0.1:3100';
    process.env.TEST_BASE_URL = origin;
    const log = openSync('evidence/verify-server.log', 'w');
    server = spawn('npm', ['run', 'start', '--', '--port', '3100'], { stdio: ['ignore', log, log], detached: true });
    closeSync(log);
    let ready = false;
    for (let attempt = 0; attempt < 20; attempt++) {
      if (server.exitCode !== null) break;
      try { if ((await fetch(origin, { signal: AbortSignal.timeout(1000) })).ok) { ready = true; break; } } catch {}
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    if (!ready) throw new Error('Local production server did not start');
  }
  run('browser', ['exec', '--', 'playwright', 'test', 'tests/store.spec.ts', 'tests/upgrade.spec.ts']);
  console.log('All release checks passed.');
} catch (error) {
  if (results.at(-1)?.status === 'PASS') {
    results.push({ name: 'browser-environment', status: 'BLOCKED', reason: error.message });
    writeFileSync('evidence/verification.json', JSON.stringify({ date: new Date().toISOString(), results }, null, 2));
  }
  console.error(error.message);
  process.exitCode = 1;
} finally {
  if (server?.pid) { try { process.kill(-server.pid, 'SIGTERM'); } catch {} }
}
