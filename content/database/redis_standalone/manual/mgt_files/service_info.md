---
title: "WebConsole 服务概述"
description: 本小节主要介绍 WebConsole 基本信息。 
keyword: WebConsole,日志文件,RDB 数据文件,AOF 文件,键值数据库,Redis,Redis Standalone,数据库
weight: 05
collapsible: false
draft: false
---


Redis Standalone 通过集成 Caddy 组件，提供 WebConsole 服务，支持在线查看和下载日志、RDB 数据、 AOF 等文件的服务。

- 通过浏览器地址 `http://<Redis_IP>:80` 访问服务页面，支持在线查看和下载文件。
- 通过安装 wget 等工具，支持使用命令直接下载文件。

## 文件类型

|<span style="display:inline-block;width:80px">文件标记</span> |<span style="display:inline-block;width:240px">文件类型</span>|<span style="display:inline-block;width:280px">说明</span> |
|:----|:----|:----|
|dump.rdb   |  RDB 数据文件 |RDB 数据文件是将 Redis 快照（snapshot）以二进制的方式保存到磁盘中，体现了 Redis 是基于内存的缓存数据库，不管对于存储到硬盘还是恢复数据都十分快捷。    |  
|appendonly.aof  | AOF 文件 |AOF 文件是以协议文本的方式，将所有对 Redis 进行过写入的命令（及其参数）记录到 AOF 文件，以此达到记录 Redis 状态的目的。   |  
|logs   |   日志文件  | Redis 的日志文件主要记录 `redis-sentinel.log` 和 `redis-server.log`。默认仅保留最近 20 条记录，且文件最大 1M。 |
