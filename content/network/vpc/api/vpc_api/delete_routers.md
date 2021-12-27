---
title: "DeleteRouters"
description: 删除一台或多台 VPC 网络。
keyword: QingCloud, 青云, 云计算, VPC,  VPC 网络
weight: 15
draft: false
---



删除一台或多台 VPC 网络。

销毁 VPC 网络的前提，是此 VPC 网络已建立租用信息（租用信息是在创建 VPC 网络成功后， 几秒钟内系统自动建立的）。所以正在创建的 VPC 网络（状态为 pending ）， 以及刚刚创建成功但还没有建立租用信息的 VPC 网络，是不能被销毁的。

警告

被删除的 VPC 网络会被立即系统回收，不具有可恢复的功能。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| routers.n | String |  VPC 网络ID | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../get_api/parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=DeleteRouters
&routers.1=rtr-s5nqo8mr
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteRoutersResponse",
  "ret_code":0,
  "job_id":"j-32c66ja8",
  "routers":[
    "rtr-s5nqo8mr"
  ]
}
```
