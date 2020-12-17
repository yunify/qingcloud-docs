---
title: "NFVJoinVxnets"
description: 
draft: false
---



一个网络组件绑定一个或多个私有网络。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| nfv | String | 网络组件的 ID 。 | Yes |
| zone | String | 区域 ID，注意要小写。 | Yes |
| vxnets.n | String | 私有网络 ID | Yes |
| security_group | String | 防火墙 ID | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 一个网络组件绑定一个或多个私有网络的 job ID 号 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=NFVJoinVxnets
&nfv=nfv-1234abcd
&vxnets.1=vxnet-123
&vxnets.2=vxnet-234
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"NFVJoinVxnetsResponse",
  "ret_code":0,
  "job_id":"j-1234abcd"
}
```
