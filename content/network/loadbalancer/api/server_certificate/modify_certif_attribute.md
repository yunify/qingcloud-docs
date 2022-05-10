---
title: "ModifyServerCertificateAttributes"
description: 修改服务器证书属性的 API 接口说明。
keyword: 负载均衡器API,服务器证书,修改
weight: 3
draft: false
---

修改一个服务器证书的名称和描述。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| server_certificate | String | 服务器证书 ID。 | Yes |
| server_certificate_name | String | 新的服务器证书名称。 | No |
| description | String | 新的服务器证书描述。 | No |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=ModifyServerCertificateAttributes
&server_certificate=sc-1234abcd
&server_certificate_name=sample
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"ModifyServerCertificateAttributesResponse",
  "ret_code":0
}
```
