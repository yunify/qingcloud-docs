---
title: "start_standby"
description: 本小节主要介绍 MySQL Plus 启动灾备接口。 
keywords: mysql plus 启动灾备,start_standby
weight: 40
collapsible: false
draft: false
---

MySQL Plus 通过启动异地灾备服务，创建**灾备集群**，同步**源集群**数据至**灾备集群**。

当**源集群**所在区域发生突发性状况，集群节点均无法连接时，可将业务切换至**灾备集群**，快速恢复业务访问。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| action        | String | 响应动作。<li>取值 `RunClusterCustomService`  | Yes      |
| cluster        | String | 集群 ID。<li>取值示例 `cl-ouhutv70`  | Yes      |
| role           | String | 节点角色类型。 <li>取值 `maininstance`，表示主实例节点角色类型。 | Yes      |
| service        | String | 自定义服务类型。<li>取值 `start_standby`，表示启动异地灾备服务。 | Yes      |
| service_params | String | 自定义服务功能配置参数。<br> 取值示例 {"sync_way":"full","zone":"sh1a","host":"192.168.0.232","cluster_id":"cl-9np7ig3g","user":"migrate_user","password":"Passwd@123","port":3306"} <br>- `sync_way` 表示数据同步方式。支持 `full`（全量+增量同步方式） 和 `increment` （增量同步方式）。<br>- `zone` 表示源集群区域。<br>- `host` 表示源集群高可用 IP 地址。<br>- `user` 表示远端 MySQL 数据库帐号名称。<br>- `cluster_id` 表示源集群 ID。<br>- `user` 表示源集群数据库帐号名称。需具备 super 或复制权限的帐号。<br>- `passwd` 表示源集群数据库帐号密码。<br>- `port` 表示源集群数据库端口号。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该配置参数输入格式，需为 URL 编码 JSON 格式。</li></span>  | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| service    | String  | 执行任务对应的服务。                           |
| role       | String  | 节点对应的角色。                               |
| cluster_id | String  | 集群 ID。                                      |
| action     | String  | 响应动作。                                     |
| job_id     | String  | 执行任务的 Job ID。                            |
| ret_code   | Integer | 执行成功与否。<li>取值 `0` 表示成功，其他值则为错误代码。 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?&action=RunClusterCustomService
&cluster=cl-ouhutv70
&role=maininstance
&service=start_standby
&service_params=%7B%22sync_way%22%3A%22full%22%2C%22zone%22%3A%22sh1a%22%2C%22host%22%3A%22192.168.0.232%22%2C%22cluster_id%22%3A%22cl-9np7ig3g%22%2C%22user%22%3A%22migrate_user%22%2C%22password%22%3A%22Passwd%40123%22%2C%22port%22%3A3306%7D
&zone=sh1a
&<COMMON_PARAMS>
```

### 响应示例

```json
"{u'job_id': u'j-pfiu9d1waxq',
 u'service': u'start_standby',
 u'ret_code': 0, 
 u'role': u'maininstance', 
 u'action': u'RunClusterCustomServiceResponse',
 u'cluster_id': u'cl-ouhutv70'}"
```
