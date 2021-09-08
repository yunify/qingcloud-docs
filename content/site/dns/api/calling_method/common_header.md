---
title: "公共参数"
weight: 5
draft: false
enableToc: false
keyword: QingCloud，DNS API，API请求，公共参数
---

公共参数是所有 API 请求都必需的参数，这里列出公共的 HTTP 头字段。

## 请求头字段 (Request Header)

|<span style="display:inline-block;width:100px">Header Name</span>|Description|
|:---|:---|
|Host|指定所请求资源的主机名及端口。在HTTP/1.1中为必填字段，可以为空置。HTTP/1.0中为可选字段。<br>http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.23|
|Authorization|认证所需信息。<br>http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.8|
|Content-Type|请求实体的 MIME 类型。总长度不可超过255个字符，且应该符合rfc文档的规范。若客户端未指定Content-Type或值为空, 服务端将按application/oct-stream处理。<br>http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13<br>当使用 POST 和 PUT 方法时需要。|
|Date|请求发送时的时间。格式由RFC 822定义，如： Date: Tue, 15 Nov 1994 08:12:31 GMT。<br>http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.18<br>Date 指定的时间和 QingDNS 服务器时间差不能超过 15 分钟，否则会忽略该请求。|


## 响应头字段 (Response Header)

|<span style="display:inline-block;width:100px">Header Name</span>|Description|
|:---|:---|
|Content-Length|服务端返回的消息实体的传输长度，以字节为单位。<br>http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13|
|Content-Type|服务端返回的消息实体的MIME类型。目前只支持“application/json”格式。<br>http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17|
|Date|服务端返回(Response)时的日期和时间。格式由RFC 822定义，如:Date: Tue, 15 Nov 1994 08:12:31 GMT。<br>http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.18|

