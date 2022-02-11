---
title: "DescribeGroupRoleRules"
description: 本小节主要介绍查询角色组规则接口。 
keyword: 创建项目
weight: 120
collapsible: false
draft: false


---



查询角色组规则。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | DescribeGroupRoleRules（查询角色组规则）                     | true                                                         |
| zone                                                         | String                                                   | 区域id                                                       | false                                                        |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |
| offset                                                       | Integer                                                  | 数据偏移量，默认为0                                          | false                                                        |
| limit                                                        | Integer                                                  | 返回数据长度，默认为20，最大为100                            | false                                                        |
| group_roles                                                  | Array                                                    | 角色组id列表                                                 | true                                                         |
| verbose                                                      | Integer                                                  | 是否返回冗长的信息，若未1，则返回角色组的规则详情信息        | false                                                        |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | Items              | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | ------------------ | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       |                    | String                                                     | DescribeGroupRoleRulesResponse                               |
| item_set                                                     |                    | Array                                                      | 规则集                                                       |
| total_count                                                  |                    | Integer                                                    | 根据过滤条件得到的规则总数                                   |
| ret_code                                                     |                    | Integer                                                    | 执行成功与否，0 表示成功，其他值则为错误代码                 |
| group_role_rule_set                                          |                    | Array                                                      | 被更新的角色组描述                                           |
|                                                              | status             | String                                                     | 启用状态，enabled 启用，disabled未启用状态；                 |
|                                                              | description        | String                                                     | 规则描述                                                     |
|                                                              | group_role_id      | String                                                     | 角色组id                                                     |
|                                                              | iam_policy_id      | String                                                     | iam策略id                                                    |
|                                                              | status_time        | TimeStamp                                                  | 角色组更新时间                                               |
|                                                              | create_time        | TimeStamp                                                  | 角色组创建时间                                               |
|                                                              | principle          | Json                                                       | 规则详情                                                     |
|                                                              | policy             | String                                                     | 规则类型                                                     |
|                                                              | group_role_rule_id | String                                                     | 规则id                                                       |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?zone=test
&project_id=pj-xzvlxlb5
&action=DescribeGroupRoleRules
&offset=0
&limit=100
&group_roles=["gr-5590xkq2"]
&verbose=1
```

### 响应示例

```json
{
    "action": "DescribeGroupRoleRulesResponse",
    "item_set": [],
    "group_role_rule_set": [
        {
            "status": "disabled",
            "description": "",
            "group_role_id": "gr-5590xkq2",
            "iam_policy_id": "",
            "create_time": "2021-12-27T14:08:46",
            "principle": "{\"resource_type\":\"instance\",\"actions\":[\"CreateBrokers\",\"DeleteBrokers\",\"DescribeInstances\"]}",
            "policy": "action",
            "status_time": "2021-12-27T15:03:40",
            "group_role_rule_id": "grr-opgcd9te"
        },
        {
            "status": "enabled",
            "description": null,
            "group_role_id": "gr-5590xkq2",
            "iam_policy_id": "",
            "create_time": "2021-12-27T10:54:35",
            "principle": "",
            "policy": "all.describe",
            "status_time": "2021-12-27T10:54:35",
            "group_role_rule_id": "grr-tlq2l8tk"
        }
    ],
    "total_count": 2,
    "ret_code": 0
}
```