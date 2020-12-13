---
title: "CeaseInstances"
description: 
draft: false
---



从回收站销毁一台或多台主机。

销毁主机的前提，是此主机已被删除并进入回收站。

警告

已销毁的主机会直接从回收站销毁，无法再恢复，如果误操作，请及时与我们联系。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| instances.n | String | 一个或多个主机ID | Yes |
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
https://api.qingcloud.com/iaas/?action=CeaseInstances
&instances.1=i-rtyv0968
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CeaseInstancesResponse",
  "job_id":"j-ybnoeitr",
  "ret_code":0
}
```
