---
title: "Logstash 基本用法"
description: 本小节主要介绍 Logstash 基本用法。 
keyword: Logstash 基本用法,ELK
weight: 15
collapsible: false
draft: false
---



Logstash 可通过服务器端的数据处理流水线（pipeline），对来自多种数据源的数据进行转换后，发送到指定的多种目标（比如 Elasticsearch，对象存储等）。

本应用默认开启了 HTTP Input 插件（运行在 Logstash 节点的 9700 端口），比如下面的命令通过此插件把数据（字符串）发送到 Logstash（随后经过处理， Logstash 最终把数据发送到 Elasticsearch）。

```bash
curl -d "This is a test message." <LS_IP>:9700 # 发送测试数据
curl <ES_IP>:9200/logstash-*/_search # 查询
```

![logstash-pipeline](../../../_images/logstash-pipeline.png)
