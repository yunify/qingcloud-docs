---
title: "DeleteS2Groups"
description: 
draft: false
---



删除一个或多个权限组。

此操作完成后需要调用 [_UpdateS2Servers_](../update_s2_servers/) 以应用到共享存储服务器上。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2_groups.n | String | 权限组 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=DeleteS2Groups
&s2_groups.1=s2g-k01j1qtk
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteS2GroupsResponse",
  "s2_groups":[
    "s2g-k01j1qtk"
  ],
  "ret_code":0
}
```
