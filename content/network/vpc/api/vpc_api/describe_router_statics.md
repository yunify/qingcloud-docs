---
title: "DescribeRouterStatics"
description: 获取 VPC 网络的规则。
keyword: VPC,  VPC 网络,  VPC 网络规则
weight: 24
draft: false
---

获取 VPC 网络的规则。

可根据 VPC 网络规则ID， VPC 网络ID，规则类型等作为过滤条件，来获取 VPC 网络规则列表。 如果不指定任何过滤条件，默认返回你所拥有的所有 VPC 网络规则。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| router_statics.n | String |  VPC 网络规则ID | No |
| router | String |  VPC 网络ID | No |
| vxnet | String | 私有网络ID | No |
| static_type | String | 规则类型。支持的规则类型有：<br/>*   1：端口转发规则<br/>*   2：VPN 规则<br/>*   3：DHCP 选项<br/>*   4：二层 GRE 隧道<br/>*   5：过滤控制<br/>*   6：三层 GRE 隧道<br/>*   7：三层 IPsec 隧道<br/>*   8：私网DNS | No |
| verbose | Integer | 是否返回冗长的信息，目前只支持verbose=0。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| router_static_set | Array | JSON 格式的 VPC 网络规则列表 |
| total_count | Integer | 根据过滤条件得到的 VPC 网络规则总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DescribeRouterStatics
&router=rtr-9iy0lt3s
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DescribeRouterStaticsResponse",
  "total_count":2,
  "router_static_set":[
    {
      "router_id":"rtr-9iy0lt3s",
      "vxnet_id":"",
      "static_type":1,
      "router_static_id":"rtrs-wls7otet",
      "create_time":"2013-08-26T12:37:56Z",
      "val3":"80",
      "val2":"192.168.1.12",
      "val1":"80",
      "val4":"tcp"
    },
    {
      "router_id":"rtr-9iy0lt3s",
      "vxnet_id":"",
      "static_type":2,
      "router_static_id":"rtrs-y63zh53l",
      "create_time":"2013-08-26T12:40:06Z",
      "val3":"udp",
      "val2":"1194",
      "val1":"openvpn",
      "val4":"10.255.143.0/24"
    }
  ],
  "ret_code":0
}
```
