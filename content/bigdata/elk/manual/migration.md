---
title: "数据迁移"
description: 本小节主要介绍如何迁移 QingCloud ELK 数据。 
keywords: ELK 数据迁移
weight: 05
collapsible: false
draft: false
---

本小节主要介绍如何迁移 ELK 数据到新的 ELK 集群。目前支持两种迁移方式：

- 方法一：通过 QingStor 对象存储迁移；
- 方法二：通过 elasticdump 工具完成迁移。

## QingStor 对象存储迁移

通过 QingStor 对象存储完成数据迁移（比如原青云大数据平台的 Elasticsearch 用户可通过此方法把数据迁移到新版 ELK 应用后继续使用），具体操作步骤如下：

1. 参考 [创建 ELK 集群](../../../../bigdata/elk/quickstart/create_cluster/) 完成 ELK 集群创建。

2. 根据 [青云对象存储文档](https://docs.qingcloud.com/qingstor/index.html) 创建对象存储的 Bucket。

3. 在青云控制台申请 [API 密钥](https://console.qingcloud.com/access_keys/)。

4. 通过如下命令为原青云大数据平台的 Elasticsearch 集群创建 repository。

   ```bash
   curl -XPUT 'http://<原青云大数据平台的 Elasticsearch 集群的某一节点的IP地址>:9200/_snapshot/repo-qingstor/' -d'
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

5. 创建了 repository 后，用如下命令即可创建名为 backup-2019.05.13 的快照（该快照将会存放在之前指定的 QingStor 的 bucket my_qingstor_bucket 中）：

   ```bash
   创建包含集群所有 index 的 snapshot
   curl -XPUT 'http://<原青云大数据平台的 Elasticsearch 集群的某一节点的IP地址>:9200/_snapshot/repo-qingstor/migration-2019.05.13?wait_for_completion=true'
   ```

6. 在 ELK 集群上创建和第四步中相同配置的 repository。命令如下：

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

   > **说明**：
   >
   > 这里只有 IP 地址需变更为 ELK 集群的某一节点的 IP 地址，其他配置应与第四步中的配置完全相同。

7. 通过如下命令恢复存储在 QingStor 的快照到 ELK 集群，完成数据迁移。

   ```bash
   curl -H 'Content-Type: application/json' -XPOST 'http://<ELK集群的某一节点的IP地址>:9200/_snapshot/repo-qingstor/migration-2019.05.13/_restore'
   ```

   > **说明**：
   >
   > 目前 QingStor 对象存储只开放了 `北京3区-A`、`北京3区-B`、`上海1区-A` 和 `广东2区`，这些区内的数据迁移是不耗公网网络流量的，其他区借助对象存储迁移是需要耗费公网流量的。

## elasticdump 工具迁移

1. 在任意可以连通两个 Elasticsearch 集群的主机上安装 elasticdump，命令如下：

   ```bash
   # 没有 nodejs 及 npm 需要手动安装
   npm install elasticdump -g
   ```

2. elasticdump 安装成功后，即可进行数据迁移操作，命令如下：

   ```bash
   elasticdump --input=http://192.168.0.37:9200 --output=http://192.168.0.24:9200
   ```

   > **说明**：
   >
   > 将 192.168.0.37 替换为原青云大数据平台的 Elasticsearch 集群的任意节点的 IP 地址，将 192.168.0.24 替换为 ELK 集群的任意 Elasticsearch 节点的 IP 地址。





