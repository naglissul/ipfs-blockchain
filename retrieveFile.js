import Web3 from "web3";
import { create as createIPFS } from "ipfs-http-client";
import contractData from "./build/contracts/FileStorage.json" assert { type: "json" };

const web3 = new Web3("http://127.0.0.1:8545");
const fileStorage = new web3.eth.Contract(
  contractData.abi,
  "0x59bb378f7b0aab3ff5ca049c260fa7ef427fd752"
);

const ipfs = createIPFS({
  host: "127.0.0.1",
  port: 5001,
  protocol: "http",
});

const retrieveFile = async () => {
  const ipfsHash = "QmUDDm1od1RaH9r5pUkBQ86nTQPjNuHPjQ4QUfwEdD5fPd"; // Replace with your IPFS hash
  const file = await fileStorage.methods.getFile(ipfsHash).call();
  console.log("Blockchain Metadata:", file);

  const chunks = [];
  for await (const chunk of ipfs.cat(ipfsHash)) {
    chunks.push(chunk); // Accumulate all chunks from the stream
  }

  const fileContent = Buffer.concat(chunks).toString(); // Convert chunks to string
  console.log("File Content:", fileContent);
};

retrieveFile();
