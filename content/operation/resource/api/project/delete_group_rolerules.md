---
title: "DeleteGroupRoleRules"
description: 本小节主要介绍删除角色组规则接口。 
keyword: 创建项目
weight: 100
collapsible: false
draft: false


---



删除角色组规则。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | DeleteGroupRoleRules（删除角色组规则）                       | true                                                         |
| group_role_rules                                             | Array                                                    | 角色组规则id列表                                             | true                                                         |
| group_roles                                                  | Array                                                    | 角色组id列表                                                 | false                                                        |
| owner                                                        | String                                                   | 所有者                                                       | false                                                        |
| zone                                                         | String                                                   | 区域id                                                       | false                                                        |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                     | DeleteGroupRoleRulesResponse                                 |
| group_role_ids                                               | Array                                                      | 角色组id列表                                                 |
| group_role_rule_ids                                          | Array                                                      | 角色组规则id列表                                             |
| ret_code                                                     | Integer                                                    | 执行成功与否，0 表示成功，其他值则为错误代码                 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=DeleteGroupRoleRules
&group_role_rules=["grr-iitoudmw"]
&group_roles=["gr-5590xkq2"]
&owner=usr-WantwZJ8
&zone=test
&project_id=pj-xzvlxlb5
```

### 响应示例

```json
{
    "action": "DeleteGroupRoleRulesResponse",
    "group_role_ids": [
        "gr-5590xkq2"
    ],
    "group_role_rule_ids": [
        "grr-iitoudmw"
    ],
    "ret_code": 0
}
```