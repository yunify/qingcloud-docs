---
title: "DescribeSpans"
description: 
draft: false
---



获取一个或多个SPAN的配置。

可根据SPAN ID，名称， ip地址作过滤条件，来获取SPAN列表。 如果不指定任何过滤条件，默认返回你的所有SPAN。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| spans.n | String | SPAN ID | No |
| span_name | String | SPAN名称 | No |
| ip_addr | String | 接收流量的服务器IP地址 | No |
| tags.n | String | 按照标签ID过滤, 只返回已绑定某标签的资源 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| span_set | Array | JSON 格式的SPAN列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的SPAN总数 |

**Response Item**

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DescribeSpans
&spans.1=span-u6ssjx17
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribespansResponse",
  "total_count":1,
  "span_set":[
    {
      "is_applied":1,
      "span_name":"sample",
      "ip_addr":"1.2.3.4",
      "tunnel_type":"gre",
      "tags":[],
      "flag":3,
      "tunnel_key":123456,
      "create_time":"2016-01-23T13:35:56Z",
      "members":[
        {
              "status":"active",
              "status_time":"2016-01-23T13:35:56",
              "span_id":"span-xkxnx0j1",
              "create_time":"2016-01-23T13:35:56",
              "resource_id":"i-o9u2in8s"
        }
      ],
      "status_time":"2016-01-23T13:35:56Z",
      "span_id":"span-u6ssjx17"
    }
  ],
  "ret_code":0
}
```
