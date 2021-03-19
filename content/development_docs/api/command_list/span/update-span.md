---
title: "UpdateSpan"
description: 
draft: false
---



在修改SPAN属性后使用，应用变更到所有云服务器

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| span | String | SPAN ID | Yes |
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
https://api.qingcloud.com/iaas/?action=UpdateSpanMembers
&span=span-1234abcd
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"UpdateSpanResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
