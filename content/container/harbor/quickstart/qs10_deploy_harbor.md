---
title: "部署 Harbor 镜像仓库"
draft: false
description: 介绍如何部署 Harbor 镜像仓库。
keyword: Harbor, 私有镜像仓库，镜像仓库，容器
weight: 10
---

## 操作场景

在使用 Harbor 镜像仓库服务前，您需要在 AppCenter  中 通过部署 **Harbor 镜像仓库** APP 创建您的私有镜像仓库。 **Harbor 镜像仓库**将 Harbor 制作成了 APP，能直接在 AppCenter 进行一键部署。

## 操作前准备

在部署 Harbor 之前，您需要创建一个 VPC 网络和一个负载均衡器。另外，若您需要使用 [QingStor 对象存储](/storage/object-storage/intro/object-storage/) 做后端存储，则还需要创建一个 QingStor 对象存储的 Bucket 。

1. 创建一个 VPC 网络。

   创建 VPC 网络请参见[创建 VPC 网络](../../../../network/vpc/manual/vpcnet/10_create_vpc/)。

   > **注意**
   >
   > Harbor 采用 Docker Compose 部署，用来部署 Harbor 的 VPC 网络请不要使用 `172.17.0.0/16` 和 `172.18.0.0/16` 这两个网段。

2. 创建负载均衡器。

   创建一个负载均衡器，然后创建一个监听器，用于 Harbor Web 界面的访问入口。

   创建负载均衡器及监听器的详细操作，请参见[创建负载均衡器](../../../../network/loadbalancer/manual/lb/create_lb/) 及[添加监听器](../../../../network/loadbalancer/manual/monitor/create_http_monitor/)。

   > **说明**
   >
   > - 可创建私网或公网类型的负载均衡器，若是公网类型，需要先申请公网 IP；若是私网类型则只能用于内网访问。
   > - 监听器的监听协议可选 **HTTP** 或 **HTTPS** 。
   >
   > - 若选择 **HTTPS** 协议，则需要在配置监听器时[添加服务器证书](../../faq/faq05_use_ssl_certifcate/)，并在 **高级选项** > **附加HTTP头字段** 勾选**负载均衡器监听协议**（通过 X-Forwarded-Proto 头字段获取负载均衡器的监听协议）。

   <img src="/container/harbor/_images/qs_10_create_monitor.png" alt="monitor" style="zoom:50%;" />

3. 配置安全组规则

   针对上一步负载均衡器的设置，在负载均衡器使用的安全组中添加允许下行规则 80/TCP (HTTP) 或 443/TCP (HTTPS) 端口。

   <img src="/container/harbor/_images/qs_10_add_rules.png" alt="rule" style="zoom:50%;" />

4. 创建 Bucket（仅针对使用 QingStor 对象存储的用户，使用本地存储的用户请略过此步骤）

   对象存储桶（Bucket）是用户用于存储对象的容器，所有的对象都必须隶属于某个存储空间。

   创建对象存储桶（Bucket）的详细操作，请参见[创建 Bucket](../../../../storage/object-storage/manual/bucket_manage/#创建-bucket)。

## 操作步骤

1. 登录管理控制台。
2. 在控制台顶部的导航菜单中，选择**产品与服务** > **容器服务** > **Harbor 镜像仓库**，进入 Harbor 镜像仓库部署页面。
3. 点击**立即部署**开始部署。

### 第1步：基本设置

1. 在顶部**区域**下拉框中，选择部署区域。

2. 设置 Harbor 服务的基本信息，包括 Harbor 服务的名称、描述、版本、快速配置（存储空间）、计费方式和可用区。

     > **说明**
     >
     > 关于快速配置：
     >
     > * 本地存储：本地存储不支持高可用，且受单磁盘容量限制，仅建议测试使用。
     > * 对象存储：生产环境下推荐使用 QingStor 对象存储来保证高可用和无限容量。（QingStor 对象存储是 QingCloud 提供的通用海量非结构化数据存储服务，具有安全可靠、简单易用、高性能、低成本等特点。）
     > * 自定义：若想要灵活配置集群每个节点的主机类型、硬盘大小等，请使用自定义配置。
     
     ![basic-info](/container/harbor/_images/harbor-create-basic-setting.png)

### 第2步：节点设置

#### 主服务节点

1. 点击 **+ 添加负载均衡器（后端端口 80）**，选择已创建好的负载均衡器及监听器，点击**添加**。

    ![add-lb](/container/harbor/_images/harbor-create-add-lb.png)

2. 填写主服务节点 CPU、内存，配置节点数量（默认为 2 个）及实例类型。

    详细配置说明，请参考 [Harbor 推荐配置](../../best-practice/recommend_cgf/)。

#### 其他节点(可选)

当**快速配置**选择`自定义`时，需要自定义数据库节点、缓存节点、存储节点、任务节点、日志节点的相关配置。

> **注意**
>
> 自定义配置时，如果使用对象存储，请忽略存储节点的设置（将存储节点数量配置为 `0`）。

### 第3步：网络设置

![network-setting](/container/harbor/_images/harbor-create-vxnet-set.png)

选择已创建好的私有网络，并设置节点 IP 地址。

> **说明**
>
> ▪︎ 若此前未创建 VPC 网络及私有网络，可按照界面提示进行创建。
>
> ▪︎ Harbor 采用 Docker Compose 部署，请不要使用 172.17.0.0/16 或 172.18.0.0/16 这两个网段的网络，这两个网段会与 Harbor 所在的 Docker 网络产生冲突从而导致创建失败。

### 第4步：服务环境参数设置

![para-setting](/container/harbor/_images/harbor-create-service-para-set.png)

各参数详细说明，请参见[参数介绍](../../manual/config_para/para_info/)。

> **注意**
>
> 使用 QingStor 对象存储服务来存储镜像文件时，对象存储的相关参数一定要填写正确，**对象存储桶**及**存储根目录**在集群创建后不可修改，请谨慎填写。

### 第5步：用户协议

阅读[《云平台 AppCenter 用户协议》](https://pek3a.qingstor.com/appcenter-docs/terms/qingcloud-appcenter-user-terms.pdf)并勾选确认接受该协议。

点击**提交**，开始创建 Harbor 集群所需资源。

### 完成部署

待所有节点的**服务状态**显示为**正常**时， 表示节点已启动正常， Harbor 集群创建完成。

Habor 集群包含了：主服务节点、缓存节点、数据库节点、任务节点、日志节点及存储节点。

![harbor-use-console-cluster-info](/container/harbor/_images/harbor-use-console-cluster-info.png)

