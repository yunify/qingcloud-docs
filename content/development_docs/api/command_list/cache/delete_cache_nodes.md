---
title: "DeleteCacheNodes"
description: 
draft: false
---



删除缓存服务节点。

警告

该删除操作为不可逆操作，节点被删除之后不能被恢复。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cache | String | 缓存服务ID | Yes |
| cache_nodes.n | String | 需要删除的缓存节点ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteCacheNodes
&cache=c-55dwkqew
&cache_nodes.0=cn-606ryhaa
&cache_nodes.1=cn-cksknr5z
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteCacheNodesResponse",
  "job_id":"j-h6lgz30b",
  "ret_code":0
}
```
