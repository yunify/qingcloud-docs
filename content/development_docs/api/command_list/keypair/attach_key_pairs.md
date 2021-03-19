---
title: "AttachKeyPairs"
description: 
draft: false
---



将任意数量密钥对加载到任意数量的云服务器， 云服务器状态须为“运行中”（ running ）或“已关机”（ stopped ）。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| keypairs.n | String | 密钥 ID | Yes |
| instances.n | String | 云服务器 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=AttachKeyPairs
&keypairs.1=kp-12djpg8q
&instances.1=i-12345678,
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AttachKeyPairsResponse",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
