---
title: "功能问题"
keywords: Memcached, QingCloud 
weight: 10
collapsible: false
draft: false
---

##  Memcached 与 Redis 有何区别，如何选择？

青云的缓存服务支持 Redis 和 Memcached。Redis 和 Memcached 都是非常受欢迎的开源内存数据库，相对关系型数据库，Redis 和 Memcached 使用都简单，且具备高性能。

同为 Key-Value 数据库，我们该如何选择？

- Memcached适用于数据结构模型简单的场景；Redis适用于数据结构复杂、需要持久化存储数据、存储大key的场景。

- Redis 支持数据持久化，并且支持更加丰富的数据类型；Memcached 不支持数据持久化。

如何选择取决于您的业务需求，如果没有特殊要求，我们推荐使用 Redis。 如果你希望简单，可以使用 Memcached。

