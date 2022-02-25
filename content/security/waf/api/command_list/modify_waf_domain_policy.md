---
title: "ModifyWAFDomainPolicyAttributes"
description: 
draft: false
---



修改WAF域名防护策略。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| domain_policy | String | 域名防护策略ID | Yes |
| domain_policy_name | String | 防护策略 | No |
| domain_name | String |防护的域名<br/>域名匹配支持通配符如 [*](#id1).yunify.com<br/>匹配域名的请求将进行规则检测 | No |
| affect_mode | Integer |域名的规则相应模式<br/>0: 执行规则内容<br/>1: 观察模式 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[公共参数](../../../parameters/)

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyWAFDomainPolicyAttributes
&domain_policy=wafdp-5yzj3c39
&domain_policy_name=test
&domain_name=*.yunify.com
&affect_mode=0
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyWAFDomainPolicyAttributes",
  "domain_policy":"wafdp-5yzj3c39",
  "ret_code":0
}
```
