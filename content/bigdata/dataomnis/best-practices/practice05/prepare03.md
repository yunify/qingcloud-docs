---
title: "准备程序包"
description: 本小节主要介绍如何下载 demo，以及如何在大数据工作台上传程序包。 
keywords: 大数据工作台,最佳实践,JAR 作业
weight: 30
collapsible: false
draft: false
---

### 开发 UDF 函数

本实践以 demo 为例，下载 [udf.jar](https://bigdata-doc.pek3b.qingstor.com/dataomnis/doc/udf.jar) 文件。

您也可以下载 [demo 示例代码](https://github.com/QingCloudAppcenter/Flink-Example/tree/main/udf-demo)，然后自行构建 JAR 包。

### 上传程序包

1. 在目标工作空间选择**数据开发** > **资源管理**，进入资源管理页面。
2. 点击**上传程序包**，进入上传程序包页面。
   
   <img src="/bigdata/dataomnis/_images/upload_procedure.png" alt="上传程序包" style="zoom:50%;" />

3. 输入程序包显示名称和描述信息后，点击**添加程序包**，选择 udf.jar 文件。

   > **说明**
   >
   > 程序包显示名会自动显示 JAR 包的名称，若 JAR 包名称不符合程序包显示名规则，则上传程序包后需要您对显示名称进行修改。

4. 点击**上传**，开始上传程序包。
