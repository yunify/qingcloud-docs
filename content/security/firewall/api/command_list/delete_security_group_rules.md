---
title: "DeleteSecurityGroupRules"
description: 
draft: false
---



删除防火墙规则。

注解

删除规则后，记得调用 [_ApplySecurityGroup_](../apply_security_group/) 使其生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group_rules.n | String | 防火墙规则ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_rules | Array | 成功删除的防火墙规则ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteSecurityGroupRules
&security_group_rules.1=sgr-13cooxdd
&security_group_rules.2=sgr-c25rz9c1
&security_group_rules.3=sgr-191d8eb5
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteSecurityGroupRulesResponse",
  "security_group_rules":[
    "sgr-13cooxdd",
    "sgr-c25rz9c1",
    "sgr-191d8eb5"
  ],
  "ret_code":0
}
```
