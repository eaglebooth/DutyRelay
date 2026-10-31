"""Read-only source preflight. Never rewrites frozen fixtures or expected outcomes."""
import urllib.request,json,hashlib
from pathlib import Path
from datetime import datetime,timezone
keys=['ghsa_id','cve_id','html_url','summary','description','published_at','updated_at','withdrawn_at','state','vulnerabilities']
report={'at':datetime.now(timezone.utc).isoformat(),'scope':'Host-network GitHub API retrieval; not GenVM/validator retrieval','resources':[]}
for item in json.loads(Path('samples/resources.json').read_text()):
 req=urllib.request.Request(item['url'],headers={'User-Agent':'DutyRelay-source-preflight','Accept':'application/vnd.github+json'})
 with urllib.request.urlopen(req,timeout=30) as r:raw=r.read()
 obj=json.loads(raw);projection={k:obj[k] for k in keys};digest=hashlib.sha256(json.dumps(projection,sort_keys=True,ensure_ascii=True,separators=(',',':')).encode()).hexdigest()
 if digest!=item['semantic_sha256']:raise SystemExit('Official semantic revision changed: '+item['id']+'; stop and review new catalog/source before deployment')
 report['resources'].append({'id':item['id'],'url':item['url'],'semantic_sha256':digest,'raw_sha256_observed':hashlib.sha256(raw).hexdigest(),'semantic_revision_matches':True})
Path('docs/SOURCE_PREFLIGHT.json').write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8');print(json.dumps(report))
