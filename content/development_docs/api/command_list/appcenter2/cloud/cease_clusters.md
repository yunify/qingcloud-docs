---
title: "CeaseClusters"
description: 
draft: false
---



彻底删除集群，可以是一个或者多个集群。

> 注意： 集群彻底删除后，不可恢复，请谨慎操作

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| clusters.n | String | 将要启动的集群ID | Yes |

[_公共参数_](../../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

_Example Request_:

```
https://api.qingcloud.com/iaas/?&action=CeaseClusters
&clusters.1=cl-2gi2b3oc
&zone=pek3b
&COMMON_PARAMS
```

_Example Response_:

```json
{
  "action":"CeaseClustersResponse",
  "job_id":"j-1br9d0839v1",
  "ret_code":0
}

```


