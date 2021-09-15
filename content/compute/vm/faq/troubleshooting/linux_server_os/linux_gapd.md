---
title: "Linux 云服务器 gapd 服务异常"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false
---
## 背景介绍

部分用户反馈在 Linux 云服务器详情页面查询监控信息时，无法获取到硬盘的数据，显示为“没有数据”。排查发现大部分为 gapd 服务没有运行或异常导致。gapd 服务异常会导致控制台上部分命令执行失败，如加载 SSH 秘钥等，也可按照下面步骤操作。

## 解决方法

### 检查 gapd 服务

通过 `ps` 命令查看 gapd 进程是否运行，以及 gapd 服务是否正常。若 gapd 服务正常，可以重启下 gapd 服务，若硬盘数据还是无法获取，可以提工单咨询。

```shell
ps -ef | grep gapd  # 查看 gadp 进程
systemctl status gapd  # 查看 gapd 服务状态
systemctl restart gapd  # 重启 gapd 服务
```

### 查看文件

需要查看云服务器对应目录下是否有相应文件。两个文件，分别是 /usr/bin/gapd 和 /usr/lib/systemd/system/gapd.service 。可以执行下列命令查看文件是否存在，若文件不存在，则需要在其他云服务器中拷贝相应文件。

```shell
ls /usr/bin/gapd
ls /usr/lib/systemd/system/gapd.service
```

### 拷贝文件

在另一台云服务器中拷贝相应文件，可以在另一台有文件中的云服务器中执行下列命令。

```shell
scp /usr/bin/gapd username@ip:/usr/bin/gapd
scp /usr/lib/systemd/system/gapd.service username@ip:/usr/lib/systemd/system/gapd.service
```

### 启动服务

执行启动命令，并设置为开机自启。

```shell
systemctl start gapd  # 启动gapd服务
systemctl enable gapd  # 设置gapd服务开机自启
```

