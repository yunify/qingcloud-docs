---
title: "性能测试"
description: 本小节主要介绍性能测试。 
keywords: Storm, 性能测试
weight: 40
collapsible: false
draft: false
---

参考 [yahoo/streaming-benchmarks](https://github.com/yahoo/streaming-benchmarks)，我们对 Storm 集群做了延迟时间性能测试，以下是测试报告。

## 测试条件

北京3区-A，在一个 VPC 网络下创建 Storm 集群、Kafka 集群、Zookeeper 集群、Redis 以及若干主机，具体配置如下表所示。

| 资源      | 版本    | 主机类型   | CPU  | 内存 | 存储 | 备注                             |
| --------- | ------- | ---------- | ---- | ---- | ---- | -------------------------------- |
| Storm     | 1.0.1   | 超高性能型 | 8核  | 16G  | 10G  | 10个从节点                       |
| Kafka     | 0.8.2.1 | 超高性能型 | 8核  | 32G  | 30G  | 5个节点                          |
| Zookeeper | 3.4.6   | 超高性能型 | 4核  | 8G   |      | 为 Storm 和 Kafka 各创建一个集群 |
| Redis     | 3.0.5   | 超高性能型 |      | 8G   |      | 1个节点                          |
| Instance  |         | 性能型     | 4核  | 8G   |      | 基于Ubuntu 14.04，运行 Load 脚本 |

## 测试步骤

1. 启动Storm 集群、Kafka 集群、Zookeeper 集群、Redis 以及 Load 主机，并在 Load 主机上安装 [Leiningen](http://leiningen.org/#install) ，并下载 [yahoo/streaming-benchmarks](https://github.com/yahoo/streaming-benchmarks) 中的仓库代码。

   其次，在 Kafka 集群中创建 ad-events Topic（分区数为5），并参考 [yahoo/streaming-benchmarks](https://github.com/yahoo/streaming-benchmarks) 中的脚本初始化 Redis 中的数据。

   > 注意：
   > 每轮测试前都需要重新初始化数据。

   由于 [yahoo/streaming-benchmarks](https://github.com/yahoo/streaming-benchmarks) 使用的 Storm 版本为 0.10.0/0.11.0，因此需要修改测试用的 storm.benchmark.AdvertisingTopology 类，具体改法如下所示。

   a. 将代码中的 **backtype.storm** 替换为 **org.apache.storm**。

   b. 将代码中的 **storm.kafka** 替换为 **org.apache.storm.kafka**。

   c. 在 **localConf.yaml** 中添加配置参数 **zookeeper.brokerZkPath**，并根据 Kafka 集群配置设置其值，例如: “/kafka/q-cvhyvab7/brokers”。

   d. 按照如下方式，修改代码中使用的 ZkHost。

   ```
   String brokerZkPath = (String)commonConfig.get("zookeeper.brokerZkPath");
   ZkHosts hosts = new ZkHosts(zkServerHosts, brokerZkPath);
   ```

   修改完毕，重新编译打包，并部署到 Storm 集群中进行测试。

2. 通过在多个主机上同时执行如下类似命令以运行 Load 脚本，并持续运行半小时。

   ```
   cd data
   lein run -r -t 15000 --configPath ../conf/localConf.yaml
   ```

   > 注意：
   >
   > 为产生每秒 450000 个 Tulples，需运行 30 个 Load 主机，每个主机每秒产生 15000 个 Tuples。

3. 运行如下类似命令生成测试结果（seen.txt 和 updated.txt）。

   ```
   cd data
   lein run -g --configPath ../conf/localConf.yaml
   ```

## 测试结果

<img src="../../_images/benchmarks.png" style="zoom:50%;" />
