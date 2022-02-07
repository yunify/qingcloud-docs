---
title: "参数介绍"
description: 本小节主要介绍 MongoDB 常用配置项。 
keyword: 常用配置项,公共参数,Replica 参数,监控参数,日志参数,MongoDB,文档数据库,数据库
weight: 10
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持对 MongoDB 常用配置参数的管理。

本小节主要介绍 AppCenter 中各 MongoDB 配置参数的含义。

## 公共参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
| mongod 的监听端口   |   1025～65535  |  表示 mongod 服务监听端口。默认为 `27017`。|
| root 用户密码   |       -  |  表示数据库 root 用户帐号密码。默认为 `Change1Pwd`。|
| qc_monitor 用户密码  |       -  |  表示监控服务 qc_monitor 用户帐号密码，用于 Zabbix 和 Mongodb Exporter 监控。默认为 `Change1Pwd`。|
|   存储引擎      |  -       |   表示 MongoDB 的存储引擎。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>集群创建后，不支持修改。</li></span>   |

## Replica Node 参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
| setParameter. cursorTimeoutMillis   |       -  |  表示当 MongoDB 删除闲置游标的时间阈值。<li>单位为毫秒。 <li>默认为 600000ms。 |
|   operationPro filing.mode    |   off，slowOp，all |  表示是否开启慢查询检测。<li>默认为 `关闭`，表示关闭满查询检测。<li> `slowOp` 表示根据 **slowOpThresholdMs** 参数进行慢查询检测。 <li> `all` 表示开启全局慢查询检测。  |
|   operationProfiling. slowOpThresholdMs    |   - |  表示慢日志查询任务最大延迟时间。 <li>单位是毫秒。 <li>默认为 100ms。  |
|   replication. oplogSizeMB    |   990~51200 |  表示 oplog 最大存储容量。 <li>单位是 MB。 <li>默认为20480MB。  |
|   replication.enable MajorityReadConcern    |  true，false |   表示是否开启读控制。<li>默认为`true`，表示只能读取到成功写入到大多数节点的数据。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>修改后，将重启集群。</li></span>  |
<!--3.6.8-v1.0.0 版本开始支持该参数-->

## 数据同步参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   Mongoshake: 是否开启 |    是、否  |  是否开启 MongoShake 数据同步服务。默认为 `否`，表示未开启 MongoShake 数据同步服务。  |
|   Mongoshake: 同步方式  |    全部、full、incr  |  表示数据同步的防暑。<li>默认为 `全部`，表示**全量+增量**的数据同步。<li> 取值`full`表示**全量**的数据同步。<li> 取值`incr`，表示**增量**的数据同步。 |
|   Mongoshake: 源 MongoDB 地址  |    - |  表示待同步 MongoDB 地址。需配置为 `IP:Port`。   |
|   Mongoshake: 源 MongoDB 用户  |    -  |  表示源 MongoDB 用户名。  |
|   Mongoshake: 源 MongoDB 用户密码  | - |  表示源 MongoDB 用户密码。  |
|   Mongoshake: 目标 MongoDB 地址  |    - |  表示目标 MongoDB 地址。需配置为 `IP:Port`。  |
|   Mongoshake: 目标 MongoDB 用户  |    -  |  表示目标 MongoDB 用户名。  |
|   Mongoshake: 目标 MongoDB 用户密码  | - |  表示目标 MongoDB 用户密码。  |

## 监控参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   Zabbix: 服务端地址   |    -  |  表示 Zabbix Server 服务地址。默认为 `127.0.0.1`。  |
|   Zabbix: Agent2 监听端口  |    1025~65535 |  表示 Zabbix Agent 监听端口。默认为 `10050`。  |
|   Zabbix: 是否开启 Agent2  |    是、否  |  是否开启 Zabbix Agent 监控服务。默认为 `否`，表示未开启 Zabbix 监控服务。  |
|   Node Exporter: 是否开启  |    是、否  |  是否开启 Node Exporter 监控服务。默认为 `否`，表示未开启 Node Exporter 监控服务。  |
|   Node Exporter: 监听端口  |    1025~65535 |  表示 Node Exporter 监听端口。默认为 `9500`。  |
|   Mongodb Exporter: 是否开启  |    是、否  |  是否开启 Mongodb Exporter 监控服务。默认为 `否`，表示未开启 Mongodb Exporter 监控服务。  |
|   Mongodb Exporter: 监听端口  |    1025~65535 |  表示 Mongodb Exporter 监听端口。默认为 `9001`。  |

## 日志参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   Caddy: 用户名     |  -    |  表示 Caddy Server 登录用户名。 <li>默认为 `caddy`。|
|   Caddy: 密码   |   -  |  表示 Caddy Server 登录密码。 <li>默认为 `caddy`。  |
|   Caddy: 是否开启   |   是，否  |  表示是否开启 Caddy Server，用于同步日志服务。<li>默认为 `否`。  |
