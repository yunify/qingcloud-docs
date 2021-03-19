---
title: "StopInstances"
description: 
draft: false
weight: 6
---

关闭一台或多台运行状态的云服务器。

云服务器只有在运行 running 状态才能被关闭，如果处于非运行状态，则返回错误信息。

云服务器在关闭状态时，青云只收取云服务器操作系统所占磁盘空间的费用，价格与硬盘相同， 即：每 10G 收费 0.02 元（注：Linux 系统为 20G，Windows 系统为 50G）。 当云服务器启动后，计费系统会继续对此云服务器的计算资源进行扣费。

青云会根据你实际使用的时长收费（精确到秒），所以你可以随时启动、关闭云服务器， 而不用考虑计费周期的限制。

警告

关闭云服务器不会保存 RAM 中的数据。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| instances.n | String | 一个或多个云服务器ID | Yes |
| force | Integer | 1: 强制关机，0: 非强制关机，默认为0 | No |
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
https://api.qingcloud.com/iaas/?action=StopInstances
&instances.1=i-rtyv0968
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"StopInstancesResponse",
  "job_id":"j-ybnoeitr",
  "ret_code":0
}
```
