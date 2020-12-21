---
title: "ModifySecurityGroupRuleAttributes"
description: 
draft: false
---



修改防火墙规则的优先级。

注解

修改规则后，记得调用 [_ApplySecurityGroup_](../apply_security_group/) 使其生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group_rule | String | 防火墙规则ID | Yes |
| security_group_rule_name | String | 防火墙规则名称 | No |
| priority | Integer | 优先级，由高到低为 0 - 100 | No |
| rule_action | String | 行为：accept 表示接受，drop 为拒绝 | No |
| direction | Integer | 方向，0 表示下行，1 表示上行。 | No |
| protocol | String | 协议，目前支持 tcp, udp, icmp, gre, esp, ah, ipip | No |
| val1 | String | 如果协议为 tcp 或 udp，此值表示起始端口。 如果协议为 icmp，此值表示 ICMP 类型， 具体类型可参见 [_ICMP 类型及代码_](../../../common/security_group_rule_icmp_type/) 。 其他协议无需此值。 | No |
| val2 | String | 如果协议为 tcp 或 udp，此值表示结束端口。 如果协议为 icmp，此值表示 ICMP 代码， 具体代码可参见 [_ICMP 类型及代码_](../../../common/security_group_rule_icmp_type/) 。 其他协议无需此值。 | No |
| val3 | String | 目标 IP，如果填写，则这条防火墙规则只对此IP（或IP段）有效。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_rule_id | String | 成功修改的防火墙规则ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifySecurityGroupRuleAttributes
&security_group_rule=sgr-13cooxdd
&security_group_rule_name=demo_rule
&priority=13
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifySecurityGroupRuleAttributesResponse",
  "security_group_rule_id":"sgr-13cooxdd",
  "ret_code":0
}
```
