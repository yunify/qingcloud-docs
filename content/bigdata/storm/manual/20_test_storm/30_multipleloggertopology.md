---
title: "MultipleLoggerTopology"
description: 本小节主要介绍 MultipleLoggerTopology 示例。 
keyword: Storm,MultipleLoggerTopology
weight: 30
collapsible: false
draft: false
---

MultipleLoggerTopology 使用了很多 Logger，并持续地打印各种级别的日志。

## 操作步骤

1. [登录客户端节点](/bigdata/storm/manual/65_storm_client)。
2. 执行如下命令，可提交该 Topology。

    ```
    /opt/storm/bin/storm jar /opt/storm/examples/storm-starter/storm-starter-1.1.1.jar org.apache.storm.starter.MultipleLoggerTopology MultipleLoggerTopology
    ```

3. 通过 [Storm UI](/bigdata/storm/manual/70_storm_ui) 可查看其日志，日志中包含了 INFO、WARN、ERROR 等级别的信息，如下图所示。

    ![](../../../_images/MultipleLoggerTopology-ALL-Level.png)

4. Storm UI 还提供了动态设置 Log 级别的功能。

    ![](../../../_images/ui-set-log-level.png)

    按上图设置完毕后，再次查看日志时只能看到 ERROR 级别的信息。

    ![](../../../_images/MultipleLoggerTopology-Error-Level.png)
