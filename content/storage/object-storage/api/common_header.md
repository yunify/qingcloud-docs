---
title: "公共字段"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 2
---

## 请求头字段 (Request Header)

### Host

指定所请求资源的云服务器名及端口。在 HTTP/1.1 中为必填字段，可以为空值。HTTP/1.0 中为可选字段。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.23)。

### Authorization

认证所需信息。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.8)。

### Date

客户端请求发送时的时间。格式由 RFC 822 定义，如：
```
Date: Tue, 15 Nov 1994 08:12:31 GMT
```

详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.18)。

### Content-Length

请求的内容长度，以字节为单位。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13)。

### Content-Type

请求实体的 MIME 类型。总长度不可超过 255 个字符，且应该符合 RFC 文档的规范。若客户端未指定 `Content-Type` 或值为空，服务端将按 `application/octet-stream` 处理。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17)。

### Content-MD5

请求实体的 MD5 校验值，用来验证数据的完整性。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.15)。

### Expect

用来确认服务端是否支持特定行为。当 `Expect` 的值为 `100-continue` 时，客户端在发送请求实体前，等待服务器的确认，若服务器拒绝该请求，则请求实体将不会被发送。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.20)。

### Range

用于指定请求的内容范围。取值可为以下三类，目前不支持 rfc2616 中定义的按逗号分隔的多段 Range：

- `bytes=start_offset-stop_offset` 将返回从 **start_offset** 开始，至 **stop_offset** 的数据，单位为字节，包含 **stop_offset** 所对应的字节。如 `bytes=0-0`，将返回第一个字节的数据。
- `bytes=start_offset-` 将返回从 **start_offset** 开始之后的数据，单位为字节，包含 **start_offset** 所对应的字节。
- `bytes=-suffix_length` 将返回文件末尾长度为 **suffix_length** 的数据。若 **suffix_length** 大于文件长度，那么将返回整个文件。

若指定了 Range 头字段，那么成功的情况下 HTTP 返回码为 206，若参数有误或 **start_offset** 超出文件边界的情况下返回 416 错误。 详情可参考 [RFC 文档](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35)。


## 响应头字段 (Response Header)

### Content-Length

服务端返回的消息实体的传输长度，以字节为单位。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13)。

### Content-Type

服务端返回的消息实体的 MIME 类型。仅支持 `application/json` 格式。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17)。

### Connection

标识连接是否已关闭，有效值为 `keep-alive` 和 `close`。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.10)。

### Date

服务端返回响应时的日期和时间。格式由 RFC 822 定义，如：
```
Date: Tue, 15 Nov 1994 08:12:31 GMT
```

详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.18)。

### ETag

对于通过 PUT Object 上传的对象，该值由 QingStor 服务端生成，用于标识 Object 的内容是否已被更新。需要注意的是，这里提到的 Object 内容，不包括元数据。

对于通过 Multipart Upload 上传的对象，该值由调用 Complete Multipart Upload 接口时，请求头中的 ETag 来设置。若 ETag 值未被设置，QingStor 服务端，将会计算 ETag 值，并保存在 QingStor 的服务端。

详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19)。

### Server

Web服务器软件信息，固定为 `QingStor`。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.38)。

### x-qs-request-id

服务端会为每个请求生成并返回一个唯一标示。用户提交工单时如果能附带此 ID 将有助于 QingStor 对象存储的研发团队定位问题。

### Content-Range

当请求中附带了 `Range` 头字段时，响应中的 `Content-Range` 头说明了实际返回的数据在文件中的位置。格式为：
```
bytes start_offset-stop_offset/file_size
```
如一个长度为500字节的文件，在请求中有 `Range: bytes=0-0` 的时候，响应中附带 `Content-Range: bytes 0-0/500`。详情可参考 [RFC 文档](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.16)。

### x-qs-content-copy-range

当请求中附带了 `x-qs-copy-range` 头字段时，响应中的 `x-qs-content-copy-range` 头说明了实际返回的数据在文件中的位置。格式为：
```
bytes start_offset-stop_offset/file_size
```
如一个长度为500字节的文件，在请求中有 `x-qs-copy-range: bytes=0-0` 的时候，响应中附带 `x-qs-content-copy-range: bytes 0-0/500`
