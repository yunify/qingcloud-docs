---
title: "场景介绍"
description:  
keywords: 
weight: 5
collapsible: false
draft: false
---

本实践为您介绍如何通过 Jar 作业读取网站的点击流数据，根据渠道、版本、地区、新老用户四个维度，统计独立访客数（uv）、页面访问数（pv）、页面进入次数（sv）、用户跳出次数（uj）、持续访问时间（du），并按照窗口写入 ClickHouse，供后续的分析处理展示。

操作流程如下：

<img src="/bigdata/dataomnis/_images/process_practice02.png" alt="实践流程" style="zoom:30%;" />

1. [环境准备](../prepare01)：准备操作过程中需要的数据源环境。
2. [服务准备](../prepare02)：准备操作过程中需要的大数据工作台环境。包括如何创建工作空间、如何创建网络、如何创建计算集群、如何上传程序包。
3. [数据开发](../data_process)：包括如何创建并开发 Jar 作业、如何配置作业的运行参数、如何配置作业的调度属性。
4. [验证结果](../verify)：验证作业执行结果。