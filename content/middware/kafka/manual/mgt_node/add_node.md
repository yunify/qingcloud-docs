---
title: "新增节点"
description: 本小节主要介绍如何新增 Kafka 集群节点。 
keyword: 云计算,大数据,消息队列,中间件,kafaka 节点添加,Kafka,新增节点
weight: 10
collapsible: false
draft: false
---


本小节主要介绍如何新增 Kafka 集群节点。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 Kafka 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **消息队列与中间件** > **Kafka 服务**，进入 Kafka 集群列表页面。
3. 点击目标集群 ID，进入集群详情页面。
4. 在**节点**页签，点击**新增节点**，弹出新增节点配置窗口。
   
   <img src="../../../_images/add_node.png" alt="新增节点" style="zoom:50%;" />

5. 配置节点信息，详细参数请参见[节点参数](#节点参数)。

6.  确认配置信息无误后，点击**提交**，返回节点列表页面。

   ![查看节点信息](../../../_images/nodelist.png)

### 节点参数

|  <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:480px">说明</span>  |
|:--- |:--- |
| 节点类型   | 选择节点类型。可选择 `Kafka 节点`、`客户端节点`。 |
| 节点数量 |  输入新增节点数量，根据已有节点数量确定可新增节点数量。|
| 节点名称 |  输入节点名称。 |
| 节点 IP   |  配置节点 IP 地址。<li>默认为`自动分配`。<li> 选择`手动配置`需为各节点配置 IP。  |
