---
title: "ModifySubUserAttributes"
description: 
draft: false
---



更改子帐户信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| user | String | 子帐户 ID。 | Yes |
| user_name | String | 子帐户名。 | No |
| nologin | Integer | 是否允许子帐户通过控制台登录，0 可能登录，1 不能登录。默认为 0。 | No |
| notify_email | String | 通知邮箱。 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| user_id | String | 子帐户 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifySubUserAttributes
&user=usr-abcd1234
&user_name=guest
&nologin=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifySubUserAttributesResponse",
  "user_id":"usr-abcd1234",
  "ret_code":0
}
```
