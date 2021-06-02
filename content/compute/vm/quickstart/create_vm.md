---
title: "云服务器创建流程"
description: test
draft: false
weight: 10
---

青云支持快速创建并购买云服务器，详情请参阅本篇文档。

## 创建云服务器

1. 在控制台产品服务列表打开 **云服务器** 进入**云服务器控制台**。
2. 在**云服务器控制台**左侧导航栏，单击**计算** > **云服务器**。
3. 在**云服务器**页签中，单击**创建云服务器**进入购买界面。

![](../../quickstart/_images/vm_1.png)

### 购买信息

- 选择计费方式。目前支持预留合约和按需计费两种计费方式。

![billing](../../quickstart/_images/billing.png)

*   选择区域及可用区。您可以根据业务需要选择区域。

![area](../../quickstart/_images/area.png)

### 配置信息

- 选择镜像。目前支持三种模式的镜像：标准镜像，自定义镜像以及镜像市场，您可以根据业务需求进行选择。

![](../../quickstart/_images/mirror.png)

*   选择配置信息。云服务器的具体规格，您有两种方式进行规格选择，按照vCPU和RAM选择或者按照类型选择。

![type](../../quickstart/_images/type.png)  

*   选择存储方式。分别选择系统盘和数据盘的规格，系统盘的默认容量为50G，数据盘最大可挂载数量为10块。

![storage](../../quickstart/_images/storage.png)

- 选择网络。可以选择基础网络和VPC网络两种，当您在当前区域没有VPC时，为您选择默认192网段VPC和子网，用户主机创建时自动为用户创建VPC子网并将主机加入网络。当您有VPC网络时请选择VPC网络。

![net](../../quickstart/_images/net.png)

- 选择安全组。您可以选择已有的安全组，默认开放22端口（Linux SSH登录）和3389端口（Windows远程登录）。如果有其他需求，可以新建安全组。

![safety](../../quickstart/_images/safety.png)

- 选择弹性公网IP。当您为云服务器分配已有弹性公网IP时，不能批量创建云服务器。

![eip](../../quickstart/_images/eip.png)

- 选择带宽计费模式。共有两种模式供您选择，按带宽收取费用或按流量收取费用，都是以小时计费的后收费模式。

![byte](../../quickstart/_images/byte.png)

### 主机信息

- 填写主机名称，设置密码或SSH密钥两种方式登录。

![host](../../quickstart/_images/host.png)

- 高级设置。可以选择配置HostName、自定义数据、网卡多队列、备份、标签、项目、安置策略组。

![senior_host](../../quickstart/_images/senior_host.png)

4. 完成云服务器创建及购买流程。

![buy](../../quickstart/_images/buy.png)