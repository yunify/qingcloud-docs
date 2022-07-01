---
title: "步骤一：创建 RocketMQ 集群"
description: 本小节主要介绍如何创建 RocketMQ 集群。
keyword: 云计算,大数据,消息队列,中间件,RocketMQ,rocketMQ,创建集群,快速入门
weight: 10
draft: false
---

本小节主要介绍如何通过管理控制台快速创建 RocketMQ 集群。

## 前提条件

- 已获取管理控制台登录账号和密码，且账号已实名认证。
- 已获取 RocketMQ 集群操作权限。
- 在创建 RocketMQ 集群前，建议先创建好网络资源：
    
    先创建一个 VPC 网络，再创建一个受管私有网络并加入 VPC 中，并开启 DHCP 服务（默认开启）。
    
    > **说明**
    >
    > 为了保障数据安全，RocketMQ 集群需要运行在受管私有网络中。

## 创建 RocketMQ 集群

1. 登录管理控制台。
2. 选择**产品与服务** > **消息队列与中间件** > **RocketMQ 服务**，进入 RocketMQ 集群列表页面。
3. 点击**立即部署**或**创建**，进入应用部署页面。
4. 选择**区域**。
   
   根据就近原则，选择实例所在区域。

5. 配置实例基本信息、应用版本、网络信息、环境参数等信息。

   a. [基本设置](#基本设置)

   b. (可选）节点设置，包括[名称服务器设置](#名称服务器设置)、[Broker 设置](#broker-设置)、[网页控制台设置](#网页控制台设置)、[客户端设置](#客户端设置)。

   c. [网络设置](#网络设置)

   d. [服务环境参数设置](#服务环境参数设置)

   e. [用户协议](#用户协议)

6. 确认配置和费用信息无误后，点击**提交**，创建集群。

   集群创建成功后，可在**集群管理**页面，查看和管理 RocketMQ 集群。

   <img src="../../_images/rocketmq_cluster_list.png" alt="集群列表" style="zoom:50%;" />

### 基本设置

集群名称、版本、计费方式、部署方式等基本信息配置。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   UUID     |  系统默认分配的全局唯一标识码，不可修改。  |
|   名称     |  （可选）输入当前集群的名称。默认为 `RocketMQ`。  |
|   描述  |  （可选）对集群的简要描述。   |
|   版本 |  选择集群版本，建议选择最新版本。|
|   资源控制组 | 选择集群节点云服务器规格。<li>可选择`测试环境`和`生产环境`。<li>选择`自定义`，需自定义集群各节点云服务器规格。 |
|   计费方式 |  选择集群计费方式，可选择**小时**或**包年包月**。<li>购买有效期：选择**包年包月**计费方式后，需选择可用时长。<li>（可选）自动续约：选择**包年包月**计费方式后，可开启自动续约。开启**自动续约**后，需选择续约时长，当您的账户余额充足时，集群到期后将按照选择的续约时长自动续费，保障业务连续性。|
|   部署方式 |  仅**北京3区**区域支持选择部署方式。<li> **多可用区部署**：集群所有节点分散部署在当前 region 中的所有 zone，可用性高。</li><li> **单可用部署**：集群所有节点部署在当前 region 中的某一个 zone 中，网络延迟最低。</li> |

<img src="../../_images/base_setup.png" alt="基本设置" style="zoom:50%;" />

### 名称服务器设置

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   CPU     |  选择客户端节点云服务器 CPU 规格。  |
|   内存     |  选择客户端节点云服务器内存大小。  |
|   实例类型  |  选择客户端节点类型。支持`基础型`、`企业型 e2`。|
|   节点数量  |  选择客户端节点云服务器数量。  |

<img src="../../_images/nameserver_setup.png" alt="名称服务器设置" style="zoom:50%;" />

### Broker 设置

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   CPU     |  选择客户端节点云服务器 CPU 规格。  |
|   内存     |  选择客户端节点云服务器内存大小。  |
|   实例类型  |  选择客户端节点类型。支持`基础型`、`企业型 e2`。|
|   主节点数量  |  选择客户端节点云服务器数量。  |
|   挂盘容量 |  配置 Broker 节点的磁盘大小。请根据业务量进行设置，可滑动设置或输入数字配置集群磁盘大小。| 
|   从节点数量  |  每个主节点的从节点数量；从节点的所有配置将和主节点保持一致。  |

<img src="../../_images/broker_setup.png" alt="Broker 设置" style="zoom:50%;" />

### 网页控制台设置

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   CPU     |  选择客户端节点云服务器 CPU 规格。  |
|   内存     |  选择客户端节点云服务器内存大小。  |
|   实例类型  |  选择客户端节点类型。支持`基础型`、`企业型 e2`。|
|   节点数量  |  选择客户端节点云服务器数量。  |

<img src="../../_images/webconsole_setup.png" alt="网页控制台设置" style="zoom:50%;" />

### 客户端设置

建议配置客户端节点，否则某些功能无法使用（除非手动下载相关软件包并配置好）。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   CPU     |  选择客户端节点云服务器 CPU 规格。  |
|   内存     |  选择客户端节点云服务器内存大小。  |
|   实例类型  |  选择客户端节点类型。支持`基础型`、`企业型 e2`。|
|   节点数量  |  选择客户端节点云服务器数量。  |

<img src="../../_images/client_setup.png" alt="客户端设置" style="zoom:50%;" />

### 网络设置

为了保障数据安全，所有的集群都需要部署在受管私有网络中，请选择您创建的网络。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   VPC网络     |  选择 VPC 网络。<li>默认适配同区域已有的 VPC 网络。可在下拉框选择已有 VPC 网络。<li>若无可选 VPC 网络，可点击**新建VPC网络**，创建依赖网络资源。  |
|   私有网络     |  选择私有网络。<li>默认适配同区域已有的私有网络。可在下拉框选择已有私有网络。<li>若无可选私有网络，可点击**新建私有网络**，创建依赖网络资源。  |
|   节点 IP   |  配置节点 IP 地址。<li>默认为`自动分配`。<li> 选择`手动配置`需为各节点配置 IP。  |

<img src="../../_images/network_setup.png" alt="网络设置" style="zoom:50%;" />

### 服务环境参数设置

按照实际需求配置 RocketMQ 集群的参数。也可以在集群创建成功后，在集群详情页面**配置参数**页签修改参数，详细说明请参见[修改配置参数](../../manual/config_para/modify_para/)。

<img src="../../_images/sevice_parameter.png" alt="服务环境参数设置" style="zoom:50%;" />

### 用户协议

阅读**云平台 AppCenter 用户协议**，并勾选用户协议。

<img src="../../_images/user_agreement.png" alt="用户协议" style="zoom:50%;" />

## 配置告警通知

集群创建完成后，请配置告警通知，以便及时了解集群资源的使用情况和集群服务的各项监控指标，当集群、节点、服务有异常时，可以及时获取异常信息。

详细操作请参见[设置监控告警](../../manual/metrics_alarm/set_alarm_rules/)。
