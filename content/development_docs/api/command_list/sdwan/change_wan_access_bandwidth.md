---
title: "ChangeWanAccessBandwidth"
description: 
draft: false
---



修改接入点的弹性带宽。

注意： 弹性带宽值不得大于基础带宽。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| wan_access | String | 接入点 ID | Yes |
| bandwidth_type | String | 带宽类型, 目前只支持 elastic 类型 | Yes |
| bandwidth | Integer | 带宽值, bandwidth_type 为 elastic 时, bandwidth 必须指定 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| global_job_id | String | 执行任务的全局 Job ID |
| wan_access | String | 接入点 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ChangeWanAccessBandwidth
&wan_access=wacc-fub9b1eo
&bandwidth_type=elastic
&bandwidth=1
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ChangeWanAccessBandwidthResponse",
  "wan_access":"wacc-3xv90kn5",
  "global_job_id":"gj-ytmu2ec1",
  "ret_code":0
}
```
