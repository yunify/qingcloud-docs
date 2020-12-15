---
title: "DeleteSparks"
description: 
draft: false
---



删除一个或多个 Spark 服务

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| sparks.n | String | Spark服务ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| spark_ids | Array | 删除的Spark 服务ID列表 |
| job_id | String | 作业id |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteSparks
&sparks.0=sk-5r22wf7v
&COMMON_PARAMS
```

_Example Response_:

```
{"action": "DeleteSparksResponse",
 "spark_ids": ["sk-5r22wf7v"],
 "job_id": "j-xo8038tu",
 "ret_code": 0
}
```
