---
title: "DescribeBorderVxnets"
description: 
draft: false
keyword: 边界路由器,关联私有网络
weight: 21
---

查询边界路由器关联的私有网络。


## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| border | String | 边界路由器 ID | No |
| vxnet | String | 私有网络 ID | No |
| owner | String | 静态路由用户 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20 | No |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| border_vxnet_set | Array | 查询到的私有网络集合 |
| total_count | Integer | 查询的私有网络条目数量 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DescribeBorderVxnets
&border=irt-2zevtm67
&offset=0
&limit=100
&zone=pek3
&COMMON_PARAMS
```

**返回示例：**

```
{
    "action":"DescribeBorderVxnetsResponse",
    "border_vxnet_set":[
        {
            "vxnet_id":"vxnet-gonkgpv",
            "dyn_ip_start":"192.168.0.2",
            "dyn_ipv6_end":"",
            "console_id":"qingcloud",
            "create_time":"2020-11-13T07:47:50Z",
            "owner":"usr-1gIBrASt",
            "dhcp_server_ip":"",
            "features":1,
            "manager_ip":"192.168.0.1",
            "border_id":"irt-2zevtm67",
            "ipv6_network":"",
            "vxnet_name":"1",
            "border_private_ip":"192.168.0.254",
            "dhcp_server_ipv6":"",
            "router_id":"rtr-k3jqkcka",
            "ip_network":"192.168.0.0/24",
            "dyn_ip_end":"192.168.0.254",
            "transition_status":"",
            "controller":"self",
            "domain_servers":"",
            "border_zone_id":"pek3b",
            "dyn_ipv6_start":"",
            "manager_ipv6":"",
            "vpc_router_id":"rtr-e5m6sr20",
            "vxnet_zone_id":"pek3",
            "root_user_id":"usr-1gIBrASt",
            "mode":1
        }
    ],
    "ret_code":0,
    "total_count":1
}
```
