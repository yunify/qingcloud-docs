---
title: "找回误操作丢失的数据"
description: 本小节主要介绍如何使用 QingCloud PolonDB 恢复数据。 
keywords: polondb 恢复数据
weight: 15
collapsible: false
draft: false
---

PolonDB 支持找回 `update`、 `delete`、`drop column`、 `rollback` 误操作造成丢失的数据。

> **说明**
> 
> PolonDB 默认可找回最近10000个事务内的数据，可以通过配置参数修改可找回数据量。


## 找回 update 、delete 、rollback 操作的丢失数据

以找回 `delete` 的数据为示例，`update` 和 `rollback` 的数据找回方式一致。

1.  准备测试数据。
   
    ```sql
    test=# truncate qc, recovery_qc;
    TRUNCATE TABLE
  
    test=# insert into qc(id) values(1), (2), (3), (4);
    INSERT 0 4
  
    test=# select * from qc;
     id | id1 
     ----+-----
      1 |    
      3 |    
      4 |    
      2 |    
    (4 rows)
  
    test=# delete from qc;
    DELETE 4
  
    test=# insert into qc values(5);
    INSERT 0 1
  
    test=# select * from qc;
     id | id1 
     ----+-----
      5 |    
    (1 row)
  
    test=# select * from recovery_qc;
     id | id1 
     ----+-----
    (0 rows)
    ```

2. 开始恢复操作，需要将表的结构 `id int, id1 int` 填写到 `pg_recoverydata` 。

    ```sql
    -- recovery_qc 表中只会存储。
    test=# SELECT  run_command_on_colocated_placements
    (
      'recovery_qc',
      'qc',
      $cmd$
        insert into %s select * from pg_recoverydata('%s') as t(id int, id1 int)
      $cmd$
     )
     ;
    ```

3. `qc` 表的数据已经被 `delete` 操作删除掉了，新插入的 5 依然存在。

     ```sql
      test=# select * from qc;
        id | id1 
        ----+-----
        5 |    
        (1 row)
     ```
  
4. 通过 `recovery_qc` 表恢复 `qc` 表已删除的数据。

5. 将 `qc` 表的已有数据（例如表 5 ）还原到`recovery_qc` 中。

    ```shell
    $ pg_recoverydata('%s'， recoveryrow => false)
    ```

6. `pg_recoverydata('%s'， recoveryrow => false) as t(id int, id1 int，recoveryrow bool )`，会增加一个 recoveryrow 列用于标识已恢复数据，同样recover_qc 表也会增加 recoveryrow bool 类型的结构。
   
      ```sql
      test=# select * from recovery_qc;
       id | id1 
       ----+-----
       1 |    
       4 |    
       3 |    
       2 |    
      (4 rows)
      ```

## 找回 drop column 操作的丢失数据

  1. 清空测试数据
  
     ```sql
     test=# truncate table qc, recovery_qc;
     TRUNCATE TABLE
     test=# insert into qc(id, id1) values(1,11), (2,22), (3,33), (4,44);
     INSERT 0 4
     test=# alter table qc drop column id1;
     ALTER TABLE
     ```
  
2. 在 drop column 后插入一个 5 的数据

     ```sql
     test=# insert into qc values('5');
     INSERT 0 1
     test=# select * from qc;
     id 
     ----
        1
        5
        4
        3
        2
     (5 rows)
     ```
  
3. 恢复 `id1` 列的数据，`recovery_qc` 中应存在 `id1` 的列。

     ```sql
     test=# select * from recovery_qc;
       id | id1 
       ----+-----
       (0 rows)
      ```
  
4. 开始恢复数据，通过系统表可知 attnum 为 2 的列被删除。

     ```sql
     test=# select attnum from pg_attribute, pg_class where attrelid = pg_class.oid and pg_class.relname='qc' and attname ~ 'dropped';
     attnum 
     --------
          2
     (1 row)
     ```
  
5. 开始恢复数据， pg_recoverydata后的数据 id int, dropped_attnum_2 int 中，dropped_attnum_2 代表恢复attnum是2的数据。

     ```sql
      test=# SELECT run_command_on_colocated_placements(
        'recovery_qc',
        'qc',
      $cmd$
         insert into %s select * from pg_recoverydata('%s') as t(id int, dropped_attnum_2 int)
      $cmd$
      );
      ```
  
6. 查看恢复后的数据。

     ```sql
     test=# select * from qc;
        id 
       ----
         1
         5
         4
         3
         2
       (5 rows)
    ```
  
7. 恢复列的时候会将原表的所有数据都向恢复表中存储一份，例如 5 的数据。

     ```sql
     test=# select * from recovery_qc;
      id | id1 
      ----+-----
        1 |  11
        5 |    
        4 |  44
        3 |  33
        2 |  22
      (5 rows)
     ```

## 参考：准备数据

1. 创建测试表

    ```sql
    test=# create table qc(id int, id1 int);
    CREATE TABLE
     test=# select create_distributed_table('qc', 'id');
     create_distributed_table 
     --------------------------
   
     (1 row)
   ```

2. 创建误操作数据找回表，找回的数据将存储到该表中，该表不需要创建主键外键等，只需要最基础的表结构保持一致。

   ```sql
   test=# create table recovery_qc as select *  from qc with no data;
   CREATE TABLE AS
    test=# select create_distributed_table('recovery_qc', 'id');
    create_distributed_table 
   --------------------------
   
    (1 row)
    ```
  
3. 确认两个表是共址表 `colocationid` 的数值一致。

   ```sql
    test=# select colocationid from pg_dist_partition where logicalrelid='qc'::regclass or logicalrelid='recovery_qc'::regclass;
     colocationid 
     --------------
              1
              1
    (2 rows)
   ```
