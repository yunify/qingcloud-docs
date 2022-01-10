---
title: "服务准备"
description:  
keywords: 
weight: 20
collapsible: false
draft: false
---

## 创建工作空间

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入大数据工作台概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 选择相应的区域，点击**创建工作空间**，填写工作空间名称和描述信息。
   
   <img src="/bigdata/databench/_images/create_workspace.png" alt="创建工作空间" style="zoom:50%;" />

5. 点击**创建**，开始创建工作空间。    
   工作空间创建成功后，即可在工作空间页面查看相应内容。

## 创建网络

1. 在目标工作空间选择**数据开发** > **网络配置**，进入网络配置页面。
2. 点击**创建网络**，进入创建网络页面。
   
   <img src="/bigdata/databench/_images/create_net.png" alt="创建网络" style="zoom:50%;" />

3. 填写网络名称，选择 VPC 网络和私有网络。
4. 点击**确定**，开始创建网络。

## 创建计算集群

1. 在目标工作空间选择**数据开发** > **计算集群**，进入计算集群列表页面。
2. 点击**创建集群**，进入创建计算集群页面。
3. 配置集群相关参数，参数详细介绍请参见[创建计算集群](../../../manual/data_development/flink_cluster/create_cluster/)。
4. 配置完成后，点击**确定**，开始创建计算集群。

## 上传 Jar 包

### 获取程序包

下载 [product-demo.zip](https://wiki.yunify.com/download/attachments/91871362/product-demo.zip?version=1&modificationDate=1638683201473&api=v2) 文件并解压。

flink-demo.jar 路径为：/product-demo/src/main/resources/flink-demo.jar

### 上传程序包

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 在目标工作空间点击**数据开发** > **资源管理**，进入资源管理页面。
5. 点击**上传程序包**，进入上传程序包页面。
   
   <img src="/bigdata/databench/_images/upload_procedure.png" alt="上传程序包" style="zoom:50%;" />

6. 输入程序包显示名称和描述信息后，点击**添加程序包**，选择 flink-demo.jar 文件。
7. 点击**上传**，开始上传程序包。

