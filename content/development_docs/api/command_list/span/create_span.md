---
title: "CreateSpan"
description: 
draft: false
---



创建一个SPAN.

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| span_name | String | SPAN名称 | No |
| flag | Integer | 镜像流量的类型： 入流量: 1; 出流量: 2, 出入流量: 3（默认值） | No |
| ip_addr | String | 接收流量的服务器IP地址 | Yes |
| tunnel_type | String | 数据封装类型，支持：gre（默认值） | No |
| tunnel_key | Integer | 数据封装使用的密钥， 默认0 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | CreateSpanResponse |
| span_id | String | 创建的SPAN ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateSpan
&ip_addr=1.2.3.4
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateSpanResponse",
  "ret_code":0,
  "span_id":"span-1234abcd"
}
```
