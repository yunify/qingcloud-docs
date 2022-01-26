---
title: "数据库 Key"
description: 本小节主要介绍 Redis Standalone Key 问题。 
keyword: 大 Key,热 Key,键值数据库,数据库
weight: 50
collapsible: false
draft: false
---

## 如何减少大 Key 和热 Key 过大问题？

- string 类型控制在 10KB 以内，hash、list、set、zset 元素尽量不超过 5000B。
- key 的命名前缀为业务缩写，禁止包含特殊字符(空格、换行、单双引号、其他转义字符等)。
- Redis 事务功能较弱，不建议过多使用。
- 短连接性能差，推荐使用带有连接池的客户端。
- 如果只是用于数据缓存，容忍数据丢失，建议关闭持久化。

## 为什么单个 Key 不能过大？

在 Redis 中，若单个热 Key 过大，容易造成对于单个 Key 的操作占用内存、CPU、网络带宽等资源过高，影响其他 Key 操作。
