---
title: "GetLeaseInfo"
description: 
draft: false
---



获取指定资源的租赁信息。


**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| resource | String | 资源 ID | Yes |
| zone | String | 区域 ID | Yes |
| user | String | 用户 ID | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| resource_id | String | 资源 ID |
| lease_info | Dictionary | 租赁信息，每项参数可见下面 [Response Item](#response-item) |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Response Item**

| Name | Type | Description |
| --- | --- | --- |
| resource_id | String | 资源 ID |
| status | String | 租赁状态，active 表示租赁正常，此时可删除资源。如果租赁还未准备好是不允许删除的。 |
| lease_time | TimeStamp | 资源租赁时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| renewal_time | TimeStamp | 租赁信息的下次更新时间，为UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime). |
| contract | Dictionary | 租赁合约信息<br/>duration: 计价周期，默认为 “1h”，即 1 小时<br/price: 计价周期内的单价，单位 元<br/start_time: 合约起始时间，UTC时间，格式可参见 [ISO8601](http://www.w3.org/TR/NOTE-datetime).<br/contract_id: 合约ID |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=GetLeaseInfo
&resource=i-jahdgzez
&zone=gd2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"GetLeaseInfoResponse",
  "ret_code":0,
  "lease_info":{
    "lease_time":"2014-04-12T08:35:05Z",
    "zone_id":"gd2",
    "renewal":"auto",
    "resource_id":"ss-ohfgimh8",
    "contract":{
      "duration":"1h",
      "price":"0.01",
      "start_time":"2014-04-12T08:35:05Z",
      "contract_id":"ct-Vctpq0q7"
    },
    "renewal_time":"2014-04-12T10:35:05Z"
  },
  "resource_id":"ss-ohfgimh8"
}
```
