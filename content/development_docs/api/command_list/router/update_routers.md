---
title: "UpdateRouters"
description: 
draft: false
---



更新一台或多台路由器的配置信息。当配置发生变更之后，需要执行本操作使配置生效。

可以使路由器配置发生变更的操作为 [_AddRouterStatics_](../add_router_statics/) 和 [_DeleteRouterStatics_](../delete_router_statics/) 和 [_ModifyRouterAttributes_](../modify_router_attributes/)。

只有在处于 active 状态的路由器才能支持此操作，如果处于非活跃状态，则返回错误信息。

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
https://api.qingcloud.com/iaas/?action=UpdateRouters
&routers.1=rtr-xt37nm9j
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"UpdateRoutersResponse",
  "job_id":"j-bdg2109b",
  "ret_code":0
}
```
