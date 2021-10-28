---
title: "Ranger 集成 Hive"
description: 本小节主要介绍如何通过 Ranger 集成 Hive。 
keywords: qingmr 通过 Ranger 集成 Hive
weight: 20
collapsible: false
draft: false
---


QingMR 支持通过 HiveServer2 方式访问 Hive，并支持将 Hive 组件集成到 Ranger 进行权限控制。

通过 HiveServer2 访问 Hive 数据，即使用 Beeline 客户端或者 JDBC 代码通过 HiveServer2 执行 Hive 脚本，Hive 官方授权可针对 HiveServer2 进行权限控制。

Ranger 中对 Hive 的表或列级别的权限控制，即针对 HiveServer2 的权限控制。

本小节主要介绍如何将 Hive 集成到 Ranger。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 QingMR 集群，且集群状态为**活跃**。
- 已打通集群网络，使集群云服务器能面向互联网提供服务。例如使用[端口转发](../../../../../network/vpc/faq/methods_of_port_forwarding/)或 [VPN](../../../../../network/vpc/manual/vpn/) 等方式打通网络。

## 步骤 1：Ranger 启用 Hive

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据引擎 QingMR**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 选择**配置参数**页签，点击**修改属性**，设置 **开启 Hive** 参数为 `true`。
   
   <img src="../../../_images/enable_hive.png" alt="开启 Hive" style="zoom:50%;" />

5. 选择**节点**页签，获取 Client 节点 IP，并登录 Client 节点。
   
   <img src="../../../_images/client_node.png" alt="登录 Client 节点" style="zoom:50%;" />

6. 在 Client 节点分别执行如下命令，启用 Ranger 组件。

   ```
   $ sudo ranger-admin restart
   $ sudo ranger-usersync restart
   $ sudo /opt/solr/ranger_audit_server_scripts/start_solr.sh    #若需使用 solr 存储审计日志。
   ```

## 步骤 2：添加 Hive Service

1. 登录 Ranger 控制台，输入帐户名与密码。
    
    登录地址：http:// < Client IP >:6080

    默认帐户：admin
    
    默认账户密码：admin123

   <img src="../../../_images/ranger_ui.png" alt="Ranger 控制台" style="zoom:50%;" />

2. 在 **Access Manager** > **Service Manager** 页面，添加 Hive Service。
   
   配置服务参数，详细参数说明参见[Service 参数](#service-参数).
   
   <img src="../../../_images/service_para.png" alt="Service 参数" style="zoom:50%;" />

### Service 参数

|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   Service Name    |  固定值 `hive`。  |
|   Username    |  自定义，例如 ubuntu。  |
|   Password    |  自定义。  |
|   jdbc.driverClassName   |  默认值 `org.apache.hive.jdbc.HiveDriver`。<br>无需修改。  |
|   jdbc.url    |  jdbc:hive2://<主节点 IP>:10000/。  |
|   Add New Configurations   |  可选配置。  |

## 步骤 3：启动 Ranger Hive 插件

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据引擎 QingMR**，进入集群管理页面。
3. 点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，展开下拉菜单。
5. 点击**启动 Ranger Hive 插件**，弹出确认窗口。

   <img src="../../../_images/enable_ranger_hive.png" alt="启动 Ranger hive 插件" style="zoom:50%;" />

6. 点击**提交**，返回集群详情页面。
   
   待集群状态切换为`活跃`时，则可返回 Ranger 控制台查看插件状态。
   
   <img src="../../../_images/service_status.png" alt="插件状态" style="zoom:50%;" />
