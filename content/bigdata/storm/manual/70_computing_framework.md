---
title: "流式计算框架对比分析"
description: 本小节主要介绍流式计算框架对比分析。 
keywords: Storm,流式计算框架对比分析
weight: 70
collapsible: false
draft: false
---

> **注意：**
>
> Storm 支持 Storm Core 和 Storm Trident 两种编程模式。

|     Flink      |                      Spark Streaming                      |                           Storm                           |                         Kafka Stream                         | 说明                                              |
| :------------: | :-------------------------------------------------------: | :-------------------------------------------------------: | :----------------------------------------------------------: | ------------------------------------------------- |
|    架构模式    |                           主从                            |         主从，依赖 Spark,每个 batch 处理都依赖主          |        主从，依赖 Zookeeper,处理过程中对主的依赖不大         | 安装 Kafka,Kafka 依赖 Zookeeper                   |
|      容错      |        基于 distributed snapshots checkpoint 机制         |                  基于 HDFS 做 checkpoint                  |                         Records Ack                          | 高可用分区，状态存储和对乱序数据的处理能力        |
| 处理模型与延迟 |                 单条事件处理，毫秒级延迟                  |             一个事件窗口的所有事件，秒级延迟              | Storm Core 单条事件处理，毫秒级延迟，Storm Trident 为批处理，秒级延迟 | 单条事件处理，毫秒级延迟                          |
|      吞吐      |                            高                             |                            高                             |           Storm Core 低吞吐，Storm Trident 高吞吐            | 高                                                |
|  数据处理保证  |                       exactly once                        |                       exactly once                        | Storm Core保证 at least once，Storm Trident 保证 exactly once | 0.11.0版本后 exactly once                         |
|     易用性     | 支持 SQL Streaming，Batch 和 Streaming 采用的统一编程框架 | 支持 SQL Streaming，Batch 和 Streaming 采用的统一编程框架 |                sql on Storm 发展中，还不成熟                 | 自己的一套编程模型，KSQL 支持(Confluent 平台支持) |
|     成熟性     |                  处于发展阶段，比较成熟                   |                 发展了很长时间，非常成熟                  |                   发展了很长时间，非常成熟                   | 处于发展阶段，比较成熟                            |
|   分布式 RPC   |                          不支持                           |                          不支持                           |                             支持                             | 不支持                                            |

Flink 和 Kafka Stream 目前在生产环境中比较少见，主要针对 Storm 和 Spark Streaming 选型建议如下所示。

**建议使用 Storm 场景**

- 需要很低延迟的，比如实时金融系统，要求纯实时进行金融交易和分析。
- 要求可靠的事务机制和可靠性机制，即数据的处理完全精准无误的。
- 需要针对高峰低峰时间段，动态调整实时计算程序的并行度，以最大限度利用集群资源（通常是在小型公司，集群资源紧张的情况），也可以考虑用 Storm。
- 如果一个大数据应用系统，它就是纯粹的实时计算，不需要在中间执行 SQL 交互式查询、复杂的　transformation 算子等，那么用 Storm 是比较好的选择。
- 分布式 RPC 服务场景。

**建议使用 Kafka Stream 场景**

输入源为 Kafka,轻量级 ETL 场景

**建议使用 Spark Streaming 场景**

- 不要求纯实时，不要求强大可靠的事务机制，不需要动态调整并行度，那么可以考虑使用 Spark Streaming。
- 如果一个项目除了实时计算之外，还包括了离线批处理、交互式查询等业务功能，而且实时计算中，可能还会牵扯到高延迟批处理、交互式查询等功能，那么可以选择 Spark 生态，用 Spark Core 开发离线批处理，用 Spark SQL 开发交互式查询，用 Spark Streaming 开发实时计算，三者可以无缝整合，给系统提供非常高的可扩展性。
- 吞吐量很大，海量数据场景。

> **注意：**
>
> 同时建议大数据场景下，使用混合架构可以更好的满足各种业务需求。

在使用过程中如果遇到问题可以通过 `提交工单` 来获取帮助。

## Storm Paas 文档

Storm Paas 文档请访问[这里](https://docs.qingcloud.com/product/big_data/storm.html)。
