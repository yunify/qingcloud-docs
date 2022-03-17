---
title: "消息问题"
description: Kafka 收发消息常见问题。
keyword: 云计算,大数据,消息队列,中间件,Kafka,收发消息,常见问题
weight: 30
draft: false
---

## 客户端连接 Kafka 服务超时，无法正常收发消息，如何处理？

**问题现象**

1. 客户端连接 Kafka 服务超时，无法正常收发消息。
2. Kafka 集群中有 `不正常` 的 Kafka 节点，且节点的 cpu/mem/ 硬盘使用率过高（如下图，达到了 100%）。
    
    ![](../../_images/abnomal_node.png)

    ![](../../_images/massage_failed01.png)

**问题原因**

磁盘占满导致无法写入新消息，Kafka 服务中断。

**解决方法**

- **方法一**：
    登录对应节点的后台，根据实际情况删除消息存储空间中的日志文件（日志文件路径为：/data/kafka/kafka-logs/），稍后 Kafka 服务即可恢复正常。**此方法可临时规避该问题**，若后续磁盘空间占满，该问题会再次出现。
- **方法二**：
    修改服务**配置参数**中自动删除消息的最大限值 **log.retention.bytes** ，超过该大小会触发删除策略，系统将自动对文件进行清理，**从而避免此问题再次发生**。
    
    **log.retention.bytes** 具体值请根据实际情况进行配置。

    ![](../../_images/message_failed02.png)



## 如何增大生产者发送消息的大小？

Kafka 默认生产者发送的消息不能超过 1M（**max.request.size** 参数的默认值为 1M），若需要增大生产者发送消息的大小，需要在生产端和服务端对相关参数进行修改。

1. 生产端修改（在 producer 的代码中进行修改）    

   - 若生产者的消息大于 1M、小于等于 32M，增大 **max.request.size** 参数即可。    
   - 若生产者的消息大于 32M，需要同时增大 **max.request.size** 和 **buffer.memory** 参数。  

   > **说明**
   >
   > **buffer.memory** 参数值（默认值为 32M）必须大于 **max.request.size** 参数。
   
    针对消费者：如果生产者的消息持续较大，可以修改 **fetch.message.max.bytes** 参数，增加 fetch 的最大字节数，加大每次 fetch 的消息大小。  

2. 服务端修改（通过管理控制台的**配置参数**进行修改）  
    生产端增大了 **max.request.size** 参数值后，需要同时增大服务端的 **message.max.bytes** 参数，否则服务端无法接收这么大的消息。

   > **说明**
   >
   > **message.max.bytes** 参数值（默认值为 1000000 + MessageSet.LogOverhead = 1000012）必须大于 **max.request.size** 参数。

