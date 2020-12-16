---
title: "DescribeCacheParameterGroups"
description: 
draft: false
---



获取一个或多个缓存配置组信息。

可根据缓存配置组ID，缓存配置组名称作过滤条件，来获取缓存配置组列表。 如果不指定任何过滤条件，默认返回你的所有缓存配置组。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cache_parameter_groups.n | String | 缓存服务配置组ID | No |
| cache_type | String | 缓存服务类型 | No |
| search_word | String | 搜索关键词，支持缓存服务配置组ID，缓存服务配置组名称 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回缓存服务配置组相关其他资源的详细数据。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| cache_parameter_group_set | Array | JSON 格式的缓存服务配置组数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的缓存服务配置组总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| cache_parameter_group_id | String | 缓存服务配置组ID |
| cache_type | String | 缓存服务类型 |
| cache_parameter_group_name | String | 缓存服务配置组名称 |
| description | String | 缓存服务配置组描述 |
| is_applied | Integer | 是否已更新配置，1为已更新，0为还未更新。 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeCacheParameterGroups
&cache_parameter_groups.1=cpg-oxzc6vtd
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeCacheParameterGroupsResponse",
  "total_count":1,
  "cache_parameter_group_set":[
    {
      "is_applied":1,
      "description":"",
      "cache_type":"redis2.8.17",
      "cache_parameter_group_name":"default parameter group",
      "is_default":1,
      "create_time":"2014-12-14T10:08:14Z",
      "cache_parameter_group_id":"cpg-oxzc6vtd"
    },
  ],
  "ret_code":0
}
```
