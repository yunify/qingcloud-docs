---
title: "ModifySpanAttributes"
description: 修改SPAN属性。
keyword: QingCloud, 青云, 云计算, SPAN, 网络流量镜像
weight: 5
draft: false
---

修改 SPAN 属性， 包括ip地址，流量类型。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| span_id | String | SPAN ID | Yes |
| span_name | String | SPAN名称 | No |
| flag | Integer | 镜像流量的类型： 入流量: 1; 出流量: 2, 出入流量: 3（默认值） | No |
| ip_addr | String | 接收流量的服务器IP地址 | No |
| tunnel_type | String | 数据封装类型，支持：gre（默认值） | No |
| tunnel_key | Integer | 数据封装使用的密钥， 默认0 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifySpanAttributes
&ip_addr=1.2.3.4
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifySpanAttributesResponse",
  "ret_code":0
}
```
