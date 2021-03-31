---
title: "DescribeVxnets"
description: 
draft: false
---



可根据私有网络ID作过滤条件，获取私有网络列表。 如果不指定任何过滤条件，默认返回你所拥有的所有私有网络。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnets.n | String | 私有网络ID | No |
| vxnet_type | Integer | 私有网络类型，分为 1 - 受管私有网络，0 - 自管私有网络。 | No |
| search_word | String | 搜索关键词，支持私有网络ID，私有网络名称 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回已加入此私有网络的资源信息。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| vxnet_set | Array | JSON 格式的私有网络数据列表，每项数据可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的私有网络总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| vxnet_type | Integer | 私有网络类型，分为 1 - 受管私有网络，0 - 自管私有网络。 |
| vxnet_id | String | 私有网络 ID |
| vxnet_name | String | 私有网络名称 |
| create_time | TimeStamp | 创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| description | String | 私有网络的描述 |
| instance_ids | Array | 已加入此私有网络的云服务器ID列表。只有在请求参数 verbose=1 才会返回此项。 |
| router | Dict |

与此私有网络相连的路由器信息，数据格式为:

```
"router":{
  "router_id":"rtr-9iy0lt3s",
  "router_name":"demo",
  "manager_ip": "192.168.100.1",
  "ip_network": "192.168.100.0/24",
  "dyn_ip_end": "192.168.100.254",
  "dyn_ip_start": "192.168.100.2",
  "mode": 0
}
```

 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeVxnets
&vxnets.1=vxnet-ytuyg2q
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeVxnetsResponse",
  "total_count":2,
  "vxnet_set":[
    {
      "vxnet_type":1,
      "description":null,
      "vxnet_name":"test",
      "create_time":"2013-08-27T10:02:25Z",
      "router":{
        "router_id":"rtr-b0u6sdj6",
        "router_name":"demo",
        "manager_ip":"192.168.100.1",
        "ip_network":"192.168.100.0/24",
        "dyn_ip_end":"192.168.100.254",
        "dyn_ip_start":"192.168.100.2",
        "mode":0
      },
      "vxnet_id":"vxnet-ytuyg2q"
    }
  ],
  "ret_code":0
}
```

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeVxnets
&vxnets.1=vxnet-ytuyg2q
&verbose=1
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeVxnetsResponse",
  "total_count":2,
  "vxnet_set":[
    {
      "vxnet_type":1,
      "vxnet_id":"vxnet-ytuyg2q",
      "instance_ids":[
        "i-syx7qtud"
      ],
      "vxnet_name":"test",
      "create_time":"2013-08-27T10:02:25Z",
      "router":{
        "router_id":"rtr-b0u6sdj6",
        "router_name":"demo",
        "router_name""manager_ip":"192.168.100.1",
        "router_name""ip_network":"192.168.100.0/24",
        "router_name""dyn_ip_end":"192.168.100.254",
        "dyn_ip_start":"192.168.100.2",
        "mode":0
      },
      "description":null
    }
  ],
  "ret_code":0
}
```
