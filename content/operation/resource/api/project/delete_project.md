---
title: "DeleteProjects"
description: 本小节主要介绍删除项目接口。 
keyword: 创建项目
weight: 20
collapsible: false
draft: false

---



删除一个或多个项目。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:200">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | DeleteteProjects（删除项目）                                 | true                                                         |
| project_ids                                                  | Array                                                    | 项目id列表                                                   | true                                                         |
| owner                                                        | String                                                   | 所有者                                                       | false                                                        |
| zone                                                         | String                                                   | 区域id                                                       | false                                                        |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                     | DeleteProjectsResponse                                       |
| project_ids                                                  | Array                                                      | 项目id列表                                                   |
| owner                                                        | String                                                     | 所有者                                                       |
| zone                                                         | String                                                     | 区域id                                                       |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=DeleteProjects
&project_ids=["pj-zqtfs0ao"]
&owner=usr-g8ZyBo6l
&zone=testing
```

### 响应示例

```json
{
    "action":"DeleteProjectsResponse",
    "project_ids":[
        "pj-zqtfs0ao"
    ],
    "ret_code":0
}
```