---
title: "线上集群之间数据同步和迁移"
description: 本小节主要介绍如何线上集群之间数据同步和迁移。 
keyword: MongoDB,文档数据库,数据库
weight: 35
collapsible: false
draft: false

---

本小节为您介绍如何在线上进行集群之间数据同步和迁移。

>迁移过程会给源集群带来额外开销，若在无法保证资源充足的情况下进行数据迁移，可能会导致 OOM。请谨慎操作。

## 前提条件

* 已有源集群和已创建目标集群。

  >* 源集群A ：172.22.112.7(Primary)、172.22.112.8（Secondary）、172.22.112.10（Hidden）
  >* 目标集群B ：172.22.112.5(Primary)、172.22.112.6（Secondary）、172.22.112.11（Hidden）

* 已获取管理控制台登录账号和密码，且已获取集群操作权限。

* 已创建 MongoDB 集群，且集群状态为**活跃**。

* 已安装 MongoShake

  > MongoShake 是基于mongodb oplog的集群复制工具，可以满足迁移和同步的需求，进一步实现灾备和多活功能。

## 操作步骤

1. 往集群A的primary节点不断插入数据，间隔1秒（初始时集群A、B都没有数据）

   <img src="../../_images/migration_online_01.png">

   <img src="../../_images/migration_online_02.png">

2. 集群管理--配置参数--公共参数 ，设置mongoshake通道

   - 同步方式：此处使用的同步方式是【全量+增量】
   - 源地址：生产环境为减少对业务的影响，建议使用hidden节点做数据迁移

   <img src="../../_images/migration_online_03.png">

3. 进入集群B里 验证数据是否迁移成功（包括新插入的增量数据）。

   <img src="../../_images/migration_online_04.png">

   可以看到集群A的数据（包括新插入的增量数据）成功同步到了集群B，经测试，两边的数据延迟不超过2秒。

   待所有增量数据插入完毕后，关闭集群A，关闭 mongoshake 通道，整个数据迁移过程结束。