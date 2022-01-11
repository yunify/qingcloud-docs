---
title: "创建 ELK 集群"
description: 本小节主要介绍如何快速创建 ELK 集群。 
keyword: ELK 实例, 部署 ELK
weight: 10
collapsible: false
draft: false
---

通过 AppCenter 集群管理控制台，您可以快速部署 ELK。

本小节主要介绍如何快速创建 ELK 集群。

## 前提条件

- 已获取管理控制台登录账号和密码，且账号已实名认证。
- 已获取 ELK 集群操作权限。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **ELK 服务**，进入 ELK 集群管理页面。
3. 点击**立即部署**，进入应用部署页面。
4. 选择**区域**。  
   根据就近原则，选择实例所在区域。
5. 配置实例基本属性、网络信息、环境参数等信息。

   a. [基本设置](#基本设置)  
   b. [网络设置](#网络设置)  
   c. [服务环境参数设置](#服务环境参数设置)  
   d. [用户协议](#用户协议)

6. 确认配置和费用信息无误后，点击**提交**，创建集群。  
   集群创建成功后，可在**集群管理**页面，查看和管理 ELK 集群。

### 基本设置

集群名称、网络、版本、计费方式等基本信息配置。

| <span style="display:inline-block;width:140px">参数</span> | <span style="display:inline-block;width:520px">参数说明</span> |
| :--------------------------------------------------------- | :----------------------------------------------------------- |
| UUID                                                       | 系统默认分配的全局唯一标识码，不可修改。                     |
| 名称                                                       | 输入当前集群的名称。<li>默认为`ELK`                          |
| 描述                                                       | （可选）对 ELK 服务的简要描述。                              |
| 版本                                                       | 选择部署版本。                                               |
| 快速配置                                                   | 选择 ELK 服务规格。<li>可选择`测试环境`、`预生产环境`、`高可用生产环境`，以及可自定义各节点资源配置。 |
| 计费方式                                                   | 选择服务计费方式，可选择按**小时**、**月**、**年**计费。     |
| 部署方式                                                   | 选择集群可用区部署方式。<li>`多可用区部署` ：将节点分散部署在当前区域的不同可用区，可用性高。<li>`单可用区部署` ：将节点部署在当前区域同一个可用区，网络延迟最低。可指定节点所在当前区域的可用区。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>:只有选择部署在**区域**时，才可以选择部署方式。目前仅`北京3区`可选择多可用区部署。</li></span>   |

![basic_config](../../images/basic_config.png)

#### 自定义配置流程

若快速配置中选择**自定义**，需完成 Elasticsearch 节点（热、温、冷）设置，Elasticsearch 专有主节点设置，Kibana 节点设置，Logstash 节点设置。

**Elasticsearch 节点（热、温、冷）设置**

填写 Elasticsearch 节点CPU、内存、节点数量、主机类型及数据盘大小等配置信息。

![es_node_config](../../images/es_node_config.png)

> **说明**：
>
> 企业级分布式 SAN（NeonSAN）目前仅支持 `北京3区-B`、`上海1区-A`、`广东2区-A` 这三个区域。

**Elasticsearch 专有主节点设置**

填写 Elasticsearch 专有主节点CPU、内存、节点数量、主机类型及数据盘大小等配置信息。

![es_master_node_config](../../images/es_master_node_config.png)

**Kibana节点设置**

填写 Kibana 节点CPU、内存、节点数量及主机类型等配置信息。

![kbn_node_config](../../images/kbn_node_config.png)

**Logstash 节点设置**

填写 Logstash 节点CPU、内存、节点数量、主机类型及数据盘大小等配置信息。

![lst_node_config](../../images/lst_node_config.png)

### 网络设置

出于安全考虑，所有的集群都需要部署在私有网络中，请选择自己创建的已连接路由器的私有网络。

| <span style="display:inline-block;width:140px">参数</span> | <span style="display:inline-block;width:520px">参数说明</span> |
| :--------------------------------------------------------- | :----------------------------------------------------------- |
| 私有网络                                                   | 选择私有网络。<li>默认适配同区域已有私有网络。可在下拉框选择已有私有网络。<li>若无可选网络，可点击**创建**，创建依赖网络资源。 |
| 节点 IP                                                    | 配置节点 IP 地址。<li>默认为`自动分配`。<li> 选择`手动置顶`需为各节点配置 IP。 |
| 预留 IP                                                    | 配置预留 IP 地址。<li>默认为`自动分配`。<li>选择`手动置顶`需为集群配置 IP。 |

![network_config](../../images/network_config.png)

### 服务环境参数设置

提供了多项自定义参数供用户填写，可以点击`展开配置`对所有配置项进行修改，也可使用默认值并在集群创建后弹性进行修改。

![env_config](../../images/env_config.png)

### 用户协议

阅读**云平台 AppCenter 用户协议**，并勾选用户协议。

