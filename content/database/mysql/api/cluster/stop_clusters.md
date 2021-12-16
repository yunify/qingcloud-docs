---
title: "StopClusters"
description: 本小节主要介绍获取 MySQL Plus 关闭集群的接口。 
keyword: mysql plus 关闭集群，关闭集群
weight: 16
collapsible: false
draft: false
---



关闭处于活跃状态的集群，可以是一个或者多个集群。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| clusters.n | String | 将要启动的集群 ID。 | Yes |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| job_id | String | 执行任务的 Job ID，格式为`{"cln-ssdfawx":"j-kdlsafda"}` 。|
| ret_code | Integer | 执行成功与否。0 表示成功，其他值则为错误代码。 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?&action=StopClusters
&clusters.1=cl-q1witcdk
&zone=pek3b
&COMMON_PARAMS
```

### 响应示例

```json
“{
  "action":"StopClustersResponse",
  "job_ids":{
    "cl-q1witcdk":"j-m430f0i8ldu"
  },
  "ret_code":0
}”
```
