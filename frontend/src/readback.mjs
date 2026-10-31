const check=(ok,msg)=>{if(!ok)throw Error('Canonical action readback mismatch: '+msg)};
export function verifyPoststate(method,args,actor,w,rows){
 check(w&&w.id===w.actors?.[0]+':'+w.id.split(':')[1],'workspace identity');
 if(method==='create_workspace'){
  check(w.id===actor+':'+args[0]&&w.state==='AWAITING_CONSENT'&&w.title===args[1].trim()&&w.actors[0]===actor&&w.actors[1]===args[2].toLowerCase()&&JSON.stringify(w.scopes)===JSON.stringify(args.slice(3,5))&&/^[a-f0-9]{64}$/.test(w.agreement_digest),'created agreement fields');return;
 }
 if(method==='accept_workspace'||method==='close_workspace'){
  check(w.id===args[0]&&w.agreement_digest===args[1]&&w.state===(method==='accept_workspace'?'ACTIVE':'CLOSED'),'agreement digest/state');
  if(method==='accept_workspace')check(actor===w.actors[1],'consenting actor');return;
 }
 const id=method==='open_incident'?args[0]+':'+args[1]:args[0];const i=rows.find(x=>x.id===id);
 check(i&&i.workspace===w.id&&i.agreement_digest===w.agreement_digest,'incident agreement identity');
 const last=i.events?.at(-1);check(last&&last.actor===actor&&last.sequence===i.revision,'event actor/revision');
 if(method==='open_incident'){check(w.id===args[0]&&i.advisory===args[1]&&i.status==='PENDING'&&i.revision===1&&last.action==='OPEN'&&last.detail===args[1]&&!i.tasks.length,'admission');return;}
 const revision=method==='advance_task'?args[2]:args[1];check(i.revision===revision+1,'revision increment');
 if(method==='assess_incident'){check(last.action==='ASSESS'&&['DISPATCHED','NO_ACTION','UNRESOLVED'].includes(i.status)&&i.assessment&&i.attempts>=1&&i.attempts<=2,'assessment');return;}
 if(method==='cancel_incident'){check(i.status==='CANCELLED'&&last.action==='CANCEL','cancellation');return;}
 if(method==='advance_task'){
  const t=i.tasks[args[1]],action=args[3];check(t&&t.assignee===w.actors[t.role]&&last.action===action&&last.detail===String(args[1]),'task identity/action');
  check(t.state===({CLAIM:'WORKING',HANDOVER:'AWAITING_ACCEPTANCE',ACCEPT:'ACCEPTED'})[action],'task state');
  if(action==='ACCEPT')check(actor!==t.assignee&&w.actors.includes(actor),'counterparty');else check(actor===t.assignee,'assignee');
  if(action==='HANDOVER')check(t.note===args[4].trim(),'handover declaration');return;
 }
 throw Error('Unsupported readback action');
}
export function recordedRevision(events,label,index,current){return events.find(e=>e.event==='intent'&&e.label===label)?.input.args[index]??current;}
export function readbackTargets(method,args,actor,workspace,incident,rejected){
 if(rejected)return {workspace,incident};
 return {workspace:method==='create_workspace'?actor.toLowerCase()+':'+args[0]:workspace,incident:method==='open_incident'?args[0]+':'+args[1]:incident};
}
