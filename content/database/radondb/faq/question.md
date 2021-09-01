---
title: "常见问题"
description: 本小节主要介绍 RadonDB 常见问题。 
keywords: radondb 常见问题,
weight: 1
collapsible: false
draft: false
---


## MySQL 主节点和从节点的作用分别是什么？

**主节点**可读可写，**从节点**只可读。

## MySQL 高可用读 IP、高可用写 IP、高可用Proxy IP的作用分别是什么？

- **高可用读IP**可将请求在多个从节点和主节点（可配置是否分发给主节点）之间进行负载分发，以提高数据库的查询性能；发生从节点故障，会自动从高可用读IP列表里面摘掉故障节点IP，不影响业务查询。

- **高可用写IP**可以在主节点发生故障时自动切换到新的主节点上，提供高可用机制，以减少故障时间。

  建议写业务连接高可用写IP，读业务连接高可用读IP。

- **高可用Proxy IP**必须有Proxy节点才能使用，Proxy会根据读写、只读请求将负载分别分发到主、从节点。

## CPU 占用率过高怎么办？

1. 查看监控项 `当前线程连接数`、`活跃线程连接数`并发情况。
   
   或登录数据库执行`show processlist` 确认并发情况。
   
2. 判断并发是否较高。
   
   -是，则并发太多引起 CPU 占用率过高，建议[扩容 CPU](../../../manual/node_lifecycle/capacity_expansion)。

   -否，则建议下载分析慢日志。重点排查涉及聚合(count、sum、avg、max、min), 分组(group by), 排序(sort)等消耗 CPU 资源的运算。

> **说明**
> 
> 若 SQL 不好优化，可以建议扩容 CPU，提高服务器运算能力。

## MySQL 查询很慢是什么原因?

建议您先分析慢日志：

1. 连接到 MySQL 数据库执行`show engine innodb status\G`，查看数据库读写状态，重点关注最后的每秒读写情况。

   > **注意**
   >
   > 使用的是 tokudb 存储引擎，SQL 需要改为 `show engine tokudb status\G`。

2. 分析慢日志中运行很慢的 SQL，看是否能创建索引来优化，减少全表扫描。
