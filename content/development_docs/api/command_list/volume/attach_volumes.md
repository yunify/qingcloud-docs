---
title: "AttachVolumes"
description: 
draft: false
---



将一块或多块“可用”（ available ）状态的硬盘加载到某台”运行”（ running ） 或”关机”（ stopped ）状态的云服务器。

硬盘加载成功后，需要到加载的云服务器上进一步手动操作，具体可参考 [_FAQ_](../../../faq/index.html#faq) 。

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
https://api.qingcloud.com/iaas/?action=AttachVolumes
&volumes.1=vol-12djpg8q
&instance_id=i-12345678,
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AttachVolumesResponse",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
