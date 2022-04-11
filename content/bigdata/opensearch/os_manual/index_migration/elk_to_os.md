---
title: "从 ELK 到 OpenSearch （SnapShot 方式）"
description: 本小节主要介绍如何从 ELK 迁移索引到 OpenSearch。 
keyword: 搜索分析,从 ELK 到 OpenSearch，SnapShot，快照方式，索引迁移,OpenSearch,搜索引擎,大数据
weight: 10
collapsible: false
draft: false
---

OpenSearch 服务支持通过 [repository-s3](https://opensearch.org/docs/latest/opensearch/snapshot-restore/#amazon-s3) 插件，以 SnapShot 方式从 ELK 迁移数据到 OpenSearch。

本小节主要介绍如何通过快照方式从 ELK 迁移数据到 OpenSearch。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为`活跃`。
- 已获取 ELK 集群信息，且集群状态为`活跃`。
- 已创建可用 QingStor 桶和 API 密钥，并分别获取到 `endpoint`、`bucket`、`access_key`、`secret_key`信息。
- 请确保 OpenSearch 集群与 ELK 集群之间网络畅通。

## 步骤 1: 在 ELK 创建快照

1. 登录 Kibana 管理控制台，在 Dev Tools 的 Console 中分别执行以下命令。
   
   ```bash
   GET _cat/indices
    
   PUT _snapshot/elk-opensearch
   {
     "type": "s3",
     "settings": {
       "endpoint": "s3.pek3b.qingstor.com",
       "access_key": "<YourAccessKey>",
       "secret_key": "<YourSecretKey>",
       "bucket": "test"
     }
   }
    
   GET /_snapshot/elk-opensearch
    
   POST /_snapshot/elk-opensearch/_verify
    
   PUT /_snapshot/elk-opensearch/s001
    
   GET /_snapshot/elk-opensearch/_all
   ```

2. 登录 QingStor 管理控制台，即可在 相应桶中查看到生成的快照文件。

  <img src="../../../_images/check_elk_snapshot.png" alt="查看快照文件" style="zoom:50%;" />

## 步骤 2: 在 OpenSearch 创建 snapshot-repository

登录 Dashboard 管理控制台，在 Dev Tools 的 Console 中分别执行以下命令。

```bash
PUT _snapshot/elk-opensearch
{
  "type": "s3",
  "settings": {
    "endpoint": "s3.pek3b.qingstor.com",
    "access_key": "<YourAccessKey>",
    "secret_key": "<YourSecretKey>",
    "bucket": "test"
  }
}
 
GET /_snapshot/elk-opensearch
 
GET /_snapshot/elk-opensearch/s001

```

## 步骤 3: 在 OpenSearch 恢复索引

### 恢复单个索引

以恢复 `s001` 仓库索引为例：

```bash
GET /_snapshot/elk-opensearch

POST _snapshot/elk-opensearch/s001/_restore
{
  "indices": "mytest",
  "ignore_unavailable": true,
  "include_global_state": false,
  "rename_pattern": "mytest",
  "rename_replacement": "restore_mytest",
  "include_aliases": false
}
```

### 恢复多个索引

以恢复 `s001` 和 `s002` 仓库索引为例：

> **注意**
> 
> 为防止干扰，需先删除 OpenSearch 中干扰项。

```bash
DELETE /<index-name>

POST _snapshot/elk-opensearch/s001/_restore

GET _cat/indices
```

### 恢复已修改的索引

若索引已被修改，执行恢复将提示“不允许覆盖 open 状态的索引”。

为恢复已被修改的索引，需关闭（close）索引编辑，才能恢复（restore）索引。以恢复 `s0013` 仓库索引为例：

```bash
POST /mytest,mytest02,.kibana-7_8/_close
 
POST /_snapshot/elk-opensearch/s003/_restore
 
GET _cat/indices
```
