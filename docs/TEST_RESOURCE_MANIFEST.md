# Test resource and evidence manifest

## Official consequential sources
Canonical authority: published repository security advisories maintained under
ethereum/go-ethereum, retrieved via GitHub-controlled repository advisory API.
Publisher controls advisory content; neither workspace participant can publish there
merely by submitting a dapp transaction. Authority proves maintainer advisory content,
not whether the participants actually run vulnerable software or completed remediation.

| Identity | Canonical authority locator | Snapshot binding |
|---|---|---|
| GHSA-4xc9-8hmq-j652 / CVE-2024-32972 | https://api.github.com/repos/ethereum/go-ethereum/security-advisories/GHSA-4xc9-8hmq-j652 | resources.json raw and semantic projection SHA |
| GHSA-q26p-9cq4-7fc2 / CVE-2025-24883 | https://api.github.com/repos/ethereum/go-ethereum/security-advisories/GHSA-q26p-9cq4-7fc2 | resources.json raw and semantic projection SHA |

Original responses are frozen in samples/sources/. No source excerpt is fabricated.
Model receives the entire semantic projection including the full description. It
never receives a claimant report as independent implementation/CI evidence.

The first advisory describes p2p header request resource exhaustion; the second a
p2p handshake issue. Host acquisition is recorded in SOURCE_PREFLIGHT.json. This
proves host retrieval and matching revision only; GenVM fetching and real semantic judgments are now demonstrated for GHSA-4xc9-8hmq-j652. The second advisory remains host-only for semantic coverage.
No arbitrary-URL fallback or proxy copy silently becomes official authority.

## Predeclared oracles
samples/controls.json defines node scope vs hosted-RPC-only scope, two node scopes,
two remote-RPC scopes, evaluator-instruction scope and source failure expectations.
Both scenarios and expected outcomes are frozen before live testing. Real source
availability/consensus is not assumed from local fixtures.

## Controlled negative resources
Tests create explicitly synthetic changed identity/product/body, withdrawn/truncated
responses, malformed output, wrong leader kinds/quotes/binding and scope instructions.
They are controlled test doubles, not real GitHub incidents. Every behavioral case
calls the production public method and checks canonical state. Rollback harness is
not a GenVM execution engine; its controlled interleaving restores a pre-call snapshot
and cannot prove survival of a separately finalized concurrent transaction.

## Required live records
Exact deployed source hash, network/address, frozen control hash, two sender addresses,
intent and attached zero value, transaction hash, finality, majority, leader execution,
complete relevant pre/post readbacks, semantic verdict and task consequences. Evidence
index must link every tx, preserve failures and scope any retry/race observation.
Browser read-only checks and browser signing are separate coverage labels.
