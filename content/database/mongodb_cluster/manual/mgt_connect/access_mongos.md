---
title: "连接数据库"
description: 本小节主要介绍如何连接 MongoDB Cluster 数据库。 
keyword: MongoDB Cluster 访问,访问数据库
weight: 10
collapsible: false
draft: false
---



Mongo Shell 是 MongoDB 数据库的管理工具，可通过在本地或 云服务器上安装 Mongo Shell，连接 MongoDB Cluster 数据库。

本小节主要介绍以 Mongo Shell 方式连接 MongoDB Cluster 数据库。

## 前提条件

- 已创建 MongoDB Cluster 集群，且集群状态为**活跃**。
- 已在服务器安装 Mongo Shell 客户端。为保障鉴权成功，请选择安装与 MongoDB 版本相对应的 Mongo Shell，安装说明请参见 [Install MongoDB](https://docs.mongodb.com/manual/installation/?spm=a2c4g.11186623.0.0.78bd575fTyXmdC)。

> **注意**
> 
> 当数据库与安装 Mongo Shell 的服务器不在同一 VPC 时，需使用[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。

## 操作步骤

1. [获取连接信息](#获取连接信息)。
2. [访问数据库](#访问数据库)。

### 获取连接信息

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB Cluster**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**节点**页签，获取 Mongos 节点 IP 地址。 
5. 在**配置参数** 页签，获取 Mongos 节点端口号。
6. 在**配置参数** 页签，获取 MongoDB 数据库 root 帐号密码。
   
   若需修改 root 帐号密码，请参见[公共参数](../../config_para/config_para_info)。

 <img src="../../../_images/check_access_info.png" alt="连接信息" style="zoom:50%;" />

### 访问数据库
   
通过已获取的连接信息访问数据库。
   
**命令行连接方式**如下：

```bash
$ mongo --host <mongos_ip:port> -u <userName> -p --authenticationDatabase <database>
```

连接示例：

```shell
$ mongo --host 192.168.00.10:27018 -u root -p --authenticationDatabase admin
Enter password:
```

|<span style="display:inline-block;width:80px">选项</span> |<span style="display:inline-block;width:240px">说明</span>|<span style="display:inline-block;width:280px">示例</span> |
|:----|:----|:----|
|-host          | 任意 Mongos 节点连接地址。       | 192.168.00.10:27018 |
|-u          | 用户帐号名称。                | root |
|-p          | 用户帐号密码。<li> 为保障密码安全，`-p`一般空密码。在执行命令后输入密码，回车即可。<li>若需填写该参数，`-p`与密码之间不能有空格。            | Change1Pwd |
|-authenticationDatabase          | 授权访问数据库名称。<li>当数据库账号为 root 时，对应的数据库为 admin。<li>若需访问其他数据库，请先在 admin 数据库中使用 `db.createUser()` 命令创建帐号。   | admin |
