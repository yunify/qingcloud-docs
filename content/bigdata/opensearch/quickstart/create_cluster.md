---
title: "创建 OpenSearch 集群"
description: 本小节主要介绍如何快速创建 OpenSearch 集群。 
keyword: 大搜索分析,实例创建,集群创建,OpenSearch,搜索引擎,大数据
weight: 10
collapsible: false
draft: false
---

通过 AppCenter 集群管理控制台，您可以快速创建 OpenSearch 集群。本小节主要介绍如何快速创建 OpenSearch 集群。

## 前提条件

- 已获取管理控制台登录账号和密码，且账号已实名认证。
- 已获取  OpenSearch 集群操作权限。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **OpenSearch 服务**，进入 OpenSearch 集群管理页面。
3. 点击**立即部署**，进入应用部署页面。
4. 选择**区域**。
   根据就近原则，选择实例所在区域。
5. 配置实例基本属性、应用版本、网络信息、环境参数等信息。
   
   a. [基本设置](#基本设置)

   b. 节点设置，包括[OpenSearch 热节点设置](#opensearch-热节点设置可选)、[OpenSearch 主节点设置](#opensearch-主节点设置可选)、[OpenSearch 温节点和冷节点设置](#opensearch-温和冷节点设置可选)、[Logstash 节点设置](#logstash-节点设置可选)、[Dashboard 节点设置](#dashboard-节点设置可选)。

   c. [网络设置](#网络设置)

   d. [服务环境参数设置](#服务环境参数设置)

   e. [用户协议](#用户协议)

6. 确认配置和费用信息无误后，点击**提交**，创建集群。
   
   集群创建成功后，可在**集群管理**页面，查看和管理 OpenSearch 集群。

   ![集群列表](../../_images/cluster_list.png)

### 基本设置

集群名称、网络、版本、计费方式等基本信息配置。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   UUID     |  系统默认分配的全局唯一标识码，不可修改。  |
|   名称     |  （可选）输入当前集群的名称。<li>默认为`OpenSearch`。  |
|   描述  |  （可选）对集群的简要描述。   |
|   版本 |  选择集群版本。| 
|   快速配置 |  选择集群资源类型。<li> 可选择**测试环境**、**预生产环境**、**高可用生产环境**，以及可自定义各节点资源配置。| 
|   计费方式 |  选择集群计费方式，可选择按**小时**计费。| 
|   部署方式 |  选择集群可用区部署方式。<li>多可用区部署 ：将节点分散部署在当前区域的不同可用区，可用性高。<li>单可用区部署 ：将节点部署在当前区域同一个可用区，网络延迟最低。可指定节点所在当前区域的可用区。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>:只有选择部署在**区域**时，才可以选择部署方式。目前可选择区域有`上海1区`、`广州2区`、`北京3区`。</li></span> | 

![基本参数配置](../../_images/base_step_1.png)

### OpenSearch 热节点设置（可选）

集群 OpenSearch 热节点的资源配置，包括云服务器规格、磁盘大小等。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   CPU     |  设置集群节点云服务器 CPU 规格。  |
|   内存     |  设置集群节点云服务器内存规格。  |
|   节点数量     |  设置集群节点数量。<li> 默认值 3。<li> 取值范围 0～200。<li> 建议创建的 OpenSearch 节点数量，不少于分片副本数的个数，来确保副本都能正常分配；<li> 建议配合专有主节点，保障集群服务的高可用。  |
|   主机类型     |  设置集群节点云服务器类型。<li> 可选择`基础型`、`企业型 e2`和`企业型 e3`。  |
|   存储类型  |  选择集群数据和日志存储磁盘类型。<li>可选择`基础型本地盘` 、`SSD 企业型本地盘`和`通用型 SSD 云盘`。 |
|   存储容量 | 设置集群数据和日志存储磁盘大小。磁盘大小决定了最大容量以及 IOPS 能力，请根据业务量，可滑动设置或输入数字配置集群磁盘大小。<li> 默认值 60GB。<li> 最小值 30GB。 | 

![OpenSearch 热节点配置](../../_images/base_step_2.png)

### OpenSearch 主节点设置（可选）

集群 OpenSearch 主节点的资源配置，包括云服务器规格、磁盘大小等。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   CPU     |  设置集群节点云服务器 CPU 规格。  |
|   内存     |  设置集群节点云服务器内存规格。  |
|   节点数量     |  设置集群专有主节点数量，单节点仅供测试使用，生产环境请选择至少三节点。<li> 默认值 3。<li> 取值范围 0、1、3、5。 |
|   主机类型     |  设置集群节点云服务器类型。<li> 可选择`基础型`、`企业型 e2`和`企业型 e3`。  |
|   存储类型  |  选择集群数据和日志存储磁盘类型。<li>可选择`基础型本地盘` 、`SSD 企业型本地盘`和`通用型 SSD 云盘`。 |
|   存储容量 | 设置集群数据和日志存储磁盘大小。磁盘大小决定了最大容量以及 IOPS 能力，请根据业务量，可滑动设置或输入数字配置集群磁盘大小。<li> 默认值 10GB。 | 

![OpenSearch 主节点配置](../../_images/base_step_3.png)

### OpenSearch 温和冷节点设置（可选）

集群 OpenSearch 温节点和冷节点的资源配置，包括云服务器规格、磁盘大小等。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   CPU     |  设置集群节点云服务器 CPU 规格。  |
|   内存     |  设置集群节点云服务器内存规格。  |
|   节点数量     |  设置集群节点数量。<li> 默认值 0。<li> 取值范围 0～200。<li> 建议创建的 OpenSearch 节点数量，不少于分片副本数的个数，来确保副本都能正常分配；<li> 建议配合专有主节点，保障集群服务的高可用。  |
|   主机类型     |  设置集群节点云服务器类型。<li> 可选择`基础型`、`企业型 e2`和`企业型 e3`。  |
|   存储类型  |  选择集群数据和日志存储磁盘类型。<li>可选择`基础型本地盘` 、`SSD 企业型本地盘`和`通用型 SSD 云盘`。 |
|   存储容量 | 设置集群数据和日志存储磁盘大小。磁盘大小决定了最大容量以及 IOPS 能力，请根据业务量，可滑动设置或输入数字配置集群磁盘大小。 | 

![OpenSearch 温节点配置](../../_images/base_step_4.png)

![OpenSearch 冷节点配置](../../_images/base_step_5.png)

### Logstash 节点设置（可选）

集群 Logstash 节点的资源配置，包括云服务器规格、磁盘大小等。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   CPU     |  设置集群节点云服务器 CPU 规格。  |
|   内存     |  设置集群节点云服务器内存规格。  |
|   节点数量     |  设置集群节点数量。<li> 默认值 1。<li> 取值范围 0～50。  |
|   主机类型     |  设置集群节点云服务器类型。<li> 可选择`基础型`、`企业型 e2`和`企业型 e3`。  |
|   存储容量 | 设置集群数据和日志存储磁盘大小。磁盘大小决定了最大容量以及 IOPS 能力，请根据业务量，可滑动设置或输入数字配置集群磁盘大小。 | 

![Logstash 节点配置](../../_images/base_step_6.png)

### Dashboard 节点设置（可选）

集群 Dashboard 节点的资源配置，包括云服务器规格、磁盘大小等。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   CPU     |  设置集群节点云服务器 CPU 规格。  |
|   内存     |  设置集群节点云服务器内存规格。  |
|   节点数量     |  设置集群节点数量。<li> 默认值 1。<li> 取值范围 0、1、2。  |
|   主机类型     |  设置集群节点云服务器类型。<li> 可选择`基础型`、`企业型 e2`和`企业型 e3`。  |

![Dashboard 节点配置](../../_images/base_step_7.png)

### 网络设置

通过为集群设置独享私有网络，便于网络**过滤控制**，且不影响其它私有网络的设置，可确保集群的对不同业务进行网络隔离。集群仅可加入已连接路由器的私有网络，且需确保私有网络的 DHCP 处于**打开**状态。 

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   私有网络     |  选择私有网络。<li>默认适配同区域已有私有网络。可在下拉框选择已有私有网络。<li>若无可选网络，可点击**创建**，创建依赖网络资源。  |
|   节点 IP   |  配置节点 IP 地址。<li>默认为`自动分配`。<li> 选择`手动配置`需为各节点配置 IP。  |
|   预留 IP      |   配置集群预留高可用 IP 地址。<li>默认为`自动分配`。<li>选择`手动配置`需为集群配置高可用写 IP。   |

> **说明**
> 
> 配置的**私有网络部署方式**与***集群部署方式**必须一致，即选择的集群部署方式为`多可用区部署`，则该集群仅能选择`多可用区部署`的私有网络。

![网络配置](../../_images/base_step_8.png)

### 服务环境参数设置

设置集群环境参数配置。

- （必须）配置 OpenSearch Dashboard 的 admin 用户帐号名称和密码。

   **opensearch.admin.user** admin 用户名称。默认用户名 `admin`。

   **opensearch.admin.password** admin 用户密码。默认密码 `Change1Pwd`；取值范围 8～32；必须同时包含小写字母（a～z）、大写字母（A～Z）、数字（0～9）、特殊字符（@#%*_+-=）。

  > **注意**
  > 
  > -集群创建后，admin 用户名称和密码不支持修改。
  >
  > -admin 帐号是 OpenSearch Dashboard 平台超级用户帐号，请妥善保管帐号密码。

- 更多参数设置和修改说明，请参见[配置参数](../../manual/config_para/config_para_info)。

![参数配置](../../_images/base_step_9.png)

### 用户协议

阅读**云平台 AppCenter 用户协议**，并勾选用户协议。

![用户协议](../../_images/base_step_10.png)
