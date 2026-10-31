# Deployment and live test gates

Human main wallet deploys contracts/duty_relay.py with **no constructor arguments**.
Agent never deploys or upgrades. No deployer admin role or test-only trap exists.
Only the two authorized secondary keychain aliases dbl-owner/dbl-adapter are loaded
by SDK runner. Keys are never logged or bundled in frontend.

Before any signing, exact code parity and get_version are checked. After deployment,
run bind-deployment.mjs to update the frontend address only after read-only parity.
Frontend reviewers can use their own coordinator and distinct responder addresses.
No real Ethereum/Arbitrum transfer is required; Studionet gas is still needed.

Run happy, negative, audit, race separately. A labelled intent without a hash stops
rather than risking rebroadcast. Saved hashes are polled; write calls are never
silently retried. Keep original unresolved/error outcomes. Source/model completed
attempts may have one explicitly labelled eligible retry, but never change the oracle
or reroll semantic uncertainty. Completed phase resume must not create new transactions.

Expected branches: single node duty, no applicable declared duty, two ordered duties,
malicious instruction scope non-positive, wrong sender/digest/revision/order/replay,
closure and competing cancellation. A synthetic poisoned source or wrong leader is
controlled-only unless actually observed live; do not label fabricated web responses
as live authority evidence. Two signers cannot prove every unrelated-wallet live attack;
those auth cases remain controlled-only unless another test signer is authorized.

Actual race helper submits competing assess/cancel without waiting for first finality,
records both receipts, and closes any remaining nonterminal thread before a terminal
bypass probe. It establishes only that observed ordering. A failed/ambiguous race
requires read-only inspection of saved hashes, never automatic resubmission.

All real transactions are indexed with explorer links in LIVE_E2E_EVIDENCE.md. The
append-only JSONL retains intent/prestate/hash/receipt/poststate. Exact calldata/value
cross-checks and an independent chain verifier are required before final release.
Browser-wallet signing and real UI readback must be checked separately after runtime
address exists; local smoke checks do not satisfy those gates.

## Observed current release
41 actual SDK calls have passed independent receipt/calldata/value/final-state checks.
Use `node scripts/verify-live.mjs` for independent read-only reconciliation and
`node scripts/check-live-ui.mjs` for real browser readback of happy-primary.
Do not rerun race submission against the same IDs; use saved receipt evidence.
Source poisoning and wrong-leader fabrication are controlled-only. Real race was
assessment first; stale cancel was rejected, fresh cancel closed it.
Browser-wallet signing and hosting remain separate gates.
