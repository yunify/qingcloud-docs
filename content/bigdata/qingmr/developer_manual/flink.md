---
title: "Flink 使用指南"
description: 本小节主要介绍Flink 使用指南。 
keywords: qingmr flink,
weight: 35
collapsible: false
draft: false
---


  

QingMR 中的 Flink 以 Flink on YARN 模式运行，支持创建 Flink YARN Session ( Flink Cluster on YARN )，以及在  YARN 上运行 Standalone Flink job。

## Flink YARN Session ( Flink Cluster on YARN )

创建 Flink YARN Session 会在 YARN 中创建一个常驻的 Flink 集群，用户可以向此 Flink 集群提交 job。 此 Flink 集群占用的资源不会被其他  Flink 集群或者 YARN 管理的其他组件占用。 Flink YARN Session 模式适合运行小规模短时间的 job。

<span id="511"></span>

### 创建 Flink YARN Session

```shell
cd /opt/flink/
./bin/yarn-session.sh
```

yarn-session 常用参数：

| 参数 | 描述 |
| :------ | :------ |
| -n,--container <arg> | taskmanager 的个数 |
| -d,--detached | 以 detached 模式运行，Flink YARN client 会在 Flink Session 创建完成后退出 |
| -jm,--jobManagerMemory <arg> | JobManager 内存大小 |
| -s,--slots <arg> | TaskManager 的 slots 个数，建议与从节点CPU核数相同 |
| -tm,--taskManagerMemory <arg> | TaskManager 内存大小 |

示例，创建一个有拥有 3 个 TaskManager 的 Session，每个 TaskManager 分配 1,024M 内存，每个 TaskManager 有 1 个 slots，Session 以 detached 模式运行。

```shell
cd /opt/flink/
./bin/yarn-session.sh -n 3 -tm 1024 -s 1 -d
```

Flink YARN Session 启动成功后，会打印 JobManager 地址，如下所示。

```shell
JobManager Web Interface: http://i-0niswdgh:44000
```

### 向 Flink YARN Session 提交 job

```shell
cd /opt/flink/
./bin/flink run <jar-file> <arguments>
```

Flink run 常用参数：

| 参数 | 描述 |
| :------ | :------ |
| -c,--class <classname> | 带有程序入口点的类 |
| -m,--jobmanager <arg> | JobManager 地址 |


示例，运行 Wordcount。

```shell
cd /opt/flink/
./bin/flink run -m i-0niswdgh:44000 /opt/flink/examples/batch/WordCount.jar --input /
```

### 停止 Flink YARN Session

执行以下命令，即可停止 Flink YARN Session。

```shell
yarn application -kill Application-Id
```

以 detached 模式运行的 Flink YARN Session 启动成功后，会打印 Application-Id：

```shell
The Flink YARN client has been started in detached mode. In order to stop Flink on YARN, use the following command or a YARN web interface to stop it:
yarn application -kill application_1571901640946_0004
```

>`application_1571901640946_0004` 即为 Application-Id。

也可以通过 YARN 命令查找 Flink YARN Session 的 Application-Id。

```shell
yarn application -list
```

## Standalone Flink job

用户可以直接在 YARN 上运行 Standalone Flink job，不需要提前启动 Flink 集群。 多个 Flink job 共同运行时不会相互影响。 此模式适合运行大规模长时间的 job。

```shell
cd /opt/flink/
./bin/flink run -m yarn-cluster ./examples/batch/WordCount.jar
```

## Flink historyserver

Flink 已完成的job存放在 hdfs:///flink/completed-jobs 目录下，默认保存时间 30 天，可以通过以下参数修改。

![日志保存时间](../../_images/flink_archive.png)

FLink historyserver 提供了对已完成的 job 的查看功能，historyserver部署在 HDFS 主节点上，您可以打开 web 浏览器，访问 http://host_name:8082/ 。请将其中 host_name 替换为具体的 HDFS 主节点 IP 地址或主机名。

## Flink日志

Flink 日志存放在 /data/flink/log 目录下，默认保存 30 个文件，可以通过以下参数修改。

![日志保存时间](../../_images/flink_log.png)
