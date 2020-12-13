---
title: "ChangeMongoVxnet"
description: 
draft: false
---



变更 Mongo 集群的私有网络，即离开原有私有网络并加入新的私有网络。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| mongo | String | Mongo ID | Yes |
| vxnet | String | 需要加入的私有网络 ID | Yes |
| private_ips | List of dictionary | 私有网络 IP 地址；例如 [{“replica”: “192.168.100.2”, “priority0”: “192.168.100.3”}] | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ChangeMongoVxnet
&mongo=mongo-uja5twny
&vxnet=vxnet-f7xdd5b
&private_ips=[{"replica":"192.168.199.66", "priority0":"192.168.199.77"}]
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ChangeMongoVxnetResponse",
  "ret_code":0,
  "mongo":"mongo-uja5twny",
  "job_id":"j-bb52k7zk"
}
```
