---
title: "安装自定义 Filter "
description: 本小节主要介绍如何安装自定义 Filter 。 
keywords: HBase 自定义Filter ,
weight: 55
collapsible: false
draft: false
---


HBase 的基本查询操作只能根据特性的行键进行查询（Get）或者根据行键的范围来查询（Scan）。HBase 除了提供简单的查询外，还可通过自定义过滤器（Filter）提供更加高级的查询操作。

本小节主要介绍如何安装自定义 Filter 。

## 约束限制

- 仅 QingCloud 2.1.0 - HBase 2.0.6 及以上版本支持。

## 前提条件

- 已创建 HBase 集群，且集群状态为**活跃**。
- 已获取 Client 节点账号和密码。
- 已在 HDFS 节点创建 `/hbase/lib/`路径。

## 安装自定义 Filter

安装自定义 Filter 即**通过 Client 节点将自定义 Filter 包上传至 HDFS 节点 `/hbase/lib/`路径。**

1. 开发并打包自定义 Filter jar 包。

2. 上传 Filter 包。

   1. 登录 Client 节点。
   2. 使用 scp 或者 rsync 拷贝 Filter 包至 Client 节点。
   3. 上传 Filter 包至 HDFS 节点 `/hbase/lib/`路径。

   ```shell
   /opt/hadoop/bin/hdfs dfs -put /tmp/FLITER.jar /hbase/lib/
   ```

## 更新自定义 Filter

**若需更新自定义 Filter，请先删除 HDFS 上已有 Filter 包，再上传更新后包。此外，还需重启 RegionServer 服务，生效更新后 Filter。**

1. 更新并打包自定义 Filter jar 包。

2. 更新 Filter 包。

   1. 登录 Client 节点。
   2. 删除 HDFS 节点已上传 Filter 包。
   3. 上传更新后 Filter 包至 HDFS 节 `/hbase/lib/`路径。
  
3. 重启 RegionServer 服务。

   1. 登录 QingCloud 管理控制台。
   2. 选择**产品与服务** > **大数据服务** > **HBase 服务**，进入集群管理页面。
   3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
   4. 在**基本属性**区域，展开操作栏并点击**重启 RegionServer**。

      <img src="../../../_images/region_server.png" alt="RegionServer" style="zoom:50%;" />

   5. 点击**提交**，确认重启主节点服务。

      集群状态切换为**活跃**时，节点重启完毕，即生效更新后 Filter 包。

   <img src="../../../_images/restart_region_server.png" alt="重启 RegionServer" style="zoom:50%;" />
