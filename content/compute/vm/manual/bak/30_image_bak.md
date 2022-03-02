---
title: "基于备份制作新镜像"
description: 本章节主要介绍如何基于备份制作新镜像
draft: false
keyword: 创建备份, 增量备份, 全量备份
weight: 30
---

本章节介绍如何创建备份。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已创建云服务器。
- 已创建备份。

## 操作步骤

1. 登录管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入**云服务器列表**页面。

   ![](/compute/vm/_images/vm_server_list.png)

3. 点击云服务器的 ID，进入云服务器详情页面。

4. 点击**备份**，进入**备份**页面。

   ![](/compute/vm/_images/vm_bak_list.png)

5. 点击**鼠标右键**，弹出菜单窗口。

   <img src="/compute/vm/_images/vm_bak_image.png" style="zoom:50%;" />

6. 点击**制作成新镜像**，弹出根据云服务器备份制作镜像。

   <img src="/compute/vm/_images/vm_bak_image_win.png" style="zoom:50%;" />

7. 配置镜像的名称与是否加密。

8. 点击**提交**，完成基于备份制作镜像的操作。

   您可以选择**计算** > **镜像** > **自有**页面，查看基于备份制作的镜像。
