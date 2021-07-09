---
title: "节点"
description: 本小节主要介绍 QingCloud PolonDB 的节点类型。 
keywords: polondb 节点类型,协调器节点,高性能节点,高性能只读节点
weight: 4
collapsible: false
draft: false
---

PolonDB 在服务器端口信息栏，提供三个节点 IP，分别为**协调器节点**、**高性能节点**和**高性能只读节点**。


- 协调器节点

   **协调器节点**可作为运维节点，可执行任何 SQL 操作的节点，包括创建用户、创建视图、创建函数，适用于大对象应用场景。创建视图示例如下：

   ```sql
   -- psql -h 协调器节点
   create view v_aa as select * from aa;
   select run_command_on_workers($cmd$ create view v_aa as select * from aa $cmd$);
   ```

    **协调器节点**还可作为业务节点使用，但是性能不如**高性能节点**，适用于较小业务场景。

- 高性能节点

   **高性能节点**是拥有超高连接数、超高性能的节点，不支持创建对象，如： 如 `create table/create view等 `。适用于较大并对数据性能要求较高的业务场景。

- 高性能只读节点

   **高性能只读节点**不可写入操作，但充分发挥 PolonDB 硬件资源的利用率，是拥有数据超高性能的节点，适用于查询和分析数据业务场景。
