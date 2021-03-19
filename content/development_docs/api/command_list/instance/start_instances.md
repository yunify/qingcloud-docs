---
title: "StartInstances"
description: 
draft: false
weight: 5
---


启动一台或多台关闭状态的云服务器。

云服务器只有在关闭 stopped 状态才能被启动，如果处于非关闭状态，则返回错误信息。

云服务器在关闭状态时，青云只收取云服务器操作系统所占磁盘空间的费用，价格与硬盘相同， 即：每 10G 收费 0.02 元（注：Linux 系统为 20G，Windows 系统为 50G）。 当云服务器启动后，计费系统会继续对此云服务器的计算资源进行扣费。

青云会根据你实际使用的时长收费（精确到秒），所以你可以随时启动、关闭云服务器， 而不用考虑计费周期的限制。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| instances.n | String | 一个或多个云服务器ID | Yes |
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
https://api.qingcloud.com/iaas/?action=StartInstances
&instances.1=i-rtyv0968
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"StartInstancesResponse",
  "job_id":"j-ybnoeitr",
  "ret_code":0
}
```
