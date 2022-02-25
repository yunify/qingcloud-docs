---
title: "概述"
date: 2021-08-17T10:08:56+09:00
description: 本小节主要介绍概述相关内容。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor
draft: false
weight: 1
---

QingStor 对象存储服务旨在为用户提供稳定可靠，安全易用，空间无限的云存储服务。可用于存储任意类型，任意数量，任意大小的非结构化数据。

需注意的是，QingStor 对象存储支持的单个对象最大为 50T。

本文将详细介绍 QingStor 对象存储提供的 API，以及指导用户如何使用该 API。

## 总览
QingStor 对象存储服务提供的 API 符合 REST (Representational State Transfer) 风格所定义的语义，即：通过 URL 指定想要访问的资源，并使用标准的 HTTP 方法定义对资源的操作方式。

## API 列表

- [Bucket API](/storage/object-storage/api/bucket/)
- [Object API](/storage/object-storage/api/object/)
- [Service API](/storage/object-storage/api/service/)