---
title: "清理MySQL binlog日志"
date: 2021-03-30T10:08:56+09:00
description:
draft: false
weight: 39
---

### 问题背景：当MySQL Plus集群的磁盘使用率大于95%后，集群会显示异常，大部分情况下是因为binlog日志过大导致。

处理方案：

### 1.选择扩容节点磁盘容量

![clean_binlog_1](/database/mysql/_images/clean_binlog_1.png)

![clean_binlog_2](/database/mysql/_images/clean_binlog_2.png)

注意：当云硬盘为企业级分布式 SAN (NeonSAN)时，扩容云硬盘空间会导致集群重启，请在业务低峰时进行；当云硬盘为非企业级分布式 SAN (NeonSAN)时，可以在线扩容云硬盘空间。

### 2.修改日志过期时间Expire_logs_days参数，默认保存7天，可选访问为2~14，可适量减小，比如3天。

![clean_binlog_3](/database/mysql/_images/clean_binlog_3.png)

### 3.手动清理部分binlog，优先恢复业务，清理binlog需谨慎操作

#### 3.1 清理指定binlog文件 ：

```
PURGE BINARY LOGS TO 'mysql-bin.010' ;
```

#### 3.2 清理某个时间点以前的binlog ：

```
PURGE BINARY LOGS BEFORE '2021-03-20 22:46:26' ;
```

#### 3.3 调小binlog的保存时间,并刷新binlog ：

```
set global expire_logs_days=2 ; flush binary logs ; (一般不建议修改)
```





