---
title: "DeleteClusters"
description: 
draft: false
---



删除一个或多个集群

销毁集群的前提，是此集群已建立租用信息（租用信息是在创建集群成功后， 几秒钟内系统自动建立的）。所以正在创建的集群， 以及刚刚创建成功但还没有建立租用信息的集群，是不能被销毁的。。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cluster.n | String | 一个或多个集群ID | Yes |
| direct_cease | Integer | 是否直接彻底销毁集群，如果指定`1`则不会进入回收站直接销毁，默认为`0` | No |

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | Dict | 执行任务的 Job ID，格式为`{"cl-zydsaee":"j-baoidfsa"}` |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteClusters
&clusters.1=cl-11esmufq
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteClustersResponse",
  "job_ids":{
    "cl-11esmufq":"j-bt9myvtwqt8"
  },
  "ret_code":0
}
```


