---
title: "跨区域复制"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 9
---

## 功能介绍

跨区域复制 (Bucket Cross-Region Replication) 允许用户开启跨不同的 QingStor 对象存储区域的 Bucket 自动、异步的复制 Object。它将会对源 Bucket 中的 Object 的改动，包括新建、更新、删除等操作，同步到目标 Bucket。该功能能够很好的提供 Bucket 跨区容灾或满足用户数据复制的需求。

目标 Bucket 中的 Object 是源 Bucket 中 Object 的精确副本，他们具有相同的对象名、元数据以及数据实体，比如创建时间、所有者以及用户自定义的元数据等.

## 使用限制

- 配置跨区域复制规则的用户必须是源 Bucket 和目标 Bucket 的所有者。

- 开启跨区域复制的源 Bucket 和目标 Bucket 必须位于不同的可用区。

- 跨区域复制不会复制 Bucket 级别的子资源，比如 ACL、Policy、Lifecycle、Notification 等。

## 操作步骤
1. 进入 QingStor 对象存储的主页面，选择待设置跨区域复制的 Bucket，点击 **右键** > **设置**：

 ![](../../_images/set_bucket_replication1.png)

2. 进入 Bucket 设置页面，点击 **跨区域复制** > **添加复制规则**：

 ![](../../_images/set_bucket_replication2.png)

3. 在弹出的 **添加规则** 对话框内，根据页面提示信息，填写相关参数后，点击 **提交** 按钮：

 ![](../../_images/set_bucket_replication3.png)

 **说明：**
   - **源 Bucket、目标 Bucket：** 指定跨区域复制的源 Bucket 与目标 Bucket。
   - **复制范围：** 提供两种方案，详细说明如下：
      - 一是将源 Bucket 中的所有文件复制到目标 Bucket，对应上图中的 `所有对象`；
      - 二是将设置前缀为 `XXX` 的文件复制到目标 Bucket，对应上图中的 `指定前缀对象`。
   - **存储级别：** 文件复制到目标 Bucket 后，所使用的存储级别。
   - **同步删除操作：** 在源 Bucket 删除文件时，目标 Bucket 文件也会被删除。默认为 `否`。开启后请谨慎操作，防止将文件删除后无法恢复。
   - **同步历史数据：** 将跨区域复制功能开启前就存在的文件也复制到目标 Bucket 上，默认为 `否`。

4. 成功创建对跨域复制规则，列表显示：

 ![](../../_images/set_bucket_replication4.png)

## 相关API

Bucket Replication API 见 API 文档:

|操作|API|说明|
|--|--|--|
|设置 Bucket Replication|[PUT Bucket Replication](/storage/object-storage/api/bucket/replication/put_replication)|用于设置 Bucket 跨区域复制规则|
|获取 Bucket Replication|[GET Bucket Replication](/storage/object-storage/api/bucket/replication/get_replication)|用于获取已有的 Bucket 跨区域复制规则|
|删除 Bucket Replication|[DELETE Bucket Replication](/storage/object-storage/api/bucket/replication/delete_replication)|用于删除已经设置的跨区域复制规则|


