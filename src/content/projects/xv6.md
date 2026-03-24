---
title: xv6 Kernel Modifications
description: Custom system calls and schedulers for the XV6 operating system
tech: [C, Kernel Programming, OS]
github: https://github.com/bitmap4/xv6-mods
order: 5
---

Enhanced XV6 with system call tracking, process timer alerts, and two custom schedulers.

- `getSysCount` for tracking system call usage; `sigalarm`/`sigreturn` for CPU time alerts
- Lottery-Based Scheduling with ticket inheritance and arrival time prioritization
- Multi-Level Feedback Queue with 4 priority queues and anti-starvation boosting
