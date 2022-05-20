---
title: "自定义 Connector"
description: 本小节主要介绍如何自定义 Connector。 
keywords: 大数据工作台,自定义 Connector
weight: 100
collapsible: false
draft: false
---

若内置的 Connector 无法满足需求，您可以自定义 Connector。通过自行上传实现了相应 Source 和 Sink 接口的类实现，然后在作业中进行配置，作业在运行时会动态加载并调用。

## 版本说明

当前仅支持 Flink 1.12 版本。

## 开发 Connector

1. 选择 Connector   
    您可以选择第三方提供的 Connector 实现包（例如 Bahir），或者自行通过编程的方式实现。   
    - Apache Bahir 第三方包   
        [Apache Bahir](https://github.com/apache/bahir-flink) 为 Flink 提供了常见的数据源和数据目的的扩展包。   
    - 自行编程实现   
        自定义 source、sink，详细请参见 [Flink API](https://ci.apache.org/projects/flink/flink-docs-release-1.13/zh/docs/dev/table/sourcessinks/)。    
        示例：[自定义 Redis connector](../redis)。

2. 构建 Connector 包   
    建议参考现有的 Connector 项目构建 JAR 程序包。

## 使用 Connector

1. 上传程序包   
    在资源管理界面，上传自定义 Connector 的 JAR 程序包。详细操作请参见[上传程序包](/bigdata/dataomnis/manual/data_development/resource/upload)。   
2. 作业引用程序包   
    根据自定义 Connector 中定义的 Source 和 Sink 结构，在 SQL 作业开发面板中进行相应配置。
3. 选择依赖资源   
    在作业的运行参数界面，选择已上传的 JAR 程序包。
