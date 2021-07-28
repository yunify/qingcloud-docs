---
title: "基准测试"
description: 本小节主要介绍如何进行 MySQL Plus 集群基准测试。 
keywords: mysql plus 基准测试；
weight: 05
collapsible: false
draft: false
---

数据库基准性能测试为 sysbench 0.5。

## 测试方法

1. 准备测试数据

   ```shell
   ./sysbench0.5_base/bin/sysbench --mysql-host=192.168.0.3 --mysql-port=3306 --mysql-user=test --mysql-password=Test_2019 --mysql-db=testdb --mysql-table-engine=innodb --test=./sysbench0.5_base/share/sysbench/oltp.lua --oltp_tables_count=20 --oltp-table-size=1000000 --oltp-index-updates=2 --oltp-read-only=off --rand-type=special --max-time=600 --max-requests=0 --percentile=99 --oltp-point-selects=4 --num-threads=128 prepare
   ```

2. 运行测试

   ```shell
   ./sysbench0.5_base/bin/sysbench --mysql-host=192.168.0.244 --mysql-port=3306 --mysql-user=test --mysql-password=Test_2019 --mysql-db=testdb --mysql-table-engine=innodb --test=./sysbench0.5_base/share/sysbench/oltp.lua --oltp_tables_count=20 --oltp-table-size=100000 --oltp-index-updates=2 --oltp-read-only=off --rand-type=special --max-time=600 --max-requests=0 --percentile=99 --oltp-point-selects=4 --num-threads=128 run
   ```

基准测试建议用户自行选择方执行，以获得对 MySQL Plus 最真实性能参考。
