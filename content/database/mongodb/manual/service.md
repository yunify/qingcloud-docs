---
title: "服务功能"
description: test
weight: 4
draft: false
---

点开基本属性旁边的下拉按钮，可以看到提供的服务功能。

![](../../_images/feature.png)

### 配置参数

这里列出了可以修改并持久化的配置参数。修改配置参数将会使集群重启，请在业务低峰时进行修改。

> _MongoDB 4.0.3 - QingCloud 1.2.0_ 之后的版本新增了 Caddy 服务替代老版本的 FTP 服务，配置参数中默认为您配置用户名为 caddy，密码为 caddy，您可以修改配置参数来配置您的用户名和密码，该相关配置不会导致 mongod 服务重启。

> _MongoDB 4.0.3 - QingCloud 1.3.0_ 新增了 zabbix-agent 服务，您可以将其加入您的 zabbix-server 方便统一管理，您可以通过修改配置参数来配置 zabbix-agent 的启停，该相关配置不会导致 mongod 服务重启。

![](../../_images/env.png)


### 连接 URL

_MongoDB 4.0.3 - QingCloud 1.2.0_ 版本新增了「连接 URL」一栏，您可以直接复制该 URL 并将其中的 [password] 修改为您的连接密码，[database] 修改为您需要连接的数据库即可。

> 在 shell 中通过该 URL 连接时需要在 `&` 前添加转义符 `\`

![](../../_images/connection_url.png)

### 节点详情

您可以在这里实时查看节点的状态

![](../../_images/nodes_role.png)

### 增删节点

可以根据需要增加集群节点，增加的节点数必须为偶数。添加节点的任务执行时间跟集群的数据量有关系，数据量大时，任务执行时间会久一些，添加节点不影响集群的读写。

删除节点不会导致主节点的 mongod 重启，但为避免影响到业务，请在业务量低时操作。

删除节点有如下限制：

- 数量必须为偶数，至少保留一个节点
- 无法删除主节点
- 无法删除 `qc_sid` 为 1 的节点

> `qc_sid` 可以使用 root 用户通过 mongo 连接之后执行 `rs.conf().members` 命令查看。`qc_sid` 为 1 的节点的选举优先级被我们设置为 2，所以这个节点通常是主节点。

![](../../_images/add_nodes.png)

### 备份

如果您打开了『自动备份』功能，那么 MongoDB 集群会在你指定的时间段进行每日的自动备份； 您可以从这些备份创建出全新的 MongoDB 集群；

如果您关闭了自动备份，可以在集群列表右键 MongoDB 集群后点击『创建备份』选项， 或者在集群详情页的『备份』标签下点击『创建备份』按钮。

> 如果备份后进行过增删节点，那么再次备份时需要创建新的备份链。

![](../../_images/create_snapshot.png)

如果需要从备份创建出一个独立于原有 MongoDB 集群的新 MongoDB 集群， 可以在集群详细页的『备份』标签下右键相应的备份点，再选择『从备份创建集群』即可。

![](../../_images/create_cluster_from_snapshot.png)

### 扩容集群

可以对一个运行中的集群进行在线扩容，调整CPU/内存/磁盘空间大小。

![](../../_images/scale1.png)

注解：扩容需要在开机状态下进行，扩容会导致重新选主，请在业务低峰时进行

#### 硬盘自动伸缩

Mongo 应用数据盘被占满会导致 mongod 服务进程挂掉

我们在 _MongoDB 4.0.3 QingCloud 1.4.0_ 版本中新增了「应用存储空间」自动伸缩的功能，您可以参照 [自动伸缩](https://docs.qingcloud.com/product/operation/autoscaling) 来实现您的自动伸缩自定义

### 同步日志

同步日志功能可以将 mongod.log 拷贝到系统的 FTP 目录，同步后可以在内网下载到本地进行分析。

> _MongoDB 4.0.3 - QingCloud 1.2.0_ 版本使用 Caddy 服务替代了老版本的 FTP 服务

![](../../_images/copy_log.png)

### 关闭同步日志

该栏为 _MongoDB 4.0.3 - QingCloud 1.2.0_ 版本新增服务，下载或查看完日志，您可以关闭 Caddy 服务

![](../../_images/stop_copy_log.png)

### 清理日志

清理日志功能可以将 mongod.log 清空，减少日志的磁盘空间占用。

![](../../_images/clean_log.png)

### zabbix-agent 服务

_MongoDB 4.0.3 - QingCloud 1.3.0_ 版本新增了 zabbix-agent 服务（3.4 版本），方便您采用 zabbix-server 统一管理各个集群的监控信息，zabbix-agent 服务的控制见 「配置参数」，启动服务后，用户只需要在 zabbix-server 的 web 界面添加云服务器即可，为了实现多维数据监控，我们提供了 [监控模板](https://releases-qs.pek3a.qingstor.com/zabbix/zbx_mongodb_templates.xml?response-content-disposition=attachment)（点击即可下载到本地）。用户只需要将该模板导入到 zabbix-server 即可使用。

> 「配置参数」中 「zabbix-server 地址」 填写的格式不正确，会导致 zabbix-agent 的不正确启停，该项的填写格式可参考 [配置文件](https://www.zabbix.com/documentation/3.4/manual/appendix/config/zabbix_agentd) 中的 「Server」 配置项。

![](../../_images/zabbix_agent.png)



### 升级集群

`MongoDB v3.0.15 (MMAPv1)` 和 `MongoDB v3.4.5 (WiredTiger)` 版本均可以升级至 _MongoDB 4.0.3 - QingCloud 1.2.0_ 版本，升级前需要先关闭集群， `MongoDB v3.0.15 (MMAPv1)` 升级的时间较长，其时长主要受数据量的影响，数据量越大，升级所花费的时间越久。

> 升级前，请先对数据做好备份。

> `MongoDB v3.0.15 (MMAPv1)` 单节点不允许升级，如果您点了升级，不用担心，升级失败后您可以关闭集群然后选择「版本回退」即可。

> 由于 3.6 以上的版本不再支持对名字为 `*` 的索引的操作，所以您需要在升级前将名字为 `*` 的索引删除或者重命名，详情见 [Compatibility Changes in MongoDB 3.6](https://docs.mongodb.com/manual/release-notes/3.6-compatibility/#general-compatibility-changes) 

> 升级集群期间，客户端无法连接 mongo 服务，为了避免客户端的操作影响到升级的过程，在这期间禁掉了客户端对 mongo 服务的访问。 

![](../../_images/upgrade_1.png)

![](../../_images/upgrade.png)



### 监控告警

目前提供的监控项包括：

- CPU 使用率

- 内存利用率

- 磁盘使用量

- MongoDB 各项操作数量

- MongoDB 复制操作数量

- MongoDB 连接数

_MongoDB 4.0.3 QingCloud 1.4.0_ 版本新增了以下监控项

- WIREDTIGER 内存状态

- WIREDTIGER TRANSACTIONS 状态

- GLOBALLOCK 请求状态

- GLOBALLOCK 队列状态

- 流量进出状态 

目前提供的告警项包括：

- CPU 利用率

- 内存利用率

- 磁盘使用量

- MongoDB 连接数

- MongoDB 可用连接数

- wiredTiger 内存使用率
