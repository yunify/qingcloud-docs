---
title: "ApplySecurityGroup"
description: 
draft: false
---



应用防火墙规则。当防火墙的规则发生改变后，新规则不会即刻生效 （可通过 is_applied 属性分辨），需要调用 ApplySecurityGroup 之后才生效。

防火墙规则可通过 [_AddSecurityGroupRules_](../add_security_group_rules/), [_DeleteSecurityGroupRules_](../delete_security_group_rules/), [_ModifySecurityGroupRuleAttributes_](../modify_security_group_rule_attributes/) 修改。

如果请求参数中传递了 instances.n ，则表示将此防火墙的规则应用到对应的云服务器。 如果不传此参数，则会将最新规则更新到所有已应用此防火墙的云服务器。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group | String | 防火墙 ID | Yes |
| instances.n | String | 应用防火墙的云服务器ID。<br/>如果不传任何值，则会将最新规格更新到所有之前已应用此防火墙的云服务器。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ApplySecurityGroup
&security_group=sg-12djpg8q
&instances.1=i-12345678,
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ApplySecurityGroupResponse",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
