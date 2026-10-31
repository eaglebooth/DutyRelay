# Requirement → evidence

Current contract: 0x215f35E477dcFb68De0E4de4C34CdA23233CbB19.
[All 41 actual calls and independent proof](LIVE_E2E_EVIDENCE.md).

| Invariant | Controlled proof | Observed runtime proof / limit |
|---|---|---|
| Exact authoritative snapshot | official raw responses and poisoned source/parser checks | first GHSA fetched/assessed on GenVM; second host-only |
| Substantive dispatch | wrong leader, malformed output and injection controls | NODE/NONE, NODE/NODE, NONE/NONE, UNCERTAIN/NONE |
| Consent and identity | full-state auth/digest regressions | secondary SDK consent, wrong actor/digest and premature admission |
| Ordered task consequences | predecessor/self-accept/replay checks | single-duty claim/handover/counterparty accept; joint wrong-order/assignee blocked |
| Source/model fail closed | poisoned/unavailable/model errors and bounded retry | controlled-only; not fabricated as live provider failures |
| Stale late result | controlled cancel-winning interleaving | observed assess-first race, stale cancel rejected, fresh cancel and terminal probe |
| Exact frontend readback | actor/scope/revision/note and rejected admission client checks | real RPC happy state, duty, accepted task and timeline matched |
| Release identity | source SHA manifest/lint/schema/build | deployed bytes match 89fa2c40db3ab112e4b980f2953bdccaec1a0a02f239c3d0296ca603c97852a1 |
| Browser signing | compatible provider integration built | unverified; SDK is not browser-wallet signing |
| Hosted website | local desktop/mobile browser checks | Vercel production real RPC readback passed |

37 controlled contract tests and 9 client tests in local-verification.json.
Runtime effect is the task authorization workflow only, not actual vulnerability,
remediation, patch execution, CI results or external infrastructure control.
