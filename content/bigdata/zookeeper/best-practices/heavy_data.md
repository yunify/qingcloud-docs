---
title: "大数据量配置"
description: ZooKeeper 数据量较大时最佳实践
keyword: ZooKeeper,数据量较大
weight: 10
collapsible: false
draft: false
---


在向 Zookeeper 中写入数据量比较大时：
- **不要使用过多的节点**，使用过多的节点可能会导致数据同步超时，部分节点无法启动服务。
- 同时可能需要增大 ticktime 或者增加 initlimit和synclimit 的值，来确保数据能够和副本同步成功。