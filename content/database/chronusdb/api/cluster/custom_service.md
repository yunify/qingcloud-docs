---
title: "RunClusterCustomService"
description: 本小节主要介绍 ChronusDB 自定义服务接口。 
keywords: ChronusDB 自定义服务,自定义服务
weight: 200
collapsible: false
draft: false
---

ChronusDB 通过自定义服务参数，可管理相应功能，例如存储策略、日志服务、创建数据库用户帐号等。

详细服务说明，请参见**自定义服务接口**。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| cluster        | String | 集群 ID。<li>取值示例 `cl-yxgxofd3`  | Yes      |
| service        | String | 自定义服务类型。<li>取值 `delete_oss_policies`，表示删除存储策略服务。 | Yes      |
| service_params | String | 自定义服务功能配置参数。详细服务参数说明，请参见**自定义服务接口**。 | Yes |

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
&service=create_oss_policies
&service_params=%7B%22policies_name%22%3A%22ossp%22%2C%22end_point%22%3A%22https%3A%2F%2Fs3.pek3b.qingcloud.com%2Fqingstor%bucketname%2Fpath%2F%22%2C%22key_secret%22%3A%22e1O5aUrS8FhgSwjanP%22%2C%22key_id%22%3A%22TEM%22%7D
&zone=pek3
&<COMMON_PARAMS>
```

### 响应示例

```json
{
    "action": "RunClusterCustomServiceResponse",
    "cluster_id": "cl-ggfkekwg",
    "job_id": "j-2kuqg0giddu",
    "service": "create_oss_policies",
    "ret_code": 0
}
```
