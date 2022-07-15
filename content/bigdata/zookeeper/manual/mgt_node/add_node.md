---
title: "新增节点"
description: 本小节主要介绍如何新增 ZooKeeper 节点实例。 
keyword: 云计算,大数据,ZooKeeper,ZooKeeper 节点添加,新增节点
weight: 10
collapsible: false
draft: false
---

本小节主要介绍如何新增 ZooKeeper 集群节点。

## 约束限制

- 目前 ZooKeeper 支持创建 ZooKeeper 的参与者节点，参与者节点是指参与投票选举的节点，包括 Leader、Follower、单节点 Standalone 三种服务模式。为了确保集群可以正常工作，通常需要保证有足够多的参与者节点，这样当某个或某几个节点坏掉以后，参与者的数量（Quorum）还可以保证选举出 Leader。
- 暂不支持创建观察者节点。
- 支持最多创建 9 个节点 。
  - 若 ZooKeeper 集群在单个区域，建议最多创建5个参与者节点。
  - 若跨多个区域，建议最多创建 9 个参与者节点。
- 新增节点数必须为偶数，每次至少可增加两个。

## 注意事项

增加参与者节点会影响 ZooKeeper 的写性能。因为写操作需要得到 Quorum 对 Leader 的一致同意才能进行，参与者越多所需的协商时间越长。建议不要创建过多集群参与者节点。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 ZooKeeper 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **ZooKeeper 服务**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**节点**页签，点击**新增节点**，弹出新增节点窗口。

   <img src="/bigdata/zookeeper/_images/add_node.png" alt="新增节点" style="zoom:50%;" />

5. 配置节点信息。

   |  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
   |:--- |:--- |
   | 节点数量 |  输入新增节点数量，根据已有节点数量确定可新增节点数量。|
   | 节点名称 |  输入节点名称。 |
   | 节点 IP   |  配置节点 IP 地址。<ul><li>默认为`自动分配`。</li><li> 选择`手动配置`需为各节点配置 IP。</li></ul>  |

6. 确认配置信息无误后，点击**提交**，返回节点列表页面。

   待集群状态切换为**活跃**，即节点添加完毕。   
