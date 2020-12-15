---
title: "DescribeZones"
description: 
draft: false
---



获取可访问的区域列表。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| zones.n | String | 区域ID | No |
| status.n | String | 区域状态，有效值为 active, faulty, defunct。 | No |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| zone_set | Array | JSON 格式的区域数据列表，每项数据可见下面 [ResponseItemType](#responseitemtype) |
| total_count | Integer | 根据过滤条件得到的区域总数 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**ResponseItemType**

| Name | Type | Description |
| --- | --- | --- |
| zone_id | String | 区域ID |
| status | String | 区域状态，有效值为 active, faulty, defunct。<br/>active: 正常开放<br/>faulty: 不可用<br/>defunct: 已报废 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DescribeZones
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DescribeZonesResponse",
  "total_count":1,
  "zone_set":[
    {
      "status":"active",
      "zone_id":pek3a
    },
    {
      "status":"active",
      "zone_id":gd2
    },
    {
      "status":"active",
      "zone_id":ap2a
    }
  ],
  "ret_code":0
}
```
