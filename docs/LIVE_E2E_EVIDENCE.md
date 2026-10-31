# DutyRelay observed live SDK lifecycle

Contract: [0x215f35E477dcFb68De0E4de4C34CdA23233CbB19](https://explorer-studio.genlayer.com/address/0x215f35E477dcFb68De0E4de4C34CdA23233CbB19). Source SHA-256: 89fa2c40db3ab112e4b980f2953bdccaec1a0a02f239c3d0296ca603c97852a1. Checked 2026-10-31T08:07:08.088Z.

41 actual contract calls verified against authoritative calldata, zero attached value, receipt finality, consensus, execution and canonical outcomes. Two secondary wallets; deployer not used for test signing.

[Independent proof](live-evidence/independent-1793434079249.json) · [Append-only events](live-evidence/run-0x215f35e477dcfb68de0e4de4c34cda23233cbb19-primary.jsonl) · [UI readback](live-evidence/UI_LIVE_READBACK.json).

Observed semantic branches: NODE_REVIEW/NONE, two NODE_REVIEW duties, NO_ACTION, evaluator-instruction scope non-positive. Wrong consent/digest/order/assignee/revision/replay and cancellation controls preserve their relevant pre/post snapshots. Concrete race sequence is not every scheduler order. Zero-value operational workflow; handover declarations do not prove runtime patching. Source poisoning/wrong-leader injection remain controlled-only. Browser wallet signing not demonstrated.

| Step | Explorer | Execution |
|---|---|---|
| happy-create | [tx](https://explorer-studio.genlayer.com/transactions/0x8e04f1fcbcad8190c88c038b33d38afb810e25970f386fe1a9010ca66660e255) | SUCCESS |
| happy-consent | [tx](https://explorer-studio.genlayer.com/transactions/0x402b827e1cb0146dc5ba62413322fe9c2b8a2db1e479b8a23fdff0b8d79baaca) | SUCCESS |
| happy-open | [tx](https://explorer-studio.genlayer.com/transactions/0x45cdc00aca2c1d2d41a6573e0e3a3b9c2538ebcc7f1bfd01cb7167c2f9d88c02) | SUCCESS |
| happy-assess | [tx](https://explorer-studio.genlayer.com/transactions/0x509802f7e47b17ef4c5304215a56acc1ffae72b4694463a0f915f6947f7c0e49) | SUCCESS |
| happy-claim | [tx](https://explorer-studio.genlayer.com/transactions/0xacf6370faf953ed5caa08fe43bb4a7670bb9828c66eca7eb31b1a743e91d7341) | SUCCESS |
| happy-handover | [tx](https://explorer-studio.genlayer.com/transactions/0x5006895e5720fbd5647e6d43c17c536deec1493b94e0ac4f3c77dad2027eed59) | SUCCESS |
| happy-accept | [tx](https://explorer-studio.genlayer.com/transactions/0x9e5d7c3904b2862499eba611de8e77be13965befea03ca8fd1e8912dd2af77cf) | SUCCESS |
| negative-create | [tx](https://explorer-studio.genlayer.com/transactions/0x3e5d0e5cda784c99b24da9cbe2842a0df72963454ba148d7aeffa2579f300a55) | SUCCESS |
| wrong-consent-actor | [tx](https://explorer-studio.genlayer.com/transactions/0xc130c36ce1959c5d130e717ccbc2d24f2905b5356eae7da929af62bc4ad3d79b) | EXPECTED ERROR |
| wrong-consent-digest | [tx](https://explorer-studio.genlayer.com/transactions/0x49a74260ac6a824f07b38dcb3d61a0c3ff4465a429c7a8d761814d47c547619d) | EXPECTED ERROR |
| before-consent | [tx](https://explorer-studio.genlayer.com/transactions/0xf777a840d8e3a57d8d3f8d8d0c07778eb6ad476072ffc53a8a628189b17521e4) | EXPECTED ERROR |
| negative-consent | [tx](https://explorer-studio.genlayer.com/transactions/0x72e82dbca5a3d340afb3c717318adbf20f8e882ea7812baf85bcbd34eb4f2e28) | SUCCESS |
| negative-open | [tx](https://explorer-studio.genlayer.com/transactions/0xcc57148b9eebb7f809f32795d595f694202986ddcf50c2e2631f4bf397a7a579) | SUCCESS |
| duplicate-advisory | [tx](https://explorer-studio.genlayer.com/transactions/0x464bb76fcb08ed4f438894c7700533428d4371b21fc1836ad7e6f3db7b686e32) | EXPECTED ERROR |
| future-revision | [tx](https://explorer-studio.genlayer.com/transactions/0xea4004be1eabf761aadd7f260fbe575b66a8eefd3696583d316058f5cfd31fe8) | EXPECTED ERROR |
| negative-cancel | [tx](https://explorer-studio.genlayer.com/transactions/0x6c1e826547b11afecbd509901584ac09d2dcdc9750314c6f21629d5343b89b80) | SUCCESS |
| assessment-after-cancel | [tx](https://explorer-studio.genlayer.com/transactions/0xbd465b20c764e4a5d42ba392de07959ead45cbd0de31d0d627eb746768ebe8d3) | EXPECTED ERROR |
| negative-close | [tx](https://explorer-studio.genlayer.com/transactions/0x215b1866ab8a53e25dadc4f656b50b9c026fc8fa37c4239a05640caafd77c058) | SUCCESS |
| closed-admission | [tx](https://explorer-studio.genlayer.com/transactions/0x9f01a207ad5678461a73074ea6f7acf0349bb43487b1d1e5da2b5a7a182beeb2) | EXPECTED ERROR |
| joint-create | [tx](https://explorer-studio.genlayer.com/transactions/0xfe99d36f487ee504e41c585738a01e593ada9d126102f6b9160a4adbcc094a0d) | SUCCESS |
| joint-consent | [tx](https://explorer-studio.genlayer.com/transactions/0xf97f138c8ecfcc1c517cb462f386ca9f38a913108e5773eeff8d868597e4976a) | SUCCESS |
| joint-open | [tx](https://explorer-studio.genlayer.com/transactions/0xef6cef18baece45dba8201a2071a822286e0d34c35557595518b413710ab24d1) | SUCCESS |
| joint-assess | [tx](https://explorer-studio.genlayer.com/transactions/0x6d269b7075bee60b30ad8b15ba9d56773421d7c3f09a2ff8b786365fe9c341f3) | SUCCESS |
| joint-order-attack | [tx](https://explorer-studio.genlayer.com/transactions/0x50dece5ba700c611efd69cf5d2cde10efa159cd58ec5ee0308cef1f9de663470) | EXPECTED ERROR |
| joint-wrong-assignee | [tx](https://explorer-studio.genlayer.com/transactions/0xf08e70c6f50127467f69bc87c09c44c9c98a24e60b01492bad1f3258ba13e6af) | EXPECTED ERROR |
| joint-cancel | [tx](https://explorer-studio.genlayer.com/transactions/0x6bb72976fa1aab5ce026680c2c7d4c5f1c042a4b0320326b4c3337fbec0cd2a8) | SUCCESS |
| none-create | [tx](https://explorer-studio.genlayer.com/transactions/0x504c16728e35ea359e1b9f707a1760c6469bcbbeab7cf84e17e4d7cfdf9320fc) | SUCCESS |
| none-consent | [tx](https://explorer-studio.genlayer.com/transactions/0x9b79e7f67662f241b8cc0d86e4ff2b33ea979d45b64e92b7dd1f40324f2d1c30) | SUCCESS |
| none-open | [tx](https://explorer-studio.genlayer.com/transactions/0x14eff531d5c60bcfb8f287c38c8fc6266120e03b9507330dd8c6639ea89c819c) | SUCCESS |
| none-assess | [tx](https://explorer-studio.genlayer.com/transactions/0xee6fcb178fb85b5b2df07398d5e54999690eb31e805b251a6a0430ceab417c9d) | SUCCESS |
| injection-create | [tx](https://explorer-studio.genlayer.com/transactions/0x551d3dc212e97626343ed77b2ed2e85f72e171a6d435353f21d5656d26076205) | SUCCESS |
| injection-consent | [tx](https://explorer-studio.genlayer.com/transactions/0x802c145e27c16725b2142d39f2b64caec153fe6f8d46b63e926b93c315f26c18) | SUCCESS |
| injection-open | [tx](https://explorer-studio.genlayer.com/transactions/0xe0e1bfd639b06ea29296f9d20231455a0a5148f067ebc585c20c73990bb1bd37) | SUCCESS |
| injection-assess | [tx](https://explorer-studio.genlayer.com/transactions/0xed642b7a828251ad25bcb6bb5b50125bbc667b5aac1d718701ea6759e1013a3c) | SUCCESS |
| race-create | [tx](https://explorer-studio.genlayer.com/transactions/0xe23ff1a692cd25268f27f13e8f086e061459092701cd93dc1144b709de01052b) | SUCCESS |
| race-consent | [tx](https://explorer-studio.genlayer.com/transactions/0x8fa7fef31ab190fe7768ce0a2ce8d41112fa3f59b256dd7345abfaebcec8c717) | SUCCESS |
| race-open | [tx](https://explorer-studio.genlayer.com/transactions/0x9ef477c96902674e426d8fa343fd3db4b256f2599abcec0a0876d48743846f97) | SUCCESS |
| race-assess | [tx](https://explorer-studio.genlayer.com/transactions/0xc187e438c4ca3cf453db5ea8ec3d34f678ae8e5e973b1e4ad6eed775380a5420) | SUCCESS |
| race-cancel | [tx](https://explorer-studio.genlayer.com/transactions/0xa4cc8de61988ec44e6c46b99d0155535a06c02ac8fef7e8cee061a7b06a52544) | EXPECTED ERROR |
| race-close-after-assess | [tx](https://explorer-studio.genlayer.com/transactions/0x9c1ccabf3a5990a19bb6062fd83f58e1e6e7778c2a585797aac0f4beea3e770b) | SUCCESS |
| race-terminal-probe | [tx](https://explorer-studio.genlayer.com/transactions/0xedb6e29d95758262a8242075c2da26ac397ca74bdf0f5a9b7edc5354c7dbc87c) | EXPECTED ERROR |
