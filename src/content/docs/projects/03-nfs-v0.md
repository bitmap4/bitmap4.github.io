---
title: Network File System
description: Custom NFS implementation in C for Operating Systems course
---

## About the Project

A distributed network file system implementation featuring a naming server architecture for coordinated file operations across multiple storage servers. Built for Operating Systems course.

[`GitHub`](https://github.com/bitmap4/nfs)

## Architecture

### Components
- **Naming Server (NM)**: Central coordinator managing file locations and client requests
- **Storage Servers (SS)**: File storage and operations handlers
- **Clients**: End-user interface for file operations

## Features

### Core Functionality
- File operations (read/write/create/delete)
- Directory operations (create/list/delete)
- Audio file streaming
- Path-based file access
- File metadata access

### Advanced Features
- Asynchronous/synchronous writes
- Multiple client support
- Error handling with status codes
- LRU caching for searches
- Data replication across storage servers
- Storage server failure detection
- Request logging and monitoring

### Optimizations
- Efficient path searching with tries/hashmaps
- Non-blocking client request handling
- Asynchronous data replication
- Concurrent file access management

## Technical Details

### Communication
- TCP sockets for reliable data transfer
- Custom protocol for client-server interaction
- ACK-based request confirmation
- STOP packet for operation completion