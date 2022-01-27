---
title: "测试工具"
description: 本小节主要介绍 MongoDB 性能测试工具。 
keyword: MongoDB, 性能测试, 测试工具
weight: 10
collapsible: false
draft: false
---


本次测试使用开源工具 [YCSB](https://github.com/brianfrankcooper/YCSB) 进行 MongoDB 性能测试。

YCSB 全称 “Yahoo！Cloud Serving Benchmark”，是一款用于云服务基础测试的开源工具，适用于常见的 NoSQL 数据库产品的性能测试，例如 Cassandra、MongoDB、HBase、Redis 等。

YCSB 支持配置不同的 Workload 和数据库，并支持指定线程数和并发数等其他参数。

## 下载和安装工具

1. 下载 YCSB 最新源码包。

   ```shell
   $ curl -O --location https://github.com/brianfrankcooper/YCSB/releases/download/0.17.0/ycsb-0.17.0.tar.gz
   ```

2. 解压客户端压缩包。

   ```
   $ tar xfvz ycsb-0.17.0.tar.gz
   ```

3. 进入工作目录。

   ```
   $ cd ycsb-0.17.0
   ```

## 主要文件说明

YCSB 安装成功后，生成主要文件如下：
   
- `ycsb` 文件
  
  `ycsb` 文件是 bin 目录下的一个可执行的文件，用于用户操作的命令行接口。
  
  `ycsb` 文件主逻辑是：解析命令行、设置 java 环境，加载 java-libs，封装成可以执行的 java 命令。

- `workload_template` 参数模板
  
  `workload_template` 参数模板在 workloads 目录下，可根据模板进行自定义参数。详细参数说明，请参见[参数模版](#参数模版说明)。

### 参数模版说明

| <span style="display:inline-block;width:220px">参数</span> | <span style="display:inline-block;width:500px">说明</span> |
| --------------------- | ------------------------ |
| recordcount                      | 表示 YCSB load 阶段加载的记录数。                    |
| operationcount                     | 表示 YCSB run 阶段执行的操作数。                    |
| workload                      | 表示 workload 实现类。                    |
| readallfields                      | 表示查询时，是否读取记录的所有字段。                    |
| readproportion                      | 表示读操作的百分比。                    |
| updateproportion                      | 表示更新操作的百分比。                    |
| scanproportion                      | 表示插入操作的百分比。                    |
| requestdistribution         | 表示请求分布模式，包括 `uniform`、`zipfian`、`latest`三种分布模式。                    |
| mongodb.url            | 表示 MongoDB 的连接地址。                    |
| mongodb.database            | 表示 MongoDB 的数据库名称。                    |
