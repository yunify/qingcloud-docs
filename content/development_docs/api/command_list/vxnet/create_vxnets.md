---
title: "CreateVxnets"
description: 
draft: false
---



创建新的私有网络。

青云私有网络有两种类型： 受管私有网络 ( vxnet_type=1 ) 和 自管私有网络 ( vxnet_type=0 ) ，

*   受管私有网络可以使用青云路由器来配置和管理其网络，使得网络搭建更方便快捷。
*   自管私有网络需要您自行配置和管理网络，适用于对底层网络有特殊需求的用户。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnet_name | String | 私有网络名称 | No |
| vxnet_type | Integer | 私有网络类型，1 - 受管私有网络，0 - 自管私有网络。 | Yes |
| count | Integer | 新建私有网络的数量，默认是1 | No |
| zone | String | 区域 ID，注意要小写 | Yes |
| target_user | String | 目标用户 ID ，可用于主账号为其子账号创建资源。 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| vxnets | Array | 创建成功的私有网络ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CreateVxnets
&vxnet_name=demo
&vxnet_type=1
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateVxnetsResponse",
  "vxnets":[
    "vxnet-f3y0h3q"
  ],
  "ret_code":0
}
```
