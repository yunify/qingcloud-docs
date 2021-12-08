---
title: "参数介绍"
description: 本小节主要介绍 MongoDB Cluster 常用配置项。 
keyword: MongoDB Cluster 常用配置项；
weight: 10
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持对 MongoDB Cluster 常用配置参数的管理。

本小节主要介绍 AppCenter 中各 MongoDB Cluster 配置参数的含义。

## 公共参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
| 数据库 root 用户密码   |       -  |  表示数据库 root 用户帐号密码。默认为 `Change1Pwd`。|
|   存储引擎      |  -       |   表示 MongoDB 的存储引擎。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>集群创建后，不支持修改。</li></span>   |
|   数据库 Zabbix 用户密码   |    -  |  表示数据库 Zabbix 用户帐号密码。默认为 `Change1Pwd`。  |
|   Zabbix Server 地址   |    -  |  表示 Zabbix Server 地址。默认为 `127.0.0.1`。  |
|   Zabbix Agent 监听端口   |    1025~65535 |  表示 Zabbix Agent 监听端口。默认为 `10050`。  |
|   开启 Zabbix Agent 服务   |    是、否  |  是否开启 Zabbix Agent 服务。默认为 `否`，表示未开启 Zabbix 监控服务。  |

## Sharding Node

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   net.port     |  27018     |   表示数据库 Shard 节点端口。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>集群创建后，不支持修改。</li></span> |
|   setParameter.cursor TimeoutMillis    |   - |  表示当 MongoDB 删除闲置游标的时间阈值。<li>单位为毫秒。 <li>默认为 600000ms。  |
|   operationPro filing.mode    |   off，slowOp，all |  表示是否开启慢查询检测。<li>默认为 `关闭`，表示关闭满查询检测。<li> `slowOp` 表示根据 **slowOpThresholdMs** 参数进行慢查询检测。 <li> `all` 表示开启全局慢查询检测。  |
|   operationProfiling. slowOpThresholdMs    |   - |  表示慢日志查询任务最大延迟时间。 <li>单位是毫秒。 <li>默认为 100ms。  |
|   replication.enable MajorityReadConcern    |  true，false |   表示是否开启读控制。<li>默认为`true`，表示只能读取到成功写入到大多数节点的数据。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>修改后，将重启集群。</li></span>  |
|   replication. oplogSizeMB    |   990~51200 |  表示 oplog 最大存储容量。 <li>单位是 MB。 <li>默认为20480MB。  |

## Config Server Node

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   net.port     |  27019     |   表示数据库 Config Server 节点端口。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>集群创建后，不支持修改。</li></span> |
|   setParameter. cursorTimeoutMillis    |   -  | 表示当 MongoDB 删除闲置游标的时间阈值。<li>单位为毫秒。 <li>默认为 600000ms。   |
|   operationPro filing.mode    |   off，slowOp，all |   表示是否开启慢查询检测。<li>默认为 `关闭`，表示关闭满查询检测。<li> `slowOp` 表示根据 **slowOpThresholdMs** 参数进行慢查询检测。 <li> `all` 表示开启全局慢查询检测。 |
|   operationProfiling. slowOpThresholdMs    |  - |   表示慢日志查询任务最大延迟时间。<li>单位是毫秒。 <li>默认为 100ms。  |
|   replication. oplogSizeMB    |   990~51200 |   表示 oplog 最大存储容量。<li>单位是 MB。 <li>默认为 2048MB。  |

## Mongos Node

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   net.port     |  27018     |   表示数据库 Mongos 节点端口。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>集群创建后，不支持修改。</li></span> |
|   setParameter. cursorTimeoutMillis    |   -  |  表示当 MongoDB 删除闲置游标的时间阈值。<li>单位为毫秒。 <li>默认为 600000ms。  |
