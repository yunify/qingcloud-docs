---
title: "配置参数"
description: 本小节主要介绍如何配置参数。 
keywords: Storm，配置参数
weight: 50
collapsible: false
draft: false
---

配置参数是在部署应用时填写，成为集群配置项的变量。有的配置项是公共的，有的作用于其中的一个或多个角色。您可以在这里修改参数，以更新集群配置。

配置项的详细解释请参见 [Storm 官方文档](https://storm.apache.org/releases/)。

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **大数据服务** > **Storm 服务**，进入 **Storm** 页面。

3. 点击待修改参数的 Storm ID，进入**集群管理**页面。

4. 点击**配置参数**，配置参数。

   ![](../../_images/config_storm_para.png)

5. 点击**修改属性**，修改参数的值。

6. 修改完成后，点击**保存**，即可保存修改。

| 参数                                        | 默认值                                                       | 描述                                                         | 取值范围     |
| ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------ |
| zookeeper_session_timeout                   | 20000                                                        | 客户端到 ZooKeeper 的会话超时 (单位为ms)                     | 5000~300000  |
| zookeeper_connection_timeout                | 15000                                                        | 客户端到 ZooKeeper 的连接超时(单位为ms)                      | 5000~300000  |
| zookeeper_retry_times                       | 5                                                            | 重试 Zookeeper 操作的次数                                    | 1~20         |
| zookeeper_retry_interval                    | 1000                                                         | Zookeeper 操作重试间隔 (单位为ms)                            | 1000~10000   |
| zookeeper_retry_intervalceiling_millis      | 30000                                                        | Zookeeper 操作重试间隔时间(单位为ms)                         | 10000~300000 |
| nimbus_childopts                            | -Xmx1024m                                                    | Storm nimbus 服务的 JVM 参数                                 |              |
| nimbus_task_timeout_secs                    | 30                                                           | 若 Nimbus 在该时间内未收到 Task 的心跳消息，则会重新调度该 Task | 10~300       |
| nimbus_supervisor_timeout_secs              | 60                                                           | 若 Nimbus 在该时间内未收到 Supervisor 的心跳消息，则认为该节点失效 | 10~600       |
| ui_childopts                                | -Xmx768m                                                     | Storm UI 服务的 JVM 参数                                     |              |
| logviewer_childopts                         | -Xmx128m                                                     | Storm logviewer 服务的 JVM 参数                              |              |
| drpc_childopts                              | -Xmx768m                                                     | Storm drpc 服务的 JVM 参数                                   |              |
| pacemaker_childopts                         | -Xmx1024m                                                    | Storm Pacemaker 服务的 JVM 参数                              |              |
| logviewer_max_sum_<br />worker_logs_size_mb | 4096                                                         | 所有 worker 的文件使用的最大内存(单位为 MB)                  |              |
| logviewer_max_per_<br />worker_logs_size_mb | 2048                                                         | 每个 worker 的文件使用的最大内存(单位为 MB)                  |              |
| topology_workers                            | 1                                                            | 执行该topology集群中应当启动的进程数量                       | 1~32         |
| topology_eventlogger_executors              | 0                                                            | Event Logger 的进程个数                                      | 0~10         |
| supervisor_slots_ports                      | [6700,6701,6702,6703]                                        | Worker 可用的端口列表                                        |              |
| supervisor_childopts                        | -Xmx256m                                                     | Storm Supervisor 服务的 JVM 参数                             |              |
| supervisor_worker_start_<br />timeout_secs  | 120                                                          | Worker 启动时的超时时间                                      | 60~600       |
| supervisor_worker_timeout_secs              | 30                                                           | 若 Supervisor 在该时间内未收到 Worker 的心跳消息，则会重启该 Worker | 10~600       |
| supervisor_shutdown_sleep_secs              | 3                                                            | 关闭 worker 上的线程时需要睡眠的时间(单位为秒)               | 3~600        |
| supervisor_monitor_<br />frequency_secs     | 3                                                            | supervisor 检查其监视进程的状态以及必要时重新启动的频率      | 3~600        |
| supervisor_heartbeat_<br />frequency_secs   | 5                                                            | supervisor 对集群状态的心跳频率                              | 5~600        |
| worker_heap_memory_mb                       | 768                                                          | Worker 进程默认堆内存大小                                    |              |
| worker_childopts                            | -Xmx%HEAP-MEM%m -Dsun.jnu.encoding=UTF-8 -Dfile.encoding=UTF-8 -XX:+PrintGCDetails -Xloggc:artifacts/gc.log -XX:+PrintGCDateStamps -XX:+PrintGCTimeStamps -XX:+UseGCLogFileRotation -XX:NumberOfGCLogFiles=10 -XX:GCLogFileSize=1M -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=artifacts/heapdump | Storm Worker 进程的 JVM 参数                                 |              |

