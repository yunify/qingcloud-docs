---
title: "卸载 SSH 密钥"
description: 本章节介绍如何创建 SSH 密钥。
draft: false
weight: 30
---

<<<<<<< HEAD
本章节介绍如何卸载 SSH 密钥。
=======
本章节介绍如何绑定 SSH 密钥。
>>>>>>> e0933e53 (vm:bak)

## 前提条件

- 已获取管理控制台的账号和密码。
<<<<<<< HEAD
- 云服务器已绑定 SSH 密钥。

## 卸载 SSH 密钥
=======
- 已创建 SSH 密钥。

## 约束限制

- 一个云服务器可绑定多个 SSH 密钥。

- 一个 SSH 密钥可加载到多个云服务器。
- 加载到云服务器时，若勾选**加载 SSH 密钥后，禁止密码登录，同时 WebSSH 连接密码认证不可用**，则不能使用密码登录及 WebSSH 的密码认证不可用。

## 创建 SSH 密钥时绑定云服务器
>>>>>>> e0933e53 (vm:bak)

1. 登录管理控制台。

1. 选择**产品与服务** > **计算** > **云服务器** >  **SSH 密钥** ，进入 **SSH 密钥**页面。

3. 点击**鼠标右键**，弹出菜单窗口。

   <img src="/compute/vm/_images/vm_ssh_unload.png" style="zoom:50%;" />

4. 点击**卸载**，弹出**选择要从云服务器上卸载的 SSH 密钥**窗口。

   <img src="/compute/vm/_images/vm_ssh_unload_choose.png" style="zoom:50%;" />

5. 选择待卸载的 SSH 密钥。

6. 点击**提交**，弹出提示信息窗口。

   <img src="/compute/vm/_images/vm_ssh_unload_confirm.png" style="zoom:50%;" />

7. 点击**确认**，完成 SSH 密钥卸载操作。

   在云服务器详细信息页面的**配置**区域，可查看已绑定的 SSH 密钥是否已卸载。

   ![](/compute/vm/_images/vm_ssh_bind_site.png)
