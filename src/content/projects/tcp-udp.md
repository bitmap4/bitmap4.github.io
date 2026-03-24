---
title: TCP over UDP
description: Reliable data transfer protocol built on top of UDP
tech: [C, Network Programming, Sockets]
github: https://github.com/bitmap4/tcp-udp
order: 6
---

Partial TCP implementation over UDP demonstrating reliable data transfer and packet sequencing.

- Message chunking with sequence numbers and ordered reconstruction
- ACK-based retransmission with 100ms timeout for lost packet recovery
- Non-blocking socket design for efficient communication
