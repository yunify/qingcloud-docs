---
title: "对象存储"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 21
---

QingStor™ 对象存储为用户提供可无限扩展的通用数据存储服务，具有安全可靠、简单易用、高性能、低成本等特点。

## 产品优势

- 无限水平扩展： 系统可无限水平扩展，且在存储容量水平扩展时，数据存取的性能线性提升。可承载无限存储空间，每个存储空间的容量亦可无限扩展。
- 高可靠： 实时多副本, 无单点故障，具备无条件的数据恢复能力。
- 通用数据存储： 可存储任意数量、任意类型、任意大小的非结构化数据。
- 与计算紧密结合： 与 QingCloud IaaS 资源可通过内网进行数据传输，保证更高效的数据传输与处理。且因内网传输免费，用户将节约大量成本。
- 标准用户接口： 提供标准、规范且简单的 RESTful API，及主流语言的 SDK ，并提供详尽的 API 文档。
- 网络加速： 集成 QingCloud CDN，自动选择离用户最近的边缘节点，使得数据的传输速度最优化。

## 基本概念

### Zone

区域。和青云QingCloud一样，青云对象存储服务支持多区域部署。您可以在不同区域创建 存储空间(Bucket)。

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

用户操作的基本数据单元。PUT方法上传的 Object 允许最大 5GB; 分段(Multipart) 上传的 Object 最大可达 50TB。

Object 命名规范:
- 长度须在 1-1023 字节之间。
- 须用 UTF-8 编码。

## 区域及访问域名

每个 Object 的访问地址有如下两种风格:

- Virtual-host Style: `http://<bucket-name>.<zone-id>.qingstor.com/<object-name>`
- Path Style: `http://<zone-id>.qingstor.com/<bucket-name>/<object-name>`

其中 `<zone-id>` 代表存储空间创建时选择的区域，目前对象存储开放的区域有：

|Name|Zone ID|URL Example|
|-|-|-|
|北京3区-A|pek3a|`http://mybucket1.pek3a.qingstor.com/myobject`|
|上海1区-A|sh1a|`http://mybucket2.sh1a.qingstor.com/myobject`|
|北京3区-B|pek3B| `http://mybucket3.pek3b.qingstor.com/myobject`|
|广东2区|gd2|`http://mybucket4.gd2.qingstor.com/myobject`|
|雅加达区|ap3|`http://mybucket5.ap3.qingstor.com/myobject`|

## 服务等级协议

我们承诺数据持久性不低于 99.99999999%, 对象存储的服务可用性不低于99.99%。详情请参看 [QingStor 对象存储服务等级协议](https://www.qingcloud.com/terms#sla-terms)。

