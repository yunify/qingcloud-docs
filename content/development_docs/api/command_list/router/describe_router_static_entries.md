---
title: "DescribeRouterStaticEntries"
description: 
draft: false
---



获取路由器规则的条目。

可根据路由器规则ID作为过滤条件，来获取路由器规则中的条目列表。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| router_static_entry_id | String | 路由器规则条目ID | No |
| router_static | String | 路由器规则ID | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| router_static_entry_set | Array | JSON 格式的路由器数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的路由器规则总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| router_id | String | 路由器ID |
| router_static_entry_name | String | 路由器规则条目名称 |
| router_static_entry_id | String | 路由器规则条目ID |
| val1 | String | 根据规则类型的不同，代表不同含义：<br/>PPTP 账户信息：val1 表示账户名<br/>三层 GRE 隧道：val1 表示目标网络<br/>三层 IPsec 隧道：val1 表示本地网络 |
| val2 | String | 根据规则类型的不同，代表不同含义：<br/>PPTP 账户信息：val2 表示密码<br/>三层 IPsec 隧道：val2 表示目标网络 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeRouterStaticEntries
&router_static=rtrs-8e3pgr8r
&COMMON_PARAMS
```

_Example Response_:

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
