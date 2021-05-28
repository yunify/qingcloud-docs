---
title: "扩容 Windows 数据盘"
date: 2020-0-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
weight: 30
keyword: 青云
---

## 扩展云硬盘容量

1. 在桌面点击"开始 > 运行"，然后输入`diskmgmt.msc`，打开磁盘管理器。

2. 将磁盘的状态设置为脱机。

   ![图片](/storage/disk/quickstart/_images/image-1568774923025.png)

3. 登录控制台，从云服务器上卸载硬盘，直至硬盘状态为可用。

   ![图片](/storage/disk/quickstart/_images/image-1568774930715.png)

4. 右键点击磁盘 ID 号 ，扩容磁盘容量并提交修改。

   ![图片](/storage/disk/quickstart/_images/image-1568774933959.png)

   ![图片](/storage/disk/quickstart/_images/image-1568774937515.png)

5. 将扩容后的磁盘加载到云服务器。

6. 打开磁盘管理器，可以看到有未分配的磁盘容量。

   ![图片](/storage/disk/quickstart/_images/image-1568774941054.png)

##  扩展卷容量

1. 右键单击磁盘分区，选择【扩展卷】。

   ![图片](/storage/disk/quickstart/_images/image-1568774945196.png)

2. 根据扩展卷向导的指引完成扩展卷操作。

   ![图片](/storage/disk/quickstart/_images/image-1568774955296.png)

   ![图片](/storage/disk/quickstart/_images/image-1568774960724.png)

   ![图片](/storage/disk/quickstart/_images/image-1568774966465.png)

   完成后新增的数据盘空间将会合入原有卷中。

   ![图片](/storage/disk/quickstart/_images/image-1568774974045.png)


