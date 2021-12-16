---
title: "青云云服务器的 IO 限制是多少？"
description: 云服务器的 IO 限制
draft: false
weight: 210
keyword: 云计算, 青云, QingCloud, 云服务器，IO
---

为了保证用户之间的公平，青云对云服务器硬盘 IO 限制是128MB/s。 如果您的测试结果偏高，可能是操作系统的 cache 导致的，如果在 Linux 系统下， 请在 dd 命令里面使用 conv=fdatasync 参数避免操作系统 cache 对结果的影响。

