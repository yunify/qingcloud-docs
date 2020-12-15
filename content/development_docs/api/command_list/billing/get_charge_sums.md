---
title: "GetChargeSums"
description: 
draft: false
---



获取消费统计数据。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| user | List(string) | 过滤子账号 | No |
| root_user | String | 过滤账号 | No |
| project_id | List(string) | 过滤项目 | No |
| zone | List(string) | 过滤一个或多个zone_id | No |
| resource_type | List(string) | 过滤一个或多个资源类型 | No |
| resource| List(string) | 过滤一个或多个资源 ID | No |
| group_by | list(string) |  按维度统计: 如果为空，则按总消费统计 [project_id]: 按项目统计 [resource_id]: 按资源 ID统计 [tag_id]: 按标签统计 [zone_id]: 按区域统计 [user_id]: 按子账号统计 [resource_type]: 按资源类型统计 | No |
| duration | String |  统计的周期：daily: 按天统计 weekly: 按周统计 monthly: 按月统计 quarterly: 按季度统计 yearly: 按年统计 total: 汇总| Yes |
| start_time | String | 开始时间 **UTC** 时间，格式为 2011-07-11T11:07:00Z 或 2011-07-11T11:07:00.520Z | No |
| end_time | String | 结束时间 **UTC** 时间，格式为 2011-07-11T11:07:00Z 或 2011-07-11T11:07:00.520Z | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度| No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| charge_sum_set | Array | 消费记录列表，每项参数可见下面 [Response Item](#response-item) |
| total_sum | String | 根据过滤条件汇总的总金额 |
| total_count | Integer | 根据过滤条件得出的总记录数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| root_user_id | String | 主账号 |
| user_id | String | 子账号 |
| project_id | String | 项目 ID |
| zone_id | String | 区域id |
| resource_id | String | 资源 ID |
| resource_type | String | 资源类型 |
| fee | String | 消费金额 |

**Example**

统计某个用户一段时间均摊消费

_Example Request_

```
https://api.qingcloud.com/iaas/?action=GetChargeSums
&user=usr-abcd1234
&duration=total
&zone=gd2
&start_time=2019-02-28T16:00:00.000Z
&end_time=2019-03-31T15:59:59.999Z
&COMMON_PARAMS
```

_Example Response_:
```
{
  "action":"GetChargeSumsResponse",
  "total_count":1,
  "charge_sum_set":{
    "usr-i3K70DIf":[
      {
        "fee":"63.36",
        "root_user_id":"usr-i3K70DIf",
        "total":"total",
        "total_sum":0.0
      }
    ]
  },
  "ret_code":0,
  "total_sum":"63.36"
}
```

按resource_type 统计

_Example Request_

```
https://api.qingcloud.com/iaas/?action=GetChargeSums
&user=usr-abcd1234
&duration=total
&zone=gd2
&group_by=reousrce_type
&start_time=2019-02-28T16:00:00.000Z
&end_time=2019-03-31T15:59:59.999Z
&COMMON_PARAMS
```

_Example Response_:
```
{
	'action': 'GetChargeSumsResponse',
	'total_count': 1,
	'charge_sum_set': {
		'instance': [{
			'fee': '1468.5478',
			'total': 'total',
			'resource_type': 'instance'
		}]
	},
	'ret_code': 0,
	'total_sum': '1468.5478'
}
```
