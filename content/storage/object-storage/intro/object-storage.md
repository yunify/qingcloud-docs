---
title: "对象存储document test"
date: 2020-11-25
draft: false
weight: 1
---

QingStor™ 对象存储为用户提供可无限扩展的通用数据存储服务，具有安全可靠、简单易用、高性能、低成本等特点。

对象存储是面向海量非结构化数据的通用数据存储平台，提供安全可靠、低成本的云端存储服务。作为企业的数据存储和流转中心，可通过浏览器、HTTP RESTful API 、S3 API 、 SDK 和 FTP 等方式高效存取和管理文件，支撑企业丰富的上层业务和数据分析系统使用。

## 产品优势

- 高可靠: 具备跨地域的多数据中心服务能力；支持数据的跨区复制，提供数据异地容灾；数据持久性达 99.999999999%，服务可用性达 99.99%。
- 低成本: 成本低廉，无需采购、部署和运维，按量付费；通过存储分层及对象生命周期管理，可将成本降至更低。
- 无限水平扩展: 系统可无限水平扩展，且在存储容量水平扩展时，数据存取的性能线性提升。可承载无限存储空间，每个存储空间的容量亦可无限扩展。
- 网络加速: 存储在对象存储中的数据可通过 QingCloud CDN 服务加速与分发，有效降低访问延迟、提升下载速度；与同区域 QingCloud IaaS 可通过内网传输数据；支持断点续传。
- 安全:
  - 100% 网络隔离 (多租户隔离) ，性能优异的防火墙及 DDoS 防护为用户提供全方位的防护服务。
  - 完善的访问控制；支持客户端及服务端加密；数据传输支持 SSL，使您在团队协作中依旧保持数据不泄露，不被轻易篡改。
- 灵活易用:
  - 可存储任意类型、任意数量、任意大小的文件；通过存储分层及对象生命周期管理，可覆盖用户的各种业务场景下的存储需求。
  - 提供 HTTP RESTful API 接口，及主流语言的 SDK 包，兼容 AWS S3 API，并提供详尽的API文档说明；与 QingCloud 大数据平台无缝集成；提供丰富的数据处理服务。

## 基本概念

### Zone

区域。和青云QingCloud一样，青云对象存储服务支持多区域部署。您可以在不同区域创建存储空间(Bucket)。

### Service

对象存储服务的顶层命名空间，在该命名空间下，每一个用户可以创建多个存储空间 (Bucket)。存储空间名称在该命名空间下全局唯一。

### Bucket

用户申请的存储空间。创建存储空间时须选择区域。

Bucket 命名规范:
- 遵守 DNS 命名规则。
- 长度在 6 ~ 63 之间。
- 只能包含 小写字母，数字和连接字符 -。
- 开头和结尾只能是小写字母或数字。
- 不能是有效 IP 地址。

### Object

用户操作的基本数据单元。PUT方法上传的 Object 允许最大 5GB; 分段 (Multipart) 上传的 Object 最大可达 50TB。

Object 命名规范:
- 长度须在 1-1023 字节之间。
- 须用 UTF-8 编码。

## 区域及访问域名

每个 Object 的访问地址有如下两种风格:

- Virtual-host Style: `https://<bucket-name>.<zone-id>.qingstor.com/<object-name>`
- Path Style: `https://<zone-id>.qingstor.com/<bucket-name>/<object-name>`

其中 `<zone-id>` 代表存储空间创建时选择的区域，目前对象存储开放的区域有：

| Name      | Zone ID | URL Example                                     |
|-----------|---------|-------------------------------------------------|
| 北京3区-A  | pek3a   | `https://mybucket1.pek3a.qingstor.com/myobject` |
| 上海1区-A  | sh1a    | `https://mybucket2.sh1a.qingstor.com/myobject`  |
| 北京3区-B  | pek3B   | `https://mybucket3.pek3b.qingstor.com/myobject` |
| 广东2区    | gd2     | `https://mybucket4.gd2.qingstor.com/myobject`   |
| 雅加达区   | ap3     | `https://mybucket5.ap3.qingstor.com/myobject`   |

## 服务等级协议

我们承诺数据持久性不低于 99.99999999%, 对象存储的服务可用性不低于99.99%。详情请参看 [QingStor 对象存储服务等级协议](https://www.qingcloud.com/terms#qingstor-terms)。


