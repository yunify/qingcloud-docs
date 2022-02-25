---
title: "DeleteWAFDomainPolicies"
description: 
draft: false
---



删除WAF域名防护策略。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| domain_policies.n | String | WAF域名防护策略ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[公共参数](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| waf_domain_policies | String | 删除的WAF域名防护规则的ID |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteWAFDomainPolicies
&domain_policies.1=wafdp-5yzj3c39
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteWAFDomainPoliciesResponse",
  "waf_domain_policies":["wafdp-5yzj3c39"],
  "ret_code":0
}
```
