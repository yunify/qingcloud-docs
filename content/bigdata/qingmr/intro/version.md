---
title: "产品版本"
description: 本小节主要介绍 QingMR 主要系列和版本。 
keywords: QingMR 版本介绍,系列介绍 
weight: 20
collapsible: false
draft: false
---

当前支持的组件及版本如下：

| 版本 | Hadoop | Spark | Hive | Flink | Ranger |
| :------ | :------ | :------ | :------ | :------ | :------ |
| QingMR - Core 2.6.0 | 3.1.3 | 2.4.8 | 3.1.2 | 1.13.1 | 2.0.0 |
| QingMR - Core 2.5.2 | 2.9.2 | 2.2.3 | 2.3.5 | 1.9.0 | - |
| QingMR - Core 2.0.0 | 2.9.2 | 2.2.3 | 2.3.5 | - | - |
| QingMR - Core 1.3.0 | 2.7.3 | 2.2.0 | 2.3.4 | - | - |
| QingMR - Core 1.2.1 | 2.7.3 | 2.2.0 | 1.2.2 | - | - |

> **说明**
>
> Kyligence Enterprise 作为 Kylin 的企业版也是构建在 QingMR 之上。

## v2.6.0

- 升级 Hadoop、Spark、Hive、Flink 至新版本，升级说明请参见 [版本升级](../../manual/upgrade)。

- 新增 Ranger 组件，支持 Ranger hive 插件，通过 Ranger 对 Hive 的权限控制，详细说明请参见 [Ranger 组件](../../developer_manual/ranger/ranger_info)。
<!-- 
- 新增 Zeppelin 组件，支持修改 Notebook 目录。-->

## v2.5.2

- 新增 s3.endpoint 配置参数用于指定兼容 S3 的对象存储的 endpoint，主要用于私有云不能访问公有云对象存储的场景。

## v2.5.1

- 新增 YARN 从节点健康检查，YARN 从节点状态变为 unhealthy 或 lost 时会告警。
- 增加 YARN 应用日志保存时间配置参数 yarn.nodemanager.log.retain-seconds。
- 超过 7 天无变化的 YARN 应用日志不再会被删除。

## v2.5.0

- 新增 对 Flink 1.9.0 的支持。
- HDFS 主节点、主节点和从节点主机类型升级为企业型，新增多种 CPU 和内存规格，单节点最高支持32核 CPU 和 128G 内存。
- HDFS 主节点、主节点数据盘升级为 SSD 企业级，单节点最高容量可达 2 TB。
- 从节点新增 SSD 企业级存储的支持。
- Client 节点主机类型调整为基础型，数据盘调整为基础型。

## v2.0.0

- Hadoop 版本升级到 2.9.2 , Spark 版本升级到 2.2.3 , Hive 版本升级到 2.3.5 。
- 新增 Hadoop, Spark 和 Hive 对 lzo 压缩的支持。
- 新增对基于 Spark 的分布式深度学习框架 BigDL 的支持。

## v1.3.0

- 新增 NeonSAN 超高性能大容量存储的支持，单节点最高容量可达 50 TB。
- Hive 版本升级到 2.3.4。
- 新增 Spark 作为 Hive 的默认执行引擎即 Hive on Spark，同时支持用户切换到传统的 MapReduce 引擎。
- 新增多个 Hive 调优配置参数。
- 新增 Hive 通过 beeline 执行 HQL 使用指南。
- 新增 HiveServer2 WEB UI 使用指南。

## v1.2.1

- 所有节点升级 confd 到 v0.13.12。
- 修改 QingMR 在基础网络环境下 hive 启动错误的问题。
- 修改各个角色中 hosts 文件和 authorized_keys文件用户的修改被覆盖的问题。
- client 节点增加 hdfs-site.xml 模板文件。
- client 节点 spark-env.sh 修改被覆盖的问题。
- 修改启动 Hive 的时候找不到 spark-assembly 相关的 Jar 包的问题。
- client 节点相关服务命令超时时间从 3600s 改为 900s 。

## v1.2.0

- 名称由 SparkMR 变更为 QingMR。
- 支持 Kyligence Analytics Platform ( Kylin 的企业级产品 )。

## v1.1.0

- `YARN 主节点` 改称 `主节点`。
- 在 `主节点` 上新增 Hive 服务。
- 在 `主节点` 上新增 Mysql 数据库服务。
- Spark Standalone 模式由 `默认开启` 改为 `默认关闭`。
- 新增 `服务详情` 页面。

## v1.0.2

- 数据盘从能挂 3 块改为 1 块。
- 更改数据盘挂载目录为 /data。

## v1.0.1

- 缩短集群启动时间 15 秒。

## v1.0.0

- 正式发布版本。
