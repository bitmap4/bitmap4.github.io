---
title: C-Shell
description: Feature-rich shell in C with custom commands, I/O redirection, and piping
tech: [C, System Calls, Signal Handling]
github: https://github.com/bitmap4/shell-osn
order: 2
featured: true
---

Custom shell implementation with core bash-like functionality for the Operating Systems course.

- Custom commands: `hop` (navigation), `seek` (search), `reveal` (listing), `proclore` (process info)
- Background/foreground process execution with signal handling (SIGINT, SIGTSTP)
- I/O redirection, piping, and multiple pipe support
- Session history persistence and `.myshrc` configuration
- Color-coded output for files and directories
