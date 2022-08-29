---
title: "线上集群之间数据同步和迁移最佳实践"
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

  >* 源集群 A ：172.22.112.7(Primary)、172.22.112.8（Secondary）、172.22.112.10（Hidden）
  >* 目标集群 B ：172.22.112.5(Primary)、172.22.112.6（Secondary）、172.22.112.11（Hidden）

* 已获取管理控制台登录账号和密码，且已获取集群操作权限。

* 已创建 MongoDB 集群，且集群状态为**活跃**。


## 操作步骤

1. 登录管理控制台。

2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB**，进入集群管理页面。

3. 选择源集群 A，点击源集群 A 的 ID，进入集群详情页面。

   记录 primary 节点的 IP 地址。

4. 通过mongo shell连接到集群 A 的 primary 节点。

   详细操作请参见[通过 Mongo Shell 连接](/database/mongodb/manual/mgt_connect/access_mongodb/#通过-mongo-shell-连接)。

5. 在集群 A 的 primary 节点每隔 1 秒插入数据。

   > 初始时集群 A 和集群 B 的数据都为空。

   <img src="../../_images/migration_online_01.png">

   <img src="../../_images/migration_online_02.png">

6. 在集群 A 的详情页面，选择**配置参数**页签，选择**公共参数**，点击**修改属性**。

7. 找到并设置**Mongoshake**相关参数。

   >MongoShake 是基于mongodb oplog的集群复制工具，可以满足迁移和同步的需求，进一步实现灾备和多活功能。

   * 设置 **MongoShake：是否开启**参数为`是`，开启 MongoShake 数据同步功能。
   * 设置 **MongoShake：同步方式**参数为`all`，全量+增量同步数据。
   * 设置**MongoShake：源地址** 为 hidden 节点 IP 地址。以减少生产环境为对业务的影响，此处建议使用 hidden 节点做数据迁移。
   * 设置**MongoShake：目标 MongoDB 地址**为目标集群 B ：172.22.112.5(Primary)、172.22.112.6（Secondary）、172.22.112.11（Hidden）。

   更多相关参数说明，请参见 [MongoShake 参数](/database/mongodb/manual/migration/mongo_shake/#mongoshake-参数)。

   <img src="../../_images/migration_online_03.png">

8. 点击**保存**，确认启用 MongoShake 数据同步服务。

9. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB**，进入集群管理页面。

10. 选择目标集群 B，点击目标集群 B 的 ID，进入集群详情页面。

    记录 primary 节点的 IP 地址。

11. 通过 mongo shell 连接到集群 B 的 primary 节点。

    详细操作请参见[通过 Mongo Shell 连接](/database/mongodb/manual/mgt_connect/access_mongodb/#通过-mongo-shell-连接)。

12. 验证数据是否迁移成功（包括新插入的增量数据）。

    如图所示，可以看到集群 A 的数据（包括新插入的增量数据）已成功同步到了集群 B，且两边的数据延迟不超过 2 秒。

    <img src="../../_images/migration_online_04.png">

    > 待所有增量数据插入完毕后，关闭 mongoshake 通道并关闭集群 A，数据迁移完成。

