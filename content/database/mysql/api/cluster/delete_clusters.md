---
title: "DeleteClusters"
description: 本小节主要介绍 MySQL Plus 删除集群的接口。 
keyword: mysql plus 删除集群，删除集群
weight: 20
collapsible: false
draft: false
---



删除一个或多个集群。

销毁集群的前提，是此集群已建立租用信息（租用信息是在创建集群成功后，几秒钟内系统自动建立的）。正在创建的集群，以及刚创建成功但还没有建立租用信息的集群，不能被销毁的。

## 请求参数

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|<span style="display:inline-block;width:100px">是否必选</span>|
| :--- | :--- | :--- | :--- |
| cluster.n | String | 一个或多个集群 ID。 | Yes |
| direct_cease | Integer | 是否直接彻底销毁集群。取值`1`则不会进入**回收站**直接销毁；默认为`0`，表示被删除集群转入**回收站**，超过时限再销毁。 | No |

## 响应消息

|<span style="display:inline-block;width:100px">参数</span> |<span style="display:inline-block;width:100px">类型</span>|<span style="display:inline-block;width:380px">描述</span>|
| :--- | :--- | :--- | 
| action | String | 响应动作。 |
| job_id | Dict | 执行任务的 Job ID。格式为`{"cl-zydsaee":"j-baoidfsa"}` |
| ret_code | Integer | 执行成功与否。<li>取值 `0` 表示成功，其他值则为错误代码。 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=DeleteClusters
&clusters.1=cl-11esmufq
&zone=pek3a
&COMMON_PARAMS
```

### 响应示例

```
{
  "action":"DeleteClustersResponse",
  "job_ids":{
    "cl-11esmufq":"j-bt9myvtwqt8"
  },
  "ret_code":0
}
```
