---
title: "CreateGroupRoles"
description: 本小节主要介绍创建角色组接口。 
keyword: 创建项目
weight: 50
collapsible: false
draft: false

---

创建角色组。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:200">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | CreateGroupRoles（创建角色组）                               | true                                                         |
| role_type                                                    | String                                                   | 角色类型                                                     | true                                                         |
| group_role_name                                              | String                                                   | 角色组名称                                                   | false                                                        |
| description                                                  | String                                                   | 角色组描述                                                   | false                                                        |
| owner                                                        | String                                                   | 所有者                                                       | false                                                        |
| zone                                                         | String                                                   | 区域id                                                       | false                                                        |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                     | CreateGroupRolesResponse                                     |
| group_role_ids                                               | Array                                                      | 角色组id列表                                                 |
| ret_code                                                     | Integer                                                    | 执行成功与否，0表示成功，其他值则为错误代码                  |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=CreateGroupRoles
&role_type=rule
&group_role_name=a
&description=
&owner=usr-g8ZyBo6l
&zone=testing
&project_id=pj-dy5ln1zw
```

### 响应示例

```json
{
    "action": "CreateGroupRolesResponse",
    "group_role_ids": [
        "gr-gg5l0faz"
    ],
    "ret_code": 0
}
```