---
title: "对象元数据"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 3
---

QingStor 对象存储定义对象元数据是附属于对象的数据结构，不能脱离于对象而独立存在。

对象元数据包括标准 HTTP 头与自定义元数据。用户在创建对象时，可以在请求头中添加元数据信息。当用户在获取对象时，QingStor 对象存储服务端会返回请求头中添加的元数据信息。

QingStor 对象存储服务端也支持用户对元数据的修改。其中可供修改的元数据包括 `Cache-Control`，`Cache-Disposition`，`Content-Encoding`，`Content-Type` 以及 `Expires` 等 5 个标准 HTTP 头和用户自定义的元数据。

## 注意事项

- QingStor 对象存储支持用户对元数据的增加与修改。匿名用户不支持该操作，用户需拥有该 Object 所在 Bucket 的读写权限。
- 当用户复制源对象到目标对象时，默认情况下，QingStor 对象存储会将源对象的元数据复制给目标对象。
- 当用户移动源对象到目标对象时，目标对象将保留源对象的元数据。
- 当用户删除对象时，该对象的元数据将被删除。

## 可修改的元数据

支持修改的对象元数据包括如下标准 HTTP 头与自定义元数据。详细说明如下：

### 标准 HTTP 头

QingStor 对象存储支持修改的标准 HTTP 头为：

| 名称 | 类型 | 说明 | 是否必须 |
| - | - | - | - |
| Cache-Control | String | 指定请求和响应遵循的缓存机制。了解更多信息见 [RFC2616#14.9](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9)。 | 否 |
| Cache-Disposition | String | 指定对象的访问形式。<br>- inline：直接在浏览器中打开对象。<br>- attachment：将对象下载到本地。 <br>- 了解更多信息见 [RFC2616#19.5](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1)。 | 否 |
| Content-Encoding | String | 指定对象的内容编码类型。了解更多信息见 [RFC2616#14.11](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11)。 | 否 |
| Content-Type  | String | 指定请求实体的MIME类型。了解更多信息见 [RFC2616#14.17](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17)。 | 否 |
| Expires | String | 响应过期的日期和时间。了解更多信息见 [RFC2616#14.21](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21)。 | 否 |

除以上字段外，其他标准 HTTP 头不支持修改。其他标准 HTTP 头参考 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

### 自定义元数据

QingStor 对象存储支持用户自定义元数据，也支持用户修改这部分元数据信息。自定义元数据是指前缀为 `x-qs-meta-` 的键值对。QingStor 对象存储对自定义元数据的大小及有效字符均有限制。详细说明如下：

**有效字符集：**
- 自定义元数据中的 `key` 只能由英文字母、数字、连接符 `-`、下划线 `_` 以及英文句号 `.` 组成。
- 自定义元数据中的 `key` 的长度不能超过 512 字节，且前缀 `x-qs-meta-` 不包括在 `key` 的长度计算范围内。
- 自定义元数据中的 `value` 只能由 [Printable ASCII 字符](https://en.wikipedia.org/wiki/ASCII#Printable_characters) 组成。
- 自定义元数据中的 `value` 若带有 Non-printable ASCII 或 Non-ASCII 字符，用户可以使用 [rfc2047](https://www.ietf.org/rfc/rfc2047.txt) 或者 [percent encoding](https://en.wikipedia.org/wiki/Percent-encoding) 来对其进行编码。也可以选择其他编码方式，只要编码后的字符集是 Printable ASCII 字符即可。
- 自定义元数据总大小不能超过 2KB。
- 由于 HTTP 头字段不区分大小写，所以自定义元数据的 `key` 也不区分大小写。

## 创建元数据

根据前文说明，我们知道对象元数据不能脱离于对象而独立存在。因此当创建对象的时候，相应的该对象的元数据也跟随创建。

支持该操作的 API 如下：

| API | 说明 |
| - | - |
| [PutObject](/storage/object-storage/api/object/basic_opt/put/) | 当向 Bucket 上传一个对象时，可以指定 [可修改的元数据](#可修改的元数据) 一节中定义的请求头来创建可供修改的对象元数据。|
| [PostObject](/storage/object-storage/api/object/post/) | 当通过 HTML 表单的方式上传一个对象时，可以使用 [可修改的元数据](#可修改的元数据) 一节中定义的请求头来创建可供修改的对象元数据。 |
| [InitiateMultipartUpload](/storage/object-storage/api/object/multipart/initiate/) | 当初始化一个分段上传时，可以使用 [可修改的元数据](#可修改的元数据) 一节中定义的请求头来创建可供修改的对象元数据。 |

## 获取元数据

用户可通过下载对象或获取对象信息的方式来获取该对象携带的元数据信息。支持该操作的 API 如下：

| API | 说明 |
| - | - |
| [GetObject](/storage/object-storage/api/object/basic_opt/get/) | 下载对象时，QingStor 对象存储服务端会返回该对象创建时所包含的元数据信息。|
| [HeadObject](/storage/object-storage/api/object/basic_opt/head/) | 获取对象元数据时，QingStor 对象存储服务端会返回该对象创建时所包含的元数据信息。|

## 复制修改元数据

用户可通过复制对象的方式，来复制或修改对象元数据。当用户调用如下 API 复制对象时，默认将源对象的元数据复制到目标对象：

| API | 说明 |
| - | - |
| [PutObject - Copy](/storage/object-storage/api/object/basic_opt/copy/) | 当复制一个源对象到目标对象时，默认将源对象的元数据信息复制至目标对象|

### 复制源对象的元数据

复制源对象到目标对象，此时会默认将源对象的元数据信息复制至目标对象。无需添加额外的消息头。

### 更新目标对象的元数据

复制对象时，可在消息头中指定 [可修改的元数据](#可修改的元数据) 一节中定义的请求头来更新目标对象的元数据。此外，还需添加如下头字段，并将其设置为 `replace`。此时源对象的元数据信息不变，目标对象的元数据根据请求头中的设定而更新。
| 头字段 | 类型 | 说明 |
| - | - | - |
| x-qs-metadata-directive | String |此选项用来修改元数据。有效值为 `copy` 或 `replace` 。默认值为 `copy`。<br>copy：复制源对象的元数据。<br>replace：表示修改对象的元数据|

### 修改源对象的元数据

用户通过调用复制对象 API，并指定如下头字段，且将其设置为 `replace`，即可完成修改源对象的元数据操作。可修改的元数据参考 [前文内容](#可修改的元数据)。
| 头字段 | 类型 | 说明 |
| - | - | - |
| x-qs-metadata-directive | String |此选项用来修改元数据。有效值为 `copy` 或 `replace` 。默认值为 `copy`。<br>copy：复制源对象的元数据。<br>replace：表示修改对象的元数据|

## 移动元数据

用户可通过移动对象的方式来移动该对象携带的元数据信息。支持该操作的 API 如下：

| API | 说明 |
| - | - |
| [PutObject - Move](/storage/object-storage/api/object/basic_opt//move/) | 当移动一个源对象到目标对象时，源对象的元数据信息将保留。 |


## 示例

### 修改对象的元数据

1. 创建一个命名为 `copy_to_self` 的对象，并附带元数据：`x-qs-meta-id: 0` 和 `Cache-Control: no-cache`。

请求服务端：

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

2. 调用 API：[PUT Object COPY](/storage/object-storage/api/object/basic_opt/copy/) 将对象 `copy_to_self` 的元数据修改为： `x-qs-meta-id: 1` 与 `Cache-Control: max-age=31536000`。并添加头字段：`x-qs-metadata-directive: replace`。

请求服务端：

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

3. 调用 API：[HEAD Object](/storage/object-storage/api/object/basic_opt/head/) 验证对象的元数据修改成功。

请求服务端：

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

1. 创建一个命名为 `source_object` 的对象，并附带元数据：`x-qs-meta-id: 0` 和 `Cache-Control: no-cache`。

请求服务端：

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

2. 调用 API：[PUT Object COPY](/storage/object-storage/api/object/basic_opt/copy/) 复制源对象 `source_object` 到目标对象 `dest_object`。复制 `source_object` 的元数据到 `dest_object` 为默认操作，故，这里可以省略请求头 `x-qs-metadata-directive`。

请求服务端：

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

3. 调用 API：[HEAD Object](/storage/object-storage/api/object/basic_opt/head/) 验证目标对象 `dest_object` 的元数据与源对象 `source_object` 的元数据相同。

请求服务端：

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

1. 创建一个命名为 `source_object` 的对象，并附带元数据：`x-qs-meta-id: 0` 和 `Cache-Control: no-cache`。

请求服务端：

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

2. 调用 API：[PUT Object COPY](/storage/object-storage/api/object/basic_opt/put/) 复制源对象 `source_object` 到目标对象 `dest_object`，并在请求头中指定元数据：`x-qs-meta-id: 1, Cache-Control: max-age=31536000`。此时需增加请求头字段：`x-qs-metadata-directive : replace`。

请求服务端：

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

3. 调用 API：[HEAD Object](/storage/object-storage/api/object/basic_opt/head/) 验证目标对象 `dest_object` 的元数据与上一步请求头中的一致。

请求服务端：

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
