---
title: "AddSpanMembers"
description: 
draft: false
---



给SPAN添加成员，成员可以是instance id或vxnet id。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| span | String | SPAN ID | Yes |
| resources.n | String | SPAN成员，可以是instance id或vxnet id | Yes |
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
https://api.qingcloud.com/iaas/?action=AddSpanMembers
&span=span-1234abcd
&resources.1=i-1234abcd
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddSpanMembersResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
