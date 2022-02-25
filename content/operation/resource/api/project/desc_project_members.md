---
title: "DescribeProjectMembers"
description: 本小节主要介绍查询项目成员接口。 
keyword: 创建项目
weight: 160
collapsible: false
draft: false

---



查询项目成员。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | DescribeProjectMembers（查询项目成员）                       | true                                                         |
| project_member_ids                                           | Array                                                    | 项目成员id列表，不传默认查询当前项目所有成员                 | false                                                        |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |
| owner                                                        | String                                                   | 所有者id                                                     | false                                                        |
| zone                                                         | String                                                   | 区域id                                                       | false                                                        |
| offset                                                       | Integer                                                  | 数据偏移量，默认为0                                          | false                                                        |
| limit                                                        | Integer                                                  | 返回数据长度，默认为20，最大100                              | false                                                        |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | Items                  | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | ---------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       |                        | String                                                     | DescribeProjectMembersResponse                               |
| total_count                                                  |                        | Integer                                                    | 根据过滤条件得到的规则总数                                   |
| project_member_set                                           |                        | Array                                                      | 成员id                                                       |
|                                                              | is_project_owner       | Integer                                                    | 1表示项目管理员，0表示普通成员                               |
|                                                              | description            | String                                                     | 描述                                                         |
|                                                              | project_member_name    | String                                                     | 成员名称                                                     |
|                                                              | project_member_user_id | String                                                     | 组员id                                                       |
|                                                              | enabled                | Integer                                                    | 启用状态                                                     |
|                                                              | gravatar_email         | String                                                     | 成员邮箱                                                     |
|                                                              | console_id             | String                                                     | 控制台id                                                     |
|                                                              | project_member_id      | String                                                     | 成员id                                                       |
|                                                              | root_user_id           | String                                                     | 所有者root用户id                                             |
|                                                              | create_time            | TimeStamp                                                  | 添加时间                                                     |
|                                                              | project_member_info    | String                                                     | 成员信息                                                     |
|                                                              | group_role_name        | String                                                     | 成员名称                                                     |
|                                                              | owner                  | String                                                     | 所有者id                                                     |
|                                                              | role                   | String                                                     | 角色组id                                                     |
|                                                              | user_group_id          | String                                                     | 用户组id                                                     |
|                                                              | project_id             | String                                                     | 项目id                                                       |
|                                                              | project_member_type    | String                                                     | 成员类型                                                     |
| ret_code                                                     |                        | Integer                                                    | 执行成功与否，0表示成功，其他值则为错误代码                  |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?project_member_ids=["pm-ktheaopu"]
&action=DescribeProjectMembers
&owner=usr-WantwZJ8&zone=test
&offset=0
&limit=100
&project_id=pj-xzvlxlb5
```

### 响应示例

```json
{
    "action": "DescribeProjectMembersResponse",
    "total_count": 2,
    "project_member_set": [
        {
            "is_project_owner": 0,
            "description": "",
            "project_member_name": "mrwel",
            "project_member_user_id": "usr-8KbYub3G",
            "enabled": 1,
            "gravatar_email": "mrwel@qq.com",
            "console_id": "alphacloud",
            "project_member_id": "pm-ktheaopu",
            "root_user_id": "usr-WantwZJ8",
            "create_time": "2021-12-27T08:02:50Z",
            "project_member_info": "mrwel@qq.com",
            "group_role_name": "member",
            "owner": "usr-WantwZJ8",
            "role": "gr-yorri8fd",
            "user_group_id": "ug-5etmscyn",
            "project_id": "pj-xzvlxlb5",
            "project_member_type": "user"
        },
        {
            "is_project_owner": 1,
            "description": "",
            "project_member_name": "welwei",
            "project_member_user_id": "usr-WantwZJ8",
            "enabled": 1,
            "gravatar_email": "welwei@yunify.com",
            "console_id": "alphacloud",
            "project_member_id": "pm-qxpqjxxs",
            "root_user_id": "usr-WantwZJ8",
            "create_time": "2021-12-27T02:53:01Z",
            "project_member_info": "welwei@yunify.com",
            "group_role_name": "owner",
            "owner": "usr-WantwZJ8",
            "role": "gr-a0i288nm",
            "user_group_id": "ug-6tz638ma",
            "project_id": "pj-xzvlxlb5",
            "project_member_type": "user"
        }
    ],
    "ret_code": 0
}
```