---
title: "DescribeGroupRoles"
description: 本小节主要介绍更新角色组。 
keyword: 创建项目
weight: 80
collapsible: false
draft: false


---

查询所有角色组。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:200">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | DescribeGroupRoles（查询所有角色组）                         | true                                                         |
| zone                                                         | String                                                   | 区域id                                                       | false                                                        |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |
| offset                                                       | Integer                                                  | 数据偏移量，默认为0                                          | false                                                        |
| limit                                                        | Integer                                                  | 返回数据长度，默认为20，最大为100                            | false                                                        |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | Items           | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | --------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       |                 | String                                                     | DescribeGroupRolesResponse                                   |
| total_count                                                  |                 | Integer                                                    | 根据过滤条件得到的角色组总数                                 |
| ret_code                                                     |                 | Integer                                                    | 执行成功与否，0表示成功，其他值则为错误代码                  |
| group_role_set                                               |                 | Array                                                      | 被更新的角色组描述                                           |
|                                                              | read_only       | Integer                                                    | 自定义与系统默认，0表示自定义可编辑，1表示系统默认不可编辑   |
|                                                              | status          | String                                                     | 启用状态，enabled表示启用，disabled表示未启用状态            |
|                                                              | description     | String                                                     | 就是描述                                                     |
|                                                              | group_role_id   | String                                                     | 角色组id                                                     |
|                                                              | status_time     | TimeStamp                                                  | 角色组更新时间                                               |
|                                                              | create_time     | TimeStamp                                                  | 角色组创建时间                                               |
|                                                              | iamg_role_id    | String                                                     | iam组身份id                                                  |
|                                                              | group_role_name | String                                                     | 角色组名称                                                   |
|                                                              | role_type       | String                                                     | 角色类型                                                     |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?zone=test&project_id=pj-xzvlxlb5&action=DescribeGroupRoles&offset=0&limit=100
```

### 响应示例

```json
“{
    "action": "DescribeGroupRolesResponse",
    "total_count": 2,
    "group_role_set": [
        {
            "read_only": 1,
            "status": "enabled",
            "description": "test",
            "group_role_id": "gr-5590xkq2",
            "status_time": "2021-12-27T02:54:35Z",
            "create_time": "2021-12-27T02:54:35Z",
            "iamg_role_id": null,
            "group_role_name": "test",
            "role_type": "rule"
        },
        {
            "read_only": 0,
            "status": "enabled",
            "description": "",
            "group_role_id": "gr-blph1xfg",
            "status_time": "2021-12-27T02:54:01Z",
            "create_time": "2021-12-27T02:54:01Z",
            "iamg_role_id": null,
            "group_role_name": "a",
            "role_type": "rule"
        }
    ],
    "ret_code": 0
}”
```

查询单个角色组

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:200">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | DescribeGroupRoles（查询单个角色组）                         | true                                                         |
| status                                                       | Array                                                    | 启用状态                                                     | false                                                        |
| verbose                                                      | Integer                                                  | 是否返回冗长的信息，若未1，则返回已加入角色组的规则信息      | false                                                        |
| group_roles                                                  | Array                                                    | 角色组id列表                                                 | true                                                         |
| owner                                                        | String                                                   | 所有者id                                                     | true                                                         |
| zone                                                         | String                                                   | 区域id                                                       | false                                                        |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | Items1              | Items2             | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | ------------------- | ------------------ | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       |                     |                    | String                                                     | DescribeGroupRolesResponse                                   |
| total_count                                                  |                     |                    | Integer                                                    | 根据过滤条件得到的角色组总数                                 |
| ret_code                                                     |                     |                    | Integer                                                    | 执行成功与否，0表示成功，其他值则为错误代码                  |
| group_role_set                                               |                     |                    | Array                                                      | 被更新的角色组描述                                           |
|                                                              | read_only           |                    | Integer                                                    | 自定义与系统默认，0表示自定义可编辑，1表示系统默认不可编辑   |
|                                                              | status              |                    | String                                                     | 启用状态，enabled表示启用，disabled表示未启用状态            |
|                                                              | description         |                    | String                                                     | 就是描述                                                     |
|                                                              | group_role_id       |                    | String                                                     | 角色组id                                                     |
|                                                              | status_time         |                    | TimeStamp                                                  | 角色组更新时间                                               |
|                                                              | create_time         |                    | TimeStamp                                                  | 角色组创建时间                                               |
|                                                              | iamg_role_id        |                    | String                                                     | iam组身份id                                                  |
|                                                              | group_role_name     |                    | String                                                     | 角色组名称                                                   |
|                                                              | role_type           |                    | String                                                     | 角色类型                                                     |
|                                                              | group_role_rule_set |                    | Array                                                      |                                                              |
|                                                              |                     | status             | String                                                     | 启用状态                                                     |
|                                                              |                     | description        | String                                                     | 规则描述                                                     |
|                                                              |                     | group_role_id      | String                                                     | 关联的角色组id                                               |
|                                                              |                     | root_user_id       | String                                                     | 所有者root用户id                                             |
|                                                              |                     | owner              | String                                                     | 所有者id                                                     |
|                                                              |                     | console_id         | String                                                     | 控制台id                                                     |
|                                                              |                     | iam_policy_id      | String                                                     | iam策略id                                                    |
|                                                              |                     | controller         | String                                                     | 控制器                                                       |
|                                                              |                     | create_time        | String                                                     | 创建时间                                                     |
|                                                              |                     | principle          | Json                                                       | 规则详情                                                     |
|                                                              |                     | policy             | String                                                     | 规则类型                                                     |
|                                                              |                     | status_time        | TimeStamp                                                  | 更新时间                                                     |
|                                                              |                     | group_role_rule_id | String                                                     | 角色组规则id                                                 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?status=[]
&verbose=1
&group_roles=["gr-5590xkq2"]
&action=DescribeGroupRoles
&owner=usr-WantwZJ8
&zone=test
&project_id=pj-xzvlxlb5
```

### 响应示例

```json
{
    "action": "DescribeGroupRolesResponse",
    "total_count": 1,
    "group_role_set": [
        {
            "read_only": 0,
            "status": "enabled",
            "group_role_rule_set": [
                {
                    "status": "enabled",
                    "description": null,
                    "group_role_id": "gr-5590xkq2",
                    "root_user_id": "usr-WantwZJ8",
                    "owner": "usr-WantwZJ8",
                    "console_id": "alphacloud",
                    "iam_policy_id": "",
                    "controller": "self",
                    "create_time": "2021-12-27T10:54:35",
                    "principle": "",
                    "policy": "monitor.describe",
                    "status_time": "2021-12-27T10:54:35",
                    "group_role_rule_id": "grr-gevekekh"
                },
                {
                    "status": "enabled",
                    "description": null,
                    "group_role_id": "gr-5590xkq2",
                    "root_user_id": "usr-WantwZJ8",
                    "owner": "usr-WantwZJ8",
                    "console_id": "alphacloud",
                    "iam_policy_id": "",
                    "controller": "self",
                    "create_time": "2021-12-27T10:54:35",
                    "principle": "",
                    "policy": "all.describe",
                    "status_time": "2021-12-27T10:54:35",
                    "group_role_rule_id": "grr-tlq2l8tk"
                }
            ],
            "description": "test",
            "group_role_id": "gr-5590xkq2",
            "status_time": "2021-12-27T02:54:35Z",
            "create_time": "2021-12-27T02:54:35Z",
            "iamg_role_id": null,
            "group_role_name": "test",
            "role_type": "rule"
        }
    ],
    "ret_code": 0
}
```

