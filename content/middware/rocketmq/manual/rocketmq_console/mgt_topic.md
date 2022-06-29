---
title: "Topic 管理"
description: 通过 RocketMQ 控制台管理对 Topic 进行管理。
keyword: 云计算,大数据,消息队列,中间件,RocketMQ,Topic
weight: 30
draft: false
---

下面列举几个常见操作，详情可参见[官方使用文档](https://github.com/apache/rocketmq-dashboard/blob/master/docs/1_0_0/UserGuide_CN.md)。

## 注意事项

通过 RocketMQ 控制台可以对集群中的实际数据进行增删改，请谨慎操作。

## 创建 Topic

1. [登录 RocketMQ 控制台](../access)。
2. 选择 **Topic**，进入 Topic 页面。
3. 点击 **ADD/UPDATE**，进入 Topic Change 页面。

   指定 Topic 所在的集群、Broker、Topic 名称。

   <img src="/middware/rocketmq/_images/add_topic.png" alt="create topic" style="zoom:50%;" />  

4. 点击 COMMIT，开始创建 Topic。创建完成后，即可在 Topic 页面该 Topic。

   <img src="/middware/rocketmq/_images/rocketmq_console_topiclist.png" alt="create topic" style="zoom:50%;" />  
