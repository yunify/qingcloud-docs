---
title: "重置系统"
description: 本章节主要介绍如何重置系统
draft: false
keyword: 云计算, 青云, QingCloud, 云服务器，重置系统
weight: 30
---

重置云服务器系统会将您的操作系统盘重置为初始状态。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已创建云服务器。

## 操作步骤

1. 登录管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入**云服务器列表**页面。

   ![](/compute/vm/_images/vm_server_list.png)

3. 点击鼠标右键，弹出菜单窗口。

   ![](/compute/vm/_images/vm_reset_sys.png)

4. 点击**重置系统**，弹出**提示**窗口。

   <img src="/compute/vm/_images/vm_reset_sys_prompt.png" style="zoom:40%;" />

5. 点击**继续**，弹出**重置云服务器系统**窗口。

   <img src="/compute/vm/_images/vm_reset_sys_win.png" style="zoom:50%;" />

6. 您需要为重置后的云服务器设置登录密钥或者密码。

   > **说明**
   >
   > 若选择 SSH 密钥登录，需要有可选的 SSH 密钥。若没有可选的 SSH 密钥，您可以点击**创建一个**，创建一个 SSH 密钥。

7. 点击**提交**，系统弹出提示信息窗口。

8. 点击**继续**，进入云服务器列表，即完成重置系统的操作。

   在云服务器列表中，云服务器状态为**重置中**。若重置完成，服务器恢复为重置服务器前的状态。
