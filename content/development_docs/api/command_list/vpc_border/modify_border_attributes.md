---
title: "ModifyBorderAttributes"
description: 
draft: false
---



修改边界路由器属性。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| border | String | 边界路由器 ID | Yes |
| border_name | String | 边界路由器名称 | No |
| description | String | 边界路由器描述 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| global_job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifyBorderAttributes
&border=irt-2zevtm67
&border_name=ABC
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyBorderAttributesResponse",
  "global_job_id":"j-ytmu2ec1",
  "ret_code":0
}
```
