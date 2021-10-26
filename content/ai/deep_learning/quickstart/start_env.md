---
title: "步骤三：启动训练环境"
description: 本小节主要介绍如何快速连接 MySQL Plus 数据库。 
keywords: mysql plus 访问,访问数据库
weight: 40
collapsible: false
draft: false
---

MySQL Plus 支持通过内网地址和外网地址连接数据库，推荐使用内网地址连接数据库，确保数据传输速率的同时兼顾数据安全。

本小节主要介绍如何连接 MySQL Plus 数据库，以终端命令行方式连接数据库。

## 连接方式

- 内网地址连接：通过内网地址连接 MySQL Plus，使用云服务器直接连接云数据库的内网地址，使用内网方式连接数据库网络速度快迟延低。

   内网连接地址系统默认提供，可在 MySQL Plus **连接信息**模块查看。

> **注意：**
> 
> - 云服务器和数据库须是同一账号，且在同一个 VPC 内或同在基础网络内。
> - 对于不同的 VPC 下（包括同账号/不同账号，同地域/不同地域）的云服务器和数据库，通过QingCloud **VPC 网络**的`隧道服务`和 `VPN 服务`，打通云服务器和数据库之间网络。

- 外网地址连接：无法通过内网连接时，可通过外网地址连接云数据库 MySQL。
  
  外网地址需[手动申请](../../manual/mgt_connect/enable_external_network)，再在 MySQL Plus **连接信息**模块查看。
  
  无需外网地址连接数据库时，可[释放外网地址](../../manual/mgt_connect/mgt_external_network)。

## 前提条件

- 已创建 MySQL Plus 集群，且集群状态为**活跃**。
- 已获取数据库可登录账号和密码。
- 已在服务器安装 MySQL 客户端。
- 通过外网地址连接，需使用**授权主机**配置为 `%` 的账号。

## 操作步骤

1. 获取连接信息。
   1. 在集群管理页面，点击目标集群 ID，进入集群详情页面。
   
   2. 在**连接信息**模块，获取内网或外网地址。
   
2. 访问数据库。
   
   连接方式如下：

   ```bash
   mysql -h <mysqlServerName> -P <port> -u <userName> -p -D <databaseName> -ssl-ca=<caNme> --ssl-cert=<> 
   ```

   外网连接回显示例：
   ```shell
   $ mysql -h gz-cdb-xx123xx.mysql.qingcloud.link -P <3306> -u test_mysql -p
   Enter password：
   Welcome to the MySQL monitor.   Commands end with ; or \g.
   Your MySQL connection id is 20
   Server version: 8.0.24 Source distribution
   
   Copyright (c) 2000, 2021, Oracle and/or its affiliates. All rights reserved.
   
   Oracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names may be trademark of their respective owners.
   
   Type 'help;' or'\h' for help. Type '\c' to clear the current input statement.
   
   mysql>
   ```

|<span style="display:inline-block;width:80px">选项</span> |<span style="display:inline-block;width:240px">说明</span>|<span style="display:inline-block;width:280px">示例</span> |
|:----|:----|:----|
|-h          |数据库内网或外网连接地址。       | <li>192.168.00.00  <li>gz-cdb-xx123xx.mysql.qingcloud.link |
|-P          |数据库端口号。                 |3306|
|-u          |用户账号名称。                |test_mysql|
|-p          |用户账号密码。<li> 为保障密码安全，`-p`一般空密码。在执行命令后输入密码，回车即可。<li>若需填写该参数，`-p`与密码之间不能有空格。            |test_mysql|
|-D          |数据库名称。非必填参数；可不输入`-D` ，仅输入数据库名称。    |mysql    |
|--ssl-      |数据库开启 **SSL 传输加密**后，必填连接参数。**注意** SSL 证书文件需上传到服务器，且需放在执行连接命令的路径下。   |--ssl-ca=ca.pem --ssl-cert=client-cert.pem --ssl-key=client-key.pem   |

## 后续管理

- [MySQL Plus 数据库连接不上怎么办？](../../faq/access_problems)
