---
title: "创建文件存储 EPFS"
date: 2020-01-30T00:39:25+09:00
description: 本小节主要介绍如何创建文件存储 EPFS
draft: false
keyword: 云计算, 青云, QingCloud, 文件存储, EPFS
weight: 1
---

## 前提条件

文件存储 EPFS 仅能在济南1区创建。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择 **产品与服务** > **存储** > **文件存储 EPFS**，进入 **文件存储 EPFS** 页签：


1. ![](/storage/epfs/_images/epfs1.png)

2. 点击 **立即开通**，进入开通文件存储 EPFS 页面，点击 **确定开通**，开通文件存储 EPFS 服务：

   ![](/storage/epfs/_images/epfs21.png)

3. 进入文件存储 EPFS 页面，点击 **去创建**：

   ![](/storage/epfs/_images/epfs2.png)

4. 进入创建挂载点页面，根据实际情况配置如下参数，点击 **确认**：

   ![](/storage/epfs/_images/epfs3.png)

5. 创建后的挂载点如图所示：

   ![](/storage/epfs/_images/epfs4.png)

6. 选择创建的挂载点，右键或者点击页面上的 **更多操作** > **扩容**，可以对当前挂载点进行扩容操作：

   ![](/storage/epfs/_images/epfs20.png)

7. 弹出 **扩容挂载点** 提示框，修改存储配额后，点击 **确认**：

   ![](/storage/epfs/_images/epfs22.png)

8. 点击创建的挂载点名称处链接，进入文件系统详情界面，可以查看基本属性，包括共享目录，配额，使用率，创建时间，gid/uid等信息：

   ![](/storage/epfs/_images/epfs5.png)

