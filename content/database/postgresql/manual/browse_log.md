---
title: "日志管理"
description: 本小节主要介绍如何获取 PostgreSQL 运行日志。 
keywords: PostgreSQL 运行日志；
weight: 90
collapsible: false
---

QingCloud PostgreSQL 的日志默认保存30天，每天会自动保存一个日志文件，超过30天系统自动清理。日志的命名规则为`postgresqllog_xx.csv`，`xx`表示在当月的第多少天。

- 为了方便用户获取 PostgreSQL 的运行日志，QingCloud PostgreSQL 默认开启 FTP 服务。用户可以通过 FTP 获取 PostgreSQL 的日志。默认用户名为 `ftp_pg`，默认密码为 `Pa88word`。
- 通过 wget 文件下载工具，可下载日志目录和单个文件。

> **注意**
> 
> 下载或预览的服务器需与数据库在同一 VPC 下，或者通过 **VPN 服务**来访问。不建议通过端口转发的方式将服务暴露到外网，以免造成数据库关键信息暴露等风险。

本小节主要介绍如何下载 PostgreSQL 运行日志。

## 前提条件

- 已获取 HTTP 服务日志端节点地址，以及登录账号和密码。
- 已在服务器安装 FTP 客户端工具。
- 已在服务器安装 wget 文件下载工具。

## 操作步骤

1. 通过 FTP 命令可以获取到日志，其中 IP 对应 PostgreSQL 节点所在的 IP 地址。

    ```bash
    ftp 192.168.100.13
    ls
    exit
    ```

2. 通过 wget 文件下载工具，下载日志。示例如下：

   ```bash
   wget ftp://192.168.100.13/postgresqllog_24.csv --ftp-user=ftp_pg --ftp-password=Pa88word
   ```

![logcheck](../../_images/logcheck.png)
