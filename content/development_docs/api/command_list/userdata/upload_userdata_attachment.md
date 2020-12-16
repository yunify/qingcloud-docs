---
title: "UploadUserDataAttachment"
description: 
draft: false
---



上传一个压缩包型的 User Data，此 API 需使用 POST 方法。

若上传成功，会返回一个 attachment_id，用于之后的 [_RunInstances_](../../instance/run_instances/) 调用；若上传失败，则返回错误信息。

支持的上传压缩包种类为 zip，tar，tgz，tbz，最大尺寸为 2M。用户读取该压缩包的内容后，需将其 Base64 编码后的内容作为 API 的参数。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| attachment_content | String | 为读取压缩包文件内容后的 Base64 编码流，编码前的最大尺寸为 2M | Yes |
| attachment_name | String | 文件名称 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| attachment_id | String | 上传至青云的压缩包 ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=UploadUserDataAttachment
&attachment_content=MTIxMjEyMTIxMjEyMTIxMjEy
&attachment_name=name1
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"UploadUserDataAttachmentResponse",
  "attachment_id":"uda-7k30l9sp",
  "ret_code":0
}
```
