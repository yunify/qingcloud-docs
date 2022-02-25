---
title: "ModifyGroupRoleRuleAttributes"
description: 本小节主要介绍更新角色组规则接口。 
keyword: 创建项目
weight: 110
collapsible: false
draft: false

---



更新角色组规则。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | ModifyGroupRoleRuleAttributes（更新角色组规则）              | true                                                         |
| group_role_rule                                              | String                                                   | 角色组规则id                                                 | false                                                        |
| policy                                                       | String                                                   | 规则类型                                                     | false                                                        |
| principle                                                    | Array or String                                          | 规则详情列表 默认: ""                                        | false                                                        |
| group_roles                                                  | Array                                                    | 角色组id列表                                                 | false                                                        |
| status                                                       | String                                                   | 启用状态                                                     | false                                                        |
| description                                                  | String                                                   | 描述                                                         | false                                                        |
| owner                                                        | String                                                   | 所有者                                                       | false                                                        |
| zone                                                         | String                                                   | 区域id                                                       | false                                                        |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                     | ModifyGroupRoleRuleAttributesResponse                        |
| status                                                       | String                                                     | 启用状态                                                     |
| policy                                                       | String                                                     | 规则类型                                                     |
| principle                                                    | Json                                                       | 规则详情                                                     |
| description                                                  | String                                                     | 被更新的规则描述                                             |
| status_time                                                  | TimeStamp                                                  | 更新时间                                                     |
| group_role_rule_id                                           | String                                                     | 角色组规则id                                                 |
| ret_code                                                     | Integer                                                    | 执行成功与否，0 表示成功，其他值则为错误代码                 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=ModifyGroupRoleRuleAttributes
&group_role_rule=grr-opgcd9te
&policy=all.describe
&principle=
&group_roles=["gr-5590xkq2"]
&status=disabled
&description=test111
&owner=usr-WantwZJ8
&zone=test
&project_id=pj-xzvlxlb5
```

### 响应示例

```json
{
    "action":"ModifyGroupRoleRuleAttributesResponse",
    "status":"disabled",
    "policy":"action",
    "principle":"{\"resource_type\":\"instance\",\"actions\":[\"CreateBrokers\",\"DeleteBrokers\",\"DescribeInstances\"]}",
    "description":"test111",
    "status_time":"2021-12-27T15:03:40",
    "group_role_rule_id":"grr-opgcd9te",
    "ret_code":0
}
```