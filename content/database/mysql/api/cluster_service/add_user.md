---
title: "add_user"
description: 本小节主要介绍 MySQL Plus 添加用户接口。 
keywords: mysql plus 添加用户,add_user
weight: 20
collapsible: false
draft: false
---

创建数据库用户帐号。

> **注意**
> 
> 若创建的帐号已存在，该操作会执行失败。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| action        | String | 响应动作。<li>取值 `RunClusterCustomService`  | Yes      |
| cluster        | String | 集群 ID。<li>取值示例 `cl-ouhutv70`  | Yes      |
| role           | String | 节点角色类型。 <li>取值 `maininstance`，表示主实例节点角色类型。 | Yes      |
| service        | String | 自定义服务类型。<li>取值 `add_user`，表示创建主实例帐号。 | Yes      |
| service_params | String | 自定义服务功能配置参数。<br> 取值示例 {"database":" * ","passwd":"Passwd@123","ssl":"NO","host":"%","user":"u1","priv":"StandardAccount"} <br>- `database` 表示授权访问的数据库名称。可授权访问一个数据库（不支持同时授权多个数据库）或全部数据库（取值 `*` ）；当创建高级权限用户时，可授权全部数据库。 <br>- `passwd` 表示数据库帐号密码。密码长度范围 8~32 个字符；必须同时包含大小写字母（a～z，A～Z）、数字（0～9）和特殊字符（@#$%^&*_+-=）。<br>- `ssl` 表示是否开启帐号加密认证。取值 `NO` 则不开启；取值 `YES` 则开启，需同时开启数据 [SSL 传输加密服务](../config_ssl_node)。 <br>- `host` 表示允许访问的主机。取值 `%` 允许所有主机访问。若需指定多个 IP 或网段，可用分号分隔。若需外网访问数据库，需授权全部主机可访问。<br>- `user` 表示数据库帐号名称。不支持添加 `root`、`qc_admin`、`qc_repl` 和 `qc_check` 帐号；只能由大小写字母（a～z，A～Z）、数字（0～9）和下划线（ _ ）组成；长度范围 2~26 个字符。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该配置参数输入格式，需为 URL 编码 JSON 格式。</li></span>  | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| job_id     | String  | 执行任务的 Job ID。                            |
| service    | String  | 执行任务对应的服务。                           |
| ret_code   | Integer | 执行成功与否。<li>取值 `0` 表示成功，其他值则为错误代码。 |
| role       | String  | 节点对应的角色。                               |
| action     | String  | 响应动作。                                     |
| cluster_id | String  | 集群 ID。                                      |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?&action=RunClusterCustomService
&cluster=cl-ouhutv70
&role=maininstance
&service=add_user
&service_params=%7B%22database%22%3A%22*%22%2C%22passwd%22%3A%22Passwd%40123%22%2C%22ssl%22%3A%22NO%22%2C%22host%22%3A%22%25%22%2C%22user%22%3A%22u1%22%2C%22priv%22%3A%22StandardAccount%22%7D
&zone=sh1a
&<COMMON_PARAMS>
```

### 响应示例

```json
"{u'job_id': u'j-ltjtx2rsn84',
 u'service': u'add_user', 
 u'ret_code': 0,
 u'role': u'maininstance',
 u'action': u'RunClusterCustomServiceResponse', 
 u'cluster_id': u'cl-ouhutv70'}"
```
