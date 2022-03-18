---
title: "删除备份"
description: 本章节主要介绍如何删除备份
draft: false
keyword: 备份, 备份链, 删除备份
weight: 70
---

- 删除备份链时，资源删除后会在回收站中保留2小时。2小时后，备份链将会被彻底删除，不可恢复。
- 删除增量备份点时，其后所有子节点也会被删除，且不可恢复。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已创建云服务器。
- 已创建备份。

## 删除备份链

资源删除后会在回收站中保留2小时。

1. 登录管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入**云服务器列表**页面。

   ![](/compute/vm/_images/vm_server_list.png)

3. 点击云服务器的 ID，进入云服务器详情页面。

4. 点击**备份**，进入**备份**页面。

   ![](/compute/vm/_images/vm_bak_list.png)

   - 点击**鼠标右键**，弹出菜单窗口。

     ![](/compute/vm/_images/vm_bak_del.png)

   - 点击<img src="/content/compute/vm/_images/icon_win.png" style="zoom:50%;" />，并在弹出的菜单窗口中，点击**删除**。

     ![](/compute/vm/_images/vm_bak_del_menu.png)

5. 点击**删除**，弹出删除窗口。

5. 点击确认，完成备份链删除操作。

## 删除备份节点

删除备份节点，将会删除当前节点及其后的所有自节点。

1. 登录管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入**云服务器列表**页面。

   ![](/compute/vm/_images/vm_server_list.png)

3. 点击云服务器的 ID，进入云服务器详情页面。

4. 点击**备份**，进入**备份**页面。

   ![](/compute/vm/_images/vm_bak_list.png)

5. 点击<img src="/content/compute/vm/_images/icon_win.png" style="zoom:50%;" />，弹出菜单窗口。

   ![](/compute/vm/_images/vm_bak_del_one.png)

6. 点击**删除**，弹出提示信息窗口。

7. 点击**确认**，完成备份节点删除操作。

