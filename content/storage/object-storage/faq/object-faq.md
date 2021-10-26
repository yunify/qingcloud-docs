---
title: "FAQ"
date: 2020-11-23T10:08:56+09:00
description:
draft: false
weight: 39
---


## 如何提高 QingStor 对象存储的 Bucket 配额？

每个用户的默认 Bucket 配额为 2 个，用户可以通过提交工单申请提高 Bucket 配额。QingStor 对象存储不推荐单个用户创建太多的 Bucket。

## QingStor 对象存储的 Bucket 有文件数量和类型的限制吗？

QingStor 对象存储是面向海量非结构化数据的通用存储，没有针对文件数量和类型的限制。

## 如何同步本地目录到 QingStor 对象存储？

可以使用高级命令行工具 qsctl，其中的 `sync` 命令支持将本地目录和 QingStor 对象存储目录进行同步，详情请参考 [qsctl 文档](/storage/object-storage/manual/tool/qsctl/)。

## QingStor 对象存储的 Bucket 是否可以创建文件夹？

QingStor 对象存储的 Bucket 本质上是一个平级结构，但控制台界面会根据 `/` 来模拟文件系统的层级结构。如果使用 API 调用，可以使用 [GET Bucket API](/storage/object-storage/api/bucket/basic_opt/get/) ，通过 `prefix` 和 `delimiter` 参数来获取按照文件夹归类的文件列表。

## QingStor 对象存储是否有针对文件夹操作的接口？

针对文件夹的相关操作，可使用 [Put Object](/storage/object-storage/api/object/basic_opt/put/) 接口，Object Key 请使用 `/` 结尾，以模拟文件夹。

## QingStor 对象存储是否有 API 请求频率限制？

QingStor 对象存储不对 API 请求频率做限制。

## QingStor 对象存储是否兼容 AWS S3 的上传工具？

QingStor 对象存储兼容 AWS S3 的主要 API，用户可以直接使用 AWS S3 相关的上传工具上传数据到 QingStor 对象存储，兼容工具列表可以参考 [文档](/storage/object-storage/s3)。

## QingStor 对象存储的 Bucket 能否像 AWS S3 一样 Mount 到云服务器上？

可以使用 s3fs 挂载 QingStor 对象存储的 Bucket 作为后端存储，具体内容可参考青云志 [QingStor 兼容 AWS S3 接口](https://log.qingcloud.com/?p=1676) 。

## qsctl 的同步操作为什么有时不会覆盖文件？

qsctl 在覆盖文件时的处理逻辑为：
- 本地文件的更新时间晚于 Bucket 中对应的 Object 的更新时间时，进行覆盖；
- 本地文件的更新时间早于 Bucket 中对应的 Object 的更新时间时，不进行覆盖；
- 支持使用 `--force` 参数来进行强制覆盖。

## 如何上传较大的文件？

可以使用 PUT 方法上传，如果文件很大的话，还可以考虑使用 [分段上传 API](/storage/object-storage/api/object/multipart)。

PUT 方法上传的 Object 允许最大 5GB；分段上传的 Object 最大可达 50TB，每个分段最大为 5GB。如果通过广域网上传，QingStor 对象存储建议几百兆以上大小的文件都使用分段上传。

## 使用分段上传时，如果一个分段上传失败，可以只对这个分段断点续传吗？

可以的。当一个分段上传失败时，不需要中断整个文件的上传。可再次使用 [Upload Object Part](/storage/object-storage/api/object/multipart/upload/) 重新上传这个分段即可，该操作会覆盖掉之前上传的分段内容。

## 使用分段上传时，对分段数量和大小是否有限制？

对于单个 Upload 过程的限制可以参考 [分段上传限制](/storage/object-storage/api/object/multipart/#分段上传限制)

对于单个 Upload ID，允许的最大分段个数为 10000，关于 Upload ID 的定义，请参考 [分段上传文档](/storage/object-storage/api/object/multipart)。

## 如何批量取消未完成的分段上传？

使用 QingStor 对象存储的应用通常会使用分段上传，假如初始化了分段上传后未调用 [完成分段上传](/storage/object-storage/api/object/multipart/complete) 或者 [终止分段上传](/storage/object-storage/api/object/multipart/abort)，这些未完成的上传记录仍然会占用 Bucket 空间。

对于大量的未完成分段上传，可通过配置 [生命周期](/storage/object-storage/manual/console/bucket_manage/lifecycle/) 规则自动删除。

## 如何使根目录对匿名用户显示所有的文件？

从用户的数据安全角度考虑，假如 Bucket 配置了公开访问权限，而 QingStor 对象存储默认不允许匿名请求访问 List Objects 接口，也就是说访问 `bucket.zone.qingstor.com` 根路径将返回 Permission Deny。如果用户需要使用 List Objects 这个接口对匿名请求也能返回结果，则需配置如下 Bucket Policy：

![](/storage/object-storage/_images/faq-1.png)

更详细内容请参考文档 [设置存储空间策略](/storage/object-storage/manual/console/bucket_manage/access_control/#存储空间策略bucket-policy)。

## 从哪里获取对象存储的 Access Key ？

Access Key 可以在 [管理控制台](https://console.qingcloud.com/access_keys/) 申请。

更详细内容请参考文档 [API 指南–签名验证](/storage/object-storage/api/practices/signature/)。

## 如何分享文件给没有 Access Key 的用户

可以参考 [请求参数签名](/storage/object-storage/api/practices/signature/#请求参数签名) 文档，或调用 SDK 相应的生成签名 URL 的函数来生成指定时间段有效的超链接。

## 将数据分散存储到 100 个 Bucket，是否会比只存储在 1 个 Bucket 拥有更好的性能？

这两种情况性能上没有差别。建议根据业务需求去使用不同的 Bucket，或者在单个 Bucket 中划分不同的目录来使用。


## Bucket 上传/下载速度
| 单链接速度 | 内网 | 外网 |
| :--------: | :------: | :------: |
| 上传 | 不限制 | 40Mb/s |
| 下载 | 32Mb/s | 1Mb/s |


## QingStor 对象存储是否支持服务端压缩和解压缩？

对于下载请求，QingStor 对象存储支持文本和图片文件的压缩下载，需携带请求头 `Accept-Encoding: gzip`，但不支持已压缩文件的解压下载。

对于上传请求，想通过压缩节约上传时间和流量，用户需要在客户端自行压缩，上传时携带请求头 `Content-Encoding: gzip`，下载时 QingStor 对象存储会返回压缩文件和响应头 `Content-Encoding`，客户端根据该响应头自行解压，浏览器会自动识别这个响应头并进行解压。

## 访问 QingStor 对象存储出现 HTTPS 证书问题的解决办法

QingStor 对象存储使用由 Let's Encrypt 所签发的 HTTPS 证书。

Let's Encrypt 是由 Mozilla、Cisco、Akamai、IdenTrust、EFF 等组织人员发起，主要目的是为了推进网站从 HTTP 向 HTTPS 过渡的进程，其证书现在已经可以被所有主流浏览器及操作系统所信任。但是，仍有一些老旧的系统和应用不能兼容，Let's Encrypt 在官网公布了目前 [已知的兼容和不兼容列表](https://letsencrypt.org/docs/certificate-compatibility)。

如果您有自己的域名和 HTTPS 证书，请在 Bucket 设置中绑定自定义域名，并开启 CDN 加速，即可上传使用自有 HTTPS 证书，随后再次访问 Bucket 中的 Object 时，将不再受 Let's Encrypt 证书的影响。

**针对列表中不兼容情况，提供如下解决方案**:

- Android 版本 < v2.3.6: 需升级 Android 版本到 v2.3.6 及以上

- Windows XP prior to SP3: 需安装 Windows XP SP3 更新包

- 若您的 JDK/JRE 版本属于以下范围：Java 7 < 7u111 或 Java 8 < 8u101，Let's Encrypt 证书将不会被信任并抛出以下异常：

  ```plain_text
  About to connect to 'helloworld.letsencrypt.org' on port 443
  javax.net.ssl.SSLHandshakeException: sun.security.validator.ValidatorException
  [... 以下输出省略 ...]
  ```

  此时可以直接升级您的 JDK/JRE update 版本，7u111 及 8u101 之后已将 Let's Encrypt 证书加入信任。若暂时没法升级，可以向 JRE 中导入 Let's Encrypt 证书，步骤如下：

  ```plain_text
  # 下载 Let's Encrypt 根证书
  wget https://letsencrypt.org/certs/isrgrootx1.pem

  # 导入证书
  keytool -trustcacerts -keystore "$JAVA_HOME/jre/lib/security/cacerts" -storepass changeit -noprompt -importcert -alias isrgrootx1 -file "isrgrootx1.pem"

  # 出现 Certificate was added to keystore 即可
  ```

## 对出错的请求原因有疑问

QingStor 对象存储对每个请求都生成了唯一的 Request ID，在返回中会放在 `x-qs-request-id` 头字段中。每一个错误返回都有一个 json 格式内容，包含 Code (返回码) 和 Message (具体原因)，具体可参考 [错误信息](/storage/object-storage/api/error_code)。

如果用户对错误的原因有疑问，可以记录 `x-qs-request-id` 并在工单中提供给 QingStor 对象存储研发团队。

