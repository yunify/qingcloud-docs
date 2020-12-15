---
title: "RestartCaches"
description: 
draft: false
---



重启一台或多台缓存服务。该操作将重启缓存服务的所有缓存节点。

警告

重启操作会导致缓存服务重启，如果缓存服务没有开启持久化，原有缓存数据在重启后将被重置。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| caches.n | String | 缓存服务ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=RestartCaches
&caches.1=c-55dwkqew
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"RestartCachesResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
