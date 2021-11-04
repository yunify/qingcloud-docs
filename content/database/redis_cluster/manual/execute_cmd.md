---
title: "执行命令"
description: 本小节介绍 Redis 的默认禁用命令及如何在控制台执行。 
keywords: redis cluster，命令
weight: 27
draft: false
---

为了您的数据安全，Redis Cluster 默认禁用了一些命令，但在控制台界面开启了常用几个命令的执行操作。

## 背景信息

### 默认禁用命令

目前禁用的命令列表如下：

- BGREWRITEAOF
- BGSAVE
- CONFIG
- SAVE
- DEBUG
- KEYS
- REPLICAOF
- SHUTDOWN
- SLAVEOF

> **注意**：
>
> 您可以通过**配置参数**页将参数**打开config 和save命令**的值设置为 **1** 来启用以上命令，但我们强烈不推荐您这么做，错误地使用 **CONFIG** 命令可能会导致服务的不可用。

### 控制台支持执行的命令

目前，在 Redis Cluster 的控制台管理页面，可以执行以下命令：

- FLUSHALL
- FLUSHDB
- BESAVE

## 前提条件

您需要确保待执行的命令 FLUSHDB、FLUSHALL 及 DESAVE 在**参数配置**中没有被禁用，才能在控制台执行。

> **说明**
>
> FLUSHDB 和 FLUSHALL 对应的配置参数为**禁用 FLUSH 命令**，该参数仅支持在创建集群时配置，创建后不可修改；DESAVE 对应的配置参数为 **打开config 和save命令**。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis**，进入 Redis Cluster 管理页面。

3. 右键点击目标集群，选择**自定义服务** > **执行命令**，打开**运行[执行命令]服务**窗口。

   或点击集群 ID，在**基本属性**区域，点击右上角<img src="../../_images/menu_icon.png" alt="icon" style="zoom:60%;" />图标，选择**执行命令**。

   <img src="../../_images/run_cmd.png" alt="执行命令" style="zoom:50%;" />

4. 选择命令及参数，设置执行超时时间，点击**提交**。

| <span style="display:inline-block;width:80px">配置项</span> | 说明                                                         |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| 角色                                                        | 默认主节点（或分片）。                                       |
| 命令                                                        | <li> FLUSHALL: 清空整个 Redis 服务器的数据（删除所有数据库的所有 key ）。</li>  <li>FLUSHDB: 清空当前数据库中的所有 key。</li><li>BESAVE：保存当前数据库的数据到磁盘（在主节点生成最新的 RDB 文件）。执行成功后，可参照[文件下载](../downfiles/)的说明下载主节点的 RDB 文件</li> |
| 参数                                                        | <li>ASYNC：FLUSHDB 和 FLUSHALL 命令的参数，表示数据库清空操作将放在后台线程里面以异步方式进行，避免引发服务器阻塞。</li>  <li>配置为空：表示不加任何参数。</li> |
| 超时时间                                                    | 命令执行的超时时间。</br>仅对 FLUSHALL 和 FLUSHDB 有效，在 key 较多的情况下，推荐适当延长该参数。最少为 5 秒。 |



