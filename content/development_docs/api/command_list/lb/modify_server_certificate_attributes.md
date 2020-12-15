---
title: "ModifyServerCertificateAttributes"
description: 
draft: false
---



修改一个服务器证书的名称和描述。

**Request Parameters**

| Parameter name | Type | Description | Required |
| --- | --- | --- | --- |
| server_certificate | String | 服务器证书ID | Yes |
| server_certificate_name | String | 新的服务器证书名称 | No |
| description | String | 新的服务器证书描述 | No |
| zone | String | 区域 ID，注意要小写 | Yes |

[_公共参数_](../../../parameters/)

**Response Elements**

| Name | Type | Description |
| --- | --- | --- |
| action | String | 响应动作 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码 |

**Example**

_Example Request_:

```
https://api.qingcloud.com/iaas/?action=ModifyServerCertificateAttributes
&server_certificate=sc-1234abcd
&server_certificate_name=sample
&zone=pek3a
&COMMON_PARAMS
```

_Example Response_:

```
{
  "action":"ModifyServerCertificateAttributesResponse",
  "ret_code":0
}
```
