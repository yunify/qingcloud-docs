---
title: "服务准备"
description:  
keywords: 
weight: 20
collapsible: false
draft: false
---

## 创建工作空间

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入大数据工作台概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 选择相应的区域，点击**创建工作空间**，填写工作空间名称和描述信息。
   
   <img src="/bigdata/dataomnis/_images/create_workspace.png" alt="创建工作空间" style="zoom:50%;" />

5. 点击**创建**，开始创建工作空间。    
   工作空间创建成功后，即可在工作空间页面查看相应内容。

   <img src="/bigdata/dataomnis/_images/workspace_list.png" alt="工作空间列表" style="zoom:50%;" />

## 创建网络

1. 在目标工作空间选择**数据开发** > **网络配置**，进入网络配置页面。
2. 点击**创建网络**，进入创建网络页面。
   
   <img src="/bigdata/dataomnis/_images/create_net.png" alt="创建网络" style="zoom:50%;" />

3. 填写网络名称，选择 VPC 网络和私有网络。

   VPC 网络建议与所创建的 MySQL 集群与 ELK 集群一致。

4. 点击**创建**，开始创建网络。

   <img src="/bigdata/dataomnis/_images/net_list.png" alt="网络列表" style="zoom:50%;" />

## 创建计算集群

1. 在目标工作空间选择**数据开发** > **计算集群**，进入计算集群列表页面。
2. 点击**创建集群**，进入创建计算集群页面。
3. 配置集群相关参数。

   - **网络配置**选择在[创建网络](#创建网络)中创建的网络。
   - 其他参数详细介绍请参见[创建计算集群](../../../manual/data_development/flink_cluster/create_cluster/)。

   <img src="/bigdata/dataomnis/_images/bp_create_flink_cluster.png" alt="创建计算集群" style="zoom:50%;" />

4. 配置完成后，点击**立即创建**，开始创建计算集群。   
   计算集群创建成功后，即可在计算集群页面查看相应内容。

   <img src="/bigdata/dataomnis/_images/flink_cluster_list.png" alt="计算集群列表" style="zoom:50%;" />

