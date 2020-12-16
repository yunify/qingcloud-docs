---
title: "DeleteS2Servers"
description: 
draft: false
---



删除一台或多台共享存储服务器。

销毁共享存储服务器的前提，是此共享存储服务器已建立租用信息（租用信息是在创建共享存储服务器成功后， 几秒钟内系统自动建立的）。所以正在创建的共享存储服务器（状态为 pending ）， 以及刚刚创建成功但还没有建立租用信息的共享存储服务器，是不能被销毁的。

警告

被删除的共享存储服务器会被立即系统回收，不具有可恢复的功能。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2servers.n | String | 共享存储服务器ID | Yes |
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
https://api.qingcloud.com/iaas/?action=DeleteS2Servers
&s2_servers.1=s2-s5nqo8mr
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteS2ServerResponse",
  "ret_code":0,
  "job_id":"j-32c66ja8",
  "s2_servers":[
    "s2-s5nqo8mr"
  ]
}
```
