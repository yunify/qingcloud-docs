---
title: "qsftpd"
date: 2020-11-24T10:08:56+09:00
description:
draft: false
collapsible: false
weight: 18
---

qsftpd 是一个将 QingStor 对象存储作为存储后端的 FTP Server，用户通过简单的配置，即可通过 FTP 协议使用对象存储服务。

qsftpd 已在 GitHub 开源，更多详情可参见 [https://github.com/qingstor/qsftpd](https://github.com/qingstor/qsftpd)。

## 准备工作

使用 qsftpd 之前需要创建 Bucket，并获取一对 API 密钥，API 密钥可以在 [青云控制台](https://console.qingcloud.com/access_keys/) 申请。

## 下载安装

qsftpd 支持 Linux、macOS 和 Windows 操作系统，可访问 GitHub 项目的 [Releases](https://github.com/qingstor/qsftpd/releases) 页面查看和下载历史版本。

最新版本下载链接如下：

- [qsftpd-latest-darwin_amd64.tar.gz](https://pek3a.qingstor.com/releases-qs/qsftpd/qsftpd-latest-darwin_amd64.tar.gz)
- [qsftpd-latest-linux_amd64.tar.gz](https://pek3a.qingstor.com/releases-qs/qsftpd/qsftpd-latest-linux_amd64.tar.gz)
- [qsftpd-latest-windows_amd64.tar.gz](https://pek3a.qingstor.com/releases-qs/qsftpd/qsftpd-latest-windows_amd64.tar.gz)

## 选项列表

下面列出 qsftpd 支持的命令行选项。

常规命令选项:

| Short | Full | Type | Required | Usage |
|-|-|-|-|-|
| -c | –config | string | No | 指定配置文件的路径，默认为 “qsftpd.yaml” |
| -h | –help | string | No | 输出帮助信息 |
| -v | –version | string | No | 输出版本信息 |

## 配置文件说明

qsftpd 的配置文件默认配置文件如下，可根据需要进行配置: (模板可以[查看](https://github.com/qingstor/qsftpd/blob/master/qsftpd.yaml.example))

```yaml
# 设置 QingStor 对象存储服务
qingstor:
  access_key_id: access_key_id_example
  secret_access_key: secret_access_key_example
  host: qingstor.com
  port: 443
  protocol: https
  log_level: warn

# 填写需要使用的 Bucket
bucket_name: bucket_name_example
zone: pek3a

# FTP Server 配置，如监听的端口号和最大连接数
listen_host: 127.0.0.1
listen_port: 21
public_host: 127.0.0.1
max_connections: 128
# 被动模式下会随机从 start_port 与 end_port 之间选择进行数据传输
# 默认值是从 6000 至 7000
start_port: 6000 
end_port: 7000

# FTP Server 的日志等级
log_level: error 

# !!! 注意 !!! qsftpd 将会在每次启动时清除 cache_path 配置的目录
cache_path: /var/cache/qsftpd

# 认证设置，默认允许匿名用户登录，也可以指定特定的用户登录
#users:
#  username_example: password_example
```

## 使用示例

创建配置文件，如 qsftpd.yaml，按照上述的配置文件说明进行配置。

启动 FTP Server:

```bash
$ qsftpd -c path/to/your/qsftpd.yaml
[2017-04-12T03:24:40.541Z #2527]  INFO -- : Listening... 127.0.0.1:21
[2017-04-12T03:24:40.541Z #2527]  INFO -- : Starting...
[2017-04-12T03:24:49.330Z #2527]  INFO -- : FTP Client connected: ftp.connected, id: 76e209d6a89448279e947a7babe0097d, RemoteAddr: 127.0.0.1:51788, Total: 1
......
```

最后使用 ftp 客户端连接 FTP Server 进行测试:

```bash
$ ftp -a 127.0.0.1
Connected to 127.0.0.1.
220 Welcome to QSFTP Server
331 User name okay, need password.
230 Password ok, continue
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> ls
229 Entering Extended Passive Mode (|||6081|)
150 Using transfer connection
d--------- 1 ftp ftp            0  Nov 30 00:00  test-output

226 Closing transfer connection
ftp> put AUTHORS
local: AUTHORS remote: AUTHORS
229 Entering Extended Passive Mode (|||6887|)
150 Using transfer connection
100% |***********************************|   146       91.68 KiB/s    00:00 ETA
226 Closing transfer connection
146 bytes sent in 00:00 (2.19 KiB/s)
ftp>
```
