---
title: "数据库性能"
description: 本小节主要介绍 MySQL Plus 性能常见问题。 
keywords: mysql plus 常见问题问
weight: 10
collapsible: false
draft: false
---

## CPU 占用率过高怎么办？

1. 查看监控项 `当前线程连接数`、`活跃线程连接数`并发情况。
   
   或登录数据库执行`show processlist` 确认并发情况。
   
2. 判断并发是否较高。
   
   -是，则并发太多引起 CPU 占用率过高，建议[扩容 CPU](../../manual/node_lifecycle/capacity_expansion)。

   -否，则建议下载分析慢日志。重点排查涉及聚合(count、sum、avg、max、min), 分组(group by), 排序(sort)等消耗 CPU 资源的运算。

> **说明**
> 
> 若 SQL 不好优化，可以建议扩容 CPU，提高服务器运算能力。

## MySQL 查询很慢是什么原因?

建议您先分析慢日志：

1. 连接到 MySQL 数据库执行`show engine innodb status\G`，查看数据库读写状态，重点关注最后的每秒读写情况。

   > **注意**
   >
   > 使用的是 tokudb 存储引擎，SQL 需要改为 `show engine tokudb status\G`。

2. 下载慢日志文件`mysql-slow.log`。详细操作请参考[下载日志](../../manual/mgt_log/download_log)。

3. 分析慢日志中运行很慢的 SQL，看是否能创建索引来优化，减少全表扫描。

## 内存总是占用率很高怎么办？

**问题现象**

未进行查询，重启了 MySQL，且连接全关闭了，内存占用率仍很高。

**可能原因**

MySQL 的最大内存分配情况：

```shell
key_buffer_size + query_cache_size + tmp_table_size + innodb_buffer_pool_size + innodb_additional_mem_pool_size + innodb_log_buffer_size
+ 连接数 * (read_buffer_size + read_rnd_buffer_size + sort_buffer_size+ join_buffer_size + binlog_cache_size + thread_stack)
```

- 为了达到最优的数据查询性能，数据库具备缓存机制的，MySQL 会预留65%的内存用作`innode_buffer_pool`缓存空间。执行查询操作后, 数据仍会依据缓存机制从磁盘读取和刷脏数据。
- 其他组件内存固定时，`连接数`越多，占用的内存会相对较高。
- 部分参数是累计式增加内存使用空间，例如 `innodb_buffer_pool_size` 边使用边增加使用内存，直到达到设置的上限值，再之后则根据 LRU 算法置换。

**解决办法**

- 在[配置参数](../../manual/config_para/modify_para)中，修改`innodb_buffer_pool_size`值，减少内存占用。
- [扩容](../../manual/node_lifecycle/capacity_expansion)，提高服务器运算能力。

## 业务压力大，内存占用率100%怎么办？

1. 下载并分析慢日志，分析慢日志中运行很慢的 SQL，并优化 SQL。

2. [扩容](../../manual/node_lifecycle/capacity_expansion)，提高服务器运算能力。

## 磁盘容量报警，未提示磁盘阈值怎么办？

1. MySQL 产生的 binlog 会占用一定磁盘空间，可通过清理 binlog 释放存储空间。
   
   -定期手动删除 binlog 。
   
   -设置 `expire_logs_days` 参数，适当调小（但不要小于2），以减少磁盘占用。

2. 对于从节点，除了 binlog，暂存的 relaylog 也会占用磁盘空间。一般 relaylog 占用空间不大，除非有大事务或从库压力大导致重放慢。

## MySQL主从同步机制？

MySQL主从数据复制的机制：

- 主库上提交事务会生成binlog。

- 从库上的 IO 线程会将主库的 binlog 复制到从库并写入 relay log。

- 从库上的 SQL 线程会读取 relay log，将 binlog event 应用到从库，应用完一个 relay log 会自动清理掉这个 relay log 文件。
