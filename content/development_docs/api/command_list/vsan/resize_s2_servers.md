---
title: "ResizeS2Servers"
description: 
draft: false
---



修改共享存储服务器的类型。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2_server | String | 共享存储服务器ID | Yes |
| s2_server_type | Integer | 共享存储服务器类型 | Yes |
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
https://api.qingcloud.com/iaas/?action=ResizeS2Servers
&s2_servers.1=s2-lxqjtu3l
&s2_server_type=1
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ResizeS2ServersResponse",
  "s2_servers":[
    "s2-lxqjtu3l"
  ],
  "job_id":"j-iox6lwlc",
  "ret_code":0
}
```
