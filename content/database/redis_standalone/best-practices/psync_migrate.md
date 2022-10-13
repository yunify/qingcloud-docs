---
title: "利用 RedisShake 实现 Redis 跨集群异步复制"
description: 介绍如何使用 RedisShake 实现 Redis 跨集群异步复制
weight: 30
collapsible: false
draft: false
keyword:  Redis Cluster，数据库，RedisShake

---

## 场景描述

Redis Cluster 和 Redis Standalone 可通过 RedisShake 进行同集群或跨集群的数据异步复制，实现灾备和多活的业务场景，同时也免去双写的业务开销。RedisShake 的基本原理则是模拟一个从节点加入源 Redis 集群进行全量拉取并回放，然后进行增量的拉取（通过 psync 命令）实现目的集群与源集群的异步复制。

## 约束与限制

* 源集群支持以下版本：
  - Redis Cluster 6.x
  - Redis Cluster 5.x
  - Redis Standalone 6.x
  - Redis Standalone 5.x

* 目的集群支持以下版本：
  - Redis Cluster 6.x
  - Redis Cluster 5.x
  - Redis Standalone 6.x
  - Redis Standalone 5.x

## 前提条件

* 已创建源集群和目的集群。
* 已获取源集群和目的集群的类型和 IP 地址。

## 操作步骤

进入 RedisShake 集群创建界面。

>**说明**
>
>RedisShake 环境入口请提交工单或联系管理员获取。

### 第1步：基本设置

1. 在顶部**区域**下拉框中，选择部署区域。

2. 填写 RedisShake 集群的基本信息，包括：名称、描述、选择版本、计费方式、自动备份时间和可用区。

   ![基本设置](../../_images/redisshake_01.png)

### 第2步：节点设置

选择主机类型、CPU和内存规格。主机类型推荐选择`企业型 e3`，实际请根据集群情况选择规格。

![节点设置](../../_images/redisshake_02.png)

### 第3步：网络设置

选择 VPC 网络、私有网络以及节点 IP 类型。

>VPC 网络和私有网络需选择能够同时访问到源集群与目标集群的网络。

![网络设置](../../_images/redisshake_03.png)

### 第4步：服务环境参数设置

1. 填写必填参数，点击**更多服务环境参数**并根据实际需求填写。

   参数介绍请参见 [RedisShake 参数介绍](/database/redis_standalone/best-practices/psync_migrate/#redisshake-参数介绍)。

   ![填写参数](../../_images/redisshake_04.png)

2. 点击**校验表单参数**。

3. 待提示校验成功，点击**提交**。

### 第6步：查看异步复制监控

待 RedisShake 集群创建成功，集群状态为`活跃`，集群节点服务状态为`正常`。在节点页签服务和资源监控页面可查看集群异步复制情况。

![查看](../../_images/redisshake_05.png)

### RedisShake 参数介绍

| 参数                    | 取值范围                                                     | 参数说明                                                     |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| source.type             | <ul><li>standalone</li><li>集群</li></ul>                    | 源集群 Redis 的类型，必填。<ul><li>standalone：表示 Redis Standalone 集群</li><li>集群：表示 Redis Cluster 集群</li></ul> |
| source.address          | -                                                            | 源 Redis 地址，必填。<ul><li>集群类型选择 `standalone` 时对应集群地址需填写 VIP 地址，例如：172.22.4.253:6379</li><li>集群类型选择`集群`时对应集群地址需填写所有节点 IP 地址，例如："172.22.4.2:6379;172.22...;172.22.4.7:6379"<br>注意：多个 IP 地址必须加双引号 <code>""</code>。</li></ul> |
| target.type             | <ul><li>standalone</li><li>集群</li></ul>                    | 目标集群 Redis 的类型，必填。<ul><li>standalone：表示 Redis Standalone 集群</li><li>集群：表示 Redis Cluster 集群</li></ul> |
| target.address          | -                                                            | 目标 Redis 地址，必填。<ul><li>集群类型选择 `standalone` 时对应集群地址需填写 VIP 地址，例如：172.22.4.253:6379</li><li>集群类型选择`集群`时对应集群地址需填写所有节点 IP 地址，例如："172.22.4.2:6379;172.22...;172.22.4.7:6379"<br/>注意：多个 IP 地址必须加双引号 <code>""</code>。</li></ul> |
| parallel                | 1 - 256                                                      | 启动多少个并发线程同步一个 RDB 文件，默认值为 32。           |
| source.password_raw     | -                                                            | 源端密码，留空表示无密码。                                   |
| target.password_raw     | -                                                            | 目标端密码，留空表示无密码。                                 |
| fake_time               | -                                                            | 用于处理过期的键值，当迁移两端不一致的时候，目的端需要加上这个值。 |
| key_exists              | <ul><li>rewrite</li><li>-</li><li>ignore</li></ul>           | 当源目的有重复 key 时是否进行覆写。<ul><li>`-`: 一旦发生进程直接退出。</li><li>`rewrite`: 源端覆盖目的端。</li><li>`ignore`: 保留目的端key，忽略源端的同步 key。</li></ul> |
| filter.db.whitelist     | -                                                            | 指定的 db 被通过，比如 0；5；10 将会使 db0，db5，db10 通过, 其他的被过滤。 |
| filter.db.blacklist     | -                                                            | 指定的 db 被过滤，比如 0；5；10 将会使 db0，db5，db10 过滤，其他的被通过。 |
| filter.key.whitelist    | -                                                            | 支持按前缀过滤 key，只让指定前缀的 key 通过，分号分隔。比如指定 abc，将会通过 abc，abc1，abcxxx。 |
| filter.key.blacklist    | -                                                            | 支持按前缀过滤 key，不让指定前缀的 key 通过，分号分隔。比如指定 abc，将会阻塞abc，abc1，abcxxx。 |
| filter.slot             | -                                                            | 指定过滤slot，只让指定的 slot 通过。                         |
| filter.lua              | <ul><li>true</li><li>false</li></ul>                         | 控制不让 lua 脚本通过，true 表示不通过。默认为 false。       |
| big_key_threshold       | -                                                            | 如果目的端大版本小于源端, 也建议设置为1。默认值为524288000。 |
| keep_alive              | -                                                            | TCP keep-alive 保活参数，单位秒，0 表示不启用。              |
| qps                     | -                                                            | 同步 QPS 上限，默认值为 200000。                             |
| resume_from_break_point | <ul><li>true</li><li>false</li></ul>                         | 断点传续开关。                                               |
| log.level               | <ul><li>-</li><li>error</li><li>warn</li><li>info</li><li>debug</li></ul> | 日志等级。                                                   |
| Enable web console      | <ul><li>true</li><li>false</li></ul>                         | 是否开启 WebConsole。<ul><li>true：表示开启。</li><li>false：表示关闭，不会重启 redis。</li></ul> |
| 文件查看用户名          | -                                                            | 登录 console 界面管理员账户。                                |
| 文件查看密码            | -                                                            | 登录 console 界面管理员账户密码。                            |