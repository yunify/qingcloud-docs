---
title: "ReleaseEips"
description: 
draft: false
---



将一个或多个公网IP释放回IP池，同时相关IP的计费也会停止。

如果公网IP正与其他资源绑定，则需要先解绑，再释放， 保证被释放的IP处于“可用”（ available ）状态。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| eips.n | String | 公网IP的ID | Yes |
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
https://api.qingcloud.com/iaas/?action=ReleaseEips
&eips.1=eip-uydrnlax
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ReleaseEipsResponse",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
