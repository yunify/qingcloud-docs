---
title: "DescribeLoadBalancerBackends"
description: 
draft: false
---



获取负载均衡器后端服务列表。

可根据负载均衡器ID，监听器ID 或 后端服务ID 作为过滤条件获取后端服务列表。 如果不指定任何过滤条件，默认返回你拥有的负载均衡器下面监听器的所有后端服务。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancer_backends.n | String | 后端服务ID | No |
| loadbalancer_listener | String | 监听器ID | No |
| loadbalancer | String | 负载均衡器ID | No |
| verbose | Integer | 是否返回冗长的信息, 若为1, 则返回监听器下的后端服务信息。 | No |
| offset | Integer | 数据偏移量, 默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_backend_set | Array | JSON 格式的后端服务数据列表, 每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的后端服务总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| loadbalancer_backend_id | String | 后端服务ID |
| loadbalancer_backend_name | String | 后端服务名称 |
| loadbalancer_listener_id | String | 所属监听器ID |
| loadbalancer_id | String | 所属负载均衡器ID |
| port | Integer | 后端服务端口 |
| weight | Integer | 后端服务权重 |
| resource_id | String | 后端服务资源ID |
| status | String | 后端服务状态，分为: up（可用）, down（不可用）和 abnormal（异常） |
| create_time | String | 创建时间 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeLoadBalancerBackends
&loadbalancer=lb-1234abcd
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeLoadBalancerBackendsResponse",
  "total_count":2,
  "loadbalancer_backend_set":[
    {
      "loadbalancer_backend_id":"lbb-zkwqbfu9",
      "weight":1,
      "resource_id":"i-q9k5xmsl",
      "loadbalancer_backend_name":null,
      "port":80,
      "create_time":"2013-10-09T08:14:39Z",
      "loadbalancer_listener_id":"lbl-8y72dig0",
      "loadbalancer_id":"lb-1234abcd"
    },
    {
      "loadbalancer_backend_id":"lbb-wm7xquyx",
      "weight":1,
      "resource_id":"rtr-auehirx5",
      "loadbalancer_backend_name":null,
      "port":8081,
      "create_time":"2013-10-09T08:14:39Z",
      "loadbalancer_listener_id":"lbl-8y72dig0",
      "loadbalancer_id":"lb-1234abcd"
    }
  ],
  "ret_code":0
}
```
