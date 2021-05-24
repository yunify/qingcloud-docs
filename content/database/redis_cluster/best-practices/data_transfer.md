---
title: "数据迁移"
description: 本小节主要介绍 Redis Cluster 数据迁移。 
keywords: redis cluster 数据迁移,
data: 2021-05-14T00:38:25+09:00
weight: 1
collapsible: false
draft: false
---



Redis Cluster 支持 Redis Cluster 之间数据迁移，同时支持从 Redis Standalone 迁移数据到 Redis Cluster。

## 从 Redis Standalone 迁移数据到 Redis Cluster

 Redis 提供了从 Redis Standalone (包括 2.8.17 版本) 迁移数据到 Redis Cluster　的工具 `redis-trib.rb`。
 
- [Redis 4.x](http://download.redis.io/releases/redis-4.0.6.tar.gz) 
  
- [Redis 5.x](http://download.redis.io/releases/redis-5.0.3.tar.gz) 
   > 在 Redis 5.x 包执行 shell 命令时需添加 `--copy` 或者 `--cluster-copy` 参数，否则会导致仅迁移数据而不是复制数据。


1. 下载 Redis 包。
2. 解压 Redis 4.x 包。
3. 在 Redis `src` 目录， 执行以下命令:　

    **Redis 4.x**
    ```shell
    ./redis-trib.rb import --from 192.168.100.11:6379　192.168.100.20:6379 --copy
    ```
    **Redis 5.x**
    ```shell
    ./redis-cli --cluster import 192.168.100.20:6379 --cluster-from 192.168.100.11:6379 --cluster-copy
    ```
      
   其中： Redis Standalone 的主节点 IP 为 192.168.100.11，端口为 6379。Redis Cluster 其中一个节点的 IP 为 192.168.100.20，端口为 6379。

## Redis Cluster 之间数据迁移

以将数据从 Redis Cluster A 迁移到 Redis cluster B 为例。

Redis Cluster A：主节点为 192.168.2.31:6379、192.168.2.32:6379、192.168.2.35:6379

Redis Cluster B：主节点为 192.168.2.14:6379、192.168.2.17:6379、192.168.2.19:6379

### redis-port 迁移方式

> 仅适用于 Redis 4.x 版本迁移数据。
  
1. 在选择 redis-port 迁移 slots 时，需先通过[集群节点命令](https://redis.io/commands/cluster-nodes)检查 A 和 B 的 slots 分布是否一致。

   ```shell
   ./redis-cli -h 192.168.2.31 cluster nodes

   ./redis-cli -h 192.168.2.14 cluster nodes
   ```
   
   > 注意：
   > `源地址`与`目标地址`的 slots 分布必须一致。
   > 在不一致的情况下，可以参考 [migrateSlots.sh](https://github.com/QingCloudAppcenter/redis/tree/master/operations) 将 B 的 slots 分布迁移至与 A 一致。

2. 迁移数据。
   
   下载并安装 [redis-port](https://github.com/CodisLabs/redis-port/releases) 程序。
   
   执行如下命令，迁移数据。

    `./redis-sync -m [源地址:端口号] -t [目标地址:端口号]`

    回显信息提示完成100%时，即可终止程序。
   
   > `redis-port`工具也支持 [RDB 文件方式导入](https://github.com/CodisLabs/redis-port)。

### RDB 文件迁移方式

> 仅适用于 Redis 4.x 和 Redis 5.x 版本迁移数据。

1. 通过 [禁用命令的执行](../../manual/service/#禁用命令的执行) 一栏 `RDB 文件下载` 下载源集群各主节点的 RDB 文件，并保存至网络与目标集群相通的虚机中。
    
2. 在虚机中下载并创建 `redis-server` 实例。
   
   先关闭 `redis-server` 实例，复制待迁移的 RDB 文件到 `redis-server` 的数据目录，并重启该虚机的 `redis-server` 实例。
    
3. 参考[从 Redis Standalone 迁移数据到 Redis Cluster](#从-redis-standalone-迁移数据到-redis-cluster))，将 `redis-server` 中的数据迁移至目标集群。
    
4. 参考1～3，依次将 RDB 文件迁移至目标集群。
   