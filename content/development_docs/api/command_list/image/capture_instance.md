---
title: "CaptureInstance"
description: 
draft: false
---



将某个已关闭的主机制作成模板（或称“自有映像”），之后便可将其用于创建新的主机。 被捕获的主机必须是已关闭（ stopped ）状态，否则会返回错误。

由主机制成的自有映像，会保留主机中安装的软件、配置及数据， 因此基于这个自有映像创建的主机，就直接获得了相同的系统环境。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| instance | String | 要被制作为模板的主机 | Yes |
| image_name | String | 映像名称 | No |
| zone | String | 区域 ID，注意要小写 | Yes |
| target_user | String | 目标用户 ID ，可用于主账号为其子账号创建资源。 | No |

[_公共参数_](../../../parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | 执行任务的 Job ID |
| image_id | String | 新创建的映像 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=CaptureInstance
&instance=i-n3nju2rh
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CaptureInstanceResponse",
  "job_id":"j-bm6ym3r8",
  "image_id":"img-j38f2h3h"
  "ret_code":0
}
```
