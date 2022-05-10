---
title: "TiDB 性能测试说明"
description: 本小节主要介绍使用Sysbench 进行 TiDB 性能测试的方法及结果。 
keyword:   TiDB 性能测试, Sysbench
weight: 6
collapsible: false
draft: false
---

本文介绍使用 Sysbench 对 TiDB 进行性能测试的具体方法及结果。

## 测试环境

| <span style="display:inline-block;width:120px">测试环境信息</span> | 说明                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| TiDB 实例配置                                                | 本次测试以[**基础型实例**](../../intro/instance_type/)为例。<br/>TiKV 节点数量：`3` |
| 测试机器配置                                                 | 采用[计算型云服务器](/compute/vm/intro/enterprise/#计算型-e2)，实例规格： `e2.8xlarge.r2`，类型：`计算型e2`，32核CPU，64G内存 ， 磁盘20G ，操作系统：`Ubuntu 18.04.5 LTS` |



## 测试工具

本次测试使用 [Sysbench](https://github.com/akopytov/sysbench/) 进行 TiDB 性能测试。

Sysbench 是一款开源的、模块化的、跨平台的多线程压力测试工具，可以执行数据库、CPU、内存、线程、IO 等方面的性能测试。

## 测试方法

### 步骤一：安装 Sysbench

1. 登录已创建好的用于测试的云服务器。

   > **说明**
   >
   > 云服务器需要与 TiDB 实例相同可用区、VPC、私有网络和安全组。

2. 执行以下命令，安装 Sysbench。

   ```
   apt-get update
   apt-get install -y automake libtool pkg-config libmysqlclient-dev       
   
   wget https://github.com/akopytov/sysbench/archive/1.0.20.tar.gz
   
   mv 1.0.20.tar.gz sysbench-1.0.20.tar.gz
   
   tar -zxvf  sysbench-1.0.20.tar.gz
   
   cd sysbench-1.0.20/
   
   ./autogen.sh && ./configure && make &&  make install
   ```

2. 安装完成后，执行以下命令，验证是否安装成功。

   ```
   sysbench --version
   ```

   若执行后，显示 sysbench 版本，说明安装成功。

### 步骤二：安装 MySQL

1. 执行以下命令，安装 MySQL 客户端。

   ```
   apt  install -y mysql-client-core-5.7
   ```
   
2. 连接 TiDB 实例。

   ```
   mysql -u root -P 4000 -h {tidb_host} -p {passwd}
   ```

   ▪︎ `{tidb_host}`：表示 TiDB 实例的 IP 地址，请根据实际地址替换。

   ▪︎ `{passwd}`：表示 root 用户密码。若无密码，则无需输入。root 用户密码修改请参见[修改用户密码](../../manual/user_mgt/mdypasswd/)。

3. 使用数据库 mysql。

   ```
   use mysql;
   ```

4. 创建数据库 `sbtest`。

   ```
   create database sbtest;
   ```

5. 进行数据库调整。

   ```
   set global tidb_hashagg_final_concurrency=1;
   set global tidb_hashagg_partial_concurrency=1;
   set global tidb_enable_async_commit = 1;
   set global tidb_enable_1pc = 1;
   set global tidb_guarantee_linearizability = 0;
   set global tidb_enable_clustered_index = 1; 
   ```

### 步骤三：系统调优

执行以下命令，配置用户的 limits.conf 文件，增大 root 用户的线程访问限制数。出口和入口节点都需要设置。

```
cat << EOF >>/etc/security/limits.conf
root           soft    nofile          1000000
root           hard    nofile          1000000
root           soft    stack           32768
root           hard    stack           32768
EOF

ulimit -a
```



### 步骤四：数据导入

**方案一：**

1. 下载导入二进制文件 [tidb_data_prepare](/database/tidb/perfwp/attach/tidb_data_prepare)。

2. 添加文件执行权限。

   ```
   chmod +x tidb_data_prepare
   ```

3. 查看帮助。

   ```
   ./tidb_data_prepare -h
   ```

    默认使用 `sbtest` 数据库，16 张表，每张表 10000000 行数据。

4. 执行脚本，开始导入数据。

   ```
   nohup ./tidb_data_prepare -h {tidb_host}  -p "" > /dev/null &
   ```

**方案二：**

1. 可选：调整 Sysbench 脚本中创建索引的顺序。

   以 Sysbench  1.0.20 版本为例，可以通过以下方式来修改：

      将 `/usr/local/share/sysbench/oltp_common.lua` 文件中的第 [235](https://github.com/akopytov/sysbench/blob/1.0.14/src/lua/oltp_common.lua#L235) 行到第 [240](https://github.com/akopytov/sysbench/blob/1.0.14/src/lua/oltp_common.lua#L240) 行移动到第 198 行以后。

   > **说明**
   >
   > Sysbench 按照“建表 > 插入数据 > 创建索引”的顺序导入数据。对于 TiDB 而言，该方式会花费更多的导入时间。因此，您可以通过调整顺序来加速数据的导入。
   >
   > 此操作为可选操作，仅用于节约数据导入的时间。

2. 执行以下命令，开始导入数据。

   ```
   sysbench oltp_common  \
      --threads=8 \
      --rand-type=uniform \
      --db-driver=mysql \
      --mysql-db=sbtest \
      --mysql-host={tidb_host} \
      --mysql-port=4000 \
      --mysql-user=root \
      --mysql-password={passwd} \
   prepare --tables=16 --table-size=10000000
   ```

   > **说明**
   >
   > 可根据实际需求调整参数，`--threads` 为测试中的并发连接数，可在 “8, 16, 32, 64, 128, 256” 中调整，导入数据时，建议设置为 8 或者 16。



### 步骤五：数据预热

数据预热可将磁盘中的数据载入内存的 block cache 中，预热后的数据对系统整体的性能有较大的改善，建议在每次重启集群后进行一次数据预热。

以 Sysbench 中某张表 sbtest7 为例，执行如下 SQL 语句进行数据预热：

```
SELECT COUNT(pad) FROM sbtest7 USE INDEX (k_7);
```

### 步骤六：统计信息收集

统计信息收集有助于优化器选择更为准确的执行计划，可以通过 `analyze` 命令来收集表 sbtest 的统计信息，每个表都需要统计。

```
ANALYZE TABLE sbtest7;
```

### 步骤七：执行测试命令

- **Point select 测试命令**


  ```
  sysbench oltp_point_select  \
      --threads=1500 \
      --time=300  \
      --report-interval=1 \
      --rand-type=uniform \
      --db-driver=mysql \
      --mysql-db=sbtest \
      --mysql-host={tidb_host} \
      --mysql-port=4000 \
      --mysql-user=root \
      --mysql-password={passwd} \
      run --tables=16  --table-size=10000000
  ```

  

- **Update index 测试命令**

  ```
  sysbench oltp_update_index  \
      --threads=1500 \
      --time=300  \
      --report-interval=1 \
      --rand-type=uniform \
      --db-driver=mysql \
      --mysql-db=sbtest \
      --mysql-host={tidb_host} \
      --mysql-port=4000 \
      --mysql-user=root \
      --mysql-password={passwd} \
      run --tables=16  --table-size=10000000
  ```

  

- **Read-only 测试命令**

  ```
  sysbench oltp_read_only   \
      --threads=1500 \
      --time=300  \
      --report-interval=1 \
      --rand-type=uniform \
      --db-driver=mysql \
      --mysql-db=sbtest \
      --mysql-host={tidb_host} \
      --mysql-port=4000 \
      --mysql-user=root \
      --mysql-password={passwd} \
      run --tables=16  --table-size=10000000
  ```

- **Write_only 测试命令**

  ```
  sysbench oltp_write_only\
      --threads=1500 \
      --time=300  \
      --report-interval=1 \
      --rand-type=uniform \
      --db-driver=mysql \
      --mysql-db=sbtest \
      --mysql-host={tidb_host} \
      --mysql-port=4000 \
      --mysql-user=root \
      --mysql-password={passwd} \
      run --tables=16  --table-size=10000000
  ```

- **Read_write 测试命令**

  ```
  sysbench oltp_read_write\
      --threads=1500 \
      --time=300  \
      --report-interval=1 \
      --rand-type=uniform \
      --db-driver=mysql \
      --mysql-db=sbtest \
      --mysql-host={tidb_host} \
      --mysql-port=4000 \
      --mysql-user=root \
      --mysql-password={passwd} \
      run --tables=16  --table-size=10000000
  ```

  

- **Update_non_index 测试命令**

  ```
  sysbench oltp_update_non_index\
      --threads=1500 \
      --time=300  \
      --report-interval=1 \
      --rand-type=uniform \
      --db-driver=mysql \
      --mysql-db=sbtest \
      --mysql-host={tidb_host} \
      --mysql-port=4000 \
      --mysql-user=root \
      --mysql-password={passwd} \
      run --tables=16  --table-size=10000000
  
  ```

参数说明见下表。

| <span style="display:inline-block;width:150px">参数</span> | <span style="display:inline-block;width:300px">说明</span>   |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| **\-\-threads**                                            | 指定使用的线程数量。                                         |
| **\-\-time**                                               | 总执行时间，单位为秒。默认值为 10。                          |
| **\-\-report-interval**                                    | 表示输出一次测试进度报告的时间间隔，单位为秒。0 表示关闭测试进度报告输出，仅输出最终的报告结果。默认值为 0。 |
| **\-\-rand-type**                                          | 表示随机类型的模式，共有 4 种模式：uniform(固定)、gaussian(高斯)、special(特定)、pareto(帕雷特)。默认值为 special。 |
| **\-\-db-driver**                                          | 表示连接数据库的驱动。默认 mysql。                           |
| **\-\-mysql-db**                                           | 测试的数据库名称。                                           |
| **\-\-mysql-host**                                         | 数据库连接地址。此处应为 TiDB 实例的 IP 地址。               |
| **\-\-mysql--port**                                        | 数据库服务端口。此处应为 TiDB 实例的服务端口，默认为 4000。  |
| **\-\-mysql--user**                                        | 数据库登录用户名。此处应为 TiDB 实例的用户名。               |
| **\-\-mysql--password**                                    | 数据库用户密码。此处应为 TiDB 实例的用户密码。               |
| **\-\-tables**                                             | 表的数量。                                                   |
| **\-\-table-size**                                         | 每张表产生的记录行数。                                       |





## 测试结果
> **说明**
>
> 以下测试结果中， `oltp_point_select` 的测试结果是对单个 TiDB 压测后，再进行求和所得出的结果。而本文中对于 `oltp_point_select` 的测试方式，是使用了 Proxy 的情况，因此得出的实际测试结果会低于以下给出的测试结果。

| <span style="display:inline-block;width:150px">测试类型</span> | <span style="display:inline-block;width:150px">TPS</span> | <span style="display:inline-block;width:150px">QPS</span> | <span style="display:inline-block;width:150px">95%-LATENCY</span> |
| ------------------------------------------------------------ | --------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| oltp_point_select                                            | 539472                                                    | 539472                                                    | 6.20667                                                      |
| oltp_read_write                                              | 7944.77                                                   | 158896                                                    | 264.483                                                      |
| oltp_read_only                                               | 10903                                                     | 174448                                                    | 208.113                                                      |
| oltp_write_only                                              | 13659.3                                                   | 81956                                                     | 230.153                                                      |
| oltp_update_index                                            | 31090.2                                                   | 31090.2                                                   | 137.35                                                       |
| oltp_update_non_index                                        | 124519                                                    | 124519                                                    | 35.17                                                        |

