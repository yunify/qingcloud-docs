---
title: "DescribeWAFDomainPolicies"
description: 
draft: false
---



查询WAF域名防护策略。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| domain_policies.n | String | WAF域名防护策略ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[公共参数](https://docs.qingcloud.com/product/api/common/parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| waf_domain_policy_set | Array | JSON 格式的WAF域名防护策略内容，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的域名防护策略总数 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| domain_policy_id | String | 域名防护策略ID |
| domain_name | String | 配置的防护的域名地址 |
| is_applied | Integer | 是否已更新配置，1为已更新，0为还未更新。 |
| affect_mode | Integer | 域名防护默认规则行为 |
| rule_group_id | String | 自定义规则ID |
| checklist_group_id | String | 黑白名单规则ID |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeWAFDomainPoliciesResponse
&domain_policies.1=wafdp-uv6qtfm5
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
    "action":"DescribeWAFDomainPoliciesResponse",
    "total_count":1,
    "waf_domain_policy_set":[
      {
        "is_applied":1,
        "domain_policy_id":"wafdp-uv6qtfm5",
        "affect_mode":0,
        "description":"",
        "rule_group_id":"wafrg-vrykhw3o",
        "controller":"self",
        "domain_name":"*.yunify.com",
        "checklist_group_id":"wafcg-3tyhro6u",
        "console_id":"alphacloud",
        "disabled":0,
        "root_user_id":"usr-7HgZmr6C",
        "create_time":"2018-06-24T14:53:36Z",
        "domain_policy_name":"",
        "owner":"usr-7HgZmr6C",
        "status_time":"2018-06-24T14:53:36Z",
        "features":0
      }
    ],
    "ret_code":0
}
```
