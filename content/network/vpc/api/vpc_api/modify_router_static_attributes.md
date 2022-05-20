---
title: "ModifyRouterStaticAttributes"
description: 修改某条 VPC 网络规则。
keyword: VPC,  VPC 网络
weight: 27
draft: false
---

修改某条 VPC 网络规则。修改规则后，需要执行 [_UpdateRouters_](../update_routers/) 来使规则生效。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| router_static | String | 需要修改的 VPC 网络规则 ID | Yes |
| router_static_name | String | 规则名称 | No |
| statics.n.val1 | String | 请参考 [_AddRouterStatics_](../add_router_statics/) 对应参数说明。 | No |
| statics.n.val2 | String | 请参考 [_AddRouterStatics_](../add_router_statics/) 对应参数说明。 | No |
| statics.n.val3 | String | 请参考 [_AddRouterStatics_](../add_router_statics/) 对应参数说明。 | No |
| statics.n.val4 | String | 请参考 [_AddRouterStatics_](../add_router_statics/) 对应参数说明。 | No |
| statics.n.val5 | String | 请参考 [_AddRouterStatics_](../add_router_statics/) 对应参数说明。 | No |
| statics.n.val6 | String | 请参考 [_AddRouterStatics_](../add_router_statics/) 对应参数说明。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| router_static | Array | 修改的 VPC 网络规则ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=ModifyRouterStaticAttributes
&router_static=rtrs-c173g36a
&router_static_name=new_name,
&val1=8080
&val2=192.168.1.12
&val3=8080
&val4=tcp
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ModifyRouterStaticAttributesResponse",
  "router_static_id":"rtrs-c173g36a",
  "ret_code":0
}
```
