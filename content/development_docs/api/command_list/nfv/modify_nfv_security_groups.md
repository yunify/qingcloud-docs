---
title: "ModifyNFVSecurityGroups"
description: 
draft: false
---



修改一个网络组件的一个或多个防火墙。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| vxnets.n | String | 私有网络 ID | Yes |
| security_group | String | 防火墙 ID | Yes |
| nfv | String | 网络组件的 ID 。 | No |
| zone | String | 区域 ID，注意要小写。 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 修改一个网络组件的一个或多个防火墙 job ID 号 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=ModifyNFVSecurityGroups
&vxnets.1=vxnet-123
&vxnets.2=vxnet-234
&security_group=sg-123cdtrt
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyNFVSecurityGroupsResponse",
  "ret_code":0,
  "job_id":"j-1234abcd"
}
```
