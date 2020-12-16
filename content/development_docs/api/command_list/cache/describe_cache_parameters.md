---
title: "DescribeCacheParameters"
description: 
draft: false
---



返回指定缓存配置组的所有配置项信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cache_parameter_group | String | 缓存服务配置组ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| cache_parameter_set | Array | JSON 格式的缓存服务配置项数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的缓存服务配置项总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| cache_parameter_type | String | 缓存服务配置项参数类型，目前有 “string” 和 “int” 两种。 |
| cache_parameter_name | String | 缓存服务配置项名称 |
| cache_parameter_value | String | 缓存服务配置项值 |
| value_range | String | 缓存服务配置项取值范围 |
| is_readonly | Integer | 是否为只读配置项，1 表示只读配置项，不可修改；0 为非只读配置项。 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeCacheParameters
&cache_parameter_group=cpg-oxzc6vtd
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeCacheParametersResponse",
  "cache_parameter_set":[
    {
      "is_readonly":0,
      "cache_type":"redis2.8.17",
      "cache_parameter_name":"appendonly",
      "cache_parameter_value":"yes",
      "value_range":"yes,no",
      "cache_parameter_type":"string"
    },
    {
      "is_readonly":0,
      "cache_type":"redis2.8.17",
      "cache_parameter_name":"slowlog-log-slower-than",
      "cache_parameter_value":"10000",
      "value_range":"0-",
      "cache_parameter_type":"int"
    }
    ......
  ],
  "ret_code":0,
  "total_count":26
}
```
