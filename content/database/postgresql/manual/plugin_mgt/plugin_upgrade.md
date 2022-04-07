---
title: "升级 timescaleDB 插件"
description: 本小节主要介绍如何升级 timescaleDB 插件。 
keyword: 升级集群,PostgreSQL,关系型数据库,数据库
weight: 2
collapsible: false
draft: false

---

TimescaleDB 是一个旨在使 SQL 可扩展以适用于时间序列数据的开源数据库。 它由 PostgreSQL 设计并打包为 PostgreSQL 扩展，提供跨时间和空间的自动分区（分区键）以及完整的 SQL 支持。

本小节主要介绍如何升级 timescaleDB 插件至`1.7.3`版本。

## 约束限制

- 仅支持升级到`PG11-高可用版-1.0.9`及以上版本的集群。
- 仅支持升级到更高版本。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 升级插件前，请执行[验证更新版本影响](#备份集群并验证更新版本影响)操作。
- **节点状态**活跃，**节点服务状态**正常。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 PostgreSQL**，进入集群管理页面。
3. 点击目标集群 ID，进入集群详情页面。 

### 备份集群并验证更新版本影响

1. 备份**原集群**，详细操作请参见[创建备份](/database/postgresql/manual/backup_restoration/enable_backup/)。

2. 备份数据库并保存备份文件。

   由于 timescaleDB 1.6.1 版本 release note 说明，`For this release only, you need to restart the database after upgrade before restoring a backup.`因此，升级前需要使用` pg_dump `进行数据库的备份工作。

   timescaleDB release notes：[https://docs.timescale.com/timescaledb/latest/overview/release-notes/#main-content](https://docs.timescale.com/timescaledb/latest/overview/release-notes/#main-content)

   <img src="../../../_images/upgrade_09.png" alt="版本说明" style="zoom:50%;" />

3. 判断当前**备份集群**版本是否为`PG11-高可用版-1.0.9`版本。

   - 是，执行下一步。
   - 否，请升级该集群版本到`PG11-高可用版-1.0.9`版本，详细操作请参见[升级版本](/database/postgresql/manual/cluster_lifecycle/upgrade/)。

4. 升级**备份集群**的 timescaleDB 插件。

   a. 使用数据库连接软件（PgAdmin、DBeaver 或直接使用 psql）通过 root 账户连接数据库**高可用写IP**。

   <img src="../../../_images/upgrade_14.png" alt="连接数据库" style="zoom:50%;" />

   如果您正在使用psql，请与-X标志连接，以防止任何命令在.psqlrc会话启动时加载以前的 TimescaleDB 版本，示例如下：

   ```sql
   psql -U <root> -h <ip> -p <port> -d <serverName> -X
   ```

   | <span style="display:inline-block;width:80px">选项</span> | <span style="display:inline-block;width:240px">说明</span>   | <span style="display:inline-block;width:280px">示例</span> |
   | :-------------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------------- |
   | -U                                                        | 数据库超级管理员账号名。                                     | root                                                       |
   | -h                                                        | 数据库节点 IP 或集群的高可用写 IP                            | 192.168.100.0                                              |
   | -p                                                        | 端口号                                                       | -                                                          |
   | -d                                                        | 数据库名称。 <br>新建数据库默认名称 `qingcloud`。            | qingcloud                                                  |
   | -X                                                        | psql在连接数据库之前，首先会读取并执行改文件中的命令，然后连接到数据库，如果加上-X参数，则跳过该文件。通过该文件可以设置客户端或者是服务端的风格。 | -                                                          |

   b. 执行如下 SQL 语句更新 timescaleDB 版本至 1.7.3：

   ```sql
   ALTER EXTENSION timescaledb UPDATE TO '1.7.3';
   ```

   <b> `注意：需要将更新语句作为连接数据库后的第一条命令执行，否则执行会报如下错误：`</b>

   ​		<img src="../../../_images/upgrade_15.png" alt="连接数据库" style="zoom:50%;" />

5. 验证数据。

   - 若数据无误，则升级完成，可升级原集群 timescaleDB 插件。
   - 若数据异常，请使用 pg_restore 从备份文件中恢复数据库。若能正常恢复，可升级原集群 timescaleDB 插件；否则，请联系技术支持。

### 升级原集群插件

1. 备份数据库并保存备份文件。

   由于 timescaleDB 1.6.1 版本 release note 说明，`For this release only, you need to restart the database after upgrade before restoring a backup.`因此，升级前需要使用` pg_dump `进行数据库的备份工作。

2. 判断**原集群**版本是否为`PG11-高可用版-1.0.9`版本。

   > 执行该操作前，建议备份集群，详细操作请参见[创建备份](/database/postgresql/manual/backup_restoration/enable_backup/)。

   - 是，执行下一步。
   - 否，请升级该集群版本到`PG11-高可用版-1.0.9`版本，详细操作请参见[升级版本](/database/postgresql/manual/cluster_lifecycle/upgrade/)。

3. 升级**原集群**的 timescaleDB 插件

   a. 使用数据库连接软件（PgAdmin、DBeaver 或直接使用 psql）通过 root 账户连接数据库**高可用写IP**。

   <img src="../../../_images/upgrade_14.png" alt="连接数据库" style="zoom:50%;" />

   如果您正在使用psql，请与-X标志连接，以防止任何命令在.psqlrc会话启动时加载以前的 TimescaleDB 版本，示例如下：

   ```sql
   psql -U <root> -h <ip> -p <port> -d <serverName> -X
   ```

   | <span style="display:inline-block;width:80px">选项</span> | <span style="display:inline-block;width:240px">说明</span>   | <span style="display:inline-block;width:280px">示例</span> |
   | :-------------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------------- |
   | -U                                                        | 数据库超级管理员账号名。                                     | root                                                       |
   | -h                                                        | 数据库节点 IP 或集群的高可用写 IP                            | 192.168.100.0                                              |
   | -p                                                        | 端口号                                                       | -                                                          |
   | -d                                                        | 数据库名称。 <br>新建数据库默认名称 `qingcloud`。            | qingcloud                                                  |
   | -X                                                        | psql在连接数据库之前，首先会读取并执行改文件中的命令，然后连接到数据库，如果加上-X参数，则跳过该文件。通过该文件可以设置客户端或者是服务端的风格。 | -                                                          |

   b. 执行如下 SQL 语句更新 timescaleDB 版本至 1.7.3：

   ```sql
   ALTER EXTENSION timescaledb UPDATE TO '1.7.3';
   ```

   <b> `注意：需要将更新语句作为连接数据库后的第一条命令执行，否则执行会报如下错误：`</b>

   ​		<img src="../../../_images/upgrade_15.png" alt="连接数据库" style="zoom:50%;" />

4. 验证数据。

   - 若数据无误，则插件升级完成。
   - 若数据异常，请使用 pg_restore 从备份文件中恢复数据库。若不能正常恢复，请联系技术支持。