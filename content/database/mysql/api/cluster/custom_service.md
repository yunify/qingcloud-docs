---
title: "RunClusterCustomService"
description: 本小节主要介绍 MySQL Plus 自定义服务接口。 
keyword: MySQL Plus 自定义服务,自定义服务
weight: 200
collapsible: false
draft: false
---

MySQL Plus 通过自定义服务参数，可管理相应功能，例如存储策略、日志服务、创建数据库用户帐号等。

详细服务说明，请参见**自定义服务接口**。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| action        | String | 响应动作。<li>取值 `RunClusterCustomService`  | Yes      |
| cluster        | String | 集群 ID。<li>取值示例 `cl-ouhutv70`  | Yes      |
| role           | String | 节点角色类型。 <li>取值示例 `maininstance`。 | Yes      |
| service        | String | 自定义服务类型。<li>取值示例 `add_user`。 | Yes      |
| service_params | String | 自定义服务功能配置参数。详细服务参数说明，请参见**自定义服务接口**。| Yes |

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
&service_params=%7B%22database%22%3A%22%2A%22%2C%22passwd%22%3A%22Zhu1241jie%40%22%2C%22ssl%22%3A%22NO%22%2C%22host%22%3A%22%25%22%2C%22user%22%3A%22u1%22%2C%22priv%22%3A%22StandardAccount%22%7D
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
