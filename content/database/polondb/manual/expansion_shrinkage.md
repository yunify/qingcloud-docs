---
title: "扩容缩容"
description: test
weight: 6
draft: false
---

## PolonDB 纵向扩容缩容

![image-ZhiLing](../../_images/image-ZhiLing.png)

* 点击 `扩容集群` ，并根据提示进行扩容

## PolonDB 横向扩容缩容

### 前提条件

- `wal_level` 需设置为 `logical` （默认 `replica` ）。
- `logical_replication_polondb` 需设置为 `true` （默认 `true` ）

### 扩容方法

点击 `新增节点` ，输入需要新增加的节点数量即可新增 Worker 节点。

![image-addNode](../../_images/image-AddNode.png)

### 缩容方法

选择需要删除的节点，点击 `删除` 即可，主节点与副本节点需同时选中，只能删除 Worker 节点。

![image-removeNode](../../_images/image-RemoveNode.png)

### 扩容缩容的影响
在扩容缩容运行的期间会对业务造成极其微小的影响，以提供其最大可用性，具体如下:

- 极其微短的时间会提示表不存在的错误。
- 可能会提示连接异常断开的错误。

### 特殊操作说明
#### 配置组

PolonDB 会逐表进行处理，因此表的处理都是独立的

- 当需要将两个业务相关表同时处理，以降低最小影响时。

```sql
-- 在协调器节点 postgres 库操作

insert into qc_rebalance_params(dbname, group_table) values ('qctest', '1-public.a, 1-public.b, 2-public.c, 2-public.d')
insert into qc_rebalance_params(dbname, group_table) values ('qctest', '3-public.e, 3-public.f, 3-public.g')

-- 我们在 qctest 库下配置了'1' '2' '3'三个组，‘1’组由 public.a 和 public.b 组成，'2'组由 public.c 和 pulic.d 组成，‘3’组由 public.e 和 public.f 和 public.g 组成
```

#### 处理顺序优先级

PolonDB 会逐表进行处理，因此表的处理顺序会有先后之分

- 当需要优先处理重要的表，以降低最小影响时，可以配置优先级

```sql
-- 在协调器节点 postgres 库操作
insert into qc_rebalance_params(dbname, priority_table) values ('qctest', '1-public.a, 1-public.b, 2-public.c, 3-public.d)

-- 我们在 qctest 库下配置了‘1‘ ’2‘ ’3‘个优先级（1的优先级最高，以此类推），同样优先级的情况下前表的优先级高于后表（ public.a 的优先级高于 public.b )
```


