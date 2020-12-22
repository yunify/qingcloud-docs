---
title: "DetachWAFDomainPolicies"
description: 
draft: false
---



取消负载均衡器的监听器关联的WAF域名防护策略。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resourcies.n | String | 监听器ID | Yes |
| domain_policies.n | String | WAF域名防护策略 | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[公共参数](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DetachWAFDomainPolicies
&resourcies.1=lbl-ivifra2j
&domain_policies.1=wafdp-rvbldlnf
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DetachWAFDomainPoliciesResponse",
  "resource": ["lbl-ivifra2j"],
  "ret_code":0
}
```
