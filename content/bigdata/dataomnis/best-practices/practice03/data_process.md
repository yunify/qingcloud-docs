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

3. 选择 代码开发-Jar 模式。
4. 点击**下一步**，填写作业名称，并选择作业依赖的计算集群。
   
   <img src="/bigdata/dataomnis/_images/job_basic.png" alt="填写信息" style="zoom:50%;" />

5. 配置完成后，点击**确定**，开始创建作业。

## 开发 Jar 作业

1. 点击作业名称，进入开发面板。
2. 配置 Jar 包作业的程序入口、程序所需要的参数。
   
   <img src="/bigdata/dataomnis/_images/job_jar_edit.png" alt="配置 Jar 作业" style="zoom:50%;" />

   - 引用 Jar 包：选择已上传到资源管理的 Jar 程序包。
   - 运行函数入口：运行主类。
   - 运行参数：Kafka 的连接信息。

3. 配置完成后，点击**保存**保存配置。

## 调度作业

1. 选择已创建好的作业，点击右侧的**调度设置**，进入调度配置页面。    
   在该页面可以查看作业的基础属性，包括业务名称、业务 ID、业务描述。基础属性在调度配置页面均不可修改。
2. 设置调度策略。详细操作请参见[配置作业调度](../../../manual/data_development/job/scheduling_job)。
3. 设置完成后，点击**确定**，完成调度设置操作。

## 发布作业

点击**发布**，发布作业。





