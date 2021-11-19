---
title: "ResizeCluster"
description: 本小节主要介绍 ChronusDB 扩容集群规格接口。 
keywords: ChronusDB 扩容集群规格
weight: 104
collapsible: false
draft: false
---



纵向扩容集群，即改变集群节点的配置。前提是应用支持扩容，可以查看应用节点的配置。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| cluster | String | 集群 ID。 | Yes |
| memory | Integer | 节点将要增加或减小到的内存，单位 MB。 | No |
| cpu | Integer | 节点将要增加或减小到的 CPU 数量。 | No |
| gpu | Integer | 节点将要增加或减小到的 GPU 数量。 | No |
| storage | Integer | 节点将要增加到的存储大小，单位 GB。 | No |
| node_role | String | 节点的角色。如应用未配置节点角色，可留空。 | No |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| memory | Integer | 扩容后的节点内存，单位 MB。 |
| cpu | Integer | 扩容后的节点 CPU 数量。 |
| gpu | Integer | 扩容后的节点 GPU 数量。 |
| storage | Integer | 扩容后的节点存储大小，单位 GB。|
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否。0 表示成功，其他值则为错误代码。 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=ResizeCluster
&cluster=cl-q1witcdk
&cpu=2
&memory=4096
&storage_size=20
&zone=pek3b
&COMMON_PARAMS
```

### 响应示例

```json
“{
  "job_id":"j-7l8mrrvlvxa",
  "ret_code":0,
  "storage_size":20,
  "cluster_id":"cl-q1witcdk",
  "memory":4096,
  "action":"ResizeClusterResponse",
  "gpu":0,
  "cpu":2
}”
```
