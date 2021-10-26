---
title: "App 设计说明"
description: 本小节主要介绍 App 设计说明。
keywords: App 设计说明,
weight: 57
collapsible: false
draft: false
---

用户可通过网页 VNC 登录到 Logstash 节点，安装目录在 `/usr/share/logstash`。

> **说明**
>
> `ELK 5.5.1 - QingCloud 1.2.0` 及以前版本的 Logstash 运行在 Docker 容器的 `/opt/logstash` 目录下，用户需先进入 Docker 容器查看 Logstash 文件：

```bash
# 执行如下命令进入运行中的 CONTAINER 中
sudo docker exec -it $(docker ps -q) /bin/bash
# 然后在CONTAINER中执行如下命令即可看到 Logstash 的安装目录
ls
# 执行如下命令可看到其位于/opt/logstash目录下
pwd
```
