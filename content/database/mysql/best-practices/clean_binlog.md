---
title: "清理 MySQL binlog 日志"
description: 本小节主要介绍如何清理 MySQL Plus binlog 日志。 
keyword: 数据库,MySQL PLus,关系型数据库,MySQL,日志清理, binlog 日志 
weight: 02
collapsible: false
draft: false
---

当 MySQL Plus 集群的磁盘使用率大于95%后，集群会显示异常，大部分情况下是因为 binlog 日志过大导致。

本小节主要介绍如何清理 binlog 日志。

## 步骤一：选择扩容节点磁盘容量

选择扩容节点磁盘容量，详细说明请参见[扩容集群](../../manual/node_lifecycle/capacity_expansion)。

> **注意**
> 
> 当云硬盘为企业级分布式 SAN (NeonSAN)时，扩容云硬盘空间会导致集群重启，请在业务低峰时进行；
> 
> 当云硬盘为非企业级分布式 SAN (NeonSAN)时，可以在线扩容云硬盘空间。

<img src="../../_images/expansion.png" alt="创建扩容" style="zoom:50%;" />

## 步骤二：修改日志过期时间

修改日志过期时间 **Expire_logs_days** 参数，默认保存7天，可选访问为2~14，可适量减小，比如3天。

![clean_binlog_3](/database/mysql/_images/clean_binlog_3.png)

## 步骤三：清理 binlog

手动清理部分 binlog，优先恢复业务，清理 binlog 需谨慎操作

1. 清理指定 binlog 文件。

   ```
   PURGE BINARY LOGS TO 'mysql-bin.010' ;
   ```

2. 清理某个时间点以前的 binlog。

   ```
   PURGE BINARY LOGS BEFORE '2021-03-20 22:46:26' ;
   ```

3. (一般不建议修改)调小 binlog 的保存时间，并刷新 binlog。

   ```
   set global expire_logs_days=2 ; flush binary logs ; 
   ```
