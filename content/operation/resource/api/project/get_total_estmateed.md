---
title: "GetTotalEstimatedConsumption"
description: 本小节主要介绍获取项目总消耗量接口。 
keyword: 创建项目
weight: 190
collapsible: false
draft: false

---



获取项目总消耗量。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | GetTotalEstimatedConsumption（获取项目总消耗量）             | true                                                         |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |
| root_user                                                    | String                                                   | 所有者root_id                                                | true                                                         |
| group_by                                                     | String                                                   | 查询类型                                                     | true                                                         |
| offset                                                       | Integer                                                  | 数据偏移量，默认为0                                          | false                                                        |
| limit                                                        | Integer                                                  | 返回数据长度，默认为100                                      | false                                                        |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                     | GetTotalEstimatedConsumptionResponse                         |
| elastic_price                                                | Integer                                                    | 弹性计费                                                     |
| total_resource_count                                         | Integer                                                    | 资源总量                                                     |
| elastic_resource_count                                       | Integer                                                    | 弹性资源计数                                                 |
| reserved_resource_count                                      | Integer                                                    | 保留资源统计                                                 |
| reserved_price                                               | Integer                                                    | 保留计费                                                     |
| total_price                                                  | Integer                                                    | 计费统计                                                     |
| total_count                                                  | Integer                                                    | 根据过滤条件得到的规则总数                                   |
| ret_code                                                     | Integer                                                    | 执行成功与否，0 表示成功，其他值则为错误代码                 |
| total_estimated_consumption_set                              | Array                                                      | 总估计消耗量集合                                             |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?project_id=pj-xzvlxlb5
&action=GetTotalEstimatedConsumption
&offset=0
&limit=100
&group_by=resource_type
&root_user=usr-WantwZJ8
&duration=7d
```

### 响应示例

```json
{
    "total_estimated_consumption_set": [],
    "total_resource_count": 0,
    "elastic_price": "0",
    "ret_code": 0,
    "total_count": 0,
    "elastic_resource_count": 0,
    "reserved_resource_count": 0,
    "reserved_price": "0",
    "total_price": "0",
    "action": "GetTotalEstimatedConsumptionResponse"
}
```