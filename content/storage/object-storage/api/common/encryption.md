---
title: "数据加密"
---


QingStor 对象存储支持由用户提供密钥的加密方式，服务端用用户提供的密钥对上传的 对象进行加密处理。

> QingStor 对象存储服务端不保存用户的密钥。

## 加密过程

1. 客户端生成密钥及密钥的 MD5 值，在上传对象的 PUT Object 请求的请求头中指定加密算法、密钥、和密钥 MD5 值 (见下文 [加密请求头](#加密请求头) 一节)。
2. 服务端根据密钥生成 MD5 值，与用户上传的密钥 MD5 值比对，以确认密钥在传输过程中的完整性。
3. 服务端对上传的对象进行加密。
4. 服务端丢弃用户上传的密钥，只保存加密算法和密钥 MD5 值。

## 解密过程

1. 客户端在获取对象的 GET Object 请求的请求头中指定加密算法、密钥、密钥 MD5 值(见下文 [加密请求头](#加密请求头) 一节)。密钥须为上传时所指定的加密密钥。
2. 服务端根据密钥生成 MD5 值，与用户上传的密钥 MD5 值比对，以确认密钥在传输过程中的完整性。
3. 服务端比对上传对象时保存的 MD5 值和请求中的密钥的 MD5 值，以验证密钥是否正确。
4. 服务端将对象用请求头中指定的密钥解密并返回。

## 加密请求头

| Header Name | Type | Description |
| --- | --- | --- |
| x-qs-encryption-customer-algorithm | String | 指定加密算法。目前支持的加密算法是 AES256 |
| x-qs-encryption-customer-key | String | 用户提供的密钥。对于AES256的密钥，明文必须具有32字节长度。密钥必须进行 Base64 编码处理 |
| x-qs-encryption-customer-key-MD5 | String | 用户提供的密钥的 MD5，用于检查密钥在传输过程中的完整性。密钥 MD5 必须进行 Base64 编码处理 |

## 加密响应头

| Header Name | Type | Description |
| --- | --- | --- |
| x-qs-encryption-customer-algorithm | String | 加密时所用的加密算法 |

## 如何Copy加密过的对象

如果 Copy Object API 的源对象是加密的，则须通过使用下面定义的源对象加密请求头部指定源对象的加密算法、密钥、及密钥 MD5 值。

复制被加密的源对象所需的请求头:

| Header Name | Type | Description |
| --- | --- | --- |
| x-qs-copy-source-encryption-customer-algorithm | String | 源对象的加密算法 。目前支持的加密算法是 AES256。|
| x-qs-copy-source-encryption-customer-key | String | 源对象的密钥。密钥必须进行 Base64 编码处理，对于AES256的密钥，明文必须具有32字节长度。|
| x-qs-copy-source-encryption-customer-key-md5 | String | 源对象的密钥的 MD5。密钥 MD5 必须进行 Base64 编码处理。 |

## 支持数据加密的 API 列表

| API | 描述 |
| --- | --- |
| [GET Object](/storage/object-storage/api/object/get) | 获取加密的对象时，使用 [加密请求头](#加密请求头) 一节中定义的 Header，以解密对象。 |
| [PUT Object](/storage/object-storage/api/object/put) | 向存储空间上传一个对象时，可指定 [加密请求头](#加密请求头) 一节中定义的 Header，以加密对象。 |
| [PUT Object - Copy](/storage/object-storage/api/object/copy) | 如果源对象是加密的，则参考 [如何 Copy 加密过的对象](#如何Copy加密过的对象) 指定源对象加密 Header。如果想为目标对象加密，可指定 [加密请求头](#加密请求头)。 |
| [PUT Object - Move](/storage/object-storage/api/object/move) | 如果源对象是加密的，那么目标对象也会使用一样的加密方式，Move 后会保留所有密文和元数据。对加密过的源对象调用该 API 不需要提供额外的 Header。 |
| [HEAD Object](/storage/object-storage/api/object/head) | 获取加密对象的元信息时，可以不提供加密相关的头部。也可以使用 [加密请求头](#加密请求头) 一节中定义的 Header, 来验证加密算法和密钥是否正确。 |
| [Initiate Multipart Upload](/storage/object-storage/api/object/multipart/initiate) | 使用 [加密请求头](#加密请求头) 一节中定义的 Header 来初始化一个加密对象的分段上传。我们仅会保存密钥的 MD5 来验证后续上传分段的密钥是否相同。 |
| [Upload Object Part](/storage/object-storage/api/object/multipart/upload) | 上传一个分段时，使用 [加密请求头](#加密请求头) 一节中定义的加密请求头部，以加密分段。注意加密算法和密钥必须跟初始化分段时提供的相同。 |
| [Copy Object Part](/storage/object-storage/api/object/multipart/copy) | 如果源对象是加密的，则需要使用 [如何 Copy 加密过的对象](#如何copy加密过的对象) 一节中定义的 Header。如果想为目标对象加密，可指定 [加密请求头](#加密请求头) 一节中定义的 Header。 |
| [Complete Multipart Upload](/storage/object-storage/api/object/multipart/complete) | 完成加密对象的分段上传, 不需要提供加密请求头。 |
| [Abort Multipart Upload](/storage/object-storage/api/object/multipart/abort) | 中止加密对象的分段上传，不需要提供加密请求头。 |
