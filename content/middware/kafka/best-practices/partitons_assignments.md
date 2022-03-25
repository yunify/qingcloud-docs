---
title: "Kafka 分区再平衡"
description: 
keyword: 云计算,大数据,消息队列,中间件,Kafka,分区再平衡
weight: 20
draft: false
---

当集群负载很高时，加入了新的 Broker，此时新 Broker 没有任何分区，您需要把已有 Broker 上的部分分区再平衡到新 Broker 上，从而分担负载。

## 操作步骤

1. [登录 Kafka Manager](/middware/kafka/manual/kafka_manager/access_kafka_manager)。
2. 点击目标 Cluster 名称，进入 Cluster 详情页面。

   <img src="/middware/kafka/_images/cluster_detail.png" alt="集群详情" style="zoom:50%;" />

3. 在顶部菜单栏选择 **Topic** > **List**，进入 Topic List 页面。

   <img src="/middware/kafka/_images/generate_partition.png" alt="Generate Partition" style="zoom:50%;" />

4. 点击 **Generate Partition Assignments**，进入 Confirm Assignments 页面。

   <img src="/middware/kafka/_images/generate_partition_01.png" alt="Generate Partition" style="zoom:50%;" />

5. 勾选左侧所有 Topic，勾选右侧所有 Broker，点击 **Generate Partition Assignments**，系统会根据当前情况自动生成推荐的再平衡分配列表。
6. 回到 Topic List 页面。

   <img src="/middware/kafka/_images/run_partition.png" alt="Run Partition" style="zoom:50%;" /> 

7. 点击 **Run Partition Assignments**，进入 Run Assignments 页面。

   <img src="/middware/kafka/_images/run_partition_01.png" alt="Run Partition" style="zoom:50%;" /> 

8. 点击 **Run Partition Assignments**，开始再平衡。此操作会把老 Broker 上的部分 Partition 分配到新加入的 Broker 上，让整个集群的流量更均衡。
9. 在顶部菜单栏选择 **Reassign Partitions**，进入 Reassign Partitions 页面，查看结果。

   <img src="/middware/kafka/_images/reassign_partitions.png" alt="Reassign Partitions" style="zoom:50%;" /> 
