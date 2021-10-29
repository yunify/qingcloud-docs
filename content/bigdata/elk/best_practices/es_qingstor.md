---
title: "Elasticsearch 与 QingStor 对象存储集成"
description: 本小节主要介绍 Elasticsearch  与 QingStor 对象存储集成。
keywords: Elasticsearch 对象存储,QingStor
weight: 25
collapsible: false
draft: false
---

Elasticsearch 可以通过快照（snapshot）将指定 index 甚至整个 cluster 的数据存储到某远端仓库（repository）, 并能从该远端仓库存储的快照中恢复数据。本应用的 Elasticsearch 可以通过 S3 Repository Plugin 与 QingStor 对象存储集成以便生成快照将数据存储到 QingStor 中，并可以在必要时从中恢复。

## 操作步骤

1. 创建一个 repository：

   ```bash
   PUT _snapshot/repo-qingstor
   {
     "type": "s3",
     "settings": {
       "endpoint": "s3.pek3a.qingstor.com",
       "access_key": "<YourAccessKey>",
       "secret_key": "<YourSecretKey>",
       "bucket": "my_qingstor_bucket"
     }
   }
   ```

| 参数       | 说明                                                         |
| ---------- | ------------------------------------------------------------ |
| repository | 名称，如示例中的 repo-qingstor                               |
| endpoint   | s3.[region].qingstor.com （请根据实际情况就近选择，目前支持：pek3a, pek3b, sh1a，gd2，请参阅 [区域及访问域名](https://docs.qingcloud.com/qingstor/#区域及访问域名) 获取最新列表） |
| access_key | 青云账号关联的access_key                                     |
| secret_key | 青云账号关联的secret_key                                     |
| bucket     | QingStor上bucket名称my_qingstor_bucket(如果不存在将创建出来) |

> **说明**
>
> 详细参数说明请参考 [官方文档](https://www.elastic.co/guide/en/elasticsearch/plugins/current/repository-s3-client.html)。

2. 通过如下命令查看、删除已有的 repository：

   ```bash
   curl $ES_IP:9200/_snapshot/repo-qingstor    # 获取指定repository信息
   
   curl "$ES_IP:9200/_snapshot/repo*,*backup*" # 获取所有满足特定条件的repository信息
   
   curl $ES_IP:9200/_snapshot/_all             # 获取所有repository信息
   
   curl -XDELETE $ES_IP:9200/_snapshot/repo-qingstor # 删除repository
   ```

3. 用如下命令创建快照（该快照将会存放在之前指定的 QingStor 的 bucket  `my_qingstor_bucket` 中）：

   ```bash
   # 创建包含集群所有index的snapshot
   curl -H "Content-Type: application/json" -XPUT "$ES_IP:9200/_snapshot/repo-qingstor/backup-2019.05.13?wait_for_completion=true"
   
   # 创建包含集群指定index(此处为index_1,index_2)的snapshot
   curl -H "Content-Type: application/json" -XPUT "$ES_IP:9200/_snapshot/repo-qingstor/backup-2019.05.13?wait_for_completion=true" -d'
   {
     "indices": "index_1,index_2",
     "ignore_unavailable": true,
     "include_global_state": false
   }
   '
   ```

   > **说明**
   >
   > 参数 wait_for_completion 为 true 时表示该命令将会在快照创建完成返回，false 表示该命令将会在快照初始化完成就返回。

4. 通过如下命令查看、删除快照：

   ```bash
   curl "$ES_IP:9200/_snapshot/repo-qingstor/backup-2019.05.13" # 查看指定repository中某snapshot信息
   
   curl "$ES_IP:9200/_snapshot/repo-qingstor/_all"              # 查看指定repository中所有snapshot信息
   
   curl -XDELETE "$ES_IP:9200/_snapshot/repo-qingstor/backup-2019.05.13" # 删除snapshot
   ```

5. 通过如下命令恢复存储在 QingStor 的快照到 Elasticsearch 集群：

   ```bash
   # 恢复包含集群所有index的snapshot
   curl -H "Content-Type: application/json" -XPOST "$ES_IP:9200/_snapshot/repo-qingstor/backup-2019.05.13/_restore"
   
   # 恢复包含集群指定index(此处为index_1,index_2)的snapshot
   curl -H "Content-Type: application/json" -XPOST "$ES_IP:9200/_snapshot/repo-qingstor/backup-2019.05.13/_restore" -d'
   {
     "indices": "index_1,index_2",
     "ignore_unavailable": true,
     "include_global_state": false,
     "rename_pattern": "index_(.+)",
     "rename_replacement": "restored_index_$1"
   }
   '
   ```

   > **说明**
   >
   > 要恢复的 index 必须是集群中处于关闭状态的 index, 处于打开状态的 index 将会提示无法恢复。

6. 快照由于并没有和具体的集群信息绑定，所以也可以恢复到另一个不同的集群，用户可以用这种方法在不同集群之间通过 QingStor 导入导出数据。

   > **说明**
   >
   > 新集群的版本必须和老集群一致或者更新。

   - 先在目标集群中生成和源集群同样的 repository（必须使用同样的参数，具体方法请参考步骤1 ）。
   - 在新的集群创建好与老集群相同的 repository 后，就可以通过步骤5中提到的命令（需要把 URL 地址改成新集群里节点的地址）将老集群的数据恢复到新集群上去。

   > **说明**
   >
   > 更详细的有关集群快照的生成和恢复的信息请参考 [Elasticsearch官方文档](https://www.elastic.co/guide/en/elasticsearch/reference/6.7/modules-snapshots.html)。
   >
   > 如果 ES 集群和 QingStor 位于同一区域进行数据迁移耗公网流量，如果不在同一区域则需要消耗公网流量，比如位于 北京3区-A 的 ES 集群可以选择同一区域的 QingStor （https://s3.pek3a.qingstor.com）避免产生公网流量。
