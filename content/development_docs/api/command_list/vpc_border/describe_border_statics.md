---
title: "DescribeBorderStatics"
description: 
draft: false
---



查询边界路由器静态路由规则。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| border_statics | List | 需要查询的边界路由器静态路由规则 | No |
| border | String | 边界路由器 ID | No |
| static_type | List | 静态路由类型 | No |
| owner | String | 静态路由用户 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20 | No |
| verbose | Integer | verbose等级，数值越大，返回的信息越多 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| non_applied_count | Integer | 未应用的条目数 |
| total_count | Integer | 返回的条目总数 |
| border_static_set | Array | 查询出的静态路由结果 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeBorderStatics
&border=irt-2zevtm67
&verbose=1
&offset=0
&limit=100
&zone=pek3
&COMMON_PARAMS
```

_Example Response_:

```
{
    "action":"DescribeBorderStaticsResponse",
    "total_count":1,
    "non_applied_count":0,
    "border_static_set":[
        {
            "status":"applied",
            "border_id":"irt-2zevtm67",
            "static_type":0,
            "root_user_id":"usr-1gIBrASt",
            "owner":"usr-1gIBrASt",
            "console_id":"qingcloud",
            "disabled":0,
            "border_static_name":"r0",
            "controller":"self",
            "create_time":"2020-11-13T08:00:15Z",
            "border_static_id":"bdrs-22obzsfu",
            "status_time":"2020-11-13T08:07:47Z",
            "modification":"",
            "val2":"rtr-e5m6sr20",
            "val3":"0",
            "val1":"3.3.3.3/32",
            "val4":"192.168.255.254"
        }
    ],
    "ret_code":0
}
```
