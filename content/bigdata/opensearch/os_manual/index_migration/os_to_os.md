---
title: "从 OpenSearch 到 OpenSearch （复制方式）"
description: 本小节主要介绍如何从 OpenSearch 迁移索引到 OpenSearch。 
keyword: 搜索分析,从 OpenSearch 到 OpenSearch，SnapShot，快照方式，索引迁移,OpenSearch,搜索引擎,大数据
weight: 20
collapsible: false
draft: false
---

OpenSearch 服务支持将数据复制到一个或多个 OpenSearch 集群，通过 `opensearch-cross-cluster-replication` 插件，以 Replication 方式从 OpenSearch 迁移数据，可实现集群数据迁移和灾备。

创建 OpenSearch 跨集群复制后，主 OpenSearch 集群上对索引的素所有操作（包括创建、更新、删除文档等），都将复制到从集群节点上。

本小节主要介绍如何在 OpenSearch 集群间复制数据。

## 约束限制

- 跨集群复制期间，复制的索引仅可读。
- 跨集群复制期间，不能将从集群索引复制到主集群。
- 复制停止后，不支持重启复制。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建至少两个 OpenSearch 集群，且集群状态为`活跃`。
- 请确保从集群的 **opensearch.yml** 中包含 `remote_cluster_client` 角色。可在 **opensearch.yml** 中添加如下语句：

  ```plain
  node.roles: [<other_roles>, remote_cluster_client]
  ```

- 请确保两个集群间的网络通畅。
- 若开启了安全插件，请确保从集群能连接主集群。可在 **opensearch.yml** 中添加如下语句：

  ```plain
  plugins.security.nodes_dn_dynamic_config_enabled: true
  ```

## 步骤 1: 运行 docker-compose 文件

创建 **docker-compose.yml** 文件，并分别在两个集群上运行 docker-compose，以启动在同一网络上的两个集群。

以 9201 端口为主集群端口，9200 端口为从集群端口，添加 **docker-compose.yml** 文件内容如下：
   
```plain
version: '3'
services:
  replication-node1:
    image: opensearchproject/opensearch:1.2.0
    container_name: replication-node1
    environment:
      - cluster.name=leader-cluster
      - discovery.type=single-node
      - bootstrap.memory_lock=true
      - "OPENSEARCH_JAVA_OPTS=-Xms512m -Xmx512m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - opensearch-data2:/usr/share/opensearch/data
    ports:
      - 9201:9200
      - 9700:9600    # 性能分析所需
    networks:
      - opensearch-net
  replication-node2:
    image: opensearchproject/opensearch:1.2.0
    container_name: replication-node2
    environment:
      - cluster.name=follower-cluster
      - discovery.type=single-node
      - bootstrap.memory_lock=true
      - "OPENSEARCH_JAVA_OPTS=-Xms512m -Xmx512m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    volumes:
      - opensearch-data1:/usr/share/opensearch/data
    ports:
      - 9200:9200
      - 9600:9600     # 性能分析所需
    networks:
      - opensearch-net

volumes:
  opensearch-data1:
  opensearch-data2:

networks:
  opensearch-net:
```

待集群启动后，验证集群的名称是否正确。

```bash
curl -XGET -u 'admin:admin' -k 'https://localhost:9201'
{
  "cluster_name" : "leader-cluster",
  ...
}

curl -XGET -u 'admin:admin' -k 'https://localhost:9200'
{
  "cluster_name" : "follower-cluster",
  ...
}
```

## 步骤 2: 创建复制索引

在主集群创建一个名为 `leader-01` 的索引。

```bash
curl -XPUT -k -H 'Content-Type: application/json' -u 'admin:admin' 'https://localhost:9201/leader-01?pretty'
```

在从集群开始复制，以生成 `follower-01` 的只读索引为例，执行如下请求：

```bash
curl -XPUT -k -H 'Content-Type: application/json' -u 'admin:admin' 'https://localhost:9200/_plugins/_replication/follower-01/_start?pretty' -d '
{
   "leader_alias": "my-connection-alias",
   "leader_index": "leader-01",
   "use_roles":{
      "leader_cluster_role": "all_access", 
      "follower_cluster_role": "all_access"
   }
}'
```

> **注意**
> 
> 若开启了安全插件，需 **use_roles** 参数。

## 步骤 3: 查看复制状态

开始复制后，复制包括 `SYNCING`、`BOOTSTRAPING`、`PAUSED`和`REPLICATION NOT IN PROGRESS` 四种状态。

执行如下请求，获取状态：

```bash
curl -XGET -k -u 'admin:admin' 'https://localhost:9200/_plugins/_replication/follower-01/_status?pretty'

{
  "status" : "SYNCING",
  "reason" : "User initiated",
  "leader_alias" : "my-connection-alias",
  "leader_index" : "leader-01",
  "follower_index" : "follower-01",
  "syncing_details" : {
    "leader_checkpoint" : -1,
    "follower_checkpoint" : -1,
    "seq_no" : 0
  }
}
```

## 后续操作

### 暂停并恢复复制

若为了修复主集群问题或减轻主集群的负载，可暂停索引的复制。

```bash
curl -XPOST -k -H 'Content-Type: application/json' -u 'admin:admin' 'https://localhost:9200/_plugins/_replication/follower-01/_pause?pretty' -d '{}'
```

当问题修复后，可恢复复制。

```bash
curl -XPOST -k -H 'Content-Type: application/json' -u 'admin:admin' 'https://localhost:9200/_plugins/_replication/follower-01/_resume?pretty' -d '{}'
```

> **注意**
> 
> 若暂停超过12小时，将不能恢复复制。若需恢复复制，需先停止复制，删除复制的索引，并重启主集群复制。

### 停止复制

在从集群停止复制后，从集群不再从主集群复制索引，复制的只读索引将独立为一个可读写的索引。

> **注意**
> 
> 从集群停止复制后，将无法重启复制。

```bash
curl -XPOST -k -H 'Content-Type: application/json' -u 'admin:admin' 'https://localhost:9200/_plugins/_replication/follower-01/_stop?pretty' -d '{}'
```

执行如下请求，确认复制已暂停，不再从主集群复制数据。

```bash
curl -XGET -k -u 'admin:admin' 'https://localhost:9200/_plugins/_replication/follower-01/_status?pretty'

{
  "status" : "REPLICATION NOT IN PROGRESS"
}
```
