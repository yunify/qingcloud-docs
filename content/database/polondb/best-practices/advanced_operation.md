---
title: "高阶使用"
description: 本小节主要介绍如何使用 QingCloud PolonDB 高阶功能。 
keywords: polondb 登录节点, run_command_on_shards,run_command_on_workers
weight: 10
collapsible: false
draft: false
---

## 登录节点选择

PolonDB 基于 Citus 构建，支持选择协调器节点、高性能节点和高性能只读节点登录。

- 协调器节点

   **协调器节点**可作为运维节点，支持创建用户、创建视图、创建函数，适用于大对象应用场景。创建视图示例如下：

   ```sql
   -- psql -h 协调器节点
   create view v_aa as select * from aa;
   select run_command_on_workers($cmd$ create view v_aa as select * from aa $cmd$);
   ```

    **协调器节点**还可作为业务节点使用，但是性能不如**高性能节点**，适用于较小业务场景。

- 高性能节点

   **高性能节点**是拥有超高连接数、超高性能的节点，不支持创建对象，适用于较大并对数据性能要求较高的业务场景。

- 高性能只读节点

   **高性能只读节点**充分发挥 PolonDB 硬件资源的利用率，是拥有数据超高性能的节点，适用于查询和分析数据业务场景。

## run_command_on_workers

当创建视图的 sql 不能自动传输到 Worker 节点时，可在所有 Worker 节点执行如下命令创建视图。

```sql
select run_command_on_workers($cmd$ create view v_aa as select * from aa $cmd$);
```

## run_command_on_shards

在所有分片上执行如下命令，如在 `aa` 表的所有分片上执行 `vacuum %s`， `%s` 将会替换成 `aa` 的分片表。

```sql
select run_command_on_shards('aa', 'vacuum %s');
```
