---
title: "DescribeS2Servers"
description: 
draft: false
---



获取一个或多个共享存储服务器

可根据共享存储服务器ID，状态，名称作过滤条件，来获取共享存储服务器列表。 如果不指定任何过滤条件，默认返回你所拥有的所有共享存储服务器。 如果指定不存在的共享存储服务器ID，或非法状态值，则会返回错误信息。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| s2_servers.n | String | 共享存储服务器ID | No |
| status.n | String | 共享存储服务器状态: pending, active, poweroffed, suspended, deleted, ceased | No |
| search_word | String | 搜索关键词，支持共享存储服务器ID，共享存储服务器名称 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回共享存储服务器相关其他资源的详细数据。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| s2_server_set | Array | JSON 格式的共享存储服务器数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的共享存储服务器总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| s2_server_id | String | 共享存储服务器ID |
| name | String | 共享存储服务器名称 |
| description | String | 共享存储服务器描述 |
| service_type | String | 共享存储服务类型，目前有效值为 vsan. |
| s2_server_type | Integer | 共享存储服务器类型，目前有效值为 0/1/2/3. |
| private_ip | String | 共享存储服务器内网IP. |
| is_applied | Integer | 共享存储服务器规则是否已更新，1为已更新，0为还未更新。 |
| status | String |

共享存储服务器状态，有效值为pending, active, poweroffed, suspended, deleted, ceased。

pending： 等待被创建

active： 运行状态

poweroffed： 关闭状态

suspended： 由于欠费，已被暂停使用

deleted： 已被删除，被删除的共享存储服务器不可以被恢复

ceased： 已被彻底删除

 |
| transition_status | String |

共享存储服务器过渡状态，有效值为creating, updating, suspending, resuming，poweroffing，poweroning，deleting，。

creating： 创建中，由 pending 状态变成 active 状态

updating： 更新共享存储服务器规则中

suspending： 欠费暂停中，由 active/poweroffed 状态变成 suspended 状态

resuming： 恢复中，由 suspended 状态变成 active 状态

poweroffing： 关闭中，由 active 状态变成 poweroffed 状态

poweroning： 开启中，由 poweroffed 状态变成 active 状态

deleting： 删除中，由 active/poweroffed/suspended 状态变成 deleted 状态

 |
| create_time | TimeStamp | 共享存储服务器创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| status_time | TimeStamp | 共享存储服务器最近一次状态变更时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| vxnet | Dict |

共享存储服务器连接的私有网络信息

vxnet_id： 私有网络ID

nic_id： 网卡ID

只有在请求参数 verbose=1 时才会返回此信息。

 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeS2Servers
&s2_servers.1=s2-lxqjtu3l
&verbose=1
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeS2ServersResponse",
  "total_count":1,
  "s2_server_set":[
    {
      "status":"poweroffed",
      "is_applied":0,
      "description":null,
      "sub_code":0,
      "transition_status":"",
      "controller":"self",
      "console_id":"qingcloud",
      "instance_id":"",
      "service_type":"vsan",
      "root_user_id":"yunify",
      "create_time":"2015-02-07T07:09:17Z",
      "private_ip":null,
      "s2_server_id":"s2-lxqjtu3l",
      "memory":2048,
      "owner":"yunify",
      "status_time":"2015-02-09T16:11:43Z",
      "cpu":1,
      "s2_server_type":1,
      "vxnet_id":"vxnet-ln2mtlk",
      "vxnet":{
        "vxnet_type":1,
        "vxnet_id":"vxnet-ln2mtlk",
        "controller":"self",
        "console_id":"qingcloud",
        "vxnet_name":"test_s2",
        "root_user_id":"yunify",
        "create_time":"2015-02-02T23:29:13",
        "owner":"yunify",
        "description":null
      },
      "name":"test"
    }
  ],
  "ret_code":0
}
```
