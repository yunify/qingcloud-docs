---
title: "功能概览"
date: 2020-11-25
draft: false
weight: 2
---

QingStor 对象存储是面向海量非结构化数据的通用数据存储平台，为用户或企业提供安全可靠、低成本的云端存储服务。本文列举了 QingStor 对象存储的常见应用场景以及对应的功能概览，用户可根据自身需求，选用合适的场景。

在使用 QingStor 对象存储之前，建议用户对 Bucket、Object、Zone、访问域名等基本概念先进行了解，以便更好的理解与使用 QingStor 对象存储的功能。详情可参考 [基本概念](/storage/object-storage/intro/object-storage/#基本概念)。

QingStor 对象存储支持以下功能：

## 上传文件
用户在上传文件至 QingStor 对象存储之前，需在青云 QingCloud 任一区域创建一个 Bucket。Bucket 成功创建后，用户可上传任意文件至该 Bucket。

**参考操作**：
  - [创建 Bucket](/storage/object-storage/manual/console/bucket_manage/basic_opt/#创建-bucket)
  - [新建文件夹](/storage/object-storage/manual/console/object_manage/basic_opt/#创建文件夹)
  - [上传文件](/storage/object-storage/manual/console/object_manage/basic_opt/#上传文件)

## 下载文件
用户可根据需求，将存储于 QingStor 对象存储的文件，下载至浏览器默认路径或本地指定路径。

**参考操作**：
  - [下载文件](/storage/object-storage/manual/console/object_manage/basic_opt/#下载文件)

## 分享文件
用户可根据需求，将存储于 QingStor 对象存储的文件，通过 URL 的方式分享给第三方，供其下载或预览。

**参考操作**：
  - [分享文件](/storage/object-storage/manual/console/object_manage/basic_opt/#获取文件-url-链接)

## 删除文件或文件夹
用户可根据需求，将存储于 QingStor 对象存储的文件，进行定期删除，以节省存储空间。QingStor 对象存储支持一次删除单个或多个文件，文件夹等。

**参考操作**：
  - [删除文件](/storage/object-storage/manual/console/object_manage/basic_opt/#删除文件)
  - [删除文件夹](/storage/object-storage/manual/console/object_manage/basic_opt/#删除文件夹)

## 自动批量删除文件
QingStor 对象存储支持生命周期管理。用户可根据需求，设置相应的生命周期规则，定期将非热门数据转换为低频访问、归档存储或冷归档存储，并删除过期数据。

用户可以对生命周期很明确的对象配置相应的规则，来管理 Bucket，以达到节约存储成本的目的。举例来说：
  - 比如国家规定留存相关网络日志不少于 6 个月，用户可以对这些日志文件定义一个规则，6 个月以后，将这些文件自动删除。
  - 一般对于互联网应用，新数据过一段时间后，访问量会从高频到低频下降，数据由热变冷，用户可以配置规则将这些对象，过一段时间以后转换到低频存储。

**参考操作**：
  - [生命周期管理](/storage/object-storage/manual/console/bucket_manage/lifecycle/)

## 访问控制
QingStor 对象存储提供多种安全功能用于维护数据的完整性，并有助于确保目标用户可以访问相应的资源。用户可通过如下方式控制资源的访问权限：
- Bucket ACL：Bucket 访问控制列表。Bucket 的拥有者默认具备所有权限，用户根据需求，可配置公开读或公开写（即不附带认证信息的匿名访问），也可以针对特定青云用户来配置读写权限。
- Bucket Policy：Bucket 策略。用户可通过设置 Bucket 策略，赋予其他用户相应 Bucket 及其 Object 的访问权限。Bucket 策略可以通过细致地指定 API 级别的控制，实现 Bucket ACL 和 Object ACL 所不能实现的一些功能，比如防盗链。
- Bucket CORS：Bucket 的跨域资源共享策略。当用户利用 JavaScript AJAX 向 QingStor 对象存储发起的请求属于跨源请求时，默认情况下浏览器出于安全考虑，不允许调用不同域名下的资源，这种情况下需要为 Bucket 配置 CORS 规则。

**参考操作**：
  - [设置 Bucket ACL](/storage/object-storage/manual/console/bucket_manage/access_control/#存储空间访问控制列表bucket-acl)
  - [设置 Bucket Policy](/storage/object-storage/manual/console/bucket_manage/access_control/#存储空间策略bucket-policy)
  - [设置 Bucket CORS](/storage/object-storage/manual/console/bucket_manage/access_control/#存储空间的跨域资源共享策略bucket-cors)
  - [设置防盗链](/storage/object-storage/beat-practices/policy/)

## 数据加密
QingStor 对象存储支持由用户提供密钥的加密方式，服务端通过用户提供的密钥对上传的对象进行加密处理。上传时的数据加密与下载时的数据解密均在服务端完成。

需注意的是，QingStor 对象存储作为服务端不保存用户的密钥。

### 加密过程

1. 客户端自主生成密钥及密钥的 MD5 值，在上传对象至服务端时，PUT Object 的请求头中指定加密算法、密钥以及密钥 MD5 值。
2. 服务端在收到客户端密钥后，根据密钥生成相应的 MD5 值，并与客户端上传的密钥 MD5 值进行比对，以确认密钥在传输过程中的完整性。
3. 若两者 MD5 值不一致，客户端对象上传失败。
4. 若两者 MD5 值一致，则服务端对上传的对象进行加密并存储。
5. 加密完成后，服务端丢弃用户上传的密钥，仅保存加密算法和密钥 MD5 值。

### 解密过程

1. 客户端在获取对象时，GET Object 请求头中需指定加密请求中携带的加密算法、密钥以及密钥 MD5 值。
2. 服务端在收到客户端密钥后，根据密钥生成相应的 MD5 值，并与客户端上传的密钥 MD5 值进行比对，以确认密钥在传输过程中的完整性。
3. 若两者 MD5 值不一致，客户端获取对象失败。
4. 若两者 MD5 值一致，则服务端使用请求头中指定的密钥对对象进行解密，并将解密后的对象返回给客户端。


**参考操作**：
  - [数据加密](/storage/object-storage/api/object/encryption/)

## 查看资源使用情况
QingStor 对象存储提供监控服务。对流量，Bucket，API 请求，以及 Bucket 的消费记录等多种资源，均进行监控。每类监控项可分别查询最近一天、最近一个月、最近 6 个月的监控信息。并用曲线图，或者表格的形式进行展示。

**参考操作**：
  - [查看流量监控](/storage/object-storage/manual/console/bucket_manage/monitor/)
  - [查看 API 请求](/storage/object-storage/manual/console/bucket_manage/monitor/)
  - [查看 Bucket 容量](/storage/object-storage/manual/console/bucket_manage/monitor/)
  - [查看 Bucket 消费记录](/storage/object-storage/manual/console/bucket_manage/monitor/)

## 记录存储空间的访问信息
QingStor 对象存储提供的日志服务，可以将指定 Bucket 的访问日志以 Object 的形式归档至 Bucket 下的指定目录。用户可通过这些日志完成 Bucket 的访问统计、异常事件回溯和问题定位等工作。

**参考操作**：
  - [日志归档](/storage/object-storage/manual/console/bucket_manage/logging/)

## Bucket 跨区域复制
跨区域复制 (Bucket Cross-Region Replication) 允许用户开启跨不同的 QingStor 对象存储区域（数据中心）之间的 Bucket 自动、异步的复制 Object。

用户可能基于多种原因需要使用跨区域复制功能，如:

- **合规性要求：**  虽然 QingStor 对象存储默认将每个 Object 在不同的物理机上存储多份副本，但合规性要求可能规定数据需要在更大的距离保存一份数据副本。跨区域复制允许用户在不同的 QingStor 对象存储的数据中心之间进行数据复制，以满足这些需求。

- **最小化延迟：** 如果您的客户位于不同的地理位置，那么您可以通过在更接近用户的地理位置的 QingStor 对象存储区域中维护对象副本来最小化访问延迟。

- **提高操作效率：** 如果您在两个不同的 QingStor 对象存储区域中的计算集群需要分析同一组对象，那么您可以选择在这些区域中维护对象副本。

- **数据备份与容灾：** 您对数据的安全性和可用性有更高的要求，对所有写入的数据，都希望在另一个数据中心显式地保留一份副本，以备发生特大灾难，如地震、海啸等导致一个 QingStor 对象存储数据中心损毁时，还能启用另一个 QingStor 对象存储数据中心的备份数据。


**参考操作**：
  - [Bucket 跨区域复制](/storage/object-storage/manual/console/bucket_manage/replication/)

## 对数据进行分析和处理
QingStor 对象存储支持图片处理与鉴黄。
- 图片处理：对存储于 QingStor 对象存储中的图片执行不同的操作，如格式转换，裁剪，翻转，水印等。
- 图普科技鉴黄服务：帮助用户判断存储在 QingStor 对象存储中的图片是否为色情。
- 媒体转码服务：对存储在 QingStor 对象存储中的音视频进行转码计算，并将结果保存至 Bucket 中。

**参考操作**：
  - [图片处理](/storage/object-storage/manual/console/data_process/image_process/)
  - [图普科技鉴黄服务](/storage/object-storage/manual/console/data_process/tupu_porn/)
  - [媒体转码](/storage/object-storage/manual/console/data_process/transfer/)

## 静态网站托管
QingStor 对象存储面向静态网页内容提供托管服务，对静态网站的文件存储、访问控制、 CDN 分发加速，以及安全保障等一站式解决方案。

**参考操作**：
  - [静态网站托管方案](/storage/object-storage/beat-practices/web_hosting/)
