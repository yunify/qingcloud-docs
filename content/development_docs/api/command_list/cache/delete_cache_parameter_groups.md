---
title: "DeleteCacheParameterGroups"
description: 
draft: false
---



删除缓存服务配置组。

警告

默认缓存服务配置组不能被删除。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cache_parameter_groups.n | String | 需要删除的缓存配置组ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteCacheParameterGroups
&cache_parameter_groups.0=cpg-qe67xfad
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteCacheParameterGroupsResponse",
  "ret_code":0,
  "cache_parameter_groups":[
    "cpg-qe67xfad"
  ]
}
```
