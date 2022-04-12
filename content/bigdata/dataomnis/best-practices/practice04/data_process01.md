---
title: "向 Kafka 写入随机数据"
description: 本小节主要介绍如何在大数据工作上进行 SQL 作业开发。
keywords: 大数据工作台,最佳实践,JAR 作业
weight: 35
collapsible: false
draft: false
---

## 创建 JAR 作业

1. 在目标工作空间选择**数据开发** > **实时计算**，进入实时计算页面。
2. 点击**创建作业**，进入创建作业页面。
   
   <img src="/bigdata/dataomnis/_images/choose_model_jar.png" alt="选择模式" style="zoom:50%;" />

3. 选择**代码开发-JAR** 模式。
4. 点击**下一步**，填写作业名称，并选择作业依赖的计算集群。
   
   <img src="/bigdata/dataomnis/_images/bp_job_basic_jar01.png" alt="填写信息" style="zoom:50%;" />

5. 配置完成后，点击**确定**，开始创建作业。

## 开发 JAR 作业

1. 在目标工作空间选择**数据开发** > **实时计算**，进入实时计算页面。
2. 点击作业名称，进入开发面板。
3. 配置 JAR 作业的程序入口、程序所需要的参数。
   
   <img src="/bigdata/dataomnis/_images/bp_job_jar_edit01.png" alt="配置 Jar 作业" style="zoom:50%;" />

   - **JAR（程序包）**：选择已上传到资源管理的 JAR 程序包。
   - **入口类（EntryClass）**：配置运行函数的路径。本实践填写 `com.dataomnis.example.app.MockData`。
   - **程序参数（Program Arruments）**：配置数据源的连接信息。    
      本实践填写 `--kafka.brokers <Kafka 连接地址> --kafka.topics <Kafka Topic名称>`。     
      例如：--kafka.brokers 172.16.10.58:9092,172.16.10.59:9092,172.16.10.60:9092 --kafka.topics demo001

4. 配置完成后，点击**保存**保存配置。

## 配置作业调度

1. 选择已创建好的作业，点击右侧的**调度设置**，进入调度配置页面。    
2. 设置调度策略。   
   
   本实践选择**执行一次**，**发布后立即执行**。若您需要配置为其他调度策略，请参见[配置作业调度](../../../manual/data_development/job/scheduling_job)。

   <img src="/bigdata/dataomnis/_images/bp_schedule_jar01.png" alt="配置作业调度" style="zoom:50%;" />

3. 设置完成后，点击**确定**。

## 配置运行参数

1. 选择已创建好的作业，点击右侧的**运行参数**，进入运行参数配置页面。 

   <img src="/bigdata/dataomnis/_images/bp_job_enviroment_jar.png" alt="运行参数" style="zoom:50%;" />

2. 配置运行参数。
   
   - **计算集群**：在该页面可以查看和修改运行作业的计算集群。
   - **并行度**：配置作业的并发数，不能为 `0`，默认为 `1`。
   - **依赖资源**：选择作业运行所需的函数包以及自定义 Connector 包。本实践无需选择依赖资源。

3. 配置完成后，点击**确定**。

## 发布作业

完成作业调度和运行参数配置后，您才可以发布作业。

1. 点击**发布**，弹出发布调度任务对话框。

   <img src="/bigdata/dataomnis/_images/publish_job.png" alt="发布作业" style="zoom:50%;" />

2. 填写作业描述信息。
3. 根据实际情况选择是否终止**当前作业正在运行中的实例**。
   
   如果终止当前作业正在运行中的实例，运行中的作业实例会立即被强制终止。

4. 点击**发布**，发布作业。发布作业时也会对代码进行语法检查，需要一定的时间，请耐心等待。

   作业发布成功后，您可以前往运维中心查看已发布作业和作业实例。