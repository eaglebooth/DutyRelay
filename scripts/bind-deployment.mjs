import {createClient} from 'genlayer-js';import {studionet} from 'genlayer-js/chains';import {readFileSync,writeFileSync} from 'node:fs';import {createHash} from 'node:crypto';
const address=process.argv[2];if(!/^0x[0-9a-fA-F]{40}$/.test(address||''))throw Error('Supply user-deployed address');
const c=createClient({chain:studionet}),local=readFileSync('contracts/duty_relay.py'),remote=Buffer.from(await c.getContractCode(address),'utf8');
const version=JSON.parse(String(await c.readContract({address,functionName:'get_version',args:[],transactionHashVariant:'latest-final'})));
if(!local.equals(remote)||version.name!=='DutyRelay'||version.version!=='0.1.0'||version.policy!=='dutyrelay/consented-duty-queue-v1')throw Error('Source/release mismatch; no frontend binding changed');
const info={address,source_sha256:createHash('sha256').update(local).digest('hex')};writeFileSync('frontend/src/release.json',JSON.stringify(info,null,2)+'\n');writeFileSync('docs/DEPLOYMENT.json',JSON.stringify({...info,chain_id:61999,verified_at:new Date().toISOString(),version},null,2)+'\n');console.log(JSON.stringify(info));
