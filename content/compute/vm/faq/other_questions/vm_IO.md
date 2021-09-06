---
title: "青云主机的 IO 限制是多少？"
description: Test description
draft: false
enableToc: false
weight: 210
---

为了保证用户之间的公平，青云对主机硬盘 IO 限制是128MB/s。 如果您的测试结果偏高，可能是操作系统的 cache 导致的，如果在 Linux 系统下， 请在 dd 命令里面使用 conv=fdatasync 参数避免操作系统 cache 对结果的影响。
