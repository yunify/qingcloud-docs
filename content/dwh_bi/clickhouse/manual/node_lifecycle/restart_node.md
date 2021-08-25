---
title: "重启节点"
description: 本小节主要介绍如何重启节点。 
keywords: ClickHouse 重启节点
weight: 20
collapsible: false
draft: false
---



ClickHouse 在 AppCenter 集群管理控制台一键重启集群全部节点。

> **注意**
> 
> 重启节点时相应业务将被短暂中断，为避免对业务数据造成丢失等影响，建议在业务闲暇期进行重启操作。

本小节主要介绍如何重启 ClickHouse 集群节点。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。

## 按角色重启节点

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据仓库与 BI** > **ClickHouse**，进入集群管理页面。
3. 勾选目标集群，点击操作栏**更多操作** > **重启**，弹出重启集群角色窗口。
4. 选择集群已有节点类型。
5. 点击**提交**，返回集群详情页面。

    待节点状态切换为**活跃**，即节点重启完毕。

   <img src="../../../_images/restart_node_all.png" alt="重启节点" style="zoom:50%;" />