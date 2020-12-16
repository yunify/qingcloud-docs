---
title: "DeleteWAFRules"
description: 
draft: false
---



删除WAF域名防护策略。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| rules.n | String |策略的规则内容<br/>wafri-xxxxxxxx: 自定义规则ID<br/>wafci-xxxxxxxx: 黑白名单规则ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[公共参数](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| waf_rules | String | 添加的防护规则ID <br/> wafri-xxxxxxxx: 自定义规则ID <br/> wafci-xxxxxxxx: 黑白名单规则ID |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteWAFRules
&rules.1=wafri-0q7fd000
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteWAFRulesResponse",
  "waf_rules":["wafri-0q7fd000"],
  "ret_code":0
}
```
