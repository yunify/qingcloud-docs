---
title: "AddGroupRoleRules"
description: 本小节主要介绍添加角色组规则接口。 
keyword: 创建项目
weight: 90
collapsible: false
draft: false

---

添加角色组规则。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | items         | <span style="display:inline-block;width:200">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | ------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       |               | String                                                   | AddGroupRoleRules（添加角色组规则）                          | true                                                         |
| policy                                                       |               | String                                                   | 规则类型 “action” 或预设 如："all.project_manage"            | true                                                         |
| principle                                                    |               | Dict or String                                           | 规则列表 默认 ""                                             | true                                                         |
|                                                              | resource_type | String                                                   | 资源类型                                                     | false                                                        |
|                                                              | actions       | Array                                                    | 受控制的接口列表                                             | false                                                        |
| group_role                                                   |               | String                                                   | 组身份id                                                     | true                                                         |
| owner                                                        |               | String                                                   | 所有者id                                                     | false                                                        |
| zone                                                         |               | String                                                   | 区域id                                                       | false                                                        |
| project_id                                                   |               | String                                                   | 项目id                                                       | true                                                         |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | Items         | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | ------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       |               | String                                                     | AddGroupRoleRulesResponse                                    |
| description                                                  |               | String                                                     | 描述                                                         |
| ret_code                                                     |               | Integer                                                    | 执行成功与否，0表示成功，其他值则为错误代码                  |
| group_role_id                                                |               | String                                                     | 角色组id                                                     |
| principle                                                    |               | Dict or String                                             | 规则列表“默认”                                               |
|                                                              | resource_type | String                                                     | 资源类型                                                     |
|                                                              | actions       | Array                                                      | 受控制的接口列表                                             |
| policy                                                       |               | String                                                     | 规则类型                                                     |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=AddGroupRoleRules
&principle=[{"resource_type":"instance","actions":["CreateBrokers","DeleteBrokers","DescribeInstances"]}]&policy=action&group_role=gr-5590xkq2&owner=usr-WantwZJ8
&zone=test
&project_id=pj-xzvlxlb5
```

### 响应示例

```json
// {"action":"AddGroupRoleRules","principle":[{"resource_type":"instance","actions":["CreateBrokers","DeleteBrokers","DescribeInstances"]}],"policy":"action","group_role":"gr-5590xkq2","owner":"usr-WantwZJ8","zone":"test","project_id":"pj-xzvlxlb5"}
{
    "description": "",
    "ret_code": 0,
    "group_role_id": "gr-5590xkq2",
    "action": "AddGroupRoleRulesResponse",
    "principle": [
        {
            "resource_type": "instance",
            "actions": [
                "CreateBrokers",
                "DeleteBrokers",
                "DescribeInstances"
            ]
        }
    ],
    "policy": "action"
}
 
 
// {"action":"AddGroupRoleRules","principle":"","policy":"all.project_manage","group_role":"gr-5590xkq2","owner":"usr-WantwZJ8","zone":"test","project_id":"pj-xzvlxlb5"}
{
    "status": "enabled",
    "description": "",
    "ret_code": 0,
    "group_role_id": "gr-5590xkq2",
    "owner": "usr-WantwZJ8",
    "console_id": "alphacloud",
    "policy": "all.project_manage",
    "root_user_id": "usr-WantwZJ8",
    "create_time": "2021-12-27T14:08:46",
    "principle": "",
    "action": "AddGroupRoleRulesResponse",
    "status_time": "2021-12-27T14:08:46",
    "group_role_rule_id": "grr-opgcd9te"
}
```