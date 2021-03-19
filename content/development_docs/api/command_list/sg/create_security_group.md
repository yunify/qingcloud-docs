---
title: "CreateSecurityGroup"
description: 
draft: false
---



创建防火墙。防火墙可用于保障云服务器和路由器的网络安全。

刚创建的防火墙不包含任何规则，即任何端口都是封闭的， 需要建立规则以打开相应的端口。

青云为每个用户提供了一个缺省防火墙，为了方便用户使用， 缺省防火墙默认打开了下行 icmp 协议和 tcp 22 端口。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group_name | String | 防火墙名称 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_id | String | 创建成功的防火墙 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CreateSecurityGroup
&security_group_name=specify
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateSecurityGroupResponse",
  "security_group_id":"sg-j38f2h3h"
  "ret_code":0
}
```
