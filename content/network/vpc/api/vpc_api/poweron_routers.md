---
title: "PowerOnRouters"
description: 启动一台或多台 VPC 网络。
keyword: VPC,  VPC 网络
weight: 9
draft: true
---

启动一台或多台 VPC 网络。

 VPC 网络只有在关闭 poweroffed 状态才能被启动，如果处于非关闭状态，则返回错误信息。

注解：启动 VPC 网络之后， VPC 网络将开始收费。

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
https://api.qingcloud.com/iaas/?action=PowerOnRouters
&routers.1=rtr-s5nqo8mr
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"PowerOnRoutersResponse",
  "ret_code":0,
  "job_id":"j-32c66ja8",
  "routers":[
    "rtr-s5nqo8mr"
  ]
}
```
