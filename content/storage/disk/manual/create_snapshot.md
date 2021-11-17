---
title: "备份硬盘"
description: Test description
draft: false
enableToc: false
weight: 40
keyword: 青云
---

## 备份须知

当你对正在运行的云服务器或者已经绑定的硬盘做在线备份时，需要注意以下几点：

*   备份只能捕获在备份任务开始时已经写入磁盘的数据，不包括当时位于缓存内的数据。
*   为了保证数据的完整性，需要在创建备份前暂停所有文件的写操作，直到备份进入”捕获完成”的状态。也可停止云服务器或解绑硬盘后，进行离线备份。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台导航栏中，选择**产品与服务** > **存储服务** > **云硬盘**，进入**硬盘**页面。

3. 点击硬盘ID号，进入硬盘详情界面，默认显示**备份**页签。

   或者右键单击需要备份的硬盘所在行，选择**创建备份**。可直接基于当前硬盘备份。

4. 若是首次创建备份，则点击**创建备份**。

   ![create_snapshot_1](/storage/disk/_images/create_snapshot_1.png)

   若是基于备份链再次创建备份，则在备份链结构示意图上，点击![创建备份按钮](/storage/disk/_images/创建备份按钮.png)。

   ![create_snapshot_2](/storage/disk/_images/create_snapshot_2.png)

5. 在提示框中，点击**继续**。

6. 输入备份名称，点击**提交**，开始创建。

   ![create_snapshot_3](/storage/disk/_images/create_snapshot_3.png)

   创建成功后，生成备份记录，如下图所示。

   ![create_snapshot_4](/storage/disk/_images/create_snapshot_4.png)

## 后续管理

云硬盘备份后，后续可以根据需要对备份进行修改或删除，还可基于备份点进行回滚、导出、复制等操作，详细请参见[更多备份相关操作](/storage/backup/manual/backup/)。