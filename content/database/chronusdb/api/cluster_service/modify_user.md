---
title: "modify_users"
description: 本小节主要介绍 ChronusDB 修改用户信息接口。 
keywords: ChronusDB 添加用户,modify_user
weight: 21
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
| cluster        | String | 集群 ID。<li>取值示例 `cl-yxgxofd3`  | Yes      |
| service        | String | 自定义服务类型。<li>取值 `modify_users`，表示创建数据库帐号。 | Yes      |
| service_params | String | 自定义服务功能配置参数。<br> 取值示例 {"user_networks":"::/0","user_password":"QQ11123","user_name":"testuser"} <br>- `user_networks` 表示允许访问的网络列表。取值`::/0` 表示全部可访问。各地址间用分号分隔。 <br>- `user_passwd` 表示数据库帐号密码。不能以数据开头。<br>- `user_name` 表示数据库帐号名称。不能以数字开头。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该配置参数输入格式，需为 URL 编码 JSON 格式。</li></span>  | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| job_id     | String  | 执行任务的 Job ID。                            |
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
&service=modify_users
&service_params=%7B%22user_networks%22%3A%22%3A%3A%2F0%22%2C%22user_password%22%3A%22QQ11123%22%2C%22user_name%22%3A%22testuser%22%7D
&zone=pek3
&<COMMON_PARAMS>
```

### 响应示例

```json
{
    "action": "RunClusterCustomServiceResponse",
    "cluster_id": "cl-yxgxofd3",
    "job_id": "j-cn78umknykq",
    "service": "modify_users",
    "ret_code": 0
}
```
