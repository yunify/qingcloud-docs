---
title: "Windows云服务器搭建FTP并使用对象存储"
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

qsftpd 支持 Linux、MacOS 和 Windows 操作系统，可访问 GitHub 项目的 [Releases](https://github.com/yunify/qsftpd/releases) 页面查看和下载历史版本。Windows最新版本下载链接：[qsftpd-latest-windows_amd64](https://pek3a.qingstor.com/releases-qs/qsftpd/qsftpd-latest-windows_amd64.tar.gz)



## 3. 使用示例

### 1) 下载并解压tar包

下载链接：[https://pek3a.qingstor.com/releases-qs/qsftpd/qsftpd-latest-windows_amd64.tar.gz](https://pek3a.qingstor.com/releases-qs/qsftpd/qsftpd-latest-windows_amd64.tar.gz)

将tar.gz文件解压为.tar文件，再次解压，生成可执行文件qsftp.exe。

### 2) 创建配置文件

在qsftp.exe所在的文件夹中创建一个名为qsftpd.yaml的文件，填写相关信息，可参考下面配置，access_key_id、secret_access_key、bucket_name、zone需要自行填写。

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

通过win+R，打开运行界面，输入cmd。

![](../../_images/qsftpd_use/qsftpd_use7.png)

然后进入到相应的盘符中，执行文件。

![](../../_images/qsftpd_use/qsftpd_use8.png)

![](../../_images/qsftpd_use/qsftpd_use9.png)

### 4) 连接FTP Server

可以再运行一个cmd，输入ftp 172.0.0.1(为配置文件中所写的ip)。也可以自行使用其他ftp的客户端。

配置文件中未添加用户名及密码，因此需要匿名登录，输入用户名及密码：anonymous/anonymous，即可正常登录。

![](../../_images/qsftpd_use/qsftpd_use10.png) 