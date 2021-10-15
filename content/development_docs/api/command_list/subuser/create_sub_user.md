---
title: "CreateSubUser"
description: 
draft: false
---



创建子帐户。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| email | String | 子帐户登录邮箱。注意这里的登录邮箱前缀需要和主账户邮箱一致，格式为#，例如”[masteruser@test.com#subuser1](mailto:masteruser%40test.com#subuser1)“ | Yes |
| user_name | String | 子帐户名。 | No |
| passwd | String | 子帐户登录密码。 | Yes |
| notify_email | String | 通知邮箱。 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| email | String | 子帐户登录邮箱 |
| user_id | String | 子帐户 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateSubUser
&email=masteruser@test.com#subuser1
&passwd=Passw0rd
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateSubUserResponse",
  "user_id":"usr-abcd1234",
  "email":"masteruser@test.com#subuser1",
  "ret_code":0
}
```