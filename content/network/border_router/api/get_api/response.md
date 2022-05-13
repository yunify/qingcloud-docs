---
title: "返回结构"
description: 介绍 API 返回结构。 
keyword: 边界路由器 API, 返回结构
draft: false
weight: 40
---

本文介绍 API 返回结构组成及返回示例。

## 返回结构

| <span style="display:inline-block;width:80px">参数</span> | 描述                                                         | 说明                                                         |
| :-------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 指令名称                                                  | API 返回的指令名称 ( action )，例如 `DescribeInstancesResponse` 。 | API 返回的指令名称一般以 “API 请求指令名称” + “Response” 来表示。 |
| 返回码                                                    | 返回码 ( ret_code ) 用来表示API请求的返回值。`ret_code = 0` 表示 API 请求正常；`ret_code != 0` 表示 API 请求错误。 | 详情可见 [错误码](../../error_code)                          |
| 返回参数                                                  | 返回参数响应消息。                                           | -                                                            |

## 返回示例

API 的返回结果为 JSON 结构，这是一个 `DescribeVpcBorders` 的 API 请求返回：

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
