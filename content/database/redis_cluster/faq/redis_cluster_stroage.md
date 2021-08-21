---
title: "Redis Cluster 数据存储"
date: 2021-07-31T21:37:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false
---
## Redis Cluster 数据存储

### 分布式存储数据

Redis Cluster 默认是不支持 Slave 节点读或者写的，跟我们手动基于 replication 搭建的主从架构不一样的。

Redis Cluster 数据存储采用分布式存储。自动将数据进行分片，每个 master 上放一部分数据。单机 Redis 节点无法满足要求，按照分区规则把数据分到若干个子集当中。

比如，在分区规则为顺序分布时，数据为1~100，可能会出现这样的存储方式，1号到33号数据保存到节点1上，34号到66号数据保存到节点2上，67号到100号数据保存到节点3上。如下图：

![](../../_images/redis_cluster_stroage/顺序分片.png)

比较常用的数据分区算法主要有以下三种：

1.  哈希分布
2. 一致性哈希分区
3. 虚拟槽分区

### 数据分布算法

#### 一、哈希分布算法

对每个数据进行哈希运算，然后对节点数取余，根据余数来确定保存在那个节点上。
所以，同样是1~100的数据，哈希算法的结果可能是这样的。

![img](../../_images/redis_cluster_stroage/hash_分片.png)

**特点**
>配置简单：对数据进行希，然后取余  
数据节点伸缩时，导致数据迁移  
迁移数量和添加节点数据有关，建议翻倍扩容

#### 二、一致性哈希分布算法

```
该算法本质上也是一种取余，它将所有数据的 hash 值组成一个哈希环，范围为0~2^32-1，根据特定规则将 redis 节点也放到圆环的对应位置中。当有数据进来时，会根据数据的 hash 值落入到哈希环的对应的点上，如果这个点不是 redis 节点的位置，那么就会顺时针查找哈希环，并将数据存储到第一个 redis 节点上。
```

![](../../_images/redis_cluster_stroage/一致性hash_new.png)

**集群扩容**

如果集群需要在 node 和 node2 之间增加一个 node5 节点的话，那么整个集群只需要移动 node1 和 node5 之间的数据即可，如果是 node3 节点宕机了，那么需要移动的数据则是 node2 和 node3 之间的数据。

![](../../_images/redis_cluster_stroage/一致性哈希扩容.png)

**特点**  
>节点伸缩时，只影响邻近节点，但是还是有数据迁移  
可能会出现数据倾斜的问题  
翻倍伸缩，保证最小迁移数据和负载均衡


#### 三、虚拟槽分区

这是 Redis Cluster 所使用的分区算法，其原理如下:

>Redis Cluster 中有一个16384长度的虚拟槽，他们的编号为0、1、2、3……16382、16383   
> Redis Cluster 中的每个 Master 节点都会负责一部分的槽。当有某个 key 被映射到某个Master 负责的槽，那么这个 Master 负责为这个 key 提供服务。


![](../../_images/redis_cluster_stroage/cluster_slots.png)

**Redis 集群数据存储过程**
>在 Redis Cluster 中，如果想要存入一个 key-value，
这个 key 首先会通过 CRC16 算法（和16384取余），
结果会对应上0-16383之间的哈希槽（hash slot）
最后，Redis Cluster 会将 key-value 放置在对应的哈希槽中。


**Redis 集群数据获取过程**
>客户端可能会挑选任意一个 redis 实例去发送命令，每个 redis 实例接收到命令，都会计算 key 对应的 hash slot，如果在本地就在本地处理，否则返回 moved 给客户端，让客户端进行重定向。如果是使用的 redis-cli ，-c参数可以支持自动的请求重定向，redis-cli 接收到 moved 之后，会自动重定向到对应的节点执行命令。


![](../../_images/redis_cluster_stroage/redis_moved.png)

**特点**

>解耦了数据与节点之间的关系。  
可以对数据打散，又可以保证数据分布均匀

