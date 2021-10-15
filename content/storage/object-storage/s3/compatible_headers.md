---
title: "兼容公共头"
---


### 公共请求头

| AWS S3 请求头 | 兼容描述 |
| --- | --- |
| Authorization | 兼容 |
| Content-Length | 兼容 |
| Content-Type | 兼容 |
| Content-MD5 | 兼容 |
| Date | 兼容 |
| Expect | 兼容 |
| Host | 兼容 |
| x-amz-content-sha256 | 未兼容，但可以用于 signature v4 签名 |
| x-amz-date | 兼容 |
| x-amz-meta-* | 兼容 |
| x-amz-security-token | 未兼容 |

> 更多请参考 AWS S3 文档 [Common Request Headers](http://docs.aws.amazon.com/AmazonS3/latest/API/RESTCommonRequestHeaders.html)

### 公共响应头

| AWS S3 响应头 | 兼容描述 |
| --- | --- |
| Content-Length | 兼容 |
| Content-Type | 兼容 |
| Connection | 兼容 |
| Date | 兼容 |
| ETag | 兼容 |
| Server | 将设置为 QingStor |
| x-amz-delete-marker | 未兼容 |
| x-amz-id-2 | 将设置与响应头 `x-amz-request-id` 相同 |
| x-amz-request-id | 将设置与原生响应头 `x-qs-request-id` 相同 |
| x-amz-version-id | 未兼容 |

> 更多请参考 AWS S3 文档 [Common Response Headers](http://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html)
