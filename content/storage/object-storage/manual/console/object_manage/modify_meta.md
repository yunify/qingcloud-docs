---
title: "修改元数据"
date: 2021-07-14T10:08:56+09:00
description: 本小节主要介绍修改元数据相关内容。
keyword: 云计算, 青云, QingCloud, 对象存储, QingStor
draft: false
weight: 3
---

## 对象元数据

对象元数据是附属于对象的数据结构，不能脱离对象独立存在。故，当删除对象时，对象附带的元数据也将被一同删除。

对象的元数据可分为两类，一类为标准的 HTTP 头；另一类，是以 `x-qs-meta-` 为前缀的键值对，称为自定义元数据。在创建对象时，用户可以在请求头中附带标准 HTTP 头和自定义的元数据。当用户在获取对象时，服务端会返回（和创建对象时）相同的标准 HTTP 头和前缀为 `x-qs-meta-` 的响应头。同时，当复制与移动源对象时，其元数据也会同步给目标对象。


QingStor 对象存储支持修改的对象元数据包括部分标准 HTTP 头和自定义元数据。

## 操作步骤

1. 进入 QingStor 对象存储的主页面，点击对应的 Bucket 名：

 ![](/storage/object-storage/_images/console_main.png)

2. 进入 Bucket 详情页面，点击 **文件**，选择相应的文件后，点击 **右键 > 修改对象元数据**：

 ![](/storage/object-storage/_images/object_modify_meta1.png)

3. 弹出 **修改对象元数据** 对话框，用户根据实际需求，选择待修改的 **键**，并给定相应的值后，点击 **添加** 按钮即可：

 ![](/storage/object-storage/_images/object_modify_meta2.png)

4. 对象元数据列表显示。若需删除某项元数据，直接点击元数据列表的 **删除** 按钮即可：

 ![](/storage/object-storage/_images/object_modify_meta3.png)

5. 点击右上角，退出对话框。

## 相关API

可参见 [API 文档](/storage/object-storage/api/metadata/)。

