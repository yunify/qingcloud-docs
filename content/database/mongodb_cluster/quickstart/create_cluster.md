---
title: "创建集群"
description: 本小节主要介绍如何快速创建 MongoDB Cluster 数据库。 
keyword: MongoDB Cluster 实例创建,集群创建
weight: 10
collapsible: false
draft: false
---

通过 AppCenter 集群管理控制台，您可以快速创建 MongoDB Cluster 集群。

本小节主要介绍如何快速创建 MongoDB Cluster 集群。

## 前提条件

- 已获取管理控制台登录账号和密码，且账号已实名认证。
- 已获取  MongoDB Cluster 集群操作权限。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB Cluster**，进入 MongoDB Cluster 集群管理页面。
3. 点击**立即部署**，进入应用部署页面。
4. 选择**区域**。
   根据就近原则，选择实例所在区域。
5. 配置实例基本属性、应用版本、网络信息、环境参数等信息。
   
   a. [基本设置](#基本设置)

   b. 节点设置，包括 [Config Server Node 设置](#config-server-node-设置可选)、[Sharded Node 设置](#sharded-node-设置可选)、[Mongos Node 设置](#mongos-node-设置可选)。

   c. [网络设置](#网络设置)

   d. [服务环境参数设置](#服务环境参数设置)

   e. [用户协议](#用户协议)

6. 确认配置和费用信息无误后，点击**提交**，创建集群。
   
   集群创建成功后，可在**集群管理**页面，查看和管理 MongoDB Cluster 集群。

   ![集群列表](../../_images/cluster_list.png)

### 基本设置

集群名称、网络、版本、计费方式等基本信息配置。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   UUID     |  系统默认分配的全局唯一标识码，不可修改。  |
|   名称     |  （可选）输入当前集群的名称。<li>默认为`MongoDB Cluster`。  |
|   描述  |  （可选）对集群的简要描述。   |
|   版本 |  选择集群版本。| 
|   快速配置 |  选择集群资源环境类型。<li>可选择**测试环境**、**生产环境**两种定制资源环境。<li>您也可以选择 **自定义**，自定义配置资源类型。| 
|   计费方式 |  选择集群计费方式，可选择按**小时**、**月**、**年**计费。<li>合约有效期 ：选择按**月**、**年**计费后，即可在一个月或一年合约期内使用资源。| 
|   自动备份时间 |  选择集群是否自动备份。需手动选择自动备份，选择自动备份后每天指定时间段创建备份，默认自动备份为`关闭`。| 
|   部署方式 |  选择集群区域部署方式，可选择`多可用区部署`和`单可用区部署`。<br>- 多可用区部署 ：将节点分散部署在当前区域的不同可用区，可用性高。<br>- 单可用区部署 ：将节点部署在当前区域同一个可用区，网络延迟最低。可指定节点所在当前区域的可用区。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>:只有选择部署在**区域**时，才可以选择部署方式。目前可选择区域有`上海1区`、`广州2区`、`北京3区`。</li></span> | 

![基本参数配置](../../_images/base_step_1.png)

### Config Server Node 设置（可选）

集群 Config Server 节点资源配置，包括云服务器规格、磁盘大小等。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   云服务器类型     |  选择集群节点云服务器资源类型，可选择**基础型**、**企业型 e2**。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>: 为保障分片的备份恢复功能，各个角色节点的 **云服务器类型** 配置需保持一致。</span> |
|   CPU     |  选择集群节点云服务器资源 CPU 规格。<li>**基础型**云服务器可选择 1核或2核。<li>**企业型 e2** 云服务器可选择2核。 |
|   内存     |  选择集群节点云服务器资源内存规格，可选择 2G 或 4G。 |
|   磁盘类型     |  选择集群节点存储磁盘资源类型，可选择**基础型本地盘**、**企业型 SSD 本地盘**、**容量型云盘**和**通用型 SSD 云盘**。  |
|   磁盘大小 |  配置集群数据和日志存储磁盘大小。磁盘大小决定了数据库最大容量以及 IOPS 能力，请根据业务量，可滑动设置或输入数字配置集群磁盘大小。<li> 取值范围 20～50 GB | 
|   节点数量     |  选择集群节点数量。<li>每个 Config Server 节点默认三副本集节点)，暂不支持修改。  |

![Config Server 节点](../../_images/base_step_2.png)

### Sharded Node 设置（可选）

集群分片资源配置，包括云服务器规格、磁盘大小等。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   云服务器类型     |  选择集群节点云服务器资源类型，可选择**基础型**、**企业型 e2**。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>: 为保障分片的备份恢复功能，各个角色节点的 **云服务器类型** 配置需保持一致。</span> |
|   CPU     |  选择集群节点云服务器资源 CPU 规格。<li>**基础型**云服务器可选择 1核、2核、4核、8核。<li>**企业型 e2** 云服务器可选择2核、4核、8核、16核、32核。 |
|   内存     |  选择集群节点云服务器资源内存规格。 <li>**基础型**云服务器可选择 2G、4G、8G。<li>**企业型 e2** 云服务器可选择2G、4G、8G、16G。 |
|   磁盘类型     |  选择集群节点存储磁盘资源类型，可选择**基础型本地盘**、**企业型 SSD 本地盘**、**容量型云盘**和**通用型 SSD 云盘**。  |
|   磁盘大小 |  配置集群数据和日志存储磁盘大小。磁盘大小决定了数据库最大容量以及 IOPS 能力，请根据业务量，可滑动设置或输入数字配置集群磁盘大小。<li> 取值范围 50～2000 GB | 
|   节点数量     |  设置集群分片（Shard）数量，每个分片由 1 个主节点 + 2 个副本节点组成。<li>集群创建后，分片数暂不支持修改。<li>分片数取值范围 1～16，默认值 2。  |

![分片](../../_images/base_step_3.png)

### Mongos Node 设置（可选）

集群 Mongos 资源配置，包括云服务器规格、磁盘大小等。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   云服务器类型     |  选择集群节点云服务器资源类型，可选择**基础型**、**企业型 e2**。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>: 为保障分片的备份恢复功能，各个角色节点的 **云服务器类型** 配置需保持一致。</span> |
|   CPU     |  选择集群节点云服务器资源 CPU 规格。<li>**基础型**云服务器可选择 1核、2核、4核、8核。<li>**企业型 e2** 云服务器可选择2核、4核、8核、16核、32核。 |
|   内存     |  选择集群节点云服务器资源内存规格。 <li>**基础型**云服务器可选择 2G、4G、8G。<li>**企业型 e2** 云服务器可选择2G、4G、8G、16G。 |
|   磁盘类型     |  选择集群节点存储磁盘资源类型，可选择**基础型本地盘**、**企业型 SSD 本地盘**、**容量型云盘**和**通用型 SSD 云盘**。  |
|   磁盘大小 |  配置集群数据和日志存储磁盘大小。磁盘大小决定了数据库最大容量以及 IOPS 能力，请根据业务量，可滑动设置或输入数字配置集群磁盘大小。<li> 取值范围 10～2000 GB | 
|   节点数量     |  设置集群 Mongos 数量，每个 Mongos 为单节点。<br>- 默认值为 2。<br>- 取值范围 1～10。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>:为保障节点高可用，建议至少配置 2个。</li></span>   |

![Mongos](../../_images/base_step_4.png)

### 网络设置

通过为集群设置独享私有网络，便于网络**过滤控制**，且不影响其它私有网络的设置，可确保数据库的对不同业务进行网络隔离。数据库集群仅可加入已连接路由器的私有网络，且需确保私有网络的 DHCP 处于**打开**状态。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   VPC 网络     |  选择 VPC 网络。<li>默认适配同区域已有 VPC 网络。可在下拉框选择已有 VPC 网络。<li>若无可选网络，可点击**创建**，创建依赖网络资源。  |
|   私有网络     |  选择私有网络。<li>默认适配VPC 网络下已有私有网络。可在下拉框选择已有私有网络。<li>若无可选网络，可点击**创建**，创建依赖网络资源。  |
|   节点 IP   |  配置节点 IP 地址。<li>默认为`自动分配`。<li> 选择`手动配置`需为各节点配置 IP。  |

> **说明**
> 
> 配置的**私有网络部署方式**与***集群部署方式**必须一致，即选择的集群部署方式为`多可用区部署`，则该集群仅能选择`多可用区部署`的私有网络。

![网络配置](../../_images/base_step_5.png)

### 服务环境参数设置

数据库的环境参数配置。

- 必须配置数据库 root 和 zabbix 用户帐号密码。默认密码 `Change1Pwd`。

- 更多参数设置和修改说明，请参见[配置参数](../../manual/config_para/config_para_info).

![参数配置](../../_images/base_step_6.png)

### 用户协议

阅读**云平台 AppCenter 用户协议**，并勾选用户协议。

![用户协议](../../_images/base_step_7.png)
