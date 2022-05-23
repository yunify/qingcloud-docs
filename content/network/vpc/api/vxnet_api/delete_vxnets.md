---
title: "DeleteVxnets"
description: 删除私有网络。
keyword: VPC, 私有网络
weight: 10
draft: false
---

删除私有网络。

只能删除没有云服务器的私有网络，若删除时仍然有云服务器在此网络中，会返回错误信息。 可通过 [_LeaveVxnet_](../leave_vxnet/) 移出云服务器。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| vxnets.n | String | 私有网络 ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| vxnets | Array | 成功删除的私有网络ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteVxnets
&vxnets.1=vxnet-7mwzdbs
&vxnets.2=vxnet-f3y0h3q
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DeleteVxnetsResponse",
  "vxnets":[
    "vxnet-7mwzdbs",
    "vxnet-f3y0h3q"
  ],
  "ret_code":0
}
```
