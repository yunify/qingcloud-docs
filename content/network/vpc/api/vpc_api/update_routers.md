---
title: "UpdateRouters"
description: 更新一台或多台 VPC 网络的配置信息。
keyword: VPC,  VPC 网络
weight: 7
draft: false
---

更新一台或多台 VPC 网络的配置信息。当配置发生变更之后，需要执行本操作使配置生效。

可以使 VPC 网络配置发生变更的操作为 [_AddRouterStatics_](../add_router_statics/) 和 [_DeleteRouterStatics_](../delete_router_statics/) 和 [_ModifyRouterAttributes_](../modify_router_attributes/)。

只有在处于 active 状态的 VPC 网络才能支持此操作，如果处于非活跃状态，则返回错误信息。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| routers.n | String |  VPC 网络ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=UpdateRouters
&routers.1=rtr-xt37nm9j
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"UpdateRoutersResponse",
  "job_id":"j-bdg2109b",
  "ret_code":0
}
```
