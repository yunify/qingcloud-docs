---
title: "Kibana 基本用法"
description: 本小节主要介绍 Kibana 基本用法。 
keyword: Kibana 基本用法,ELK
weight: 20
collapsible: false
draft: false
---



Kibana 是 Elasticsearch 的可视化工具，可通过浏览器访问。在浏览器中输入 `http://< KB_IP >:5601/` 打开 Kibana。

首先点击左侧栏的 `Management` 菜单，点击 `Create index pattern` 来创建 index pattern。

默认情况下，Kibana 认为您要访问的是通过 Logstash 导入 Elasticsearch 的数据。这时候您可以用默认的 `logstash-*` 作为您的 index pattern。

> **说明**
>
> 如果显示 "Unable to fetch mapping. Do you have indices matching the pattern?"，可参考 [Logstash 基本用法](../logstash_usage) 发送一些数据。

![config_index](../../../_images/kibana_elk.png)

index pattern 创建成功后可点击左侧栏的 `Discover` 菜单查看导入的日志。

> **说明**
>
> 关于 Kibana 更多的使用方式，请参考[官方文档](https://www.elastic.co/guide/en/kibana/6.7/index.html)。
