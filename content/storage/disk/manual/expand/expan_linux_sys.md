---
title: "扩容系统盘"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
weight: 40
keyword: 青云
---

## 操作场景

青云 QingCloud 一直秉承云计算的理念，即云服务器的系统是临时的，随时可以关闭和销毁，而并不影响业务可用性，所以并不建议用户将数据放在系统盘（即操作系统启动程序所在磁盘）。

但用户确有需求，青云 QingCloud 也为云服务器增加了系统盘扩容的功能，用户可以对已有的云服务器系统盘进行扩容。

## 已知限制

- FreeBSD操作系统不支持系统盘扩容，Windows 操作系统支持的范围是 50 到 300 GB，其他操作系统支持的范围是 20 到 300 GB。

- 为现有的云服务器进行扩容，必须在操作系统关闭的情形下进行。

- 扩容仅支持单向的增加，而不可以缩减。
- 扩容前，请务必确认您所使用的操作系统以及文件系统是否支持，否则，有可能会出现系统无法启动，数据无法访问的情形。

>**警告**：
>
>扩容前，请务必做好备份工作，以防误操作导致数据丢失。

## 操作步骤

以一台安装 CentOS7.3 操作系统的云服务器为例：

1. 确认当前系统盘的大小。

   ![确认系统盘大小](/storage/disk/quickstart/_images/system_disk.png)

2. 关闭操作系统，选择要扩容系统盘的云服务器，在“更多操作”中选择“调整规格”，并按照下图所示，扩展系统磁盘：

   <img src="/storage/disk/quickstart/_images/resize_system_instance.png" alt="扩容硬盘" style="zoom:70%;" />

3. 启动云服务器，并查看更改后的结果：

   ![启动云服务器](/storage/disk/quickstart/_images/after_resize.png)

   确认修改成功。

   如有更多需求，请提交工单或联系我们。

