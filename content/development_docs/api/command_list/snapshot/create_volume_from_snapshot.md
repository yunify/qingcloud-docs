---
title: "CreateVolumeFromSnapshot"
description: 
draft: false
---



将指定备份导出为硬盘。请注意，此备份点必须为硬盘的备份点才能导出为硬盘，而且通过备份创建的硬盘类型和备份的来源硬盘类型是一致的。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| snapshot | String | 备份 ID | Yes |
| volume_name | String | 硬盘名称 | No |
| encryption | Integer | 硬盘加密开关： 关闭：0，开启：1，默认：继承 snapshot resource 加密配置 | No |
| cipher_alg | String | 加密使用的算法类型:<br/>目前仅支持 aes256，默认：继承 snapshot resource 加密算法 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| job_id | String | Job ID |
| volume_id | String | 新的硬盘 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateVolumeFromSnapshot
&snapshot=ss-zlcorbog
&volume_name=volume_from_snapshot
&zone=gd2
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateVolumeFromSnapshotResponse",
  "ret_code":0,
  "job_id":"j-2m5nvqud",
  "volume_id":"vol-2rtnfux2"
}
```
