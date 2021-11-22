---
title: "delete_oss_policies"
description: 本小节主要介绍 ChronusDB 删除存储策略接口。 
keywords: ChronusDB 删除存储策略,删除存储策略
weight: 65
collapsible: false
draft: false
---

当无需多磁盘存储和冷热存储时，为确保对象存储磁盘数据安全，您可以选择删除对象存储策略。

> **注意**
> 
> 只能删除未被使用的对象存储策略。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| cluster        | String | 集群 ID。<li>取值示例 `cl-yxgxofd3`  | Yes      |
| service        | String | 自定义服务类型。<li>取值 `delete_oss_policies`，表示删除存储策略服务。 | Yes      |
| service_params | String | 自定义服务功能配置参数。<br> 取值示例 {"policies_name":"ossp"} <br>- `policies_name` 表示存储策略名称。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该配置参数输入格式，需为 URL 编码。</li></span>  | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| service    | String  | 执行任务对应的服务。                           |
| cluster_id | String  | 集群 ID。                                      |
| action     | String  | 响应动作。                                     |
| job_id     | String  | 执行任务的 Job ID。                            |
| ret_code   | Integer | 执行成功与否。<li>取值 `0` 表示成功，其他值则为错误代码。 |

## 示例

### 请求示例

```url
https://api.qingcloud.com/iaas/?access_key_id=CCCVEESNVLHNZFPLUYZX
&action=RunClusterCustomService
&cluster=cl-yxgxofd3
&service=delete_oss_policies
&service_params=%7B%22policies_name%22%3A%22ossp%22%7D
&zone=pek3
&<COMMON_PARAMS>
```

### 响应示例

```json
{
    "action": "RunClusterCustomServiceResponse",
    "cluster_id": "cl-ggfkekwg",
    "job_id": "j-2kuqg0giddu",
    "service": "deletee_oss_policies",
    "ret_code": 0
}
```
