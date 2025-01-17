---
title: C-Shell
description: Custom shell written in C with advanced features for Operating Systems course
---

## About the Project

A feature-rich shell implementation written in C for the Operating Systems and Networks course. This shell provides core functionality similar to bash while implementing custom commands and features.

[`GitHub`](https://github.com/bitmap4/shell-osn)

## Features

### Core Shell Features
- Custom prompt showing username, hostname and current directory
- Support for ';' separated multiple commands
- Background process execution with '&' operator
- Error handling for invalid commands
- Session command history with 'log' command

### Custom Commands
- `hop`: Directory navigation with support for relative/absolute paths
- `reveal`: List files/directories with color coding and detailed info
- `proclore`: Process information display
- `seek`: File/directory search with multiple options
- `activities`: List running processes spawned by shell

### Process Management
- Background process execution and monitoring
- Process status tracking
- Signal handling (SIGINT, SIGTSTP)
- Foreground/Background process switching

### I/O Features
- Input/Output redirection (>, >>, <)
- Support for command piping
- Multiple pipe commands
- Combined redirection and piping

### Additional Features
- Custom shell configuration via .myshrc
- Process signal management with 'ping' command
- Foreground/Background process control (fg, bg)
- Session command history persistence
- Color-coded output for files and directories

## Technologies
- C Programming
- System Calls
- Process Management
- Signal Handling
- File I/O