---
title: "创建集群"
description: 本小节主要介绍如何快速创建Redis Standalone。 
keywords: 创建 Redis Standalone 集群，创建实例，部署应用
weight: 05
collapsible: false
draft: false
---

通过 AppCenter 集群管理控制台，您可以快速创建 Redis 集群。

本小节主要介绍如何快速创建 Redis Standalone 集群。

## 前提条件

- 已获取登录账号和密码，并完成实名认证。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **键值数据库 Redis Standalone**，进入 Redis Standalone 应用管理页面。
3. 点击**立即部署**或**创建**，进入应用部署页面。
4. 选择**区域**。
   
   根据就近原则，选择实例所在区域，以减少网络延时。

5. 配置应用基本属性、应用版本、网络信息、环境参数等信息。
   
   a. [基本设置](#基本设置)

   b. [节点设置](#节点设置)

   c. [网络设置](#网络设置)

   d. [服务环境参数设置](#服务环境参数设置)

   e. [用户协议确认](#用户协议确认)

6. 确认配置和费用信息无误后，点击**提交**，创建集群。
   
   集群创建成功后，可在**集群管理**页面，查看和管理 Redis 集群。

   ![集群列表](../../_images/cluster.png)

### 基本设置

配置集群基本信息，包括名称、描述，选择版本、计费方式、部署方式和可用区。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   UUID     |  系统默认分配的全局唯一标识码，不可修改。  |
|   名称     |  （可选）输入当前集群的名称。<li>默认为`Redis Standalone`。  |
|   描述  |  （可选）对集群的简要描述。   |
|   版本 |  选择集群版本，根据所选系列不同，可选版本不同。| 
|   计费方式 |  选择集群计费方式，可选择按**小时**或按**合约**计费。<li>合约有效期 ：选择按**合约**计费后，需选择合约可用周期。<li>（可选）自动续约 ：选择按**合约**计费后，在账户余额充足时，可选择周期自动续费，保障业务流畅。| 
|   自动备份时间 |  选择是否开启自动备份。开启自动备份后，可在每天指定时间段创建备份；默认自动备份为`关闭`。| 
|   部署方式 |  选择`多可用区部署`或`单可用区部署`。默认为`单可用区部署`。<li>多可用区部署 ：将节点分散部署在当前区域的不同可用区，可用性高。<li>单可用区部署 ：将节点部署在当前区域同一个可用区，网络延迟最低。可指定节点所在当前区域的可用区。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>:只有选择部署在**区域**时，才可以选择部署方式。目前仅`北京3区`可选择`多可用区部署`。</li></span> | 
|   可用取 |  部署方式选择`单可用区部署`，需选择可用区，指定部署可用区。| 

<img src="../../_images/step1.png" alt="基本信息设置" style="zoom:50%;" />

### 节点设置

结合实际的业务需求，配置节点资源类型和规格。不同 Redis 版本，节点资源配置参数略有不同：

- Redis 6.x 版本需要选择节点资源配置、内存、节点数量。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   资源配置    |  选择资源配置类型，可选择`多线程生产环境`、`单线程生产环境`、`多线程测试环境`、`单线程测试环境`。详细配置规格说明，请参见[产品规格](../../intro/instance_type)。  |
|   内存     |  选择节点内存规格。<li>不同资源配置，可选内存规格不同。<li>内存规格适配**三倍**的磁盘容量大小。例如 8G 的内存，适配的磁盘大小为 24G。  |
|   节点个数  |  选择集群节点个数，可选范围 1～9。  <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>: **单节点**集群仅供测试使用；正式环境建议配置 3 个及以上节点数，确保集群高可用。</li></span>  |

- Redis 5.x 版本需要配置节点的主机类型、CPU、内存、硬盘大小和节点数量。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   主机类型    |  选择节点主机类型，可选择`基础型`、`企业型 e2`。 |
|   CPU    |  选择节点 CPU 规格。<li>`基础型`主机可选择 1核 和 2核。<li>`企业型 e2`主机可选择 2核。 |
|   内存     |  选择节点内存规格，可选规格 1G、2G、4G、8G、16G、32G、48G、64G。  |
|   磁盘大小    |  选择节点磁盘规格，可选范围 10～1000GB。  |
|   节点个数  |  选择集群节点个数，可选范围 1～9。  <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>: **单节点**集群仅供测试使用；正式环境建议配置 3 个及以上节点数，确保集群高可用。</li></span>  |

以下分别为 Redis 6.2.5 版本及 Redis 5.0.11 版本的配置界面，其他版本请以实际界面为准。

**Redis 6.2.5**

<img src="../../_images/step2_6.2.5.png" alt="节点配置" style="zoom:50%;" />

**Redis 5.0.11**

<img src="../../_images/step2_5.0.8.png" alt="节点配置" style="zoom:50%;" />

### 网络设置

通过为集群设置独享私有网络，便于网络**过滤控制**，且不影响其它私有网络的设置，可确保数据库的对不同业务进行网络隔离。数据库集群仅可加入已连接路由器的私有网络，且需确保私有网络的 DHCP 处于**打开**状态。 

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   VPC 网络     |  配置 VPC 网络。<br>- 默认适配同区域已有 VPC 网络。可在下拉框选择已有 VPC 网络。<br>- 若无可选网络，可点击**创建**，创建依赖网络资源。  <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>: 请勿选择免费型的 VPC，目前暂不支持在免费型 VPC 中创建集群。</li></span>   |
|   私有网络     |  选择私有网络。<br>- 默认适配同区域已有私有网络。可在下拉框选择已有私有网络。<br>- 若无可选网络，可点击**创建**，创建依赖网络资源。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>: 私有网络的部署方式应与集群的部署方式保持一致，即都为**多可用区部署**或者都为**单可用区部署**。</li></span>   |
|   节点 IP   |  配置节点 IP 地址。<li>默认为`自动分配`。<li> 选择`手动配置`需为各节点配置 IP。  |
|   预留 IP      |   配置集群预留高可用 IP 地址。<li>默认为`自动分配`。<li>选择`手动配置`需为集群配置高可用写 IP。   |

<img src="../../_images/step3.png" alt="网络设置" style="zoom:50%;" />

### 服务环境参数设置

Redis Standalone 提供了 **Redis** 大部分配置参数，可以根据需要修改相应的参数。

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   禁用 FLUSH 命令     |  选择是否禁用 FLUSHALL 及 FLUSHDB 命令。<br>- 默认为 `否`，表示不禁用。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>: <li>此参数在集群创建后不可修改。</li><li>由于该命令的误操作会导致对数据造成不可恢复的丢失，因此强烈建议在生产环境下禁用该命令。</li><li>Redis 5.0.10 版本开始支持该参数。</li></span>    |
|   控制台管理 ACL    |  选择是否由控制台管理 ACL 服务。<br>- 默认为 `是`，表示开启控制台管理 ACL 服务，禁止通过命令创建 ACL 帐号。 <br>- `否`表示关闭控制台管理 ACL 服务，支持通过命令创建 ACL 帐号。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>: <li>Redis 6.2.5 版本开始支持该参数。</li></span>    |
|   更多服务环境参数     |   点击展开参数列，可配置更多数据库参数。<li> 可配置参数与数据库性能相关，部分参数修改会导致数据库服务重启，具体可见[参数说明](../../manual/config_para/config_para_info)。|

![服务环境参数设置](../../_images/step4.png)

### 用户协议确认

阅读 **《云平台 AppCenter 用户协议》**，并勾选确认接受该协议。

> **注意**
>
> 若选择按月或按年计费，将弹出扣费提示，请仔细阅读提示信息，再点击**我已了解，继续创建**。

![用户协议](../../_images/step5.png)
