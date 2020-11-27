---
title: "Post Object"
date: 2020-11-26T10:08:56+09:00
collapsible: false
draft: false
weight: 3
---

# POST Object

通过 HTML 表单上传的方式向存储空间上传一个对象，此操作要求请求者对存储空间拥有可写权限。

该方式开发难度较小，但是由于浏览器自身的限制，没有断点续传、上传进度等用户友好的功能。因此大文件或多个文件上传不建议通过这种方式实现。

> 如果存储空间被设置为对匿名用户可写，则请求不需要携带认证信息。然而如果携带了认证信息，但是认证用户不拥有该存储空间的可写权限，则请求该接口会返回权限错误。

设置 HTML 的表单 `action` 为 `http://.pek3a.qingstor.com/` 上传的到对应的 Bucket，Object key 需要在表单项中设置。表单的 `method` 必须为 `POST`，`enctype` 必须为 `multipart/form-data`.

如果多个上传请求同时写入同一个对象名称（object key），最后一个被处理的请求会覆盖之前上传的对象内容。

> **考虑到不是所有网站都默认使用 UTF-8，如果你的网站需要以 GBK 或 Big5 展示，我们支持在 Form 中声明 charset 字段来定义客户端上传的文件名所用编码, 服务端在接收到之后会转换为 UTF-8 来存储，以便兼容跨平台的客户端。但由于不是所有字符都能对应到 UTF-8 码表，转换过程仍有可能出现乱码，所以我们建议最好使用 UTF-8 来作为上传编码。**

## Request Syntax

```http
POST / HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Content-Type: multipart/form-data; boundary=XXXXXX
Content-Length: length
```

## Request Parameters

没有请求参数

## Request Headers

没有用户可以自定义的请求头

## Request Form Fields

> 如果要给对象附带支持的标准 HTTP 头或自定义元数据，参见[如何通过表单项创建对象元数据](../common/metadata.html#如何通过HTML表单创建对象元数据)

| Field Name | Type | Description | Required |
| --- | --- | --- | --- |
| access_key_id | String | Access Key ID。如果该 Bucket 没有公开写权限，必须指定 `access_key_id`。如果表单含有 `policy`，则必须设置 `access_key_id`。| No |
| signature | String | 签名认证信息，用 secret key 对 base64 编码后的 `policy` 字符串进行 HMAC-SHA256 签名即可。 上传的 `signature` 使用 base64 编码。如果表单含有 `access_key_id`，则必须设置 `signature`。| No |
| content-type | String | 指定上传的文件类型，如果用户上传的文件的类型和本项不一致，则返回错误。 | No |
| charset | String | 指定上传的文件名编码，比如 `UTF-8`, `GBK` 等。必须与网页开头的 `<meta http-equiv="Content-Type" content="text/html;charset=***">` 一致。如果不指定，默认尝试用 UTF-8 对上传文件名进行解码。 | No |
| key | String | 上传文件的 object key. `key` 可以普通字符串，也可以是一个模板。模板可以使用一些内置的变量，使用 `${builtin}` 来引用内置变量. 例如 `user/tom/${filename}`。关于内置变量，请参见 [Builtin Variables](#builtin-variables) . `key` 不可以使用 `/` 开头。| Yes |
| policy | String | policy 必须包含表单项 `file` 前面的所有表单项，除 `access_key_id`，`policy` 和 `signature` 表单项外。 使用 UTF-8 编码，类型为 JSON object，key 为表单项的 name，value 为表单项的 value。 上传的 `policy` 需要对 JSON object 进行 base64 的编码，签名也是对 base64 编码后的字符串进行签名。由于 `policy` 一般由 web 服务端计算出来，用途在于防止在浏览器端未经允许篡改 `key` 等表单元素。如果有不方便进行签名的表单项，可以将他们放在 `file` 的后边。如果存储空间对匿名用户可写，则不需要设置 `policy`。 | No |
| redirect | String | 请求结果重定向 URL。重定向跳转时，会在 URL 后面添加 query string，包含 `status`, `code`， `message`，`request_id` 四个参数. 例如，设置 `redirect` 为 http://.com/callback，请求成功后会以状态码 `302` 重定向到: <http://.com/callback?status=201&code=created&message=Object+created&request_id=XXXXXX> | No |
| file | Binary | 待上传的文件，必须作为最后一项有效表单项（位于 file 后面的表单项会被丢弃，所以不能作为签名的部分）。 | Yes |
| x-qs-storage-class | String | 指定该对象的存储级别，支持的存储级别为 "STANDARD" 和 "STANDARD_IA"，默认存储级别为"STANDARD"。存储级别错误将返回 400 INVALID_REQUEST | No |

## Status Code

该 API 为幂等操作. 上传成功返回 201; 假如有重定向则返回 302. 失败的返回码参考[错误码列表](../common/error_code.html)

## Response Body

正常情况下没有响应消息体, 错误情况下会有返回码对应的 Json 消息, 参考[错误码列表](../common/error_code.html)


## Response Headers

参见[公共响应头](../common/common_header.html#响应头字段-request-header)

## Example

### Signature Example (python)

```python
import hmac
import json
from hashlib import sha256
from base64 import b64encode

policy_json = {
    "key": "user/tom/${filename}",
    "redirect": "http://<mydomain>.com/callback",
    "charset": "UTF-8"
}
policy = b64encode(json.dumps(policy_json))
h = hmac.new(YOUR_SECRET_KEY, digestmod=sha256)
h.update(policy)
signature = b64encode(h.digest()).strip()
```

### Example HTML for form uploading

```html
<!DOCTYPE html>
<html>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <h3>Upload</h3>
    <form action="http://<bucket-name>.pek3a.qingstor.com" method="POST" enctype="multipart/form-data">
        <input type=hidden name="policy" value="eyJrZXkiOiAidXNlci90b20vJHtmaWxlbmFtZX0iLCAicmVkaXJlY3QiOiAiaHR0cDovL215ZG9tYWluLmNvbS9jYWxsYmFjayJ9" />
        <input type=hidden name="access_key_id" value="YYY" />
        <input type=hidden name="signature" value="XXX" />
        <input type=hidden name="key" value="user/tom/${filename}"/>
        <input type=hidden name="charset" value="UTF-8" /> <!-- 该网页为UTF-8 -->
        <input type=hidden name="redirect" value="http://<mydomain>.com/callback"/>
        <input type=file name="file" />
        <input type=submit name="Upload" value="Upload to QingStor" />
    </form>
</html>
```

### Example Policy

未编码的 JSON 格式 policy 如下:

```json
{"key": "user/tom/${filename}", "redirect": "http://.com/callback"}
```

对应的 base64 编码后的 policy 为:

```plain_text
eyJrZXkiOiAidXNlci90b20vJHtmaWxlbmFtZX0iLCAicmVkaXJlY3QiOiAiaHR0cDovLzxteWRvbWFpbj4uY29tL2NhbGxiYWNrIn0=
```

### Example Request

```http
POST / HTTP/1.1
Host: .pek3a.qingstor.com
User-Agent: curl/7.30
Content-Type: multipart/form-data; boundary=1234567890
Content-Length: length

--1234567890
Content-Disposition: form-data; name="access_key_id"

YYY
--1234567890
Content-Disposition: form-data; name="policy"

eyJrZXkiOiAidXNlci90b20vJHtmaWxlbmFtZX0iLCAicmVkaXJlY3QiOiAiaHR0cDovLzxteWRvbWFpbj4uY29tL2NhbGxiYWNrIn0=
--1234567890
Content-Disposition: form-data; name="signature"

XXX
--1234567890
Content-Disposition: form-data; name="key"

user/tom/${filename}
--1234567890
Content-Disposition: form-data; name="redirect"

http://.com/callback
--1234567890
Content-Disposition: form-data; name="file"; filename="icon.jpg"
Content-Type: image/jpeg

file_content
--1234567890
Content-Disposition: form-data; name="Upload"

Upload to QingStor
--1234567890--
```

### Example Response

```http
HTTP/1.1 302 Found
Server: QingStor
Date: Sun, 16 Aug 2015 09:05:00 GMT
ETag: "0c2f573d81194064b129e940edcefe9b"
Content-Length: 0
Connection: close
x-qs-request-id: aa08cf7a43f611e5886952542e6ce14b
Location: http://.com/callback?status=201&code=created&message=Object+created&request_id=aa08cf7a43f611e5886952542e6ce14b
```

## Builtin Variables

| Name | Description |
| --- | --- |
| filename | 用户上传文件的文件名 (默认为空)。如果文件名包含目录，只保留最后一个 “\” 或 “/” 之后的文件名。 |
