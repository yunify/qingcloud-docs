---
title: "配置并验证 logstash-kafka 系列插件"
description: 本小节主要介绍 logstash-kafka 插件验证。
keyword: Logstash-kafka,插件使用说明
weight: 65
collapsible: false
draft: false


---

本小节为您介绍如何配置和验证 logstash-kafka 相关插件。

## 前提条件

* 已获取管理控制台登录账号和密码，且已获取集群操作权限。
* Kafka 集群和 OpenSearch 集群状态为`活跃`。

## 步骤 1：准备 kafka 环境

1. 创建 Kafka 集群。

   > 要求 Kafka 版本为： 2.3.1 -v2.0.2

   登录控制台，按照以下规格创建一个 Kafka 集群，详细操作请参见[创建 Kafka 集群](/middware/kafka/quickstart/create_cluster/)。

   | 节点角色   | 节点规格  | 节点数量 |
   | :--------- | :-------- | :------- |
   | Kafka节点  | 1c2g，30G | 3        |
   | 客户端节点 | 1c1g，10G | 1        |

   <img src="../../../_images/logstash_kafka_01.png" style="zoom:100%;" />

2. 创建测试用 Topic。

   浏览器登录 Kafka Manager 界面并创建以下两个 topic，详细操作请参见[创建 Topic](/middware/kafka/quickstart/create_resource/)。

   * es-output-topic：用于测试 logstash-output-kafka
   * es-test-topic：用于测试 logstash-input-kafka

   <img src="../../../_images/logstash_kafka_02.png" style="zoom:100%;" />

## 步骤 2：准备 OpenSearch 集群

登录控制台，按照以下规格创建一个 OpenSearch 集群，详细操作请参见[创建 OpenSearch 集群](/bigdata/opensearch/quickstart/create_cluster/)。

| 节点角色      | 节点规格  | 节点数量 |
| :------------ | :-------- | :------- |
| dashboard节点 | 2c4g      | 1        |
| logstash节点  | 2c4g，10G | 1        |
| 专有主节点    | 2c4g，10G | 1        |
| 热节点        | 2c4g，60G | 2        |

<img src="../../../_images/logstash_kafka_03.png" style="zoom:100%;" />

## 步骤 3：验证 logstash-output-kafka

1. 配置 Logstash。

   将 Logstash 节点的`output_conf_content`参数设置为以下内容，详细操作请参见[修改配置参数](/bigdata/opensearch/manual/config_para/modify_para/)。

   ```
   kafka {
       topic_id => "es-output-topic"
       bootstrap_servers => "172.22.2.124:9092"
   }
   ```

   <img src="../../../_images/logstash_kafka_04.png" style="zoom:100%;" />

2. 重启 Logstash节点，详细操作请参见[重启节点](/bigdata/opensearch/manual/node_lifecycle/restart_node/)。

   <img src="../../../_images/logstash_kafka_05.png" style="zoom:100%;" />

3. 登录 Logstash 节点服务器，进入 shell。

4. 执行以下命令，使用 logstash-input-http 向logstash写入数据。

   ```shell
   curl -d "msg 1" 172.22.2.48:9700
   curl -d "msg 2" 172.22.2.48:9700
   curl -d "msg 3" 172.22.2.48:9700
   curl -d "msg 4" 172.22.2.48:9700
   curl -d "msg 5" 172.22.2.48:9700
   ```

5. 登录 Kafka 客户端节点，详细操作请参见[登录 Kafka 客户端](/middware/kafka/manual/kafka_client/login_kafka_client/)。

6. 执行以下命令，查看消息接收情况。

   ```
   ./kafka-console-consumer.sh --bootstrap-server 172.22.2.124:9092 --topic es-output-topic --from-beginning
   ```

   <img src="../../../_images/logstash_kafka_06.png" style="zoom:100%;" />

## 步骤 4：验证 logstash-input-kafka

1. 配置 Logstash。

   将 Logstash 节点的`input_conf_content`参数设置为以下内容，详细操作请参见[修改配置参数](/bigdata/opensearch/manual/config_para/modify_para/)。

   ```
   kafka {
       topics => ["es-test-topic"]
       bootstrap_servers => "172.22.2.124:9092"
   }
   ```

   <img src="../../../_images/logstash_kafka_07.png" style="zoom:100%;" />

2. 重启 Logstash节点，详细操作请参见[重启节点](/bigdata/opensearch/manual/node_lifecycle/restart_node/)。

   <img src="../../../_images/logstash_kafka_05.png" style="zoom:100%;" />

3. 登录 Kafka 客户端节点，详细操作请参见[登录 Kafka 客户端](/middware/kafka/manual/kafka_client/login_kafka_client/)。

4. 执行以下命令，查看消息接收情况。

   ```shell
   ./kafka-console-producer.sh --broker-list 172.22.2.124:9092,172.22.2.125:9092,192.22.2.126:9092 --topic es-test-topic
   ```

   <img src="../../../_images/logstash_kafka_08.png" style="zoom:100%;" />

## 步骤 5：登录 Dashboard 查看数据写入情况。

1. 浏览器登录 Dashboard，详细操作请参见[访问 Dashboard](/bigdata/opensearch/os_manual/dashboard/dashboard_login/)。

2. 创建索引，详细操作可参见[创建索引策略](/bigdata/opensearch/best_practices/index_mgt/#步骤-2创建索引策略)。

3. 选择 **Management** > **Dev Tools**。

4. 执行以下命令，查看索引。

   ```shell
   GET _cat/indices
   ```

   使用 logstash-input-kafka 插件，从 topic 消费的消息被写入 Opensearch 集群，索引名称 logstash-yyyy.MM.dd。

   <img src="../../../_images/logstash_kafka_09.png" style="zoom:100%;" />

5. 执行以下命令，查看索引中的内容，包含前述在 topic 中写入的消息。

   ```shell
   GET /logstash-2022.08.16/_search
   ```

   <img src="../../../_images/logstash_kafka_10.png" style="zoom:100%;" />
