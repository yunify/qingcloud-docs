---
title: "ChangeEipsBandwidth"
description: 
draft: false
---



动态改变一个或多个公网IP的带宽，改变后计费系统会同步更新。

无论公网IP当前处于“可用”（ available ）还是“绑定中” （ associated ）状态，都可以随时改变带宽，并实时生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| eips.n | String | 公网IP的ID | Yes |
| bandwidth | Integer | 公网IP带宽，单位是 Mbps | Yes |
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
https://api.qingcloud.com/iaas/?action=ChangeEipsBandwidth
&eips.1=eip-r4jnbhui
&bandwidth=5
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ChangeEipsBandwidthResponse",
  "job_id":"j-d123j12j",
  "ret_code":0
}
```
