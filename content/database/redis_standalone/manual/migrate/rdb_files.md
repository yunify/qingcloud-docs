---
title: "RDB 文件方式"
description: 本小节主要介绍如何使用 RDB 文件在线迁移数据。 
keyword: 数据迁移,RDB 文件,Redis,Redis Standalone,数据库
weight: 05
draft: false
---


Redis Standalone 支持在线**从 RDB 文件恢复数据**功能，通过读取 RDB 文件在线迁移数据。

本小节主介绍如何使用 RDB 文件在线迁移数据。

## 约束限制

- **从 RDB 文件恢复数据**操作前，请先备份目标集群数据，因为该操作会清空目标集群的所有数据，且不可恢复。
- 为方便迁移，**从 RDB 文件恢复数据**功能仅适用于单节点目标集群，多节点集群不适用。
- 目标集群的内存配置需要跟源集群一致或者更高，否则容易造成数据丢失。
- 当恢复的数据量较大时，恢复的时间可能会较长，请耐心等待。数据恢复期间禁止一切操作，防止干扰数据加载。

## 前提条件

- Redis Standalone 集群状态为**活跃**。
- 已[开启 WebConsole 服务](../../../manual/mgt_files/enable_webconsole)。
- 已获取远端 Redis 数据库信息。

> **注意**
> 
> 安装 Redis Standalone 之间的网络需保持通畅。
> 
> 若 Redis Standalone 之间网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成 Redis Standalone 关键信息暴露等风险。

## 导入源集群 RDB 文件

获取源 Redis 的 RDB 文件，并将文件导入目标 Redis 集群。执行以下命令，将导出的 RDB 文件上传至目标 Redis 集群节点。

- WebConsole 服务配置了用户名与密码。

   ```shell
   curl -T <源 Redis RDB 文件路径> http://<user_name>:<password>@<目标 Redis 地址>:80/upload/dump.rdb
   ```

- WebConsole 服务未配置用户名与密码。

   ```shell
   curl -T <源 Redis RDB 文件路径> http://<目标 Redis 地址>:80/upload/dump.rdb
   ```

其中：

- `目标 Redis 地址`为 Redis Standalone 集群主节点 IP 或集群 VIP。
- `user_name` 为 WebConsole 服务登录用户名。
- `password` 为 WebConsole 服务登录用户密码。

## 从 RDB 文件恢复数据

若需保存目标集群已有数据，请务必先备份数据，再执行恢复数据操作。

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis Standalone**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，展开下拉菜单。
5. 点击**从 RDB 文件恢复数据**，弹出确认窗口。

   <img src="../../../_images/rdb_migrate.png" alt="从 RDB 文件恢复数据" style="zoom:50%;" />

6. 阅读提示信息，并配置**确认操作**为`是`。
7. 点击**提交**，数据开始恢复。集群状态切换为`更新中`。
8. 待状态切换为`活跃`即迁移完成。检查数据，并确认数据迁移完毕。  
   访问目标集群 Redis，执行 info 命令，校验数据是否成功导入。
