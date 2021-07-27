---
title: "功能特性"
description: 本小节主要介绍 QingCloud ELK 简要主要功能特性。 
keywords: ELK 功能特性, 
weight: 15
collapsible: false
draft: false
---

青云QingCloud 提供的 ELK 集群服务具备以下功能特点：

* 为 Elasticsearch 提供了更强大的分词功能支持，集成了 [IK Analysis](https://github.com/medcl/elasticsearch-analysis-ik) 中文分词插件，并为该插件提供了 [结巴分词](https://github.com/fxsjy/jieba/blob/master/jieba/dict.txt) 的词库和 IK 自带的搜狗词库，同时还支持用户上传自定义词典。
* Elasticsearch 与 [青云对象存储 QingStor](https://www.qingcloud.com/products/qingstor/) 集成。Elasticsearch 集成了官方 [S3 Repository 插件](https://www.elastic.co/guide/en/elasticsearch/plugins/6.7/repository-s3.html)，可通过标准 S3 接口与青云对象存储 QingStor 集成，以便生成 snapshot 并将其存储到到 QingStor 中，并可以在必要时从中恢复。
* Logstash 与 青云对象存储 QingStor 集成，用户可以很方便地从 QingStor 对象存储通过内置的 [官方插件 logstash-input-s3](https://www.elastic.co/guide/en/logstash/6.7/plugins-inputs-s3.html) 输入数据到 Elasticsearch 或者通过 [logstash-output-s3](https://www.elastic.co/guide/en/logstash/6.7/plugins-outputs-s3.html) 插件将输入到 Logstash 的数据导出到青云对象存储。
* Logstash 提供自定义插件能力。
* Kibana 节点集成 ES 反向代理和负载均衡，并提供 Elasticsearch 节点失效时的故障转移能力。
* Kibana 节点提供 Cerebro、ES Head、ElasticHD、Elasticsearch-HQ、ES SQL 等可视化管理工具，方便用户通过浏览器使用 Elasticsearch。
* 所有节点内置日志查看工具，用户可通过浏览器直接访问日志文件，方便定位问题。
* 集群关键指标监控。
* 一键集群安装部署。
* 支持节点横向和纵向扩容。
* 集成 elasticsearch-analysis-pinyin 插件 *（ ELK 5.5.1 - QingCloud 1.2.1 版本开始）*。
* 支持企业级分布式 SAN（NeonSAN）存储，单节点最大 50T 容量 *（ ELK 5.6.16 - QingCloud 1.5.0 开始）*。
* 支持 ES 专有主节点（Dedicated Master）*（ ELK 5.6.16 - QingCloud 1.5.0 开始）。*
* 支持热温冷（Hot-Warm-Cold）架构 *（ ELK 5.6.16 - QingCloud 1.5.0 开始）*。
* 支持 ES 节点滚动升级和重启，最小化对业务的影响 *（ ELK 5.6.16 - QingCloud 1.5.0 开始）。*

