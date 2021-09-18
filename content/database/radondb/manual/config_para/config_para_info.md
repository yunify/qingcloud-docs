---
title: "参数介绍"
description: 本小节主要介绍 RadonDB 常用配置项。 
keywords: RadonDB 常用配置项；
weight: 10
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持对 RadonDB 常用配置参数的管理。

本小节主要介绍 AppCenter 中各 RadonDB 配置参数的含义。


## 账号与访问

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   Ftp_user    |  -       |   表示当前数据库 FTP 账号，日志同步后可用于该账号节点上的日志下载。 默认为 **ftpuser** 。<li>集群创建后不可修改。  |
|   Ftp_password    |  -       |   表示当前数据库 FTP 账号密码，日志同步后可用于该账号节点上的日志下载。默认为 **ftppassword** 。  |
|   端口    |  3306 ~ 65535       |   表示当前数据库端口号码。默认为 3306。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>修改后将重启数据库。</li></span> |
|   Allowip      |  -       |   表示允许访问数据库的 IP 地址。<li>多个 IP 以逗号分割。<li>默认为空，表示不限制。  |

## 高可用

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   Twopc-enable  |       False 或 True  |  表示是否启用分布式事务。默认为 True，表示开启。 |
|   Max-result-size  |     0 ~ 549755813888  |  表示单个存储节点上最大结果集的大小，单位为 Byte。<li>默认为 1073741824。<li>0表示无限制。|
|   Max-join-rows      |  0 ~ 1000000    |   表示内存中为 join 的中间结果保留的最大行数。<li>默认为 100000。<li> 0 表示无限制。  |
|   DDL-timeout(ms)   |    0 ~ 172800000  |   表示 DDL 超时时间。<li>默认为 36000000。<li> 0 表示无限制。 |
|   Query-timeout(ms)     |  0 ~ 1000000    |   表示内存中为 join 的中间结果保留的最大行数。<li>默认为 100000。<li> 0 表示无限制。  |
|   Stream-buffer-size  |    0 ~ 1073741824  |   表示流式获取数据时的缓冲区大小，单位为 Byte。<li>默认为 33554432。<li> 0 表示无限制。 |
|   Load-balance     |  0 或 1    |   表示是否开启读写分离。<li>默认为 1，表示开启，读请求会路由到存储节点的高可用读 VIP。  |
|   Lower-case-table-names  |    0 或 1  |   表示表名存储方式。<li>默认为 0，表示表名将按指定存储且区分大小写。<li> 1 表示表名以小写形式存储，并且不区分大小写。 |
|   Audit-mode  |    `无`、`Audit-Read`、`Audit-Write` 或 `Audit-Read-Write`  |   表示数据库审计模式。<li>默认为 `无`，表示不开启审计<li>`Audit-Read` 表示审计读。<li>`Audit-Write` 表示审计写。<li>`Audit-Read-Write` 表示审计读和写。 |
|   Shard-count     |  8、16、32 或 64   |   表示创建 hash 表时的分表数量。<li>默认为 16。  |
|   Expire_logs_days  |    0 ～ 14  |   表示 binlog 日志保留时间，单位为天。<li>默认为 3天。 |
|   Slave_parallel_workers  |    0 ～ 1024  |   表示并行复制线程数。<br>默认为 8。<br> 0 表示关闭并行复制。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>修改后将重启数据库。</li></span> |
