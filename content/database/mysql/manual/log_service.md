---
title: "启动日志服务"
description: test
weight: 90
draft: false
---

MySQL Plus 支持通过 HTTP 服务预览和下载日志，HTTP 服务端口为 `18801` 。

日志服务支持下载 mysql 错误日志 `mysql-error` 和 mysql 慢日志 `mysql-slow`（二者都保留六个日志文件），同时支持下载 mysql 审计日志 `mysql-audit` ， mysql binlog 文件 `mysql-bin` 和 SSL 证书文件 `mysql-cert` 。


## 启动日志服务

1. 在QingCloud 集群管理控制台。
2. 选择目标集群，点击**启动日志服务端**。
3. 选择运行服务的角色，勾选需要预览和下载的 MySQL 日志，并输入 HTTP 用户名和密码。
4. 点击**提交**，即可启动日志服务。
   ![](../../_images/start_caddy_server.png)


### 预览日志

![](../../_images/preview_logs_log-in.png)

通过浏览器输入需要下载日志节点的 IP 和 HTTP 服务端口 18801，如 `http://192.168.0.18:18801`，输入 HTTP 用户名和密码即可登录预览日志。

需要在同一 VPC 下云服务器上的浏览器来访问，或者通过青云 VPN 服务来访问。不要通过端口转发的方式将服务暴露到公网，避免对数据库服务造成重大影响。

![](../../_images/preview_logs.png)

![](../../_images/caddy_log_download.png)

**注解**：可以通过鼠标点击下载日志。

### wget 下载日志

1. 下载所有目录

   ```
   wget -r http://192.168.0.18:18801 --http-user=admin --http-password=Admin123@ --reject="index.html*"
   ```

2. 下载单个目录

    ```
    wget -r http://192.168.0.18:18801/mysql-bin/ --http-user=admin --http-password=Admin123@ --reject="index.html*" -np
   ```

3. 下载单个文件

   ```
   wget -r http://192.168.0.18:18801/mysql-bin/mysql-bin.000003 --http-user=admin --http-password=Admin123@ --reject="index.html*"
   ```

## 关闭日志服务

![](../../_images/stop_caddy_server.png)

关闭日志服务可以勾选是否清理日志，如果选则 `YES`，会将 `mysql-error` ，`mysql-slow` 和 `mysql-audit` 的归档日志清理掉，如 `mysql-error.log.*` ， `mysql-slow.log.*`　，`mysql-audit.log.*`　。
