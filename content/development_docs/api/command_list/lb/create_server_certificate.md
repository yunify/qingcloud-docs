---
title: "CreateServerCertificate"
description: 
draft: false
---



此 API 需使用 POST 方法, 创建一个服务器证书。创建时需指定与此服务器证书关联的证书内容和私钥.

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| server_certificate_name | String | 服务器证书名称 | No |
| certificate_content | String | 服务器证书内容 | Yes |
| private_key | String | 服务器证书私钥 | Yes |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| server_certificate_id | String | 创建的服务器证书ID |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_

```
https://api.qingcloud.com/iaas/?action=CreateServerCertificate
&private_key=private_key
&certificate_content=certificate_content
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"CreateServerCertificateResponse",
  "ret_code":0,
  "server_certificate_id":"sc-1234abcd",
}
```
