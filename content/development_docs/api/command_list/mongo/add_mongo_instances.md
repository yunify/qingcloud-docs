---
title: "AddMongoInstances"
description: 
draft: false
---



添加新节点到指定 Mongo 集群。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| mongo | String | Mongo ID | Yes |
| node_count | Integer | 新节点数量，默认为 1 | No |
| private_ips | List of dictionary | 私有网络 IP 地址；例如 [{“replica”: “192.168.100.2”}, {“replica”: “192.168.100.3”}] | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=AddMongoInstances
&mongo=mongo-3eykbc5x
&private_ips=[{"replica":"192.168.199.66"}]
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"AddMongoInstancesResponse",
  "ret_code":0,
  "mongo":"mongo-3eykbc5x",
  "job_id":"j-cfkyxdce"
}
```
