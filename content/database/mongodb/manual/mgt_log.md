---
title: "日志管理"
description: 本小节主要介绍管理 QingCloud MongoDB 集群日志。 
keywords: mongodb 集群日志, 
data: 2021-05-14T00:38:25+09:00
weight: 80
collapsible: false
draft: false
---


## 同步日志

同步日志功能可以将 mongod.log 拷贝到系统的 FTP 目录，同步后可以在内网下载到本地进行分析。

> _MongoDB 4.0.3 - QingCloud 1.2.0_ 版本使用 Caddy 服务替代了老版本的 FTP 服务

![](../../_images/copy_log.png)

## 关闭同步日志

该栏为 _MongoDB 4.0.3 - QingCloud 1.2.0_ 版本新增服务，下载或查看完日志，您可以关闭 Caddy 服务

![](../../_images/stop_copy_log.png)

## 清理日志

清理日志功能可以将 mongod.log 清空，减少日志的磁盘空间占用。

![](../../_images/clean_log.png)
