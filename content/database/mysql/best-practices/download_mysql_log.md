---
title: "下载 MySQL 日志"
description: 本小节主要介绍如何下载 MySQL Plus 日志。 
keyword: 数据库,MySQL PLus,关系型数据库,MySQL,日志,
weight: 01
collapsible: false
draft: false
---


MySQL Plus 支持通过 HTTP 服务预览和下载日志，HTTP 服务端口为 `18801` 。

日志服务支持下载 MySQL 错误日志 `mysql-error` 、 MySQL 慢日志 `mysql-slow`、 MySQL 审计日志 `mysql-audit` 、MySQL binlog 文件 `mysql-bin` 和 SSL 证书文件 `mysql-cert` 。

> **说明**
> 
> `mysql-error` 和 `mysql-slow` 仅保留六个日志文件。

## 启动 MySQL 日志服务

### 启动服务

1. 登录管理控制台。
2. 选择**产品与服务** > **数据库与缓存** > **关系型数据库 MySQL Plus**，进入集群管理页面。
3. 选择目标集群，点击目标集群 ID，进入集群详情页面。
4. 在**基本属性**模块，点击集群操作下拉菜单。
5. 展开下拉菜单，点击**启动日志服务端**，进入集群日志服务配置窗口。

   <img src="../../_images/enable_log_server.png" alt="启动日志服务" style="zoom:50%;" />

6. 配置日志服务信息，点选运行服务的角色，并勾选需要预览和下载的 MySQL 日志，输入 HTTP 用户名和密码。

7. 确认配置信息无误后，点击**提交**，返回集群页面。

   待集群状态切换为**活跃**，则成功启动日志服务端。

### 预览日志

- 通过浏览器输入需要下载日志节点的 IP 和 HTTP 服务端口 18801，如 http://192.168.8.6:18801/，输入 HTTP 用户名和密码即可登录预览日志。

   需要在同一 VPC 下云服务器上的浏览器来访问，或者通过云平台 VPN 服务来访问。不要通过端口转发的方式将服务暴露到公网，避免对数据库服务造成重大影响。

   ![download_mysql_log_4](/database/mysql/_images/download_mysql_log_4.png)

- 通过拨入 MySQL Plus 集群所在 VPC 的 VPN 服务，来内网访问 MySQL Plus 集群日志服务.建议使用 OpenVPN，可以参考 **VPC 隧道服务**说明。

   ![download_mysql_log_5](/database/mysql/_images/download_mysql_log_5.png)

### 下载日志

进入需要下载的日志目录，点击日志文件进行下载即可。

![download_mysql_log_6](/database/mysql/_images/download_mysql_log_6.png)

### 下载集群日志

可以通过 wget 指令在 MySQL Plus 同 VPC 下的私有网络云服务器里下载集群日志.

- 下载所有目录

  ```
   wget -r http://192.168.8.6/:18801 --http-user=Admin --http-password=Admin123@ --reject="index.html*"
  ```

- 下载单个目录

   ```
   wget -r http://192.168.8.6:18801/mysql-bin/ --http-user=Admin --http-password=Admin123@ --reject="index.html*" -np
   ```

- 下载单个文件

   ```
   wget -r http://192.168.8.6:18801/mysql-bin/mysql-bin.000001 --http-user=Admin --http-password=Admin123@ --reject="index.html*"
   ```

- 下载限速

  为避免下载过大文件对MySQL服务造成影响，建议wget时加限速处理：

   ```
   wget -r --limit-rate=100k http://192.168.8.6:18801 --http-user=Admin --http-password=Admin123@ --reject="index.html
   ```

   ```
   wget -r --limit-rate=8m http://192.168.8.6:18801 --http-user=Admin --http-password=Admin123@ --reject="index.html*"
   ```

## 下载 general 日志

1. 开启 general 日志。

   MySQL 的 general 日志默认没有开启，需要用户自己开启。 

   ```
   set global general_log=on;
   ```

2. 拷贝日志。

   提交工单联系云平台技术支持后台拷贝。

3. 执行如下通过内网下载general日志。
   
   ```
   wget -r ftp://node_ip/mysql-audit.log --ftp-user=ftpuser --ftp-password=ftppassword
   ```
