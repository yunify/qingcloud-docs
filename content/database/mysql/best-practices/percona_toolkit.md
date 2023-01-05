---
title: "使用 percona-toolkit 工具分析 MySQL 慢日志"
description: 本小节主要介绍如何通过 percona-toolkit 工具进行 MySQL 慢日志分析。 
keyword: 数据库,MySQL PLus,关系型数据库,MySQL,慢日志分析 
weight: 03
collapsible: false
draft: false
---

默认总耗时时长超过 3s 的语句会被记录到慢日志中。时长可通过参数 Long_query_time 进行调整，参数详细介绍及修改参数的步骤请参见[参数介绍](../../manual/config_para/config_para_info)和[修改配置参数](../../manual/config_para/modify_para)。

本小节主要介绍如何通过 percona-toolkit 工具进行 MySQL 慢日志分析。

## 步骤一：安装 percona-toolkit 工具集

需要准备一台 Linux 云服务器，用于安装 percona-toolkit 工具集。

1. 准备一台 Linux 云服务器。

   > **说明**
   >
   > 建议Linux 云服务器与 MySQL PLus 集群部署在同一 VPC 下。若 Linux 云服务器与 MySQL PLus 网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/vpn_intro/) 等方式打通网络。

2. 登录 Linux 云服务器。
3. 执行以下命令，下载 percona-toolkit 工具集。

   ```
   wget https://downloads.percona.com/downloads/percona-toolkit/3.5.0/binary/tarball/percona-toolkit-3.5.0_x86_64.tar.gz
   ```
4. 执行以下命令，解压安装包。
   
   ```
   tar -zxvf ./percona-toolkit-3.5.0_x86_64.tar.gz
   ```
5. 安装包解压后即可使用 percona-toolkit 工具。
   * 工具集路径：./percona-toolkit-3.5.0/bin/。
   * 慢日志统计工具路径：./percona-toolkit-3.5.0/bin/pt-query-digest。

## 步骤二：获取慢日志

详细操作请参见[下载 MySQL 日志](../download_mysql_log/)。

## 步骤三：分析慢日志

1. 将获取到的慢日志传到 percona-toolkit 工具集所在的 Linux 云服务器上。

   假如慢日志在 Linux 云服务器上的保存路径为：/data/mysql-log/mysql-slow/mysql-slow.log。

2. 登录 Linux 云服务器。
3. 执行以下命令，分析 mysql-slow.log 中的相关慢日志，并输出分析结果（本文以输出到文本文件 A.txt 为例）。

   ```
   /home/ubuntu/percona-toolkit-3.5.0/bin/pt-query-digest/data/mysql-log/mysql-slow/mysql-slow.log > /data/A.txt
   ```
   **参数说明**：
   
   * **/home/ubuntu/percona-toolkit-3.5.0/bin/pt-query-digest**：慢日志统计工具路径。
   * **/data/mysql-log/mysql-slow/mysql-slow.log**：慢日志保存路径。
   * **A.txt**：分析结果的文本文件名称，可以自定义。

## 分析结果示例

打开 A.txt 文件，即可看到慢日志分析结果。

```
# 200ms user time, 10ms system time, 29.74M rss, 36.67M vsz
# Current date: Thu Dec 29 15:49:04 2022
# Hostname: i-6emrs19i
# Files: /data/mysql-log/mysql-slow/mysql-slow.log
# Overall: 8 total, 2 unique, 0.00 QPS, 0.03x concurrency ________________
# Time range: 2022-12-29T14:16:26 to 2022-12-29T15:38:52
# Attribute          total     min     max     avg     95%  stddev  median
# ============     ======= ======= ======= ======= ======= ======= =======
# Exec time           158s      3s     51s     20s     49s     15s     20s
# Lock time            2ms   148us     1ms   306us     1ms   276us   224us
# Rows sent              0       0       0       0       0       0       0
# Rows examine      33.50M   1.00M   8.00M   4.19M   7.65M   2.54M   4.93M
# Rows affecte      20.75M 512.00k   8.00M   2.59M   7.65M   2.22M   2.42M
# Bytes sent           446      14      62   55.75   59.77   15.19   59.77
# Query size           407      22      55   50.88   54.21   10.83   54.21

# Profile
# Rank Query ID                           Response time  Calls R/Call  V/M
# ==== ================================== ============== ===== ======= ===
#    1 0x1F32B88358F38D34F85C6FAE9E2CE01A 106.5287 67.5%     7 15.2184  7.13 INSERT SELECT apple_test
#    2 0xCED5D8C62622BEA1DE7AD589E9A48AA9  51.2485 32.5%     1 51.2485  0.00 DELETE apple_test

# Query 1: 0.00 QPS, 0.02x concurrency, ID 0x1F32B88358F38D34F85C6FAE9E2CE01A at byte 3850
# This item is included in the report because it matches --limit.
# Scores: V/M = 7.13
# Time range: 2022-12-29T14:16:26 to 2022-12-29T15:38:52
# Attribute    pct   total     min     max     avg     95%  stddev  median
# ============ === ======= ======= ======= ======= ======= ======= =======
# Count         87       7
# Exec time     67    107s      3s     36s     15s     35s     10s     11s
# Lock time     57     1ms   148us   315us   202us   301us    52us   159us
# Rows sent      0       0       0       0       0       0       0       0
# Rows examine  76  25.50M   1.00M   8.00M   3.64M   7.65M   2.29M   2.88M
# Rows affecte  61  12.75M 512.00k   4.00M   1.82M   3.86M   1.14M   1.46M
# Bytes sent    96     432      61      62   61.71   59.77       0   59.77
# Query size    94     385      55      55      55      55       0      55
# String:
# Databases    testdb
# Hosts        localhost
# Last errno   0
# Users        root
# Query_time distribution
#   1us
#  10us
# 100us
#   1ms
#  10ms
# 100ms
#    1s  ################################################
#  10s+  ################################################################
# Tables
#    SHOW TABLE STATUS FROM `testdb` LIKE 'apple_test'\G
#    SHOW CREATE TABLE `testdb`.`apple_test`\G
insert into apple_test(a, b) select a,b from apple_test\G

# Query 2: 0 QPS, 0x concurrency, ID 0xCED5D8C62622BEA1DE7AD589E9A48AA9 at byte 4190
# This item is included in the report because it matches --limit.
# Scores: V/M = 0.00
# Time range: all events occurred at 2022-12-29T15:28:18
# Attribute    pct   total     min     max     avg     95%  stddev  median
# ============ === ======= ======= ======= ======= ======= ======= =======
# Count         12       1
# Exec time     32     51s     51s     51s     51s     51s       0     51s
# Lock time     42     1ms     1ms     1ms     1ms     1ms       0     1ms
# Rows sent      0       0       0       0       0       0       0       0
# Rows examine  23   8.00M   8.00M   8.00M   8.00M   8.00M       0   8.00M
# Rows affecte  38   8.00M   8.00M   8.00M   8.00M   8.00M       0   8.00M
# Bytes sent     3      14      14      14      14      14       0      14
# Query size     5      22      22      22      22      22       0      22
# String:
# Databases    testdb
# Hosts        localhost
# Last errno   0
# Users        root
# Query_time distribution
#   1us
#  10us
# 100us
#   1ms
#  10ms
# 100ms
#    1s
#  10s+  ################################################################
# Tables
#    SHOW TABLE STATUS FROM `testdb` LIKE 'apple_test'\G
#    SHOW CREATE TABLE `testdb`.`apple_test`\G
delete from apple_test\G
# Converted for EXPLAIN
# EXPLAIN /*!50100 PARTITIONS*/
select * from  apple_test\G
```

## 分析结果说明

结果示例中有两类耗时较长的语句，如下：   
```
insert into apple_test(a, b) select a,b from apple_test; 
delete from apple_test;
```

可将结果分为三部分：

* 第一部分：总体概要信息

   ```
   # 200ms user time, 10ms system time, 29.74M rss, 36.67M vsz
   # Current date: Thu Dec 29 15:49:04 2022
   # Hostname: i-6emrs19i
   # Files: /data/mysql-log/mysql-slow/mysql-slow.log
   # Overall: 8 total, 2 unique, 0.00 QPS, 0.03x concurrency ________________
   # Time range: 2022-12-29T14:16:26 to 2022-12-29T15:38:52
   # Attribute          total     min     max     avg     95%  stddev  median
   # ============     ======= ======= ======= ======= ======= ======= =======
   # Exec time           158s      3s     51s     20s     49s     15s     20s
   # Lock time            2ms   148us     1ms   306us     1ms   276us   224us
   # Rows sent              0       0       0       0       0       0       0
   # Rows examine      33.50M   1.00M   8.00M   4.19M   7.65M   2.54M   4.93M
   # Rows affecte      20.75M 512.00k   8.00M   2.59M   7.65M   2.22M   2.42M
   # Bytes sent           446      14      62   55.75   59.77   15.19   59.77
   # Query size           407      22      55   50.88   54.21   10.83   54.21
   ```
   参数说明如下：
   |<span style="display:inline-block;width:120px">参数名称</span> |<span style="display:inline-block;width:410px">参数说明</span>|
   |:----|:----|
   | Current date  | 分析结果生成的时间。 |
   | Hostname | 主机名。 |  
   | Files |  分析的文件所在路径。 |  
   | Overall |  分析的 SQL 数量统计。<br />本示例中总共存在的慢 SQL 有 8 条，实际上分为两类，insert 和 delete。<li>total 为总语句数量。<li>unique 为唯一查询数量，即对查询条件进行参数化以后，统计的总共有多少个不同的查询。 |
   | Time range | 本次分析中所以慢 SQL 所在的时间段。   |
   | Exec time  | SQL 执行时间。<li>total 总时间。<li>min 最短时间。<li>max 最长时间。<li>avg 平均时间。<li>95% 把所有耗时从小到大排列，位置最接近 95% 的那个数。<li>stddev 标准偏差。<li>median 中位数。   |
   | Lock time   | 锁占用的时间。   |
   | Row sent   | 发送到客户端的行数。   |
   | Row examine   | SQL 语句扫描行数。   |
   | Bytes sent   | 发送到客户端的字节数。   |
   | Query size   | 查询的字符数。   |

* 第二部分：SQL 概要信息

   ```
   # Profile
   # Rank Query ID                           Response time  Calls R/Call  V/M
   # ==== ================================== ============== ===== ======= ===
   #    1 0x1F32B88358F38D34F85C6FAE9E2CE01A 106.5287 67.5%     7 15.2184  7.13 INSERT SELECT apple_test
   #    2 0xCED5D8C62622BEA1DE7AD589E9A48AA9  51.2485 32.5%     1 51.2485  0.00 DELETE apple_test
   ```
   参数说明如下：
   |<span style="display:inline-block;width:120px">参数名称</span> |<span style="display:inline-block;width:410px">参数说明</span>|
   |:----|:----|
   | Rank  | SQL 在此次统计中的耗时排名。 |
   | Query ID | pt-query-digest 为此类 SQL 生成的唯一 ID，可以通过此 ID 找到本 SQL 对应的详细信息。|  
   | Response time |  此类 SQL 总耗时时间。全部 Query 加起来就是所有慢 SQL 的总耗时时间。<br />百分比数值是该类 SQL 耗时占此次统计慢 SQL 总耗时时间的百分比。全部 Query 加起来就是 100%。 | 
   | calls | 执行次数，即本次分析总共有多少条这种类型的 SQL 语句。 | 
   | R/Call | 平均每次执行的响应时间。 | 
   | V/M | 响应时间的方差与平均比。 | 
   | - | 大致的 SQL 语句，体现 SQL 的类型。 | 

* 第三部分：SQL 详细信息

   ```
   # Query 1: 0.00 QPS, 0.02x concurrency, ID 0x1F32B88358F38D34F85C6FAE9E2CE01A at byte 3850
   # This item is included in the report because it matches --limit.
   # Scores: V/M = 7.13
   # Time range: 2022-12-29T14:16:26 to 2022-12-29T15:38:52
   # Attribute    pct   total     min     max     avg     95%  stddev  median
   # ============ === ======= ======= ======= ======= ======= ======= =======
   # Count         87       7
   # Exec time     67    107s      3s     36s     15s     35s     10s     11s
   # Lock time     57     1ms   148us   315us   202us   301us    52us   159us
   # Rows sent      0       0       0       0       0       0       0       0
   # Rows examine  76  25.50M   1.00M   8.00M   3.64M   7.65M   2.29M   2.88M
   # Rows affecte  61  12.75M 512.00k   4.00M   1.82M   3.86M   1.14M   1.46M
   # Bytes sent    96     432      61      62   61.71   59.77       0   59.77
   # Query size    94     385      55      55      55      55       0      55
   # String:
   # Databases    testdb
   # Hosts        localhost
   # Last errno   0
   # Users        root
   # Query_time distribution
   #   1us
   #  10us
   # 100us
   #   1ms
   #  10ms
   # 100ms
   #    1s  ################################################
   #  10s+  ################################################################
   # Tables
   #    SHOW TABLE STATUS FROM `testdb` LIKE 'apple_test'\G
   #    SHOW CREATE TABLE `testdb`.`apple_test`\G
   insert into apple_test(a, b) select a,b from apple_test\G

   # Query 2: 0 QPS, 0x concurrency, ID 0xCED5D8C62622BEA1DE7AD589E9A48AA9 at byte 4190
   # This item is included in the report because it matches --limit.
   # Scores: V/M = 0.00
   # Time range: all events occurred at 2022-12-29T15:28:18
   # Attribute    pct   total     min     max     avg     95%  stddev  median
   # ============ === ======= ======= ======= ======= ======= ======= =======
   # Count         12       1
   # Exec time     32     51s     51s     51s     51s     51s       0     51s
   # Lock time     42     1ms     1ms     1ms     1ms     1ms       0     1ms
   # Rows sent      0       0       0       0       0       0       0       0
   # Rows examine  23   8.00M   8.00M   8.00M   8.00M   8.00M       0   8.00M
   # Rows affecte  38   8.00M   8.00M   8.00M   8.00M   8.00M       0   8.00M
   # Bytes sent     3      14      14      14      14      14       0      14
   # Query size     5      22      22      22      22      22       0      22
   # String:
   # Databases    testdb
   # Hosts        localhost
   # Last errno   0
   # Users        root
   # Query_time distribution
   #   1us
   #  10us
   # 100us
   #   1ms
   #  10ms
   # 100ms
   #    1s
   #  10s+  ################################################################
   # Tables
   #    SHOW TABLE STATUS FROM `testdb` LIKE 'apple_test'\G
   #    SHOW CREATE TABLE `testdb`.`apple_test`\G
   delete from apple_test\G
   # Converted for EXPLAIN
   # EXPLAIN /*!50100 PARTITIONS*/
   select * from  apple_test\G
   ```

   * Query 1、Query 2 是此次分析结果中出现的两类慢 SQL。
   * 参数说明：   
     列表参数可以参考第一部分，其他参数说明如下：
      
      |<span style="display:inline-block;width:120px">参数名称</span> |<span style="display:inline-block;width:410px">参数说明</span>|
      |:----|:----|
      | Databases | SQL 执行的数据库。 |
      | Users | SQL 执行的用户。 | 
      | Query_time distribution | 查询时长的分布，此次统计中的两个 SQL 语句执行时间都在秒级和十秒级。 | 

   * 如下表示如果用户想优化在慢日志中看到的 SQL 语句，可能需要检查表的状态以及表结构，这些就是相关的 SQL 语句。
      ```
      SHOW TABLE STATUS FROM `testdb` LIKE 'apple_test'\G
      SHOW CREATE TABLE `testdb`.`apple_test`\G
      ```  

   * `delete from apple_test\G` 是此类慢 SQL 语句的示例。

   * 如下是 SQL 语句的相关执行计划，但是对于非 select 语句通常不能再次执行来查看执行计划，因此 pt-query-digest 会尝试将 SQL 转化为等效的 select 语句然后展示出来。

      ```
      Converted for EXPLAIN
      EXPLAIN /*!50100 PARTITIONS*/
      select * from  apple_test\G
      ```
