---
title: Network File System
description: Distributed file system with naming server architecture for coordinated operations
tech: [C, TCP Sockets, System Programming]
github: https://github.com/bitmap4/nfs
order: 1
featured: true
---

Distributed NFS implementation in C with a naming server coordinating operations across multiple storage servers.

- Multi-client support with non-blocking request handling
- Data replication across storage servers with failure detection and recovery
- LRU-cached path searching via tries and hashmaps
- Async/sync write modes with ACK-based confirmation
- Audio streaming and file metadata access
