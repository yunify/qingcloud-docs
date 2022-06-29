---
title: "基准测试"
description: 本小节主要介绍 什么是 RocketMQ 的基准测试。
keyword: 云计算,大数据,消息队列,中间件,RocketMQ,rocketMQ,基准测试
weight: 29
draft: false
---

## 测试环境

在`北京3A区`区域，创建如下规格的 RocketMQ 集群。

| 节点角色       | 数量       | 规格     | 系统     |
| :--------- | :------- | :------- | :------- |
| Name Server  | 1  | <li>2CPU<li>4G内存<li>性能型           | Ubuntu Server 16.04.5 LTS 64bit |
| Broker       | 2  | <li>2CPU<li>4G内存<li>50G硬盘<li>性能型 | Ubuntu Server 16.04.5 LTS 64bit |
| 客户端        | 2  | <li>4CPU<li>8G内存<li>性能型           | Ubuntu Server 16.04.5 LTS 64bit |

<img src="/middware/rocketmq/_images/benchmark_cluster_nodes.png" alt="测试环境" style="zoom:50%;" />

## 参数配置

- Broker 主从复制模式：SYNC（同步模式）
- 数据持久化方式：ASYNC_FLUSH（异步模式）
- 消息生产者 JVM 参数：`-server -Xms4g -Xmx4g -Xmn2g -XX:PermSize=128m -XX:MaxPermSize=320m -XX:+UseConcMarkSweepGC -XX:+UseCMSCompactAtFullCollection -XX:CMSInitiatingOccupancyFraction=70 -XX:+CMSParallelRemarkEnabled -XX:SoftRefLRUPolicyMSPerMB=0 -XX:+CMSClassUnloadingEnabled -XX:SurvivorRatio=8 -XX:+DisableExplicitGC -verbose:gc -Xloggc:/dev/shm/rmq_srv_gc.log -XX:+PrintGCDetails -XX:-OmitStackTraceInFastThrow -XX:-UseLargePages -XX:+PerfDisableSharedMem -Dorg.apache.rocketmq.client.sendSmartMsg=true`

<img src="/middware/rocketmq/_images/benchmark_cluster_env.png" alt="参数配置" style="zoom:50%;" />

## 测试代码

来自官方的 benchmark 代码：[Producer](https://github.com/apache/rocketmq/blob/master/example/src/main/java/org/apache/rocketmq/example/benchmark/Producer.java)、[Consumer](https://github.com/apache/rocketmq/blob/master/example/src/main/java/org/apache/rocketmq/example/benchmark/Consumer.java)

## 测试方法

一个客户端节点生产消息到 Broker，另一个客户端节点从 Broker 消费消息，持续 24 小时。

## 测试结果

| 指标       | 值       | 说明     |
| :--------- | :------- | :------- |
| CPU利用率  | ~ 90%  | 4核心    |
| 内存使用率 | ~ 50%  | 总内存8G |
| TPS        | ~ 2000 | -        |

<img src="/middware/rocketmq/_images/benchmark_result_screenshot.png" alt="测试结果" style="zoom:50%;" />