---
title: "利用 MongoShake 实现 MongoDB 跨集群异步复制"
description: 介绍如何使用 RedisShake 实现 Redis 跨集群异步复制
weight: 60
collapsible: false
draft: false
keyword:  MongoDB，数据库，MongoShake


---

## 场景描述

MongoDB 两个集群之间可通过 MongoShake 进行跨集群的数据异步复制，实现灾备和多活的业务场景，同时也免去双写的业务开销。

MongoShake 异步复制原理为从源库抓取 oplog 数据，然后发送到各个不同的 tunnel 通道，用户可以通过对接 tunnel 通道获取关注的数据，例如对接 Direct 通道直接写入目的 MongoDB，或者对接 RPC 进行同步数据传输等。


![mongoshake](../../_images/mongoshake_00.png)

## 前提条件

* 已创建源集群和目的集群。
* 已获取源集群和目的集群的 IP 地址、对所有的集合可进行读写复制的账户以及登录密码。

## 操作步骤

进入 MongoShake 集群创建界面。

>**说明**
>
>MongoShake 环境入口请提交工单或联系管理员获取。

### 第1步：基本设置

1. 在顶部**区域**下拉框中，选择部署区域。

2. 填写 MongoShake 集群的基本信息，包括：名称、描述、选择版本、计费方式、自动备份时间、部署方式和可用区。

   ![基本设置](../../_images/mongoshake_01.png)

### 第2步：节点设置

选择主机类型、CPU和内存规格。主机类型推荐选择`企业型 e3`，实际请根据集群情况选择规格。

![节点设置](../../_images/mongoshake_02.png)

### 第3步：网络设置

选择 VPC 网络、私有网络以及节点 IP 类型。

>VPC 网络和私有网络需选择能够同时访问到源集群与目标集群的网络。

![网络设置](../../_images/mongoshake_03.png)

### 第4步：服务环境参数设置

1. 填写参数。参数介绍请参见[MongoShake 参数介绍](/database/mongodb/best-practices/psync_migrate/#mongoshake-参数介绍)。

   ![网络设置](../../_images/mongoshake_04.png)

2. 点击**校验表单参数**。

3. 待提示校验成功，点击**提交**。

### 第6步：查看异步复制监控

待 MongoShake 集群创建成功，集群状态为`活跃`，集群节点服务状态为`正常`。在节点页签服务和资源监控页面可查看集群异步复制情况。

![查看](../../_images/mongoshake_05.png)

### MongoShake 参数介绍


| 参数                                         | 取值范围                                                     | 参数说明                                                     |
| -------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| master_quorum                                | <ul><li>true</li><li>false</li></ul>                         | 表示是否启动主备模式。默认为 false。<ul><li>false：表示只能启动 1 个 MongoShake。</li><li>true：表示用户可以启动2个mongoshake，拉取同一个源MongoDB，MongoShake 将会自动选主节点，备节点在监测到主节点故障后，会接管过同步服务。<br>如果主节点在全量同步阶段故障，备节点将接管服务避免造成断点续传，而是会从头开始同步，且如果配置项不当，可能还会有报错。主备模式主要用于在**增量环节**的 HA 容错切换。</li></ul> |
| log.level                                    | <ul><li>debug</li><li>info</li><li>warning</li><li>错误</li></ul> | 表示日志的级别。默认为 <code>info</code>。                   |
| sync_mode                                    | <ul><li>all</li><li>full</li><li>incr</li></ul>              | 表示同步模式，默认为全量+增量 。<ul><li>all：表示全量+增量同步，全量同步完毕以后进入增量同步。</li><li>full：表示仅进行全量同步，全量同步后进程将会退出。<li>incr：表示仅进行增量同步（默认），从给定的 checkpoint 开始拉取增量数据。</li></ul> |
| Sync: source address of MongoDB              | -                                                            | 填写源集群任一从节点 IP 地址，只能输入 1 个 IP 地址，例如：127.0.0.1:27017 |
| Sync: source user of MongoDB                 | -                                                            | 填写源集群账户名，该账户需拥有对源集群所有的集合进行读、写、复制等权限。 |
| Sync: source user's password of MongoDB      | -                                                            | 填写源集群上述账户名的所属密码。<br>必须包含大小写字母和数字的组合, 可使用特殊字符(包括 @#%&*()_+-=), 长度在 8-32 之间。 |
| Sync: destination address of MongoDB         | -                                                            | 填写目标集群主节点 IP 地址，只能输入 1 个 IP 地址，例如：127.0.0.1:27017 |
| Sync: destination user of MongoDB            | -                                                            | 填写目标集群账户名，该账户需拥有对源集群所有的集合进行读、写、复制等权限。 |
| Sync: destination user's password of MongoDB | -                                                            | 填写目标集群上述账户名的所属密码。<br>必须包含大小写字母和数字的组合, 可使用特殊字符(包括 @#%&*()_+-=), 长度在 8-32 之间。 |
| full_sync_port                               | 1025 - 65535                                                 | 全量阶段对外提供restful接口，用户可以查看内部监控的情况，默认 9101 。 |
| incr_sync_port                               | 1025 - 65535                                                 | 增量阶段对外提供restful接口，用户可以查看内部监控的情况，默认 9100。 |
| system_profile_port                          | 1025 - 65535                                                 | Profile 端口，用户可以查看内部运行堆栈信息，默认 9200。      |
| 隧道服务                                     | <ul><li>direct</li><li>rpc</li><li>tcp</li><li>file</li><li>kafka</li></ul> | 表示通道类型。                                               |
| mongo_connect_mode                           | <ul><li>primary</li><li>secondaryPreferred</li><li>standalone</li></ul> | 表示源端拉取模式。<ul><li>primary：表示从主节点拉取。</li><li>secondaryPreferred（默认）：表示优先从 secondary 拉取，没有的话将会从 primary 拉取。</li><li>standalone：表示从给定的单个节点拉取。</li></ul><br>如果源端是 sharding，版本小于3.6，且是全量同步（sync_mode=full），或者全量+增量同步（sync_mode=incr），建议这里配置 primary 以避免孤儿文档，详情可参考 [MongoShake从mongos拉取仍旧存在duplicate key error](https://github.com/alibaba/MongoShake/issues/392)。 |
| filter.namespace.black                       |                                                              | 表示黑名单过滤。                                             |
| filter.namespace.white                       |                                                              | 表示白名单过滤。                                             |
| filter.pass.special.db                       |                                                              | 指定特殊的 namespace 通过,比如 admin, system.views, mongoshake, config |
| filter.ddl_enable                            | <ul><li>true</li><li>false</li></ul>                         | 表示是否同步 DDL，默认为 false。<br>DML 语句包括普通的 insert，update，delete，DDL语句包括建/删索引，建/删库表，rename 库表，事务等数据库结构的操作。false 只同步 DML，用户可以设置为 true 对DDL 进行同步。 |
| checkpoint.storage.url                       | -                                                            | 表示标识 checkpoint 存储的位置。                             |
| checkpoint.storage.db                        | -                                                            | checkpoint 存储的库名，默认 mongoshake。                     |
| checkpoint.storage.collection                | -                                                            | checkpoint 存储的表名地址，默认 ckpt_default。               |
| checkpoint.start_position                    | -                                                            | 指定开始拉取 oplog 的位点，默认<code>1970-01-01T00:00:01Z。</code><br>仅用于 sync_mode 是 oplog 的情况，第一次将会从这个指定的位点开始拉取。其格式是 **UTC** 的时间戳：2000-01-01T00:00:01Z。<ul><li>若 checkpoint 在给定位置存在（参见 checkpoint.storage.url 和 checkpoint.address），那么将会从checkpoint 位置开始同步，忽略checkpoint.start_position 参数。</li><li>若 checkpoint 不存在，且该值为1970-01-01T00:00:01Z，则会拉取源端所有 oplog。</li><li>若 checkpoint 不存在，且该值不为 1970-01-01T00:00:01Z，则会先检查源端 oplog 最老的时间是否大于给定的时间，如果是则会直接报错退出。</li></ul>所以，如果需要强制该位置开始拉取，在需要保证该位点有效的情况下，还需要删除原来的 checkpoint。（用户可以通过`rs.printReplicationInfo`查看最老 oplog 的信息） |
| transform.namespace                          | -                                                            | 是否开启命名空间转换，比如源库的a.b,转换到目的库变成c.d，默认不开启。<br>开启将会消耗比较大的资源，从而导致同步速率的大幅度的降低。谨慎建议开启。 |
| reader.collection_parallel                   | -                                                            | 表示一次最大并发拉取的表的数目.默认 6 (范围: - 10)<br>集群创建成功后不可修改。 |
| reader.write_document_parallel               | -                                                            | 对一个表内部,启动多少个线程进行并发写入，默认8. (范围: - 10)<br>集群创建成功后不可修改。 |
| collection_exist_drop                        | <ul><li>true</li><li>false</li></ul>                         | 目的端存在同样的表,是否需要先删除再进行同步，默认开启。<ul><li>false：表示不删除直接同步，但可能会存在_id一样的文档从而报错（参考 full_sync.executor.* 相关参数）</li><li>true：表示在目的端先删除对应的表再进行同步。</li></ul>集群创建成功后不可修改。 |
| create_index                                 | <ul><li>-</li><li>foreground</li><li>background</li></ul>    | 全量期间数据同步完毕后,是否需要创建索引，默认 background。<ul><li>foreground：表示前台创建索引。</li><li>-：表示不创建。</li><li>background：表示后台创建索引，2.4.1 版本开始支持。</li></ul>集群创建成功后不可修改。 |
| executor.insert_on_dup_update                | <ul><li>true</li><li>false</li></ul>                         | 如果 _id 存在在目的库,是否将 insert 语句修改为 update 语句，默认不开启。<br/>集群创建成功后不可修改。 |
| executor.majority_enable                     | -                                                            | 全量阶段写入端是否启用 majority write，默认 false。<br/>集群创建成功后不可修改。 |
| mongo_fetch_method                           | -                                                            | 从源 MongoDB 拉取增量的方式，默认 oplog。<br/>集群创建成功后不可修改。 |
| worker                                       | -                                                            | worker 线程的个数,默认为 8。<br/>集群创建成功后不可修改。    |
| tunnel.write_thread                          | -                                                            | 控制序列化的线程个数，默认为 1 个 tunnel（worker）对应 1 个。<br/>集群创建成功后不可修改。 |
| target_delay                                 | -                                                            | 控制延迟同步的时间，目的端可以落后于源端指定的秒数。<br/>集群创建成功后不可修改。 |
| incr_sync.executor.upsert                    | <ul><li>true</li><li>false</li></ul>                         | 如果 _id 不存在在目的库，是否将 update 语句修改为 insert 语句，默认 false。<br/>集群创建成功后不可修改。 |
| incr_sync.executor.insert_on_dup_update      | <ul><li>true</li><li>false</li></ul>                         | 如果 _id 存在在目的库,是否将 insert 语句修改为 update 语句，默认 false。<br/>集群创建成功后不可修改。 |
| incr_sync.conflict_write_to                  | -                                                            | 如果写入存在冲突，记录冲突的文档.db 表示将冲突记录到 checkpoint url 对应的 db 里面，sdk 表示写入 sdk（开源没有用），默认 none。<br/>集群创建成功后不可修改。 |
| incr_sync.majority_enable                    | <ul><li>true</li><li>false</li></ul>                         | 增量阶段写入端是否启用 majority write，默认false。<br/>集群创建成功后不可修改。 |