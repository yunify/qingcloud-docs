---
title: "PowerOffRouters"
description: 关闭一台或多台 VPC 网络。
keyword: QingCloud, 青云, 云计算, VPC,  VPC 网络
weight: 8
draft: true
---

关闭一台或多台 VPC 网络。

 VPC 网络只有在运行 active 状态才能被关闭，如果处于非运行状态，则返回错误信息。

注解：关闭 VPC 网络之后， VPC 网络将不再收费。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| routers.n | String |  VPC 网络ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=PowerOffRouters
&routers.1=rtr-s5nqo8mr
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"PowerOffRoutersResponse",
  "ret_code":0,
  "job_id":"j-32c66ja8",
  "routers":[
    "rtr-s5nqo8mr"
  ]
}
```
