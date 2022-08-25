---
title: "logstash-kafka 插件验证"
description: 本小节主要介绍 logstash-kafka 插件验证。
keyword: Logstash-kafka,插件使用说明
weight: 65
collapsible: false
draft: true

---

本小节为您介绍如何进行 logstash-kafka 插件验证。

## 前提条件

* 已获取管理控制台登录账号和密码，且已获取集群操作权限。
* 要求Kafka版本为： 2.3.1 -v2.0.2

## 准备kafka环境

### 创建kafka集群

登录控制台，按照以下规格创建一个 Kafka 集群，详细操作请参见[创建 Kafka 集群](/middware/kafka/quickstart/create_cluster/)。

| 节点角色   | 节点规格  | 节点数量 |
| :--------- | :-------- | :------- |
| Kafka节点  | 1c2g，30G | 3        |
| 客户端节点 | 1c1g，10G | 1        |

<img src="../../../_images/logstash_kafka_01.png" style="zoom:100%;" />

### 创建测试用 topic

es-output-topic：用于测试 logstash-output-kafka

es-test-topic：用于测试 logstash-input-kafka

使用 kafka-manager 创建上述 topic

