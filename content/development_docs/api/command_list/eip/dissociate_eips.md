---
title: "DissociateEips"
description: 
draft: false
---



将一个或多个“绑定中”（ associated ）状态的公网IP解绑， 解绑后会变回“可用”（ available ）状态。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| eips.n | String | 公网IP的ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DissociateEips
&eips.1=eip-12djpg8q
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DissociateEipsResponse",
  "owner":"usr-cT9nUFvT",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
