---
title: "数据管理"
description: 本小节主要介绍 MySQL Plus 数据管理常见问题。 
keyword: 数据库,MySQL PLus,关系型数据库,MySQL,数据迁移，备份，订阅问题
weight: 30
collapsible: false
draft: false
---

## MySQL 导入数据时提示 “ ERROR 2006 (HY000) at line 615: MySQL server has gone away” 怎么办?

1. 将 `max_allowed_packet` 的值设置大点，比如 128MB，或者设置成 1GB, 导入完成后再设置小。

2. 把已经导入的数据 drop 掉。

3. 进行二次导入，详情请参考[在线迁移: mysqldump 方式](../../manual/migration/migration_online_mysqldump)。

## mysqldump 导出数据一定需要 root 权限的账户操作吗?

普通权限的用户也可以执行 mysqldump 工具，具体需要看下导出的数据库对象是否需要 root 权限。

## 在线迁移适用于哪些版本？

支持 MySQL 5.6、5.7、8.0（后续会支持）版本。同时，MySQL Plus 的内核版本要大于等于源库的内核版本，否则会报错、无法迁移。

## 启动在线迁移服务后高可用写 IP 不可达，怎么办?

检查 MySQL Plus 的版本。若为1.5.1及更早的版本，则需要升级版本。

用户在启动结束迁移服务后，高可用 IP 会自动加到集群主节点.

## 在线迁移的速度

对于同一 VPC、超高性能型的两个集群，700G 用时大概为 44 小时，相当于 16G/小时，6小时 100G。

## MySQL Plus 备份机制?

1. 配置了自动备份后，将在设定时间段里随机挑选一个时间点来进行备份。
2. 未配置自动备份，可选择手动备份。
   
   MySQL Plus 每个备份链的默认备份节点是30个配额，默认 2 条备份链。每个备份链首次备份是全量备份，追加备份都是增量备份。
   
   若两个备份链都满了，新增的自动备份将删除最早的一条备份链，再重新创建一条新的全量备份链。
   
   备份默认使用主节点备份，如果主节点切换会重新生成一个新的全量备份链。
   
   备份的文件都是远程异地备份，有分布式存储集群来存储备份文件。

## 自动备份备份的磁盘容量大小

对于 KVM 主机，只备份数据盘。

对于LXC主机，除了备份数据盘外，还将备份系统盘。

## 为什么 MySQL Plus 无法手动创建备份，或者自动创建备份失败呢？

创建备份逻辑：选择 MySQL Plus 主节点，交由 AppCenter 备份。因此，当执行备份任务时，主节点运行异常会备份失败。

排查 `/data/log/backup.log` 文件。

- 若提示 “get_backup_node_id failed to get ip of leader” 或者 “get_backup_node_id failed to get id of leader” 则说明执行备份时无主。
 
   提交工单联系技术支持解决。

- 若提示 `/data/log/backup.log` 中在对应备份时间有 “backup success” ，则备份服务异常，请先检查备份服务运行状态。

## 基于备份创建集群需要多久？速度为多少？

对于 1.x.x 系列的超高性能型集群，250G 耗时 43 分钟，大概速度为 350G/小时。
