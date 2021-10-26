---
title: "Flink on Zeppelin"
description: 本小节主要介绍如何在 Zeppelin 上使用 Flink。 
keywords: qingmr 在 Zeppelin 上使用 Flink
weight: 20
collapsible: false
draft: true
---

Flink 是流式计算引擎。

- Zeppelin 支持 Flink 3 种主流语言，包括 Scala、PyFlink 和 SQL，并支持流式数据可视化模式。Zeppelin 中所有语言共用一个 Flink Application，即共享一个ExecutionEnvironment 和 StreamExecutionEnvironment。
- Zeppelin 支持 Flink 3 种集群模式，包括 Local、Remote 和 Yarn。

  - Local 模式会在本地创建一个 MiniCluster，适合做 POC 或者小数据量的试验。必须配置 `FLINK_HOME `和 `flink.execution.mode`。
  
  - Remote 模式会连接一个已经创建好的 Flink 集群，一般是 Flink standalone 集群。除了配置 `FLINK_HOME` 和 `flink.execution`.mode外，还需要配置 `flink.execution.remote.host` 和 `flink.execution.remote.port` 来指定 JobManager 的地址。
  
  - Yarn 模式会在 Yarn 集群中创建 Flink Cluster。除了配置 `FLINK_HOME` 和 `flink.execution.mode`，还需要配置`HADOOP_CONF_DIR`，并且要确保 Zeppelin 可以访问 hadoop 集群。

本小节主要介绍如何在 Zeppelin 上使用 Flink。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 QingMR 集群，且集群状态为**活跃**。

## 访问 Zeppelin

### 步骤 1：启用 Zeppelin

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据引擎 QingMR**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 选择**节点**页签，获取 Client 节点 IP，并登录 Client 节点。
   
   <img src="../../../_images/client_node.png" alt="登录 Client 节点" style="zoom:50%;" />

5. 在 Client 节点分别执行如下命令，启用 Zeppelin 组件。

   ```
   $ sudo /opt/zeppelin/bin/zeppelin-daemon.sh start
   ```

### 步骤 2：登录 Zeppelin

1. 登录 Zeppelin 控制台，输入帐户名与密码。
    
    登录地址：http://< Client IP >:18080

    默认帐户：admin
    
    默认账户密码：admin123

2. 在 Zeppelin 管理页面，点击 **Create new note**，弹出配置对话框。
3. 配置 Notes 参数。
   
   输入 **Note Name**，选择 **Default Interpreter** 为 `flink`。

4. 点击 **create**，即创建 Notebook。

   进入 Notebook 详情页面，无需其他配置，Zeppelin 已配置了 Flink Interpreter，支持 Flink Scala、PyFlink、Flink SQL 三种语言，并支持流式数据可视化模式。

## 修改 Notebook 目录

Zeppelin 默认目录为 `/opt/zeppelin/notebook/` ，若需复制 Notebook 至其他目录，可执行命令一键复制。

以复制 Notebook 至 `/data/zeppelin/notebook` 目录为例。

1. 登录 Client 节点。
2. 在 Client 节点分别执行如下命令，启用 Zeppelin 组件。

   ```
   $ sudo cp -r /opt/zeppelin/notebook/* /data/zeppelin/notebook/
   ```

3. 登录 Zeppelin，刷新 **Notebook Repos**，即可查看目录路径已刷新。

   <img src="../../../_images/notebook_path.png" alt="目录路径" style="zoom:50%;" />
