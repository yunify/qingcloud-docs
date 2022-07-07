---
title: "公共参数"
description: api 请求公共参数。 
keyword: 云点播, API 调用, 请求参数, 公共参数
draft: false
weight: 20
---

公共参数是所有 API 请求都必需的参数，这里列出公共的 HTTP 头字段。

## 请求头字段(Request Header)

| 名称          | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| Host          | 指定所请求资源的云服务器名及端口。<br/>在 HTTP/1.1 中为必填字段，可以为空值。HTTP/1.0 中为可选字段。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.23)。 |
| Date          | 客户端请求发送的时间。ISO 8601 标准格式以 UTC 时间指定日期，20130613T203622Z。<br/>格式由 RFC 822 定义，如：`Date: Tue, 15 Nov 1994 08:12:31 GMT`。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.18)。 |
| Authorization | 认证所需信息。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.8)。 |
| Content-Type  | 请求实体的 MIME 类型。<br/>仅支持 `application/json` 格式。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17)。 |

## 响应头字段(Response Header)

| 名称              | 描述                                                         |
| :---------------- | :----------------------------------------------------------- |
| Content-Type      | 服务端返回的消息实体的 MIME 类型。仅支持 `application/json` 格式。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17)。 |
| x-qvod-request-id | 服务端会为每个请求生成并返回一个唯一标示。用户提交工单时如果能附带此 ID 将有助于青云云点播的研发团队定位问题。 |



