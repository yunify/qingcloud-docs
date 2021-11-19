---
title: "RestartClusterService"
description: 本小节主要介绍获取 MySQL Plus 重启集群的接口。 
keywords: mysql plus 重启集群，重启集群
weight: 15
collapsible: false
draft: false
---



重启集群服务，前提是应用定义了 `restart_service`。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| cluster | String | 将要重启服务的集群 ID。 | Yes |
| role | String | 重启的集群角色。 | No |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| cluster_id | String | 集群 ID。 |
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否。0 表示成功，其他值则为错误代码。 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=RestartClusterService
&cluster=cl-95av0jxo
&zone=pek3b
&COMMON_PARAMS
```

### 响应示例

```json
“{
  "action":"RestartClusterServiceResponse",
  "cluster_id":"cl-95av0jxo",
  "job_id":"j-itxd749281a",
  "ret_code":0
}”
```
