---
title: "CreateWAFDomainPolicy"
description: 
draft: false
---



创建WAF域名防护策略。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| domain_policy_name | String | 防护策略 | No |
| domain_name | String | 防护的域名，域名匹配支持通配符如 [*](#id1).yunify.com，匹配域名的请求将进行规则检测 | Yes |
| affect_mode | Integer | 域名的规则相应模式，0: 执行规则内容，1: 观察模式 | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[公共参数](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| domain_policy_id | String | 创建的WAF域名防护规则的ID |
| rule_group_id | String | WAF域名防护自定义规则的策略组ID |
| checklist_group_id | String | WAF域名防护的黑白名单策略组ID |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CreateWAFDomainPolicy
&domain_policy_name=test
&domain_name=*.yunify.com
&affect_mode=0
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateWAFDomainPolicyResponse",
  "domain_policy_id":"wafdp-5yzj3c39",
  "checklist_group_id":"wafcg-ocai9b2b",
  "rule_group_id":"wafrg-wckp0fv3",
  "ret_code":0
}
```
