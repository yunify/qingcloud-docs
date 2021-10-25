---
title: "Get Bucket External Mirror"
date: 2020-11-26T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

该接口用于获取 Bucket 的外部镜像源站（External Mirror Source Site），只有 Bucket 的所有者才能调用该 API。

## 请求语法

```http
GET /?mirror HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

无。

## 请求头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 响应体

成功调用该 API 后，服务端通过如下字段返回携带有外部镜像回源的源站信息的 Json 消息体：

| 名称 | 类型 | 说明 | 是否必须 |
| --- | --- | --- | --- |
| source_site | String | 外部镜像回源的源站。 | 是 |

**说明**

源站填写格式为 `<protocol>://<host>[:port]/[path]`。 详细说明可参考 [设置外部镜像](../put_external_mirror/#请求体) 中的相关说明。

## 错误码

| 错误码 | 错误描述 | HTTP 状态码 |
| --- | --- | --- |
| OK | 成功获取外部镜像相关设置 | 200 |

其他错误码可参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
GET /?mirror HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Sun, 14 Aug 2016 09:05:00 GMT
Authorization: authorization string
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Sun, 14 Aug 2016 09:05:01 GMT
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b

{
    "source_site": "http://example.com/image/"
}
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。

