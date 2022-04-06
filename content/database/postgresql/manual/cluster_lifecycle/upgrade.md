---
title: "版本升级"
description: 本小节主要介绍如何升级 PostgreSQL 集群。 
keyword: 升级集群,PostgreSQL,关系型数据库,数据库
weight: 15
collapsible: false
draft: false

---

<!--1、更新方式2、更新步骤1）验证更新版本影响步骤一：console 备份原集群步骤二：基于备份创建新集群步骤三：使用 pg_dump 备份数据库，并保存备份文件步骤四：升级备份集群步骤五：更新 timescaleDB 插件步骤六：用户连接数据库并确认更新结果步骤七：根据更新结果确认是否升级2）更新版本：步骤一：使用 pg_dump 备份数据库，并保存备份文件步骤二：关闭集群步骤三：升级集群步骤四：更新 timescaleDB 插件（同【验证更新版本影响】操作【步骤四】）步骤五：验证数据或使用 pg_restore 从备份文件中恢复数据库-->

当 PostgreSQL 发布新版本后，系统将自动检测到有版本待滚动升级。PostgreSQL 支持在线升级集群到最新版本。

> **注意**
>
> 版本升级过程，业务将被中断，请在业务低峰期进行。

本小节主要介绍如何在线升级 PostgreSQL 集群版本。

## 约束限制

- 仅支持集群同系列的版本升级。例如`PG11-高可用版-1.0.5`可升级到`PG11-高可用版-1.0.9`。
- 仅支持升级到更高版本。
- 仅检测到有新版本时，才开放升级操作。
- 仅支持升级状态为**关闭**的集群。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 PostgreSQL 集群，且集群状态为**关闭**。
- 升级生产环境之前，请执行【验证更新版本影响】操作。
- **节点状态**活跃，**节点服务状态**正常。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 PostgreSQL**，进入集群管理页面。

### 1）在备份集群上验证更新版本影响

#### 步骤一：console 备份原集群

1. 点击目标集群 ID，进入集群详情页面。

2. 在**基本属性**模块，点击集群操作下拉菜单。

3. 展开下拉菜单，点击**创建备份**。

   <img src="../../../_images/upgrade_01.png" alt="创建备份" style="zoom:50%;" />

2. 阅读提示后单击**继续**。

   <img src="../../../_images/upgrade_02.png" alt="提示" style="zoom:50%;" />

3. 阅读计费说明后，输入备份名称并单击**提交**。

   <img src="../../../_images/upgrade_03.png" alt="提交备份" style="zoom:50%;" />

4. 等待备份完成

   <img src="../../../_images/upgrade_04.png" alt="等待备份完成" style="zoom:50%;" />

#### 步骤二：基于备份创建新集群

1. 点击**备份**，查看备份集群。

   <img src="../../../_images/upgrade_05.png" alt="查看集群备份" style="zoom:50%;" />

2. 右击备份链 ID，选择**从备份创建集群**。

   <img src="../../../_images/upgrade_06.png" alt="从备份创建集群" style="zoom:50%;" />

3. 阅读并勾选用户协议后，单击**提交**。

   <img src="../../../_images/upgrade_07.png" alt="提交" style="zoom:50%;" />

4. 等待备份集群创建成功，且**节点状态**活跃和**服务状态**正常。

   <img src="../../../_images/upgrade_08.png" alt="等待创建成功" style="zoom:50%;" />

#### 步骤三：备份数据库并保存备份文件

> <b>注：</b>
>
> 由于 timescaleDB 1.6.1 版本 release note 说明，`For this release only, you need to restart the database after upgrade before restoring a backup.`因此，升级前需要使用 pg_dump 进行数据库的备份工作。
>
> timescaleDB release notes：https://docs.timescale.com/timescaledb/latest/overview/release-notes/#main-content

<img src="../../../_images/upgrade_09.png" alt="版本说明" style="zoom:50%;" />

1. 连接数据库，详细操作请[参见连接数据库](/database/postgresql/manual/mgt_connect/access_pg/)。
2. 使用**pg_dump**备份数据库。

3. 备份数据库之后退出数据库。

#### 步骤四：升级备份集群

> <b>注：</b>
>
> 此操作应在备份集群进行。
>
> 以下备份集群简称集群。

1. 在备份集群页面**基本属性**模块，点击集群操作下拉菜单。

2. 展开下拉菜单，点击**关闭**，关闭集群，等待任务执行完成。

   <img src="../../../_images/upgrade_10.png" alt="关闭集群" style="zoom:50%;" />

2. 展开下拉菜单，点击**升级**。

   <img src="../../../_images/upgrade_11.png" alt="升级集群" style="zoom:50%;" />

3. 确认升级版本并点击**升级**。

   <img src="../../../_images/upgrade_12.png" alt="确认版本" style="zoom:50%;" />

4. 等待升级完成系统自动启动集群后，确认版本已升级到最新版本。

   <img src="../../../_images/upgrade_13.png" alt="确认版本" style="zoom:50%;" />

#### 步骤五：更新 timescaleDB 插件

1. 使用数据库连接软件（PgAdmin、DBeaver 或直接使用 psql）通过 root 账户连接数据库**高可用写IP**。

   如果您正在使用psql，请与-X标志连接，以防止任何命令在.psqlrc会话启动时加载以前的 TimescaleDB 版本，示例如下：

   ```sql
   psql -u postgres -h <ip> -p <port> -x
   ```

   <img src="../../../_images/upgrade_14.png" alt="连接数据库" style="zoom:50%;" />

2. 执行如下 SQL 语句更新 timescaleDB 版本至 1.7.3：

   ```sql
   ALTER EXTENSION timescaledb UPDATE TO '1.7.3';
   ```

   <b> `注意：需要将更新语句作为连接数据库后的第一条命令执行，否则执行会报如下错误：`</b>

   <img src="../../../_images/upgrade_15.png" alt="连接数据库" style="zoom:50%;" />

#### 步骤六：连接数据库确认更新结果

1. 连接数据库，详细操作请[参见连接数据库](/database/postgresql/manual/mgt_connect/access_pg/)。
2. 根据更新结果确认是否升级：
   - 若升级后数据库内容与备份数据库内容存在差异，甚至影响使用，请尝试使用pg_restore恢复数据库。如能正常恢复可执行以下操作升级目标集群，若不能正常恢复，请联系技术支持。
   - 若升级后数据内容页与备份数据库内容无差异，请执行以下操作升级目标集群。

### 2）更新目标集群版本

1. 确认目标集群的**节点状态**为活跃，**节点服务状态**为正常。
2. 在目标集群上执行上述[步骤三](#步骤三备份数据库并保存备份文件)~[步骤五](#步骤五更新-timescaledb-插件)。
3. 连接数据库，详细操作请[参见连接数据库](http://localhost:1313/database/postgresql/manual/mgt_connect/access_pg/)。
4. 验证数据。
   - 若数据无误，则升级完成。
   - 如数据异常，请使用 pg_restore 从备份文件中恢复数据库。