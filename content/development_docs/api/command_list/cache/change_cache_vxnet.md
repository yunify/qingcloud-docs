---
title: "ChangeCacheVxnet"
description: 
draft: false
---



变更缓存服务的私有网络，即离开原有私有网络并加入新的私有网络。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| cache | String | 缓存服务ID | Yes |
| vxnet | String | 需要加入的私有网络ID | Yes |
| private_ips.n.cache_node_id | String | 缓存服务节点ID。 | No |
| private_ips.n.private_ip | String | 为该缓存节点指定的IP，例如 “192.168.1.21”。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ChangeCacheVxnet
&cache=c-55dwkqew
&vxnet=vxnet-fbmcjfa
&private_ips.0.cache_node_id=cn-kcoh9zui
&private_ips.0.private_ip=192.168.10.21
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ChangeCacheVxnetResponse",
  "job_id":"j-1234abcd",
  "ret_code":0
}
```
