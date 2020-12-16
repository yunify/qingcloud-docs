---
title: "ChangeEipsBillingMode"
description: 
draft: false
---



动态改变一个或多个公网IP的计费模式，改变后计费系统会及时更新。

警告

计费模式不能频繁改动，每个IP 24小时内只能改动一次

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| eips.n | String | 公网IP的ID | Yes |
| billing_mode | String | 公网IP计费模式：bandwidth 按带宽计费，traffic 按流量计费，默认是 bandwidth | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ChangeEipsBillingMode
&eips.1=eip-r4jnbhui
&billing_mode=traffic
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ChangeEipsBillingModeResponse",
  "job_id":"j-d123j12j",
  "ret_code":0
}
```
