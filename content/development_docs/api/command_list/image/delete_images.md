---
title: "DeleteImages"
description: 
draft: false
---



删除一个或多个自有镜像。镜像须在可用（ available ） 状态下才能被删除。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| images.n | String | 镜像 ID | Yes |
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
https://api.qingcloud.com/iaas/?action=DeleteImages
&images.1=img-uydrnlax
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteImagesResponse",
  "job_id":"j-bm6ym3r8",
  "ret_code":0
}
```
