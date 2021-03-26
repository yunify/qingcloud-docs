---
title: "DescribeNics"
description: 
draft: false
---



获取一个或多个网卡的配置。

可根据mac地址，名称，云服务器，网络，网络类型，状态，作过滤条件，来获取网卡列表。 如果不指定任何过滤条件，默认返回你的所有网卡。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| nics.n | String | nic ID | No |
| nic_name | String | 网卡名称 | No |
| status | String | 网卡状态：available: 空闲；in-use: 正在使用中 | No |
| vxnets.n | String | 网卡对应的vxnet_id | No |
| vxnet_type | Array | 网络类型， 0:自管；1.受管; 2.基础网络 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| nic_set | Array | JSON 格式的网卡列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的网卡总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| nic_id | String | NIC ID |
| nic_name | String | NIC名称 |
| status | String | 网卡状态：available: 空闲；in-use: 正在使用中 |
| instance_id | String | 挂载的云服务器id |
| vxnet_id | String | 网络vxnet_id |
| create_time | TimeStamp | 网卡创建时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| status_time | TimeStamp | 网卡最近一次状态变更时间, 为UTC时间, 格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| sequence | Integer | 网卡在云服务器上的序号 |
| role | Integer | 网卡角色 1:主网卡，每个云服务器一个，是云服务器绑定eip，防火墙时的默认网卡; 0：从网卡，每个云服务器可以挂载多个 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeNics
&nics.1=52:54:00:00:12:34
&COMMON_PARAMS
```

_Example Response_:

```
{
  "nic_set":[
      {
          "vxnet_id":"vxnet-1234567",
          "nic_name":"nic1",
          "status:"in-use",
          "tags":[],
          "role": 1,
          "sequence":0,
          "instance_id":"",
          "private_ip":"192.168.1.2",
          "security_group":"",
          "nic_id":"52:54:00:00:12:34"
          "status_time":"2016-12-23T13:35:56",
          "create_time":"2016-12-23T13:35:56",
      }
  ],
  "ret_code":0
}
```
