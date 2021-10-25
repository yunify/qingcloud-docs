---
title: "Logstash 自定义启动配置文件"
description: 本小节主要介绍 Logstash 如何自定义启动配置文件。
keywords: Logstash 自定义启动配置文件,
weight: 50
collapsible: false
draft: false
---

本小节主要介绍 Logstash 如何自定义启动配置文件。

## 操作步骤

默认情况下， Logstash 的启动配置文件会根据 **配置参数** 中 ** Logstash 节点** 的 `input_conf_content、filter_conf_content、output_conf_content、output_es_content` 配置项自动生成，如果用户想自定义 logstash.conf 配置文件，只需在 `/data/logstash/config/` 目录创建 logstash.conf.lock 文件，系统就不再覆盖  logstash.conf 文件。

用户通过上述方法修改 logstash.conf 配置文件后，需执行 `/usr/share/logstash/sbin/restart.sh` 重启 Logstash 服务。

> **说明**
>
> 如显示 `[=[Restart]=] Can't lock the file.`，则表示其他操作正在执行，请稍后再次尝试重启命令；
>
> 如果重启失败，可查看位于 `/data/logstash/logs/logstash-plain.log` 和 `/var/log/syslog` 的日志文件排查原因。

> **说明**
>
> `ELK 5.5.1 - QingCloud 1.2.0` 及以前版本请使用如下命令：
>
> `sudo docker exec -it $(docker ps -q) restart.sh`
