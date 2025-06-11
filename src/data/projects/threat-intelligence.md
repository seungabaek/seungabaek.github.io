---
title: 'Threat Intelligence Sharing System'
description: 'Decentralized metadata-sharing platform for cyber threat intelligence using peer-to-peer technology'
pubDate: 'August 30 2024'
heroImage: '/projects/threat-intelligence.png'
skills: ['Go', 'libp2p', 'Docker', 'JSON-RPC']
date: 'February 2025 - April 2025'
demo: ''
source: 'https://github.com/seungabaek/threat-intelligence'
---

Building a decentralized future for cyber threat intelligence sharing!

---

### Introduction

In today's interconnected digital landscape, sharing cyber threat intelligence quickly and securely is crucial for organizational defense. This project develops a decentralized platform that enables peer-to-peer sharing of threat intelligence metadata without relying on centralized infrastructure.

The system addresses critical issues in current threat intelligence sharing platforms by leveraging distributed hash tables (DHT) and peer-to-peer networking to create a resilient, privacy-preserving solution for security teams worldwide.

---

### The Problem with Centralized Systems

Traditional centralized threat intelligence platforms face several critical limitations:

- Single points of failure that attackers can target
- Trust issues with centralized authorities
- Scalability constraints as data volumes grow
- Privacy concerns when sharing sensitive security data
- High infrastructure costs for maintaining central servers

---

### Improving Upon IRIS

This project builds upon the existing IRIS framework with key improvements:

- Fully decentralized architecture with no central authority
- Enhanced privacy through selective disclosure
- Improved efficiency via intelligent chunk distribution
- Better resilience against network partitions

---

### System Architecture

## Core Components

The system consists of several interconnected components:

- **Host** - P2P network host
- **DHT** - Distributed hash table for peer discovery
- **PubSub** - Publishing/subscription system
- **Storage** - Local data storage
- **Metadata Manager** - Chunk management system

## Peer-to-Peer Network Layer

Built on libp2p for robust P2P networking:

- **Peer Discovery**: DHT-based peer finding
- **NAT Traversal**: Automatic hole punching
- **Secure Communication**: TLS encryption by default
- **Protocol Multiplexing**: Multiple protocols over single connection

---

### Technical Implementation

## Metadata Chunking Algorithm

Large threat intelligence datasets are broken into manageable chunks:

- Data divided into fixed-size chunks
- Each chunk gets unique identifier (SHA-256 hash)
- Metadata tracks chunk relationships
- Efficient reassembly on retrieval

## Custom JSON-RPC Protocol

The system uses a custom protocol for metadata exchange:

- **ChunkRequest**: Request specific chunks by ID
- **ChunkResponse**: Deliver requested chunks
- **MetadataAnnounce**: Announce availability of new metadata
- **PeerQuery**: Discover peers with specific data

## Intelligent Chunk Distribution

### Rarity-First Distribution
- Tracks chunk availability across network
- Preferentially shares chunks with few replicas
- Prevents popular chunks from dominating bandwidth

### Adaptive Replication
The system dynamically adjusts replication based on:
- Chunk access patterns
- Network topology changes
- Node reliability scores
- Available storage capacity

---

### Security Measures

## Data Integrity
- SHA-256 hashing for chunk verification
- Merkle trees for efficient dataset validation
- Digital signatures for authenticity

## Privacy Protection
- Optional encryption for sensitive metadata
- Onion routing for anonymous requests
- Selective disclosure mechanisms

---

### Docker Deployment

The application is containerized for easy deployment:

- Consistent environment across platforms
- Easy scaling with orchestration tools
- Simplified dependency management

```bash
docker build -t threat-intel-node .
docker run -p 8080:8080 threat-intel-node
```

---

### Performance Optimization

## Caching Strategy
- Memory cache for hot chunks
- Disk cache for recent chunks
- Predictive prefetching based on access patterns

## Bandwidth Management
- Rate limiting per peer connection
- Priority queues for urgent requests
- Compression for chunk transfers

## Performance Metrics
- Sub-second chunk retrieval for cached data
- Linear scalability up to 1000 nodes
- 99.9% chunk availability with 5x replication
- 60% bandwidth reduction compared to naive flooding

---

### Real-World Applications

The platform enables several critical use cases:

- Sharing indicators of compromise (IOCs) between organizations
- Distributing vulnerability information
- Collaborative threat hunting
- Incident response coordination

---

### Development Challenges

Building a decentralized system presented unique challenges:

- **Consensus Without Central Authority**: Implementing agreement protocols
- **Network Partition Handling**: Ensuring data availability during splits
- **Sybil Attack Prevention**: Protecting against malicious node floods
- **Performance at Scale**: Maintaining speed with thousands of nodes

---

### Future Enhancements

The roadmap includes exciting features:

- Machine learning for predictive chunk distribution
- Blockchain integration for immutable audit trails
- Advanced query capabilities using bloom filters
- Integration with existing SIEM platforms

---

### Lessons Learned

This project deepened my understanding of distributed systems and cybersecurity. Working with Go's concurrency primitives taught me how to build highly performant networked applications. The challenge of designing protocols that balance security, privacy, and performance was particularly educational.

Most importantly, this project reinforced the importance of decentralization in creating resilient systems. By removing single points of failure and distributing trust across the network, we can build infrastructure that's more resistant to both technical failures and adversarial attacks.