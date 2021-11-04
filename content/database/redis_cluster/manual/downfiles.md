---
title: "下载文件"
description: 本小节介绍如何下载 Redis 日志、RDB 数据文件和 AOF 文件。
keywords: redis cluster，redis 文件下载
weight: 50
draft: false
---

从`Redis 5.0.5 - QingCloud 2.0.0` 版本开始，**配置参数**页面添加了开启 WebConsole 服务的参数，开启WebConsole 后，您可以通过该服务下载日志、RDB 数据文件和 AOF 文件。

## 前提条件

- 已开启 WebConsole 服务，即在参数配置中，参数**开启文件查看控制台**的值为**true**。

  > **说明**
  >
  > 该服务默认没有密码，建议在开启时同时配置密码。

  <img src="../../_images/enable_webconsole.png" alt="开启文件查看" style="zoom:50%;" />

- 已创建云服务器，云服务需要与 Redis Cluster 实例在同一个 VPC 网络，才能连接到 Redis 数据库 。

## 操作步骤

### 方式一：浏览器下载

1. 在云服务器的浏览器窗口输入访问地址： `http://[Redis IP地址]:80` 。

   若未设置密码，将直接进入文件查看页面。

   若设置了密码，将弹出身份验证窗口，需要输入用户名及密码，点击**确定**，然后进入文件查看页面。

   <img src="../../_images/downfiles.png" alt="文件查看器" style="zoom:50%;" />

2. 点击节点 IP，便可对应节点的文件。点击具体文件进行下载。

   > **说明**
   >
   > 若设置了文件查看用户名和密码，每次切换节点 IP 时，都需要输入用户名及密码。所有节点的用户名及密码相同。



### 方式二：命令行下载

您也可以在 Linux 云服务器中执行以下命令来下载需要的文件。

```shell
# 下载 RDB 文件
wget http://[username]:[password]@[ip]/redis/dump.rdb

# 下载 AOF 文件
wget http://[username]:[password]@[ip]/redis/appendonly.aof

# 下载日志文件
wget http://[username]:[password]@[ip]/redis/redis-server.log

```

> **说明**
>
> 若设置了文件查看用户名和密码，需要将以上命令中的 `[username]`、`[password]`、`[ip]`分别替换为您的用户名、密码和目标 IP。
>
> 若未设置用户名及密码，则只需要将 `[ip]` 替换为目标 IP，去掉`[username]:[password]@`。

