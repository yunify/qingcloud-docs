---
title: "GetBalance"
description: 
draft: false
---



获取指定用户的账目信息。

**Request Parameters**

没有特殊的参数

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| user_id | String | 用户 ID |
| balance | String | 主账户余额 |
| bonus | String | 奖金账户余额 |
| coupons | Array | 账户当前拥有的优惠券 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=GetBalance
&user=usr-abcd1234
&COMMON_PARAMS
```

_Example Response_:

```
{
  "user_id":"usr-abcd1234",
  "ret_code":0,
  "bonus":"305.1929",
  "action":"GetBalanceResponse",
  "coupons":[],
  "balance":"310.37"
}
```
