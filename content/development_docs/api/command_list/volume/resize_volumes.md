---
title: "ResizeVolumes"
description: 
draft: false
---



给一块或多块“可用”（ available ）状态的硬盘扩大容量。

只允许扩大容量，不支持减小。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| volumes.n | String | 硬盘 ID | Yes |
| size | Integer | 硬盘容量<br/>警告<br/>只允许比当前容量更大，否则会返回错误信息 | Yes |
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
https://api.qingcloud.com/iaas/?action=ResizeVolumes
&volumes.1=vol-r4jnbhui
&size=50
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ResizeVolumesResponse",
  "job_id":"j-d123j12j",
  "ret_code":0
}
```
