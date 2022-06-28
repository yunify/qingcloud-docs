---
title: "登录 Storm 客户端"
description: 您可以通过网页 VNC 登录 Storm 客户端。
keyword: 云计算,大数据,Storm,client,客户端
weight: 65
draft: false
---

Storm 集群的客户端节点已自动完成相关配置，您可以通过客户端节点和集群进行交互。

- 登录方式：您可以通过 Web 终端（网页 VNC）登录 Storm 客户端。
- 登录帐号：用户名为 `root`，初始密码为 `storm`。

## 前提条件

- 已创建 Storm 集群，且 Storm 集群状态为**活跃**。
- Storm 集群已有客户端节点。若创建集群时未创建 Client 节点，可通过[新增节点](/bigdata/storm/manual/30_mgt_node/add_node)功能进行添加。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **Storm 服务**，进入 **Storm** 页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 选择**节点**页签，点击节点名称右侧的 Web 终端。

   <img src="/bigdata/storm/_images/login_client_vnc.png" alt="登录 Client 节点" style="zoom:70%;" />

5. 根据提示输入客户端节点用户名密码。

   > **说明**
   > 
   > - 节点用户名为 `root`，初始密码为 `storm`。
   > - 若您对密码进行了修改，此处请输入修改后的密码。
