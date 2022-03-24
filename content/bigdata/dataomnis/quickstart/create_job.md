---
title: "创建并开发作业"
description: 本小节主要介绍如何创建并开发作业。 
keywords: 大数据工作台,实时计算,创建作业
weight: 30
collapsible: false
draft: false
---

本小节以创建 SQL 作业为例介绍如何创建并开发作业。

## 创建作业

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入大数据工作台概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 在目标工作空间选择**数据开发** > **实时计算**，进入实时计算页面。
5. 点击**创建作业**，进入选择模式页面。
   
   <img src="/bigdata/dataomnis/_images/choose_model_sql.png" alt="选择模式" style="zoom:50%;" />

6. 选择进行编排的模式，本小节以 `SQL 模式`为例。
7. 点击**下一步**，填写作业相关参数。

   | <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
   | :------------- | ------------------------------------------------------------ |
   | 作业名称 |  创建的作业名称，您可以自定义。              |
   | 计算集群    |  点击**选择集群**，在弹出的对话框中选择已创建好的计算集群；也可以在对话框中点击**新建计算集群**，创建新的计算集群。  |
   | 描述    |  作业的描述信息，您可以自定义。 |
   
   <img src="/bigdata/dataomnis/_images/job_basic.png" alt="填写信息" style="zoom:50%;" />

8. 配置完成后，点击**确定**，开始创建作业。

## 开发并调试作业

1. 点击作业名称，进入开发面板。
2. 在开发面板中输入业务相关的 SQL 代码。
   
   <img src="/bigdata/dataomnis/_images/job_content_sql.png" alt="编辑和运行作业" style="zoom:50%;" />

3. 点击**语法检查**，对代码进行语法检查。
4. 点击**保存**，保存修改，防止代码丢失。