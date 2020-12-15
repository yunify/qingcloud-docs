---
title: "RDBsLeaveVxnet"
description: 
draft: false
---



将指定的数据库集群从私有网络中脱离。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| rdbs.n | String | 数据库集群 ID | Yes |
| vxnet | String | 私有网络 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=RDBsLeaveVxnet
&rdbs.1=rdb-y76ik96v
&vxnet=vxnet-fpfvd5q
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"RDBsLeaveVxnetResponse",
  "rdbs":[
    "rdb-y76ik96v"
  ],
  "job_id":"j-iox6lwlc",
  "ret_code":0
}
```
