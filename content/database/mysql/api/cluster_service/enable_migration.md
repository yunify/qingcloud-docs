---
title: "migrate_data"
description: 本小节主要介绍 MySQL Plus 在线迁移接口。 
keyword: mysql plus 在线迁移,migrate_data
weight: 30
collapsible: false
draft: false
---

启动集群数据在线迁移，将远端数据库集群数据迁移到本集群，远端集群需创建迁移账号。执行完一次迁移之后需要关闭迁移后才能再次执行迁移。

在线迁移分为两种方式，两种方式所需参数不同。

- 基于 mysqldump 方式
- 基于 xtrabackup方式

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| action        | String | 响应动作。<li>取值 `RunClusterCustomService`  | Yes      |
| cluster        | String | 集群 ID。<li>取值示例 `cl-ouhutv70`  | Yes      |
| role           | String | 节点角色类型。 <li>取值 `maininstance`，表示主实例节点角色类型。 | Yes      |
| service        | String | 自定义服务类型。<li>取值 `migrate_data`，表示启动在线迁移服务。 | Yes      |
| service_params | String | 自定义服务功能配置参数。<br> 取值示例一 {"passwd":"Passwd@123","host":"192.168.0.232","xtrabackup":"NO","user":"migrate_user","port":3306"} <br>- `passwd` 表示远端 MySQL 数据库帐号密码。<br>- `host` 表示远端 MySQL 数据库 IP 地址。<br>- `xtrabackup` 表示是否启用 xtrabackup 方式迁移。取值 `NO` 则不启用 xtrabackup 方式。<br>- `user` 表示远端 MySQL 数据库帐号名称。<br>- `port` 表示远端 MySQL 数据库端口号。<br> 取值示例二 {"passwd":"passwd","xtrabackup":"YES","cluster_id":"cl-9np7ig3g","user":"migrate_user"} <br>- `passwd` 表示远端 MySQL 数据库帐号密码。<br>- `xtrabackup` 表示是否启用 xtrabackup 方式迁移。取值 `YES` 则启用 xtrabackup 方式。<br>- `cluster_id` 表示远端 MySQL 数据库集群 ID。<br>- `user` 表示远端 MySQL 数据库帐号名称。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该配置参数输入格式，需为 URL 编码 JSON 格式。</li></span>  | Yes |

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
&service=migrate_data
&service_params=%7B%22passwd%22%3A%22Passwd%40123%22%2C%22host%22%3A%22192.168.0.232%22%2C%22xtrabackup%22%3A%22NO%22%2C%22user%22%3A%22migrate_user%22%2C%22port%22%3A3306%7D
&<COMMON_PARAMS>
```

### 响应示例

```json
"{u'job_id': u'j-17x4ar8b5x3', 
 u'service': u'migrate_data',
 u'ret_code': 0,
 u'role': u'maininstance',
 u'action': u'RunClusterCustomServiceResponse',
 u'cluster_id': u'cl-ouhutv70'}"
```
