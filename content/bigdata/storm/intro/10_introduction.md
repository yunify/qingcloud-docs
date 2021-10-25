---
title: "什么是 Storm"
description: 本小节主要介绍 Storm 服务简介。 
keywords: Storm 产品简介
weight: 10
collapsible: false
draft: false
---

Storm 是一个开源的分布式实时计算系统，通常被比作＂实时的 Hadoop＂。Storm 为实时计算提供了一些简单优美的原语，支持多种编程语言，并内建流式窗口 API 及分布式缓存 API，极大简化了流式数据处理过程。Storm 不仅高可靠、易扩展，而且处理速度极快，每个计算节点每秒能处理上百万条元组信息（Tuple），因此常被用于实时分析、在线机器学习、连续计算、分布式 RPC、ETL 等。 关于 Storm 更多的详细信息，请参阅 [Storm 官方网站](http://storm.apache.org/)。

Storm 具有如下特点：

- 编程简单：开发人员只需要关注应用逻辑，而且跟 Hadoop 类似，Storm 提供的编程原语也很简单。
- 高性能，低延迟：实时性在流式计算框架中最强。
- 可扩展：随着业务发展，数据量和计算量越来越大，系统可水平扩展。
- 容错：单个节点挂了不影响应用。
- 消息不丢失：保证消息处理。

除此之外 `Storm on QingCloud AppCenter` 将 Storm 通过云应用的形式在 QingCloud AppCenter 部署，具有如下特性：

- 版本升级到 1.1.1，相比较之前的版本，Storm 开始对 Streaming SQL 有了支持，加强了与 Kafka、HDFS、OpenTSDB、Druid 等大数据组件的集成，详情请参阅 [官方说明](http://storm.apache.org/)。
- 支持横向与纵向在线伸缩。
- 提供 Storm UI 高可用 vip, 更加方便的监控和管理 Storm。
- 系统自动运维，降低企业使用成本。
- 一键部署，开箱即用。
- 已经配置好基础环境的客户端节点，用于方便提交 Topology。
