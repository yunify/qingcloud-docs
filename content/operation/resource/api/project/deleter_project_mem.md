---
title: "DeleteProjectMembers"
description: 本小节主要介绍添加项目成员接口。 
keyword: 创建项目
weight: 140
collapsible: false
draft: false

---



删除项目成员。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | DeleteProjectMembers（删除项目成员）                         | true                                                         |
| project_member_ids                                           | Array                                                    | 成员id列表                                                   | true                                                         |
| user_group_id                                                | String                                                   | 用户组id                                                     | true                                                         |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |
| owner                                                        | String                                                   | 所有者id                                                     | false                                                        |
| zone                                                         | String                                                   | 区域id                                                       | false                                                        |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                     | DeleteProjectMembersResponse                                 |
| project_member_ids                                           | Array                                                      | 成员id列表                                                   |
| ret_code                                                     | Integer                                                    | 执行成功与否，0 表示成功，其他值则为错误代码                 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=DeleteProjectMembers
&project_member_ids=["pm-87jtapek"]
&user_group_id=ug-vl9b6c7b
&owner=usr-WantwZJ8
&zone=test
&project_id=pj-xzvlxlb5
```

### 响应示例

```json
{
    "action": "DeleteProjectMembersResponse",
    "project_member_ids": [
        "pm-87jtapek"
    ],
    "ret_code": 0
}
```