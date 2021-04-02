---
title: "ModifyInstanceAttributes"
description: 
draft: false
weight: 10
---

修改一台云服务器的名称和描述。

修改时不受云服务器状态限制。一次只能修改一台云服务器。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| instance | String | 云服务器ID | Yes |
| instance_name | String | 云服务器名称 | No |
| description | String | 云服务器描述 | No |
| zone | String | 区域 ID，注意要小写 | Yes |
| nic_mqueue | Integer | 1: 启用网卡多队列功能，0: 禁用网卡多队列功能, 默认为0 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyInstanceAttributes
&instance=i-rtyv0968
&instance_name=sample
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyInstanceAttributesResponse",
  "ret_code":0
}
```
