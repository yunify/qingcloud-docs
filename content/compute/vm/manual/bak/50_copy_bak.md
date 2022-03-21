---
title: "跨区域复制备份"
description: 本章节主要介绍如何跨区域复制备份
draft: false
keyword: 创建备份, 增量备份, 全量备份
weight: 50
---

- 在备份列表中，点击**鼠标右键** > **跨区复制备份**，复制整条备份链的备份。
- 在备份节点中，点击 <img src="/compute/vm/_images/icon_win.png" style="zoom:50%;" />，再点击跨区复制。
  - 在备份链头节点或者最后一个节点跨区复制备份时，复制整条备份链的备份。
  - 在备份链的中间节点跨区复制备份时，会复制备份链头节点到当前复制节点的备份。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已创建云服务器。

## 操作步骤

1. 登录管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入**云服务器列表**页面。

   ![](/compute/vm/_images/vm_server_list.png)

3. 点击云服务器的 ID，进入云服务器详情页面。

4. 点击**备份**，进入**备份**页面。

   ![](/compute/vm/_images/vm_bak_list.png)

5. 在备份示意结构图中点击 <img src="/compute/vm/_images/icon_win.png" style="zoom:45%;" />，弹出菜单窗口。

   <img src="/compute/vm/_images/vm_bak_copy.png" style="zoom:50%;" />

6. 点击**跨区复制备份**，弹出**选择区**窗口。

   <img src="/compute/vm/_images/vm_bak_copy_win.png" style="zoom:50%;" />

7. 选择备份复制到的地区。

8. 点击**提交**，完成跨区复制备份操作。

   页面弹出**已经提交任务，请等待资源复制完成。可前往【全局操作日志】 查看任务状态**提示信息。
