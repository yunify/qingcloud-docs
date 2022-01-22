---
title: 访问数据库
description: 本小节主要介绍如何快速连接 MongoDB 数据库。 
keyword: MongoDB 访问,访问数据库,MongoDB,文档数据库,数据库
weight: 40
collapsible: false
draft: false
---



Mongo Shell 是 MongoDB 数据库的管理工具，可通过在本地或云服务器上安装 Mongo Shell，连接 MongoDB 数据库。

本小节主要介绍以 Mongo Shell 方式连接 MongoDB 数据库。

## 前提条件

- 已创建 MongoDB 集群，且集群状态为**活跃**。
- 已在服务器安装 [Mongo Shell](https://docs.mongodb.com/manual/administration/install-on-linux/) 工具。为保障鉴权成功，请选择安装与 MongoDB 版本相对应的 Mongo Shell，安装说明请参见 [Install MongoDB](https://docs.mongodb.com/manual/installation/?spm=a2c4g.11186623.0.0.78bd575fTyXmdC)。

> **注意**
> 
> 当数据库与安装 Mongo Shell 的服务器不在同一 VPC 时，需使用[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。

## 获取连接信息

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **文档数据库 MongoDB**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**连接 URL**页签，获取连接命令。

   <img src="../../_images/conne_url.png" alt="连接 URL" style="zoom:50%;" />

6. 在**配置参数** 页签，获取 MongoDB 数据库 **root** 帐号密码。
   
   若需修改 **root** 帐号密码，请参见[修改配置参数](../../manual/config_para/modify_para)。

## 访问数据库

### 通过 Mongo Shell 连接

通过已获取的连接信息访问数据库。连接数据库的 URL 如下：

```shell
$ mongo mongodb://<username>:<password>@<node_ip:27017>/?authSource=admin&replicaSet=foobar
```

MongoDB 集群节点 IP 地址为`192.168.100.21:27017`， 创建的用户名为`root`，密码为`Pwd00000`，通过 mongo shell 连接 MongoDB 示例如下：

```shell
$ mongo mongodb://root:Pwd00000@192.168.100.21:27017/?authSource=admin&replicaSet=foobar

foobar:PRIMARY>
```

|<span style="display:inline-block;width:80px">选项</span> |<span style="display:inline-block;width:240px">说明</span>|<span style="display:inline-block;width:280px">示例</span> |
|:----|:----|:----|
|username          |用户帐号名       | root |
|password        |用户帐号密码                 | Pwd00000 |
|node_ip      | Replica 节点 IP。                | 192.168.100.21 |

### 通过代码连接

如果使用 JAVA 或 Python 代码连接数据，连接 MongoDB 的 URL 为 `mongodb://<USER_Name>:<PASSWORD>@<IP:Port>/<DB_Name>?replicaSet=foobar&authSource=admin`。

|<span style="display:inline-block;width:80px">选项</span> |<span style="display:inline-block;width:240px">说明</span>|<span style="display:inline-block;width:280px">示例</span> |
|:----|:----|:----|
|USER_Name         |用户帐号名       | root |
|PASSWORD      |用户帐号密码                 | Pwd00000 |
|IP     | Replica 节点 IP。 可配置为多个IP，使用逗号分隔。               | 192.168.0.23,192.168.0.24,192.168.0.27 |
|Port    | mongod 的监听端口               | 27017 |
|DB_Name     | 待连接的数据库名称。               | db_test |
|replicaSet=     | **replicaSet** 参数配置。默认值为 `foobar`。             | foobar |
|authSource=    | 指定验证数据库配置。默认值为 `admin`。             | admin |
  
更多参数说明，请参见[Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/)。
