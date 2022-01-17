---
title: "DescribeProjects"
description: 本小节主要介绍查询项目接口。 
keyword: 创建项目
weight: 40
collapsible: false
draft: false

---



查询项目。

## 请求参数-1

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:200">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | DescribeProjects（更新项目）                                 | true                                                         |
| offset                                                       | Integer                                                  | 数据偏移量，默认为0                                          | false                                                        |
| limiit                                                       | Integer                                                  | 返回数据长度，默认为20，最大100                              | false                                                        |
| sort_key                                                     | Array                                                    | 排序条件                                                     | false                                                        |
| reverse                                                      | Integer                                                  | 翻转排序                                                     | false                                                        |
| shared                                                       | Boolean                                                  | 显示被添加到的项目                                           | false                                                        |
| owner                                                        | String                                                   | 所有者                                                       | false                                                        |
| zone                                                         | String                                                   | 区域id                                                       | false                                                        |

## 请求消息-2

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> | required |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- | -------- |
| action                                                       | String                                                     | DescribeProjects                                             | true     |
| project_ids                                                  | Array                                                      | 项目id列表                                                   | true     |
| owner                                                        | String                                                     | 所有者                                                       | false    |
| zone                                                         | String                                                     | 区域id                                                       | false    |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | Items             | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | ----------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       |                   | String                                                     | DescribeProjectsResponse                                     |
| total_count                                                  |                   | Integer                                                    | 根据过滤条件得到的项目总数                                   |
| ret_code                                                     |                   | Integer                                                    | 执行成功与否，0表示成功，其他值则为错误代码                  |
| project_set                                                  |                   | Array                                                      | 项目列表                                                     |
|                                                              | project_id        | String                                                     | 项目id                                                       |
|                                                              | status            | String                                                     | 项目状态                                                     |
|                                                              | resource_group_id | String                                                     | 项目关联资源组id                                             |
|                                                              | project_name      | String                                                     | 项目名称                                                     |
|                                                              | description       | String                                                     | 项目描述                                                     |
|                                                              | owner_name        | String                                                     | 项目所有者名称                                               |
|                                                              | enabled           | Integer                                                    | 项目可用状态，1表示可用，0表示不可用                         |
|                                                              | console_id        | String                                                     | 控制台id                                                     |
|                                                              | meta              | Array                                                      | 项目属性                                                     |
|                                                              | create_time       | TimeStamp                                                  | 创建时间                                                     |
|                                                              | owner             | String                                                     | 所有者id                                                     |
|                                                              | root_user_id      | String                                                     | 所有者的root用户id                                           |

## 

## 示例 

### 请求示例-1

```url
https://api.qingcloud.com/iaas/?owner=usr-g8ZyBo6l&action=DescribeProjects
&offset=0
&limit=100
&sort_key=create_time
&reverse=1&shared=true
```

### 请求示例-2

```url
https://api.qingcloud.com/iaas/?project_ids=["pj-zqtfs0ao","pj-wijjziy3"]&action=DescribeProjects
&owner=usr-g8ZyBo6l
&zone=testing
&project_id=pj-zqtfs0ao
```



### 响应示例

```json
{
    "action": "DescribeProjectsResponse",
    "project_set": [
        {
            "status": "active",
            "resource_group_id": "rg-mxljmgu9",
            "project_name": "api",
            "description": "",
            "owner_name": "welwei",
            "enabled": 1,
            "console_id": "testingcloud",
            "root_user_id": "usr-g8ZyBo6l",
            "meta": "[{\"color\":\"#324558\"}]",
            "create_time": "2021-12-24T02:46:05Z",
            "owner": "usr-g8ZyBo6l",
            "project_id": "pj-zqtfs0ao"
        },
        {
            "status": "active",
            "resource_group_id": "rg-96675ybo",
            "project_name": "T1",
            "description": "",
            "owner_name": "welwei",
            "enabled": 1,
            "console_id": "testingcloud",
            "root_user_id": "usr-g8ZyBo6l",
            "meta": "[{\"color\":\"#324558\"}]",
            "create_time": "2021-12-20T04:22:17Z",
            "owner": "usr-g8ZyBo6l",
            "project_id": "pj-wijjziy3"
        }
    ],
    "total_count": 2,
    "ret_code": 0
}
```