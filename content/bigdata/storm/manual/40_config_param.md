---
title: "配置参数"
description: 本小节主要介绍如何配置参数。 
keywords: Storm，配置参数
weight: 40
collapsible: false
draft: false
---

配置参数是在部署应用时填写，成为集群配置项的变量。有的配置项是公共的，有的作用于其中的一个或多个角色。您可以在这里修改参数，以更新集群配置。

> **注意：**
>
> 当配置发生变化时，将会重启对应的 Storm 服务。

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **大数据服务** > **Storm 服务**，进入 **Storm** 页面。

3. 点击待修改参数的 Storm ID，进入**集群管理**页面。

4. 点击**配置参数**，配置参数。

   ![](../../_images/config_storm_para.png)

5. 点击**修改属性**，修改参数的值。

6. 修改完成后，点击**保存**，即可保存修改。

## 常用配置项

- storm.zookeeper.session.timeout: Zookeeper客户端的 session 超时时间
- nimbus.childopts: Storm Nimbus 服务的 JVM 参数
- supervisor.childopts: Storm Supervisor 服务的 JVM 参数
- worker.childopts: Storm Worker 进程的 JVM 参数
- drpc.childopts: Storm DRPC 服务的 JVM 参数
- ui.childopts: Storm UI 服务的 JVM 参数
- logviewer.childopts: Storm Logviewer 服务的 JVM 参数
- worker.heap.memory.mb: Worker 进程默认堆内存大小
- nimbus.task.timeout.secs: 若 Nimbus 在该时间内未收到 Task 的心跳消息，则会重新调度该 Task
- nimbus.supervisor.timeout.secs: 若 Nimbus 在该时间内未收到 Supervisor 的心跳消息，则认为该节点失效
- nimbus.task.launch.secs: Task 启动时的超时时间
- supervisor.worker.timeout.secs: 若 Supervisor 在该时间内未收到 Worker 的心跳消息，则会重启该 Worker
- supervisor.slots.ports: Worker 可用的端口列表
- supervisor.worker.start.timeout.secs: Worker 启动时的超时时间
- topology.worker.max.heap.size.mb: 应用于 Topology，限定 Worker 最大可用堆内存
- topology.eventlogger.executors: Event Logger 的进程个数
- topology.acker.executors: Acker 的进程个数

配置项的详细解释请参见 [Storm 官方文档](https://storm.apache.org/releases/)。
