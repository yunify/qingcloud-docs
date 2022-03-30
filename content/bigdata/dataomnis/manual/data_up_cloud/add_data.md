---
title: "新增数据源"
description: 本小节主要介绍如何新增数据源。 
keywords: 
weight: 20
collapsible: false
draft: true
---


数据源是大数据工作台用于数据处理的出入口。本小节主要介绍如何新增数据源。

## 前提条件

数据源需要在网络连通的前提下才能进行数据同步，详情请参见[网络连通方案](../connect/)。

## 操作步骤

1. 登录管理控制台。
2. 选择**产品与服务** > **大数据服务** > **大数据工作台**，进入大数据工作台概览页面。
3. 在左侧导航选择**工作空间**，进入工作空间页面。
4. 在目标工作空间点击**数据源管理**，进入数据源列表页面。
5. 点击**新增数据源**，进入新增数据源页面。
   
   <img src="/bigdata/dataomnis/_images/choose_database.png" alt="选择数据源" style="zoom:50%;" />

6. 选择一个数据库类型，点击数据库卡片，进入配置数据源页面。

   <img src="/bigdata/dataomnis/_images/set_database.png" alt="配置数据源" style="zoom:50%;" />

7. 配置数据源[基本信息](#基本信息)。
8. 配置数据源连接信息。数据源不同，需要配置的连接信息也不同。
   
   - [MySQL 连接信息](#连接信息-mysqlpostgresqlclickhouse)
   - [PostgreSQL 连接信息](#连接信息-mysqlpostgresqlclickhouse)
   - [ClickHouse 连接信息](#连接信息-mysqlpostgresqlclickhouse)
   - [HBase 连接信息](#连接信息-hbase)
   - [Kafka 连接信息](#连接信息-kafka)
   - [FTP 连接信息](#连接信息-ftp)
   - [HDFS 连接信息](#连接信息-hdfs)

9.  点击**开始测试**，测试数据源的可用性。也可以在数据源添加成功后，点击数据源操作列的**可用性测试**测试可用性。
10. 点击**新增**，开始新增数据源。

## 配置数据源参数说明

### 基本信息

| <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
| :------------- | ---------------------------------------------------------- |
| 数据源连接方式   | 当前仅支持`连接串模式`，即通过 IP 端口、用户名密码进行连接。 |
| 数据源名称     | 新增数据源的名称，您可以自定义。                            |
| 数据源描述     | 新增数据源的描述信息，您可以自定义。                         |

### 连接信息-MySQL、PostgreSQL、ClickHouse

| <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
| :--------- | -------------------------------------------- |
| 网络连接方式   | 选择网络连接方式，支持`内网`和`公网`两种方式，推荐使用`内网`方式。                   |
| 网络配置   | 网络连接方式选择`内网`时，才需要配置此参数。<br>通过下拉框选择已创建好的网络。若无可选网络，可点击**绑定 VPC**，创建依赖网络资源。               |
| 数据库 IP 地址    | 数据库的 IP 地址。                            |
| 数据库端口号     | 连接数据库的端口号。                           |
| 数据库名称（Database Name）   | 数据库的名称，您可以自定义。                   |             
| 用户名（User Name）     | 连接数据库的用户名。                           |
| 密码（Password）       | 数据库的密码。                                | 

### 连接信息-HBase

| <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
| :--------- | -------------------------------------------- |
| 网络连接方式   | 选择网络连接方式，支持`内网`和`公网`两种方式，推荐使用`内网`方式。                   |
| 网络配置   | 网络连接方式选择`内网`时，才需要配置此参数。<br>通过下拉框选择已创建好的网络。若无可选网络，可点击**绑定 VPC**，创建依赖网络资源。               |
| 使用 ZooKeeper 的地址（ZooKeeper Quorum）  | ZooKeeper 的连接地址。                  |
| 使用 ZooKeeper 的根目录（ZooKeeper Znode Parent）    |  ZooKeeper 的根目录。                           |

### 连接信息-Kafka

| <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
| :--------- | -------------------------------------------- |
| 网络连接方式   | 选择网络连接方式，支持`内网`和`公网`两种方式，推荐使用`内网`方式。                   |
| 网络配置   | 网络连接方式选择`内网`时，才需要配置此参数。<br>通过下拉框选择已创建好的网络。若无可选网络，可点击**绑定 VPC**，创建依赖网络资源。               |
| Broker 连接列表（Broker List）   | Kafka 的连接地址。                   |

### 连接信息-FTP

| <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
| :--------- | -------------------------------------------- |
| 网络连接方式   | 选择网络连接方式，支持`内网`和`公网`两种方式，推荐使用`内网`方式。                   |
| 网络配置   | 网络连接方式选择`内网`时，才需要配置此参数。<br>通过下拉框选择已创建好的网络。若无可选网络，可点击**绑定 VPC**，创建依赖网络资源。               |
| 主机别名（Host）  | FTP 服务器的名称。                   |
| 端口（Port）   | 连接 FTP 的端口号。                           |
| 用户名（User Name）     | FTP 服务器的用户名。                           |
| 密码（Password）       | FTP 服务器的密码。                                | 

### 连接信息-HDFS

| <span style="display:inline-block;width:140px">参数</span>  | <span style="display:inline-block;width:520px">参数说明</span>  |
| :--------- | -------------------------------------------- |
| 网络连接方式   | 选择网络连接方式，支持`内网`和`公网`两种方式，推荐使用`内网`方式。                   |
| 网络配置   | 网络连接方式选择`内网`时，才需要配置此参数。<br>通过下拉框选择已创建好的网络。若无可选网络，可点击**绑定 VPC**，创建依赖网络资源。               |
| 主节点主机名（NameNode Host）  |  HDFS 主节点服务器名称。                  |
| 端口（Port）     | 连接 HDFS 的端口号。                           |
