---
title: "CeaseClusters"
description: 本小节主要介绍 ChronusDB 彻底删除集群的接口。 
keywords: ChronusDB 彻底删除集群，删除集群
weight: 18
collapsible: false
draft: false
---



彻底删除集群，可同时删除一个或者多个集群。

> **注意**
> 
> 集群彻底删除后，不可恢复，请谨慎操作。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| clusters.n | String | 将要启动的集群 ID。 | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否。0 表示成功，其他值则为错误代码。 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?&action=CeaseClusters
&clusters.1=cl-2gi2b3oc
&zone=pek3b
&COMMON_PARAMS
```

### 响应示例

```json
{
  "action":"CeaseClustersResponse",
  "job_id":"j-1br9d0839v1",
  "ret_code":0
}

```
