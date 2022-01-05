---
title: "CreateProject"
description: 本小节主要介绍创建项目接口。 
keyword: 创建项目
weight: 10
collapsible: false
draft: false

---



创建项目。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Items</span> | <span style="display:inline-block;width:100">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | ----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       |                                                             | String                                                   | CreateProject（创建项目）                                    | true                                                         |
| selected                                                     |                                                             | Boolean                                                  | 选中的                                                       | false                                                        |
| transition_status                                            |                                                             | String                                                   | 过渡状态                                                     | false                                                        |
| tags                                                         |                                                             | Array                                                    | 绑定的标签                                                   | false                                                        |
| resource_class                                               |                                                             | String                                                   | 资源类型                                                     | false                                                        |
| color                                                        |                                                             | String                                                   | 颜色                                                         | false                                                        |
| selcolor                                                     |                                                             | String                                                   | 选中颜色                                                     | false                                                        |
| project_name                                                 |                                                             | String                                                   | 项目名称                                                     | false                                                        |
| description                                                  |                                                             | String                                                   | 项目描述                                                     | false                                                        |
| meta                                                         |                                                             | Array                                                    | 项目属性                                                     | false                                                        |
|                                                              | color                                                       | String                                                   | 颜色属性                                                     | false                                                        |
| owner                                                        |                                                             | String                                                   | 所有者                                                       | false                                                        |
| zone                                                         |                                                             | String                                                   | 区域id                                                       | false                                                        |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                     | CreateProjectResponse                                        |
| project_id                                                   | String                                                     | 项目id                                                       |
| ret_code                                                     | Integer                                                    | 执行成功与否，0 表示成功，其他值则为错误代码                 |

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
    "action":"CreateProjectResponse",
    "project_id":"pj-zqtfs0ao",
    "ret_code":0
}
```