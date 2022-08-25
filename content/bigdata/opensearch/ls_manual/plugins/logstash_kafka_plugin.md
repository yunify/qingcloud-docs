---
title: "logstash-kafka 插件验证"
description: 本小节主要介绍 logstash-kafka 插件验证。
keyword: Logstash-kafka,插件使用说明
weight: 65
collapsible: false
draft: false

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

登录

es-output-topic：用于测试 logstash-output-kafka

es-test-topic：用于测试 logstash-input-kafka

使用 kafka-manager 创建上述 topic

![img](https://cwiki.yunify.com/download/attachments/128428049/image2022-8-16_11-13-24.png?version=1&modificationDate=1660619605474&api=v2)

## 准备 opensearch 集群

在appcenter，使用快速配置”预生产环境“创建opensearch集群

| 节点角色      | 节点规格  | 节点数量 |
| :------------ | :-------- | :------- |
| 专有主节点    | 2c4g，10G | 1        |
| 热节点        | 2c4g，60G | 2        |
| dashboard节点 | 2c4g      | 1        |
| logstash节点  | 2c4g，10G | 1        |

![img](https://cwiki.yunify.com/download/attachments/128428049/image2022-8-16_11-16-45.png?version=1&modificationDate=1660619806920&api=v2)

## 验证 logstash-output-kafka

### 配置 logstash

```
kafka {``  ``topic_id => ``"es-output-topic"``  ``bootstrap_servers => ``"172.22.2.124:9092"``}
```

![img](https://cwiki.yunify.com/download/attachments/128428049/image2022-8-16_11-38-56.png?version=1&modificationDate=1660621136680&api=v2)

重启logstash使配置生效

![img](https://cwiki.yunify.com/download/attachments/128428049/image2022-8-16_11-32-0.png?version=1&modificationDate=1660620720787&api=v2)

### 使用 logstash-input-http 向logstash写入数据

```
curl -d ``"msg 1"` `172.22``.``2.48``:``9700``curl -d ``"msg 2"` `172.22``.``2.48``:``9700``curl -d ``"msg 3"` `172.22``.``2.48``:``9700``curl -d ``"msg 4"` `172.22``.``2.48``:``9700``curl -d ``"msg 5"` `172.22``.``2.48``:``9700
```

### 在kafka客户端节点查看消息接收情况

```
./kafka-console-consumer.sh --bootstrap-server ``172.22``.``2.124``:``9092` `--topic es-output-topic --from-beginning
```

![img](https://cwiki.yunify.com/download/attachments/128428049/image2022-8-16_11-44-35.png?version=1&modificationDate=1660621476275&api=v2)

## 验证 logstash-input-kafka

### 配置 logstash

```
kafka {``  ``topics => [``"es-test-topic"``]``  ``bootstrap_servers => ``"172.22.2.124:9092"``}
```

![img](https://cwiki.yunify.com/download/attachments/128428049/image2022-8-16_12-12-56.png?version=1&modificationDate=1660623176808&api=v2)

重启logstash使配置生效

![img](https://cwiki.yunify.com/download/attachments/128428049/image2022-8-16_11-32-0.png?version=1&modificationDate=1660620720787&api=v2)

### 使用kafka客户端写入数据

```
./kafka-console-producer.sh --broker-list ``172.22``.``2.124``:``9092``,``172.22``.``2.125``:``9092``,``192.22``.``2.126``:``9092` `--topic es-test-topic
```

在终端向topic写入消息

![img](https://cwiki.yunify.com/download/attachments/128428049/image2022-8-16_12-16-28.png?version=1&modificationDate=1660623387689&api=v2)

### 在dashboard查看数据写入情况

```
GET _cat/indices
```

使用 logstash-input-kafka 插件，从topic消费的消息被写入opensearch集群，索引名称 logstash-yyyy.MM.dd

![img](https://cwiki.yunify.com/download/attachments/128428049/image2022-8-16_12-18-49.png?version=1&modificationDate=1660623529519&api=v2)

索引中的内容，包含前述在topic中写入的消息

```
GET /logstash-``2022.08``.``16``/_search
```

![img](https://cwiki.yunify.com/download/attachments/128428049/image2022-8-16_12-20-6.png?version=1&modificationDate=1660623607967&api=v2)