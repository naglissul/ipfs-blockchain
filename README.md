# IPFS presentation

IPFS as blockchain usecase presentation for blockchain course in TSP 2024/2025.

`ipfs-presentation.md` contains slide content. Slides can be generated with command:

```bash
marp ipfs-presentation.md --pdf
```

DO THIS IN TERMINAL NOT IN VSCODE

Ofc, prerequisites:
`npm install -g @marp-team/marp-cli`

And ofc, almost everything here is chatGPT generated :)

## Demo

Demo video on Youtube: https://youtu.be/05oWAFNru4U

> During the proccess replace the constant ids in the code.

> Also during the run proccess add/remove the `type: module` line in the `package.json` file. I know, that is not normal, but whatever.

```bash
npm install
truffle compile
ganache
truffle migrate
ipfs daemon
node uploadFile.js
node storeMetadata.js
node retrieveFile.js
```

### setup...

Prerequisites for running:

```bash
sudo apt install nodejs npm
npm install -g ganache-cli # local ETH blockchain
npm install -g truffle # smart contract manager
npm install ipfs-http-client

sudo apt update
wget https://dist.ipfs.tech/go-ipfs/v0.18.1/go-ipfs_v0.18.1_linux-amd64.tar.gz
tar -xvzf go-ipfs_v0.18.1_linux-amd64.tar.gz
cd go-ipfs
sudo bash install.sh

npm install web3
```
