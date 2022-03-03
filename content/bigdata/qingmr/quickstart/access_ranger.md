---
title: "配置 Hive 的访问权限"
description: 本小节主要介绍如何快速使用 Ranger 组件。 
keyword: QingMR 实例, Ranger 组件
weight: 40
collapsible: false
draft: false
---

QingMR 支持通过 HiveServer2 方式访问 Hive，并支持将 Hive 组件集成到 Ranger 进行权限控制。

本小节主要介绍如何在 Ranger 中配置 Hive 的访问权限。**若您无需对 Hive 做精细化的权限控制，则不需要执行本小节。**

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 QingMR 集群，且集群状态为**活跃**。
- 已打通集群网络，使集群云服务器能面向互联网提供服务。例如使用端口转发或 VPN 等方式打通网络，详细操作请参见[访问组件 Web 页面](../../manual/access_method)。

## 启用 Hive 服务

Hive 的 Hive Metastore 和 HiveServer2 服务已经在主节点配置完成（默认关闭），您不需要手动配置。

只需设置配置参数**开启 Hive** 为 `true` 就可以启动这两个服务，然后即可在 Client 节点运行 Hive 命令行使用 Hive。

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据引擎 QingMR**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。  
4. 选择**配置参数**页签，点击**修改属性**，设置**开启 Hive** 参数为 `true`。
   
   <img src="../../_images/enable_hive.png" alt="开启 Hive" style="zoom:50%;" />

## 启用 Ranger 组件

1. 以 ubuntu 用户登录 Client 节点。
2. 在 Client 节点分别执行如下命令，启用 Ranger 组件。

   ```
   sudo ranger-admin restart
   sudo ranger-usersync restart
   ```

3. 若需使用 solr 存储审计日志，请切换到 root 用户，然后执行以下命令。

   ```
   sudo su
   sudo /opt/solr/ranger_audit_server_scripts/start_solr.sh
   ```

## 添加 Hive Service

1. 登录 Ranger 控制台，输入帐户名与密码。
   
    登录地址：http:// < Client IP >:6080

    默认帐户：admin
    
    默认账户密码：admin123

   <img src="../../_images/ranger_ui.png" alt="Ranger 控制台" style="zoom:50%;" />

2. 在 **Access Manager** > **Service Manager** 页面，添加 Hive Service，配置服务参数。
   
|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   Service Name    |  自定义，例如 `hive`。  |
|   Username    |  首次添加 Service 时，请使用 `admin` 用户；之后即可使用其他用户，例如 `ubuntu`。  |
|   Password    |  对应 Username 的密码。  |
|   jdbc.driverClassName   |  默认值 `org.apache.hive.jdbc.HiveDriver`。<br>无需修改。  |
|   jdbc.url    |  jdbc:hive2://<主节点 IP>:10000/。  |
|   Add New Configurations   |  可选配置。  |

   <img src="../../_images/service_para.png" alt="Service 参数" style="zoom:50%;" />

## 启动 Ranger Hive 插件

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据引擎 QingMR**，进入集群管理页面。
3. 点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，展开下拉菜单。
5. 点击**启动 Ranger Hive 插件**，弹出确认窗口。

   <img src="../../_images/enable_ranger_hive.png" alt="启动 Ranger hive 插件" style="zoom:50%;" />

6. 点击**提交**，返回集群详情页面。
   
   待集群状态切换为`活跃`时，则可返回 Ranger 控制台查看插件状态。
   
   <img src="../../_images/service_status.png" alt="插件状态" style="zoom:50%;" />

## 添加访问控制策略

1. 登录 Ranger 控制台，输入帐户名与密码。
2. 点击已添加的 hive 服务，进入组件管理页面。
3. 点击 **Add New Policy**，打开权限配置页面，配置权限策略参数.
   
|<span style="display:inline-block;width:140px">参数</span> |<span style="display:inline-block;width:520px">参数说明</span>|
|:----|:----|
|   Policy Name    |  自定义策略名称。  |
|   database   |  添加 Hive 中数据库，例如 test。  |
|   table    |  添加数据库中表，例如 test。  |
|   Hive Column   |  添加列名。<br> `*` 表示表示所有列。  |
|   Select Group   |  指定添加此策略的用户组。  |
|   Select User   |  指定添加此策略的用户。  |
|   Permissions   |  选择授予的权限。  |

   <img src="../../_images/ranger_hive_policy.png" alt="权限策略参数" style="zoom:50%;" />

4. 点击 **Add**，确认创建权限策略。

   添加、删除或修改 Policy 后，需要等待几十秒，策略授权才生效。
