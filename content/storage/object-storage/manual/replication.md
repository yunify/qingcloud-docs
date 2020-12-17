---
title: "Bucket 跨区域复制"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 8
---

跨区域复制 (Bucket Cross-Region Replication) 允许用户开启跨不同的 QingStor 对象存储区域(数据中心) 的 bucket 自动、异步的复制 Object.
它将会对源 Bucket 中的 Object 的改动 (新建、更新、删除等) 同步到目标 Bucket. 该功能能够很好的提供 Bucket 跨区容灾或满足用户数据复制的需求.
目标 Bucket 中的 Object 是源 Bucket 中 Object 的精确副本, 他们具有相同的对象名、元数据以及数据实体, 比如创建时间、所有者、用户自定义的
元数据等.

## 应用场景

您可能基于多种原因需要开启跨区域复制, 包括:

* 合规性要求 -- 虽然 QingStor 对象存储默认对每个 Object 在不同的物理机上存储多份副本, 但合规性要求可能规定数据需要在更大的距离保存
一份数据副本. 跨区域复制允许您在不同的 QingStor 数据中心之间复制数据来满足这些要求.

* 最小化延迟 -- 如果您的客户位于不同的地理位置, 那么您可以通过在更接近用户的地理位置的 QingStr 对象存储区域中维护对象副本来最小化访问
延迟.

* 提高操作效率 -- 如果您在两个不同的 QingStor 对象存储区域中的计算集群需要分析同一组对象, 那么您可以选择在这些区域中维护对象副本.

* 数据备份与容灾 -- 您对数据的安全性和可用性有更高的要求, 对所有写入的数据, 都希望在另一个数据中心显式地保留一份副本, 以备发生特大灾难,
如地震、海啸等导致一个 QingStor 对象存储数据中心损毁时，还能启用另一个 QingStor 对象存储数据中心的备份数据.


## 跨区域复制的限制

开启跨区域复制需要满足以下要求:

* 配置跨区域复制规则的用户必须是源 Bucket 和目标 Bucket 的所有者.

* 开启跨区域复制的两个 Bucket (源和目标) 必须位于不同的可用区.

* 跨区域复制不会复制 bucket 级别的子资源, 比如 ACL、Policy、Lifecycle、Notification 等.


## 如何配置跨区域复制？

### 通过调用 Bucket Replication API 配置跨区域复制的规则

Bucket Replication API 见 API 文档:

- [PUT Bucket Replication](/storage/object-storage/api/bucket/repliation/put_replication)
- [GET Bucket Replication](/storage/object-storage/api/bucket/repliation/get_replication)
- [DELETE Bucket Replication](/storage/object-storage/api/bucket/replication/delete_repliation)


