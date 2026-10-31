# DutyRelay production deployment

Website: https://dutyrelay.vercel.app
Repository: https://github.com/eaglebooth/DutyRelay
Vercel production READY: dpl_bGH8vWnQGUzxYNhEva1LsiiwCZpp.

Contract: [0x215f35E477dcFb68De0E4de4C34CdA23233CbB19](https://explorer-studio.genlayer.com/address/0x215f35E477dcFb68De0E4de4C34CdA23233CbB19).
Source SHA-256: 89fa2c40db3ab112e4b980f2953bdccaec1a0a02f239c3d0296ca603c97852a1.
Human main wallet deployed; only authorized secondary wallets signed SDK tests.

[Production browser evidence](live-evidence/UI_PRODUCTION_READBACK.json) checks exact
source parity, active contract, happy-primary workspace, real advisory duty verdicts,
ACKNOWLEDGED state, accepted task and five-event timeline against canonical RPC state.
The supplied logo is present. Desktop/mobile screenshots and no JS/overflow errors
were captured on the production domain without a wallet connection or mock RPC.

[Desktop](live-evidence/ui-production-desktop.png) ·
[Mobile](live-evidence/ui-production-mobile.png) ·
[All 41 live SDK calls](LIVE_E2E_EVIDENCE.md).

This does not demonstrate browser-wallet signing. Workflow handovers do not certify
installed software, exposure or patch completion. Only the first catalog advisory
has live semantic coverage. Observed race was assessment first, stale cancel rejected,
then current-revision cancellation and terminal probe; not every scheduler ordering.
Environment files and keychain credentials are excluded from Git and Vercel uploads.
