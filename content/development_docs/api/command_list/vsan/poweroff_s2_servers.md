---
title: "PowerOffS2Servers"
description: 
draft: false
---



关闭一台或多台共享存储服务器。

共享存储服务器只有在活动 active 状态才能被关闭，如果处于非活动状态，则返回错误信息。

注解

启动共享存储服务器之后，共享存储服务器将停止收费。

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
https://api.qingcloud.com/iaas/?action=PowerOffS2Servers
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
