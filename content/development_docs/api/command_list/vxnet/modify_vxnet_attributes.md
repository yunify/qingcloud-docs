---
title: "ModifyVxnetAttributes"
description: 
draft: false
---



修改私有网络的名称和描述。

一次只能修改一个私有网络。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnet | String | 私有网络 ID | Yes |
| vxnet_name | String | 私有网络名称 | No |
| description | String | 私有网络描述 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyVxnetAttributes
&vxnet=vxnet-rtyv0968
&vxnet_name=sample
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyVxnetAttributesResponse",
  "ret_code":0
}
```
