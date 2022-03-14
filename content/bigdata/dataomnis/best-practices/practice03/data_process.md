---
title: "数据开发"
description: 本小节主要介绍。 
keywords: 
weight: 30
collapsible: false
draft: false
---

## 创建 Jar 作业

1. 在目标工作空间选择**数据开发** > **实时计算**，进入实时计算页面。
2. 点击**创建作业**，进入创建作业页面。
   
   <img src="/bigdata/dataomnis/_images/choose_model_jar.png" alt="选择模式" style="zoom:50%;" />

3. 选择**代码开发-Jar** 模式。
4. 点击**下一步**，填写作业名称，并选择作业依赖的计算集群。
   
   <img src="/bigdata/dataomnis/_images/job_basic.png" alt="填写信息" style="zoom:50%;" />

5. 配置完成后，点击**确定**，开始创建作业。

## 开发 Jar 作业

### 开发 Java 代码

本实践以 demo 为例。

下载 [product-demo.zip](https://wiki.yunify.com/download/attachments/91871362/product-demo.zip?version=1&modificationDate=1638683201473&api=v2) 文件并解压。

flink-demo.jar 路径为：/product-demo/src/main/resources/flink-demo.jar。

### 上传程序包

1. 在目标工作空间选择**数据开发** > **资源管理**，进入资源管理页面。
2. 点击**上传程序包**，进入上传程序包页面。
   
   <img src="/bigdata/dataomnis/_images/upload_procedure.png" alt="上传程序包" style="zoom:50%;" />

3. 输入程序包显示名称和描述信息后，点击**添加程序包**，选择 flink-demo.jar 文件。
4. 点击**上传**，开始上传程序包。

### 配置程序运行参数

1. 在目标工作空间选择**数据开发** > **实时计算**，进入实时计算页面。
2. 点击作业名称，进入开发面板。
3. 配置 Jar 包作业的程序入口、程序所需要的参数。
   
   <img src="/bigdata/dataomnis/_images/job_jar_edit.png" alt="配置 Jar 作业" style="zoom:50%;" />

   - 引用 Jar 包：选择已上传到资源管理的 Jar 程序包。
   - 入口类：配置运行函数的路径。本示例填写 `com.gxlevi.VsApp`。
   - 程序参数：配置数据源的连接信息。   
     请根据实际情况进行填写，本示例需要填写 --kafka.brokers <Kafka 连接地址> --kafka.topics <Kafka Topic名称> --kafka.group.id <Kafka Group ID> --clickhouse.url <ClickHouse的连接地址> --clickhouse.username <ClickHouse 用户名> --clickhouse.password <ClickHouse 密码> --use.sql true。
     例如：--brokers localhost:9092 --clickhouse-url jdbc:clickhouse://localhost:8123/default --password 123456 --clickhouse.url jdbc:clickhouse://172.16.10.246:8123/pk --clickhouse.username default --clickhouse.password default --use.sql true
   
4. 配置完成后，点击**保存**保存配置。

## 配置作业调度

1. 选择已创建好的作业，点击右侧的**调度设置**，进入调度配置页面。    
2. 设置调度策略。   
   
   本实践选择**执行一次**，**发布后立即执行**。若您需要配置为其他调度策略，请参见[配置作业调度](../../../manual/data_development/job/scheduling_job)。

   <img src="/bigdata/dataomnis/_images/bp_schedule_jar.png" alt="配置作业调度" style="zoom:50%;" />

3. 设置完成后，点击**确定**。

## 配置运行参数

1. 选择已创建好的作业，点击右侧的**运行参数**，进入运行参数配置页面。 

2. 基础设置。
   
   - **计算集群**：在该页面可以查看和修改运行作业的计算集群。
   - **并行度**：配置作业的并发数，不能为 `0`，默认为 `1`。

   <img src="/bigdata/dataomnis/_images/bp_enviroment_jar_1.png" alt="基础设置" style="zoom:50%;" />
   
3. 依赖资源。

   - **依赖包**、**函数包**：本示例无需选择依赖包和函数包。
   - **内置 Connector**：本示例选择如下内置 Connector。
   
   <img src="/bigdata/dataomnis/_images/bp_enviroment_jar_2.png" alt="依赖资源" style="zoom:50%;" />

4. 配置完成后，点击**确定**。

## 发布作业

完成作业调度和运行参数配置后，您才可以发布作业。

1. 点击**发布**，弹出发布调度任务对话框。

   <img src="/bigdata/dataomnis/_images/publish_job.png" alt="发布作业" style="zoom:50%;" />

2. 填写作业描述信息。
3. 选择是否**终止当前作业正在运行中的实例**。首次发布作业时无需勾选此项。
   
   如果当前作业有作业实例正在运行，勾选此项，运行中的作业实例会立即被强制终止。

4. 点击**发布**，发布作业。发布作业时也会对代码进行语法检查，需要一定的时间，请耐心等待。

   作业发布成功后，您可以前往运维中心查看已发布作业和作业实例。





