---
title: "CreateBrokers"
description: 
draft: false
weight: 13
---

为指定的云服务器创建远程桌面代理。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| instances.n | String | 云服务器 ID 列表 | Yes |
| zone | String | 区域 ID | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| brokers | Array | 新创建的远程桌面代理列表，每项参数可见下面 [Response Item](#response-item) |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| instance_id | String | 云服务器 ID |
| broker_host | String | 远程桌面代理域名 |
| broker_port | Integer | 远程桌面代理端口 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateBrokers
&instances.1=i-1tv6ffcy
&zone=gd2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateBrokersResponse",
  "brokers":[
    {
      "instance_id":"i-1tv6ffcy",
      "broker_port":23239,
      "broker_host":"broker.qingcloud.com"
    }
  ],
  "ret_code":0
}
```
