---
title: "快速入门"
description: test
draft: false
---



## PolonDB 节点介绍

PolonDB 在服务器端口信息栏，提供三个节点 IP

- 协调器节点

   可以执行任何 SQL 操作的节点

- 高性能节点

   不可以进行创建对象的操作，如： `create table/create view等 `

- 高性能只读节点

   不可以进行写入的操作

   > PolonDB 高阶使用，拥有更详细介绍


## PolonDB 业务编写

> 所有操作步骤均可以通过协调器节点执行

- 通过协调器节点创建一个普通表

   ```sql
   create table aa(id int)
   ```



- 通过协调器节点将普通表转换成分布式表

   ```sql
   select create_distributed_table('aa', 'id')
   ```



- 使用分布式表

   > 修改操作在协调器节点和高性能节点均可以执行，查询操作可以在高性能只读节点进行

   ```sql
   insert into aa select generate_series(1, 10000);
   select count(*) from aa;
   ```

   

- 使用视图

   > 在协调器节点执行

   ```sql
   create view view_aa as select * from aa;
   -- 只在协调器节点创建
   
   select run_command_on_workers($cmd$ create view view_aa as select * from aa $cmd$);
   -- 在所有节点创建
   ```

   > 可以通过任意节点查询视图

   ```sql
    qingcloud=> select count(*) from view_aa;
    count 
   -------
    10000
   (1 row)
   ```

- 使用函数

   > 在协调器节点执行

   ```sql
   CREATE FUNCTION func_aa(a int) RETURNS VOID LANGUAGE SQL AS $$ insert into aa values(1) $$;
   -- 只在协调器节点创建
   
   select run_command_on_workers($cmd$ CREATE FUNCTION func_aa(a int) RETURNS VOID LANGUAGE SQL AS $$ insert into aa values(1) $$ $cmd$);
   -- 在所有节点创建
   ```

   > 在非高性能只读节点执行

   ```sql
   select func_aa();
   ```

   > 在任意节点执行

   ```sql
   qingcloud=> select count(*) from aa;
    count 
   -------
    10001
   (1 row)
   ```

   