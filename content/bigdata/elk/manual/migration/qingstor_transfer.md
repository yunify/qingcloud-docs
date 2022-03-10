---
title: "QingStor 迁移"
description: 本小节主要介绍如何通过 QingStor 进行数据迁移。 
keyword: ELK,离线数据迁移,
weight: 30
collapsible: false
draft: false
---

通过 QingStor 对象存储完成数据迁移，可将 Elasticsearch 数据迁移到新 ELK 应用继续使用。

> **注意**
> 
> 数据迁移过程，请暂停数据写操作，避免数据不一致，建议在业务低峰期执行。

本小节主要介绍如何导出远端数据库数据和如何将数据导入 MySQL Plus 集群。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 ELK 集群，且集群状态为`活跃`。
- 已创建对象存储，并已获取对象存储 **bucket**、**endpoint** 等信息。
- 已创建 API 密钥，并已获取 **access_key** 和 **secret_key**。

## 操作步骤

1. 通过如下命令为源 Elasticsearch 集群创建 repository。

   ```bash
   curl -XPUT 'http://<源 Elasticsearch 的 IP 地址>:9200/_snapshot/repo-qingstor/' -d'
   {
     "type": "s3",
     "settings": {
       "endpoint": "s3.pek3a.qingstor.com",
       "access_key": "<YourAccessKey>",
       "secret_key": "<YourSecretKey>",
       "bucket": "my_qingstor_bucket"
     }
   }
   '
   ```

   上述命令必须指定的几个关键参数包括：

| 参数         | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| 集群节点地址 | <原青云大数据平台的 Elasticsearch 集群的某一节点的 IP 地址> 需替换为具体的 IP 地址 |
| repository   | repo-qingstor                                                |
| endpoint     | s3.pek3a.qingstor.com (请就近选择 pek3a, pek3b, sh1a，gd2 中的一个) |
| access_key   | 青云账号关联的 access_key                                    |
| secret_key   | 青云账号关联的 secret_key                                    |
| bucket       | QingStor上 bucket 名称 my_qingstor_bucket (如果不存在将创建出来) |

2. 创建了 repository 后，用如下命令即可创建名为 backup-2019.05.13 的快照（该快照将会存放在之前指定的 QingStor 的 bucket my_qingstor_bucket 中）：

   ```bash
   创建包含集群所有 index 的 snapshot
   curl -XPUT 'http://<原青云大数据平台的 Elasticsearch 集群的某一节点的IP地址>:9200/_snapshot/repo-qingstor/migration-2019.05.13?wait_for_completion=true'
   ```

3. 在 ELK 集群上创建和第一步中相同配置的 repository。命令如下：

   ```bash
   curl -H 'Content-Type: application/json' -XPUT 'http://<ELK集群的某一节点的IP地址>:9200/_snapshot/repo-qingstor/' -d'
   {
     "type": "s3",
     "settings": {
       "endpoint": "s3.pek3a.qingstor.com",
       "access_key": "<YourAccessKey>",
       "secret_key": "<YourSecretKey>",
       "bucket": "my_qingstor_bucket"
     }
   }
   '
   ```

   > **说明**
   >
   > 这里只有 IP 地址需变更为 ELK 集群的某一节点的 IP 地址，其他配置应与第四步中的配置完全相同。

4. 通过如下命令恢复存储在 QingStor 的快照到 ELK 集群，完成数据迁移。

   ```bash
   curl -H 'Content-Type: application/json' -XPOST 'http://<ELK集群的某一节点的IP地址>:9200/_snapshot/repo-qingstor/migration-2019.05.13/_restore'
   ```

   > **说明**
   >
   > 目前 QingStor 对象存储只开放了 `北京3区-A`、`北京3区-B`、`上海1区-A` 和 `广东2区`，这些区内的数据迁移是不耗公网网络流量的，其他区借助对象存储迁移是需要耗费公网流量的。
