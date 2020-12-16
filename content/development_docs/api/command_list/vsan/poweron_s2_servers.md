---
title: "PowerOnS2Servers"
description: 
draft: false
---



启动一台或多台共享存储服务器。

共享存储服务器只有在关闭 poweroffed 状态才能被启动，如果处于非关闭状态，则返回错误信息。

注解

启动共享存储服务器之后，共享存储服务器将开始收费。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2_servers.n | String | 共享存储服务器ID | Yes |
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
https://api.qingcloud.com/iaas/?action=PowerOnS2Servers
&s2_servers.1=s2-s5nqo8mr
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"PowerOnS2ServersResponse",
  "ret_code":0,
  "job_id":"j-32c66ja8",
  "s2_servers":[
    "s2-s5nqo8mr"
  ]
}
```
