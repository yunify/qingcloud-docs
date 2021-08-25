---
title: "区域资源操作"
description: test
weight: 2
draft: false
---

## 进入功能

包括我的共享与共享给我两个模块。

<img src="../../_images/rs_1.png" style="zoom:22%;" />

### 创建共享单元

<img src="../../_images/rs_2.png" style="zoom:22%;" />

1. 输入共享单元名称

   <img src="../../_images/rs_3.png" style="zoom:28%;" />

2. 选择需要共享的VXNET，单击添加，共享状态变更为已添加为添加成功。

   <img src="../../_images/rs_4.png" style="zoom:22%;" />

3. 添加共享资源使用者：在输入框中输入使用者邮箱或者用户ID,进行添加。单击创建，即完成共享创建。

   <img src="../../_images/rs_5.png" style="zoom:22%;" />

### 编辑共享单元

1. 点击共享单元名称，进入共享单元详情

   <img src="../../_images/rs_6.png" style="zoom:19%;" />

2. 进行共享单元移除

   <img src="../../_images/rs_7.png" style="zoom:22%;" />

3. 添加共享资源，进行资源的添加与删除：若共享的VPC中，已被共享资源的使用者添加资源，删除失败。

   <img src="../../_images/rs_8.png" style="zoom:22%;" />

   <img src="../../_images/rs_9.png" style="zoom:21%;" />

### 查看共享给我的资源

1. 进入“共享给我”，点击共享给我的共享单元名称

   <img src="../../_images/rs_10.png" style="zoom:19%;" />

2. 查看共享给我的资源。点击共享资源名称可进行共享资源的查看。

   <img src="../../_images/rs_11.png" style="zoom:22%;" />

### 共享效果

**共享资源拥有者**

1. 进入VPC详情，可见共享VPC中共享资源的使用者添加的主机，无编辑权限。

   <img src="../../_images/rs_12.png" style="zoom:19%;" />

2. 进入私有网络详情，可见共享私有网络中共享资源的使用者添加的主机，无编辑权限。

   <img src="../../_images/rs_13.png" style="zoom:19%;" />

**资源使用者（被共享者）**

1. VPC网络中可查看共享给我的VPC。

   <img src="../../_images/rs_14.png" style="zoom:19%;" />

2. 进入VPC详情：可以进行主机创建，禁止其余有关VPC的操作，IAM鉴权禁止(如红框所示)。

   <img src="../../_images/rs_15.png" style="zoom:22%;" />

   点击创建资源选项，进入主机创建流程，创建主机时可选择共享网络。

   <img src="../../_images/rs_16.png" style="zoom:43%;" />

   1. 创建主机，可选择共享网络：

      <img src="../../_images/rs_17.png" style="zoom:43%;" />

   2. 已创建主机，加入共享网络：

      <img src="../../_images/rs_18.png" style="zoom:43%;" />

      <img src="../../_images/rs_19.png" style="zoom:43%;" />
