---
title: "DetachVolumes"
description: 
draft: false
---



将一块或多块“使用中”（ in-use ）状态的硬盘从某台云服务器中卸载。

卸载前要保证已先从操作系统中 unmount 了硬盘，不然会返回错误信息。

不管卸载是否成功，都不会对硬盘内的数据产生影响。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| volumes.n | String | 硬盘 ID | Yes |
| instance | String | 云服务器 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=DetachVolumes
&volumes.1=vol-12djpg8q
&instance_id=i-12345678,
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DetachVolumesResponse",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
