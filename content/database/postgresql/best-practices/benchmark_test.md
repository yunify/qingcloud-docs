---
title: "基准测试"
description: 本小节主要介绍如何进行 PostgreSQL 集群基准测试。 
keyword: 基准测试,PostgreSQL,关系型数据库,数据库
weight: 05
collapsible: false
draft: false
---

<!--在2核4G规格的数据库下，5个仓库，每个仓库10个销售端，tpmC 测试结果为19888，详情见下图：-->

<!--![benchmarksqlTestResult](../../_images/benchmarksql1.png)-->

作为关系型数据库，Postgresql 具有所有关系型数据库的特征。

测试模型：TPC-C

本小节主要介绍如何创建 benchmark 数据库，并使用满足 TPC-C 基准测试规范的 PostgreSQL 测试工具 BenchmarkSQL 进行基准测试。

## 测试方法

### 步骤一：创建 benchmark 用户和数据库

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

5. 执行<b>\q</b>退出数据库。

### 步骤二：创建配置文件

1. 进入run目录，复制props.pg文件并比编辑产生的副本，设置与基准测试有关的参数，分别执行以下命令：

   ```shell
   $ cd run
   $ cp props.pg my_postgres.properties
   $ vi my_postgres.properties
   ```

   首次实验时，首先修改下面的参数：

   - “conn=jdbc:postgresql://localhost:5432/postgres”修改为“conn=jdbc:postgresql://192.168.1.253:5432/qingcloud”
   - “ localhost”修改为postgresql所在服务器的ip地址
   - “5432”修改为 postgresql所在的端口
   - “postgres”修改为所测量的数据库

   <img src="../../_images/bhm_07.png"/>

   | 参数                   | 参数值 | 描述                                                         |
   | ---------------------- | ------ | ------------------------------------------------------------ |
   | warehouses             | 1      | 初始化加载数据时，需要创建多少仓库的数据。每仓库约80MB数据,数量根据实际服务器内存配置。 |
   | loadWorkers            | 4      | 表示加载数据时，开启加载数据的进程数，加载速度会随worker数量的增加而有所提升。 |
   | terminals              | 1      | 终端数量，指同时有多少终端并发执行，通常设置为CPU线程总数的2～6倍。 |
   | runTxnsPerTerminal     | 10     | 每个终端（terminal）运行的固定事务数量，例如：如果该值设置为10，意味着每个terminal运行10个事务，如果有32个终端，那整体运行320个事务后，测试结束。该参数配置为非0值时，下面的runMins参数必须设置为0 |
   | runMins                | 0      | 要测试的整体时间，单位为分钟，如果runMins设置为60，那么测试持续1小时候结束。该值设置为非0值时，runTxnsPerTerminal参数必须设置为0。这两个参数不能同时设置为正整数，如果设置其中一个，另一个必须为0，主要区别是runMins定义时间长度来控制测试时间；runTxnsPerTerminal定义事务总数来控制时间。 |
   | limitTnxsPermin        | 300    | 限制每分钟执行的事务总数。0表示不限制。                      |
   | terminalWarehouseFixed | true   | 用于指定终端和仓库的绑定模式，设置为true时可以运行4.x兼容模式，意思为每个终端都有一个固定的仓库。设置为false时可以均匀的使用数据库整体配置，TPCC规定每个终端都必须有一个绑定的仓库，所以一般使用默认值true。 |

   

2. 执行以下命令开始测试：

   ```
   ./runDatabaseDestroy.sh props.pg
   ```

   <img src="../../_images/bhm_04.png"/>

### 步骤三：创建模式并初始化数据库

执行以下命令创建数据库基准：

```shell
./runDatabaseBuild.sh props.pg
```

<img src="../../_images/bhm_05.png"/>

### 步骤四：执行测试

执行以下命令用 benchmark 内置脚本测试：

```sql
./runBenchmark.sh props.pg
```

<img src="../../_images/bhm_06.png"/>
