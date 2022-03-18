---
title: "Kafka Manager 升级说明"
description: Kafka 集群由老版本升级时，Kafka Manager 的管理界面数据可能没有及时更新。这是由于 Kafka 实际版本已经更新，而 Zookeeper 中的注册数据未刷新，这不影响正常使用。
keyword: 云计算,大数据,消息队列,中间件,Kafka,升级,Kafka Manager
weight: 40
draft: false
---

Kafka 集群由老版本升级时，Kafka Manager 的管理界面数据可能没有及时更新。这是由于 Kafka 实际版本已经更新，而 Zookeeper 中的注册数据未刷新，这不影响正常使用。

您可以通过本小节的步骤，刷新 Kafka Manager 的管理界面数据。

## 操作步骤

1. **Disable 集群**

   <img src="../../../_images/disable_cluster.png" alt="Disable 集群" style="zoom:50%;" />
   

2. **Enable 集群**

   <img src="../../../_images/enable_cluster.png" alt="Enable 集群" style="zoom:50%;" />

3. **恢复正常数据**

   <img src="../../../_images/recover_data.png" alt="恢复正常数据" style="zoom:50%;" />

   **Cluster 详情**

   <img src="../../../_images/cluster_info.png" alt="Cluster 详情" style="zoom:50%;" />