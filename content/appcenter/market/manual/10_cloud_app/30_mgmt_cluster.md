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

### 查看基本信息

在集群管理页面，**点击已部署的应用ID**，进入部署的应用详情查看，如下界面。

![集群详情](/appcenter/market/business-process/_image/cluster_information.png)

### 服务端口

集群应用部署后，若有端口的配置，可查看相关端口信息；若无端口的配置相关，则不展示。

![服务端口](/appcenter/market/business-process/_image/cluster_server_port.png)

### 租赁信息

对已部署的应用，可查看具体的租赁扣费信息。

![租赁信息](/appcenter/market/business-process/_image/cluster_fee.png)

![租赁信息](/appcenter/market/business-process/_image/cluster_fee2.png)

### 操作日志

对集群应用的操作，可查看具体的操作信息。

![操作信息](/appcenter/market/business-process/_image/cluster_log.png)

### **2.集群基本操作**

进入详情后，可**点击基本属性右上角的图标**，查看针对本集群的操作，如下界面。

![集群基本操作](/appcenter/market/business-process/_image/cluster_basic_operation.png)

## 管理集群节点

详情右侧可查看节点和对节点进行相关操作，如新增，删除，筛选节点状态，修改节点名称等等，如下界面所示。

![集群基本操作](/appcenter/market/business-process/_image/cluster_node.png)

可通过在各个资源上点击「**右键**」来进行常用操作，以及「**双击**」来修改基本属性。

![集群修改](/appcenter/market/business-process/_image/cluster_node_update.png)

### 新增节点

可点击界面的新增节点，进入节点新增界面，选择对应的相关配置，提交后可查看新增的节点。

![节点新增](/appcenter/market/business-process/_image/cluster_node_add.png)

### 删除节点

选择某个节点或多个节点后，可删除节点，如下界面所示。

![节点删除](/appcenter/market/business-process/_image/cluster_node_delete.png)

### 查看集群监控

在右侧的节点展示中，可查看相关服务或资源的监控图标，获取相关资源信息。

![集群监控](/appcenter/market/business-process/_image/cluster_monitor.png)

![集群监控](/appcenter/market/business-process/_image/cluster_monitor_resource.png)

## 配置参数

当集群有参数配置时，可在右侧的配置参数中对参数进行修改，如下界面。

![配置参数](/appcenter/market/business-process/_image/cluster_parameter_update.png)

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
