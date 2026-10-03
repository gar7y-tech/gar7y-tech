// Synchronized from gar7y-tech/garhy-platform/packages/observability/health-contracts.mjs.
export const HEALTH_CONTRACT_REVISION='2026-09-30-v1';
export const SERVICE_HEALTH=Object.freeze({
  corporate:{url:'https://garhy.tech/',kind:'corporate'},
  controlCenter:{url:'https://app.garhy.tech/readyz',kind:'ready',service:'garhy-control-center'},
  identity:{url:'https://id.garhy.tech/readyz',kind:'identity',service:'garhy-id'},
  api:{url:'https://api.garhy.tech/readyz',kind:'ready',service:'garhy-api'},
  hana:{url:'https://garhy.ai/api/health',kind:'hana'},
  bybit:{url:'https://crypto.garhy.tech/api/bybit?action=health',kind:'crypto'},
});

export function healthMatches(contract,status,body) {
  if(status!==200) return false;
  if(contract.kind==='corporate') {
    if(typeof body!=='string'||!/<title>[^<]*GARHY TECH/i.test(body)) return false;
    return [...body.matchAll(/<link\b[^>]*>/gi)].some(([tag])=>/\brel\s*=\s*["']canonical["']/i.test(tag)&&/\bhref\s*=\s*["']https:\/\/garhy\.tech\/["']/i.test(tag));
  }
  if(!body||typeof body!=='object'||Array.isArray(body)) return false;
  if(contract.kind==='hana') return body.ok===true;
  if(contract.kind==='crypto') return body.controlReady===true&&body.bybitConfigured===true&&body.sessionStoreReady===true;
  if(body.status!=='ready'||body.service!==contract.service) return false;
  if(contract.kind==='identity') return body.issuer==='https://zuvcvsrmrhgybgwkuvfo.supabase.co/auth/v1'&&body.issuerMatches===true&&Number.isSafeInteger(body.asymmetricVerificationKeys)&&body.asymmetricVerificationKeys>0;
  return contract.kind==='ready';
}

export async function probeContract(name,contract,{fetchImpl=fetch,timeoutMs=4500}={}) {
  const start=Date.now();
  const output={name,url:contract.url,path:new URL(contract.url).pathname,contractRevision:HEALTH_CONTRACT_REVISION};
  try {
    const response=await fetchImpl(contract.url,{method:'GET',redirect:'error',cache:'no-store',headers:{'user-agent':'GARHY-Health-Contract/1.0'},signal:AbortSignal.timeout(timeoutMs)});
    const text=await response.text();
    let body=text;
    if(contract.kind!=='corporate') {try{body=JSON.parse(text)}catch{body=null}}
    return {...output,reachable:healthMatches(contract,response.status,body),status:response.status,latencyMs:Date.now()-start};
  } catch {return {...output,reachable:false,status:0,latencyMs:Date.now()-start,error:'contract_unavailable'};}
}
