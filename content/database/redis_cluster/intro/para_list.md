---
title: "参数支持"
description: 不同版本 Redis 支持的参数配置。
draft: false
weight: 10
enableToc: false
keyword: Redis Cluster, QingCloud, 数据库, Redis 参数
---

Redis Cluster 支持部分参数的配置与修改，不同版本支持的参数有所区别。

为便于阅读和内容表达，本文的表格约定使用下述注释：

- **✓** 表示在该版本下，支持该参数。
- **✕** 表示在该版本下，不支持该参数。

修改参数的操作方法，请参见[配置集群参数](../../manual/cfginstance/paramconfig/)，以下是各参数的详细说明。

| 参数                      | 说明                                                         | Redis 4.0.9 | Redis 5.0.8 | Redis 6.x |
| ------------------------- | ------------------------------------------------------------ | ----------- | ----------- | --------- |
| 端口                      | Redis 明文端口。设置为 `0` 表示关闭明文端口。                | **✕**       | **✕**       | **✓**     |
| TLS-Port                  | TLS 加密端口。设置为 `0` 表示关闭加密端口。                  | **✕**       | **✕**       | **✓**     |
| TLS-Cluster               | Cluster 通信是否使用加密口。<li>设置为`yes`时 Cluster 通信端口为 `TLS-Port + 10000`</li><li>设置为`no`时 Cluster 通信端口为 `端口 + 10000`</li> | **✕**       | **✕**       | **✓**     |
| 控管台管理 ACL            | 是否由控制台管理 ACL服务。<div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">  <b>⚠️注意</b><br/>  开启此服务，将删除之前已存在的 ACL 用户。</div> | **✕**       | **✕**       | **✓**     |
| 最大内存比例              | Redis 最大可用内存占主机内存的比例(%)，范围： 0~95。         | **✓**       | **✓**       | **✓**     |
| 打开config和save命令      | 是否打开 BGREWRITEAOF、BGSAVE、CONFIG、DEBUG、KEYS、REPLICAOF、SAVE、SHUTDOWN 和 SLAVEOF 命令。<br/><li>0：不打开</li><li>1：打开</li><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">  <b>⚠️注意</b><br/>   强烈不建议打开，错误地使用可能会导致服务不可用。</div> | **✓**       | **✓**       | **✓**     |
| 禁用 FLUSH 命令           | 是否禁用 FLUSHALL 和 FLUSHDB 命令。<br/><li>yes：禁用</li><li>no：不禁用</li><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">  <b>⚠️注意</b><br/>   生产环境建议禁用。该项在集群创建后不可被修改。</div> | **✕**       | **✓**       | **✓**     |
| requirepass               | 需要客户端使用密码才能执行命令，密码可由数字、字母或 !@#$%^&*()./; 组成，且最少6位。不设置则密码为空。 | **✓**       | **✓**       | **✓**     |
| activerehashing           | 是否开启rehashing以节省内存空间。<li>是：开启</li><li>否：不开启</li> | **✓**       | **✓**       | **✓**     |
| appendonly                | 是否使用AOF持久化功能。<li>是：使用</li><li>否：不使用</li>  | **✓**       | **✓**       | **✓**     |
| appendfsync               | AOF 的同步策略。<li>everysec：最多每秒调用一次 fsync</li><li>否：write 后不会有fsync 调用</li><li>一直有效：每次 write 后都会调用 fsync</li> | **✓**       | **✓**       | **✓**     |
| cluster-node-timeout      | 设置集群节点超时时间，即集群中一 个节点不可达的时间（毫秒），才能将该节点视为处于故障状态。范围：≥1000。 | **✕**       | **✓**       | **✓**     |
| hash-max-ziplist-entries  | 当哈希对象可以同时满足以下两个条件时，哈希对象使用 ziplist 编码：<li>哈希对象保存的所有键值对的键和值的字符串长度字节数，都小于 hash-max-ziplist-value 的值。</li><li>哈希对象保存的键值对数量，小于 hash-max-ziplist-entries 的值。</li> | **✓**       | **✓**       | **✓**     |
| hash-max-ziplist-value    | 当哈希对象可以同时满足以下两个条件时，哈希对象使用 ziplist 编码：<li>哈希对象保存的所有键值对的键和值的字符串长度字节数，都小于 hash-max-ziplist-value 的值。</li><li>哈希对象保存的键值对数量，小于 hash-max-ziplist-entries 的值。</li> | **✓**       | **✓**       | **✓**     |
| latency-monitor-threshold | 当有操作耗时超过设定的时间后会被记录下来。单位为毫秒（ms）。0表示禁用这个功能。 | **✓**       | **✓**       | **✓**     |
| list-max-ziplist-entries  | 当链表对象同时满足以下两个条件时，链表对象将使用 ziplist 编码：<li>链表对象保存的每个元素的字符串长度的字节数，均小于 list-max-ziplist-value 指定值。list中元素的数量和单个元素的大小在不超过设定的值时使用ziplist编码。</li><li>链表集合对象保存的元素数量，均小于 list-max-ziplist-entries 指定值。</li> | **✓**       | **✓**       | **✓**     |
| list-max-ziplist-value    | 当链表对象同时满足以下两个条件时，链表对象将使用 ziplist 编码：<li>链表对象保存的每个元素的字符串长度的字节数，均小于 list-max-ziplist-value 指定值。list中元素的数量和单个元素的大小在不超过设定的值时使用ziplist编码。</li><li>链表集合对象保存的元素数量，均小于 list-max-ziplist-entries 指定值。</li> | **✓**       | **✓**       | **✓**     |
| maxclients                | 同一时间允许最大的客户端连接数。默认为0，表示无限制，此时最大的客户端连接数为Redis 进程可以打开的最大文件描述符的数量。 | **✓**       | **✓**       | **✓**     |
| maxmemory-policy          | 当Redis内存占用达到最大的时候，使用何种策略来应对（删除）keys。LRU表示最近最少使用的。LFU表示最不常用的。TTL表示设置过期时间。LRU，LFU和TTL都是使用近似随机算法实现的。<li>volatile-lru：只从设置失效（expire set）的Key中选择最近最少使用的Key进行删除。</li><li>volatile-lfu：只从设置失效（expire set）的Key中选择最不常用的Key进行删除。</li><li>volatile-random：只从设置失效（expire set）的Key中，随机选择一些Key进行删除。</li><li>volatile-ttl：只从设置失效（expire set）的Key中，选出存活时间（TTL）最短的Key进行删除。</li><li>allkeys-lru：优先删除掉最近最少使用的Key。</li><li>volatile-lfu：只从设置失效（expire set）的Key中选择最不常用的Key进行删除。</li><li>allkeys-random：随机选择一些Key进行删除。</li><li>noeviction：不删除任何Key，只是在写操作时返回错误。</li> | **✓**       | **✓**       | **✓**     |
| maxmemory-samples         | LRU 和 minimal TTL 算法不是特别精确，此项用来针对速度和精确性进行调优。<br/>默认值为5。设置为 10 可以非常近似真正的LRU但是会多消耗 CPU，设置为 3 速度很快但不是非常精确。 | **✓**       | **✓**       | **✓**     |
| min-slaves-max-lag        | 当一个主节点的从节点数量小于 min-slaves-to-write 指定值，并且每个从节点的延迟超过 min-slaves-max-lag 指定值时，停止接受写操作。单位为秒（s）。 | **✓**       | **✓**       | **✓**     |
| min-slaves-to-write       | 当一个主节点的从节点数量小于 min-slaves-to-write 指定值，并且每个从节点的延迟超过 min-slaves-max-lag 指定值时，停止接受写操作。 | **✓**       | **✓**       | **✓**     |
| no-appendfsync-on-rewrite | 当有 BGSAVE 或 BGREWRITEAOF 正在执行的时候，阻止 fsync() 的调用。<li>是：阻止</li><li>否：不阻止</li> | **✓**       | **✓**       | **✓**     |
| notify-keyspace-events    | 指定Redis会发送哪些类型的通知。<li>  K：键空间通知，所有通知以__keyspace@<db>__为前缀。</li><li>E：键事件通知，所有通知以__keyevent@<db>__为前缀。</li><li>g：DEL、EXPIRE、RENAME 等类型无关的通用命令的通知。</li><li>$：字符串命令的通知。</li><li>l：列表命令的通知。</li><li>s：集合命令的通知。</li><li>h：哈希命令的通知。</li><li>z：有序集合命令的通知。</li><li>x：过期事件，每当有过期键被删除时发送。</li><li> e：驱逐（evict）事件，每当有键因为 maxmemory 策略而被删除时发送。</li><li> A：参数 g$lshzxe 的别名。</li><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">  <b>说明</b><br/>开启键空间通知将消耗 CPU 计算资源，故该通知默认关闭。</br>如果定义服务器发送某些通知，输入参数需必选 K 或 E；如订阅键事件中驱逐事件相关的通知，参数填写为“Ee”；如订阅发送所有类型的通知，参数填写为“AKE”。</div> | **✓**       | **✓**       | **✓**     |
| repl-backlog-size         | 主节点保存 repl_backlog 的大小。单位为字节（Byte）。         | **✓**       | **✓**       | **✓**     |
| repl-backlog-ttl          | 所有 slaves 不可用时，主节点保留 repl_backlog 多长时间。单位为秒（s）。默认 3600 秒。 | **✓**       | **✓**       | **✓**     |
| repl-timeout              | 主从复制超时时间。单位为秒（s）。默认 60 秒。                | **✓**       | **✓**       | **✓**     |
| set-max-intset-entries    | 当 Set 集合内的数据符合以下条件时，在多少个节点之前使用 intset 来编码：<li>  当集合内所有数据都是字符对象。</li><li> 都是基数为 10 的整数，范围为 64 位有符号整数。</li> | **✓**       | **✓**       | **✓**     |
| slowlog-log-slower-than   | 当某项操作的执行时间超过设定的值后会被记录到慢日志。单位为微秒（μs）。<br/><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">  <b>说明</b><br/>   负数会禁用慢日志，而零值会强制记录每个命令。</div> | **✓**       | **✓**       | **✓**     |
| slowlog-max-len           | 服务器最多保存多少条慢查询日志。                             | **✓**       | **✓**       | **✓**     |
| tcp-keepalive             | 定时向客户端发送 tcp_ack 包来探测客户端是否存活。单位为秒（s）。默认为 0，表示不探测。 | **✓**       | **✓**       | **✓**     |
| 超时时间                  | 当客户端连接闲置时间达到该指定值时，将关闭连接。单位为秒（s）。 | **✓**       | **✓**       | **✓**     |
| zset-max-ziplist-entries  | 当链表对象同时满足以下两个条件时，链表对象将使用 ziplist 编码，以节省内存空间：<li>排序集合对象的每个元素的字符串长度的字节数，均小于 zset-max-ziplist-value 指定值。</li><li>排序集合对象的元素数量，均小于 zset-max-ziplist-entries 指定值。</li> | **✓**       | **✓**       | **✓**     |
| zset-max-ziplist-value    | 当链表对象同时满足以下两个条件时，链表对象将使用 ziplist 编码，以节省内存空间：<li>排序集合对象的每个元素的字符串长度的字节数，均小于 zset-max-ziplist-value 指定值。</li><li>排序集合对象的元素数量，均小于 zset-max-ziplist-entries 指定值。</li> | **✓**       | **✓**       | **✓**     |
| lua-time-limit            | Lua 脚本的执行超时时间(单位ms)。<br/>0 或负值表示没有限制。  | **✓**       | **✓**       | **✓**     |
| TLS-Auth-Clients          | 是否需要客户端证书进行身份认证。<li>是：必须使用客户端证书。</li><li>否：不需要且不接受客户端证书。</li><li>optional：可选，如果提供则有效，但不是必需的。</li> | **✕**       | **✕**       | **✓**     |
| TLS-Protocols             | 指定要支持的 TLS 版本。                                      | **✕**       | **✕**       | **✓**     |
| TLS-Ciphers               | 配置允许的 TLS 加密算法，该配置仅适用于 <= TLSv1.2。         | **✕**       | **✕**       | **✓**     |
| TLS-Ciphersuites          | 配置允许的 TLSv1.3 加密算法。                                | **✕**       | **✕**       | **✓**     |
| TLS-Prefer-Server-Ciphers | 密码规则以服务器为准。<li>是：以服务器为准</li><li>否：以服务端为准</li> | **✕**       | **✕**       | **✓**     |
| tls-session-caching       | 是否开启 TLS 会话缓存。<li>是：启用</li><li>否：不启用</li>  | **✕**       | **✕**       | **✓**     |
| TLS-Session-Cache-Size    | TLS会话缓存大小。默认大小为 20480。                          | **✕**       | **✕**       | **✓**     |
| TLS-Session-Cache-Timeout | TLS 会话的默认超时时间。单位为秒（s）。默认超时时间为 300 秒。 | **✕**       | **✕**       | **✓**     |
| TLS-Cert                  | 用于进行身份验证的客户端证书。                               | **✕**       | **✕**       | **✓**     |
| TLS-Key                   | 用于进行身份验证的私钥文件。                                 | **✕**       | **✕**       | **✓**     |
| TLS-CA-Cert               | 用于验证的 CA 证书文件。                                     | **✕**       | **✕**       | **✓**     |
| TLS-DH-Params             | 密匙交换参数。配置 DH 参数文件以启用 Diffie-Hellman（DH）密钥交换。 | **✕**       | **✕**       | **✓**     |
| 开启文件查看控制台        | 是否开启文件查看控制台。<li>true：开启</li><li>false：关闭，不会重启 redis</li> | **✕**       | **✓**       | **✓**     |
| 文件查看用户名            | 用来访问文件查看控制台的用户名。<br/>可以包含小写字母、数字、半角句点（.）和短横线（-)。修改后不会重启 redis。 | **✕**       | **✓**       | **✓**     |
| 文件查看密码              | 用来访问文件查看控制台的密码。<br/>可由数字、字母、下划线组成，默认为空表示不需要密码，可以直接访问。修改后不会重启 redis。 | **✕**       | **✓**       | **✓**     |

