---
title: "数据迁移"
description: 本小节主要介绍如何迁移 QingCloud HBase 数据。 
keywords: hbase 数据迁移
weight: 05
collapsible: false
draft: false
---



本小节主要介绍如何迁移 HBase 数据到新的 HBase 集群。

## 步骤一：建立 GRE 隧道

两个 HBase 集群所在路由器间建立 GRE 隧道, 可参考**网络** > **VPC 服务** > **GRE 隧道**。

当两个 HBase 在同一 VPC 下时, 无需建立隧道。

## 步骤二：建立 snapshot

对要迁移的 table 建立 snapshot，同时记录当前时间为 $start_time (可以提前一些)。 

格式为 unix 时间戳毫秒单位， 类似: 1524618000000, 原集群上执行。

```
echo "snapshot '${table}', '${table}_snapshot'" | ${HBASE_HOME}/bin/hbase shell
```

## 步骤三：将 snapshot 迁移到目标 HBase 集群

${src_hdfs_path} 和 ${dst_hdfs_path} 类似: 192.168.0.4:9000。

原集群和目标集群上执行均可，建议目标集群上执行。

```
${HBASE_HOME}/bin/hbase org.apache.hadoop.hbase.snapshot.ExportSnapshot -snapshot ${table}_snapshot -copy-from hdfs://${src_hdfs_path}/hbase -copy-to hdfs://${dst_hdfs_path}/hbase -mappers 20
```

## 步骤四：恢复 table

在目标 HBase 集群用 snapshot 恢复成 table，目标集群上执行。

```
echo "clone_snapshot '${table}_snapshot', '${table}'" | ${HBASE_HOME}/bin/hbase shell
```

## 步骤五：开启双写

应用需要开启双写， 同时记录当前时间 $end_time (可以延后一些)。格式为 unix 时间戳毫秒单位， 类似: 1524618000000。

## 步骤六：导出原集群表数据

导出第一次迁移与开启双写中间时间的表数据到 HDFS 目录，原集群上执行。

```
${HBASE_HOME}/bin/hbase org.apache.hadoop.hbase.mapreduce.Export ${table} hdfs://${src_hdfs_path}/${dir} 1 $start_time $end_time
```

## 步骤七：拷贝到目标 HDFS

拷贝到目标 HDFS，原集群和目标集群上执行均可，建议目标集群上执行。

```
${HADOOP_HOME}/bin/hadoop distcp hdfs://${src_hdfs_path}/${dir} hdfs://${dst_hdfs_path}/${dir}
```

## 步骤八：将表导入到目标 HBase 集群

从目标 HDFS 将表导入到 HBase 集群中，目标集群上执行。

```
${HBASE_HOME}/bin/hbase org.apache.hadoop.hbase.mapreduce.Import ${table} hdfs://${dst_hdfs_path}/${dir}
```
