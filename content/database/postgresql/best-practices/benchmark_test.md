---
title: "基准测试"
description: 本小节主要介绍如何进行 PostgreSQL 集群基准测试。 
keyword: 基准测试,PostgreSQL,关系型数据库,数据库
weight: 05
collapsible: false
---

<!--测试模型：TPC-C-->

<!--采用满足 TPC-C 基准测试规范的 PostgreSQL 测试工具 BenchmarkSQL 进行基准测试。--> 

<!--在2核4G规格的数据库下，5个仓库，每个仓库10个销售端，tpmC 测试结果为19888，详情见下图：-->

<!--![benchmarksqlTestResult](../../_images/benchmarksql1.png)-->

作为关系型数据库，Postgresql 具有所有关系型数据库的特征。

本小节主要介绍如何安装 BenchmarkSQL 并使用其进行 PostgreSQL 的基准测试。

## 测试方法

### 步骤一：创建 benchmark 用户和数据库。

>以 benchmark 5.0 版本为例。

1. 在安装了 PostgreSQL 的服务器上启动 PostgreSQL 并登录。

2. 执行以下命令连接数据库，并输入密码：

   ```sql
   psql -h 192.168.1.253 -U postgres -d qingcloud
   ```

   <img src="../../_images/bhm_01.png"/>

3. 执行以下命令创建一个用户和密码：

   以用户名为**pgtest**，密码**Zhu88jie**为例。

   ```sql
   CREATE USER pgtest WITH ENCRYPTED PASSWORD 'Zhu88jie';
   ```

   <img src="../../_images/bhm_02.png"/>

4. 执行以下命令创建名为benchmarksql的用户数据库：

   ```sql
   CREATE DATABASE benchmarksql OWNER benchmarksql;
   ```

   <img src="../../_images/bhm_03.png"/>

5. 执行**\q**退出数据库。

### 步骤二：测试数据库

执行以下命令开始测试数据库：

```sql
./runDatabaseDestroy.sh props.pg
```

<img src="../../_images/bhm_04.png"/>

### 步骤三：创建数据库基准

执行以下命令创建数据库基准：

```sql
./runDatabaseBuild.sh props.pg
```

<img src="../../_images/bhm_05.png"/>

步骤四：执行测试

执行以下命令测试 benchmark 内置脚本：

```sql
./runBenchmark.sh props.pg
```

<img src="../../_images/bhm_06.png"/>
