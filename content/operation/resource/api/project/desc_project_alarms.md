---
title: "DescribeProjectAlarms"
description: 本小节主要介绍获取项目告警接口。 
keyword: 创建项目
weight: 170
collapsible: false
draft: false

---



获取项目告警。

## 请求参数

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100">Type</span> | <span style="display:inline-block;width:280px">Description</span> | <span style="display:inline-block;width:100px">Required</span> |
| :----------------------------------------------------------- | :------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                   | DescribeProjectMembers（获取项目告警）                       | true                                                         |
| project_id                                                   | String                                                   | 项目id                                                       | true                                                         |
| zone                                                         | String                                                   | 区域id                                                       | false                                                        |
| offset                                                       | Integer                                                  | 数据偏移量，默认为0                                          | false                                                        |
| limit                                                        | Integer                                                  | 返回数据长度，默认为999                                      | false                                                        |

## 响应消息

| <span style="display:inline-block;width:100px">Parameter name</span> | <span style="display:inline-block;width:100px">Type</span> | <span style="display:inline-block;width:380px">Description</span> |
| :----------------------------------------------------------- | :--------------------------------------------------------- | :----------------------------------------------------------- |
| action                                                       | String                                                     | DescribeProjectAlarmsResponse                                |
| total_count                                                  | Integer                                                    | 根据过滤条件得到的规则总数                                   |
| ret_code                                                     | Integer                                                    | 执行成功与否，0表示成功，其他值则为错误代码                  |
| project_resource_alarm_set                                   | Array                                                      | 告警数据媒体                                                 |

## 示例 

### 请求示例

```url
https://api.qingcloud.com/iaas/?owner=usr-WantwZJ8
&zone=test
&project_id=pj-xzvlxlb5
&action=DescribeProjectAlarms
&offset=0&limit=999
```

### 响应示例

```json
{
    "action": "DescribeProjectAlarmsResponse",
    "total_count": 0,
    "project_resource_alarm_set": [],
    "ret_code": 0
}
```