---
title: "DescribeAlarmHistory"
description: 
draft: false
---

获取资源的监控告警历史。

资源监控过程中的重要事件都会记录在告警历史中，历史记录包括：

> 
> 
> *   当修改了告警策略，并应用修改后，历史中会有一条配置变化的记录。
> *   当资源监控状态发生变化时，会有相应的记录。
> *   当执行告警事件时，也会有相应的记录。
> 
> 

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm | String | 资源告警实体的 ID | Yes |
| history_type | String | 告警历史的类型：<br/>*   “trigger_action”: 触发告警行为<br/>*   “status_change”: 告警状态发生变化<br/>*   “config_update”: 告警策略配置更新 | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| alarm_history_set | Array | JSON 格式的数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| alarm_id | String | 资源告警实体 ID |
| alarm_history_id | String | 告警历史 ID |
| history_type | String | 历史记录类型<br/>*   “trigger_action”: 触发告警行为<br/>*   “status_change”: 告警状态发生变化<br/>*   “config_update”: 告警策略配置更新 |
| create_time | String | 历史的创建时间 |
| description | String | 历史的详细内容 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeAlarmHistory
&alarm=alm-xxxxxx
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeAlarmHistoryResponse",
  "total_count":1,
  "alarm_set":[
    {
      "alarm_id":"alm-xxxx",
      "alarm_history_id":"almh-xxxx",
      "history_type":"config_update",
      "description":"configuration update",
      "create_time":"2014-06-07T02:12:43Z"
    }
  ],
  "ret_code":0
}
```
