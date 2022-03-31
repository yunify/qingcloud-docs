---
title: "回滚备份"
description: 本章节主要介绍如何回滚备份
draft: false
keyword: 创建备份, 增量备份, 全量备份
weight: 40
---

执行回滚操作后，会放弃资源当前状态，回滚到备份节点的状态。

本章节介绍如何创建备份。

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

   ![](/compute/vm/_images/vm_bak_rollback.png)

6. 点击**回滚**，弹出**提示**信息。

7. 点击**继续**，弹出**选择要回滚的备份点**窗口。

   <img src="/compute/vm/_images/vm_bak_rollback_win.png" style="zoom:50%;" />

8. 点击**提交**，完成回滚备份操作。

   备份节点将处于**应用中**状态，回滚完成后，备份链处于**可用**状态。

   
