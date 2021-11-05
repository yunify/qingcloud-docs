---
title: "ELK 英文日志搜索"
description: 本小节主要介绍 ELK 英文日志搜索场景。 
keywords: ELK 日志搜索,
weight: 10
collapsible: false
draft: false
---

本小节为用户呈现了英文日志从 Logstash 导入到 Elasticsearch ，再通过 Kibana 进行搜索的完整的过程。

> **说明**
>
> 为了方便测试，此选择了 logstash-http-input 插件输入日志数据，在实际应用中用户可以选择多种 Logstash Input 插件从各种数据源获取日志数据，比如文件、log4j、syslog、QingStor 对象存储、Kafka 等。
>
> 此外，Logstash 默认将日志输出到 Elasticsearch 中，用户可以通过 `output_es_content` 配置项，对这个输出过程进行定制。用户还可以通过 `output_conf_content` 配置项，选择将日志输出到除了 Elasticsearch 之外的其他位置，比如 QingStor 对象存储。

## 操作步骤

1. 在集群详情页面找到任意 Logstash 节点的 IP 地址。参照 **Logstash 基本用法**，执行如下命令将一条模拟日志发往 Logstash 。

   ```bash
   curl -d "[09-07 15:57:26]: call_es_api [:10105/_cluster/health] Exception [error: [Errno -5] No address associated with hostname], try to sleep 10 second." $LS_IP:9700
   ```

2. 参照 **Kibana 基本用法**在浏览器中访问 Kibana 节点并配置 index pattern：点击左侧的 `Discover` 菜单项，显示近期接收到的日志，在搜索栏中输入 `error` ，点击右侧的“搜索”按钮。
   
   如图，`error` 被高亮显示，测试成功。

   ![en_search_result](../../images/en_search_result.png)