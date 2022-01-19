---
title: "创建集群"
description: 本小节主要介绍如何快速创建 Memcached 数据库。 
keyword: 数据库,文档数据库,Memcached,实例创建,集群创建
weight: 10
collapsible: false
draft: false
---

通过 AppCenter 集群管理控制台，您可以快速创建 Memcached 集群。

本小节主要介绍如何快速创建 Memcached 集群。

## 前提条件

- 已获取管理控制台登录账号和密码，且账号已实名认证。
- 已获取 Memcached 集群操作权限。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Memcached**，进入 Memcached 集群管理页面。
3. 点击**立即部署**，进入应用部署页面。
4. 选择**区域**。  
   根据就近原则，选择实例所在区域。
5. 配置实例基本属性、应用版本、网络信息、环境参数等信息。  
   a. [基本设置](#基本设置)  
   b. [Memcached 节点设置](#memcached-节点设置)。  
   c. [网络设置](#网络设置)  
   d. [服务环境参数设置](#服务环境参数设置)  
   e. [用户协议](#用户协议)

6. 确认配置和费用信息无误后，点击**提交**，创建集群。  
   集群创建成功后，可在**集群管理**页面，查看和管理 Memcached 集群。

   ![集群列表](../../_images/cluster_list.png)

### 基本设置

集群名称、网络、版本、计费方式等基本信息配置。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   UUID     |  系统默认分配的全局唯一标识码，不可修改。  |
|   名称     |  （可选）输入当前集群的名称。<li>默认为`Memcached`。  |
|   描述  |  （可选）对集群的简要描述。   |
|   版本 |  选择集群版本。|
|   计费方式 |  选择集群计费方式，可选择按**小时**、**月**、**年**计费。<li>合约有效期 ：选择按**月**、**年**计费后，即可在一个月或一年合约期内使用资源。| 
|   可用区 |  选择集群区域可用区。<br>- Memcached 禁止从单可用区部署，即将节点部署在当前区域同一个可用区，网络延迟最低。可指定节点所在当前区域的可用区。| 

<img src="../../_images/base_step_1.png" alt="基本设置" style="zoom:50%;" />

### Memcached 节点设置

集群 Memcached节点资源配置，包括云服务器规格、磁盘大小等。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   CPU     |  选择集群节点云服务器资源 CPU 规格，可选择 1核、2核、4核、8核。 |
|   内存     |  选择集群节点云服务器资源内存规格。 |
|   实例类型     |  选择集群节点云服务器类型。  |
|   节点数量     |  选择集群节点数量。<br>- 默认值为 1。<br>- 取值范围 1～100。<br>- 每个 Memcached 缓存服务可包含 N 个独立的节点，N 最小为1。若可指定**节点数量**为2，即 Memcached 缓存服务将拥有2个用于存储和访问的节点。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>: <li> Memcached 的所有节点是可读可写的。</li> <li>由于 Memcached 不支持持久化，当 Memcached 节点重启时，位于内存的缓存空间会被重置。</li></span>   |

<img src="../../_images/base_step_2.png" alt="节点设置" style="zoom:50%;" />

### 网络设置

通过为集群设置独享私有网络，便于网络**过滤控制**，且不影响其它私有网络的设置，可确保数据库的对不同业务进行网络隔离。数据库集群仅可加入已连接路由器的私有网络，且需确保私有网络的 DHCP 处于**打开**状态。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   VPC 网络     |  选择 VPC 网络。<li>默认适配同区域已有 VPC 网络。可在下拉框选择已有 VPC 网络。<li>若无可选网络，可点击**创建**，创建依赖网络资源。  |
|   私有网络     |  选择私有网络。<li>默认适配VPC 网络下已有私有网络。可在下拉框选择已有私有网络。<li>若无可选网络，可点击**创建**，创建依赖网络资源。  |
|   节点 IP   |  配置节点 IP 地址。<li>默认为`自动分配`。<li> 选择`手动配置`需为各节点配置 IP。  |

<img src="../../_images/base_step_3.png" alt="网络设置" style="zoom:50%;" />

### 服务环境参数设置

数据库的环境参数配置。点击**展开设置**，可设置相应参数值。  
更多参数设置和修改说明，请参见[配置参数](../../manual/config_para/config_para_info).

### 用户协议

阅读**云平台 AppCenter 用户协议**，并勾选用户协议。

<img src="../../_images/base_step_4.png" alt="节用户协议" style="zoom:50%;" />
