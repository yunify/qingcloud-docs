---
title: "RevokeQuotaIndep"
description: 
draft: false
---



撤销子帐号的独立配额权限

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| user | String | 子账户的user_id | Yes |
| zone | String | 区域ID | Yes |

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=RevokeQuotaIndep
&user=usr-P9P3grKr
&zone=test
```

_Example Response_:

```
{
  "action":"RevokeQuotaIndepResponse",
  "user_id":"usr-P9P3grKr",
  "ret_code":0
}
```
