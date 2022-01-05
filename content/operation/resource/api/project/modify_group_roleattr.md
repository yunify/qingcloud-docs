---
title: "ModifyGroupRoleAttributes"
description: 本小节主要介绍更新角色组。 
keyword: 创建项目
weight: 70
collapsible: false
draft: false

---

更新角色组。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:200">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | ModifyGroupRoleAttributes（更新角色组）                      | true                                                         |
| group_role_name                                              | String                                                   | 角色组名称                                                   | false                                                        |
| description                                                  | String                                                   | 描述                                                         | false                                                        |
| group_role                                                   | String                                                   | 角色组id                                                     | true                                                         |
| owner                                                        | String                                                   | 所有者                                                       | false                                                        |
| zone                                                         | String                                                   | 区域id                                                       | false                                                        |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                     | ModifyGroupRoleAttributesResponse                            |
| group_role_id                                                | String                                                     | 角色组id                                                     |
| ret_code                                                     | Integer                                                    | 执行成功与否，0表示成功，其他值则为错误代码                  |
| description                                                  | String                                                     | 被更新的角色组描述                                           |
| group_role_name                                              | String                                                     | 被更新的角色组名称                                           |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?group_role_name=test
&description=test
&action=ModifyGroupRoleAttributes
&group_role=gr-5590xkq2
&owner=usr-WantwZJ8
&zone=test
&project_id=pj-xzvlxlb5
```

### 响应示例

```json
{
    "action": "ModifyGroupRoleAttributesResponse",
    "group_role_id": "gr-5590xkq2",
    "ret_code": 0,
    "description": "test",
    "group_role_name": "test"
}
```