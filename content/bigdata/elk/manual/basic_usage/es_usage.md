---
title: "Elasticsearch 基本用法"
description: 本小节主要介绍 Elasticsearch 基本用法。 
keyword: Elasticsearch 基本用法,ELK
weight: 10
collapsible: false
draft: false
---



Elasticsearch 用索引（index）来组织数据，用户向 Elasticsearch 发送数据时需要指定目标索引，比如如下命令把数据（访问日志）以 JSON 格式发送到了名为 `access-log-2019.05.13` 的索引（索引名称可根据实际情况指定）。

> **说明**
>
> Elasticsearch 从 6.x 版本起，新创建的 index 不再支持多 mapping types（在老版本创建的可以在 6.x 版本继续使用），官方建议使用 `_doc` 作为唯一的 mapping type。更多详情请查阅 [官方说明](https://www.elastic.co/guide/en/elasticsearch/reference/6.7/removal-of-types.html)。
> 
> 如果是 5.x 版本，mapping type 不能以下划线开头，需要把下面的 `_doc` 改成 `doc` 或者其他任意名称。

```shell
POST access-log-2019.05.13/_doc
{
  "from": "10.10.10.10",
  "success": true
}
```

从 Elasticsearch 查询数据时也需要指定目标索引，比如如下命令从名为 `access-log-2019.05.13` 的索引查询。

```shell
curl -H "Content-Type: application/json" "<ES_IP>:9200/access-log-2019.05.13/_search?q=*"
```
