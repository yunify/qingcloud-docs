---
title: "DescribeAlarmPolicies"
description: 
draft: false
---

获取一个或多个告警策略。

可根据告警策略ID，名称，类型作为过滤条件，获取告警策略列表。 如果不指定任何过滤条件，默认返回你所拥有的所有告警策略。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| alarm_policies.n | String | 告警策略ID | No |
| alarm_policy_name | String | 告警策略名称 | No |
| alarm_policy_type | String | 支持告警策略类型，目前支持： ‘instance’, ‘eip’, ‘router’ ‘loadbalancer_listener_tcp’, ‘loadbalancer_listener_https’, ‘loadbalancer_listener_http’, ‘loadbalancer_backend_http’, ‘loadbalancer_backend_tcp’, ‘rdb_mysql’, ‘rdb_psql’, ‘elasticsearch_node’, ‘cache_node_memcached’, ‘cache_node_redis’, ‘queue_node_kafka’, ‘spark_node’, ‘hadoop_node’, ‘zookeeper_node’, ‘hbase_node’, ‘mongo_instance’, ‘storm_node’, | No |
| status.n | String | 告警策略状态，有效值为 active, deleted, ceased | No |
| search_word | String | 搜索关键词，支持告警策略名称 | No |
| verbose | Integer | 是否返回冗长的信息，若为1，则返回绑定了该告警策略的资源的信息，默认为0. | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| alarm_policy_set | Array | JSON 格式的数据列表，每项参数可见下面 [Response Item](#response-item) |
| total_count | Integer | 根据过滤条件得到的总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| alarm_policy_id | String | 告警策略ID |
| alarm_policy_name | String | 告警策略名称 |
| description | String | 告警策略描述 |
| resources | Array | 该告警策略绑定的资源 ID 列表 |
| alarm_policy_type | String | 该告警策略类型 |
| is_applied | Integer | 告警策略的改动是否应用了。 可参见 [_ApplyAlarmPolicy_](../apply_alarm_policy/) |
| status | String | 告警策略状态 |
| create_time | TimeStamp | 告警策略创建时间 |
| status_time | TimeStamp | 告警策略最后一次状态变化的时间 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeAlarmPolicies
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeAlarmPoliciesResponse",
  "total_count":1,
  "alarm_policy_set":[
    {
      "alarm_policy_id":"alarm_policy-axbkmf20",
      "alarm_policy_name":"alarm_policy 1",
      "alarm_policy_type":"instance",
      "description":"",
      "status":"active",
      "owner":"usr-xxxxx",
      "resources":["i-xxxxxx"],
      "create_time":"2013-08-30T05:13:50Z",
      "status_time":"2013-08-30T05:13:50Z",
    }
  ],
  "ret_code":0
}
```
