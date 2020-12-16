---
title: "DescribeLoadBalancers"
description: 
draft: false
---



获取一个或多个负载均衡器。

可根据负载均衡器ID，状态，负载均衡器名称作过滤条件，来获取负载均衡器列表。 如果不指定任何过滤条件，默认返回你的所有负载均衡器。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| loadbalancers.n | String | 负载均衡器ID | No |
| status.n | String | 负载均衡器状态: pending，active，stopped，suspended，deleted，ceased | No |
| search_word | String | 搜索关键词，支持负载均衡器ID，负载均衡器名称 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回负载均衡器相关其他资源的详细数据。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| loadbalancer_set | Array | JSON 格式的负载均衡器数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的负载均衡器总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| loadbalancer_id | String | 负载均衡器ID |
| loadbalancer_name | String | 负载均衡器名称 |
| description | String | 负载均衡器描述 |
| listeners | Array | <br/>负载均衡器的监听器列表，每项数据格式为:<br/>{<br/>  "listener_port": "80",<br/>  "listener_protocol": "http",<br/>  "backend_protocol": "http",<br/>  "balance_mode": "roundrobin",<br/>  "forwardfor": "0",<br/>  "loadbalancer_id": "lb-1234abcd",<br/>  "loadbalancer_listener_id": "lbl-1234abcd",<br/>  "loadbalancer_listener_name": "test listener",<br/>  "create-time": "2014-02-14T00:58:43Z",<br/>  "healthy_check_method": "tcp",<br/>  "healthy_check_option": "10\|5\|2\|5",<br/>  "session_sticky": ""<br/>}<br/>只有在请求参数 verbose=1 时才会返回此信息。 |
| is_applied | Integer | 是否已更新配置，1为已更新，0为还未更新。 |
| status | String | 负载均衡器状态, 有效值为pending, active, stopped, suspended, deleted, ceased。<br/>pending： 等待被创建<br/>active： 运行中<br/>stopped： 已关机<br/>suspended： 由于欠费, 已被暂停使用<br/>deleted： 已被删除, 但处于此状态的负载均衡器在2小时之内仍可以被恢复为 active 状态<br/>ceased： 已被彻底删除, 处于此状态的负载均衡器无法恢复 |
| transition_status | String | 负载均衡器过渡状态, 有效值为creating, starting, stopping, updating, suspending, resuming, deleting。<br/>creating： 创建中, 由 pending 状态变成 active 状态<br/>starting： 启动中, 由 stopped 状态变成 active 状态<br/>stopping： 关闭中, 由 active 状态变成 stopped 状态<br/>updating： 更新中<br/>suspending： 欠费暂停中, 由 active/stopped 状态变成 suspended 状态<br/>resuming： 恢复中, 由 suspended 状态变成 active 状态<br/>deleting： 删除中, 由 active/stopped/suspended 状态变成 deleted 状态 |
| eips | Array | 与负载均衡器绑定的公网IP列表，其中每项数据格式为:<br/>{<br/>  "eip_id": "eip-1234abcd",<br/>  "eip_name": "api test",<br/>  "eip_addr": "x.x.x.x"<br/>} |
| create_time | TimeStamp | 负载均衡器创建时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| status_time | TimeStamp | 负载均衡器最近一次状态变更时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| security_group_id | String | 负载均衡器所用的防火墙ID。 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeLoadBalancers
&loadbalancers.1=lb-1234abcd
&status.1=active
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeLoadBalancersResponse",
  "total_count":1,
  "loadbalancer_set":[
    {
      "status":"active",
      "is_applied":0,
      "description":null,
      "loadbalancer_name":"",
      "transition_status":"",
      "eips":[],
      "listeners":[
        {
          "forwardfor":0,
          "loadbalancer_listener_id":"lbl-1234abcd",
          "balance_mode":"roundrobin",
          "listener_protocol":"http",
          "backend_protocol":"http",
          "healthy_check_method":"tcp",
          "session_sticky":"",
          "loadbalancer_listener_name":null,
          "controller":"self",
          "create_time":"2013-09-25T00:38:46Z",
          "healthy_check_option":"10|5|2|5",
          "loadbalancer_id":"lb-1234abcd",
          "listener_port":80
        }
      ],
      "create_time":"2013-09-24T15:41:49Z",
      "status_time":"2013-09-24T15:41:49Z",
      "security_group_id":"",
      "loadbalancer_id":"lb-mgfypyqc"
    }
  ],
  "ret_code":0
}
```
