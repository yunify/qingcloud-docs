---
title: "ResetCacheParameters"
description: 
draft: false
---



重置缓存配置项为系统默认值。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cache_parameter_group | String | 缓存服务配置组ID | Yes |
| cache_parameter_names.n | String | 需要重置的缓存服务配置项名称，如果不指定，则会重置整个配置组的配置项为默认值。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ResetCacheParameters
&cache_parameter_group=cpg-oxzc6vtd
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ResetCacheParametersResponse",
  "cache_parameter_group_id":"cpg-oxzc6vtd",
  "ret_code":0
}
```
