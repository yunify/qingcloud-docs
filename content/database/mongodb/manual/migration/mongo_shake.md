---
title: "MongoShake 方式"
description: 本小节主要介绍如何通过 MongoShake 方式在线同步数据。 
keyword: MongoShake 方式,数据同步,全量同步,增量同步
weight: 20
collapsible: false
draft: false
---

[MongoShake](https://github.com/alibaba/MongoShake) 是一款数据同步的开源工具。基于 mongodb_oplog 的集群复制功能构建，可以满足迁移和同步的需求。

MongoDB 通过集成 MongoShake，可实现副本集 MongoDB 集群之间的数据同步，实现集群灾备和多活功能。

> **注意**
> 
> 受数据量、网络等因素影响，数据同步过程可能耗时较久，建议在业务低峰期进行。

本小节主要介绍如何配置 MongoShake 参数，实现数据同步。

## 约束限制

- 仅支持副本集 MongoDB 集群之间的数据同步。
- 不支持同时将一个集群数据同步到多个集群。
- 不支持同步数据库用户帐号信息。
- 不支持同步 config，local，admin 库。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 MongoDB 集群，且集群状态为**活跃**。

    > **注意**
    > 
    > 数据导入和导出期间，需确保两个 MongoDB 集群之间网络畅通。
    > 
    > 当两个 MongoDB 集群之间网络不通时，可使用[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 在**配置参数**页签，选择**公共参数**，点击**修改属性**。
5. 找到并设置**Mongoshake**相关参数。

   设置 **MongoShake：是否开启**参数为`是`，开启 MongoShake 数据同步功能。

   更多相关参数说明，请参见 [MongoShake 参数](#mongoshake-参数)。

6. 点击**保存**，确认启用 MongoShake 数据同步服务。
   
<img src="../../../_images/mongoshake.png" alt="MongoShake 服务" style="zoom:50%;" />

### MongoShake 参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:240px">说明</span>|<span style="display:inline-block;width:280px">取值示例</span> |
|:----|:----|:----|
|MongoShake 是否开启           | 确认是否开启 MongoShake 服务。      |  是 |
|Mongoshake: 同步方式       | 选择数据同步方式。<br>- 默认为 `全部`，表示**全量+增量**的数据同步。全量同步历史数据，并持续同步新写入数据。<br>- 取值`full`表示**全量**的数据同步。全量同步历史数据，同步完成之后 MongoShake 通道自动关闭。<br>- 取值`incr`，表示**增量**的数据同步。仅同步新写入数据，不同步历史数据。                 |  全部  |
|Mongoshake: 源 MongoDB 地址  |      表示源 MongoDB 集群节点地址。<br>- 需配置为 `IP:Port`。<br>- 若需配置整个集群的 IP，需用逗号隔开，例如 1.1.1.1:27017,1.1.1.2:27017,1.1.1.3:27017。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>为避免影响业务，尽量配置为集群从节点或只读节点。</li></span>  | 1.1.1.1:27017|
|Mongoshake: 源 MongoDB 用户  |     表示源 MongoDB 用户名。<br>- 需配置为具有管理权限的帐号，例如 **root** 帐号。  | root |
|Mongoshake: 源 MongoDB 用户密码  |  表示源 MongoDB 用户密码。  | - |
|Mongoshake: 目标 MongoDB 地址  |    表示目标 MongoDB 集群节点地址。<br>- 需配置为 `IP:Port`。<br>- 若需配置整个集群的 IP，需用逗号隔开，例如 2.2.2.1:27017,2.2.2.2:27017,2.2.2.3:27017。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>为避免影响业务，尽量配置为集群从节点或只读节点。</li></span>  | 2.2.2.1:27017|
|Mongoshake: 目标 MongoDB 用户  |      表示目标 MongoDB 用户名。<br>- 需配置为具有管理权限的帐号，例如 **root** 帐号。  | root |
|Mongoshake: 目标 MongoDB 用户密码  |   表示目标 MongoDB 用户密码。  | - |

## 后续操作

- MongoShake 提供 restful 接口，数据同步期间可监控数据同步情况。详细说明，请参见 [How to monitor the MongoShake?](https://github.com/alibaba/MongoShake/wiki/FAQ?spm=a2c4e.10696291.0.0.327119a4tfNrdT#q-how-to-monitor-the-mongoshake)。
- 数据同步完成后，执行 [comparison.py](https://github.com/alibaba/MongoShake/blob/develop/scripts/comparison.py) 对比确定数据是否同步完成。
- 数据同步完成后，您可以选择关闭 MongoShake 同步通道。
