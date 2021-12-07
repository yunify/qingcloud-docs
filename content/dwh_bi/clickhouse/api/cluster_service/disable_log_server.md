---
title: "stop_caddy"
description: 本小节主要介绍 ClickHouse 关闭日志服务接口。 
keyword: ClickHouse 关闭日志服务,stop_log_server
weight: 51
collapsible: false
draft: false
---

当无需 Caddy Server 日志服务时，您可以选择关闭日志服务端，降低数据库安全风险。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| action        | String | 响应动作。<li>取值 `RunClusterCustomService`  | Yes      |
| cluster        | String | 集群 ID。<li>取值示例 `cl-yxgxofd3`  | Yes      |
| service        | String | 自定义服务类型。<li>取值 `stop_caddy`，表示关闭集群日志服务。 | Yes      |

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
&service=stop_caddy
&service_params=
&zone=pek3
&<COMMON_PARAMS>
```

### 响应示例

```json
{
    "action": "RunClusterCustomServiceResponse",
    "cluster_id": "cl-ggfkekwg",
    "job_id": "j-3ibxmg743ob",
    "service": "stop_caddy",
    "ret_code": 0
}
```
