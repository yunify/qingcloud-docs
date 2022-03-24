---
title: "程序包管理"
description: 
keywords: 
weight: 10
collapsible: false
draft: false
---

本小节主要介绍程序包的相关操作。程序包用于 Jar 包模式的实时作业开发中。

## 约束限制

- 仅支持上传`.jar`格式的程序包。
- 上传的程序包大小不能超过 100 MB。
- 仅支持上传单个程序包。

## 注意事项

上传程序包过程中，若刷新程序包列表页面，将会丢失已上传的部分资源，并终止上传操作，建议程序包上传完成后再执行刷新操作。

## 前提条件

已准备好需要上传的程序包。

## 上传程序包

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 在目标工作空间选择**数据开发** > **资源管理**，进入资源管理页面。
5. 点击**上传程序包**，进入上传程序包页面。
   
   <img src="/bigdata/dataomnis/_images/upload_procedure.png" alt="上传程序包" style="zoom:50%;" />

6. 点击**添加程序包**，选择需要上传的程序包。
7. 配置程序包显示名和描述信息。
   
   **程序包显示名**：默认为 Jar 包名称，您也可以对其进行修改。

8. 点击**上传**，开始上传程序包。
   
   - 若在上传过程中点击**取消**，系统将清空已上传资源并关闭当前对话框。
   - 若上传失败，可以点击**重试**，重新上传。

## 修改程序包

### 修改程序包内容

您可以通过**重新上传**功能重新上传程序包，从而修改程序包内容。

1. 选择目标程序包，点击操作列的![](../../../../_images/icon_more_cluster.png)图标，选择**重新上传**，进入上传程序包页面。

   <img src="/bigdata/dataomnis/_images/reload_procedure.png" alt="重新上传程序包" style="zoom:50%;" />

2. 点击**添加程序包**，选择新的程序包，将会直接替换之前的程序包。
3. 点击**上传**，开始重新上传程序包。

### 修改程序包显示名称和描述信息

您可以通过**编辑**功能修改程序包的显示名称和描述信息。

1. 选择目标程序包，点击操作列的**编辑**，进入编辑程序包页面。

   <img src="/bigdata/dataomnis/_images/edit_procedure.png" alt="编辑程序包" style="zoom:50%;" />

2. 修改程序包的显示名称和描述信息。
3. 修改完成后，点击**确认**。

## 导出程序包

点击操作列的**导出**，导出程序包到本地。

## 删除程序包

> **注意**
> 
> - 建议删除程序包前先删除相关作业。
> - 程序包删除后，Jar 包模式的作业将无法引用该程序包，不影响已运行的作业实例，但无法重新运行相关作业。
> - 删除程序包操作无法撤回，请谨慎操作。

- **单个删除**：点击操作列的![](../../../../_images/icon_more_cluster.png)图标，选择**删除**，删除单个程序包。
- **批量删除**：勾选多个需要删除的程序包，点击列表上方的**删除**，批量删除程序包。