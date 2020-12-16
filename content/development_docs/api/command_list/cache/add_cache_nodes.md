---
title: "AddCacheNodes"
description: 
draft: false
---



给缓存服务添加一个或多个缓存节点。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cache | String | 缓存服务ID | Yes |
| node_count | Integer | 新增缓存节点个数 | Yes |
| private_ips.n.cache_role | String | 缓存节点的角色，有效值为 “master” 和 “slave”。 | No |
| private_ips.n.private_ips | String | 为该角色缓存节点指定的IP列表, 如果该角色存在多个节点，IP之间”,” 号分隔，例如 “192.168.1.21,192.168.1.22”。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| cache_nodes | Array | 新建的缓存服务节点ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=AddCacheNodes
&cache=c-55dwkqew
&node_count=2
&private_ips.0.cache_role=slave
&private_ips.0.private_ips=192.168.200.33,192.168.200.34
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddCacheNodesResponse",
  "ret_code":0,
  "job_id":"j-2q3x6vnm",
  "cache_nodes":[
    "cn-606ryhaa",
    "cn-cksknr5z"
  ]
}
```
