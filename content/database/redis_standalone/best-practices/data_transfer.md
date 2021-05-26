---
title: "数据迁移"
description: 本小节主要介绍如何在 Redis Standalone 迁移数据。 
keywords: redis standalone 数据迁移
data: 2021-05-14T00:38:25+09:00
weight: 1
collapsible: false
draft: false
---

## redis-port 迁移方式

针对 Redis 2.6.0 至 5.0.0版本，包括2.6.0版本数据迁移 Redis on QingCloud，可以选择 **redis-port** 迁移方式。
 
1. 下载 [redis_port](https://github.com/CodisLabs/redis-port/releases)工具。
 
 2. 执行以下命令开始迁移。
   `./redis-sync -m [源地址:端口号] -t [目标地址:端口号] `。
   
3. 迁移提示完成100%，即可终止程序。
   
   ![redis_port](../../_images/migrate.png)
   
> redis_port 也支持 RDB 文件导入，更多说明请参见[redis_port 介绍](https://github.com/CodisLabs/redis-port)。

## 从 RDB 文件恢复数据

Redis 5.0.7 - QingCloud 2.2.0版本，新增了**从 RDB 文件恢复数据**功能。。

> 注意：
> - 执行**从 RDB 文件恢复数据**操作前，请先手动备份目标集群数据，因为该操作会完全删除目标集群的所有数据，且不可恢复。
> - 为方便迁移，**从 RDB 文件恢复数据**功能仅适用于单节点目标集群，多节点集群不适用。
> - 目标集群的内存配置需要跟源集群一致或者更大，否则容易造成数据丢失。
> - 当恢复的数据量较大时，恢复的时间可能会较长，请耐心等待。数据恢复期间禁止一切操作，防止干扰数据加载。

1. 在集群详情页面，将**配置参数**的**开启文件查看控制台**设置为 `true`。

   ![webconsole](../../_images/open_webconsole.png)

2. 执行以下命令，将生成的 RDB 文件上传至集群节点。

   ```bash
   curl -T <源 RDB 文件路径> http://<username>:<password>@<目标节点IP>:80/upload/dump.rdb
   ```

3. 点击**从 RDB 文件恢复数据**，等待数据迁行完毕。

   ![restoreData](../../_images/restoreData.png)

4. 检查数据，并确认数据迁移完毕。
   