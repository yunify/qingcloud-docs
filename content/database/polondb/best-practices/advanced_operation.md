---
title: "PolonDB 高阶使用"
description: Test description
weight: 5
---

PolonDB 基于 Citus 构建，因此参阅 Citus 相关文档可以更快速的了解 PolonDB 的使用

## PolonDB 登录节点选择

- 协调器节点

   协调器节点可以当作运维节点，创建用户/视图/函数的操作。当然也可以作为业务节点使用，但是性能不如高性能节点，适合业务较小的场景。

   - 创建视图示例：

   ```sql
   -- psql -h 协调器节点
   create view v_aa as select * from aa;
   select run_command_on_workers($cmd$ create view v_aa as select * from aa $cmd$);
   ```

   > 大对象相关内容需使用此节点
   >

- 高性能节点

   不可以进行创建对象的操作，拥有超高连接数/超高性能的节点，适合较大并对数据性能要求较高的业务。

   > 业务较大时，青云建议使用此节点

- 高性能只读节点

   可以充分发挥 PolonDB 硬件资源的利用率，可以做查询分析使用



## run_command_on_workers

在所有 worker 节点执行该指令

```sql
select run_command_on_workers($cmd$ create view v_aa as select * from aa $cmd$);
```

> 例如创建视图的 sql 不会自动传输到 Worker 节点，因此需要使用该指令在 Woker 进行创建

## run_command_on_shards

在所有分片上执行

```sql
select run_command_on_shards('aa', 'vacuum %s');
```

> 在 `aa` 表的所有分片上执行vacuum， `%s` 将会替换成 `aa` 的分片表



