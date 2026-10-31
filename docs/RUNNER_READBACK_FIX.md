# Rejected-admission runner readback correction

The before-consent transaction correctly failed. The runner then attempted
get_incident for the forbidden newly proposed ID, which did not exist, producing a
read-only gen_call execution error. The contract itself required no source change.

Transaction: [0xf777a840d8e3a57d8d3f8d8d0c07778eb6ad476072ffc53a8a628189b17521e4](https://explorer-studio.genlayer.com/transactions/0xf777a840d8e3a57d8d3f8d8d0c07778eb6ad476072ffc53a8a628189b17521e4).

Correction: derive a new incident readback locator only for successful admission.
For rejection compare the existing workspace/incident pre/post locator. A client
regression calls the production helper for successful and rejected admission.
Resume polled the exact saved hash and added readback verification; no duplicate
transaction was broadcast. Original append-only intent/receipt records remain.
