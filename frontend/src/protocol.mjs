export const EXPLORER='https://explorer-studio.genlayer.com';
export const POLICY='dutyrelay/consented-duty-queue-v1';
export const addressOK=(x)=>typeof x==='string'&&/^0x[0-9a-fA-F]{40}$/.test(x)&&!/^0x0{40}$/i.test(x);
export function txHash(x){const h=typeof x==='string'?x:x?.txId;if(!/^0x[0-9a-fA-F]{64}$/.test(h||''))throw Error('No valid transaction hash returned.');return h;}
export function execution(tx){
 if(tx?.statusName!=='FINALIZED'||tx?.result_name!=='MAJORITY_AGREE')throw Error('Finalized majority consensus not established.');
 const raw=tx?.consensus_data?.leader_receipt;const leaders=(Array.isArray(raw)?raw:Object.values(raw||{})).filter(x=>x?.mode==='leader');
 if(leaders.length!==1||leaders[0].execution_result!=='SUCCESS'||leaders[0].genvm_result?.error_code)throw Error('Contract execution failed. Inspect the transaction.');
 return true;
}
export function saved(key){try{const x=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(x)?x:[];}catch{return [];}}
