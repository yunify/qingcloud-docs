---
title: "创建计算集群"
description: 本小节主要介绍如何创建计算集群。 
keywords: 大数据工作台,计算集群,flink
weight: 20
collapsible: false
draft: false
---

本小节主要介绍如何创建计算集群。

## 前提条件

计算集群需要运行在 VPC 私有网络中，在创建计算集群前，建议先创建好依赖的网络。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入大数据工作台概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 在目标工作空间选择**数据开发** > **计算集群**，进入计算集群列表页面。
5. 点击**创建集群**，进入创建计算集群页面。
6. 配置相关参数，配置完成后，点击**立即创建**，开始创建计算集群。

### 基础设置

| <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
| :------------- | ------------------------------------------------------------ |
| 名称       | 计算集群的名称，您可以自定义。               |
| 版本       | 计算集群的版本，通过下拉框进行选择。              |
| 重启策略    | 重启策略是指在 Flink Job 发生故障时，如何处理 Job。包括`No Restarts:不重启`、`Fixed Delay:固定延迟`、`Failure Rate:故障率`，默认为`不重启`。<li>`不重启`：故障发生时不重启 Job。 <li>`固定延迟`：选择该选项后，您还需要配置**尝试重启次数**和**重启时间间隔**。如果重启次数超过了配置的**尝试重启次数**，Job 将运行失败。<li>`故障率`：选择该选项后，您还需要配置配置**检查故障率时间间隔**、**时间间隔内最大失败次数**、**重启时间间隔**。当时间间隔内发生故障的次数超过设置的最大失败次数，Job 将运行失败。 </span>             |

<img src="/bigdata/dataomnis/_images/cluster_basic.png" alt="基础属性" style="zoom:50%;" />

### 资源配置

| <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
| :------------- | ------------------------------------------------------------ |
| TM 数量       | Flink 的 TaskManager 的数量。               |
| TM 规格       | Flink 的 TaskManager 的 CPU 和内存规格。              |
| JM 规格       | Flink 的 JobManager 的 CPU 和内存规格。               |

总计算资源 CU=TM 数量 * TM 规格（CU）+ JM 规格（CU）

<img src="/bigdata/dataomnis/_images/cluster_resource.png" alt="资源配置" style="zoom:50%;" />

### 网络配置

通过下拉框选择已创建好的网络。若无可选网络，可点击**绑定 VPC**，创建新的网络资源。

<img src="/bigdata/dataomnis/_images/cluster_net.png" alt="网络配置" style="zoom:50%;" />

### 日志配置

日志级别支持：`TRACE`、`DEBUG`、`INFO`、`WARN`、`ERROR`，默认为 `INFO`。

- TRACE：追踪级别，打印所有级别的日志。
- DEBUG：调试级别，打印 DEBUG、INFO、WARN、ERROR 级别的日志。
- INFO：信息级别，打印 INFO、WARN、ERROR 级别的日志。
- WARN：警告级别，打印 WARN、ERROR 级别的日志。
- ERROR：错误级别，仅打印 ERROR 级别的日志。

<img src="/bigdata/dataomnis/_images/cluster_log.png" alt="日志配置" style="zoom:50%;" />

### 可选配置

Host 别名和 Flink 参数均为可选配置，请根据实际情况进行选配。

| <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
| :------------- | ------------------------------------------------------------ |
| Host 别名       | 配置 Hosts 信息，包括 IP 地址和 Host 名称。支持批量输入和单条输入。批量输入时，IP 地址和 Host 名称用空格分隔，多条配置换行输入。<br>当作业中使用了 HBase 数据源时，作业绑定的计算集群需要配置 HBase 从节点的 Hosts 信息。            |
| Flink 参数      | 配置 Flink 参数信息，Yaml 格式。支持批量输入和单条输入。批量输入时，多个参数换行输入。              |

<img src="/bigdata/dataomnis/_images/cluster_other.png" alt="可选配置" style="zoom:50%;" />





 






