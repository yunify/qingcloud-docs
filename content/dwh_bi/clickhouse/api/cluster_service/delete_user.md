---
title: "remove_users"
description: 本小节主要介绍 ClickHouse 删除用户帐号接口。 
keyword: ClickHouse 删除用户帐号,del_user
weight: 22
collapsible: false
draft: false
---

删除数据库用户帐户。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| action        | String | 响应动作。<li>取值 `RunClusterCustomService`  | Yes      |
| cluster        | String | 集群 ID。<li>取值示例 `cl-yxgxofd3`  | Yes      |
| service        | String | 自定义服务类型。<li>取值 `remove_users`，表示删除数据库帐号服务。 | Yes      |
| service_params | String | 自定义服务功能配置参数。<br>取值示例 {"modify_users"} <br>- `user_name` 表示数据库帐号名称。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该配置参数输入格式，需为 URL 编码 JSON 格式。</li></span>  | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- |
| job_id     | String  | 执行任务的 Job ID。                        |
| service    | String  | 执行任务对应的服务。                           |
| ret_code   | Integer | 执行成功与否。<li>取值 `0` 表示成功，其他值则为错误代码。 |
| action     | String  | 响应动作。                                     |
| cluster_id | String  | 集群 ID。                                      |

## 示例

### 请求示例

```url
https://api.qingcloud.com/iaas/?access_key_id=CCCVEESNVLHNZFPLUYZX
&action=RunClusterCustomService
&cluster=cl-yxgxofd3
&service=remove_users
&service_params=%7B%22user_name%22%3A%22testuser%22%7D
&zone=pek3
&<COMMON_PARAMS>
```

### 响应示例

```json
{
    "action": "RunClusterCustomServiceResponse",
    "cluster_id": "cl-yxgxofd3",
    "job_id": "j-3dep5mcq7n6",
    "service": "remove_users",
    "ret_code": 0
}
```
