---
title: "登录 Client"
description: 本小节主要介绍如何登录 Client。 
keyword: 云计算,大数据,QingMR,QingMR 实例,QingMR Client,快速入门
weight: 12
collapsible: false
draft: false
---

QingMR 集群的 Client 节点已自动完成相关配置，您可以通过 Client 节点和集群进行交互，如提交 job 等。

- 登录方式：通过 Web 终端登录、通过 SSH 登录。
- 登录帐号：用户名为 `ubuntu`，初始密码为 `p12cHANgepwD`。通过 `sudo su` 可以切换到 `root` 用户。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 QingMR 集群，且集群状态为**活跃**。
- QingMR 集群已有 Client 节点。若创建集群时未创建 Client 节点，可通过[新增节点](../../manual/mgt_node/add_node)功能进行添加。
- 若通过 SSH 登录，需要使用端口转发或 VPN 等方式打通集群网络，使集群云服务器能面向互联网提供服务。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据引擎 QingMR**，进入 QingMR 集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 选择**节点**页签，进入节点列表页面。

   ![登录 Client](../../_images/qingmr_node_list.png)

   - Web 终端登录：点击 Client 节点 ID 旁的 Web 终端图标，登录 Client 节点。
   - SSH 登录：获取 Client 节点 IP，通过 SSH 远程连接工具进行登录。

5. 根据提示输入用户名和密码。   
   > **说明**
   > 
   > - 节点用户名为 `ubuntu`，初始密码为 `p12cHANgepwD`。 
   > - 若您对密码进行了修改，此处请输入修改后的密码。   
   
   ![Web 终端](../../_images/Client_web_terminal.png)



