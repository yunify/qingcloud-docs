---
title: "登录 Client"
description: 本小节主要介绍如何登录 Client。 
keywords: 云计算,大数据,青云,QingCloud,QingMR,QingMR 实例,QingMR Client,快速入门
weight: 12
collapsible: false
draft: false
---

本小节主要介绍如何登录 Client。

您可以通过 Client 节点和集群进行交互，如提交 job 等。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 QingMR 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据引擎 QingMR**，进入 QingMR 集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 选择**节点**页签，通过 Client 节点 IP，或直接点击 Client 节点 ID 旁的 Web 终端图标，登录 Client 节点。
   ![登录Client](../../_images/qingmr_node_list.png)
5. 根据提示输入用户名和密码。   
   > **说明**
   > 
   > - 节点用户名为 `ubuntu`，初始密码为 `p12cHANgepwD`。   
   > - 若您对密码进行了修改，此处请输入修改后的密码。   
   
   ![Web 终端](../../_images/Client_web_terminal.png)