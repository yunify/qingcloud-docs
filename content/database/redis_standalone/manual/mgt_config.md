---
title: "配置参数管理"
description: 本小节主要介绍如何管理 Redis Standalone 配置参数。 
keywords: redis standalone 配置参数
weight: 25
collapsible: false
draft: false
---




您可以在此修改环境参数。参数修改完成保存后，集群将重启以应用新的参数配置，所以请在服务压力相对较小的时候修改参数。

> **如果修改了 port 参数，则需要打开集群网络防火墙中的对应的端口号。如修改 port 参数为 6378 ，此时需要打开防火墙的 6378 端口。**

![修改参数](../../_images/change_env.png) 
