---
title: "变更存储级别"
date: 2021-07-14T10:08:56+09:00
description:
draft: false
weight: 3
---

## 概述
标准存储适用于频繁访问的数据，QingStor 对象存储默认使用标准存储。低频存储适用于长时间保存但不常访问的数据，存储成本更低。但相比标准存储，低频存储采用的硬件拥有略低的吞吐和略高的访问延迟，硬件在频繁读写情况下寿命略低。

用户可根据实际情况，将相应的文件从标准存储转换为低频存储，或将低频存储转换为高频存储。具体操作如下：

## 操作步骤

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](../../_images/console_main.png)

2. 进入 Bucket 详情页面，点击 **文件**，选择相应的文件后，点击 **右键 > 变更存储级别**：

 ![](../../_images/object_file_level1.png)

3. 弹出 **变更存储级别** 对话框，用户根据实际情况以及提示信息，选择相应的存储级别后，点击 **提交** 按钮即可：

 ![](../../_images/object_file_level2.png)

## 相关API

可参见 [API 文档](/storage/object-storage/api/object/basic_opt/put/#存储级别)。

