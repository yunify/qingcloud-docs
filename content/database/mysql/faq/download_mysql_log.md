---
title: "下载 MySQL日志"
description: Test description
draft: false
enableToc: false
---

### 1.启动MySQL日志服务端

MySQL Plus 支持通过 HTTP 服务预览和下载日志，HTTP 服务端口为 `18801` 。

日志服务支持下载 MySQL错误日志 `mysql-error` 和 MySQL慢日志 `mysql-slow`（二者都保留六个日志文件），同时支持下载 MySQL审计日志 `mysql-audit` ， MySQL binlog文件 `mysql-bin` 和 SSL 证书文件 `mysql-cert` 。

#### 1.1启动服务

AppCenter 控制台-集群管理-点击MySQL Plus集群资源id进入到集群详情界面

![download_mysql_log_1](/database/mysql/_images/download_mysql_log_1.png)

![download_mysql_log_2](/database/mysql/_images/download_mysql_log_2.png)

![download_mysql_log_3](/database/mysql/_images/download_mysql_log_3.png)

**注解**：点选运行服务的角色，并勾选需要预览和下载的 MySQL 日志，输入 HTTP 用户名和密码点击提交即可启动日志服务。

#### 1.2预览日志

![download_mysql_log_4](/database/mysql/_images/download_mysql_log_4.png)

**注解**：通过浏览器输入需要下载日志节点的 IP 和 HTTP 服务端口 18801，如 http://192.168.8.6:18801/，输入 HTTP 用户名和密码即可登录预览日志。（需要在同一 VPC 下云服务器上的浏览器来访问，或者通过青云 VPN 服务来访问。不要通过端口转发的方式将服务暴露到公网，避免对数据库服务造成重大影响！）

1.2.1通过拨入MySQL Plus集群所在VPC的VPN服务，来内网访问MySQL Plus集群日志服务，建议使用OpenVPN，可以参考：https://docsv3.qingcloud.com/network/vpc/manual/vpn/#openvpn-%E9%9A%A7%E9%81%93%E6%9C%8D%E5%8A%A1

![download_mysql_log_5](/database/mysql/_images/download_mysql_log_5.png)

#### 1.3下载日志

进入需要下载的日志目录，点击日志文件进行下载即可

![download_mysql_log_6](/database/mysql/_images/download_mysql_log_6.png)

#### 1.4可以通过wget指令在MySQL Plus同VPC下的私有网络云服务器里下载集群日志

1.4.1下载所有目录

```
wget -r http://192.168.8.6/:18801 --http-user=Admin --http-password=Admin123@ --reject="index.html*"
```

1.4.2下载单个目录

```
wget -r http://192.168.8.6:18801/mysql-bin/ --http-user=Admin --http-password=Admin123@ --reject="index.html*" -np
```

1.4.3下载单个文件

```
wget -r http://192.168.8.6:18801/mysql-bin/mysql-bin.000001 --http-user=Admin --http-password=Admin123@ --reject="index.html*"
```

1.4.4下载限速

为避免下载过大文件对MySQL服务造成影响，建议wget时加限速处理：

```
wget -r --limit-rate=100k http://192.168.8.6:18801 --http-user=Admin --http-password=Admin123@ --reject="index.html
```

```
wget -r --limit-rate=8m http://192.168.8.6:18801 --http-user=Admin --http-password=Admin123@ --reject="index.html*"
```

### 2.下载general日志

#### 2.1 MySQL的general日志默认没有开启，需要用户自己开启 

```
set global general_log=on;
```

#### 2.2 提交工单联系青云同事后台拷贝；

#### 2.3 用户可通过内网下载general日志：

```
wget -r ftp://node_ip/mysql-audit.log --ftp-user=ftpuser --ftp-password=ftppassword
```



