---
title: "表特殊操作"
description: 本小节主要介绍 PolonDB 数据库表特殊操作。 
keywords: polondb 表操作
weight: 20
collapsible: false
draft: false
---

## 表配置组

因 PolonDB 会逐表进行处理，表的处理都是独立的。为降低业务间影响，可将两个业务相关表同时处理。

在协调器节点 postgres 库，操作执行如下命令。

```sql
insert into qc_rebalance_params(dbname, group_table) values ('qctest', '1-public.a, 1-public.b, 2-public.c, 2-public.d')
insert into qc_rebalance_params(dbname, group_table) values ('qctest', '3-public.e, 3-public.f, 3-public.g')
```

在 `qctest` 库下配置了'1' '2' '3'三个组。

- ‘1’组由 public.a 和 public.b 组成。
- '2'组由 public.c 和 pulic.d 组成
- ‘3’组由 public.e 和 public.f 和 public.g 组成。

## 表优先级

因 PolonDB 会逐表进行处理，表的处理顺序会有先后之分。为降低表间相互影响，可配置表优先级，优先处理重要的表。

在协调器节点 postgres 库，执行如下命令。

```sql
insert into qc_rebalance_params(dbname, priority_table) values ('qctest', '1-public.a, 1-public.b, 2-public.c, 3-public.d)
```

在 `qctest` 库下配置了‘1‘ ’2‘ ’3‘个优先级。

- ‘1‘的优先级最高，以此类推。
- 同样优先级的情况下，前表的优先级高于后表。例如 public.a 的优先级高于 public.b 。
