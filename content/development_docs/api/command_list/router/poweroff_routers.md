---
title: "PowerOffRouters"
description: 
draft: false
---



关闭一台或多台路由器。

路由器只有在运行 active 状态才能被关闭，如果处于非运行状态，则返回错误信息。

注解

关闭路由器之后，路由器将不再收费。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| routers.n | String | 路由器ID | Yes |
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
