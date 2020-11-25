---
title: "公共字段"
date: 2020-11-25T10:08:56+09:00
description:
collapsible: false
draft: false
weight: 3
---

## 请求头字段 (Request Header)

### Host

指定所请求资源的主机名及端口。在HTTP/1.1中为必填字段，可以为空值。HTTP/1.0中为可选字段。
http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.23

### Authorization

认证所需信息。 http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.8

### Date

请求发送时的时间。格式由RFC 822定义，如： Date: Tue, 15 Nov 1994 08:12:31 GMT

http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.18

### Content-Length

请求的内容长度，以字节为单位。

### Content-Type

请求实体的MIME类型。总长度不可超过255个字符，且应该符合rfc文档的规范。若客户端未指定Content-Type或值为空, 服务端将按application/octet-stream处理。

http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13

### Content-MD5

请求实体的MD5校验值，用来验证数据的完整性。

http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.15

### Expect

有效值：100-continue 用来确认服务端是否支持特定行为。当Expect的值为100-continue时，客户端在 发送请求实体前，等待服务器的确认，若服务器拒绝该请求，则请求实体将不会被发送。

http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.20

### Range

取值可为以下三类：

- bytes=start_offset-stop_offset 返回从 start_offset 开始，至 stop_offset 的数据，单位为字节，包含 stop_offset 所对应的字节。 如 bytes=0-0，将返回第一个字节的数据。
- bytes=start_offset- 返回从 start_offset 开始之后的数据，单位为字节，包含 start_offset 所对应的字节。
- bytes=-suffix_length 返回文件末尾长度为 suffix_length 的数据。如果 suffix_length 大于文件长度，那么返回整个文件。

目前不支持rfc2616中定义的按逗号分隔的多段Range。

如果指定了 Range 头字段，那么成功的情况下http返回码为 206 (Partial Content)，参数有误或 start_offset 超出文件边界的情况下返回 416 (invalid_range_heander) 错误。 https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.35


## 响应头字段 (Response Header)

### Content-Length

服务端返回的消息实体的传输长度，以字节为单位

http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13

### Content-Type

服务端返回的消息实体的MIME类型。初期将只支持application/json格式

http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17

### Connection

连接是否已关闭，有效值为keep-alive和close

http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.10

### Date

服务端返回(Response)时的日期和时间。格式由RFC 822定义，如:
```
Date: Tue, 15 Nov 1994 08:12:31 GMT
```
http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.18

### ETag

对于通过 PUT object 上传的对象，该值由服务端生成，标志Object的内容（不包括Metadata）是否已被更新。对于通过 multipart upload 上传的对象，该值由调用 complete multipart upload 接口时，请求头中的 ETag 来设置。

http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.19

### Server

Web服务器软件信息，固定为"QingStor"

http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.38

### x-qs-request-id

服务端会为每个请求生成并返回一个唯一标示，提交工单时如果能附带此 ID 将有助于我们定位问题

### Content-Range

当请求中附带了 `Range` 头字段时，返回中的 `Content-Range` 头说明了实际返回的数据在文件中的位置。格式为：
```
bytes start_offset-stop_offset/file_size
```
如一个长度为500字节的文件，在请求中有 `Range: bytes=0-0` 的时候，返回中附带 `Content-Range: bytes 0-0/500`

### x-qs-content-copy-range

当请求中附带了 `x-qs-copy-range` 头字段时，返回中的 `x-qs-content-copy-range` 头说明了实际返回的数据在文件中的位置。格式为：
```
bytes start_offset-stop_offset/file_size
```
如一个长度为500字节的文件，在请求中有 `x-qs-copy-range: bytes=0-0` 的时候，返回中附带 `x-qs-content-copy-range`: `bytes 0-0/500`


