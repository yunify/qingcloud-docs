---
title: "变更节点配置"
description: 本小节介绍如何变更 Redis 节点的资源配置。
weight: 1
collapsible: false
draft: false
keywords: QingCloud，Redis Cluster，数据库
---

Redis Cluster 支持变更集群节点的配置，如变更云服务器类型、I/O 线程、内存规格等，以满足不同的性能和容量需求。

## 背景信息

不同 Redis Cluster 版本在更改节点配置的支持方式上有所不同。

- Redis  4.0.* 版本：支持直接更改节点的服务器类型、内存及硬盘大小。
- Reids  5.0.* 版本：支持直接更改节点的服务器类型、CPU 核数、内存及硬盘大小。
- Redis  6.* 版本：支持更改资源配置类型及内存，不支持修改硬盘大小，硬盘大小始终为内存的 3 倍。

## 注意事项

- 变更集群配置可能导致服务中断，请在业务低峰时进行。

- Redis 6.* 更改配置时，只能升级配置，不可降低配置，具体表现为：

  - 不支持从多线程变更为单线程；
  - 不支持从生产环境变更为测试环境；
  - 不支持降低内存。

  不同配置的规格性能，请参考[资源配置类型](../../../intro/instance_type/)。

## 操作步骤

### 扩容集群

#### Redis 6.\* 版本

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis**，进入 Redis Cluster 管理页面。

3. 在集群列表，右键单击目标集群，选择**扩容集群**。

   以 Redis 6.2.5 版本为例，弹出如下界面：

   <img src="../../../_images/mdy_conf_6.0.png" alt="更改配置" style="zoom:50%;" />

4. 选择目标配置及内存。

   > **说明**
   >
   > 由于不支持降低配置，降低配置的选项将置为灰色，无法被选择。

####  Reids  5.0.\* 版本

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis**，进入 Redis Cluster 管理页面。

3. 在集群列表，右键单击目标集群，选择**扩容集群**。

   以 Redis 5.0.8 版本为例，弹出如下界面：

   <img src="../../../_images/expan_cluster.png" alt="扩容集群" style="zoom:50%;" />

4. 修改内存及硬盘大小，点击**提交**。等待变更完成。

   > **说明**
   >
   > 硬盘大小只能增加，不支持减少。

### 更改云服务器类型

> **说明**
>
> 该功能仅针对 Redis  4.0.* 及 Reids  5.0.* 版本。

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis**，进入 Redis Cluster 管理页面。

3. 在集群列表，右键单击目标集群，选择**更改云服务器类型**。

   <img src="../../../_images/mdy_vm_type.png" alt="变更云服务器类型" style="zoom:50%;" />

4. 选择目标类型，点击**提交**。等待变更完成。

