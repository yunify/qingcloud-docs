---
title: "分区问题"
description: Kafka 分区问题。
keyword: 云计算,大数据,消息队列,中间件,Kafka,分区问题,常见问题
weight: 20
draft: true
---

## Kafka 分区所在 broker 突然下线，对生产者有影响吗？

- 若此时生产者未发送消息，将不会对生产者造成影响。
- 若此时生产者正在发送消息，可能会导致部分消息发送失败，需要在生产者回调方法里进行重试，重新发送。

  示例：  
  假设 topic 有 3 个分区 p0,p1,p2，3 个 broker 0,1,2。  
  p0 在 broker0 上，p1 在 broker1 上，p2 在 broker2 上。  
  现在生产者发送 message1 到 10 的消息给 broker。  

  生产者开始发送消息时，会获取元数据信息，有 3 个分区：  
  消息          broker  
  message1      0  
  message2      1  
  message3      2  
  message1,2,3 能正常发送  

  message4      0  
  message5      1  
  message6      2  
  message4，5，6 消息组装好后，还没发送之前，将 broker=2 下线：  
  message4，5 能正常发送，message6 会超时，抛异常（需要在生产者回调方法里进行重试，否则消息发送不出去），然后发送更新元数据请求  

  然后可用分区变成 p0,p1，剩下的消息会发到p0，p1分区：  
  message7      0  
  message8      1  
  message9      0  
  message7，8，9 能正常发送

## Kafka 增减分区对生产者有什么影响？

### 减少分区

请参见[Kafka 分区所在 broker 突然下线，对生产者有影响吗？](#kafka-分区所在-broker-突然下线对生产者有影响吗)

### 增加分区

增加分区将不会对生产者造成影响。  

示例：  
假设 topic 目前有 2 个分区 p0,p1，3 个 broker 0,1,2。  
p0 在 broker0 上，p1 在 broker1 上。  
现在生产者发送很多消息给broker。  

此时增加分区的个数，增加 1 个，也就是分区个数变成 3，如果元数据没有更新，那么消息是不能发送到分区 p2 的，只会发送到 p0,p1。  
元数据更新后，消息才可以发到 p2。 元数据更新频率为 5 分钟。  






