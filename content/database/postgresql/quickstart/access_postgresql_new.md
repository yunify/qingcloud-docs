---
title: "连接数据库（PG V2.0.0及以上）"
description: 本小节主要介绍如何快速连接 PostgreSQL 数据库。 
keyword: 访问集群,访问数据库,PostgreSQL,关系型数据库,数据库
weight: 15
collapsible: false
draft: true

---

PostgreSQL 可通过 psql 命令行客户端直接连接，还可以使用图形化的数据库客户端连接。图形化客户端包括 pgAdmin 、DbVisualizer 、DBeaver 等。

本小节主要介绍 PostgreSQL V2.0.0 版本如何连接 PostgreSQL 数据库，以终端命令行方式连接数据库。

## 前提条件

- 已获取管理控制台登录账号和密码，且已获取集群操作权限。
- 已创建 PostgreSQL 集群，且集群状态为**活跃**。
- 已在服务器安装数据库客户端，且服务器与数据库之间网络畅通。可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。

## 操作步骤

1. 获取连接信息。

   * 在集群管理页面，点击目标集群 ID，进入集群详情页面。
   * 在服务端口信息模块或节点列表，获取高可用 IP 地址或节点 IP 地址。

   <img src="../../_images/info_port.png" style="zoom:100%;" />

2. 创建用户，详细操作请参见[添加账号](/database/postgresql/manual_new/mgt_account/create_account/)。

3. 访问数据库。

   | 选项 | 说明                                                         | 示例          |
   | ---- | ------------------------------------------------------------ | ------------- |
   | -U   | 数据库用户账号名。- 获取更多用户信息，请参见[用户管理](/database/postgresql/manual_new/mgt_account/user_account/)。 | root          |
   | -h   | 数据库节点的 IP 或者双节点集群的 VIP。                       | 192.168.100.0 |
   | -d   | 数据库名称。                                                 | postgres      |
   | 密码 | 数据库用户密码。                                             | qingcloud1234 |

### 连接数据库示例

1. 使用创建的用户，输入如下命令，并输入密码，访问目标数据库。

   ```
   psql -U root -h 172.16.0.239 -d postgres
   ```

2. 创建业务数据库（需要连接的用户权限为`高级权限`）

   ```
   create database production;
   ```

3. 执行命令 `\l`，查看当前 PostgreSQL 数据库信息。

   回显如下：

   <img src="../../_images/access_pg_new01.png" style="zoom:100%;" />