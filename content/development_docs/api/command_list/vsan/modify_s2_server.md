---
title: "ModifyS2Server"
description: 
draft: false
---



修改共享存储服务器的属性。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2_server | String | 共享存储服务器ID | Yes |
| name | String | 共享存储服务器名称 | No |
| description | String | 共享存储服务器描述 | No |
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
https://api.qingcloud.com/iaas/?action=ModifyS2Server
&s2_server=s2-lxqjtu3l
&name=demo
&description=demo_descritpion
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyS2ServerResponse",
  "ret_code":0
}
```
