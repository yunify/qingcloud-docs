---
title: "误操作数据找回"
description: Test description
weight: 3
---

PolonDB可以找回 `update` `delete` `drop column` `rollback` 的数据。

- 准备数据

  ```sql
  -- 创建测试表
  test=# create table qc(id int, id1 int);
  CREATE TABLE
  test=# select create_distributed_table('qc', 'id');
   create_distributed_table 
  --------------------------
   
  (1 row)
  
  -- 创建误操作数据找回表，找回的数据将存储到该表中，该表不需要创建主键外键等等，只需要最基础的表结构保持一致。
  test=# create table recovery_qc as select * from qc with no data;
  CREATE TABLE AS
  test=# select create_distributed_table('recovery_qc', 'id');
   create_distributed_table 
  --------------------------
   
  (1 row)
  
  -- 确认两个表是共址表：colocationid的数值一致。
  test=# select colocationid from pg_dist_partition where logicalrelid='qc'::regclass or logicalrelid='recovery_qc'::regclass;
   colocationid 
  --------------
              1
              1
  (2 rows)
  
  ```

  

- 找回 `update` `delete` `rollback`的数据

  ```sql
  ----------------------
  -- 找回 delete 的数据，update/rollback 的恢复操作与 delete 一样，这里不再演示
  ----------------------
  -- 准备测试数据
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
  
  -- 开始恢复操作，需要将表的结构 “id int, id1 int” 填写到 pg_recoverydata 后边
  -- recovery_qc 表中只会存储
  test=# SELECT run_command_on_colocated_placements(
    'recovery_qc',
    'qc',
    $cmd$
      insert into %s select * from pg_recoverydata('%s') as t(id int, id1 int)
    $cmd$
  )
  ;
  
  -- qc 表的数据已经被 delete 操作删除掉了，新插入的 5 依然存在
  test=# select * from qc;
   id | id1 
  ----+-----
    5 |    
  (1 row)
  
  -- recovery_qc 表恢复出来了 qc 表原来删除的数据
  -- pg_recoverydata('%s'， recoveryrow => false) 可以将 qc 表的现有数据（例如 5 ）也还原到recovery_qc中
  -- pg_recoverydata('%s'， recoveryrow => false) as t(id int, id1 int，recoveryrow bool )，会增加一个recoveryrow列用于标识哪些数据是恢复出来，同样recover_qc 表也要增加 recoveryrow bool类型的结构。
  test=# select * from recovery_qc;
   id | id1 
  ----+-----
    1 |    
    4 |    
    3 |    
    2 |    
  (4 rows)
  ```

  

- 找回 `drop column` 的数据

  ```sql
  -- 清空测试数据
  test=# truncate table qc, recovery_qc;
  TRUNCATE TABLE
  test=# insert into qc(id, id1) values(1,11), (2,22), (3,33), (4,44);
  INSERT 0 4
  test=# alter table qc drop column id1;
  ALTER TABLE
  
  -- 在 drop column 后插入一个 5 的数据
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
  
  -- 我们需要恢复 id1 列的数据，因此 recovery_qc 中存在 id1 的列
  test=# select * from recovery_qc;
   id | id1 
  ----+-----
  (0 rows)
  
  -- 开始恢复数据， 通过系统表可知 attnum 为 2 的列被删除了
  test=# select attnum from pg_attribute, pg_class where attrelid = pg_class.oid and pg_class.relname='qc' and attname ~ 'dropped';
   attnum 
  --------
        2
  (1 row)
  
  -- 开始恢复数据， pg_recoverydata后的数据 id int, dropped_attnum_2 int 中，dropped_attnum_2 代表恢复attnum是2的数据。
  test=# SELECT run_command_on_colocated_placements(
    'recovery_qc',
    'qc',
    $cmd$
      insert into %s select * from pg_recoverydata('%s') as t(id int, dropped_attnum_2 int)
    $cmd$
  );
  
  -- 查看恢复后的数据
  test=# select * from qc;
   id 
  ----
    1
    5
    4
    3
    2
  (5 rows)
  
  -- 恢复列的时候会将原表的所有数据都向恢复表中存储一份，例如 5 的数据
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

  

PolonDB默认可以找回最近至少 `10000` 个事务内的数据，可以通过修改参数进行控制找回数据数据的多少。

