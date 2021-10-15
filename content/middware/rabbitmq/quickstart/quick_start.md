---
title: "创建 RabbitMQ 集群"
description: 
draft: false
keyword:  QingCloud, RabbitMQ, 消息队列服务, 消息中间件
---

本文指导您如何快速创建 RabbitMQ 集群。

## 准备工作

创建 RabbitMQ 集群前，您可以事先准备好以下资源，以便在创建过程中可以快速进行配置：

- 创建 VPC 网络及私有网络。RabbitMQ 集群节点需要运行在私有网络中，以保证网络安全。

- 创建 etcd 集群。RabbitMQ 集群节点信息将存放在 etcd 中。

  > **说明**
  >
  > 多个 RabbitMQ 集群支持使用同一个etcd。

当然，您也可以选择在创建 RabbitMQ 集群过程中，根据界面提示入口再进行创建。

## 前提条件

已注册 QingCloud 青云账号并完成实名认证。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在顶部菜单栏中，选择**产品与服务** > **消息队列与中间件** > **RabbitMQ 服务**。

3. 点击**立即部署**，进入 etcd 服务的部署页面。

4. 在顶部**区域**下拉框中，选择部署区域。

   > **说明**
   >
   > - 建议尽量选择靠近您客户所在的区域，以减少网络延时。
   >
   > - 目前仅`北京三区`支持**多可用区部署**方式，若您的业务需要同城多活提供更高的容灾能力，则需要选择`北京三区`。

### 基本设置

设置 RabbitMQ 集群的基本信息，包括**名称**、**描述**、**版本**、**资源配置**、**计费方式**和**部署方式**。

<img src="../../_images/base_setup.png" alt="基本信息设置" style="zoom:50%;" />

| <span style="display:inline-block;width:100px">参数</span> | 说明                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------ |
| 名称                                                       | RabbitMQ 集群的名称。                                        |
| 描述                                                       | RabbitMQ 集群的描述信息。                                    |
| 版本                                                       | RabbitMQ 服务的版本。为体验更丰富、完善的功能，建议选择最新版本。 |
| 资源配置                                                   | 资源配置包括磁盘节点、client 节点及负载均衡器的数量、云服务器类型、硬盘类型等配置。<br>青云提供**测试环境**及**生产环境**两种类型的配置，在部署页面右侧的**费用预览**区域可查看每种类型的配置详情。若以上两种类型不满足您的需求，您也可以选择**自定义**，然后手动配置[磁盘节点](#磁盘节点设置可选)、[client 节点](#client节点设置可选)及[负载均衡器](#负载均衡器设置可选)。 |
| 计费方式                                                   | 支持按**小时**、**月**、**年**计费，若有长期需求，建议选择按月或按年计费，相较按小时更划算。 |
| 部署方式                                                   | 选择**多可用区部署**，表示集群所有节点将分散部署在当前区域中的多个可用区中；选择**单可用区部署**，需要选择具体的可用区，表示集群所有节点部署在所选可用区中。<div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>：<li>目前仅`北京三区`支持选择**部署方式**。其他区域默认为单可用区部署，需要在当前所选区域中指定一个具体的可用区。</li><li>**多可用区部署**将节点分散部署在不同区，可用性高；**单可用区部署**将节点部署在同一个区，网络延迟最低。</li></div> |
| 可用区                                                     | 当**部署方式**为**单可用区部署**且区域内有多个可用区时，则需要指定一个具体的可用区。 |

### 磁盘节点设置（可选）

磁盘节点即 RabbitMQ Broker，是消息中间件的服务节点，用于接收和分发消息。

仅当[基本设置](#基本设置)中**资源类型**选择**自定义**时，才需要配置磁盘节点。

根据实际需求及页面提示，设置磁盘节点的 **CPU**、**内存**、**主机类型**、**存储容量**及**节点个数**。

<img src="../../_images/disk_setting.png" alt="磁盘节点设置" style="zoom:50%;" />

### client节点设置（可选）

Client 节点用于部署 RabbitMQ 命令行工具，包括rabbitmq-defaults、rabbitmq-diagnostics、rabbitmq-env、rabbitmq-plugins、rabbitmq-queues、rabbitmq-server、rabbitmq-upgrade 以及 rabbitmqctl。

仅当[基本设置](#基本设置)中**资源类型**选择**自定义**时，才需要配置Client节点。

根据实际需求及页面提示，设置 client 节点的**CPU**、**内存**、**主机类型**及**节点个数**。

<img src="../../_images/client_setting.png" alt="client节点设置" style="zoom:50%;" />

### 负载均衡器设置（可选）

负载均衡器用于对 Broker 做负载均衡，用户使用 RabbitMQ SDK 连接到负载均衡器，由负载均衡器连接到 Broker。

仅当[基本设置](#基本设置)中**资源类型**选择**自定义**时，才需要配置负载均衡器。

根据实际需求及页面提示，设置负载均衡器的**CPU**、**内存**、**主机类型**、**存储容量**及**节点个数**。

<img src="../../_images/lb_setting.png" alt="负载均衡器设置" style="zoom:50%;" />

### 网络设置

选择已创建好的 VPC 网络及私有网络，若未创建或已有不合适，可根据界面提示进行新建，具体操作，请参见[创建 VPC 网络](/network/vpc/manual/vpcnet/10_create_vpc/)。

<img src="../../_images/net_setting.png" alt="网络设置" style="zoom:50%;" />

### 依赖服务设置

自 RabbitMQ 3.8.19 版本起，RabbitMQ 使用 etcd 服务来保存自身节点的信息，故创建 RabbitMQ 集群前，您需要先创建 etcd 集群。

若您已创建，则点击**选择**进行选择；若未创建，您可以点击**快捷创建**立即创建，具体操作方法，请参考[创建 etcd 集群](/middware/etcd/quickstart/qs10_deploy_etcd/)。

<img src="../../_images/etcd_setting.png" alt="依赖服务" style="zoom:50%;" />

### 参数设置

RabbitMQ 网页控制台管理员用户名（**rabbitmq_default_user**）及密码（**rabbitmq_default_pass**）为必配参数，且管理员用户名（**rabbitmq_default_user**）设置后不可修改。

点击**更多服务环境参数**，可配置 Haproxy 载均衡策略和 RabbitMQ 集群相关参数，请根据实际需求设置，您也可以在集群创建完成后更改这些参数配置。

<img src="../../_images/para_setting.png" alt="参数设置" style="zoom:50%;" />

### 用户协议

阅读并同意青云AppCenter用户协议之后，点击**提交**，即可开始部署应用。

### 完成部署

当所有磁盘节点及负载均衡器的**服务状态**显示为**正常**时， 表示节点已启动正常， RabbitMQ 集群创建完成。

![节点状态](../../_images/node_tab.png)

