---
title: "对象元数据"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 2
---

# 对象元数据

对象元数据是附属于对象的数据结构，不能脱离对象独立存在。

用户可以更改的对象元数据有两类: **标准HTTP头**和**自定义元数据**。

在创建对象时，用户可以在请求头（HTTP request headers）中附带（header field name）支持的标准 HTTP 头和前缀为“ x-qs-meta- ”的键值对，这些键值对即为自定义元数据。当用户在获取对象时，服务端会返回（和创建对象时）相同的标准 HTTP 头和前缀为“ x-qs-meta- ”的响应头（HTTP response headers）。

复制源对象到目标对象时，默认情况下，会将源对象的附带元数据复制给目标对象。

移动源对象到目标对象时，会保留源对象的附带元数据不变。

删除对象时，对象的附带元数据也会被删除。

## 支持的标准 HTTP 头

| Header Name | Type | Description | Required |
| - | - | - | - |
| Cache-Control | String | 指定请求和响应遵循的缓存机制。了解更多信息见 [RFC2616#14.9](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9)| No |
| Content-Disposition | String | 指定对象下载时的默认文件名。了解更多信息见 [RFC2616#19.5](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1) | No |
| Content-Encoding | String | 指定对象的内容编码类型。了解更多信息见 [RFC2616#14.11](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11) | No |
| Expires | String | 响应过期的日期和时间。了解更多信息见 [RFC2616#14.21](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21) | No |

## 对自定义元数据的限制

自定义元数据的有效字符集:

- key 只能由英文字母、数字、连接符（-）、下划线（_）和英文句号（.）组成。
- value 只能由 [printable ASCII 字符](https://en.wikipedia.org/wiki/ASCII#Printable_characters) 组成, 即 code points 32 到 126（包括 126）。

> **在此限制下，如果 value 中带有 Non-printable ASCII 或 Non-ASCII 字符，用户可以使用 [rfc2047](https://www.ietf.org/rfc/rfc2047.txt) 或者 [percent encoding](https://en.wikipedia.org/wiki/Percent-encoding) 来对其编码。也可以选择其他编码方式，只要编码后的字符集是 printable ASCII 字符即可。**

自定义元数据总大小不能超过 2KB；key 长度不能超过 512 字节（不包括前缀 `x-qs-meta-` ）。

由于 HTTP headers field name 不区分大小写，所以自定义元数据的 key 也不区分大小写。

## 支持对象元数据的API列表

| API | Description |
| - | - |
| [GetObject](../object/get/) | 获取对象时，如果该对象附有标准 HTTP 头或自定义元数据，服务端会返回 [如何获取对象元数据](#如何获取对象元数据) 一节中定义的响应头。|
| [HeadObject](../object/head/) | 获取对象元信息时，如果该对象附有标准 HTTP 头或自定义元数据，服务端会返回 [如何获取对象元数据](#如何获取对象元数据) 一节中定义的响应头。|
| [PutObject](../object/put/) | 当向存储空间上传一个对象时，可以指定 [如何创建对象元数据](#如何创建对象元数据) 一节中定义的请求头来创建对象元数据。|
| [PutObject - Copy](../object/copy/) | 当复制一个源对象到目标对象时，可以使用 [如何复制或替换对象元数据](#如何复制或替换对象元数据) 一节中定义的请求头来复制源对象的标准 HTTP 头和自定义元数据给目标对象，或用请求头的标准 HTTP 头和自定义元数据做目标对象的标准 HTTP 头和自定义元数据。|
| [PutObject - Move](../object/move/) | 当移动一个源对象到目标对象，Move 后源对象的标准 HTTP 头和自定义元数据保留。 |
| [PostObject](../object/post/) | 当通过 HTML 表单的方式上传一个对象时，可以使用 [如何通过 HTML 表单创建对象元数据](#如何通过 HTML 表单创建对象元数据) 一节中定义的表单项来创建对象元数据。 |
| [InitiateMultipartUpload](../object/multipart/initiate/) | 当初始化一个分段上传时，可以使用 [如何创建对象元数据](#如何创建对象元数据) 一节中定义的请求头来创建对象元数据。 |

## 如何创建对象元数据

| Header Name | Type | Description |
| - | - | - |
| 标准 HTTP 头 | None | 请查看 [支持的标准 HTTP 头](#支持的标准 HTTP 头) |
| x-qs-meta-* | String | 请求头前缀为“ x-qs-meta- ”的那些键值对即为自定义元数据，大小及有效字符集限制见 [对自定义元数据的限制](#对自定义元数据的限制)。|

## 如何通过HTML表单创建对象元数据

| Header Name | Type | Description | Required |
| - | - | - | - |
| 标准 HTTP 头 | None | 请查看 [支持的标准 HTTP 头](#支持的标准 HTTP 头) | No |
| x-qs-meta-* | String | 若对象附有自定义元数据，服务端会返回以 `x-qs-meta-` 为前缀的键值对响应头。| 表单项前缀为 `x-qs-meta-` 的那些键值对即为自定义元数据，大小及有效字符集限制见 [对自定义元数据的限制](#对自定义元数据的限制)。| No |


## 如何获取对象元数据

调用 GET Object API 或 HEAD Object API, 能够在 HTTP 头中返回设置过的元数据。参看下边示例。


## 如何复制或修改对象元数据

| Header Name | Type | Description |
| - | - | - |
| 标准 HTTP 头 | None | 请查看 [支持的标准 HTTP 头](#支持的标准 HTTP 头) |
| x-qs-meta-* | String | 请求头前缀为“ x-qs-meta- ”的那些键值对即为自定义元数据，大小及有效字符集限制见 [对自定义元数据的限制](#对自定义元数据的限制)。|
| x-qs-metadata-directive | String |此选项用来修改元数据。只有 PUT Copy Object API 时，此请求头有效。默认是 `COPY` , 有效选项是 `COPY` 或 `REPLACE` 。默认行为是复制源对象的元数据，选项为 `REPLACE` 时，会用请求头中的元数据作为目标对象的元数据。修改对象的元数据（源对象和目标对象相同）需要将此选项置为 `REPLACE`, 否则无法修改。|


## 示例

### 如何修改对象的元数据

创建一个对象 (命名为 copy_to_self), 附带元数据为 x-qs-meta-id: 0 和 Cache-Control: no-cache, 请求服务端：

```http
PUT /copy_to_self HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Thu, 05 Jul 2018 11:01:40 GMT
Cache-Control: no-cache
x-qs-meta-id: 0
Authorization: <authorization string>
```

服务端返回:

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Thu, 05 Jul 2018 11:01:40 GMT
x-qs-request-id: <x-qs-request-id>
```

调用 PUT COPY API 将对象 copy_to_self 的元数据修改为 x-qs-meta-id: 1, Cache-Control: max-age=31536000, 注意需要传 x-qs-metadata-directive: replace （不区分大小写），请求为：

```http
PUT /copy_to_self HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Thu, 05 Jul 2018 11:01:40 GMT
Cache-Control: max-age=31536000
x-qs-metadata-directive: replace
x-qs-copy-source: /mybucket/copy_to_self
x-qs-meta-id: 1
Authorization: <authorization string>
```

服务端返回：

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Thu, 05 Jul 2018 11:01:40 GMT
x-qs-request-id: <x-qs-request-id>
```

HEAD Object 验证对象的元数据修改成功, 请求服务端：

```http
HEAD /copy_to_self HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Thu, 05 Jul 2018 11:01:40 GMT
Authorization: <authorization string>
```

服务端返回：

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Thu, 05 Jul 2018 11:01:40 GMT
Cache-Control: max-age=31536000
x-qs-meta-id: 1
x-qs-request-id: <x-qs-request-id>
```

### 复制对象, 复制源对象的元数据

创建一个对象 (命名为 source_object), 附带元数据为 x-qs-meta-id: 0 和 Cache-Control: no-cache, 请求服务端：

```http
PUT /source_object HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Thu, 05 Jul 2018 11:01:40 GMT
Cache-Control: no-cache
x-qs-meta-id: 0
Authorization: <authorization string>
```

服务端返回:

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Thu, 05 Jul 2018 11:01:40 GMT
x-qs-request-id: <x-qs-request-id>
```

复制源对象 source_object 到目标对象 dest_object，复制 source_object 的元数据到目标对象 dest_object，此为默认行为，可以省略请求头 x-qs-metadata-directive，请求服务端：

```http
PUT /dest_object HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Thu, 05 Jul 2018 11:01:40 GMT
x-qs-copy-source: /mybucket/source_object
Authorization: <authorization string>
```

服务端返回：

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Thu, 05 Jul 2018 11:01:40 GMT
x-qs-request-id: <x-qs-request-id>
```

HEAD 目标对象 dest_object, 验证其元数据和 source_object 元数据相同, 请求服务端：

```http
HEAD /dest_object HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Thu, 05 Jul 2018 11:01:40 GMT
Authorization: <authorization string>
```

服务端返回：

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Thu, 05 Jul 2018 11:01:40 GMT
Cache-Control: no-cache
x-qs-meta-id: 0
x-qs-request-id: <x-qs-request-id>
```

### 复制对象, 在请求头中指定元数据

创建一个对象 (命名为 source_object), 附带元数据为 x-qs-meta-id: 0 和 Cache-Control: no-cache, 请求为：

```http
PUT /source_object HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Thu, 05 Jul 2018 11:01:40 GMT
Cache-Control: no-cache
x-qs-meta-id: 0
Authorization: <authorization string>
```

服务端返回:

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Thu, 05 Jul 2018 11:01:40 GMT
x-qs-request-id: <x-qs-request-id>
```

复制源对象 source_object 到目标对象 dest_object，在请求头中指定元数据 x-qs-meta-id: 1, Cache-Control: max-age=31536000，注意需要加请求头 x-qs-metadata-directive : replace, 请求服务端：

```http
PUT /dest_object HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Thu, 05 Jul 2018 11:01:40 GMT
Cache-Control: max-age=31536000
x-qs-copy-source: /mybucket/source_object
x-qs-meta-id: 1
Authorization: <authorization string>
```

服务端返回：

```http
HTTP/1.1 201 CREATED
Server: QingStor
Date: Thu, 05 Jul 2018 11:01:40 GMT
x-qs-request-id: <x-qs-request-id>
```

HEAD 目标对象 dest_object, 验证其元数据和 PUT COPY API 中请求头中的一致, 请求服务端：

```http
HEAD /dest_object HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Thu, 05 Jul 2018 11:01:40 GMT
Authorization: <authorization string>
```

服务端返回：

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Thu, 05 Jul 2018 11:01:40 GMT
Cache-Control: max-age=31536000
x-qs-meta-id: 1
x-qs-request-id: <x-qs-request-id>
```
