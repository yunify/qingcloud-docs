---
title: "Hive 与 QingStor 集成"
description: 本小节主要介绍如何Hive 与 QingStor 集成。 
keywords: qingmr， Hive 与 QingStor ,
weight: 50
collapsible: false
draft: false
---


## 基于 QingStor 的存储引擎

1. 创建以 QingStor 为默认存储引擎的 Database。

   在 QingStor 的 bucket 中创建一个目录，这里命名为 test_s3 ，然后创建 Database。

   ```shell
   $ hive> create database test_s3 location 's3a://<your_bucket_name>/test_s3';
   ```

2. 在以 QingStor 为默认存储引擎的 Database 中创建 Table 。

   创建table，并载入测试数据。
   
   ```shell
   $ hive> use test_s3;
   $ hive> CREATE TABLE invites (foo INT, bar STRING) PARTITIONED BY (ds STRING);
   $ hive> LOAD DATA LOCAL INPATH '/opt/hive/examples/files/kv2.txt' OVERWRITE INTO TABLE invites PARTITION (ds='2008-08-15');
   $ hive> LOAD DATA LOCAL INPATH '/opt/hive/examples/files/kv3.txt' OVERWRITE INTO TABLE invites PARTITION (ds='2008-08-08');
   ```

3. 执行查询.

   ```shell
   $ hive> SELECT * FROM invites LIMIT 10;
   $ hive> SELECT avg(a.foo) FROM invites a WHERE a.ds='2008-08-15';
   ```

## 基于 HDFS 的存储引擎

创建以 HDFS 为默认存储引擎的 Database ，并创建基于 QingStor 的外部表（使用示例 2 通过 Hive 导入 QingStor 的数据）。

1. 在 root 下创建一个名为 test 的数据库：

   ```shell
   $ /opt/hive/bin/hive -e "create database test_hdfs;"
   ```

2. 在 root 用户下执行下面命令,将数据库 test_hdfs 的拥有者更改为 ubuntu 后，即可以 ubuntu 用户执行后续操作。

   ```shell
   $ /opt/hadoop/bin/hdfs dfs -chown -R ubuntu /user/hive/warehouse/test_hdfs.db
   ```

3. 创建基于 QingStor 的外部表，并加入已有 partition。

   ```shell
   $ hive> use test_hdfs;
   $ hive> CREATE EXTERNAL TABLE IF NOT EXISTS invites_s3 (foo INT, bar STRING) PARTITIONED BY (ds STRING)     Location 's3a://<your_bucket_name>/test_s3/invites';
   $ hive> ALTER TABLE invites_s3 ADD PARTITION (ds='2008-08-15');
   $ hive> ALTER TABLE invites_s3 ADD PARTITION (ds='2008-08-08');
   ```

## 将 QingStor 数据导入 HDFS

将 QingStor 中的数据导入以 HDFS 为存储的 Hive 表中。

1. 创建以 HDFS 为存储的 Hive 表

   ```shell
   $ hive> CREATE TABLE IF NOT EXISTS invites (foo INT, bar STRING) PARTITIONED BY (ds STRING);
   ```

2. 数据导入时，为了动态创建分区，设置 `hive.exec.dynamic.partition.mode=nonstrict`。
   
   为了防止误操作导致动态创建大量分区，一般情况下应使用默认配置 `hive.exec.dynamic.partition.mode=strict`。

   ```shell
   $ hive> set hive.exec.dynamic.partition.mode=nonstrict;
   ```

3. 将 QingStor 中的数据导入。

   ```shell
   $ hive> INSERT OVERWRITE table invites partition (ds) select se.foo,se.bar,se.ds from invites_s3 se;
   ```
