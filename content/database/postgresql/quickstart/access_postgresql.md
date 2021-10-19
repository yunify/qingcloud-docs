---
title: "连接数据库"
description: 本小节主要介绍如何快速连接 PostgreSQL 数据库。 
keywords: PostgreSQL 访问,访问数据库
weight: 20
collapsible: false
draft: false
---



PostgreSQL 可通过 psql 命令行客户端直接连接，还可以使用图形化的数据库客户端连接。图形化客户端包括 pgAdmin 、DbVisualizer 、DBeaver 等。

本小节主要介绍如何连接 PostgreSQL 数据库，以终端命令行方式连接数据库。

## 前提条件

- 已获取 QingCloud 管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 PostgreSQL 集群，且集群状态为**活跃**。
- 已在服务器安装数据库客户端。

## 操作步骤

1. 获取连接信息。
   1. 在集群管理页面，点击目标集群 ID，进入集群详情页面。
   2. 在**服务端口信息**模块或节点列表，获取高可用 IP 地址或节点 IP 地址。
   
    > **注意**
    > 
    > 单节点集群仅一个节点，**连接信息**中不呈现高可用 IP。单节点集群的节点 IP 可在**节点列表**获取。
    >
    > 如未创建 **Proxy 实例**节点，高可用 Proxy IP 将无法连接。

   ![获取高可用 IP 地址](../../_images/check_access_info.png)

2. 访问数据库。
   
   连接方式如下：

   ```bash
   psql -U <userName> -h <port> -d <serverName> 
   ```

|<span style="display:inline-block;width:80px">选项</span> |<span style="display:inline-block;width:240px">说明</span>|<span style="display:inline-block;width:280px">示例</span> |
|:----|:----|:----|
|-U           |数据库用户账号名。<br>新建数据库默认账号名 `pguser`。      | pguser |
|-h          |数据库节点的 IP 或者双节点集群的 VIP。                 |192.168.100.0|
|-d          |数据库名称。 <br>新建数据库默认名称 `qingcloud`。            | qingcloud |
|密码          |数据库用户密码。<br>新建数据库默认账号密码`qingcloud1234`              | qingcloud1234 |

## 连接数据库示例

1. 输入如下命令，并输入密码，访问目标数据库。
   
   ```bash
    psql -U qingcloud -h 192.168.100.246 -d qingcloud
   ```

2. 执行命令`\l`，查看当前 PostgreSQL 数据库信息。

回显如下：

![访问 PG 数据库](../../_images/pglogin.png)  
  