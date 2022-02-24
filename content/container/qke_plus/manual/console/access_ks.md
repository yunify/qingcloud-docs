---
title: "登录 KubeSphere"
description: 本小节介绍如何在本地通过公网访问 KubeSphere。
draft: false
weight: 10
keyword: 青云, QingCloud, 云计算, 容器, QKE, KubeSphere
---

如果您安装了 KubeSphere，则可以使用浏览器登录 KubeSphere 控制台。

本小节介绍如何在本地通过公网访问 KubeSphere。

## 前提条件

- 已安装 KubeSphere 且 KubeSphere 后端已正常运行。

  > **说明**
  >
  > 可使用 `kubectl get po -n kubesphere-system`	命令查看运行状态。返回信息中，若 **Status** 列均显示`Runing`则表示KubeSphere 后端正常运行。

- 确保用于访问的机器具备访问外网的能力。

## 背景信息

首次登录 KubeSphere 请使用如下默认管理员账户及密码，登录后需要立即修改密码。

- **用户名**：`admin@kubesphere.io`

- **密码**：`P@88w0rd`

## 操作步骤

1. 登录 QingCloud 管理控制台。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **容器服务** > **容器引擎 QKE**，进入 QKE 集群列表页面。

3. 在集群列表，点击目标集群名称，进入**集群概览**页面。

4. 在左侧导航栏，点击**可视化控制台**，进入**可视化控制台**页面。

5. 可选：绑定 KubeSphere 控制台 EIP。

   - 若您在创建集群时，已经配置了 **KubeSphere 控制台 EIP** ，则可以在页面看到 KubeSphere 的公网访问地址。请跳过本步骤，执行下一步。

     ![](../../../_images/bind_eip_done.png)·	

   - 若您未绑定 KubeSphere 控制台 EIP，则需要按照以下步骤进行绑定：

     1. 前往**产品与服务** > **网络服务** > **公网 IP** 页面，创建一个外部绑定的公网 IP。

     2. 在**可视化控制台**页面，点击**选择 EIP**。

        ![](../../../_images/select_ks_eip.png)·	

     3. 选择创建好的公网 IP，点击**确定**。

6. 可通过以几种下方式进入 KubeSphere 登录页面。

   -  点击 **KubeSphere** 字样下方的公网 IP 地址，进入到 KubeSphere 登录页面。
   - 点击 **前往控制台**，进入到 KubeSphere 登录页面。
   - 在浏览器地址栏中，输入 KubeSphere 控制台绑定的公网 IP 并按下回车，进入到 KubeSphere 登录页面。

   ​	![](../../../_images/kubesphere_login.png)·	

7. 输入用户及密码，点击**登录**。

   > **说明**
   >
   > 为保障系统安全，首次登录后，请立即修改密码。

