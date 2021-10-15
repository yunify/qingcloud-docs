---
title: "多可用区（同城多活）测试"
description: test
weight: 29
draft: false
keyword:  QingCloud, RabbitMQ, rabbitmq,  消息队列服务, 消息中间件
---

## 背景

- [青云QingCloud 升级区域（Region）架构 轻松实现同城多活](https://log.qingcloud.com/archives/3981)

## 测试结果

针对基础配置的三节点集群，在设置消息/队列持久化并开启镜像队列到所有节点的情况下，多可用区部署的集群性能没有明显的下降，参见下表：

| 集群 / 指标                           | 网络延时 Ping *                | 消费吞吐量 TPS |
| :------------------------------------ | :----------------------------- | :------------- |
| 多可用区部署（pek3 b/c/d，主节点在b） | pek3c：`1.5ms`，pek3b：`2.6ms` | `~4518`        |
| 多可用区部署（pek3 b/c/d，主节点在c） | pek3c：`1.5ms`，pek3b：`2.6ms` | `~4408`        |
| 多可用区部署（pek3 b/c/d，主节点在d） | pek3c：`1.5ms`，pek3b：`2.6ms` | `~4528`        |
| 单可用区部署（pek3d）                 | `0.3ms`                        | `~4657`        |

\* *网络延时视情况而定，同可用区可能在`0.1 ~ 0.5ms`之间波动，不同可用区之间波动更大一些，一般在`1ms`以上。*

## 测试环境

- 区域：北京3区
- RabbitMQ磁盘节点 (*3)：1CPU， 1G内存，性能型
- 测试节点：pek3d区，8CPU， 8G内存，基础型，Ubuntu Server 18.04.1 LTS 64bit

## 测试方法

使用[官方工具](https://github.com/rabbitmq/rabbitmq-perf-test/)，分别针对位于不同可用区的主节点发/收消息，官方工具统计得到TPS 。

## 测试代码

```
bin/runjava com.rabbitmq.perf.PerfTest -u perf.test.ha -f persistent -X 1 -Y 1 -z 30 -H amqp://192.168.3.3
```

至此，`RabbitMQ on QingCloud AppCenter`的介绍到这里就告一个段落了。

在使用过程中如果遇到问题可以通过`提交工单`来获取帮助，我们将竭诚为您服务。