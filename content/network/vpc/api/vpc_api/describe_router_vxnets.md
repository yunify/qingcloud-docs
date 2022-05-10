---
title: "DescribeRouterVxnets"
description: 获取 VPC 网络管理的私有网络列表。
keyword: VPC,  VPC 网络, 私有网络
weight: 12
draft: false
---

获取 VPC 网络管理的私有网络列表。

可根据 VPC 网络ID，私有网络ID，等作为过滤条件，来获取私有网络列表。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| router | String |  VPC 网络ID, “*” 表示显示所有 VPC 网络 | Yes |
| vxnet | String | 私有网络ID | No |
| verbose | Integer | 是否返回冗长的信息，目前只支持verbose=0。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| router_vxnet_set | Array | JSON 格式的私有网络列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的私有网络总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| router_id | String |  VPC 网络ID |
| vxnet_id | String | 私有网络ID |
| manager_ip | String | 私有网络管理地址 |
| ip_network | String | 私有网络 DHCP 地址范围 |
| dyn_ip_start | String | 私有网络 DHCP 起始地址 |
| dyn_ip_end | String | 私有网络 DHCP 终止地址 |
| features | Integer | 私有网络开启的功能标记位<br/> “0” 表示不开启 DHCP 和内网 DNS 功能。<br/> “1” 表示只开启 DHCP 地址分配功能。<br/> “2” 表示只开启内网 DNS 功能。<br/> “3” 表示同时开启 DHCP 地址分配和内网 DNS 功能。 |
| create_time | TimeStamp | 私有网络连接 VPC 网络的创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DescribeRouterVxnets
&router=rtr-b0u6sdj6
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DescribeRouterVxnetsResponse",
  "total_count":1,
  "router_vxnet_set":[
    {
      "router_id":"rtr-b0u6sdj6",
      "manager_ip":"192.168.1.1",
      "ip_network":"192.168.1.0/24",
      "dyn_ip_end":"192.168.1.254",
      "vxnet_id":"vxnet-ytuyg2q",
      "dyn_ip_start":"192.168.1.2",
      "vxnet_name":"test",
      "create_time":"2013-08-30T09:17:40Z",
      "features":1
    }
  ],
  "ret_code":0
}
```
