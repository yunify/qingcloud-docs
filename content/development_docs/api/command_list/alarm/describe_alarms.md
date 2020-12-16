---
title: "DescribeAlarms"
description: 
draft: false
---

获取一个或多个资源的监控告警实体，可通过告警策略 ID 或资源 ID 过滤需要的告警实体。

资源监控告警实体，是通过将“告警策略”关联到“资源”后生成的。它会定期检查资源监控数据， 判断是否满足告警条件，如若满足，则触发告警行为。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarms.n | String | 资源告警ID | No |
| policy | String | 告警策略 ID | No |
| status | String | 告警状态：ok - 正常，alarm - 告警中，insufficient - 无法采集监控数据 | No |
| resource | String | 告警关联的资源 ID | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| alarm_set | Array | JSON 格式的数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| alarm_id | String | 资源告警ID |
| status | String | 资源告警状态 |
| alarm_policy_id | String | 监控告警策略 ID |
| resource_id | String | 该告警关联的资源 ID |
| related_resource | String | 如果关联的是负载均衡器，那此项参数表示监控的是负载均衡器绑定的哪个 IP 。 其他资源类型此项为空。 |
| create_time | String | 此告警的创建时间 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeAlarms
&resource=i-xxxxxx
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeAlarmsResponse",
  "total_count":1,
  "alarm_set":[
    {
      "alarm_id":"alm-xxxxxx",
      "status":"alarm",
      "alarm_policy_id":"alp-xxxx",
      "resource_id":"i-xxxxx",
      "related_resource":"",
      "create_time":"2013-08-30T05:13:50Z"
    }
  ],
  "ret_code":0
}
```
