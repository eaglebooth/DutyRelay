# Independent review record

Reviewer inspected current contract authentication, consent, provenance, independent
semantic validator, task order, cancellation and last-mile state equality. No remaining
critical/important contract bypass found at review time.

Corrections made before source freeze:
1. Padded raw scope/title/note input could evade a strip-only size check. Raw lengths
   now bounded; direct production-method regressions added.
2. SDK audit resume reconstructed old calls with newer revisions. Labelled steps now
   retain recorded intent revisions; resume helper regression added.
3. UI poststate checks were status-only. Shared readback verifier now binds submitted
   workspace actors/scopes/title, consent digest, exact incident/revision, task assignee,
   event actor/action and handover note. Poisoned poststate client tests added.

Controlled interleaving is not a real scheduler race. Real GenVM fetch/model behavior,
SDK signers, live readback and browser-wallet signing remain deployment-dependent.

Live runner correction: rejected open_incident previously attempted a post-read of an
incident that correctly did not exist. readbackTargets now preserves the existing
pre/post locator on rejection. Regression added; original failed runner observation
retained, existing transaction hash resumed without rebroadcast. Contract unchanged.

Current runtime follow-up: 41 calls independently verified, first advisory fetch and
substantive branches demonstrated. Actual competing order was assessment first;
late-cancel and terminal safety observed. Cancel-first interleaving remains controlled.
Real read-only UI passed; browser signing remains unverified. Contract source unchanged.
