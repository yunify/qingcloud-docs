---
title: "日志管理"
description: 本小节主要介绍如何管理 RadonDB 数据库日志。 
keywords: radondb 日志管理,日志同步
data: 2021-05-14T00:38:25+09:00
weight: 60
collapsible: false
draft: false
---




## 同步日志

同步日志可以将审计日志拷贝到 SQL 节点的 FTP 目录，可以在内网将 SQL 节点的审计日志下载到本地进行分析。

```bash
wget ftp:// SQL 节点 IP 地址/audit --ftp-user=ftpuser --ftp-password=ftppassword
```

![同步日志](../../_images/copy_logs.png)

**注解**：审计日志只记录最近一个小时的 SQL 记录。默认情况下不开启审计日志，可在初始化集群时或配置参数里设置开启。
