---
title: "DescribeVpcBorders"
description: 
draft: false
---



查询边界路由器。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vpc_borders | List | 边界路由器的 ID | No |
| status | List | 边界路由器的状态 | No |
| router_id | String | 路由 ID | No |
| l3vni | Integer | L3 VNI | No |
| border_type | String | 边界路由器类型 | No |
| border_name | String | 边界路由器名称 | No |
| owner | String | 边界路由器用户 ID | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20 | No |
| verbose | Integer | verbose等级，数值越大，返回的信息越多 | No |
| search_word | String | 模糊查询的字段 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| vpc_border_set | Array | JSON 格式的边界路由器数据列表 |
| total_count | Integer | 根据过滤条件得到的边界路由器总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeVpcBorders
&verbose=1
&vpc_borders.0=irt-2zevtm67
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
    "action":"DescribeVpcBordersResponse",
    "total_count":1,
    "vpc_border_set":[
        {
            "router_id":"rtr-e5m6sr20",
            "status":"active",
            "border_name":"ABC",
            "zone_id":"pek3b",
            "tags":[],
            "vpc_border_id":
            "irt-oiyxqojg","border_type":1,
            "create_time":"2020-11-16T06:48:15Z",
            "owner":"usr-1gIBrASt",
            "status_time":"2020-11-16T06:49:26Z",
            "resource_project_info":[],
            "description":""
        }
    ],
    "ret_code":0
}
```
