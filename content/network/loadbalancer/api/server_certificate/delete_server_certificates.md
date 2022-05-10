---
title: "DeleteServerCertificates"
description: 删除服务器证书的 API 接口说明。
keyword: 负载均衡器API,服务器证书,删除
weight: 5
draft: false
---

删除一个或多个服务器证书。

## 请求参数

| 参数 | 参数类型 | 描述 | 是否必选 |
| --- | --- | --- | --- |
| server_certificates.n | String | 服务器证书 ID。 | Yes |
| zone | String | 区域 ID，注意要小写。 | Yes |

[_公共参数_](../../gei_api/parameters/)

## 返回数据

| 参数 | 参数类型 | 描述 |
| --- | --- | --- |
| action | String | 响应动作。 |
| job_id | String | 执行任务的 Job ID。 |
| ret_code | Integer | 执行成功与否，0 表示成功，其他值则为错误代码。 |

## 示例

**请求示例：**

```
https://api.qingcloud.com/iaas/?action=DeleteServerCertificates
&server_certificates.1=sc-1234abcd
&zone=pek3a
&COMMON_PARAMS
```

**返回示例：**

```
{
  "action":"DeleteServerCertificatesResponse",
  "server_certificates":["sc-1234abcd"],
  "ret_code":0
}
```
