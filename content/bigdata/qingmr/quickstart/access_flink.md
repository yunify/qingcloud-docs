---
title: "提交 Flink job"
description: 本小节主要介绍如何快速使用Flink组件。 
keyword: 云计算,大数据,QingMR,QingMR 实例,Flink组件,Flink作业,快速入门,Flink job
weight: 30
collapsible: false
draft: false
---

本小节主要介绍如何快速使用 Flink 组件运行 wordcount 作业。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 QingMR 集群，且集群状态为**活跃**。
- 已打通集群网络，使集群云服务器能面向互联网提供服务。例如使用端口转发或 VPN 等方式打通网络，详细操作请参见[访问组件 Web 页面](../../manual/access_method)。

## 运行 Flink job

QingMR 中的 Flink 以 Flink on YARN 模式运行，可以创建 Flink YARN Session ( Flink Cluster on YARN )，以及在  YARN 上运行 Standalone Flink job。

- [Flink YARN Session](#flink-yarn-session--flink-cluster-on-yarn-) 模式适合运行小规模短时间的 job。  
- [Standalone Flink job](#standalone-flink-job) 模式适合运行大规模长时间的 job。

### Flink YARN Session ( Flink Cluster on YARN )

创建 Flink YARN Session 会在 YARN 中创建一个常驻的 Flink 集群，用户可以向此 Flink 集群提交 job。 此 Flink 集群占用的资源不会被其他 Flink 集群或者 YARN 管理的其他组件占用。 

1. 创建 Flink YARN Session。

   在 Client 节点上执行以下命令，创建一个有拥有 3 个 TaskManager 的 Session，每个 TaskManager 分配 1,024M 内存，每个 TaskManager 有 1 个 slots，Session 以 detached 模式运行。关于 yarn-session.sh 脚本的详细说明，请参见 [Flink 使用指南](../../developer_manual/flink/)。

   ```shell
   cd /opt/flink/
   ./bin/yarn-session.sh -n 3 -tm 1024 -s 1 -d
   ```

   Flink YARN Session 启动成功后，会打印 JobManager 地址，如下所示。

   ```shell
   JobManager Web Interface: http://i-0niswdgh:44000
   ```

   > **说明**
   >  
   > - 请记住该地址，执行 Flink job 后，您可以通过该地址打开 Flink YARN Session WEB UI 界面，查看任务运行情况。
   > - 您可以手动将 `i-0niswdgh` 替换为服务器的 IP 地址，或将 Client 节点的 hosts（路径：/etc/hosts）配置到本地 PC。

2. 向 Flink YARN Session 提交 job。

   重新打开一个 Client 命令行窗口，并执行以下命令，运行 WordCount。

   ```shell
   cd /opt/flink/
   ./bin/flink run -m i-0niswdgh:44000 /opt/flink/examples/batch/WordCount.jar --input /
   ```

### Standalone Flink job

您可以直接在 YARN 上运行 Standalone Flink job，不需要提前启动 Flink 集群。 多个 Flink job 共同运行时不会相互影响。 

在 Client 节点上执行以下命令，运行 WordCount。

```shell
cd /opt/flink/
./bin/flink run -m yarn-cluster ./examples/batch/WordCount.jar
```

## 查看 Flink 作业信息

QingMR 2.5.0 及之后版本才支持通过浏览器查看 Flink 作业信息。

### Flink YARN Session WEB UI

对于在 session 中提交的 job，您可以通过 Flink YARN Session WEB UI 方式查看作业信息。Flink YARN Session WEB UI 展示的是此 Session 正在运行的 job 和 1 小时内的已完成 job。 

在浏览器输入 http://< JobManager-Web-Interface >，即可查看 Flink YARN Session WEB UI。

> **说明**
> 
> JobManager-Web-Interface 为 JobManager 地址，详见[创建 Flink YARN Session](#flink-yarn-session--flink-cluster-on-yarn-)。

![Flink session WEB UI](../../_images/flink_session_dashboard.png)

也可以通过此 WEB UI 向 Flink YARN Session 提交 job。

### Flink historyserver WEB UI

Flink historyserver WEB UI 展示的是已完成 job 信息，包括向 Flink YARN Session 提交的 job 和 Standalone Flink job。

在浏览器输入 http://< HDFS 主节点 IP >:8082，即可查看 Flink YARN Session WEB UI。

![Flink historyserver WEB UI](../../_images/flink_historyserver_dashboard.png)

