---
title: "Append Object"
---

用户可以调用该 API 接口以追加写的方式上传对象到 QingStor 对象存储。通过该接口创建的 Object 类型为 `appendable`。

## 使用限制

- 每次追加写的数据不能超过 5 GB，Object 的总大小不能超过 50 TB；
- 非 `appendable` 类型的 Object 不支持被追加写；
- `appendable` 类型的 Object 不支持加密；

## 请求语法

```http
POST /<object-name>?append&position=<position> HTTP/1.1
Host: <bucket-name>.<zone-id>.qingstor.com
Date: <date>
Authorization: <authorization-string>
```

## 请求参数

调用该接口时，可在 URL 中添加如下参数：

| 名称 | 类型 | 说明 | 是否必选 |
| --- | --- | --- | --- |
| append   | String  | 表示以追加写的方式上传 Object | 是 |
| position | Integer | 用于指定追加写的位置。首次调用该接口时，指定该值 0，后续调用该接口追加写时，指定该值为前一次返回结果中的 [x-qs-next-append-position](#响应头) 值 | 是      |

## 请求消息头

| 名称 | 类型 | 说明 | 是否必选 |
| --- | --- | --- | --- |
| Content-Length     | String | 本次追加写入的数据的大小。                                        | 是      |
| Content-Type       | String | Object 类型，首次写入时需指定。                                   | 否       |
| Content-MD5 	     | String |	本次追加写入的数据的 MD5 值，用于检查数据在传输过程中是否出错或被篡改。 | 否       |
| x-qs-storage-class | String | 指定该对象的存储级别，首次写入时需指定。默认值为 `STANDARD`。可选值为：<br> - `STANDARD` 表示标准存储；<br> - `STANDARD_IA` 表示低频存储。 | 否  |

除以上请求头以外，此接口还需要包含 Host、Date 等公共请求头。详细内容可参见 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。

## 请求消息体

无。

## 响应头

调用该接口后，QingStor 对象存储会返回如下自定义响应头：

| 名称 | 类型 | 说明 | 是否必选 |
| ------------------------- | -------- | ------------------------------------------------ | -------- |
| x-qs-next-append-position | Interger | 即当前 Object 大小。作为下一次追加写请求参数 `position` 的值。 | 是      |

除以上响应头以外，其他公共响应头可参考：[公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header)。

## 错误码

成功则返回 200，失败的返回码参考 [错误码列表](/storage/object-storage/api/error_code/#错误码列表)。

## 示例

### 请求示例

```http
POST /obj-append?append&position=0 HTTP/1.1
Host: mybucket.pek3a.qingstor.com
Date: Dec, 16 Aug 2019 09:05:00 GMT
Content-Length: 1024
Authorization: authorization string
[1024 bytes of object data]
```

### 响应示例

```http
HTTP/1.1 200 OK
Server: QingStor
Date: Dec, 16 Aug 2019 09:05:00 GMT
Content-Length: 0
Connection: close
x-qs-request-id: 3f2cf9ac3168744d
x-qs-next-append-position: 1024
```

## SDK

此接口所对应的各语言 SDK 可参考 [SDK 文档](/storage/object-storage/sdk/)。

