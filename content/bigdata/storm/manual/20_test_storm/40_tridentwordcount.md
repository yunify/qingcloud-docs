---
title: "TridentWordCount"
description: 本小节主要介绍 TridentWordCount 示例。 
keyword: Storm,TridentWordCount
weight: 40
collapsible: false
draft: false
---

TridentWordCount 使用了 Storm Trident 接口，用于统计单词出现的次数。

## 前提条件

为了通过 Storm UI 查看 event，需要打开 event logging 功能。在配置组中的找到配置项 topology.eventlogger.executors，将其值设为 1，集群即可开启 event logging 功能。

## 操作步骤

1. [登录客户端节点](/bigdata/storm/manual/65_storm_client)。
2. 执行如下命令以，提交 TridentWordCount。

    ```
    /opt/storm/bin/storm jar /opt/storm/examples/storm-starter/storm-starter-1.1.1.jar org.apache.storm.starter.trident.TridentWordCount TridentWordCount
    ```

3. 通过 [Storm UI](/bigdata/storm/manual/70_storm_ui) 打开 debug 功能。 然后就可以通过 worker port 链接到日志，找到 events.log 文件，点击 **switch file** 可以看到如下结果。

    ![](../../../_images/ui-debug-event.png)
