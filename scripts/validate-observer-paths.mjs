import assert from 'node:assert/strict';
export const OBSERVER_PATHS=new Set(['history','incidents','observer','forecast','change-intelligence','slo','impact','recommendations'].map(name=>`docs/data/${name}.json`));
export function validateObserverPaths(paths){for(const path of paths)assert.ok(OBSERVER_PATHS.has(path),`BLOCKED observer changes outside data allowlist: ${path}`)}
if(process.argv[1]&&import.meta.url===new URL(process.argv[1],'file:').href){let input='';for await(const chunk of process.stdin)input+=chunk;validateObserverPaths(input.trim()?input.trim().split('\n'):[]);console.log('PASS observer data path boundary');}
