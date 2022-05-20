---
title: "DescribeRouters"
description: 获取一个或多个 VPC 网络。
keyword: VPC, 创建
weight: 2
draft: false
---

获取一个或多个 VPC 网络。

可根据 VPC 网络ID，状态， VPC 网络名称作过滤条件，来获取 VPC 网络列表。 如果不指定任何过滤条件，默认返回你所拥有的所有 VPC 网络。 如果指定不存在的 VPC 网络ID，或非法状态值，则会返回错误信息。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| routers.n | String |  VPC 网络ID | No |
| vxnet | String | 私用网络ID | No |
| status.n | String |  VPC 网络状态: pending, active, poweroffed, suspended, deleted, ceased | No |
| search_word | String | 搜索关键词，支持 VPC 网络ID， VPC 网络名称 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回 VPC 网络相关其他资源的详细数据。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| router_set | Array | JSON 格式的 VPC 网络数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的 VPC 网络总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| router_id | String |  VPC 网络ID |
| router_name | String |  VPC 网络名称 |
| description | String |  VPC 网络描述 |
| router_type | Integer |  VPC 网络类型，目前有效值为 1. |
| private_ip | String |  VPC 网络内网IP |
| is_applied | Integer |  VPC 网络规则是否已更新，1为已更新，0为还未更新。 |
| status | String |  VPC 网络状态，有效值为pending, active, poweroffed, suspended, deleted, ceased。<br/>pending： 等待被创建<br/>active： 运行状态<br/>poweroffed： 关闭状态<br/>suspended： 由于欠费，已被暂停使用<br/>deleted： 已被删除，被删除的 VPC 网络不可以被恢复<br/>ceased： 已被彻底删除 |
| transition_status | String |  VPC 网络过渡状态，有效值为creating, updating, suspending, resuming，poweroffing，poweroning，deleting。<br/>creating： 创建中，由 pending 状态变成 active 状态<br/>updating： 更新 VPC 网络规则中<br/>suspending： 欠费暂停中，由 active/poweroffed 状态变成 suspended 状态<br/>resuming： 恢复中，由 suspended 状态变成 active 状态<br/>poweroffing： 关闭中，由 active 状态变成 poweroffed 状态<br/>poweroning： 开启中，由 poweroffed 状态变成 active 状态<br/>deleting： 删除中，由 active/poweroffed/suspended 状态变成 deleted 状态 |
| create_time | TimeStamp |  VPC 网络创建时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| status_time | TimeStamp |  VPC 网络最近一次状态变更时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| security_group_id | String |  VPC 网络的防火墙ID |
| eip | Dict |  VPC 网络的公网IP信息<br/>eip_id： 公网IP的ID<br/>eip_name： 公网IP名称<br/>eip_addr： 公网IP地址 |
| vxnets | Array |  VPC 网络连接的私有网络信息<br/>vxnet_id： 私有网络ID<br/>nic_id： 网卡ID<br/>只有在请求参数 verbose=1 时才会返回此信息。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DescribeRouters
&routers.1=rtr-b0u6sdj6
&verbose=1
&COMMON_PARAMS
```

**返回示例：**

```
{
    "action": "DescribeRoutersResponse", 
    "router_set": [
        {
            "status": "active", 
            "base_vxnet": "vxnet-ijduoo5", 
            "is_applied": 1, 
            "features": 3, 
            "vpc_network": "192.168.0.0/16", 
            "console_id": "qingcloud", 
            "create_time": "2019-12-11T01:16:41Z", 
            "alarm_status": "", 
            "private_ip": "10.120.67.38", 
            "resource_project_info": [ ], 
            "owner": "usr-CT3owI01", 
            "place_group_id": "plg-00000nfv", 
            "security_groups": [
                {
                    "group_id": "sg-xmldyszl", 
                    "group_name": "default security group"
                }
            ], 
            "l3vni": 10811790, 
            "sub_code": 1, 
            "security_group_id": "sg-xmldyszl", 
            "source": "self", 
            "memory": 512, 
            "status_time": "2021-11-21T08:09:02Z", 
            "router_id": "rtr-8vwgl9kv", 
            "description": null, 
            "tags": [ ], 
            "transition_status": "", 
            "is_default": 0, 
            "controller": "self", 
            "vpc_id": "vpc-r7fzo0w1", 
            "vpc_ipv6_network": "", 
            "eip": {
                "eip_name": "", 
                "eip_addr": "139.198.181.12", 
                "eip_id": "eip-ndy2crzh"
            }, 
            "hypervisor": "lxc", 
            "instance_id": "i-xilwvpi5", 
            "root_user_id": "usr-CT3owI01", 
            "dns_aliases": [ ], 
            "mode": 0, 
            "router_type": 1, 
            "router_name": "测试", 
            "cpu": 1
        }
    ], 
    "has_share": false, 
    "total_count": 1, 
    "ret_code": 0
}
```
