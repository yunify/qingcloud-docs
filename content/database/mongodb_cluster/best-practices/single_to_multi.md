---
title: "单实例升级为多副本"
description: 本小节主要介绍如何进行 MongoDB 单实例数据备份与恢复。 
keyword: MongoDB 单实例数据；单实例备份；单实例数据恢复
weight: 20
collapsible: false
draft: false
---


由于历史原因，生产环境存在 MongoDB 单实例节点。随着业务的增长，业务数据同步和数据的高可用等性能，成为业务环境的一个重要考量指标。为避免单实例节点因故障，对业务的致命影响，单节点实例势必升级为多副本集集群。

本小节从单实例节点备份恢复出发，提供单实例节点升级到副本集的操作指导。

## 前提条件

- 已创建 MongoDB Cluster，并获取访问信息。
- 已在服务器安装 mongodump 工具。

## 备份单实例数据

MongoDB 单实例若需备份数据到 MongoDB Cluster，需先对单实例开启 oplog，并配置最终配置成副本集形式，再通过 mongodump 工具导入数据到 MongoDB Cluster。

以下示例，模拟在单实例节点写入 100 条数据，备份数据到副本集节点。

1. 在 MongoDB 单实例节点上，开启 oplog。

   ```shell
   $ sudo ./mongod --dbpath=/mongodb/data/ --logpath=/mongodb/log/mongo.log --bind_ip=0.0.0.0 --port=27018 --replSet testSet --oplogSize 100  &
   ```

2. 在 MongoDB 单实例节点上，初始化副本集。

   ```shell
   $ rs.initiate( { "_id" : "testSet", "members" : [ { "_id": 0 ,"host": "172.22.112.2:27018"  } ]  }  )
   ```

3. 在 MongoDB 单实例节点上写入数据。

   模拟写入 100 条数据，每分钟写入一条数据。

   ```shell
   $ rs.initiate( { "_id" : "testSet", "members" : [ { "_id": 0 ,"host": "172.22.112.2:27018"  } ]  }  )
   ```

4. 在 MongoDB Cluster 节点上，执行 dump 数据导入备份。

   ```shell
   $ sudo ./mongodump -h <单实例 IP>:27018 -o /mongodb/backup/full
   ```

## 恢复单实例数据

MongoDB 单实例数据备份到 MongoDB Cluster后，可在本地恢复数据。

以下示例，模拟 100 条数据写入完成后，用户切换 MongoDB 的场景到本地。

1. 在 MongoDB Cluster 节点上，导出单实例节点的 oplog 到本地。

   ```shell
   $ sudo ./mongodump -h <单实例 IP>:27018 -d local -c oplog.rs -o /mongodb/backup/
   ```

   > **注意**
   >
   > 导出的 oplog 在本地有 `oplog.rs.bson` 和 `oplog.rs.metadata.json`。
   >
   > -需删除 `oplog.rs.metadata.json` 文件。
   >
   > -修改 `oplog.rs.bson` 名为 `oplog.bson`。

2. 在 MongoDB Cluster 节点上，恢复历史数据到本地。

   ```shell
   $ sudo ./mongorestore -h localhost:27018 –dir
   ```

3. （可选）在 MongoDB Cluster 上，恢复增量数据到本地。

   若单实例节点存在增量数据，需要通过单实例的 oplog 来恢复数据到本地。

   ```shell
   $ sudo ./mongorestore -h localhost:27018 --dir
   ```

4. （可选）在 MongoDB Cluster 节点上，恢复指定时间的数据到本地。

   ```shell
   $ sudo ./mongorestore -h localhost:27018 --oplogReplay --oplogLimit "1634895600" /home/ubuntu/local
   ```
