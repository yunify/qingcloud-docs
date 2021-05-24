---
title: "快速使用 PolonDB 数据库功能"
description: 本小节主要介绍如何快速使用 QingCloud PolonDB 。 
keywords: polondb 数据库
data: 2021-05-14T00:38:25+09:00
weight: 10
collapsible: false
draft: false
---



本小节主要介绍如何快速使用 PolonDB 数据库，包括创建表、管理表、管理视图、管理函数等。

> PolonDB 数据库所有操作均可以通过**协调器节点**执行。

## 创建普通表

通过**协调器节点**创建一个普通表。

   ```sql
   create table aa(id int)
   ```

## 转换普通表为分布式表

通过**协调器节点**将普通表转换成分布式表。

   ```sql
   select create_distributed_table('aa', 'id')
   ```

## 管理分布式表

修改操作在**协调器节点**和**高性能节点**均可以执行，查询操作可以在**高性能只读节点**进行。

   ```sql
   insert into aa select generate_series(1, 10000);
   select count(*) from aa;
   ```

## 管理视图

在**协调器节点**执行。

- 只在协调器节点创建视图。

   ```sql
   create view view_aa as select * from aa;
   ```

- 在所有节点创建视图。
    ```sql  
   select run_command_on_workers($cmd$ create view view_aa as select * from aa $cmd$);
   ```

- 可以通过任意节点查询视图。

   ```sql
    qingcloud=> select count(*) from view_aa;
    count 
   -------
    10000
   (1 row)
   ```

## 管理函数

在协调器节点执行。

- 只在协调器节点创建函数。
   
   ```sql
   CREATE FUNCTION func_aa(a int) RETURNS VOID LANGUAGE SQL AS $$ insert into aa values(1) $$;
   ```

- 在所有节点创建函数。

    ```sql  
   select run_command_on_workers($cmd$ CREATE FUNCTION func_aa(a int) RETURNS VOID LANGUAGE SQL AS $$ insert into aa values(1) $$ $cmd$);
   ```

- 在**非高性能只读节点**执行。

   ```sql
   select func_aa();
   ```

- 在任意节点执行。

   ```sql
   qingcloud=> select count(*) from aa;
    count 
   -------
    10001
   (1 row)
   ```
  