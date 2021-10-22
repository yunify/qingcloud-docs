---
title: "qsftpd"
date: 2020-11-24T10:08:56+09:00
description:
draft: false
collapsible: false
weight: 16
---

qsftpd 是 QingStor 对象存储提供的 FTP Server。用户通过简单的配置，即可通过 FTP 协议使用 QingStor 对象存储服务。该工具已在 GitHub 开源，更多详情可参见 [https://github.com/qingstor/qsftpd](https://github.com/qingstor/qsftpd)。

## 安装
qsftpd 支持 Linux、macOS 和 Windows 操作系统。用户可访问 GitHub 项目的 [Releases](https://github.com/qingstor/qsftpd/releases) 页面查看和下载相应版本。

## 配置
在正式使用 qsftpd 工具之前，需要创建并填写配置文件 **qsftpd.yaml**。详细操作步骤如下：

1. 在终端执行如下命令，创建配置文件：
```yaml
touch qsftpd.yaml
```

2. 配置文件内容如下：
```yaml
qingstor:
  access_key_id: access_key_id_example
  secret_access_key: secret_access_key_example
  host: qingstor.com
  port: 443
  protocol: https
  log_level: warn

bucket_name: bucket_name_example
zone: pek3a

listen_host: 127.0.0.1
listen_port: 21
public_host: 127.0.0.1
max_connections: 128
start_port: 6000 
end_port: 7000
log_level: error 

cache_path: /var/cache/qsftpd

# 认证设置，默认允许匿名用户登录，也可以指定特定的用户登录
#users:
#  username_example: password_example
```

   **说明：**
   - `qingstor` 用于标识后续字段为 QingStor 对象存储的基本信息。
   - `access_key_id` 与 `secret_access_key` 用于访问 QingStor 对象存储的 AK 与 SK，须根据实际情况进行填写。具体可参照 [获取 Access Key](/storage/object-storage/api/practices/signature/#获取-access-key)。
   - `host` QingStor 对象存储的域名。公有云环境无需修改。
   - `port` 访问 QingStor 对象存储的端口号。公有云环境无需修改。
   - `protocol` 访问 QingStor 对象存储的协议。公有云环境无需修改。
   - `log_level` QingStor 对象存储的日志级别。日志内容显示从多到少依次可设置为：debug，info，warn，error，fatal，panic。
   - `bucket_name` 待访问的 QingStor 对象存储的 Bucket 名。须根据实际情况进行填写。
   - `zone` 待访问的 QingStor 对象存储的 Zone。
   - `listen_host listen_port public_host max_connections` FTP Server 配置，监听的端口号以及最大连接数。
   - `start_port end_port` FTP 数据连接建立方式为被动模式时，将会随机在 `start_port` 与 `end_port` 之间选择端口号进行数据传输。默认值是从 6000 至 7000。
   - `log_level` FTP Server 的日志等级。日志内容显示从多到少依次可设置为：debug，info，warn，error，fatal，panic。
   - `cache_path` 缓存路径，qsftpd 将会在每次启动时清除 `cache_path` 配置的目录。
   - `users` 认证设置，默认允许匿名用户登录，也可以指定的用户登录。若指定用户，须根据配置上文中的示例进行填写用户信息。
   -  除 `access_key_id，secret_access_key，bucket_name，zone` 以外，其余字段均有默认值，用户可无需修改。
   - qsftpd 的配置文件可根据需要进行配置。模板可以 [查看](https://github.com/qingstor/qsftpd/blob/master/qsftpd.yaml.example)。


## 使用说明

### 帮助信息

用户可执行如下命令行，查看帮助信息：

```yaml
$ qsftpd -h
A FTP server that persists all data to QingStor Object Storage.

Usage:
  qsftpd [flags]

Flags:
  -c, --config string   Specify config file (default "qsftpd.yaml")
  -h, --help            help for qsftpd
  -v, --version         Show version
```

### 选项列表

根据前文可知，qsftpd 支持的常规命令选项如下所示:

| 参数简写 | 参数全名 | 类型 | 是否必须 | 说明 |
|-|-|-|-|-|
| -c | –config | string | 否 | 指定配置文件的路径，默认为 `qsftpd.yaml` |
| -h | –help | string | 否 | 输出帮助信息 |
| -v | –version | string | 否 | 输出版本信息 |



### 使用示例

1. 创建配置文件，如 `qsftpd.yaml`，按照前文的配置文件说明进行配置。参考 [配置](#配置)

2. 执行如下命令，启动 FTP Server，终端显示如下打印，即，说明服务端准备就绪:
```bash
$ qsftpd -c path/to/your/qsftpd.yaml
[2017-04-12T03:24:40.541Z #2527]  INFO -- : Listening... 127.0.0.1:21
[2017-04-12T03:24:40.541Z #2527]  INFO -- : Starting...
[2017-04-12T03:24:49.330Z #2527]  INFO -- : FTP Client connected: ftp.connected, id: 76e209d6a89448279e947a7babe0097d, RemoteAddr: 127.0.0.1:51788, Total: 1
......
```

3. 在客户端，执行如下命令行，通过 FTP 客户端连接 FTP Server 进行测试:
```bash
$ ftp -a 127.0.0.1
Connected to 127.0.0.1.
220 Welcome to QSFTP Server
331 User name okay, need password.
230 Password ok, continue
Remote system type is UNIX.
Using binary mode to transfer files.
ftp>
```

4. 客户端成功链接后，FTP 服务端显示如下打印:
```bash
[2017-04-12T03:24:49.330Z #2527]  INFO -- : FTP Client connected: ftp.connected, id: 76e209d6a89448279e947a7babe0097d, RemoteAddr: 127.0.0.1:51788, Total: 1
......
```

5. 在客户端执行如下命令行，查看文件列表:
```bash
ftp> ls
229 Entering Extended Passive Mode (|||6081|)
150 Using transfer connection
d--------- 1 ftp ftp            0  Nov 30 00:00  test-output

226 Closing transfer connection
```

6. 在客户端执行如下命令行，上传文件:
```bash
ftp> put AUTHORS
local: AUTHORS remote: AUTHORS
229 Entering Extended Passive Mode (|||6887|)
150 Using transfer connection
100% |***********************************|   146       91.68 KiB/s    00:00 ETA
226 Closing transfer connection
146 bytes sent in 00:00 (2.19 KiB/s)
ftp>
```
