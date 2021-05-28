---
title: "配置参数管理"
description: 本小节主要介绍如何管理 Memcached 配置参数。 
keywords: Memcached 配置参数
data: 2021-05-14T00:38:25+09:00
weight: 30
collapsible: false
draft: false
---



## 默认配置参数

默认公共参数如下表，更多配置参数说明，请参见 Memcached 官方说明。

| <span style="display:inline-block;width:180px">参数</span> | <span style="display:inline-block;width:280px">参数说明</span> | <span style="display:inline-block;width:120px">取值范围</span> | 
|:--- |:--- |:--- |
| tcp_port | 缓存服务端口 TCP 端口。<li>默认值：11211 | 1024～65535 |
| udp_port | 缓存服务端口 UDP 端口。<li>默认值：11211<li>取值0为禁用 UDP 服务端口。 | 0，1024～65535 |
| max_simultaneous_connections | 最大连接数。<li>默认值：65000 | 1～65000 |
| max_memory | 最大内存量。<li>默认值：716<li>单位：MB| 1～65535|
| chunk_size| Chunk 默认键值大小。<li>默认值：48 | 1～1024 |
| chunk_size_growth_factor | Chunk 增长因子。<li>默认值：1.25 | 1.01～100 |
| threads| 可用线程数量。<li>默认值：1 | 1～256 |
| return_error| 内存不足时的行为。<li>取值0 为删除 key，取值1 为返回错误。<li>默认值：0| - |
| cas_disabled| 禁用 CAS (Check and Set)。<li>取值0为启用，取值1为禁用。<li>默认值：0 | - |

## 修改配置参数

> 注意：
> 
> - 修改参数后，集群将重启以应用新的参数配置，请在业务空闲期修改参数。

1. 在集群管理页面，点击集群 ID，进入集群详情页面。
2. 在**配置参数**页签，点击**修改属性**。

   ![配置参数](../../_images/config.png)

3. 在参数值可编辑状态，根据参数取值范围，编辑参数值。
4. 点击**保存**，保存修改的参数。

   ![编辑参数值](../../_images/modify_config.png)
