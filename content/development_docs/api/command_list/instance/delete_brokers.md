---
title: "DeleteBrokers"
description: 
draft: false
weight: 14
---



删除指定云服务器的远程桌面代理。

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
| brokers | Array | 被删除的远程桌面代理列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=DeleteBrokers
&instances.1=i-1tv6ffcy
&zone=gd2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteBrokersResponse",
  "brokers":[
    {
      "instance_id":"i-1tv6ffcy"
    }
  ],
  "ret_code":0
}
```
