---
title: "数据加密"
---

该 API 接口用于对用户上传的 Object 进行加密处理。QingStor 对象存储支持由用户提供密钥的加密方式，对上传的 Object 进行加密。

## 注意事项

- QingStor 对象存储服务端不保存用户的密钥。

## 什么是加密

### 加密过程

1. 客户端自主生成密钥及密钥的 MD5 值，在上传 Object 时，通过 [加密请求头](#加密请求头) 指定加密算法、密钥、和密钥 MD5 值。
2. QingStor 对象存储服务端根据用户提供的密钥，自主生成密钥 MD5 值，并将其与用户上传的密钥 MD5 值进行比对，以确认密钥在传输过程中的完整性。
3. 当经过比对后，两者的密钥 MD5 值不一致，QingStor 对象存储返回失败，并丢弃用户上传的 Object。
4. 当经过比对后，两者的密钥 MD5 值一致，QingStor 对象存储服务端对上传的 Object 进行加密。
5. 加密完成后，QingStor 对象存储服务端丢弃用户上传的密钥，仅保存加密算法和密钥 MD5 值。

### 解密过程

1. 客户端在获取 Object 时，通过 [加密请求头](#加密请求头) 指定加密算法、密钥、和密钥 MD5 值。密钥须为上传时所指定的加密密钥。
2. QingStor 对象存储服务端根据用户提供的密钥，自主生成密钥 MD5 值，并将其与用户上传的密钥 MD5 值进行比对，以确认密钥在传输过程中的完整性。
3. 当经过比对后，两者的密钥 MD5 值不一致，QingStor 对象存储返回失败。
4. 当经过比对后，两者的密钥 MD5 值一致，QingStor 对象存储服务端将 Object 用请求头中指定的密钥解密并返回至客户端。

## 如何使用加密

### 加密请求头

除 [公共请求头](/storage/object-storage/api/common_header/#请求头字段-request-header)。 外，用户还需在请求头中添加如下头字段，用以指定加密算法、密钥、以及密钥 MD5 值。QingStor 对象存储根据该信息，对上传的 Object 进行加密。

| 头字段 | 类型 | 说明 |
| --- | --- | --- |
| x-qs-encryption-customer-algorithm | String | 指定加密算法。目前仅支持 `AES256`。 |
| x-qs-encryption-customer-key | String | 用户提供的密钥。密钥必须进行 Base64 编码处理，对于 `AES256` 的密钥，明文长度必须为 32 字节。 |
| x-qs-encryption-customer-key-MD5 | String | 用户提供的密钥的 MD5，用于检查密钥在传输过程中的完整性。密钥 MD5 必须进行 Base64 编码处理。 |

### 加密响应头

| 头字段 | 类型 | 说明 |
| --- | --- | --- |
| x-qs-encryption-customer-algorithm | String | 加密时所用的加密算法 |
| x-qs-encryption-customer-key-md5 | String | 加密时所用的密钥的 MD5 |

### GET Object

若用户需从指定的 Bucket，获取之前存储的加密对象，可以使用 [GET Object](../basic_opt/get/) 接口，并携带该加密对象的加密信息。即：[加密请求头](#加密请求头)。

除 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header) 外，QingStor 对象存储服务端还会返回 [加密响应头](#加密响应头)。

### PUT Object

若用户上传 Object 时需加密，可以使用 [PUT Object](../basic_opt/put/) 接口，并携带 [加密请求头](#加密请求头)。

除 [公共响应头](/storage/object-storage/api/common_header/#响应头字段-response-header) 外，QingStor 对象存储服务端还会返回 [加密响应头](#加密响应头)。

### PUT Object - Copy

用户可使用 [PUT Object - Copy](../basic_opt/copy/) 接口拷贝加密 Object。拷贝 Object 的过程可分为：读取源 Object 与写入目标 Object。并且，QingStor 对象存储默认拷贝 Object 时，不会包含源 Object 的加密信息。

因此，用户需提供源加密 Object 的加密信息，用于成功读取源加密 Object。写入目标 Object 时，若用户仍需加密，此时需再次提供加密信息，用于对目标 Object 进行加密。

整个过程，用户需提供两个加密信息：源 Object 的加密信息与目标 Object 的加密信息。目标 Object 的加密信息，就是 [加密请求头](#加密请求头)。源 Object 的加密信息，则使用如下请求头字段：

| 头字段 | 类型 | 说明 |
| --- | --- | --- |
| x-qs-copy-source-encryption-customer-algorithm | String | 源对象的加密算法 。目前仅支持 `AES256`。|
| x-qs-copy-source-encryption-customer-key | String | 源对象的密钥。密钥必须进行 Base64 编码处理，对于 `AES256` 的密钥，明文长度必须为 32 字节。|
| x-qs-copy-source-encryption-customer-key-md5 | String | 源对象的密钥的 MD5。密钥 MD5 必须进行 Base64 编码处理。 |

### PUT Object - Move

若用户需移动指定加密 Object，可以直接使用 [GET Object - Move](../basic_opt/move/) 接口，无需添加额外的头字段。移动后，目标 Object 会保留 源 Object 的所有密文和元数据。

### HEAD Object

用户如需获取加密对象的元数据，可直接使用 [HEAD Object](../basic_opt/head/) 接口，无需携带 [加密请求头](#加密请求头)。若用户需验证加密算法和密钥是否正确，则可以在使用 [HEAD Object](../basic_opt/head/) 接口时，提供 [加密请求头](#加密请求头) 一节中定义的头字段。

### 加密分段上传

QingStor 对象存储要求所有分段均使用相同的加密算法与密钥。因此，在初始化分段上传时，QingStor 对象存储会保存密钥的 MD5 用来验证后续上传分段的密钥是否相同。

| API | 描述 |
| --- | --- |
| [Initiate Multipart Upload](/storage/object-storage/api/object/multipart/initiate) | 使用 [加密请求头](#加密请求头) 一节中定义的头字段来初始化一个加密对象的分段上传。 |
| [Upload Object Part](/storage/object-storage/api/object/multipart/upload) | 上传一个分段时，使用 [加密请求头](#加密请求头) 一节中定义的加密请求头部，以加密分段。 |
| [Copy Object Part](/storage/object-storage/api/object/multipart/copy) | 若源对象是加密的，则需要使用 [PUT Object - Copy](#put-object---copy) 一节中定义的头字段。若需为目标对象加密，可指定 [加密请求头](#加密请求头) 一节中定义的头字段。 |
| [Complete Multipart Upload](/storage/object-storage/api/object/multipart/complete) | 完成加密对象的分段上传，无需提供加密请求头。 |
| [Abort Multipart Upload](/storage/object-storage/api/object/multipart/abort) | 中止加密对象的分段上传，无需提供加密请求头。 |

