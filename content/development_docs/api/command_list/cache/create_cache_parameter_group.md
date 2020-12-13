---
title: "CreateCacheParameterGroup"
description: 
draft: false
---



创建一个缓存服务配置组。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cache_type | String | 缓存服务类型，目前支持 Redis 2.8.17 和 Memcached 1.4.13. | Yes |
| cache_parameter_group_name | String | 缓存服务配置组名称 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| cache_parameter_group_id | String | 创建的缓存服务配置组ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateCacheParameterGroup
&cache_type=memcached1.4.13
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateCacheParameterGroupResponse",
  "cache_parameter_group_id":"cpg-qe67xfad",
  "ret_code":0
}
```
