---
title: "TerminateInstances"
description: 
draft: false
weight: 4
---

销毁一台或多台主机。

销毁主机的前提，是此主机已建立租用信息（租用信息是在创建主机成功后， 几秒钟内系统自动建立的）。所以正在创建的主机（状态为 pending ）， 以及刚刚创建成功但还没有建立租用信息的主机，是不能被销毁的。

警告

已销毁的主机青云会为你保留2小时，如果误操作，请及时与我们联系。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| instances.n | String | 一个或多个主机ID | Yes |
| direct_cease | Integer | 是否直接彻底销毁主机，如果指定 “1” 则不会进入回收站直接销毁，默认是 “0” | No |
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
https://api.qingcloud.com/iaas/?action=TerminateInstances
&instances.1=i-rtyv0968
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"TerminateInstancesResponse",
  "job_id":"j-ybnoeitr",
  "ret_code":0
}
```
