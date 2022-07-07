---
title: "SlidingWindowTopology"
description: 本小节主要介绍 SlidingWindowTopology 示例。 
keyword: Storm,SlidingWindowTopology
weight: 50
collapsible: false
draft: false
---

Storm 提供了流式窗口 API，支持 Sliding Window 和 Tumbling Window。

SlidingWindowTopology 展示了这两种窗口 API 的基本使用方法。

## 操作步骤

1. [登录客户端节点](/bigdata/storm/manual/65_storm_client)。
2. 请执行如下命令，提交 SlidingWindowTopology。

    ```
    /opt/storm/bin/storm jar /opt/storm/examples/storm-starter/storm-starter-1.1.1.jar org.apache.storm.starter.SlidingWindowTopology SlidingWindowTopology
    ```

3. 通过 Storm UI 可以查看 tumblingavg 的输出，如下图所示。

    ![](../../../_images/window-log.png)
