---
title: "集群管理操作概述"
draft: false
enableToc: false
weight: 5
---

## 集群管理页面

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台顶部的导航菜单中，选择**产品与服务** > **AppCenter** > **集群管理**，进入**集群管理**页面。

3. 在**集群管理**页面，右键单击 Harbor 集群，弹出集群的操作功能菜单，可进行集群修改、重启、关闭、扩容、修改计费模式、配置通知策略等操作。

   <img src="/container/harbor/_images/man05_harbor_list_operation.png" alt="harbor_list_operation" style="zoom:50%;" />

   也可在集群列表勾选待操作的集群，然后点击**启动**、**关闭**或**更多操作**来对集群进行管理。

## 集群详情页面

在**集群管理**页面，点击集群 ID 号，进入集群详情页面。

- 在页面左侧**基本属性**区域，可查看集群基本信息。点击右侧<img src="/container/harbor/_images/man05_menu_icon.png" alt="icon" style="zoom:60%;" />图标，显示对该集群的操作功能菜单。

  <img src="/container/harbor/_images/man05_operation_desc.png" alt="operation_desc" style="zoom:50%;" />

- 在页面右侧的**节点**页签，可查看集群中所有节点的基本信息及运行状态。

  ![man05_node_tab](/container/harbor/_images/man05_node_tab.png)

  - 右键单击节点，可修改节点名称。
  - 单击**新增节点**，可按您的实际需要新增主服务节点和任务节点。

- 在页面右侧的**配置参数**页签，可查看和[修改参数值]()，以更新集群配置。

  <img src="/container/harbor/_images/man05_custom-parameter.png" alt="parameter" style="zoom:40%;" />

- 在页面右侧的**告警**页签，可查看节点告警信息、配置告警通知策略、绑定指标告警策略。

  <img src="/container/harbor/_images/man05_alarm_tab.png" alt="alarm_tab" style="zoom:50%;" />

 

