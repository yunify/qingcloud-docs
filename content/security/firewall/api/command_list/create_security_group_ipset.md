---
title: "CreateSecurityGroupIPSet"
description: 
draft: false
---



创建防火墙IP/端口集合。

您可以借助 “IP/端口集合” 功能把具有相同特征的一组 IP 或者一组端口设置成为 “IP/端口集合”，并且在防火墙规则中进行添加，实现批量管理功能。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group_ipset_name | String | 名称 | No |
| ipset_type | Integer | 类型 (0:IP, 1:端口) | Yes |
| val | String | 值 (例如: 192.168.1.0/24 或 10000-15000） | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_id | String | 创建成功的资源 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CreateSecurityGroupIPSet
&ipset_type=1
&val=10000-15000
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateSecurityGroupIPSetResponse",
  "security_group_ipset_id":"sgi-sptxtjg9"
  "ret_code":0
}
```
