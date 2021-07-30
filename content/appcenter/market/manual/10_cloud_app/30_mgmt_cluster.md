---
title: "集群管理"
description: 集群管理
weight: 30
draft: false
---

您可以通过集群管理对已购买的集群进行快速启动、关闭或配置告警通知策略等。

## 管理集群

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/)。

2. 选择**产品与服务** > **AppCenter** > **应用中心**，进入**应用中心**页面。

   <img src="../../../_images/um_appcenter.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**集群管理**，进入**集群管理**页面。

   <img src="../../../_images/um_mgmt_cluster.png" style="zoom:50%;" />

4. 您可以勾选已部署的集群，对集群进行快速的启动、关闭。

5. 勾选已部署的集群，选择**更多操作**，您可以对集群配置告警通知策略、重启、绑定标签、添加到项目，或者删除集群。

   ![](../../../_images/um_config_alarm.png)

6. **勾选节点后，鼠标右键**，可对已部署的集群进行更多的操作，如下图所示。

   ![](../../../_images/um_config_more.png)

## 查看集群详情

您可以查看集群详细信息，包含集群基本信息、服务端口、租赁信息和操作日志。

### 基本属性

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/)。

2. 选择**产品与服务** > **AppCenter** > **应用中心**，进入**应用中心**页面。

   <img src="../../../_images/um_appcenter.png" style="zoom:50%;" />

3. 在左侧导航栏中，点击**集群管理**，进入**集群管理**页面。

   <img src="../../../_images/um_mgmt_cluster.png" style="zoom:50%;" />

4. 点击已部署的应用的 ID， 进入应用详细信息页面。

   您可以查看应用的基本属性，包含应用的 ID、状态、名称、标签、描述、应用、版本、节点数量、私有网络、授权提供商、创建时间等。

   <img src="../../../_images/um_app_basic.png" style="zoom:40%;" />

5. 点击右上角的<img src="../../../_images/icon_more.png" style="zoom:50%;" />，弹出操作窗口。您可以对应用执行更多的操作。

   <img src="../../../_images/um_app_more_operator.png" style="zoom:50%;" />

### 服务端口

集群应用部署后，若有端口的配置，可查看相关端口信息。若无端口的配置相关，则不展示。

<img src="../../../_images/um_app_port.png" style="zoom:50%;" />

### 租赁信息

1. 对已部署的应用，可查看具体的租赁扣费信息。

   <img src="../../../_images/um_app_rent.png" style="zoom:50%;" />

2. 点击右上角的<img src="../../../_images/icon_more.png" style="zoom:50%;" />，在弹出的窗口中，点击**查看详情**，可查看扣费详情。

   <img src="../../../_images/um_app_deduction.png" style="zoom:50%;" />

### 操作日志

对集群应用的操作，可查看具体的操作信息。

<img src="../../../_images/um_app_operation_log.png" style="zoom:50%;" />

## 管理集群节点

1. 详情右侧可查看节点和对节点进行相关操作，如新增、删除、筛选节点状态、修改节点名称等。

   <img src="../../../_images/um_app_node_details.png" style="zoom:50%;" />

2. 可通过在各个节点上，点击**鼠标右键**的方式修改节点属性或者删除节点。或者通过**双击**节点的方式修改节点属性。

   <img src="../../../_images/um_app_modify_node.png" style="zoom:50%;" />

### 新增节点

> **注意：**
>
> 扩容集群可能会导致服务中断, 请在业务低峰时进行。

点击**新增节点**，进入新增节点界面，选择对应的相关配置，提交后可查看新增的节点。

<img src="../../../_images/un_app_add_node.png" style="zoom:50%;" />

### 删除节点

> 注意：
>
> 被删除的节点不可恢复。

1. 选择某个节点或多个节点后，点击**删除**，弹出提示窗口。

   <img src="../../../_images/um_app_delete_node.png" style="zoom:50%;" />

2. 点击**删除**，可删除节点。

### 查看集群监控

1. 在右侧的节点列表下方，点击**服务**，可查看相关服务监控信息。

   <img src="../../../_images/um_app_monitor.png" style="zoom:50%;" />

2. 点击资源，可查看资源相关监控信息。

   <img src="../../../_images/um_app_node_monitor.png" style="zoom:50%;" />

## 配置参数

当集群有参数配置时，可在右侧的**配置参数**中对参数进行修改。

<img src="../../../_images/um_app_config_param.png" style="zoom:50%;" />

## 配置告警

**绑定和解绑告警策略**

在告警项中，**选择节点后**，进行相关指标告警策略的绑定或解绑。

![指标告警策略绑定](/appcenter/market/business-process/_image/cluster_alarm_bind_unbind.png)

![指标告警策略绑定弹框](/appcenter/market/business-process/_image/cluster_alarm_bind.png)

![指标告警策略解绑](/appcenter/market/business-process/_image/cluster_alarm_unbind1.png)

告警策略无法满足集群或者无策略时，在绑定弹框中，可以快速的**创建和管理指标告警策略**

![快速创建](/appcenter/market/business-process/_image/cluster_alarm_quick_manage.png)

在集群管理列表配置通知策略后，若当所有指标规则处于告警状态则满足触发条件，不仅在页面的历史信息会展示，同时会对已认证的相关账号发送对应信息

![告警策略规则](/appcenter/market/business-process/_image/cluster_alarm_rule.png)

![通知策略](/appcenter/market/business-process/_image/cluster_alarm_notice.png)

## 管理备份

集群应用部署后，可对集群进行备份；在页面右侧切换到备份，如下界面所示。

![集群备份](/appcenter/market/business-process/_image/cluster_create_bak.png)

![集群备份提示](/appcenter/market/business-process/_image/cluster_create_bak_tips.png)

备份后，可对备份进行删除或者从备份中再次部署购买集群应用。

![集群备份](/appcenter/market/business-process/_image/cluster_bak_operation.png)
