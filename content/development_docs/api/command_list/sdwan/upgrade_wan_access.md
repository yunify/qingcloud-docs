---
title: "UpgradeWanAccess"
description: 
draft: false
---



调整接入点基础带宽。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| wan_accesss.n | String | 接入点 ID | Yes |
| bandwidth | Integer | 带宽值 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| global_job_id | String | 执行任务的全局 Job ID |
| wan_accesss | Array | 接入点 ID 列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=UpgradeWanAccess
&wan_accesss.1=wacc-fub9b1eo
&bandwidth=10
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"UpgradeWanAccessResponse",
  "wan_accesss":[
    "wacc-3xv90kn5"
  ],
  "global_job_id":"gj-svqc8nju",
  "ret_code":0
}
```
