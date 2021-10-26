---
title: "将虚拟机加入 IP 组"
description: 本小节主要介绍青立方® 超融合易捷版 将虚拟机加入 IP 组。 
keywords: 青立方® 超融合易捷版，将虚拟机加入 IP 组
weight: 20
collapsible: false
draft: false
---





本小节主要介绍如何将虚拟机加入 IP 组，以 `ip_test` 为示例。

## 将虚拟机加入 IP 组

若用户希望将一台虚拟机加入一个 IP 组，或将虚拟机从一个 IP 组迁移加入至另一个 IP 组 (虚拟机需先离开原有 IP 组)，加入后将为虚拟机自动分配一个属于该 IP 组的网段中 IP。

1. 登录 青立方® 超融合易捷版。
2. 选择 **虚拟资源**，进入虚拟机管理列表。
3. 选择目标虚拟机，点击 **更多操作** > **加入网络**，弹出网络选择窗口。
   
   ![加入 IP 组](../../../_images/join_ip_group.png)

4. 选择目标网络，例如选择 `ip_group`。

   ![加入 IP 组](../../../_images/join_ip_group2.png)

5. 点击**确定**，即成功加入该 IP 网络。

   ![加入 IP 组](../../../_images/join_ip_group3.png)

## 创建虚拟机时加入 IP 组

在新建虚拟机时也可以加入 IP 组，如下所示新建一台虚拟机 `docs-demo`，在网络中选择**选择基础网络**。

   ![加入 IP 组](../../../_images/join_ip_group4.png)
