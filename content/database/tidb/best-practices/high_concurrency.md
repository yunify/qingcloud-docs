---
title: "TiDB 高并发写入场景最佳实践"
description: 本小节主要介绍 
keyword: TiDB,高并发,最佳实践
weight: 2
collapsible: false
draft: false
---

高并发批量写入数据到 TiDB 是 TiDB 使用过程中的常见典型场景。本文阐述了该场景中的常见问题及原因，以帮助您避免因使用 TiDB 不当而影响业务开发。

> **说明**
>
> 本文中的图源及讲解依据均来源于 PingCap 官方文档，您可以参考本文档的指引进行操作实践，同时结合官方文档了解更多的细节。

## 高并发批量插入场景

高并发批量插入的场景通常出现在业务系统的批量任务中，例如清算以及结算等业务。此类场景存在以下特点：

- 数据量大

- 需要短时间内将历史数据入库

- 需要短时间内读取大量数据

这类场景对 TiDB 数据库主要的挑战如下：

- 需要短时间内将历史数据入库，写入/读取能力是否可以线性水平扩展

- 随着数据持续大并发写入，数据库性能是否稳定不衰减

 对于分布式数据库来说，除了本身的基础性能外，最重要的就是**充分利用所有节点能力，避免让单个节点成为瓶颈**。

## TiDB 数据分布原理

要解决以上挑战，您需要对 TiDB 数据切分以及调度的原理有所了解。

>**说明**
>
>这里仅做简单说明，详情可参考 [TiDB 官方讲解](https://pingcap.com/zh/blog/tidb-internal-3)。

TiDB 以 Region 为单位对数据进行切分，每个 Region 有大小限制（默认 96M）。Region 的切分方式是范围切分。每个 Region 会有多副本，每一组副本，称为一个 Raft Group。每个 Raft Group 中由 Leader 负责执行这块数据的读 & 写（TiDB 支持 [Follower-Read](https://docs.pingcap.com/zh/tidb/stable/follower-read) ）。Leader 会自动地被 PD 组件均匀调度在不同的物理节点上，用以均分读写压力。

![img](../../_images/tidb-data-overview.png) 

只要业务的写入没有 `AUTO_INCREMENT` 的主键，或没有单调递增的索引（即没有业务上的写入热点，更多细节可参阅 [关于 TiDB 的正确使用](https://zhuanlan.zhihu.com/p/25574778)），从原理上来说，TiDB 依靠这个架构可具备线性扩展的读写能力，并且可以充分利用分布式资源。从这一点看，TiDB 尤其适合高并发批量写入场景的业务。

## 快速发现热点问题

通过 TiDB Dashboard Key Visualizer（访问地址为：http://cluster:2379/dashboard）流量可视化页面可以查看数据库/表的**热力图**。

热力图显示了一个指标随时间的变化。热力图的横轴 X 是时间，纵轴 Y 则是按 Key 排序的连续 Region，横跨 TiDB 集群上所有数据库和数据表。颜色越暗 (cold) 表示该区域的 Region 在这个时间段上读写流量较低，颜色越亮 (hot) 表示读写流量越高，即越热。

以下选取了 Key Visualizer 中常见的四种热力图进行介绍。

### 均衡：期望结果

 ![img](../../_images/heat_map_1.png) 

如上图所示，热力图颜色均匀或者深色和亮色混合良好，说明读取或写入在时间和 Region 空间范围上都分布得比较均衡，访问压力均匀地分摊在所有的机器上。这种负载是最适合分布式数据库的。 

### X 轴明暗交替：需要关注高峰期的资源情况

 ![img](../../_images/heat_map_2.png) 

如上图所示，热力图在 X 轴（时间）上表现出明暗交替，但 Y 轴 (Region) 则比较均匀，说明读取或写入负载具有周期性的变化。这种情况可能出现在周期性的定时任务场景，如大数据平台每天定时从 TiDB 中抽取数据。一般来说可以关注一下使用高峰时期资源是否充裕。

### Y 轴明暗交替：需要关注产生的热点聚集程度

 ![img](../../_images/heat_map_3.png)

如上图所示，热力图包含几个明亮的条纹，从 Y 轴来看条纹周围都是暗的，这表明明亮条纹区域的 Region 有很高的读写流量，可以从业务角度观察一下是否符合预期。例如，所有业务都关联用户表的情况下，用户表的整体流量就会很高，那么在热力图中表现为亮色区域就非常合理。

另外，明亮区域的高度（Y 轴方向的粗细）非常关键。由于 TiKV 自身拥有以 Region 为单位的热点平衡机制，因此涉及热点的 Region 越多其实越能有利于在所有 TiKV 实例上均衡流量。明亮条纹越粗、数量越多则意味着热点越分散、更多的 TiKV 能得到利用；明亮条纹越细、数量越少意味着热点越集中、热点 TiKV 越显著、越需要人工介入并关注。

 

### 明亮斜线：需要关注业务模式

 ![img](../../_images/heat_map_4.png) 

如上图所示，热力图显示了明亮的斜线，表明读写的 Region 是连续的。这种场景常常出现在带索引的数据导入或者扫描阶段。例如，向自增 ID 的表进行连续写入等等。图中明亮部分对应的 Region 是读写流量的热点，往往会成为整个集群的性能问题所在。这种时候，可能需要业务重新调整主键，尽可能打散以将压力分散在多个 Region 上，或者选择将业务任务安排在低峰期。

  

## 常见热点问题的产生原因及解决办法

### 使用了连续递增主键

根据 TiDB 数据的分布原理，可以预见，如果数据表使用了自增 ID 作为 PRIMARY KEY，随着插入的压力增大，会在这张表的尾部 Region 形成热点，而且这个热点并没有办法分散到多台机器。

使用 [AUTO_RANDOM](https://docs.pingcap.com/zh/tidb/stable/auto-random) 创建数据表可以规避此类问题，但主键的连续性已无法保证。

`AUTO_RANDOM` 用法介绍：

执行建表语句时为 `a` 列指定 `AUTO_RANDOM` 属性而不是 `AUTO_INCREMENT` 属性。

```
CREATE TABLE t (a bigint PRIMARY KEY AUTO_RANDOM, b varchar(255))
```

```
CREATE TABLE t (a bigint AUTO_RANDOM, b varchar(255), PRIMARY KEY (a))
```

此时再执行形如 `INSERT INTO t(b) values..`. 的 `INSERT` 语句，`a` 列的值有如下两种情况：

- 隐式分配

  如果INSERT 语句没有指定整型主键列（a 列）的值，或者指定为 NULL，TiDB 会为该列自动分配值。该值不保证自增，不保证连续，只保证唯一，避免了连续的行 ID 带来的热点问题。

- 显式插入

  如果该 INSERT 语句显式指定了整型主键列的值，和 AUTO_INCREMENT 属性类似，TiDB 会保存该值。

  > **注意**
  >
  > 如果未在系统变量 `@@sql_mode` 中设置 `NO_AUTO_VALUE_ON_ZERO`，即使显式指定整型主键列的值为 `0`，TiDB 也会为该列自动分配值。

`AUTO_RANDOM` 的使用限制，请查阅[官方文档](https://docs.pingcap.com/zh/tidb/stable/auto-random#%E4%BD%BF%E7%94%A8%E9%99%90%E5%88%B6)。 

### 数据表预热阶段，短时间内大量数据持续写入同一 TiKV 节点

#### 问题案例

下表的结构非常简单，除了 `id` 为主键以外，没有额外的二级索引。

```
CREATE TABLE IF NOT EXISTS TEST_HOTSPOT(

id     BIGINT PRIMARY KEY,

age     INT,

user_name  VARCHAR(32),

email    VARCHAR(128)

);
```

 使用如下 SQL 批量写入数据，`id` 通过随机数离散生成。

```
INSERT INTO TEST_HOTSPOT(id, age, user_name, email) values (%v,%v,'%v','%v');
```

执行写入操作，观察各 TiKV 节点的 CPU 使用情况，会发现有明显的写入倾斜，然而此时数据表并没有使用自增 id。

#### 问题产生原因

数据表刚创建的时候，这个表在 TiKV 中只会对应为一个 Region。Region 的范围是：`[CommonPrefix + TableID, CommonPrefix + TableID + 1)`，短时间内大量数据会持续写入到同一个 Region 上。

 ![img](../../_images/tikv_region_split.png)

上图简单描述了这个过程，随着数据持续写入，TiKV 会将一个 Region 切分为多个。但因为首先发起选举的是原 Leader 所在的 Store，所以新切分好的两个 Region 的 Leader 很可能还会在原 Store 上。新切分好的 Region 2，3 上，也会重复之前发生在 Region 1 上的过程。也就是压力会密集地集中在 TiKV-Node 1 上。

在持续写入的过程中，PD 发现 Node 1 中产生了热点，会将 Leader 均分到其他的 Node 上。如果 TiKV 的节点数多于副本数的话，TiKV 会尽可能将 Region 迁移到空闲的节点上。

在持续写入一段时间后，整个集群会被 PD 自动地调度成一个压力均匀的状态，到那个时候整个集群的能力才会真正被利用起来。在大多数情况下，以上热点产生的过程是没有问题的，这个阶段属于表 Region 的预热阶段。

但是对于高并发批量密集写入场景来说，应该避免这个阶段。

#### 解决办法

为了达到场景理论中的最佳性能，可跳过这个预热阶段，直接将 Region 切分为预期的数量，提前调度到集群的各个节点中。

[Split Region](https://docs.pingcap.com/zh/tidb/stable/sql-statement-split-region) 提供了预切分 Region 的功能，即可以根据指定的参数，预先为某个表切分出多个 Region，并打散到各个 TiKV 上去。

如果表已存在，可以用 `Split Region` 命令打散 Region：

- 均匀切分

  `BETWEEN lower_value AND upper_value REGIONS region_num` 语法是通过指定数据的上、下边界和 Region 数量，然后在上、下边界之间均匀切分出 `region_num` 个 Region。

  语法如下：

  ```
  SPLIT TABLE table_name [INDEX index_name] BETWEEN (lower_value) AND (upper_value) REGIONS region_num
  ```

- 不均匀切分

  `BY value_list…` 语法将手动指定一系列的点，然后根据这些指定的点切分 Region，适用于数据不均匀分布的场景。

  语法如下：

  ```
  SPLIT TABLE table_name [INDEX index_name] BY (value_list) [, (value_list)] ...
  ```

在创建数据表时，将表配置为 Region 打散：

使用带有 `shard_row_id_bits` 的表时，如果希望建表时就均匀切分 Region，可以考虑配合 `pre_split_regions` 一起使用（`pre_split_region`s 必须小于等于 `shard_row_id_bits`）， 用来在建表成功后就开始预均匀切分 `2^(pre_split_regions)` 个 Region。

语法如下：

```
CREATE TABLE t (a INT, b INT, INDEX idx1(a)) SHARD_ROW_ID_BITS = 4 PRE_SPLIT_REGIONS = 2;
```

更多 TiDB 使用和优化技巧请移步 [AskTUG - TiDB 的问答社区](https://asktug.com/)。

