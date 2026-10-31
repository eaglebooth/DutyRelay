# DutyRelay — The incident handover desk

A GenLayer dapp that turns official Geth security advisories into consented operational
duties and ordered handovers. It judges whether each declared scope has a direct
review duty; it does not assert actual software exposure, patch completion or safety.

Website: [dutyrelay.vercel.app](https://dutyrelay.vercel.app) · [GitHub](https://github.com/eaglebooth/DutyRelay)

## Current status
Deployed by the human main wallet at [0x215f35E477dcFb68De0E4de4C34CdA23233CbB19](https://explorer-studio.genlayer.com/address/0x215f35E477dcFb68De0E4de4C34CdA23233CbB19).
Exact deployed code parity verified. The frontend default is bound to this release.

- 41 actual secondary-wallet SDK calls independently verified against authoritative
  calldata, zero attached value, finality, majority, execution and final state.
- Happy path reached ACKNOWLEDGED with accepted counterparty handover.
- Real NODE_REVIEW/NONE, two NODE_REVIEW duties and NO_ACTION branches observed.
- Evaluator-instruction scope yielded semantic UNCERTAIN/NONE without tasks.
- Wrong consent/digest/revision/order/assignee, replay and closure controls passed.
- 37 controlled contract tests, 9 client tests, lint/schema and frontend build passed.
- Real RPC browser state on desktop/mobile matched canonical happy-path judgment,
  accepted task and five-event timeline. This was read-only, without wallet signing.

[Every transaction and independent proof](docs/LIVE_E2E_EVIDENCE.md) ·
[Real UI readback](docs/live-evidence/UI_LIVE_READBACK.json).

Actual race ordering: assessment succeeded first, original-revision cancel failed,
then current-revision cancel succeeded and a terminal task probe failed. This does
not prove every scheduler order; cancel-winning interleaving remains controlled-only.
Only the first catalog advisory was exercised in live semantic assessments. The second
has official host acquisition/parsing provenance but no live semantic branch yet.
Production Vercel UI passed real RPC readback; see [deployment evidence](docs/PRODUCTION_DEPLOYMENT.md). Browser-wallet signing remains unverified.
No runtime patching or infrastructure security certification is claimed.

## Architecture
Responsibility agreement → responder accepts exact digest → advisory thread →
independent semantic dispatch → ordered claim/handover/counterparty acceptance.
No research matching, source nominations, award pool, escrow or clock-dependent claims.
The dapp owns its task authorization workflow, not external infrastructure controls.

Each workspace freezes both actor addresses, both scopes, the source catalog and the
handover policy. Neither party can edit it after consent. Create a new workspace for
new scopes. Any reviewer may create their own workspace with a distinct partner.

Either participant may cancel an unfinished incident or close a workspace. Closure
makes unfinished tasks inactive; it does not rewrite immutable history or certify a
fix. Nothing is locked awaiting a disappearing counterparty; no funds are held.

## Contract
[contracts/duty_relay.py](contracts/duty_relay.py), constructor arguments **[]**.
Pinned runner v0.2.16. Ten public methods: seven writes, three reads.

GenLayer validators independently fetch exact official advisory revisions and derive
duties; validators can reject wrong leaders. Code owns identity, consent, revision,
deduplication, ordered task authorization, acceptance and terminality. Uncertainty,
source/model failure or insufficient consensus never creates an actionable duty.
Source/model failures allow at most two completed attempts; semantic uncertainty is
not retried. Consensus failure may roll back and does not itself prove a negative.

## UI
Three distinct operational views: Advisory inbox, Responsibility desk and Source
register. Exact contract source SHA is checked before writes. Submitted hashes are
saved; finalized majority and successful execution are followed by exact canonical
ID/revision/actor/action/note readback. Read-only access needs no wallet. Signing
requires a compatible browser wallet and Studionet gas; transaction attached value
is always zero.

## Build
```powershell
npm ci --ignore-scripts
python -m pip install -r requirements-dev.txt
python scripts/verify.py
npm run test:browser
npm run dev
```
Local URL: http://127.0.0.1:5189

## After human deployment
Paste the exact source into Studio and deploy with no constructor arguments. Provide
the deployed address, then run the read-only binding/preflight before SDK writes:
```powershell
node scripts/bind-deployment.mjs USER_DEPLOYED_ADDRESS
$env:DUTYRELAY_CONTRACT='USER_DEPLOYED_ADDRESS'
$env:GENLAYER_CLI_ENTRY='C:/Users/admin/AppData/Roaming/npm/node_modules/genlayer/dist/index.js'
node scripts/live.mjs preflight
node scripts/live.mjs happy
node scripts/live.mjs negative
node scripts/live.mjs audit
node scripts/live.mjs race
```
The script has no deployment/upgrade path. It refuses unknown signer addresses and
source mismatch. See [test sources](docs/TEST_RESOURCE_MANIFEST.md),
[specification](docs/SPEC.md), [threat model](docs/THREAT_MODEL.md),
[verification matrix](docs/REQUIREMENT_MATRIX.md), and [live gates](docs/LIVE_GUIDE.md).
