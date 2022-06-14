---
title: "修改计费模式"
description: 本小节主要介绍如何切换 ZooKeeper 集群的计费模式。 
keyword: 云计算,大数据,ZooKeeper,ZooKeeper 集群切换计费模式
weight: 40
collapsible: false
draft: false
---

ZooKeeper 集群创建成功后，可以修改计费模式：

- 当前计费模式为按需计费：按需计费模式修改为包年/包月模式，修改后立即生效，可以享受更大的价格优惠。
- 当前计费模式为包年/包月：包年/包月模式不支持直接修改计费模式。可以通过[退订](/bigdata/zookeeper/manual/mgt_cluster/unsubscribe)操作，将包年包月集群切换为按需计费集群。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 请您确保余额充足，以免扣费对其他资源造成影响。
- 集群的**计费模式**为`包年包月`。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **ZooKeeper 服务**，进入集群管理页面。
3. 点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，点击集群操作下拉菜单。
5. 展开下拉菜单，点击**修改计费模式**，弹出修改计费模式窗口。
   
   <img src="/bigdata/zookeeper/_images/switch_billing_mode.png" alt="修改计费模式" style="zoom:50%;" />

6. 选择计费模式，确认价格。
7. 点击**修改**，返回节点列表页面。
