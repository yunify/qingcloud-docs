---
title: "分配 oplog 空间"
description: 本小节主要介绍如何分配 MongoDB oplog 空间。 
keyword: oplog 空间,MongoDB,文档数据库,数据库
weight: 05
collapsible: false
draft: false
---


oplog 是 MongoDB local 库下的一个固定日志集合，Secondary 节点通过调取 Primary 的 oplog 进行复制同步。oplog 是 MongoDB Replication 的关键。oplog size 一般是固定最大值，只能保存特定数量的操作日志。

- 若 oplog size 过大，会浪费存储空间。
- 若 oplog size 过小，历史 oplog 记录会很快被覆盖，那么宕机的节点很容易导致无法同步数据。
  
因此设置合理的 oplog 大小对 MongoDB 很重要。

MongoDB 开放 `replication.oplogSizeMB` 参数，可在线配置 oplog 最大 size。默认大小为 20480MB。

本小节主要介绍如何调整 oplog 最大 size。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MongoDB 集群，且集群状态为**活跃**。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 点击**配置参数**页签，进入集群配置参数管理页面。
5. 选择 **Replica Node** 参数类型，切换到节点参数页面。
6. 点击**修改属性**，找到 `replication.oplogSizeMB` 参数。

   <img src="../../_images/oplog_size.png" alt="配置 oplog size" style="zoom:50%;" />

7. 参考配置参数取值范围和描述，修改参数值。
8. 确认参数信息无误后，点击**保存**，返回参数列表页面。
