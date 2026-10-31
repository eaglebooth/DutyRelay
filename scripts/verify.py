from pathlib import Path
from datetime import datetime,timezone
import hashlib,json,subprocess,sys
sys.stdout.reconfigure(encoding='utf-8',errors='replace')
root=Path(__file__).resolve().parents[1]
report={'at':datetime.now(timezone.utc).isoformat(),'scope':'Controlled public-contract harness, client helpers, lint/schema and built frontend. Not deployed GenVM or real model/SDK/browser signing proof.','source_sha256':hashlib.sha256((root/'contracts/duty_relay.py').read_bytes()).hexdigest(),'commands':[]}
for item in json.loads((root/'samples/resources.json').read_text()):
 raw=(root/'samples/sources'/ (item['id']+'.json')).read_bytes();assert hashlib.sha256(raw).hexdigest()==item['sha256'] and len(raw)==item['bytes']
release={'source_sha256':report['source_sha256'],'address':''}
existing=json.loads((root/'frontend/src/release.json').read_text());assert existing['source_sha256']==release['source_sha256'],'Update explicit source parity manifest before build'
commands=[[sys.executable,'-m','pytest','-q','-p','no:cacheprovider','tests'],[sys.executable,'-X','utf8','-m','genvm_linter.cli','check','contracts/duty_relay.py'],[sys.executable,'-X','utf8','-m','genvm_linter.cli','schema','contracts/duty_relay.py','-o','docs/schema.json'],['node','--check','scripts/live.mjs'],['node','--test','tests/client.test.mjs'],['npm.cmd' if sys.platform=='win32' else 'npm','run','build']]
for command in commands:
 print('$ '+' '.join(command),flush=True);r=subprocess.run(command,cwd=root,capture_output=True,text=True,encoding='utf-8',errors='replace');print(r.stdout);print(r.stderr,file=sys.stderr);report['commands'].append({'command':command,'exit_code':r.returncode,'stdout':r.stdout,'stderr':r.stderr});(root/'docs/local-verification.json').write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8')
 if r.returncode:raise SystemExit(r.returncode)
