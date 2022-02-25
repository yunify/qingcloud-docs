---
title: "扩容数据盘( Windows )"
date: 2020-0-30T00:38:25+09:00
description: 本小节主要介绍对Windows系统下的数据盘进行扩容。
draft: false
weight: 30
keyword: 云计算, 青云, QingCloud, 云硬盘, Windows, 扩容,数据盘
---

## 前提条件

在对数据盘进行扩容之前，请先确认硬盘内容是否已进行备份，以防止数据丢失。备份操作详见[备份硬盘](/storage/disk/manual/create_snapshot)

## 扩容步骤

Windows 系统下的数据盘扩容主要包括两部分：

1. 云硬盘存储容量的扩展，该操作步骤需登录 QingCloud 管理控制台.

2. 卷容量的扩展，该操作步骤需登录至云硬盘所挂载的服务器进行。

## 扩展云硬盘存储容量

1. 在桌面点击“开始 > 运行”，然后输入 `diskmgmt.msc` ，打开磁盘管理器。

2. 将磁盘的状态设置为脱机。

   ![expan_win_1](/storage/disk/_images/expan_win_1.png)

3. 登录控制台，进入硬盘页面，右键点击待卸载的硬盘 ID ，选择**卸载硬盘**，直至硬盘状态为可用。

   ![expan_win_2](/storage/disk/_images/expan_win_2.png)

4. 在云硬盘列表右键点击需要扩容的硬盘，选择**扩容**，弹出**扩容硬盘**界面。

   ![expan_win_3](/storage/disk/_images/expan_win_3.png)

5. 点击“+”或直接输入容量值进行扩容，点击**提交**即可。

6. 将扩容后的磁盘加载到云服务器。

7. 打开磁盘管理器，可以看到有未分配的磁盘容量。

   ![expan_win_4](/storage/disk/_images/expan_win_4.png)

##  扩展卷容量

1. 右键单击磁盘分区，选择“扩展卷”。

   ![expan_win_5](/storage/disk/_images/expan_win_5.png)

2. 根据扩展卷向导的指引完成扩展卷操作。

   ![expan_win_6](/storage/disk/_images/expan_win_6.png)

   ![expan_win_7](/storage/disk/_images/expan_win_7.png)

   ![expan_win_8](/storage/disk/_images/expan_win_8.png)

   完成后新增的数据盘空间将会合入原有卷中。

   ![expan_win_9](/storage/disk/_images/expan_win_9.png)


