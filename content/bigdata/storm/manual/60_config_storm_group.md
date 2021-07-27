---
title: "配置 Storm 配置组"
description: 本小节主要介绍如何配置 Storm 配置组。 
keywords: QingMR 实例, 创建集群,创建实例
weight: 60
collapsible: false
draft: false
---

通过 Storm 配置组来管理 Storm 服务的配置。Storm 服务和 Storm 配置组是解耦的，您可以创建多个独立的配置组，并应用到不同的 Storm 服务。

> 注意：
>
> Storm 服务在运行过程中，也可以随时变更配置组。

## 创建新的 Storm 配置组

默认情况下，我们会为每个用户创建一个缺省配置组。用户也可以创建新的配置组，如下图所示。

![](../../_images/create_storm_parameter_group.png)

> 注意：
>
> 缺省配置组不可以被删除。

## 修改配置项

点击该新建的 Storm 配置组，我们可以对每项配置项进行修改，如下图所示。

![](../../_images/modify_storm_parameters.png)

修改完后，我们需要进行 **保存**，并点击**应用**让新的配置生效。

> 注意：
>
> 当配置发生变化时，将会重启对应的 Storm 服务。

## 常用配置项

配置项的详细解释请参见 [Storm 官方文档](https://storm.apache.org/releases/)。

| 参数                                 | 参数说明                                                     |
| ------------------------------------ | ------------------------------------------------------------ |
| storm.zookeeper.session.timeout      | Zookeeper客户端的 session 超时时间                           |
| nimbus.childopts                     | Storm Nimbus 服务的 JVM 参数                                 |
| supervisor.childopts                 | Storm Supervisor 服务的 JVM 参数                             |
| worker.childopts                     | Storm Worker 进程的 JVM 参数                                 |
| drpc.childopts                       | Storm DRPC 服务的 JVM 参数                                   |
| ui.childopts                         | Storm UI 服务的 JVM 参数                                     |
| logviewer.childopts                  | Storm Logviewer 服务的 JVM 参数                              |
| pacemaker.childopts                  | Storm Pacemaker 服务的 JVM 参数                              |
| worker.heap.memory.mb                | Worker 进程默认堆内存大小                                    |
| nimbus.task.timeout.secs             | 若 Nimbus 在该时间内未收到 Task 的心跳消息，则会重新调度该 Task |
| nimbus.supervisor.timeout.secs       | 若 Nimbus 在该时间内未收到 Supervisor 的心跳消息，则认为该节点失效 |
| nimbus.task.launch.secs              | Task 启动时的超时时间                                        |
| supervisor.worker.timeout.secs       | 若 Supervisor 在该时间内未收到 Worker 的心跳消息，则会重启该 Worker |
| supervisor.slots.ports               | Worker 可用的端口列表                                        |
| supervisor.worker.start.timeout.secs | Worker 启动时的超时时间                                      |
| topology.worker.max.heap.size.mb     | 应用于 Topology，限定 Worker 最大可用堆内存                  |
| topology.max.spout.pending           | 指定一个 Spout Task 允许的未确认 Tuple 总数                  |
| topology.eventlogger.executors       | Event Logger 的进程个数                                      |
| topology.acker.executors             | Acker 的进程个数                                             |
| storm.scheduler                      | 全局的任务调度器                                             |
| storm.cluster.state.store            | 指定用于创建 ClusterState 的工厂                             |
