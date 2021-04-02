---
title: "数据迁移"
description: Test description
weight: 5
---



迁移数据既包括 Redis standalone 之间也包括从 Redis Standalone 到 Redis Cluster。

## 从 Redis standalone 迁移数据到 Redis cluster

Redis 4.x　提供了一个从 Redis standalone (包括旧版本 2.8.17) 迁移数据到 Redis cluster　的工具 redis-trib.rb， 请 下载 [Redis 4.x](http://download.redis.io/releases/redis-4.0.6.tar.gz)，解压后进入 Redis src目录， 执行以下命令:　
(假设 Redis standalone 的主节点 IP 为 192.168.100.11，端口为 6379，Redis cluster 其中一个节点的 IP 为 192.168.100.20，端口为 6379)。

```shell
./redis-trib.rb import --from 192.168.100.11:6379　192.168.100.20:6379 --copy
```

redis 5.x 对 shell 命令行做了些修改，需要先下载 [Redis 5.x](http://download.redis.io/releases/redis-5.0.3.tar.gz)，解压后进入 Redis src目录，执行以下命令

```shell
./redis-cli --cluster import 192.168.100.20:6379 --cluster-from 192.168.100.11:6379 --cluster-copy
```

> 运行上述命令务必添加 --copy 或者 --cluster-copy 参数，否则会导致仅迁移数据而不是复制数据

## 从 Redis cluster 迁移数据到 Redis cluster

假设您有两个 Redis cluster：

Redis cluster A：主节点为 192.168.2.31:6379,192.168.2.32:6379,192.168.2.35:6379

Redis cluster B：主节点为 192.168.2.14:6379,192.168.2.17:6379,192.168.2.19:6379

您需要将数据从 Redis cluster A 迁移到 Redis cluster B

- 迁移方式

步骤一：迁移 slots，在选择 redis-port 迁移时，该过程是必要的

通过以下[命令](https://redis.io/commands/cluster-nodes)检查 Redis cluster A 和 Redis cluster B 的 slots 分布是否一致，在不一致的情况下，可以使用 [migrateSlots.sh](https://github.com/QingCloudAppcenter/redis/tree/master/operations) 将 Redis cluster B 的 slots 分布迁移至与 Redis cluster A 一致

```shell
./redis-cli -h 192.168.2.31 cluster nodes

./redis-cli -h 192.168.2.14 cluster nodes
```

步骤二：做数据迁移

- 4.x 的用户可以使用 redis-port 来迁移

使用 [redis-port](https://github.com/CodisLabs/redis-port/releases) 来迁移，下载程序后，执行 ./redis-sync -m [源地址:端口号] -t [目标地址:端口号]，提示完成\[100%\]，即可终止程序，此工具也支持 rdb 文件导入，比较灵活，详细说明参见 https://github.com/CodisLabs/redis-port

> 注意：「源地址」与「目标地址」的 slots 分布需要一致

- 4.x 和 5.x 的用户可以通过 RDB 文件来迁移数据

    - 通过 [禁用命令的执行](../../manual/service/#禁用命令的执行) 一栏 `RDB 文件下载` 下载源集群各主节点的 RDB 文件，并保存至网络与目标集群相通的虚机中
    
    - 在虚机中下载并创建 redis-server 实例，先关闭 redis-server 实例，复制欲迁移的 RDB 文件到 redis-server 的数据目录，并重启该虚机的 redis-server 实例
    
    - 参考 [从 Redis standalone 迁移数据到 Redis cluster](#从 Redis standalone 迁移数据到 Redis cluster) 中的描述，将虚机的 redis-server 中的数据迁移至目标集群
    
    - 对其余的 RDB 文件依次按照上述步骤迁移至目标集群即可