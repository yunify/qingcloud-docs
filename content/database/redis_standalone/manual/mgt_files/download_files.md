---
title: "预览和下载文件"
description: 本小节主要介绍如何下载日志。 
keyword: 下载日志,键值数据库,Redis,Redis Standalone,数据库
weight: 20
collapsible: false
draft: false
---


开启 WebConsole 服务后，可通过 HTTP 服务预览和下载 Redis Standalone 集群节点日志，HTTP 服务端口为 `80` 。

- 通过 HTTP 服务端可预览和下载单个日志文件。
- 通过 wget 文件下载工具，可下载日志目录和单个文件。

本小节主要介绍如何预览和下载文件。

## 前提条件

- Redis Standalone 集群状态为**活跃**，且已[开启 WebConsole 服务](../enable_webconsole)。
- 已打通访问服务器与 Redis 之间的网络。
  
  - 建议使用[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。
  - 不建议通过**端口转发**方式将服务暴露到外网，以免造成关键信息暴露等风险。

- 已在服务器安装 wget 文件下载工具，且服务器与 Redis 之间的网络通畅。

## 方式 1：通过浏览器预览和下载

在浏览器中访问文件管理页面，可预览和下载各节点的文件。

1. 在浏览器输入访问地址  `http://<Redis_IP>:80`。

   -若未设置密码，将直接进入文件查看页面。

   -若设置了密码，将弹出身份验证窗口，需要输入用户名及密码，点击**确定**，进入文件查看页面。

   <img src="../../../_images/check_webconsole.png" alt="访问 WebConsole 服务" style="zoom:50%;" />

2. 点击节点下文件获文件夹，即可预览和下载文件。

   > **说明**
   >
   > 若设置了文件查看用户名和密码，每次切换节点 IP 时，都需要输入用户名及密码。
   >
   > 所有节点的用户名及密码相同。

## 方式 2：通过 wget 下载

在 Linux 云服务器中安装 wget 下载工具，执行以下命令即可下载需要的文件。

- 下载 RDB 文件

```shell
wget http://<user_name>:<password>@<Redis_IP>/redis/dump.rdb
```

- 下载 AOF 文件

```shell
wget http://<user_name>:<password>@<Redis_IP>/redis/appendonly.aof
```

- 下载日志文件

```shell
wget http://<user_name>:<password>@<Redis_IP>/redis/redis-server.log

```

> **说明**
>
> 若未设置用户名及密码，则只需要将 `<Redis_IP>` 替换为目标节点 IP，去掉 `<user_name>:<password>@`。
