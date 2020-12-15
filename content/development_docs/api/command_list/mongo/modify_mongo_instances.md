---
title: "ModifyMongoInstances"
description: 
draft: false
---



修改 Mongo 集群相关属性值。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| mongo | String | Mongo ID | Yes |
| private_ips | List of dictionary | 私有网络 IP 地址；例如 [{“mi-y5kxxvem”: “192.168.160.33”}] | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyMongoInstances
&mongo=mongo-66varrpz
&private_ips.0.mi-y5kxxvem=192.168.160.33
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyMongoInstancesResponse",
  "ret_code":0,
  "mongo":"mongo-66varrpz",
  "job_id":"j-b9960dz1"
}
```
