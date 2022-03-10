---
title: "救援云服务器"
description: 本章节主要介绍如何救援云服务器
draft: false
keyword: 云服务器，救援云服务器
weight: 60
---

救援云服务器时会创建一台新云服务器(云服务器名为：rescue-i-xxxx)，其挂载着被救援云服务器的根盘。并且其新创建的云服务器会在取消救援时回收。

调整规格后，需开机 > 关机后再救援。

## 前提条件

- 已获取管理控制台账号和密码。
- 已创建云服务器且状态处于“已关机”。

## 操作步骤

1. 登录管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入**云服务器列表**页面。

   ![](/compute/vm/_images/vm_server_list.png)

3. 点击**鼠标右键**，弹出菜单窗口。

   <img src="/compute/vm/_images/vm_rescue_vm.png" style="zoom:50%;" />

4. 点击**救援云服务器**，弹出**救援云服务器**窗口。

   <img src="/compute/vm/_images/vm_rescue_vm_win.png" style="zoom:50%;" />

5. 输入云服务器**密码**，并点击**提交**，弹出提示信息窗口。

   <img src="/compute/vm/_images/vm_rescue_vm_prompt.png" style="zoom:40%;" />

6. 点击继续，完成救援云服务器操作。

   原服务器状态处于“故障恢复中“，并创建了一台新云服务器且状态处于“运行中”。
