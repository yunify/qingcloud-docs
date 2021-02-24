---
title: "兼容接口"
---


## Service API

| AWS S3 接口 | 请求兼容描述 | 响应兼容描述 |
| --- | --- | --- |
| GET Service | 兼容 | 兼容 |

> 更多请参考 AWS S3 文档 [Service API](http://docs.aws.amazon.com/zh_cn/AmazonS3/latest/API/RESTServiceOps.html)

## Bucket API

| AWS S3 接口 | 请求兼容描述 | 响应兼容描述 |
| --- | --- | --- |
| GET Bucket | 未支持请求参数 encoding-type | 当响应体中的 NextMarker 元素属于 common prefix 时，与 S3 接口返回不同，但使用此 NextMarker 作为下次请求的 marker 参数可以得到正确的结果 |
| PUT Bucket | 未支持请求头 x-amz-acl, x-amz-grant-* | 兼容 |
| DELETE Bucket | 兼容 | 兼容 |
| HEAD Bucket | 兼容 | 兼容 |
| GET Bucket acl | 兼容 | 兼容 |
| PUT Bucket ACL | 未支持请求头 x-amz-grant-read-acp, x-amz-grant-write-acp；请求头 x-amz-acl 未支持设置 authenticated-read；请求体 CanonicalUser 未支持 type AmazonCustomerByEmail，且未支持 Authenticated Users group 和 Log Delivery group | 兼容 |
| GET Bucket location | 兼容 | 兼容 |
| PUT Bucket Lifecycle | 未支持lifecycle action: NoncurrentVersionExpiration, NoncurrentVersionTransition; Transition action未支持设置Date,Transition storageClass未支持"GLACIER", "ONEZONE_IA", "INTELLIGENT_TIERING", "DEEP_ARCHIVE";Expiration action未支持设置Date,ExpiredObjectDeleteMarker;一条rule未支持设置多个action | 兼容 |
| GET Bucket Lifecycle | 兼容 | 兼容 |

> 更多请参考 AWS S3 文档 [Bucket API](http://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketOps.html)

## Object API

| AWS S3 接口 | 请求兼容描述 | 响应兼容描述 |
| --- | --- | --- |
| PUT Object | 未支持请求头 x-amz-storage-class, x-amz-website-redirect-location, x-amz-acl, x-amz-grant-*, x-amz-server-side-encryption-* | 兼容 |
| PUT Object - Copy | 兼容 | 兼容 |
| GET Object | 兼容 | 兼容 |
| DELETE Object | 未支持请求头 x-amz-mfa | 兼容 |
| DELETE Multiple Objects | 未支持请求头 x-amz-mfa | 兼容 |
| HEAD Object | 未支持请求头 x-amz-server-side​-encryption​-customer-* | 兼容 |
| Initiate Multipart Upload | 未支持请求头 x-amz-storage-class, x-amz-website-redirect-location, x-amz-acl, x-amz-grant-*, x-amz-server-side-encryption-* | 兼容 |
| Upload Part | 未支持 x-amz-server-side-encryption-customer-* | 兼容 |
| Copy Part | 兼容 | 兼容 |
| List Parts | 未支持请求参数 encoding-type, | 兼容 |
| Complete Multipart Upload | 兼容 | 兼容 |
| Abort Multipart Upload | 兼容 | 兼容 |

> 更多请参考 AWS S3 文档 [Object API](http://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectOps.html)
>
> **所有请求参数的默认值，将与原生接口保持一致，而非遵守 AWS S3 接口的规定**
