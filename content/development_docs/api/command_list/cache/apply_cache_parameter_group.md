---
title: "ApplyCacheParameterGroup"
description: 
draft: false
---



将缓存配置组应用于缓存服务。

警告

应用操作会导致缓存服务重启，如果缓存服务没有开启持久化，原有缓存数据在重启后将被重置。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cache_parameter_group | String | 缓存服务配置组ID | Yes |
| caches.n | String | 缓存服务ID，如果不指定，默认会应用到与该缓存配置组绑定的所有缓存服务。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ApplyCacheParameterGroup
&cache_parameter_group=cpg-p56ld3nr
&caches.1=c-55dwkqew
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ApplyCacheParameterGroupResponse",
  "job_id":"j-0twgk1dw",
  "ret_code":0
}
```
