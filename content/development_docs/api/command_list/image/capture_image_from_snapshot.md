---
title: "CaptureImageFromSnapshot"
description: 
draft: false
---



将指定备份导出为映像。请注意，此备份点可以为主机或特定类型的硬盘(不支持企业级分布式 SAN (NeonSAN) 硬盘)的备份点才能导出为映像。如果用硬盘的备份点导出映像,请务必保证硬盘中的文件系统是完好的，可以启动的。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| snapshot | String | 备份 ID | Yes |
| image_name | String | 映像名称 | No |
| description | String | 映像的描述信息 | No |
| base_image | String | 使用快照制作映像时,新生成映像的很多参数使用镜像 base_image 的；当 snapshot_id 是硬盘时，此参数是必须的 | No |
| zone | String | 区域 ID，注意要小写 | Yes |


[_公共参数_](../../common/parameters.html#api-common-parameters)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | Job ID |
| image_id | String | 新的映像 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CaptureImageFromSnapshot
&snapshot=ss-yp2b9l7v
&image_name=image_from_snapshot
&base_image=xenialx64b
&zone=gd2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CaptureImageFromSnapshotResponse",
  "image_id":"img-rd7siwov",
  "job_id":"j-2h1syb70",
  "ret_code":0
}
```
