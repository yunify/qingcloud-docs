---
title: "连接数据库"
description: 本小节主要介绍如何连接 RadonDB 数据库。 
keywords: RadonDB 访问,访问数据库
weight: 20
collapsible: false
draft: false
---



RadonDB 推荐使用内网地址连接数据库，确保数据传输速率的同时兼顾数据安全。

本小节主要介绍如何连接 RadonDB 数据库，以终端命令行方式连接数据库。

## 前提条件

- 已获取 QingCloud 管理工作台登录账号和密码，且已获取集群操作权限。
- 已创建 RadonDB 集群，且集群状态为**活跃**。
- 已在服务器安装 MySQL 客户端。

## 操作步骤

1. [获取连接信息](#获取连接信息)。
2. [访问数据库](#访问数据库)。

### 获取连接信息

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **分布式数据库 RadonDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**服务端口信息**模块，获取高可用 IP 地址。
   
   <img src="../../_images/check_access_info.png" alt="连接信息" style="zoom:50%;" />

5. 在**账号**页签，获取数据库账号。
   
   <img src="../../_images/check_user.png" alt="连接账号" style="zoom:50%;" />

### 访问数据库
   
通过命令连接方式如下：

```bash
mysql -h <mysqlServerName> -P <port> -u <userName> -p -D <databaseName> 
```

|<span style="display:inline-block;width:80px">选项</span> |<span style="display:inline-block;width:240px">说明</span>|<span style="display:inline-block;width:280px">示例</span> |
|:----|:----|:----|
|-h           |数据库高可用 IP 地址。       |<li>192.168.0.229|
|-P          |数据库端口号。                 |3306|
|-u          |用户账号名称。                |test_radondb|
|-p          |用户账号密码。<li> 为保障密码安全，`-p`一般空密码。在执行命令后输入密码，回车即可。<li>若需填写该参数，`-p`与密码之间不能有空格。            |test_mysql|
|-D          |数据库名称。非必填参数；可不输入`-D` ，仅输入数据库名称。    |mysql    | 

**回显示例**
   
```shell
$ mysql -h 192.168.0.229 -P <3306> -u test_radondb -p
Enter password：
Welcome to the MySQL monitor.   Commands end with ; or \g.
Your MySQL connection id is 20
Server version: 8.0.24 Source distribution

Copyright (c) 2000, 2021, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names may be trademark of their respective owners.

Type 'help;' or'\h' for help. Type '\c' to clear the current input statement.

mysql>
```
