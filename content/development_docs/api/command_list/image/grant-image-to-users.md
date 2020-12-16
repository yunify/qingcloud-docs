---
title: "GrantImageToUsers"
description: 
draft: false
---



共享镜像给指定的用户。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| image | String | 映像 ID | Yes |
| users.n | String | 用户id | Yes |
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
https://api.qingcloud.com/iaas/?action=GrantImageToUsers
&image=img-rtyv0968
&user.1=user-1234
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"GrantImageToUsersResponse",
  "ret_code":0
}
```
