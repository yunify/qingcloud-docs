---
title: "Hive 使用指南"
description: 本小节主要介绍 Hive 使用指南。 
keywords: qingmr hive
weight: 25
collapsible: false
draft: false
---


Hive 的 Hive Metastore 和 HiveServer2 服务已经在主节点配置完成（默认关闭），用户不需要手动配置。只需设置配置参数 `开启 Hive` 为 true 就可以启动这两个服务，然后即可在 Client 节点运行 Hive 命令行使用 Hive。

主节点上同时运行了 mysql 数据库服务，用于存储 Hive 的元数据（ 默认用户名和密码： hive/hive ）。

Hive 元数据可靠性要求较高时，用户可以选择使用集群外远程 mysql 数据库，只需按下述步骤创建具有相应权限的用户，然后正确设置 `使用远程 mysql 数据库`，`远程 mysql 数据库 ip`，`Hive Metastore 用户名`，`Hive Metastore 密码` 等几个配置参数即可。 ( mysql 默认只允许本地登录，请注意开启远程访问权限，一般修改配置文件 /etc/mysql/my.conf 中的 bind-address 为 0.0.0.0 或远程访问 IP 并重启 mysql 服务即可)

```shell
# 以下命令需要使用任意 mysql 客户端连接远程 mysql 数据库执行
# 创建用户：
mysql> create user '<username>'@'%' identified by '<password>';
# 授权：
mysql> grant all privileges on hive.* to '<username>'@'%';
# 刷写权限：
mysql> flush privileges;
```

如果以 spark 作为 Hive 的执行引擎 (从 QingMR 1.3.0 开始支持，且作为默认执行引擎)，在操作 Hive 之前请先在 hdfs 上创建相应的用户目录。例如若以用户 ubuntu 操作 Hive，需首先以 root 用户运行以下命令：

```shell
# 切换 root 用户请使用命令 sudo su , 密码 p12cHANgepwD
/opt/hadoop/bin/hdfs dfs -mkdir -p /user/ubuntu/
/opt/hadoop/bin/hdfs dfs -chown -R ubuntu:ubuntu /user/ubuntu/
```

## 在 Hive 数据仓库中创建一个数据库

在Hive中创建数据库需要以 root 用户身份进行操作，而在实际生产环境中，我们建议您尽量避免以 root 用户执行 Hive 语句。 因此，通过 root 身份创建数据库后，需要更改数据库的所有者。

```shell
# 在 root 下创建一个名为 test 的数据库：
/opt/hive/bin/hive -e "create database test;"

# 在 root 用户下执行下面命令将数据库 test 的拥有者更改为 ubuntu 后，即可以 ubuntu 用户执行后续操作：
/opt/hadoop/bin/hdfs dfs -chown -R ubuntu /user/hive/warehouse/test.db
```

Hive创建数据库执行成功后会显示执行时间，您也可以通过下面即将提到的命令查看已创建的数据库

## 在 Hive 的数据库中创建一张表

```shell
# 这里以默认配置下，CLI 操作为例。首先，启动 CLI ，执行( CLI 中的用户身份是启动 CLI 时 Linux 所用的用户身份)：
/opt/hive/bin/hive

# 启动之后，查看刚刚创建的数据库：
hive> SHOW DATABASES;

# 可以看到目前 Hive 数据仓库中的数据库名。切换到 test 数据库，执行：
hive> USE test;

# 在 test 数据库下创建一个 invites 表，包含两个普通列和一个分区列：
hive> CREATE TABLE invites (foo INT, bar STRING) PARTITIONED BY (ds STRING);

# 查看创建的 invites 表：
hive> SHOW TABLES;
```

## 向 Hive 中的表载入数据

```shell
# 向刚刚创建的invites表载入数据，数据源使用本地文件。
hive> LOAD DATA LOCAL INPATH '/opt/hive/examples/files/kv2.txt' OVERWRITE INTO TABLE invites PARTITION (ds='2008-08-15');
hive> LOAD DATA LOCAL INPATH '/opt/hive/examples/files/kv3.txt' OVERWRITE INTO TABLE invites PARTITION (ds='2008-08-08');
```

## 执行 HQL 查询语句

```shell
# 查找invites表中 ‘ds=2008-08-08’ 的 ‘foo’ 列的所有内容：
# 这里并没有执行结果导出语句，因此查询的结果不会保存在任何地方，只是从CLI中显示出来。
hive> SELECT a.foo FROM invites a WHERE a.ds='2008-08-08';

# 执行运算，计算invites表中，’ds=2008-08-15’的‘foo’列的平均值：
# Hive服务将自动把HQL查询语句转换为MapReduce运算，并调用Hadoop集群进行计算。您也可以在yarn监控中查看该语句的执行进度。
hive> SELECT AVG(a.foo) FROM invites a WHERE a.ds='2008-08-15';
```

## Hive 执行引擎
支持 mr 和 spark 两种执行引擎(其中 spark 引擎从 QingMR 1.3.0 开始支持，并且作为默认执行引擎)，可以通过以下方式进行切换：

- 集群级别的切换  

    在整个集群生效，具体请在配置参数页面进行切换：

![配置hive_engine](../../_images/hive_engine_switch.png)

- 会话级别的切换  

   切换到 mr 执行引擎：

```shell
# 只在当前 session 下有效
hive> set hive.execution.engine=mr;
```
切换到 spark 执行引擎：
```shell
# 只在当前 session 下有效
hive> set hive.execution.engine=spark;
```

>以 spark 作为 hive 的执行引擎时，对 cpu 、内存等硬件资源的要求较高，请注意根据业务情况对集群进行扩容。

## Hive 中使用 LZO 压缩

Hive 从 QingMR 2.0.0 开始支持 lzo 压缩：

```shell
# 创建支持 lzo 压缩的表
hive> use test;
hive> create table invites_lzo (foo int, bar string) partitioned by (ds string) 
    > row format delimited fields terminated by '\t' 
    > stored as inputformat "com.hadoop.mapred.DeprecatedLzoTextInputFormat" 
    > outputformat "org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat";

# 写入数据 (请先参考 3.3 向 invites 表写入数据)
hive> set hive.exec.dynamic.partition=true;
hive> set hive.exec.dynamic.partition.mode=nonstrict;
hive> set hive.exec.compress.output=true;
hive> set mapreduce.output.fileoutputformat.compress.codec=com.hadoop.compression.lzo.LzopCodec;
hive> set mapreduce.output.fileoutputformat.compress=true;
hive> insert overwrite table invites_lzo partition(ds) select foo, bar, ds from invites;
```

## 通过 beeline 执行 HQL

beeline 是 Hive 的另一命令行客户端工具，后续将替代 Hive Cli 。 beeline 支持远程模式和嵌入模式：嵌入模式下，运行嵌入式的 Hive (类似于 Hive Cli)，直接编译 HQL，然后访问 MetaStore 、 提交作业；远程模式下，通过 Thrift 提交 HQL 到 HiveServer2 服务，由 HiveServer2 编译 HQL、 访问 MetaStore 和提交作业。 推荐使用远程模式，该模式下不需要直接访问 hdfs 和 MetaStore ，更为安全。

- 远程模式  

```shell
# 以远程模式启动，将连接到 hiveserver2 服务，请在 Linux 命令行下执行下面命令（非 Hive 命令行）
beeline -u jdbc:hive2://<主节点IP>:10000 -n ubuntu
# 启动之后可以执行 hql
0: jdbc:hive2://<主节点IP>:10000> show databases;
```

- 嵌入模式  

```shell
# 以嵌入模式启动，类似 Hive Cli, 请在 Linux 命令行下执行下面命令（非 Hive 命令行）
beeline -u jdbc:hive2:///
# 启动之后可以执行 hql
0: jdbc:hive2:///> show databases;
```

> 说明
>
> 以 beeline 远程模式提交到 HiveServer2 服务的 hql 任务，可在 HiveServer2 WEB UI (http://<主节点IP\>:10002) 界面上看到相应的运行信息。
>
> 退出 beeline 请使用命令 `!quit`, 输入 `!help` 查看更多 beeline 命令。
