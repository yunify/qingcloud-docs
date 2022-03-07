---
title: "操作使用类 FAQ"
description: 本小节主要介绍 TiDB 操作使用中的常见问题。
keyword:   TiDB, 常见问题, FAQ
draft: false
weight: 5
---

## 如何访问我创建的 TiDB 集群？

- 客户端接入地址：mysql://instance:4000

- TiDB DashBoard：http://instance:2379/dashboard

    - 默认用户名：root
    - 默认密码：数据库 root 用户的密码

- Grafana：http://instance:3000/
    
    - 默认用户名：admin
    - 默认密码：admin

- Prometheus：http://instance:9090/ 
    
    浏览器直接访问，无需用户名及密码。
    

## TiDB 是否支持 XA？

虽然 TiDB 的 JDBC 驱动是 MySQL JDBC (Connector / J)，但是当使用 Atomikos 的时候，数据源需要要配置成类似这样：`type="com.mysql.jdbc.jdbc2.optional.MysqlXADataSource"`。

MySQL JDBC XADataSource 连接 TiDB 的模式目前是不支持的。MySQL JDBC 中配置好的 XADataSource 模式，只对 MySQL 数据库起作用（DML 去修改 redo 等）。

Atomikos 配好两个数据源后，JDBC 驱动都要设置成 XA 模式，然后 Atomikos 在操作 TM 和 RM (DB) 的时候，会通过数据源的配置，发起带有 XA 指令到 JDBC 层。JDBC 层 XA 模式启用的情况下，会对 InnoDB（如果是 MySQL 的话）下发操作一连串 XA 逻辑的动作，包括 DML 去变更 redo log 等，即两阶段递交的那些操作。TiDB 目前的引擎版本中，没有对上层应用层 JTA / XA 的支持，不解析这些 Atomikos 发过来的 XA 类型的操作。

MySQL 是单机数据库，只能通过 XA 来满足跨数据库事务，而 TiDB 本身就通过 Google 的 Percolator 事务模型支持分布式事务，性能稳定性比 XA 高很多，所以不会也不需要支持 XA。

## TiDB 中删除数据后会立即释放空间吗？

`DELETE`、`TRUNCATE` 和 `DROP` 都不会立即释放空间。对于 `TRUNCATE` 和 `DROP` 操作，在达到 TiDB 的 GC (garbage collection) 时间后（默认 10 分钟），TiDB 的 GC 机制会删除数据并释放空间。对于 `DELETE` 操作，TiDB 的 GC 机制会删除数据，但不会立即释放空间，而是等到后续进行 compaction 时释放空间。

可以通过 `show global variables like '%gc%';` 查看GC相关系统变量。

## 数据删除后查询速度为何会变慢?

TiDB 采用了多版本并发控制 (MVCC)，为了使并发事务能查看到早期版本的数据，删除数据不会立即回收空间，而是推迟一段时间后再进行垃圾回收 (GC)。你可以通过修改系统变量 `tidb_gc_life_time` 的值（默认值为 10m0s）配置历史数据的保留时限。

可以通过 `show global variables like '%gc%'; ` 查看 GC 相关系统变量。

## 通过命令行修改数据库用户信息不生效

TiDB 作为分布式数据库，在 TiDB 中修改用户密码建议使用 `set password for 'root'@'%' = '0101001';` 或 `alter`方法。

不推荐使用 `update mysql.user` 的方法进行，这种方法可能会造成其它节点刷新不及时的情况。

修改权限也一样，建议采用官方的标准语法。

## 忘记 root 密码

忘记 root 密码需要设置参数 `skip-grant-table = true`，并重启集群，如忘记 root 密码请提交工单处理。 

## 其他 SQL 操作常见问题

请参阅 [SQL 操作常见问题 | PingCAP Docs](https://docs.pingcap.com/zh/tidb/stable/sql-faq)。

