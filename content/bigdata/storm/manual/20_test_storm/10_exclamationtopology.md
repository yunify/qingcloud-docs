---
title: "ExclamationTopology"
description: 本小节主要介绍如何快速使用 Storm 集群。 
keyword: Storm
weight: 10
collapsible: false
draft: false
---

ExclamationTopology 是一个非常简单的 Storm Topology 示例，它的 Bolt 会在每个单词后追加。

## 操作步骤

1. [登录客户端节点](/bigdata/storm/manual/65_storm_client)。
2. 执行如下 storm jar 命令，提交计算拓扑。

    ```
    /opt/storm/bin/storm jar /opt/storm/examples/storm-starter/storm-starter-1.1.1.jar org.apache.storm.starter.ExclamationTopology ExclamationTopology
    ```

    storm jar 命令的执行结果如下：

    ![](../../../_images/ExclamationTopology-Submission.png)

3. Topology 提交成功后，您可以在 [Storm UI](/bigdata/storm/manual/70_storm_ui) 上看到 ExclamationTopology 的概要信息，例如状态、运行时间、worker 数量、任务总数等，具体如下图所示。

    ![](../../../_images/ExclamationTopology-Summary.png)

    1. 点击 ExclamationTopology 链接，可查看该 Topology 的各个组件。

        ![](../../../_images/ExclamationTopology-Components.png)

    2. 点击 exclaim1 组件，可以查看运行该组件的 executors。

        ![](../../../_images/ExclamationTopology-Exclaim1.png)

    3. 点击 executors 中的 Port 列中的端口号，可进一步查看相应的日志。

        ![](../../../_images/ExclamationTopology-Log.png)

**删除 Topology**

- 可以在 Storm UI 的 Topology actions 栏，点击 Kill 按钮。

    ![](../../../_images/ExclamationTopology-UI-Kill.png)

- 也可以通过执行如下 storm kill 命令来删除计算拓扑。

    ```
    /opt/storm/bin/storm kill ExclamationTopology
    ```
