---
title: "UpdateCacheParameters"
description: 
draft: false
---



更改缓存配置项。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cache_parameter_group | String | 缓存服务配置组ID | Yes |
| parameters.n.cache_parameter_name | String | 需要更改的缓存服务配置项名称 | Yes |
| parameters.n.cache_parameter_value | String | 新的缓存服务配置项值 | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=UpdateCacheParameters
&cache_parameter_group=cpg-oxzc6vtd
&parameters.0.cache_parameter_name=slowlog-log-slower-than
&parameters.0.cache_parameter_value=500
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"UpdateCacheParametersResponse",
  "cache_parameter_group_id":"cpg-oxzc6vtd",
  "ret_code":0
}
```
