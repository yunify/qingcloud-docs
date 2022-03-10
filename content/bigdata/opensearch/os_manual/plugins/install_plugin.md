---
title: "安装 OpenSearch 插件"
description: 本小节主要介绍 OpenSearch 插件安装方法。
keyword: OpenSearch 安装插件,OpenSearch 插件，repository-s3，analysis-smartcn，analysis-ik，analysis-icu
weight: 15
collapsible: false
draft: false
---

本小节主要介绍部分 OpenSearch 插件的安装和验证方法，包括 `repository-s3`、`analysis-smartcn`、`analysis-ik` 和 `analysis-icu`等。

## repository-s3

[repository-s3](https://opensearch.org/docs/latest/opensearch/snapshot-restore/#amazon-s3) 将对象存储桶作为 SnapShot 存储仓库的数据迁移插件，可通用于 Elasticsearch 和 OpenSearch 集群间的数据迁移。

OpenSearch 服务支持在 OpenSearch 节点安装 `repository-s3`。

**安装**

```bash
/opt/opensearch/current/bin# ./opensearch-plugin install repository-s3
```

**验证**

```bash
PUT _snapshot/repo-opensearch
{
  "type": "s3",
  "settings": {
    "endpoint": "s3.pek3b.qingstor.com",
    "access_key": "abc",
    "secret_key": "abc",
    "bucket": "abc"
  }
}
 
GET _snapshot/_all
 
PUT _snapshot/repo-opensearch/1
 
GET _snapshot/repo-opensearch/1
```

<!--
## analysis-ik

[IK 分词插件（IK Analysis plugin）](https://github.com/medcl/elasticsearch-analysis-ik)是一款基于 Elasticsearch 开源插件，集成了 Lucene 的 IK 分析器，支持自定义词典，可通用于 Elasticsearch 和 OpenSearch 的 IK 分词分析。

OpenSearch 服务支持在 OpenSearch 节点安装 `analysis-ik`。在 IK 分词源码基础上，修改配置文件和 *.java文件，再安装 `analysis-ik`。

**安装**

在本地编译文件：将配置文件中 `elasticsearch` 替换为 `opensearch`；***.java** 文件中 `elasticsearch` 依赖替换为 `opensearch`。

在 OpenSearch 节点执行安装指令。

```bash
/opt/opensearch/current/bin/opensearch-plugin install <path-to-zip>
```

**验证**

```bash
GET _analyze
{
  "analyzer": "ik_max_word",
  "text": "The IK Analysis plugin integrates Lucene IK analyzer into OpenSearch, support customized dictionary."
}
```
-->

## analysis-icu

[ICU 分析插件（ICU Analysis plugin）](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html)是一款基于 Elasticsearch 开源插件，集成了 Lucene 的 ICU 分析器，支持使用 ICU 库的 Unicode 扩展，可通用于 Elasticsearch 和 OpenSearch 的 ICU 分析。

OpenSearch 服务支持在 OpenSearch 节点安装 `analysis-icu`。

**安装**

```bash
/opt/opensearch/current/bin/opensearch-plugin install analysis-icu
```

**验证**

```bash
GET _cat/plugins
 
GET _analyze
{
  "tokenizer": "icu_tokenizer",
  "text": "The ICU Analysis plugin integrates the Lucene ICU module into OpenSearch."
}
```

## analysis-smartcn

[智能中文分析插（Smart Chinese Analysis plugin）](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-smartcn.html)是一款基于 Elasticsearch 开源插件，集成了 Lucene 的智能中文分析器，支持中文或混合汉英文本的分析，可通用于 Elasticsearch 和 OpenSearch 的中文分词分析。

OpenSearch 服务支持在 OpenSearch 节点安装 `analysis-smartcn`。

**安装**

```bash
/opt/opensearch/current/bin/opensearch-plugin install analysis-smartcn
```

**验证**

```bash
GET _cat/plugins
 
GET _analyze
{
  "tokenizer": "smartcn_tokenizer",
  "text": "The Smart Chinese Analysis plugin integrates Lucene’s Smart Chinese analysis module into OpenSearch."
}
```
