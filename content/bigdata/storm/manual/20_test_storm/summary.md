---
title: "概述"
description: 本小节主要介绍如何快速使用 Storm 集群。 
keyword: Storm
weight: 01
collapsible: false
draft: false
---

Storm 创建完成之后可以测试其可用性。

以下操作示例都是基于 Storm 官方自带的示例 storm-starter 进行的。

- [示例一：ExclamationTopology](/bigdata/storm/manual/20_test_storm/10_exclamationtopology)
- [示例二：ReachTopology](/bigdata/storm/manual/20_test_storm/20_reachtopology)
- [示例三：MultipleLoggerTopology](/bigdata/storm/manual/20_test_storm/30_multipleloggertopology)
- [示例四：TridentWordCount](/bigdata/storm/manual/20_test_storm/40_tridentwordcount)
- [示例五：SlidingWindowTopology](/bigdata/storm/manual/20_test_storm/50_slidingwindowtopology)

除了自带的几个基本使用的例子之外，Storm 也可以很方便的与其他大数据组件整合。

例如：HBase、Kafka、Elasticsearch、Druid、Redis等。

详情可以参考 [Storm 官网](http://storm.apache.org/)中的 Integration With External Systems 和 Other Libraries。

## 前提条件

Storm 集群已有客户端节点。若创建集群时未创建 Client 节点，可通过[新增节点](/bigdata/storm/manual/30_mgt_node/add_node)功能进行添加。
