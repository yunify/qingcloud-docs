---
title: "DeleteGroupRoles"
description: 本小节主要介绍创建角色组接口。 
keyword: 创建项目
weight: 60
collapsible: false
draft: false


---

删除角色组。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:200">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | DeleteGroupRoles（删除角色组）                               | true                                                         |
| group_roles                                                  | Array                                                    | 角色组id列表                                                 | true                                                         |
| owner                                                        | String                                                   | 所有者                                                       | false                                                        |
| zone                                                         | String                                                   | 区域id                                                       | false                                                        |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                     | DeleteGroupRolesResponse                                     |
| group_role_ids                                               | Array                                                      | 角色组id列表                                                 |
| ret_code                                                     | Integer                                                    | 执行成功与否，0表示成功，其他值则为错误代码                  |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=DeleteGroupRoles
&group_roles=["gr-gg5l0faz"]
&owner=usr-WantwZJ8
&zone=test
&project_id=pj-xzvlxlb5
```

### 响应示例

```json
{
    "action": "DeleteGroupRolesResponse",
    "group_role_ids": [
        "gr-gg5l0faz"
    ],
    "ret_code": 0
}
```