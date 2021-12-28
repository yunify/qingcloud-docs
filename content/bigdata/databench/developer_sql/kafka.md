---
title: "Kafka"
description: 本小节主要介绍如何。 
keywords: 
weight: 10
collapsible: false
draft: false
---

Kafka 数据管道是流计算系统中最常用的数据源（Source）和数据目的（Sink）。用户可以把流数据导入到 Kafka 的某个 Topic 中，通过 Flink 算子进行处理后，输出到相同或不同 Kafka 示例的另一个 Topic。

Kafka 支持同一个 Topic 多分区读写，数据可以从多个分区读入，也可以写入到多个分区，以提供更高的吞吐量，减少数据倾斜和热点。

## 版本说明


## 使用范围


## 创建来源数据源表

### DDL 定义

### 元信息列

### WITH 参数

## 创建目标数据源表

