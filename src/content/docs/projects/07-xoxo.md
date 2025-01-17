---
title: Network Tic-Tac-Toe
description: Multiplayer Tic-Tac-Toe implementation using TCP and UDP protocols
---

## About the Project

A client-server implementation of Tic-Tac-Toe that allows two players to play over a network. Implemented separately using both TCP and UDP protocols.

[`GitHub`](https://github.com/bitmap4/xv6-network)

## Features

### Game Implementation
- 3x3 game board representation
- Turn-based gameplay
- Win/Draw detection
- Play again functionality

### Networking Features
- Client-server architecture
- Real-time game state updates
- Player synchronization
- Connection management
- Both TCP and UDP implementations

## Usage

1. Compile the server and client executables:
```bash
make
```

2. Start the server:
```bash
./server
```

3. Connect two clients:
```bash
./client
```