---
title: "预览和下载日志"
description: 本小节主要介绍如何下载日志。 
keyword: 下载日志,MongoDB,文档数据库,数据库
weight: 20
collapsible: false
draft: false
---


开启日志服务端后，可通过 HTTP 服务预览和下载 MongoDB 数据库节点日志，HTTP 服务端口为 `8000` 。

- 通过 HTTP 服务端可预览和下载单个日志文件。
- 通过 wget 文件下载工具，可下载日志目录和单个文件。

> **注意**
>
> 下载或预览的服务器需与数据库网络需畅通。
> 
> 若网络不通，可通过[边界路由器](/network/border_router/)或 [VPN](/network/vpc/manual/vpn/) 等方式打通网络。不建议通过**端口转发**的方式将服务暴露到外网，以免造成数据库关键信息暴露等风险。

本小节主要介绍如何预览和下载日志。

## 前提条件

- 已获取 HTTP 服务日志端节点地址，以及登录账号和密码。
- 已在本地安装 wget 文件下载工具。
- MongoDB 集群状态为**活跃**。

## 通过 HTTP 查看日志

以 `http://<节点 IP>:8000`日志服务地址，访问 Caddy Server。

1. 打开浏览器，输入节点日志服务地址。
2. 输入 Cadyy 用户名和密码，登录 HTTP 服务端。

   ![登录日志服务端](../../../_images/preview_logs_log-in.png)  

3. 查看日志文件，并进入目录查看日志文件详情。

   ![查看日志文件](../../../_images/caddy_log_preview.png)

   ![查看日志详情](../../../_images/caddy_log_preview2.png)

## 通过 wget 下载日志

执行如下命令，可下载目录下所有日志。

```shell
$ wget -r http://<节点 IP>:8000 --http-user=<Caddy 用户名> --http-password=<Caddy 用户密码>
```
