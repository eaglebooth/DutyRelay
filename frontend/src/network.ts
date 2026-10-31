import {createClient} from 'genlayer-js';
import {studionet} from 'genlayer-js/chains';
import {TransactionHashVariant,type Hash} from 'genlayer-js/types';
import {addressOK,execution,txHash,POLICY} from './protocol.mjs';
import release from './release.json';
type Provider=NonNullable<NonNullable<Parameters<typeof createClient>[0]>['provider']> & {on?:(event:string,fn:()=>void)=>void;removeListener?:(event:string,fn:()=>void)=>void};
declare global {interface Window{ethereum?:Provider}}
export const client=()=>createClient({chain:studionet});
export async function read<T>(address:string,method:string,args:(string|number)[]=[]):Promise<T>{return JSON.parse(String(await client().readContract({address:address as `0x${string}`,functionName:method,args,transactionHashVariant:TransactionHashVariant.LATEST_FINAL})));}
export async function verify(address:string){
 if(!addressOK(address))throw Error('Enter a valid deployed DutyRelay address.');
 const v=await read<{name:string;version:string;policy:string;chain_id:number}>(address,'get_version');
 const bytes=new TextEncoder().encode(String(await client().getContractCode(address as `0x${string}`)));
 const hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))).map(x=>x.toString(16).padStart(2,'0')).join('');
 if(v.name!=='DutyRelay'||v.version!=='0.1.0'||v.chain_id!==61999||v.policy!==POLICY||hash!==release.source_sha256)throw Error('Deployed release/source parity mismatch.');
 return v;
}
export async function connect(){
 const p=window.ethereum;if(!p)throw Error('Install MetaMask or another compatible browser wallet to sign. Reading requires no wallet.');
 const accounts=await p.request({method:'eth_requestAccounts'}) as string[];
 if(!accounts[0])throw Error('Select a wallet account.');
 if(Number(await p.request({method:'eth_chainId'}))!==61999){
  try{await p.request({method:'wallet_switchEthereumChain',params:[{chainId:'0xf22f'}]});}
  catch(e){if((e as {code?:number}).code!==4902)throw e;await p.request({method:'wallet_addEthereumChain',params:[{chainId:'0xf22f',chainName:studionet.name,nativeCurrency:studionet.nativeCurrency,rpcUrls:[...studionet.rpcUrls.default.http],blockExplorerUrls:['https://explorer-studio.genlayer.com']}]});}
 }
 if(Number(await p.request({method:'eth_chainId'}))!==61999)throw Error('Switch to GenLayer Studionet.');return accounts[0].toLowerCase();
}
export async function send(address:string,account:string,method:string,args:(string|number)[],current:()=>boolean,progress:(hash:string)=>void){
 const p=window.ethereum;if(!p)throw Error('Connect wallet first.');
 const accounts=await p.request({method:'eth_accounts'}) as string[];
 if(accounts[0]?.toLowerCase()!==account||Number(await p.request({method:'eth_chainId'}))!==61999)throw Error('Wallet/network changed. Reconnect.');
 await verify(address);if(!current())throw Error('Selection changed before signing.');
 const hash=txHash(await createClient({chain:studionet,account:account as `0x${string}`,provider:p}).writeContract({address:address as `0x${string}`,functionName:method,args,value:0n}));progress(hash);
 for(let n=0;n<180;n++){
  if(!current())throw Error('Selection changed. Inspect saved transaction before retrying.');
  let tx;try{tx=await client().getTransaction({hash:hash as Hash});}catch{await new Promise(r=>setTimeout(r,2500));continue;}
  if(tx.statusName==='FINALIZED'){
   if(tx.from_address?.toLowerCase()!==account||tx.to_address?.toLowerCase()!==address.toLowerCase())throw Error('Receipt identity mismatch.');execution(tx);return hash;
  }
  await new Promise(r=>setTimeout(r,2500));
 }
 throw Error('Still waiting for finality. Inspect the saved hash; do not blindly resubmit.');
}
