---
title: "节点概述"
description: 本小节主要介绍 Memcached 节点基本信息。 
keyword: 节点信息,Memcached,键值数据库
weight: 01
collapsible: false
draft: false
---


Memcached 一个集群可包含多个节点，一个节点即一个数据库计算基本计量单位，对应一台虚拟机和一台存储磁盘。

- Memcached 的所有节点是可读可写的。
- 由于 Memcached 不支持持久化，当 Memcached 节点重启时，位于内存的缓存空间会被重置。
