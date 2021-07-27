---
title: "测试 Storm"
description: 本小节主要介绍如何快速测试 Storm。 
keywords: 测试 Storm
weight: 10
collapsible: false
draft: false
---

Storm 创建完成之后可以测试其可用性。

## 查看集群信息

Storm 集群的主机名是按照节点类型定义的：

*   Storm 主节点: -master
*   Storm 从节点: -slave
*   Storm RPC 节点: -rpc

Storm 集群主节点上启动了 Storm UI 服务。Storm UI 服务是一个基于 Web 的监控服务，它不仅可以查看集群、配置、Topology 以及各组件（Spout 和 Bolt）等的信息，还可以暂停、激活、删除 Topology，更是 Topology 运行时的重要调优工具。

为了方便使用 Storm UI，请参考 [VPN 隧道指南](https://docsv3.qingcloud.com/network/vpc/manual/vpn/) 配置VPN，并修改本地 hosts 文件。

>注意：
>
>由于 Ubuntu 主机名对应 IP 127.0.0.1 存在已知问题。所以先要在 **/etc/hosts** 文件里把 127.0.0.1 修改成主机的私网 IP (假设为 192.168.107.20)，同时还需要加上 Storm 主节点，从节点以及 RPC 节点的主机名与私网 IP 的信息，改完后的 /etc/hosts 类似于：

```
192.168.107.20    localhost
192.168.107.20    i-tp5n8o28
192.168.107.70    stmn-8ct52oqk-master
192.168.107.71    stmn-9ss52hui-master
192.168.107.80    stmn-2pfpy7bo-rpc
192.168.107.90    stmn-kflp37ij-slave
192.168.107.91    stmn-oc3uigmo-slave
192.168.107.92    stmn-e0woz5xh-slave
```

VPN 建立后，可通过访问主节点的 8080 端口（例如，[http://stmn-8ct52oqk-master:8080](http://stmn-8ct52oqk-master:8080)）来访问 Storm UI，如下图所示：

![](../../_images/storm-ui-home.png)

## 创建 Storm 客户端节点

为了提交 Storm Topology 做测试，需要创建 Storm 客户端节点。用户可以在青云上创建，也可以自己在本地搭建。在青云上创建 Storm 客户端节点, 首先打开映像市场，在工具分类中找到 Storm Client，然后点击使用，选择主机类型、CPU、内存，并将该主机加入 Storm 集群同一私有网络。如果在本地搭建，请安装 Storm 1.0.1、JRE、Python 等软件。

创建完客户端节点之后，需要修改 hosts 文件，关于 hosts 文件的修改方法，请参考[查看集群信息](#查看集群信息)。

最后，在 ~/.storm 目录下创建 storm.yaml, 并指定 nimbus.seeds 和 drpc.servers，文件内容类似于：

```
nimbus.seeds: ["stmn-8ct52oqk-master", "stmn-9ss52hui-master"]
drpc.servers:
    - "stmn-8ct52oqk-master"
    - "stmn-9ss52hui-master"
    - "stmn-2pfpy7bo-rpc"
```

配置完毕，可进行后续测试。

本指南中所有的测试都是基于 Storm 自带的示例 storm-starter 进行的。

## 测试一：ExclamationTopology

ExclamationTopology 是一个非常简单的 Storm Topology 示例，它的 Bolt 会在每个单词后追加 !!!。

首先，在客户端节点上执行如下 storm jar 命令以提交计算拓扑。

```
/opt/storm/bin/storm jar /opt/storm/examples/storm-starter/storm-starter-topologies-1.0.1.jar org.apache.storm.starter.ExclamationTopology ExclamationTopology
```

下图展示了 storm jar 命令的执行结果：

![](../../_images/ExclamationTopology-Submission.png)

Topology 提交成功后，用户可以在 Storm UI 上看到 ExclamationTopology 的概要信息，例如状态、运行时间、worker 数量、任务总数等，具体如下图所示：

![](../../_images/ExclamationTopology-Summary.png)

点击 ExclamationTopology 链接，可查看该 Topology 的各个组件：

![](../../_images/ExclamationTopology-Components.png)

点击 exclaim1 组件，可以查看运行该组件的 executors，如下图所示:

![](../../_images/ExclamationTopology-Exclaim1.png)

点击 executors 中的 Port 列中的端口号，可进一步查看相应的日志:

![](../../_images/ExclamationTopology-Log.png)

若需要删除 Topology，可以在 Storm UI 的 Topology actions 栏，点击 Kill 按钮，如下图所示：

![](../../_images/ExclamationTopology-UI-Kill.png)

用户也可以通过执行如下 storm kill 命令来删除计算拓扑：

```
/opt/storm/bin/storm kill ExclamationTopology
```

执行结果如下图所示：

![](../../_images/ExclamationTopology-Shell-Kill.png)

## 测试二：ReachTopology

ReachTopology 基于 Storm 可实时计算 Twitter 网站上任意 URL 的 Reach 值，并通过 Storm 分布式 RPC 对外提供服务。

首先，在客户端节点上执行如下 storm jar 命令以提交 ReachTopology。

```
/opt/storm/bin/storm jar /opt/storm/examples/storm-starter/storm-starter-topologies-1.0.1.jar org.apache.storm.starter.ReachTopology ReachTopology remote
```

通过 Storm UI 查看 ReachTopology ，结果如下：

![](../../_images/ReachTopology-Components.png)

Topology 成功提交运行后，接着创建用于发送 RPC 请求的客户端。为此，需创建一个基于 Maven 的 Java 工程，添加 storm-core 依赖包并创建 TestReachTopology 类，代码如下：

```
package test;

import org.apache.storm.utils.DRPCClient;
import org.apache.storm.utils.Utils;
import java.util.Map;

public class TestReachTopology {

    public static void main(String[] args) throws Exception {

        if (args.length

然后，将工程及其所有的依赖打成一个包（“uberjar” 或 “fat jar”）上传到 Storm 客户端节点，并在客户端节点上执行如下类似命令以完成 RPC 请求：
```

```
java -cp starter-client-1.0-SNAPSHOT-jar-with-dependencies.jar test.TestReachTopology stmn-2pfpy7bo-rpc
```

执行结果如下图所示:

![](../../_images/ReachTopology-Client.png)

## 测试三：MultipleLoggerTopology

MultipleLoggerTopology 使用了很多 Logger，并持续地打印各种级别的日志。执行如下命令，可提交该 Topology。

```
/opt/storm/bin/storm jar /opt/storm/examples/storm-starter/storm-starter-topologies-1.0.1.jar org.apache.storm.starter.MultipleLoggerTopology MultipleLoggerTopology
```

通过 Storm UI 可查看其日志，日志中包含了 INFO、WARN、ERROR 等级别的信息，如下图所示：

![](../../_images/MultipleLoggerTopology-ALL-Level.png)

不仅如此，Storm UI 还提供了动态设置 Log 级别的功能。

![](../../_images/ui-set-log-level.png)

按上图设置完毕后，再次查看日志时只能看到 ERROR 级别的信息。

![](../../_images/MultipleLoggerTopology-Error-Level.png)

## 测试四：TridentWordCount

TridentWordCount 使用了 Storm Trident 接口，用于统计单词出现的次数。为了通过 Storm UI 查看 event，需要打开 event logging 功能。在配置组中的找到配置项 topology.eventlogger.executors，将其值设为 1，并应用到 Storm 集群即可开启 event logging 功能。接着执行如下命令以提交 TridentWordCount。

```
/opt/storm/bin/storm jar /opt/storm/examples/storm-starter/storm-starter-topologies-1.0.1.jar org.apache.storm.starter.trident.TridentWordCount TridentWordCount
```

在 Storm UI 的 Component actions 栏，点击 Debug 可开启组件的 event logging 功能。

![](../../_images/ui-debug-event.png)

点击 event 链接，即可查看event.log，如下图所示：

![](../../_images/ui-event-log.png)

用户可以参考[测试二：ReachTopology](#测试二reachtopology) 来创建并执行 RPC 客户端。

## 测试五：SlidingWindowTopology

Storm 提供了流式窗口 API，支持 Sliding Window 和 Tumbling Window。SlidingWindowTopology 展示了这两种窗口 API 的基本使用方法。请执行如下命令以提交 SlidingWindowTopology。

```
/opt/storm/bin/storm jar /opt/storm/examples/storm-starter/storm-starter-topologies-1.0.1.jar org.apache.storm.starter.SlidingWindowTopology SlidingWindowTopology
```

通过 Storm UI 可以查看 tumblingavg 的输出，如下图所示：

![](../../_images/window-log.png)

## 测试六：TridentKafkaWordCount

TridentKafkaWordCount 包含 kafkaBolt 和 wordCounter 两个 Topology，并对外提供 RPC 服务。其中 kafkaBolt Topology 将产生的数据写入到 Kafka，而 wordCounter Topology 用于读取 Kafka 中的数据，并统计各个单词出现的次数。

首先，请参考[消息队列指南](https://docsv3.qingcloud.com/middware/kafka/quick-start/quick_start/)创建 Kafka 集群。为方便描述，假设创建好的 Kafka 集群的 ZooKeeper 连接串为 192.168.100.30:2181/kafka/q-md3ejihc，Broker URL 为192.168.100.9:9092,192.168.100.10:9092。

其次，在 Kafka 客户端，执行如下命令以创建示例所需要的 test 主题。

```
kafka-topics.sh --create --zookeeper 192.168.100.30:2181/kafka/q-md3ejihc --replication-factor 1 --partition 1 --topic test
```

然后，将 TridentKafkaWordCount Topology 与上面创建的 Kafka 集群集成。为此，需要对 TridentKafkaWordCount Topology 做些配置和修改，具体如下：

1. 修改 storm-starter 工程的 pom.xml 文件，将 storm-kafka 和 kafka 包的 scope 设置为 compile，并修改 kafka 包的版本号。该版本号需与 Kafka 集群保持一致。因青云目前提供的 Kafka 版本号为 0.8.2.1，所以修改后的 pom.xml 文件中的 storm-kafka 和 kafka 配置如下：

   ```
     org.apache.storm
     storm-kafka
     ${project.version}
   
     org.apache.kafka
     kafka_2.10
     0.8.2.1
   
           org.apache.zookeeper
           zookeeper
   
           log4j
           log4j
   
           org.slf4j
           slf4j-log4j12
   ```

2. 修改 Topology 提交逻辑，允许远程部署，具体如下：

   ```
   // submit the consumer topology.
   StormSubmitter.submitTopologyWithProgressBar("wordCounter", wordCount.getConsumerConfig(), wordCount.buildConsumerTopology(null));
   
   Config conf = new Config();
   conf.setMaxSpoutPending(20);
   // submit the producer topology.
   StormSubmitter.submitTopologyWithProgressBar("kafkaBolt", conf, wordCount.buildProducerTopology(wordCount.getProducerConfig()));
   ```

3. 因 TransactionalTridentKafkaSpout 在 Storm 1.0.1 中有 Bug（具体请参考[STORM-1728](https://issues.apache.org/jira/browse/STORM-1728) ），故在本示例中，我们将使用 OpaqueTridentKafkaSpout，请参考下文修改 createKafkaSpout 方法：

   ```
   private OpaqueTridentKafkaSpout createKafkaSpout() {
       ZkHosts hosts = new ZkHosts(zkUrl);
       TridentKafkaConfig config = new TridentKafkaConfig(hosts, "test");
       config.scheme = new SchemeAsMultiScheme(new StringScheme());
   
       // Consume new data from the topic
       config.startOffsetTime = kafka.api.OffsetRequest.LatestTime();
       return new OpaqueTridentKafkaSpout(config);
   }
   ```

   按如上步骤修改完毕后，请将 storm-starter 打包并上传到客户端节点，并执行如下命令以提交 Topology。

   ```
   /opt/storm/bin/storm jar /opt/storm/examples/storm-starter/storm-starter-topologies-1.0.1.jar org.apache.storm.starter.trident.TridentKafkaWordCount  192.168.100.30:2181/kafka/q-md3ejihc 192.168.100.9:9092,192.168.100.10:9092
   ```

   通过 Storm UI 查看 kafkaBolt Topology，如下图所示：

   ![](../../_images/kafkaBolt-topology.png)

   通过 Storm UI 查看 wordCounter Topology，如下图所示：

   ![](../../_images/wordCounter-topology.png)

   参考 [_测试二：ReachTopology_](#测试二reachtopology) ，创建并执行 RPC 客户端，结果如下：

   ![](../../_images/wordCounter-client.png)

   此外，也可参考[消息队列指南](https://docsv3.qingcloud.com/middware/kafka/quick-start/quick_start/)来查看 test 主题中的消息。
