---
title: "GetChargeRecords"
description: 
draft: false
---



获取指定资源的消费记录。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource | String | 资源 ID | Yes |
| zone | String | 区域 ID | Yes |
| start_time | String | 消费记录的起始 **UTC** 时间，格式为 2011-07-11T11:07:00Z 或 2011-07-11T11:07:00.520Z | No |
| end_time | String | 消费记录的结束 **UTC** 时间，格式为 2011-07-11T11:07:00Z 或 2011-07-11T11:07:00.520Z | No |
| offset | Integer | 数据偏移量，默认为0 | No |
| limit | Integer | 返回数据长度，默认为20，最大100 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| charge_record_set | Array | 消费记录列表，每项参数可见下面 [Response Item](#response-item) |
| total_sum | String | 根据过滤条件汇总的总金额 |
| total_count | Integer | 根据过滤条件得出的总记录数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| resource_id | String | 资源 ID |
| resource_name | String | 资源名称 |
| resource_type | String | 资源类型 |
| start_time | TimeStamp | 本次扣费的起始时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| end_time | TimeStamp | 本次扣费的截止时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| currency | String | 币种 |
| duration | String | 单价周期，1h 表示单价周期为1小时 |
| price | String | 单价 |
| fee | String | 本次扣费的金额 |
| total_sum | Integer | 本次扣费如果是按用量计费，此项是用量统计 |
| unit | String | 单位，默认按时长收费则为 hour，按用量收费则是对应的计量单位 |
| remarks | String | 备注 |
| zone_id | String | 区域 ID |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=GetChargeRecords
&resource=i-jahdgzez
&zone=gd2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"GetChargeRecordsResponse",
  "charge_record_set":[
    {
      "user_id":"usr-aEcGMK98",
      "resource_id":"eip-c2sz8q0o",
      "resource_name":"transit",
      "resource_type":"eip",
      "start_time":"2019-02-28T16:14:03Z",
      "end_time":"2019-03-26T03:14:03Z",
      "duration":"1h",
      "currency":"cny",
      "unit":"GB",
      "remarks":"elastic ip traffic fee",
      "total_sum":0.105,
      "price":"1.06",
      "fee":"0.1117",
      "zone_id":"test"
    }
  ],
  "total_sum":"1619.977",
  "total_count":16,
  "ret_code":0
}
```
