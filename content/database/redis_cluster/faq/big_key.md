---
title: "使用redis-cli查找大key"
description: 
draft: false
weight: 4
enableToc: false
keywords: Redis 大 Key
---

本文主要介绍如何使用 redis-cli 的“**--bigkeys**”选项查找大Key。

## 背景信息

Redis 提供了 List、Hash、Zset 等复杂类型的数据结构，在使用 Redis 时可能由于 Key 设计不合理导致某个 Key 过大，致使读取、删除这些数据的操作花费过多的时间，从而对业务产生一定影响。另外，在集群模式下大 Key 的产生容易导致某个子节点的内存溢出。故我们需要找出大 Key，并对内存结构进行优化。

## 前提条件

- 已有与 Redis Cluster 实例可以互通的云服务器。

- 云服务器中已安装 Redis 客户端。安装步骤可参见[redis-cli 连接](../../manual/connect/redis_cli/)中的步骤1。

  > **说明**：
  >
  >  Redis 客户端自带 redis-cli 工具。 

## 操作步骤

1. 登录已安装 redis-cli 的云服务器。

2. 执行如下命令查找大 key。

   ```
   redis-cli -h <redis_instance_address> -a <password> -p <port> --bigkeys
   ```

   ▪︎ `<redis_instance_address>`：表示 Redis Cluster 实例的 IP 地址，请根据实际地址替换。

   ▪︎ `<port>`：表示 Redis Cluster 实例的端口号，默认为 6379。

   ▪︎  `<password>`：表示 Redis Cluster 实例的认证密码。

   ▪︎ `--bigkeys`：表示查找大 key。

   执行成功后，系统显示类似如下信息。

   ```
   $ redis-cli -h 192.168.*.* -a ****** -p 6379 --bigkeys
   
   # Scanning the entire keyspace to find biggest keys as well as
   # average sizes per key type.  You can use -i 0.1 to sleep 0.1 sec
   # per 100 SCAN commands (not usually needed).
   
   [00.00%] Biggest string found so far 'key-419' with 3 bytes
   [05.14%] Biggest list   found so far 'mylist' with 100004 items
   [35.77%] Biggest string found so far 'counter:__rand_int__' with 6 bytes
   [73.91%] Biggest hash   found so far 'myobject' with 3 fields
   
   -------- summary -------
   
   Sampled 506 keys in the keyspace!
   Total key length in bytes is 3452 (avg len 6.82)
   
   Biggest string found 'counter:__rand_int__' has 6 bytes
   Biggest   list found 'mylist' has 100004 items
   Biggest   hash found 'myobject' has 3 fields
   
   504 strings with 1403 bytes (99.60% of keys, avg size 2.78)
   1 lists with 100004 items (00.20% of keys, avg size 100004.00)
   0 sets with 0 members (00.00% of keys, avg size 0.00)
   1 hashs with 3 fields (00.20% of keys, avg size 3.00)
   0 zsets with 0 members (00.00% of keys, avg size 0.00)
   ```

   

