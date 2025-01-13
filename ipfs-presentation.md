---
marp: true
theme: default
paginate: true
title: Decentralized File Storage with IPFS and Blockchain
---

# Decentralized File Storage

## IPFS + Blockchain

- Revolutionizing file storage and ownership
- **By:** Naglis SULIOKAS
- **Date:** 2024-01-13

---

# The Challenge

## Problems with Centralized Storage

- **Single Point of Failure**: Risk of data loss if a central server fails
- **High Maintenance Costs**: Centralized infrastructure is expensive
- **Censorship**: Central authorities can restrict access

---

## Why Blockchain Alone is Insufficient

- **Limited Storage Capacity**: Blockchain isn’t designed to store large files
- **High Costs**: Storing large data on-chain is prohibitively expensive

---

# The Solution: IPFS

## InterPlanetary File System (IPFS)

- **Decentralized Storage**: Peer-to-peer file-sharing network
- **Content Addressing**: Cryptographic hashes uniquely identify files
- **Scalability**: Handles large files without relying on blockchain

---

# How Blockchain and IPFS Work Together

## Combined Architecture

- **IPFS**: Stores file content, ensuring decentralization and scalability
- **Blockchain**: Stores metadata (file hash, ownership, and permissions)

### Advantages:

1. Immutable ownership records
2. Tamper-proof data
3. Censorship resistance

---

# Demo Walkthrough

## Step 1: Upload a File to IPFS

- File is split into chunks, hashed, and stored on IPFS
- **Command**: `uploadFile.js`
- **Output**:
  - Unique **IPFS hash**

---

## Step 2: Store Metadata on Blockchain

- Metadata (IPFS hash and file name) stored via smart contract
- **Command**: `storeFile.js`
- **Output**:
  - Transaction receipt
  - Blockchain confirmation

---

## Step 3: Retrieve Metadata and File

- Retrieve metadata from blockchain and file content from IPFS
- **Command**: `retrieveFile.js`
- **Output**:
  - Metadata: `hash`, `fileName`, `owner`
  - File Content: Decoded and displayed

---

# Use Cases

## 1. **NFTs**

- Store media files (images, videos) on IPFS
- Metadata (ownership, description) on blockchain

---

## 2. **Healthcare**

- Secure and decentralized storage of medical records
- Controlled access via smart contracts

---

## 3. **Supply Chain**

- Track product origins and authenticity
- Immutable records for transparency

---

## 4. **Intellectual Property**

- Decentralized storage of copyright-protected files
- Proof of ownership via blockchain metadata

---

# Challenges

## 1. Data Persistence

- IPFS relies on voluntary hosting of data
- **Solution**: Incentivized storage via Filecoin

---

## 2. Performance

- Slower retrieval speeds compared to centralized systems

---

## 3. Adoption

- Requires user-friendly tools and education for broader use

---

# Benefits

- **Decentralization**: Removes reliance on central servers
- **Security**: Cryptographic hashes ensure data integrity
- **Cost Efficiency**: Reduces expenses for large-scale storage
- **Censorship Resistance**: Global accessibility without restrictions

---

# Supporting Literature

### 1. **"IPFS and Blockchain for Decentralized File Storage"**

- Explores IPFS integration with Ethereum
- Source: IEEE Xplore
- [https://ieeexplore.ieee.org/document/9140747](https://ieeexplore.ieee.org/document/9140747)

---

### 2. **"FileTribe: Blockchain-based Secure File Sharing on IPFS"**

- Real-world use cases of IPFS and blockchain in file sharing
- Source: IEEE Xplore
- [https://ieeexplore.ieee.org/document/8835937](https://ieeexplore.ieee.org/document/8835937)

---

# Conclusion

- **IPFS + Blockchain** = Scalable, secure, and decentralized file storage
- Solves centralization, scalability, and ownership challenges
- **Key Takeaway**: The foundation for Web3 applications

---

# Thank You!

## Questions?
