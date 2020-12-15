---
title: "ModifyCacheNodeAttributes"
description: 
draft: false
---



修改一台缓存服务节点的名称。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cache_node | String | 缓存服务节点ID | Yes |
| cache_node_name | String | 新的缓存服务节点名称 | No |
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
https://api.qingcloud.com/iaas/?action=ModifyCacheNodeAttributes
&cache_node=cn-606ryhaa
&cache_node_name=sample
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyCacheNodeAttributesResponse",
  "ret_code":0
}
```
