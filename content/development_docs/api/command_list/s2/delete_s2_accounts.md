---
title: "DeleteS2Accounts"
description: 
draft: false
---



删除一个或多个用户账号。

此操作完成后需要调用 [_UpdateS2Servers_](../update_s2_servers/) 以应用到共享存储服务器上。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2_accounts.n | String | 用户账号 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=DeleteS2Accounts
&s2_accounts.1=s2a-10231qr5
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteS2AccountsResponse",
  "s2_accounts":[
    "s2a-10231qr5"
  ],
  "ret_code":0
}
```
