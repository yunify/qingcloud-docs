---
title: "基准测试"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
weight: 120
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

基准测试建议您自己来做，以获得对测试数据最真实的第一手资料。