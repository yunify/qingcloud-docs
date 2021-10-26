---
title: "Put Bucket CNAME"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---

该接口用于设置 Bucket 的域名别名。QingStor 对象存储定义域名别名为 Bucket 的子资源，因此，只有 Bucket 的所有者才能调用该 API。

## 请求语法

```http
PUT /?cname HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>

{
    "domain": <domain>,
    "type": <type>,
}
```

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

调用该 API 需携带如 [请求语法](#请求语法) 中的 Json 消息体。该消息体各字段说明如下：

| 名称 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| domain | String | 要绑定给 Bucket 的域名。规则如下：<br>- 该域名必须已完成备案，否则将返回错误 domain_not_recorded。<br>- 该域名到 Bucket 域名的 CNAME 记录必须已于域名服务商处成功注册且生效，否则将返回错误 cname_record_not_added。<br>- 如果该域名已成功绑定给另外一个 Bucket，则返回错误 domain_occupied。<br>- Bucket 域名格式如 `mybucket.pek3a.qingstor.com`。  | 是 |
| type | String | 绑定的域名的用途。目前支持两种类型，`normal` 表示普通；`website` 表示网站。 | 是 |

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功设置 Bucket 域名别名 | 200 |
| domain_not_recorded | 域名没有备案 |  |
| cname_record_not_added | 域名没有成功注册或生效 |  |
| domain_occupied | 域名已经被使用 |  |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
PUT /?cname HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 16 Aug 2015 09:05:00 GMT
Content-Length: 30
Authorization: authorization string

{
    "domain": "example.com",
    "type": "normal"
}
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:02 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。

