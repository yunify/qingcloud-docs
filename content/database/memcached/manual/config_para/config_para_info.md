---
title: "参数介绍"
description: 本小节主要介绍 Memcached 常用配置项。 
keyword: 常用配置项,公共参数,Memcached,键值数据库
weight: 10
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持对 Memcached 常用配置参数的管理。

本小节主要介绍 AppCenter 中各 Memcached 配置参数的含义。

## 公共参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
| tcp_port   |   1025～65535  |  表示 Memcached TCP 服务监听端口。默认为 `11211`。|
| udp_port   |   1025～65535  |  表示 Memcached UDP 服务监听端口。默认为 `11211`。|
| max_simultaneous _connections   |     1～65000  |  表示数据库最大连接数。默认为 `65000`。|
| max_memory  |      1～65535 |  表示数据库最大内存大小。默认值为 `716`。|
|  chunk_size      |  1～1028      |   表示 key+value+flags 默认键值大小。 默认值为 `48`。 |
|  chunk_size _growth_factor      |  1.01～100      |   表示块增长因子。 默认值为 `1.25`。 |
|  threads      |  1～256      |   表示数据库可用线程数。 默认值为 `1`。 |
|  return_error      |  0、1      |   表示是否在内存耗尽时，返回错误提示。 默认值为 `0`，表示关闭。 |
