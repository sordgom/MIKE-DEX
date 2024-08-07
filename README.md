# Changes made

- Integrate the server with a public-facing smart contract. I chose https://etherscan.io/address/0x6Df09E975c830ECae5bd4eD9d90f3A95a4f88012 for this.
- I implemented a simple API that allows some interactions with the smart contract.
- Using this API you can fetch the latest Version, and the description of the smart contract.
- You can try it using `curl -v HTTP://localhost:3099/version` and `curl -v HTTP://localhost:3099/description`
