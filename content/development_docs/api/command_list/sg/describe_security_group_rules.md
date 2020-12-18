---
title: "DescribeSecurityGroupRules"
description: 
draft: false
---



获取某个防火墙的规则信息。

可根据防火墙ID，上行/下行，防火墙规则ID 作过滤条件，获取防火墙规则列表。 如果不指定任何过滤条件，默认返回你所拥有的所有防火墙的所有规则。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| security_group | String | 防火墙ID | No |
| security_group_rules.n | String | 防火墙规则ID | No |
| direction | Integer | 方向，0 表示下行，1 表示上行。默认为 0。 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| security_group_rule_set | Array | JSON 格式的防火墙规则数据列表，每项参数可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的防火墙总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| security_group_id | String | 防火墙ID |
| security_group_rule_id | String | 防火墙规则ID |
| priority | Integer | 防火墙规则优先级。优先级由高到低的范围是 0 到 100，值越大优先级越低。 |
| protocol | String | 协议 |
| action | String | 操作，accept 表示接受，drop 表示拒绝。 |
| val1 | String | 如果协议为 tcp 或 udp，此值表示起始端口。<br/>如果协议为 icmp，此值表示 ICMP 类型。 具体类型可参见 [_ICMP 类型及代码_](../../../common/security_group_rule_icmp_type/) |
| val2 | String | 如果协议为 tcp 或 udp，此值表示结束端口。<br/>如果协议为 icmp，此值表示 ICMP 代码。 具体代码可参见 [_ICMP 类型及代码_](../../../common/security_group_rule_icmp_type/) |
| val3 | String | 源IP |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeSecurityGroupRules
&security_group=sg-n43jh2pq
&direction=0
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeSecurityGroupRulesResponse",
  "security_group_rule_set":[
    {
      "protocol":"tcp",
      "security_group_id":"sg-nlqi5sa1",
      "priority":1,
      "action":"accept",
      "security_group_rule_id":"sgr-0jzv8t0q",
      "val2":"8088",
      "val1":"8080",
      "direction":0
    },
    {
      "protocol":"icmp",
      "security_group_id":"sg-nlqi5sa1",
      "priority":2,
      "action":"accept",
      "security_group_rule_id":"sgr-vqxvzjg3",
      "val2":"0",
      "val1":"11",
      "direction":1
    }
  ],
  "ret_code":0,
  "total_count":2
}
```
