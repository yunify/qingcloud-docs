---
title: "CaptureInstanceFromSnapshot"
description: 
draft: false
---



将指定备份导出为镜像。请注意，此备份点必须为云服务器的备份点才能导出为镜像。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| snapshot | String | 备份 ID | Yes |
| image_name | String | 镜像名称 | No |
| image_encryption | Integer | 镜像加密开关： 关闭：0，开启：1，默认：继承 snapshot resource 加密配置| No |
| cipher_alg | String | 加密使用的算法类型:<br/>目前仅支持 aes256，默认：继承 snapshot resource 加密算法配置 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | Job ID |
| image_id | String | 新的镜像 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CaptureInstanceFromSnapshot
&snapshot=ss-webd026j
&image_name=image_from_snapshot
&zone=gd2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CaptureInstanceFromSnapshotResponse",
  "image_id":"img-nbgxbejb",
  "job_id":"j-2h1syb70",
  "ret_code":0
}
```
