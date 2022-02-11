---
title: "ModifyProjectMemberAtrributes"
description: 本小节主要介绍更新项目成员接口。 
keyword: 创建项目
weight: 150
collapsible: false
draft: false


---



更新项目成员。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | ModifyProjectMemberAtrributes（更新项目成员）                | true                                                         |
| project_member_id                                            | String                                                   | 项目成员id                                                   | true                                                         |
| project_member_name                                          | String                                                   | 项目成员名称                                                 | true                                                         |
| role_id                                                      | String                                                   | 角色组id                                                     | true                                                         |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |
| owner                                                        | String                                                   | 所有者id                                                     | false                                                        |
| zone                                                         | String                                                   | 区域id                                                       | false                                                        |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                     | ModifyProjectMemberAtrributesResponse                        |
| project_member_id                                            | String                                                     | 成员id                                                       |
| ret_code                                                     | Integer                                                    | 执行成功与否，0 表示成功，其他值则为错误代码                 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=ModifyProjectMemberAtrributes
&project_member_id=pm-ktheaopu
&project_member_name=mrwel
&role=gr-2je0hh8l
&owner=usr-WantwZJ8
&zone=test
&project_id=pj-xzvlxlb5
```

### 响应示例

```json
{
    "action": "ModifyProjectMemberAtrributesResponse",
    "project_member_id": "pm-ktheaopu",
    "ret_code": 0
}
```