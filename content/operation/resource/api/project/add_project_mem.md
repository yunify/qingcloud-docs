---
title: "AddProjectMember"
description: 本小节主要介绍添加项目成员接口。 
keyword: 创建项目
weight: 130
collapsible: false
draft: false

---



添加项目成员。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | Items               | <span style="display:inline-block;width:100">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | ------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       |                     | String                                                   | AddProjectMember（添加项目成员）                             | true                                                         |
| project_members                                              |                     | Array                                                    | 添加的成员列表                                               | true                                                         |
|                                                              | project_member_name | String                                                   | 成员名称                                                     | true                                                         |
|                                                              | project_member_info | String                                                   | 成员信息                                                     | true                                                         |
|                                                              | project_member_type | String                                                   | 成员类型                                                     | true                                                         |
|                                                              | role                | String                                                   | 成员角色                                                     | true                                                         |
| project_id                                                   |                     | String                                                   | 区域id                                                       | true                                                         |
| owner                                                        |                     | String                                                   | 所有者id                                                     | false                                                        |
| zone                                                         |                     | String                                                   | 区域id                                                       | false                                                        |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                     | AddProjectMemberResponse                                     |
| project_member_ids                                           | Array                                                      | 成员id列表                                                   |
| ret_code                                                     | Integer                                                    | 执行成功与否，0 表示成功，其他值则为错误代码                 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=AddProjectMember
&project_members=[{"project_member_name":"mrwel","project_member_info":"mrwel@qq.com","project_member_type":"user","role":"gr-yorri8fd"}]
&owner=usr-WantwZJ8
&zone=test
&project_id=pj-xzvlxlb5
```

### 响应示例

```json
{
    "action": "AddProjectMemberResponse",
    "project_member_ids": [
        "pm-87jtapek"
    ],
    "ret_code": 0
}
```