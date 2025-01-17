---
title: TCP over UDP
description: Implementation of TCP features using UDP protocol
---

## About the Project

A partial implementation of TCP functionality built on top of UDP, demonstrating core networking concepts like reliable data transfer and packet sequencing.

[`GitHub`](https://github.com/bitmap4/tcp-udp)

## Features

### Data Sequencing
- Message chunking with sequence numbers
- Fixed chunk size implementation
- Total chunks tracking
- Ordered data reconstruction

### Reliability
- ACK packet implementation
- 100ms retransmission timeout
- Out-of-order packet handling
- Lost packet recovery
- Non-blocking socket design

## Usage

Compile server and client executables:
```bash
make
```

Start server:
```bash
./server
```

Run client:
```bash
./client
```