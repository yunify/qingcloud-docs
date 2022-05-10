---
title: "DescribeRouterStaticEntries"
description: 获取 VPC 网络规则的条目。
keyword: VPC,  VPC 网络,  VPC 网络规则
weight: 25
draft: false
---

获取 VPC 网络规则的条目。

可根据 VPC 网络规则 ID 作为过滤条件，来获取 VPC 网络规则中的条目列表。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| router_static_entry_id | String |  VPC 网络规则条目ID | No |
| router_static | String |  VPC 网络规则ID | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作 |
| router_static_entry_set | Array | JSON 格式的 VPC 网络数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的 VPC 网络规则总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| router_id | String |  VPC 网络ID |
| router_static_entry_name | String |  VPC 网络规则条目名称 |
| router_static_entry_id | String |  VPC 网络规则条目ID |
| val1 | String | 根据规则类型的不同，代表不同含义：<br/>PPTP 账户信息：val1 表示账户名<br/>三层 GRE 隧道：val1 表示目标网络<br/>三层 IPsec 隧道：val1 表示本地网络 |
| val2 | String | 根据规则类型的不同，代表不同含义：<br/>PPTP 账户信息：val2 表示密码<br/>三层 IPsec 隧道：val2 表示目标网络 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DescribeRouterStaticEntries
&router_static=rtrs-8e3pgr8r
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DescribeRouterStaticEntriesResponse",
  "total_count":2,
  "router_static_entry_set":[
    {
      "router_id":"rtr-ingyf5po",
      "router_static_entry_id":"rse-27qhl6ma",
      "router_static_id":"rtrs-8e3pgr8r",
      "router_static_entry_name":"",
      "val2":"192.168.127.0/24",
      "val1":""
    },
    {
      "router_id":"rtr-ingyf5po",
      "router_static_entry_id":"rse-t3u8dhfg",
      "router_static_id":"rtrs-8e3pgr8r",
      "router_static_entry_name":"",
      "val2":"",
      "val1":"192.168.100.0/24"
    },
    {
      "router_id":"rtr-ingyf5po",
      "router_static_entry_id":"rse-rmz0sgbf",
      "router_static_id":"rtrs-8e3pgr8r",
      "router_static_entry_name":"",
      "val2":"192.168.111.0/24",
      "val1":""
    }
  ],
  "ret_code":0
}
```
