---
title: "开发 JAR 作业"
description: 本小节主要介绍如何创建 JAR 作业。 
keywords: 大数据工作台,数据开发,实时计算,JAR 作业
weight: 30
collapsible: false
draft: false
---

代码开发模式支持 JAR、Python 两种模式。本小节主要介绍如何创建 JAR 作业。

<img src="/bigdata/dataomnis/_images/process_job_jar.png" alt="开发 Jar 作业" style="zoom:50%;" />

## 前提条件

- 已获取管理控制台登录账号和密码，且账号已实名认证。
- 已创建工作空间。
- 已创建计算集群。
- 已上传程序包资源。

## 创建 Jar 作业

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入大数据工作台概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 在目标工作空间选择**数据开发** > **实时计算**，进入实时计算页面。
5. 点击**创建作业**，进入创建作业页面。
   
   <img src="/bigdata/dataomnis/_images/choose_model_jar.png" alt="选择 Jar 开发模式" style="zoom:50%;" />

6. 选择代码开发模式，选择 JAR 模式，点击**下一步**。

   <img src="/bigdata/dataomnis/_images/job_basic.png" alt="填写信息" style="zoom:50%;" />

7. 填写作业相关信息。

   | <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
   | :------------- | ------------------------------------------------------------ |
   | 作业名称 |  创建的作业名称，您可以自定义。              |
   | 计算集群    |  点击**选择集群**，在弹出的对话框中选择已创建好的计算集群；也可以在对话框中点击**新建计算集群**，创建新的计算集群。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br>- 创建作业时该参数为可选项，您可以在作业创建成功后，在配置作业的运行参数时选择或修改计算集群。<br>- 计算集群需与数据源网络互通，具体请参见[网络连通方案](/bigdata/dataomnis/manual/connect/)。</span> |
   | 描述    |  作业的描述信息，您可以自定义。 |
 
8. 点击**确定**，开始创建作业。

## 开发作业

1. 点击作业名称，进入开发面板。
2. 在 **JAR**（**程序包**）处选择已上传的 JAR 程序包。     
   
   如果没有您需要的 JAR 包，请点击**上传资源**，上传新的程序包。

   <img src="/bigdata/dataomnis/_images/job_content_jar.png" alt="编辑和运行 Jar 作业" style="zoom:50%;" />

3. 根据实际情况填写**入口类**和**程序参数**。

   - **入口类（EntryClass）**：配置运行函数的路径。例如 com.gxlevi.functions.PvFuntion。
   - **程序参数（Program Arruments）**：配置运行函数的参数。例如 --kafka.brokers 172.16.10.27:9092,172.16.10.28:9092,172.16.10.30:9092 --kafka.topics demo02 --kafka.group.id test01 --clickhouse.url jdbc:clickhouse://172.16.10.246:8123/pk --clickhouse.username default --clickhouse.password default --use.sql true。

4. 点击**保存**，保存修改。

## 配置作业调度

1. 在作业开发面板右侧点击**调度设置**，进入调度配置页面。
2. 配置调度策略。详细信息请参见[配置作业调度](../scheduling_job)。   
3. 点击**确定**，完成调度配置操作。

## 配置运行参数

1. 在作业开发面板右侧点击**运行参数**，进入运行参数配置页面。 
2. 选择计算集群、配置作业并行度，以及选择依赖资源。详细信息请参见[配置运行参数](../enviroment)。   
3. 点击**确定**，完成运行参数配置。

## 发布作业

完成作业调度和运行参数配置后，您才可以发布作业。

1. 点击**发布**，弹出发布调度任务对话框。

   <img src="/bigdata/dataomnis/_images/publish_job.png" alt="发布作业" style="zoom:50%;" />

2. 您可以根据实际情况选择是否终止**当前作业正在运行中的实例**，如果终止当前作业正在运行中的实例，运行中的作业实例会立即被强制终止。
3. 点击**发布**，发布作业。发布作业时也会对代码进行语法检查，需要一定的时间，请耐心等待。   
   作业发布成功后，您可以前往运维中心查看已发布作业和作业实例。


