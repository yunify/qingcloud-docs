---
title: "冷存储（QingStor 方式）"
description: 本小节主要介绍 OpenSearch 索引冷存储。
keyword: 搜索分析,索引冷存储,存到 QingStor,对接 QingStor,存到对象存储
weight: 10
collapsible: false
draft: false
---

OpenSearch 支持创建快照（snapshot）将指定 index 甚至整个集群的数据存储到某远端仓库（repository），并能从远端仓库存储的快照中恢复数据。

[repository-s3](https://opensearch.org/docs/latest/opensearch/snapshot-restore/#amazon-s3) 是一款将对象存储桶作为 SnapShot 存储仓库的索引迁移插件。

本小姐主要介绍如何管理 OpenSearch 索引冷存储，包括创建冷存储、从冷存储恢复数据、以及查看和删除冷存储仓库和快照。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 OpenSearch 集群，且集群状态为`活跃`。
- 已在 OpenSearch 节点[安装 `repository-s3` 插件](../../plugins/install_plugin)。
- 已创建可用 QingStor 桶和 API 密钥，并分别获取到 `endpoint`、`bucket`、`access_key`、`secret_key`信息。

   > **注意**
   >
   > 请确保 QingStor 与 OpenSearch 之间网络畅通。可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。

## 创建冷存储

### 步骤 1：创建 repository

登录 Dashboard 管理控制台，在 **Dev Tools** 的 Console 中执行以下命令，创建 repository。

```bash
PUT _snapshot/<repository_name>
{
   "type": "s3",
   "settings": {
      "endpoint": "<YourEndpoint>",
      "access_key": "<YourAccessKey>",
      "secret_key": "<YourSecretKey>",
      "bucket": "<bucket_folder>"
   }
}
```

| 参数       | 说明                       | 示例        |
| ---------- | -------------------------|--------------|
| repository_name | 自定义 repository 名称。   | repo-qingstor              |
| endpoint   | 桶访问域名或者 URL。  |       s3.pek3a.qingstor.com              |
| access_key | API 访问密钥 ID。                                   |    -           |
| secret_key |  API 访问密钥密钥串。                                     |    -          |
| bucket_folder     | 桶文件夹名称。可自定义桶文件夹名称创建新桶，或配置为已有桶文件夹名称。 |   my_qingstor_bucket        |

### 步骤 2：创建快照

执行如下命令创建快照，该快照将会存放在指定的对象存储的 bucket 中。

- 创建包含集群所有 index 的 snapshot。

   ```bash
   curl -H "Content-Type: application/json" -XPUT "$OS_IP:9200/_snapshot/repo-qingstor/backup-2021.12.13?wait_for_completion=true"
   ```

- 创建包含集群指定 index (此处为 index_1，index_2)的 snapshot。

   ```bash
   curl -H "Content-Type: application/json" -XPUT "$OS_IP:9200/_snapshot/repo-qingstor/backup-2021.12.13?wait_for_completion=true" -d'
   {
      "indices": "index_1,index_2",
      "ignore_unavailable": true,
      "include_global_state": false
   }
   '
   ```

> **说明**
>
> 参数 **wait_for_completion** 取值为 `true` 时表示该命令将会在快照创建完成返回；取值为 `false` 表示该命令将会在快照初始化完成就返回。

## 从冷存储恢复索引

OpenSearch 支持将冷存储快照恢复到另一个的集群，可实现 OpenSearch 集群之间索引导入与导出。

> **说明**
>
> -两个集群的版本必须一致，且集群与 QingStor 之间网路畅通。
> 
> -在目标集群创建相同 repository。

> **注意**
>
> 要恢复的 index 必须是集群中处于关闭状态的 index, 处于打开状态的 index 将会提示无法恢复。

- 恢复包含集群所有 index 的 snapshot。

   ```bash
   curl -H "Content-Type: application/json" -XPOST "$OS_IP:9200/_snapshot/repo-qingstor/backup-2021.12.13/_restore"
   ```

- 恢复包含集群指定 index(此处为 index_1，index_2)的 snapshot。

   ```bash
   curl -H "Content-Type: application/json" -XPOST "$OS_IP:9200/_snapshot/repo-qingstor/backup-2021.12.13/_restore" -d'
   {
      "indices": "index_1,index_2",
      "ignore_unavailable": true,
      "include_global_state": false,
      "rename_pattern": "index_(.+)",
      "rename_replacement": "restored_index_$1"
   }
   '
   ```

## 管理冷存储

### 管理 repository

- 查看指定 repository 信息。

   ```bash
   curl "$OS_IP:9200/_snapshot/repo-qingstor"
   ```

- 查看所有满足特定条件的 repository 信息。

   ```bash
   curl "$OS_IP:9200/_snapshot/repo*,*backup*" 
   ```

- 查看所有 repository 信息。

   ```bash
   curl "$OS_IP:9200/_snapshot/_all"
   ```

- 删除 repository。

   ```bash
   curl -XDELETE "$OS_IP:9200/_snapshot/repo-qingstor"
   ```

### 管理快照

- 查看指定 repository 中某 snapshot 信息。

   ```bash
   curl "$OS_IP:9200/_snapshot/repo-qingstor/backup-2019.05.13" 
   ```

- 查看指定 repository 中所有 snapshot 信息。

   ```bash
   curl "$OS_IP:9200/_snapshot/repo-qingstor/_all" 
   ```

- 删除 snapshot。

   ```bash
   curl -XDELETE "$OS_IP:9200/_snapshot/repo-qingstor/backup-2021.12.13" 
   ```
