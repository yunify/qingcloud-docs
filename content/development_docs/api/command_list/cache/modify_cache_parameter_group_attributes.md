---
title: "ModifyCacheParameterGroupAttributes"
description: 
draft: false
---



修改缓存服务配置组的名称或描述。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cache_parameter_group | String | 缓存服务配置组ID | Yes |
| cache_parameter_group_name | String | 新的缓存服务配置组名称 | No |
| description | String | 新的缓存服务配置组描述 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyCacheParameterGroupAttributes
&cache_parameter_group=cpg-qe67xfad
&cache_parameter_group_name=sample
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyCacheParameterGroupAttributesResponse",
  "ret_code":0
}
```
