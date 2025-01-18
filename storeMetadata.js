import Web3 from "web3";
import contractData from "./build/contracts/FileStorage.json" assert { type: "json" };

const web3 = new Web3("http://127.0.0.1:8545"); // Ganache URL
const fileStorage = new web3.eth.Contract(
  contractData.abi,
  "0x8CA93e169486E7517fFAa3a979adC8A0846bb39f"
);

const storeFile = async () => {
  const accounts = await web3.eth.getAccounts();
  const ipfsHash = "QmUDDm1od1RaH9r5pUkBQ86nTQPjNuHPjQ4QUfwEdD5fPd"; // Replace with your IPFS hash
  const fileName = "example.txt";

  await fileStorage.methods
    .storeFile(ipfsHash, fileName)
    .send({ from: accounts[0], gas: 200000 });

  await fileStorage.methods
    .storeFile(ipfsHash, fileName)
    .send({ from: accounts[0] });
  console.log("File metadata stored on blockchain!");
};

storeFile();

// Moodle. On Tuesday. Link to quiz. 1 hour. 9-10(:30) zoom also.
