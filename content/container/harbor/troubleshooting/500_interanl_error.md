---
title: "本地存储上传镜像报错"
draft: false
description: 本文介绍使用本地存储上传镜像报 500 Internal Error 错误的处理办法。
keyword: Harbor,镜像仓库,上传镜像报错,存储不足
weight: 8
---

本文介绍使用本地存储上传镜像报 500 Internal Error 错误的处理办法。

## 适用范围

适用版本：Harbor 2.2.1 - QingCloud 1.6.0

## 问题描述

使用本地存储上传镜像报 500 Internal Error 错误。报错信息如下图：

![](/container/harbor/_images/troubel_500_internal_error.png)

## 原因分析

因本机使用本地存储，存储节点空间不足导致上传失败。

## 解决办法

### 方案一：清理多余镜像

1. [登录 Harbor Web 界面](../../quickstart/qs18_access_harbor/#浏览器登录)。

   默认账户及密码为：admin/Harbor12345。

2. 进入项目，删除不需要使用的镜像。

3. 重新上传新镜像。

### 方案二：扩容存储节点

1. 登录管理控制台，在集群操作菜单中，选择**扩容集群**。

2. 选择扩容存储节点磁盘。

   <img src="/container/harbor/_images/troubel_500_internal_error_1.png" style="zoom:50%;" />

3. 扩容成功后，重新上传新镜像。
