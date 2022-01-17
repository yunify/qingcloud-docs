---
title: "DescribeProjectResourceZones"
description: 本小节主要介绍获取项目总消耗量接口。 
keyword: 获取项目区域资源
weight: 200
collapsible: false
draft: false

---



获取项目区域资源。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | DescribeProjectResourceZones（获取项目区域资源）             | true                                                         |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |
| owner                                                        | String                                                   | 所有者id                                                     | true                                                         |
| zone                                                         | String                                                   | 不同区域的id                                                 | true                                                         |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                     | DescribeProjectResourceZonesResponse                         |
| total_count                                                  | Integer                                                    | 根据过滤条件得到的规则总数                                   |
| ret_code                                                     | Integer                                                    | 执行成功与否，0 表示成功，其他值则为错误代码                 |
| project_resource_zones_set                                   | Array                                                      | 项目区域资源集合                                             |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?action=DescribeProjectResourceZones
&owner=usr-WantwZJ8
&zone=test
&project_id=pj-xzvlxlb5
```

### 响应示例

```json
{
    "action": "DescribeProjectResourceZonesResponse",
    "project_resource_zones_set": [
        ""
    ],
    "ret_code": 0,
    "total_count": 1
}
```