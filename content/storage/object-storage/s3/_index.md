---
title: "AWS S3 兼容"
draft: false
collapsible: true
weight: 9
---


为了使众多基于 AWS S3 开发的应用程序、SDK、及第三方服务在不修改代码的前提下，更容易的接入到 QingStor 对象存储，QingStor 对象存储兼容了 AWS S3 的接口。

由于 QingStor 对象存储和 AWS S3 所提供的功能有部分差异，且两者所依托的基础架构和账号体系也不尽相同，所以并没有做到完全兼容 AWS S3 所有接口，但已经做到重要的功能已都兼容。每个接口的兼容程度将在后文列出。

AWS S3 兼容接口的设计目标，是为了尽可能的方便那些曾基于 AWS S3 而开发的应用接入到 QingStor 对象存储。如果您的应用刚刚着手开发，或者比较容易修改，强烈建议您基于 QingStor 对象存储的原生接口进行开发，因为原生接口更加简洁易用，且能在第一时间体验到 QingStor 对象存储的最新、最完整的功能。

**备注：**
- 更多 AWS S3 接口使用指南可查阅 [AWS 官方文档](http://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html)
- AWS S3 兼容接口暂不支持自定义域名访问。


## 访问方式

和 QingStor 对象存储原生接口一样，AWS S3 兼容接口也支持两种形式的访问地址。

| 类型 | 地址格式 | 示例 |
| --- | --- | --- |
| Path | s3.<zone-id>.qingstor.com/<bucket-name>/ | https://s3.pek3a.qingstor.com/mybucket/mykey |
| Virtual-host | <bucket-name>.s3.<zone-id>.qingstor.com/ | https://mybucket.s3.pek3a.qingstor.com/mykey |

**访问地址** 在 AWS S3 语境里被称为 [Endpoint](http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region)。当您的请求地址定为以上任何一种风格时，您将开始使用 AWS S3 接口访问 QingStor 对象存储服务。

除了请求 Host 不同，所有请求头、请求正文、签名方式都应该符合 AWS S3 的规范。您的应用看到的仿佛是 AWS S3 服务，但实际上操作的是 QingStor 对象存储。


## 兼容签名验证

AWS S3 兼容接口同时支持签名方法 AWS Signature Version 2 和 AWS Signature Version 4，均实现了请求头签名和参数签名方式。 

- AWS Signature V2 签名方法请查阅 [Signing and Authenticating REST Requests](http://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html)
- AWS Signature V4 签名方法请查阅 [Authenticating Requests (AWS Signature Version 4)](http://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html)
- 在签名过程中，使用青云 QingCloud 密钥对 (QingCloud Access Key) 代替 AWS 密钥对 (AWS Access Key)。Signature V4 版本中，使用青云 QingCloud Zone 代替 AWS Region。


## 兼容API

[兼容API列表](compatible_apis/)

## 兼容请求头

[兼容请求头列表](compatible_headers/)

## 使用示例

[使用示例](examples/)
