---
title: "ModifyProjectAttributes"
description: 本小节主要介绍删除项目接口。 
keyword: 创建项目
weight: 30
collapsible: false
draft: false

---



更新项目。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | Items | <span style="display:inline-block;width:200">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | ----- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       |       | String                                                   | ModifyProjectAttributes（更新项目）                          | true                                                         |
| project_name                                                 |       | String                                                   | 项目名称                                                     | false                                                        |
| description                                                  |       | String                                                   | 项目描述                                                     | false                                                        |
| meta                                                         |       | Array                                                    | 项目属性                                                     | false                                                        |
|                                                              | color | String                                                   | 颜色属性                                                     | false                                                        |
| owner                                                        |       | String                                                   | 所有者                                                       | false                                                        |
| zone                                                         |       | String                                                   | 区域id                                                       | false                                                        |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | Items | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | ----- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       |       | String                                                     | ModifyProjectAttributesResponse                              |
| project_name                                                 |       | String                                                     | 项目名称                                                     |
| project_ids                                                  |       | String                                                     | 需要查询的项目id列表                                         |
| meta                                                         |       | Array                                                      | 项目属性                                                     |
|                                                              | color | String                                                     | 颜色属性                                                     |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=ModifyProjectAttributes
&project_name=T1a
&description=
&meta=[{"color":"#324558"}]
&project_id=pj-wijjziy3
&owner=usr-g8ZyBo6l
&zone=testing
```

### 响应示例

```json
{
    "action":"ModifyProjectAttributesResponse",
    "project_name":"T1a",
    "project_id":"pj-wijjziy3",
    "meta":"[{\"color\":\"#324558\"}]",
    "ret_code":0
}
```