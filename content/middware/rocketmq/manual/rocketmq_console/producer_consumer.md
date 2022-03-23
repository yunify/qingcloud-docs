---
title: "发送消息"
description: 通过 RocketMQ 控制台发送消息。
keyword: 云计算,大数据,消息队列,中间件,RocketMQ,Topic,发送消息
weight: 30
draft: false
---

下面列举几个常见操作，详情可参见[官方使用文档](https://github.com/apache/rocketmq-dashboard/blob/master/docs/1_0_0/UserGuide_CN.md)。

## 注意事项

通过 RocketMQ 控制台可以对集群中的实际数据进行增删改，请谨慎操作。

## 发送消息

1. [登录 RocketMQ 控制台](../access)。
2. 选择 **Topic**，进入 Topic 页面。
3. 在目标 Topic 的 Operation 列，点击 **SEND MASSAFGE**，进入发送消息页面。

   在 Message Body 处填写消息内容。

   <img src="/middware/rocketmq/_images/send_message.png" alt="send message" style="zoom:50%;" />  

4. 点击 COMMIT，开始发送消息到目标 Topic。

   <img src="/middware/rocketmq/_images/send_message_successed.png" alt="send message" style="zoom:50%;" />  

##  查询消息

1. [登录 RocketMQ 控制台](../access)。
2. 选择 **Message**，进入 Message 页面。
3. 选择 Topic 和时间范围，点击 SEARCH 进行查询。

   <img src="/middware/rocketmq/_images/search_message.png" alt="search message" style="zoom:50%;" />  

4. 在查询结果的 Operation 列，点击 MESSAGE DETAIL 查看消息详情。

   <img src="/middware/rocketmq/_images/message_detail.png" alt="message detail" style="zoom:50%;" />  
