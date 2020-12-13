---
title: "GrantQuotaIndep"
description: 
draft: false
---



授权给子账户使其拥有独立配额

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| user | String | 子账户的user_id | Yes |
| zone | String | 区域ID | Yes |
| instance | Integer |   | No |
| cpu | Integer |   | No |
| memory | Integer |   | No |
| hp_instance | Integer |   | No |
| hp_cpu | Integer |   | No |
| hp_memory | Integer |   | No |
| volume | Integer |   | No |
| volume_size | Integer |   | No |
| hc_volume | Integer |   | No |
| hc_volume_size | Integer |   | No |
| hpp_volume | Integer |   | No |
| hpp_volume_size | Integer |   | No |
| image | Integer |   | No |
| loadbalancer | Integer |   | No |
| loadbalancer_policy | Integer |   | No |
| vxnet | Integer |   | No |
| router | Integer |   | No |
| eip | Integer |   | No |
| eip_bandwidth | Integer |   | No |
| rdb | Integer |   | No |
| hpp_rdb | Integer |   | No |
| cache | Integer |   | No |
| hp_cache | Integer |   | No |
| mongo | Integer |   | No |
| hp_mongo | Integer |   | No |

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |
| user_id | String | 同请求参数里的user，拥有独立配额的子账户的用户ID |
| zone_id | String | 同请求参数里的zone |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=GrantQuotaIndep
&user=usr-P9P3grKr
&zone=test
&volume=10
&volume_size=100
```

_Example Response_:

```
{
  "action":"GrantQuotaIndepResponse",
  "user_id":"usr-P9P3grKr",
  "zone_id":"test",
  "ret_code":0
}
```
