---
title: "DescribeRouters"
description: 
draft: false
---



获取一个或多个路由器

可根据路由器ID，状态，路由器名称作过滤条件，来获取路由器列表。 如果不指定任何过滤条件，默认返回你所拥有的所有路由器。 如果指定不存在的路由器ID，或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| routers.n | String | 路由器ID | No |
| vxnet | String | 私用网络ID | No |
| status.n | String | 路由器状态: pending, active, poweroffed, suspended, deleted, ceased | No |
| search_word | String | 搜索关键词，支持路由器ID，路由器名称 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回路由器相关其他资源的详细数据。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| router_set | Array | JSON 格式的路由器数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的路由器总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| router_id | String | 路由器ID |
| router_name | String | 路由器名称 |
| description | String | 路由器描述 |
| router_type | Integer | 路由器类型，目前有效值为 1. |
| private_ip | String | 路由器内网IP |
| is_applied | Integer | 路由器规则是否已更新，1为已更新，0为还未更新。 |
| status | String | 路由器状态，有效值为pending, active, poweroffed, suspended, deleted, ceased。<br/>pending： 等待被创建<br/>active： 运行状态<br/>poweroffed： 关闭状态<br/>suspended： 由于欠费，已被暂停使用<br/>deleted： 已被删除，被删除的路由器不可以被恢复<br/>ceased： 已被彻底删除 |
| transition_status | String | 路由器过渡状态，有效值为creating, updating, suspending, resuming，poweroffing，poweroning，deleting。<br/>creating： 创建中，由 pending 状态变成 active 状态<br/>updating： 更新路由器规则中<br/>suspending： 欠费暂停中，由 active/poweroffed 状态变成 suspended 状态<br/>resuming： 恢复中，由 suspended 状态变成 active 状态<br/>poweroffing： 关闭中，由 active 状态变成 poweroffed 状态<br/>poweroning： 开启中，由 poweroffed 状态变成 active 状态<br/>deleting： 删除中，由 active/poweroffed/suspended 状态变成 deleted 状态 |
| create_time | TimeStamp | 路由器创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| status_time | TimeStamp | 路由器最近一次状态变更时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| security_group_id | String | 路由器的防火墙ID |
| eip | Dict | 路由器的公网IP信息<br/>eip_id： 公网IP的ID<br/>eip_name： 公网IP名称<br/>eip_addr： 公网IP地址 |
| vxnets | Array | 路由器连接的私有网络信息<br/>vxnet_id： 私有网络ID<br/>nic_id： 网卡ID<br/>只有在请求参数 verbose=1 时才会返回此信息。 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeRouters
&routers.1=rtr-b0u6sdj6
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeRoutersResponse",
  "router_set":[
    {
      "router_id":"rtr-b0u6sdj6",
      "status":"active",
      "is_applied":1,
      "description":null,
      "eip":{
        "eip_name":"demo",
        "eip_id":"eip-amorzjgv",
        "eip_addr":"192.168.7.69"
      },
      "sub_code":0,
      "transition_status":"",
      "security_group_id":"sg-z13kokni",
      "create_time":"2013-08-30T09:16:21Z",
      "private_ip":"10.50.12.146",
      "router_type":1,
      "vxnets":[
        {
          "nic_id":"52:54:c9:e3:9e:cd",
          "vxnet_id":"vxnet-ytuyg2q"
        },
        {
          "nic_id":"52:54:b1:d9:df:96",
          "vxnet_id":"vxnet-0"
        }
      ],
      "router_name":"demo"
    }
  ],
  "ret_code":0,
  "total_count":1
}
```
