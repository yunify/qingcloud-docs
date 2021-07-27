---
title: "连接集群"
description: 本小节主要介绍如何连接 ZooKeeper 数据库。 
keywords: ZooKeeper 访问,访问数据库
weight: 05
collapsible: false
draft: false
---



ZooKeeper 支持通过节点内网 IP 地址连接，确保数据传输速率的同时兼顾数据安全。

本小节主要介绍如何连接 ZooKeeper 数据库，以终端命令行方式连接数据库。

## 前提条件

- 已获取 QingCloud 管理工作台登录账号和密码，且已获取集群操作权限。
- 已创建 ZooKeeper 集群，且集群状态为**活跃**。
- 已在同`VxNet` 网络的服务器中安装 [ZooKeeper](http://zookeeper.apache.org/releases.html) 客户端。

## 操作步骤

1. [获取连接信息](#获取连接信息)。
2. [访问 ZooKeeper](#访问-zookeeper)。

### 获取连接信息

1. 登录 QingCloud 管理控制台。
2. 选择**产品与服务** > **大数据服务** > **ZooKeeper 服务**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**节点**页签，获取节点 IP 地址。

   <img src="../../_images/check_access_info.png" alt="登录地址" style="zoom:50%;" />

### 访问 ZooKeeper

假设客户端和 ZooKeeper 在同一私有网络，ZooKeeper 集群有三个节点，IP 地址分别为192.168.100.10,192.168.100.11,192.168.100.12， 您可以通过如下命令连接 ZooKeeper。

```shell
bin/zkCli.sh|zkCli.cmd -server 192.168.100.10:2181,192.168.100.11:2181,192.168.100.12:2181
```

此外，由支持的 [REST](https://github.com/apache/zookeeper/blob/release-3.4.13/src/contrib/rest) 服务，可通过如下面命令获取 znode 信息。

```shell
curl -H'Accept: application/json' http://192.168.100.10:9998/znodes/v1/
```

> **注意**
> 
> REST 当前版本不能很好的支持按权限访问 ZooKeeper ，所以如果 ZNodes 设置了权限，REST 会返回相应的错误代码。具体信息可查看其[规范](https://github.com/apache/zookeeper/blob/release-3.4.13/src/contrib/rest/SPEC.txt#L274)。
