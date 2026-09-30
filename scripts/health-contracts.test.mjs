import test from 'node:test';
import assert from 'node:assert/strict';
import {SERVICE_HEALTH,healthMatches,probeContract} from './health-contracts.mjs';
test('HTTP 404, redirect, malformed JSON, wrong identity and misleading healthy statuses fail',async()=>{
  for(const c of Object.values(SERVICE_HEALTH)) for(const status of [201,204,301,401,403,404,429,500]) assert.equal(healthMatches(c,status,{status:'ready',ok:true}),false);
  assert.equal(healthMatches(SERVICE_HEALTH.api,200,{status:'ready',service:'wrong'}),false);
  assert.equal(healthMatches(SERVICE_HEALTH.identity,200,{status:'ready',service:'garhy-id',issuer:'https://zuvcvsrmrhgybgwkuvfo.supabase.co/auth/v1',issuerMatches:true,asymmetricVerificationKeys:0}),false);
  assert.equal(healthMatches(SERVICE_HEALTH.bybit,200,{ok:true,controlReady:true,bybitConfigured:false,sessionStoreReady:true}),false);
  assert.equal(healthMatches(SERVICE_HEALTH.corporate,200,'<title>GARHY TECH</title><link rel="canonical" href="https://evil.example/">'),false);
  const result=await probeContract('api',SERVICE_HEALTH.api,{fetchImpl:async()=>new Response('not-json',{status:200})});assert.equal(result.reachable,false);
});
test('service-specific readiness and static corporate canonical contracts pass with correct evidence',()=>{
  assert.equal(healthMatches(SERVICE_HEALTH.api,200,{status:'ready',service:'garhy-api'}),true);
  assert.equal(healthMatches(SERVICE_HEALTH.identity,200,{status:'ready',service:'garhy-id',issuer:'https://zuvcvsrmrhgybgwkuvfo.supabase.co/auth/v1',issuerMatches:true,asymmetricVerificationKeys:1}),true);
  assert.equal(healthMatches(SERVICE_HEALTH.hana,200,{ok:true}),true);
  assert.equal(healthMatches(SERVICE_HEALTH.bybit,200,{controlReady:true,bybitConfigured:true,sessionStoreReady:true}),true);
  assert.equal(healthMatches(SERVICE_HEALTH.corporate,200,'<title>GARHY TECH | Official</title><link href="https://garhy.tech/" rel="canonical">'),true);
});

test('active registry has exactly the six canonical contracts; store and legacy aliases are never probed',async()=>{
  const {readFile}=await import('node:fs/promises');
  const registry=JSON.parse(await readFile(new URL('../docs/data/registry.json',import.meta.url),'utf8'));
  const active=registry.systems.filter(s=>s.probe===true);
  assert.deepEqual(active.map(s=>s.id).sort(),Object.keys(SERVICE_HEALTH).sort());
  for(const system of active){assert.equal(new URL(system.url).origin,new URL(SERVICE_HEALTH[system.id].url).origin);assert.notEqual(system.id,'store');assert.notEqual(new URL(system.url).hostname,'bybit.garhy.tech');}
});
