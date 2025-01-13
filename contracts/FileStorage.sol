// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FileStorage {
    struct File {
        string ipfsHash;
        string fileName;
        address owner;
    }

    mapping(string => File) public files;

    function storeFile(string memory _ipfsHash, string memory _fileName) public {
        require(bytes(_ipfsHash).length > 0, "IPFS hash is required");
        require(bytes(_fileName).length > 0, "File name is required");

        files[_ipfsHash] = File(_ipfsHash, _fileName, msg.sender);
    }

    function getFile(string memory _ipfsHash) public view returns (string memory, string memory, address) {
        File memory file = files[_ipfsHash];
        return (file.ipfsHash, file.fileName, file.owner);
    }
}
