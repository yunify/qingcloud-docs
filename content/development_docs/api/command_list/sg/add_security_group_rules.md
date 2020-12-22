---
title: "AddSecurityGroupRules"
description: 
draft: false
---



给防火墙添加规则。每条规则包括的属性为：

*   protocol：协议
*   priority：优先级，由高到低为 0 - 100
*   security_group_rule_name：规则名称
*   action：操作，分为 accept 接受 和 drop 拒绝
*   direction：方向，0 表示下行，1 表示上行。
*   val1：如果协议为 tcp 或 udp，此值表示起始端口。 如果协议为 icmp，此值表示 ICMP 类型。 具体类型可参见 [_ICMP 类型及代码_](../../../common/security_group_rule_icmp_type/)
*   val2：如果协议为 tcp 或 udp，此值表示结束端口。 如果协议为 icmp，此值表示 ICMP 代码。 具体代码可参见 [_ICMP 类型及代码_](../../../common/security_group_rule_icmp_type/)
*   val3：源IP

注解

添加规则后，记得调用 [_ApplySecurityGroup_](../apply_security_group/) 使其生效。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group | String | 防火墙ID | Yes |
| rules.n.protocol | String | 协议，目前支持 tcp, udp, icmp, gre, esp, ah, ipip | Yes |
| rules.n.priority | Integer | 优先级，由高到低为 0 - 100 | Yes |
| rules.n.security_group_rule_name | String | 规则名称 | No |
| rules.n.action | String | 操作，支持 accept (接受) 或 drop (拒绝) | No |
| rules.n.direction | Integer | 方向，0 表示下行，1 表示上行。默认为 0。 | No |
| rules.n.val1 | String | 如果协议为 tcp 或 udp，此值表示起始端口。 如果协议为 icmp，此值表示 ICMP 类型。 其他协议无需此值。 | No |
| rules.n.val2 | String | 如果协议为 tcp 或 udp，此值表示结束端口。 如果协议为 icmp，此值表示 ICMP 代码。 其他协议无需此值。 | No |
| rules.n.val3 | String | 目标 IP，如果填写，则这条防火墙规则只对此IP（或IP段）有效。 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_rules | Array | 添加成功的防火墙规则ID列表 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AddSecurityGroupRules
&rules.1.action=accept
&rules.1.direction=0
&rules.1.priority=7
&rules.1.protocol=tcp
&rules.1.val1=22
&rules.1.val2=
&rules.1.val3=
&security_group=sg-6ft05wt6
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddSecurityGroupRulesResponse",
  "security_group_rules":[
    "sgr-vgiw8cv8"
  ],
  "ret_code":0
}
```
