---
title: "产品优势"
description: 本小节主要介绍 OpenSearch 产品优势。 
keyword: 产品优势,OpenSearch,搜索引擎,大数据 
weight: 20
collapsible: false
draft: false
---

## 热-温-冷数据架构

在某些大规模数据分析场景（比如时间数据分析），可以采用热-温-冷数据架构。该架构基于时间创建 index，持续地把温/冷数据迁移到相应的数据节点。

更多说明，请参见 [Hot-Warm” Architecture in Elasticsearch 5.x](https://www.elastic.co/blog/hot-warm-architecture-in-elasticsearch-5-x)。

## 高可用专有主节点

通过专有主节点，可提高集群稳定性。专有主节点执行群集管理任务，但不保留数据也不响应数据上传请求。此群集管理任务的卸载可增加您的域的稳定性。

## Logstash 与 QingStor 对象存储集成

Logstash 支持从 QingStor 对象存储输入数据到 OpenSearch，或者从 OpenSearch 导出数据到 QingStor 对象存储。

## 与 Elasticsearch 的区别

OpenSearch 除了支持并兼容 Elasticsearch 7.10.2 的所有功能，还提供了丰富的商业功能，如下所示：

- 跨集群同步
- 高级安全功能
- SQL 查询语法
- 报告
- 异常检测
- 索引管理
- 性能分析器和 RCA 框架
- 异步搜索
- 跟踪分析
- 警报
- k-NN 搜索
- 管道处理语言
- 仪表盘笔记本
