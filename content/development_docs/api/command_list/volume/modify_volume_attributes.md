---
title: "ModifyVolumeAttributes"
description: 
draft: false
---



修改一块硬盘的名称和描述。

修改时不受硬盘状态限制。

一次只能修改一块硬盘。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| volume | String | 硬盘 ID | Yes |
| volume_name | String | 硬盘名称 | No |
| description | String | 硬盘描述 | No |
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
https://api.qingcloud.com/iaas/?action=ModifyVolumeAttributes
&volume=vol-rtyv0968
&volume_name=sample
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyVolumeAttributesResponse",
  "ret_code":0
}
```
