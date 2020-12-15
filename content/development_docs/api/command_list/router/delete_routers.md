---
title: "DeleteRouters"
description: 
draft: false
---



删除一台或多台路由器。

销毁路由器的前提，是此路由器已建立租用信息（租用信息是在创建路由器成功后， 几秒钟内系统自动建立的）。所以正在创建的路由器（状态为 pending ）， 以及刚刚创建成功但还没有建立租用信息的路由器，是不能被销毁的。

警告

被删除的路由器会被立即系统回收，不具有可恢复的功能。

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
https://api.qingcloud.com/iaas/?action=DeleteRouters
&routers.1=rtr-s5nqo8mr
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteRoutersResponse",
  "ret_code":0,
  "job_id":"j-32c66ja8",
  "routers":[
    "rtr-s5nqo8mr"
  ]
}
```
