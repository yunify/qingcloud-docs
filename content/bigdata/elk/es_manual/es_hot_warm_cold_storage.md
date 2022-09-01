---
title: "Elasticsearch 热-温-冷节点中存放索引"
description: 本小节主要介绍 ELK 到期与欠费说明。 
keyword: 索引,温节点,热节点,冷节点
weight: 31
collapsible: false
draft: false


---

本小节主要介绍如何配置在热-温-冷节点中存放索引。

>**注意**
>
>APP 在热-温-冷部署架构中，使用 node.attr.data : host/warm/cold 来区分热、温、冷节点，而不是新引入的 data tiers。

## 操作步骤

### 创建索引模板

索引存放位置由索引配置 `index.routing.allocation.require.data` 来确定。例如

* 存放索引到热节点，索引配置 `index.routing.allocation.require.data: hot`。
* 存放索引到温节点，索引配置 `index.routing.allocation.require.data: warm`。
* 存放索引到冷节点，索引配置 `index.routing.allocation.require.data: cold`。

> 如果索引不设置  `index.routing.allocation.require.data`，那么索引将被无差别的随机存放在热、温、冷节点，达不到数据分层的效果。

1. 访问 Kiana，详细步骤请参见[访问 Kibana](/bigdata/elk/quickstart/access_kibana/)。

2. 进入 **Elastic** 首页。

3. 选择 **Management**  > **Dev Tools**。

4. 创建索引模板。

   执行以下命令为新创建的索引增加  `index.routing.allocation.require.data: hot` 的配置，新创建的索引将被存放在热节点。
   
   ```bash
   PUT _index_template/template_1
   {
     "index_patterns": ["mylog*", "otherlog*"],
     "template": {
       "settings": {
         "number_of_shards": 1,
         "number_of_replicas": 1,
         "index.rout_ing.allocation.require.data": "hot"
       }
     }
   }
   ```

### 创建索引

基于以上索引模板，创建的 mylog-01 索引拥有索引配置 `index.routing.allocation.require.data: hot`，该索引将被存放在热节点。

```bash
PUT /mylog-01
```

### 迁移索引

执行以下命令可将 mylog-01 索引迁移到温节点，需修改索引配置为 `index.routing.allocation.require.data: warm`。

```bash
PUT /mylog-01/_settings
{
  "index.routing.allocation.require.data": "warm"
}
```

执行以下命令可将 mylog-01 索引迁移到冷节点，需修改索引配置为 `index.routing.allocation.require.data: cold`

```bash
PUT /mylog-01/_settings
{
  "index.routing.allocation.require.data": "cold"
}
```

