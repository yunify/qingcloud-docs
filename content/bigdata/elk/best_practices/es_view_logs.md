---
title: "Elasticsearch 日志查看"
description: 本小节主要介绍 Elasticsearch 集群日志查看。
keywords: Elasticsearch 日志查看,
weight: 35
collapsible: false
draft: false
---

## 操作步骤

可直接通过浏览器访问任意 Elasticsearch 节点的 80 端口 http://$ES_IP/logs/ 查看所有 Elasticsearch 节点的日志，如下图所示。

![es-logs](../../images/es-logs.png)

## 旧版操作步骤

`ELK 5.6.16 - QingCloud 1.5.0` 之前的版本请按下面的步骤操作。

1. 在集群列表页面，在 ELK 集群上点击右键选择 **自定义服务** > **收集ES日志**，然后选择 **Elasticsearch节点** 点击提交。

   ![collect_es_logs](../../images/collect_es_logs.png)

2. 任务执行成功后可通过浏览器访问`http://< Logstash 节点IP>/logs/`查看对应 ES 节点的日志。

   > **说明**
   > 如存在多个 Logstash 节点请在集群详情页面切换到参数配置界面，配置 Elasticsearch 节点的 `logstash_node_ip` 配置项。
