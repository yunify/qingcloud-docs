---
title: "配置 Zabbix Server 监控"
description: 本小节主要介绍如何配置 Zabbix 监控服务。 
keyword: PG,PostgreSQL,关系型数据库,数据库,Zabbix 监控,zabbix server
weight: 50
collapsible: false
draft: false
---

## 前提条件

- 已搭建 zabbix agent2 环境，且已获取 Zabbix 系统用户和密码。
- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 PostgreSQL 集群，且集群状态为``活跃``。
- PostgreSQL 集群与 zabbix agent2 环境网络畅通。

  > **说明**
  >
  > 若安装 Zabbix agent2 环境与 Redis Cluster 网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到公网，以免造成 PostgreSQL 关键信息暴露等风险。

## 步骤一：创建用于监控的 zabbix 账号

详细操作请参见[添加账号](../../manual_new/mgt_account/create_account/)。

> **说明**
> 
> 建议创建高级权限账号，防止因权限问题导致的数据获取失败。

## 步骤二：在 zabbix 添加 Host

1. 使用浏览器，登录 Zabbix Server 的 Web 界面。

2. 选择 **Configuration** > **Hosts**，进入主机管理页面。

3. 点击 **Create host**，进入主机配置页面。

    ![img](../../_images/zabbix_image1.png)

4. 填写以下关键参数：

    ![img](../../_images/zabbix_image2.png)

    Host：

    | 选项        | 说明                       | 示例                         |
    | ----------- | -------------------------- | ---------------------------- |
    | Host name   | 填写 zabbix 的监控的名称。 | pgsql                        |
    | Templates   | 选择监控模板。             | PostgreSQL by Zabbix agent 2 |
    | Host groups | Host 所在的组。            | Databases                    |
    | Interfaces  | 添加您的 agent2 的地址。   | agent：127.0.0.1:10050       |

    ![img](../../_images/zabbix_image3.png)

    Macros：

    | 选项           | 说明     | 示例                       |
    | -------------- | -------- | -------------------------- |
    | {$PG.URI}      | 填写 URI | tcp://192.168.100.253:5432 |
    | {$PG.USER}     | 用户名   | root                       |
    | {$PG.PASSWORD} | 密码     | qingcloud1234              |
    | {$PG.DATABASE} | 数据库名 | postgres                   |

5. 点击 **Add**，添加 host。

6. 添加 Host 之后，等待 2-5 分钟，待主机的 **Status**为 `Enabled` 且 **Availability** 一栏的 `ZBX` 显示为**绿色**后表示监控配置成功，即可查看采集的最新数据和监控图。

## 步骤三：验证 Host 是否可用

1. 在 Zabbix Server 的 Web 界面，选择 **Configuration** > **Hosts**，查看新创建的 Host 是否显示 `Available`。

    ![img](../../_images/zabbix_image4.png)

2. 在 Zabbix Server 的 Web 界面，选择 **Monitoring** > **Latest data**，选择您创建的 Host 的名称，查看是否有数据。

    ![img](../../_images/zabbix_image5.png)

如果以上两个步骤验证均通过，则监控添加成功；

否则，请查找 zabbix-server 错误日志并排查原因。
