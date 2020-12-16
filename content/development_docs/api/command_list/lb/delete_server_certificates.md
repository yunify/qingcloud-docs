---
title: "DeleteServerCertificates"
description: 
draft: false
---



删除一个或多个服务器证书。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| server_certificates.n | String | 服务器证书ID | Yes |
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
https://api.qingcloud.com/iaas/?action=DeleteServerCertificates
&server_certificates.1=sc-1234abcd
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"DeleteServerCertificatesResponse",
  "server_certificates":["sc-1234abcd"],
  "ret_code":0
}
```
