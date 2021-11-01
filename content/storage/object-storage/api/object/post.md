---
title: "Post Object"
---

若用户需通过 HTML 表单上传的方式向 Bucket 上传一个 Object，可调用该接口。

## 使用须知

- 此操作要求请求者对 Bucket 拥有可写权限。
- 该方式开发难度较小，但是由于浏览器自身的限制，没有断点续传、上传进度等用户友好的功能。因此当文件大于 20M 或多个文件上传时，不建议使用该接口。
- 若指定的 Bucket 被设置为匿名用户可写，则请求中可不携带用户认证信息
- 若指定的 Bucket 被设置为匿名用户可写，请求中仍然携带了用户认证信息，则 QingStor 对象存储仍然会对该用户进行认证，当 QingStor 对象存储认证该用户不拥有该 Bucket 的可写权限，该请求返回错误。
- 若同时有多个上传请求写入同一个对象名称，则最后一个被 QingStor 对象存储处理的请求会覆盖之前上传的对象内容。
- HTML 的表单设置如下：<br>`action` 为 `http://<bucket-name>.<zone-id>.qingstor.com`，其中 `zone-id` 可参考 [Zone](/storage/object-storage/intro/object-storage/#zone)<br> `method` 必须为 `POST` <br> `enctype` 必须为 `multipart/form-data` <br> Object key 在表单项中设置。
- 考虑到不是所有网站都默认使用 UTF-8，若您的网站需要以 GBK 或 Big5 展示，我们支持在 `Form` 中声明 `charset` 字段来定义客户端上传的文件名所用编码。QingStor 对象存储服务端在接收到之后，会将其转换为 UTF-8 的格式来存储，以便兼容跨平台的客户端。但由于不是所有字符都能对应到 UTF-8 码表，转换过程仍有可能出现乱码，所以 QingStor 对象存储建议用户最好使用 UTF-8 来作为上传编码。

## 请求语法

```http
POST / HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Content-Type: multipart/form-data; boundary=XXXXXX
Content-Length: length
```

## 请求参数

无。

## 请求消息头

此接口仅包含公共请求头。关于公共请求头的更多信息，请参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 表单项字段

| 表单字段 | 类型 | 描述 | 是否必须 |
| --- | --- | --- | --- |
| access_key_id | String | Access Key ID。若该 Bucket 没有公开写权限，或含有 `policy`，则必须指定 `access_key_id`。| 否 |
| signature | String | 签名认证信息。用 Secret Key 对 base64 编码后的 `policy` 字符串进行 HMAC-SHA256 签名即可。若表单含有 `access_key_id`，则必须设置该字段。| 否 |
| content-type | String | 指定上传的文件类型，若用户上传的文件类型与本设置不一致，返回错误。 | 否 |
| charset | String | 指定上传的文件名的编码方式。必须与网页开头的 `<meta http-equiv="Content-Type" content="text/html;charset=***">` 中 `charset` 的设置一致。若不指定，QingStor 对象存储默认使用 `UTF-8` 对上传的文件名进行解码。 | 否 |
| key | String | 上传文件的 Object Key。有如下限制：<br> - 不可以使用 `/` 开头。<br> - 可以为普通字符串，也可以是一个模板。<br> - 模板可以使用一些内置的变量，例如 `user/tom/${filename}`。 | 是 |
| policy | String | 设置上传文件的访问策略，由多个表单项组成。规则如下：<br> - 将 `file` 之前的，除 `access_key_id`，`policy` 和 `signature` 以外的所有表单项。以 `JSON Object` 的格式，UTF-8 编码后进行组装；<br> - 对以上内容进行 Base64 编码；<br> - 若指定 Bucket 对匿名用户可写，则无需设置该字段。<br> - 若有不方便签名的表单项，需将其放置在表单项 `file` 的之后。 | 否 |
| redirect | String | 请求结果重定向 URL。重定向跳转时，会在该 URL 后面添加 Query String，包含 `status`，`code`，`message`，`request_id` 四个参数。 <br> 示例：设置 `redirect` 为 `http://.com/callback`，请求成功后会以状态码 `302` 重定向至: `http://.com/callback?status=201&code=created&message=Object+created&request_id=XXXXXX` | 否 |
| file | Binary | 待上传的文件，必须作为最后一个有效表单项。位于该项后面的表单项将被丢弃，故，该项后面的表单项不能作为签名的部分。 | 是 |
| x-qs-storage-class | String | 指定该对象的存储级别。默认值为 `STANDARD`，可选值为：<br> - `STANDARD` 表示标准存储。<br> - `STANDARD_IA` 表示低频存储 | 否 |

**备注：**
- 若要给对象附带支持可修改的元数据，可在表单项里，添加相关字段。详细内容，可参见 [可修改的元数据](/storage/object-storage/api/metadata/#可修改的元数据)。
- 表单项 `key`，若指定为模板，使用内置变量时，如 `user/tom/${filename}`，其中的 `${filename}` 参考 [内置变量说明](#内置变量)。

## 请求消息体

无。

## 响应头

此接口仅包含公共响应头。关于公共响应头的更多信息，请参见 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

该 API 为幂等操作. 上传成功返回 201; 假如有重定向则返回 302. 失败的返回码参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

**Signature 字段示例：**
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

**HTML 上传对象：**
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

**Policy 字段示例：**

未编码的 JSON 格式 policy 如下:

```json
{"key": "user/tom/${filename}", "redirect": "http://.com/callback"}
```

对应的 base64 编码后的 policy 为:

```plain_text
eyJrZXkiOiAidXNlci90b20vJHtmaWxlbmFtZX0iLCAicmVkaXJlY3QiOiAiaHR0cDovLzxteWRvbWFpbj4uY29tL2NhbGxiYWNrIn0=
```

### 请求示例

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

### 响应示例

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

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。





## 内置变量

| 名字 | 描述 |
| --- | --- |
| filename | 用户上传文件的文件名，默认为空。若该文件名中包含有目录，则仅需保留最后一个 `\` 或 `/` 之后的内容 |
