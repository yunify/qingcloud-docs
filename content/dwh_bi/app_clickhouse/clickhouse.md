---
---

# ClickHouse on QingCloud 用户手册

## 描述

「ClickHouse on QingCloud」 是一款深度定制的ClickHouse集群应用。它具有以下特点。

- 自动的集群管理

「ClickHouse on QingCloud」 通过Paxos协议管理整个集群的状态，这意味着您不需要进行繁重的集群管理操作，可以像操作单节点 ClickHouse 一样操作 「ClickHouse on QingCloud」。

- 支持数据在集群中重新分布

在支持集群的自动管理的基础上，我们还提供集群级的数据操作：`SYSTEM RESHARDING`、 `SYSTEM RESHARDING DATABASE database_name`、 `SYSTEM RESHARDING TABLE [database_name].table_name`。可以针对性的支持在不同维度上的集群数据重分布操作。这将极大的优化由于数据分布不合适等情况下的查询性能衰减等问题。

- 极致的性能、更低的成本

不论在单节点、多节点集群环境中 「ClickHouse on QingCloud」 都完美的保持了ClickHouse集群本身的性能，同时我们还对一些关键参数进行了进一步的调整，以争取在您不需要调节任何参数的情况下为您提供极致的性能体验。同时 「ClickHouse on QingCloud」 支持容量型、性能型、超高性能型多种磁盘类型，您可以根据自己的实际情况进行选择。

## 创建步骤

### 基本设置

这里可以填写集群的描述等信息。

![基本设置](../_images/base_step_1.png)

计费方式可选小时、月、年。若开启自动备份，则在每天指定时间段都会创建一次备份。

**注解**：需要注意的是 「ClickHouse on QingCloud」 使用 Page cache 与最终一致模型，通常情况下我们不推荐您开启自动备份功能。

### 节点设置

可以选择性能型或者超高性能型数据库实例，以及数据库的配置、磁盘大小。磁盘大小决定了数据库最大容量，您的数据和日志会共享这块磁盘。

![节点设置](../_images/base_step_2.png)

### 网络设置

数据库集群服务只能加入已连接路由器的私有网络，并确保该私有网络的 DHCP 处于『打开』状态。 使用一个数据库独享的私有网络的好处是方便您对其做『过滤控制』，同时也不影响其它私有网络的设置。

![网络设置](../_images/base_step_3.png)

### 服务环境参数设置

在这一步可以创建初始的数据库账号，并设置数据库服务的配置参数。

![参数设置](../_images/base_step_4.png)

### 用户协议

阅读并同意青云AppCenter用户协议之后即可开始部署应用。

## 集群信息

### 基本属性

这里显示了集群的基本信息。

![基本属性](../_images/basic_info.png)


### 服务端口信息

集群提供了高可用IP，您可以直接使用高可用IP对集群进行操作。

![端口信息](../_images/port_info.png)


**注解**: 由于集群采用无主构架，我们更加建议您直接使用节点IP进行对集群的操作，以便可以更加灵活的控制集群的负载。

### 服务功能

点开基本属性旁边的下拉按钮，可以看到提供的服务功能。

![服务功能](../_images/service_list.png)


### 节点列表

这里列出节点及其IP，可以使用这里列出的任意IP来对集群进行操作。同时显示了每个节点的服务状态。

![节点列表](../_images/node_list.png)

### 配置参数

这里列出了集群的所有配置参数。仅供展示，我们不推荐您对它们进行修改。

![配置参数](../_images/env.png)


### 监控告警

可以对集群节点配置告警策略，及时掌握集群的资源和服务状况。

![监控告警](../_images/alarm.png)


### 备份恢复

可以对集群进行手动备份，也可以在集群列表页面右键选择备份时间进行自动备份。

![手动备份](../_images/backup.png)
![自动备份](../_images/auto_backup.png)

如果需要从备份创建出一个独立于原有数据库服务的新数据库服务， 可以在详情页的『备份』标签下右键相应的备份点，再选择『从备份创建集群』即可。

![恢复集群](../_images/restore.png)

**注解**：需要注意的是「ClickHouse on QingCloud」使用Page cache与最终一致模型，通常情况下我们不推荐您使用备份功能。

### 用户列表

展示已有用户账号信息。

![账号](../_images/display_userlist.png)

## 服务功能概述

### 添加用户

要创建新账号时，需要指定账号密码和授权访问的网络。

![添加用户](../_images/add_user.png)

### 修改用户

要修改已有用户时，需要指定账号密码和授权访问的网络。

![修改用户](../_images/modify_user.png)

### 删除用户

这里填写要删除的用户名。

![删除用户](../_images/del_user.png)

### 增删节点

可以根据需要增加集群节点，需要注意的是增加节点的过程不会对原有数据迁移，这是为了尽快的完成增加节点操作，让计算资源更快的被集群应用。如果您需要对已有数据进行重新迁移，可以进入数据库执行 `SYSTEM RESHARDING` 操作即可对集群的所有节点进行数据重分布。对节点进行删除则自动进行集群的重分布。无需执行 `SYSTEM RESHARDING`

![添加节点](../_images/add_nodes.png)

**注解**：暂不支持对集群进行删除节点操作

**注解**：由于 `SYSTEM RESHARDING` 的执行会造成大量的数据迁移工作，可能会对您的集群造成影响，默认情况下我们为其增加了 40MB/S 的迁移上限，但这并不代表不会对您的集群产生影响，如果需要进行该操作请选择在业务低峰时进行。


### 扩容集群

可以对一个运行中的数据库服务进行在线扩容，调整CPU/内存/磁盘空间大小。

![扩容集群](../_images/scale.png)

**注解**：扩容需要在开机状态下进行，扩容时链接会有短暂中断，请在业务低峰时进行。

### 监控

这里提供了每台主机的资源监控和服务监控。服务监控统计了一些用于性能分析的常用的 Metrics 信息，可用于定位分析数据库的性能。资源监控统计了主机的资源信息，如: CPU使用率、硬盘IOPS情况等，可用于查看系统性能是否到达瓶颈。

![查询数](../_images/queries_monitor.png)

![TCP连接数](../_images/tcp_connections_monitor.png)

![活跃读锁](../_images/active_read_lock_monitor.png)

![CPU利用率](../_images/cpu_monitor.png)

![硬盘 IOPS](../_images/iops_monitor.png)

### 性能测试

「ClickHouse on QingCloud」 与原生 ClickHouse 近乎一致的性能，更多性能相关测试信息可以参考：[ClickHouse Benchmark](https://clickhouse.yandex/benchmark.html)

### 集群的使用

「ClickHouse on QingCloud」 与原生 ClickHouse 高度兼容，你可以直接使用 ClickHouse 的任何连接方式连接 「ClickHouse on QingCloud」 。例如：

``` shell
# 使用Docker交互式的方式连接「ClickHouse on QingCloud」
docker run -it --rm yandex/clickhouse-client -h 高可用IP --port TCP服务端口 --user 用户名 --password 密码

# 使用Docker非交互式的方式向「ClickHouse on QingCloud」导入数据
cat visits_v1.tsv | docker run -i --rm yandex/clickhouse-client -h 高可用IP --port TCP服务端口 --user 用户名 --password 密码 --query "INSERT INTO datasets.visits_v1 FORMAT TSV"

# 使用clickhouse-client交互式的方式连接「ClickHouse on QingCloud」
sudo apt-get install clickhouse-client  #如已安装请忽略
clickhouse-client -h 高可用IP --port tcp服务端口 --user 用户名  --password 密码

# 使用clickhouse-client非交互式的方式向「ClickHouse on QingCloud」导入数据
sudo apt-get install clickhouse-client  #如已安装请忽略
cat visits_v1.tsv | clickhouse-client -h 高可用IP --port TCP服务端口 --user 用户名 --password 密码 --query "INSERT INTO datasets.visits_v1 FORMAT TSV"

# 使用curl访问「ClickHouse on QingCloud」
echo 'SELECT 1' | curl 'http://用户名:密码@高可用IP:端口' -d @-

# 使用curl向「ClickHouse on QingCloud」导入数据
cat visits_v1.tsv | curl 'http://用户名:密码@高可用IP:端口/?query=INSERT+INTO+datasets.visits_v1+FORMAT+FORMAT+TSV' --data-binary @-

```

**注解**：更多使用信息可以参考： [ClickHouse](https://clickhouse.yandex/docs/en/)
