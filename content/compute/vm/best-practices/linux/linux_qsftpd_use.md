---
title: "Linux云服务器搭建FTP并使用对象存储"
description: Test description
draft: false
---

# 背景介绍

对象存储是面向海量非结构化数据的通用数据存储平台，提供安全可靠、低成本的云端存储服务，可以作为FTP服务后端的存储服务来为客户提供便捷、有效的数据存储功能。

# qsftpd介绍

qsftpd 是一个将 QingStor 对象存储作为存储后端的 FTP Server，用户通过简单的配置，即可通过 FTP 协议使用对象存储服务。

qsftpd 已在 GitHub 开源，更多详情可参见[GitHub](https://github.com/yunify/qsftpd)。

## 1. 准备工作

### 1) 创建Bucket

通过控制台对象存储，点击创建，输入名称，提交。

![](../../_images/qsftpd_use/qsftpd_use1.png)

### 2) 申请API密钥

控制台---个人信息---api密钥，点击创建，提交，然后下载到本地，注意：此链接仅能下载一次。

配额不够可以开工单申请。

![](../../_images/qsftpd_use/qsftpd_use2.png)

### 3) 下载安装

qsftpd 支持 Linux、MacOS 和 Windows 操作系统，可访问 GitHub 项目的 [Releases](https://github.com/yunify/qsftpd/releases) 页面查看和下载历史版本。Linux最新版本下载链接：[qsftpd-latest-linux_amd64](https://pek3a.qingstor.com/releases-qs/qsftpd/qsftpd-latest-linux_amd64.tar.gz)。

## 2. 使用示例

本文档使用的是CentOS 7.7，其余版本的系统使用方法一样。

### 1) 下载tar包

使用wget将tar包下载至linux主机中。

```shell
yum -y install wget
wget https://pek3a.qingstor.com/releases-qs/qsftpd/qsftpd-latest-linux_amd64.tar.gz
tar -zxvf qsftpd-latest-linux_amd64.tar.gz
./qsftpd -h
```

![](../../_images/qsftpd_use/qsftpd_use3.png)

此时，qsftpd已能正常使用。

### 2) 创建配置文件

```shell
 vi qsftpd.yaml
```

可以参考此配置（access_key_id、secret_access_key、bucket_name、zone需要自行填写）：

```yaml
# QingStor service settings
qingstor:
  access_key_id: your_access_key_id
  secret_access_key: your_secret_access_key  
host: qingstor.com
  port: 443
  protocol: https
  log_level: warn

# Bucket settings
bucket_name: your_bucket_name
zone: pek3b

# FTP server settings
listen_host: 127.0.0.1
listen_port: 21
public_host: 127.0.0.1
max_connections: 128
start_port: 6000
end_port: 7000
#log_level: error
# !!! qsftpd will clean the cache_path every time starts
#cache_path: /var/cache/qsftpd

# Authentication settings
# Allowed anonymous login by default.
# If you want to specify ftp users, uncomment the lines below and add username
# and password.
#users:
#  username_example: password_example
```

### 3) 启动FTP Server

```shell
./qsftpd -c qsftpd.yaml
```

![](../../_images/qsftpd_use/qsftpd_use4.png)

此时，ftp server已正常运行,可以使用netstat命令来查看监听状态。

```shell
netstat -lntp | grep 21
```

![](../../_images/qsftpd_use/qsftpd_use5.png) 

### 4) 连接FTP Server

```shell
ftp 127.0.0.1
```

配置文件中未添加用户名及密码，因此需要匿名登录，输入用户名及密码：anonymous/anonymous，即可正常登录。

![](../../_images/qsftpd_use/qsftpd_use6.png)