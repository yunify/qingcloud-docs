---
title: "UpdateS2Servers"
description: 
draft: false
---



更新一台或多台共享存储服务器的配置信息。当配置发生变更之后，需要执行本操作使配置生效。

只有在处于 active 状态的共享存储服务器才能支持此操作，如果处于非活跃状态，则返回错误信息。

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
https://api.qingcloud.com/iaas/?action=UpdateS2Servers
&s2_servers.1=s2-lxqjtu3l
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"UpdateS2ServersResponse",
  "job_id":"j-bdg2109b",
  "ret_code":0
}
```
