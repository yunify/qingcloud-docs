---
title: "更换系统"
description: 本章节主要介绍如何更换系统
draft: false
keyword: 云计算, 青云, QingCloud, 云服务器，更换系统
weight: 50
---

本章节介绍如何更换云服务器的系统。

1. 更换系统后原系统盘的数据将被清除，如果您仍需要这部分数据，请确保已通过备份或镜像的方式做好备份。
2. 如果您不需要相关备份数据，请去备份管理中删除！
3. 更换系统后原数据盘的数据不会被清除，但需要手动挂载才能使用。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已创建云服务器。
- 云服务器状态处于“已关机”。

## 操作步骤

1. 登录管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入**云服务器列表**页面。

   ![](/compute/vm/_images/vm_server_list.png)

3. 点击鼠标右键，弹出菜单窗口。

   <img src="/compute/vm/_images/vm_modify_sys.png" style="zoom:50%;" />

4. 点击**更换系统**，弹出更换系统提示信息。

   <img src="/compute/vm/_images/vm_modify_sys_prompt.png" style="zoom:50%;" />

5. 确保已知晓提示信息后，点击确定，弹出**更换操作系统**窗口。

   <img src="/compute/vm/_images/vm_modify_sys_win.png" style="zoom:50%;" />

6. 根据需要选择需要更换的操作系统。

7. 点击**立即更换**，进入云服务器列表页面。

   云服务器状态处于重置中，重置完成后，服务器恢复为更换系统前的状态。
