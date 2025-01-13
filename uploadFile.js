import { create } from "ipfs-http-client";
import fs from "fs";

// Connect to local IPFS node
const ipfs = create({
  host: "127.0.0.1",
  port: 5001,
  protocol: "http",
});

const uploadFileToIPFS = async () => {
  const file = fs.readFileSync("./example.txt"); // Replace with your file
  const result = await ipfs.add(file);
  console.log("IPFS Hash:", result.path);
};

uploadFileToIPFS();
