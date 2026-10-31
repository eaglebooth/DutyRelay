# DutyRelay 0.1.0 specification

## Consequential claim
For this exact immutable responsibility agreement and exact official advisory
revision, duty role 0 and/or role 1 has a documented operational review responsibility.
Consequence: only the assigned wallet may claim or hand over the generated task;
only the opposite consented wallet may accept it. If both have a duty, role 0 must
be accepted before role 1 can start. No external server or asset is controlled.

Falsifier: a duty assigned to a remote-RPC-only scope for a peer-to-peer node issue,
an unauthorized workflow transition, or a changed source/digest yielding dispatch.

## Responsibility and roles
Creator is coordinator/role0; distinct invited address is responder/role1. The
creator's proposal commits both scopes, roles, title, catalog and handover order.
Only responder accepts the exact digest. No deployer role, mutable policy or global
admin. Each creator has 32 workspaces; each current workspace has at most two unique
supported advisory threads. Scopes/title/note sizes are bounded before model/storage.

Scopes declare responsibility, not authenticated deployed infrastructure. No network
scan, dependency inventory attestation, vulnerability certificate or version-discovery
claim exists. Contract methods are nonpayable; user/SDK must attach zero value.

## Provenance and snapshots
Fixed canonical GitHub repository advisory API, two known GHSA identities. All
consequential source fields (identity, CVE, URL, summary, full description, publication,
update, withdrawal, state and complete vulnerabilities) are projected canonically;
SHA-256 is recomputed and must match the frozen release catalog. Raw API bytes and
projection digests are separate. Avatar/credit/profile metadata is not a semantic
input and is not claimed to be committed. Published state, exact object URL, expected
Go package and non-withdrawal are hard predicates. Changed/missing/oversized data
fails closed; URLs/hosts/paths/digests cannot be supplied by claimants.

The snapshot means a historical advisory revision, not a continuous current-health
monitor. An upstream revision requires a reviewed new release/catalog; the old
release stops dispatching changed source content. No wall-clock primitive is used.

## Semantic validation
Outcomes per scope: NODE_REVIEW, LIBRARY_REVIEW, NONE, UNCERTAIN. Positive kind requires
an exact source quote. Validator independently fetches and derives both duties without
seeing leader conclusions, compares consequential kinds and grounds leader quotes.
The quote need not be byte-identical between models. Free prose never controls state.
A real runtime judgment is still needed to prove this architecture works on Studionet.

## States
Workspace: AWAITING_CONSENT → ACTIVE → CLOSED (either participant may also close a
pending proposal). No reopening or scope edits.
Incident: PENDING → DISPATCHED | NO_ACTION | UNRESOLVED.
Source/model UNRESOLVED allows bounded retry; semantic uncertainty does not.
DISPATCHED → ACKNOWLEDGED only after all tasks ACCEPTED.
Nonterminal incidents may become CANCELLED; none reopen terminal states.
Closing a workspace disables unfinished incidents via effective_status
WORKSPACE_CLOSED; stored history stays unchanged.
Task: WAITING → WORKING → AWAITING_ACCEPTANCE → ACCEPTED.
The handover note is a sender-authored declaration, not objective remediation proof.

## Race/liveness
Assessment captures exact incident revision and complete workspace state. It rechecks
both immediately after nondeterministic consensus. Cancellation or workspace closure
invalidates a late result. A stalled counterpart can prevent acceptance, but either
participant can terminate the unfunded workflow. No automatic deadlines are claimed.
