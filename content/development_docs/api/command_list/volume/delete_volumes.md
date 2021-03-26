---
title: "DeleteVolumes"
description: 
draft: false
---



删除一块或多块硬盘。硬盘须在可用（ available ）状态下才能被删除， 已加载到云服务器的硬盘需先卸载后才能删除。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| volumes.n | String | 硬盘 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=DeleteVolumes
&volumes.1=vol-uydrnlax
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteVolumesResponse",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
