---
title: "参数介绍"
description: 本小节主要介绍 Redis Standalone 配置参数。 
keywords: 配置参数,键值数据库,Redis,Redis Standalone,数据库
weight: 10
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持对 Redis Standalone 常用配置参数的管理。

Redis Cluster 支持部分参数的配置与修改，不同版本支持的参数有所区别。为便于阅读和内容表达，本文的表格约定使用下述注释：

- **✓** 表示在该版本，支持该参数。
- **✕** 表示在该版本，不支持该参数。

本小节主要介绍 AppCenter 中各 Redis Standalone 具体参数说明。

## 访问参数

| 参数        | 取值范围   |  参数说明                          |  Redis 5.x | Redis 6.x |
| :----------| :--------  | :------------------------ | :----------- | :----------- | 
| 禁用 FLUSH 命令      |    -        | 表示是否禁用 FLUSHALL 及 FLUSHDB 命令。<br>- 默认为 `否`，表示不禁用。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>⚠️注意</b> <li>此参数在集群创建后不可修改。</li><li>由于该命令的误操作会导致对数据造成不可恢复的丢失，因此强烈建议在生产环境下禁用该命令。</li><li>Redis 5.0.10 版本开始支持该参数。</li></span>       |  **✓**       | **✓**     |
| 端口          |   1~65536       | 表示 Redis 服务端口。<br>- 默认为 6379。<br>- 若修改了端口，则需要打开集群网络防火墙中的对应的端口号。如修改端口为 6378，需要打开防火墙的 6378 端口。            |   **✓**       | **✓**     |
| 控管台管理 ACL       |  <li>是  <li>否     | 表示是否由控制台管理 ACL 服务。<br>- 默认为 `是`，表示开启控制台管理 ACL 服务，禁止通过命令创建 ACL 帐号。 <br>- `否`表示关闭控制台管理 ACL 服务，支持通过命令创建 ACL 帐号。<div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">  <b>⚠️注意</b><br/>  再次开启此服务，将删除已存在的 ACL 用户。</div>      | **✕**       | **✓**     |
| requirepass               |  -  | 表示登录客户端使用密码才能执行命令。<br>- 密码可由数字、字母或 !@#$%^&*()./; 组成，且最少6位。<br>- 不设置则密码为空。<div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"> <b>⚠️注意</b><br/> 6.x版本及以后版本，该参数值为**default** 用户密码。</div>   | **✓**       | **✓**     |

## TLS 参数

| 参数        | 取值范围   |  参数说明                          |  Redis 5.x | Redis 6.x |
| :----------| :--------  | :------------------------ | :----------- | :----------- | 
| TLS-Port     |  0~65535  |  表示 TLS 监听端口。<li>默认值 0，表示关闭。 | **✕**       | **✓**     |
| Sentinel.TLS-Port    |   0~65535   |  表示 Redis 哨兵 TLS 服务端口。<li>默认值 0，表示关闭。 | **✕**       | **✓**     |
| Tls-Replication     |  <li>是  <li>否  |  表示是否启用 TLS 复制功能。 | **✕**       | **✓**     |
| TLS-Auth-Clients     |  <li>是  <li>否   <li>optinal  |  表示是否需要 TLS 客户端证书进行身份认证。<li>取值`是` 表示必须使用客户端证书。<li>取值`否`表示不需要且不接受客户端证书。<li>取值 `optional`表示可选，如果提供则有效，但不是必需的。 | **✕**       | **✓**     |
| TLS-Protocols             |  -  | 表示指定要支持的 TLS 版本。         | **✕**       | **✓**     |
| TLS-Ciphers               | -  | 表示配置允许的 TLS 加密算法，该配置仅适用于 <= TLSv1.2。       | **✕**       | **✓**     |
| TLS-Ciphersuites          | -  | 表示配置允许的 TLSv1.3 加密算法。       | **✕**       | **✓**     |
| TLS-Prefer-Server -Ciphers | <li>是  <li>否   | 表示密码规则以服务器为准。<li>取值`是` 表示以服务器为准。<li>取值`否` 表示以服务端为准。 | **✕**       | **✓**     |
| tls-session-caching       | <li>是  <li>否   | 表示是否开启 TLS 会话缓存。<li>取值`是` 表示启用。<li>取值`否` 表示不启用。  | **✕**       | **✓**     |
| TLS-Session-Cache-Size    | -  | 表示 TLS 会话缓存大小。默认大小为 20480。    | **✕**       | **✓**     |
| TLS-Session-Cache-Timeout | -  | 表示 TLS 会话的默认超时时间。<li>默认值为 300 ，单位为秒（s）。  | **✕**       | **✓**     |
| TLS-Cert                  | -  | 表示用于进行身份验证的客户端证书。     | **✕**       | **✓**     |
| TLS-Key                   | -  | 表示用于进行身份验证的私钥文件。        | **✕**       | **✓**     |
| TLS-CA-Cert               | -  | 表示用于验证的 CA 证书文件。         | **✕**       | **✓**     |
| TLS-DH-Params             | -  | 表示密匙交换参数。配置 DH 参数文件以启用 Diffie-Hellman（DH）密钥交换。  | **✕**       | **✓**     |

## 性能优化

| 参数        | 取值范围   |  参数说明                          |  Redis 5.x | Redis 6.x |
| :----------| :--------  | :------------------------ | :----------- | :----------- | 
| 最大内存比例      |  10~95 | 表示 Redis 最大可用内存占主机内存的比例(%)。<li> 默认值 80。         | **✓**       | **✓**     |
| databases      |  1~2000 | 表示 redis-server 数据库的数量。 <li> 默认值 16。         | **✓**       | **✓**     |
| Sentinel.Port      |  1~65536 | 表示 Redis 哨兵服务端口。 <li> 默认值 26379。         | **✓**       | **✓**     |
| sentinel.down-after -milliseconds      |  2000~30000 | 表示 master 被 sentinel 标记为主观下线 (sdown) 的超时时间。 <li> 默认值 4000，单位为毫秒。         | **✓**       | **✓**     |
| sentinel.failover -timeout     |  30000~180000 | 表示两次 failover 间的间隔时间。 <li> 默认值 60000，单位为毫秒。         | **✓**       | **✓**     |
| sentinel.requirepass  |  - | 表示 Redis 哨兵服务的密码。 <li> 密码可由数字、字母、下划线或 !@#$%^&*()./; 组成，最低 6 位。 <li> 如果不希望有验证则此项留空。        | **✓**       | **✓**     |
| 启用 Redis 命令     |  -  | 表示是否打开 Redis 相关命令。<li> 可选择 `DISABLE_ALL`、`CONFIG`、`DEBUG`、`SAVE`命令。<li> `DISABLE_ALL` 选项将禁用以下命令：CONFIG、BGREWRITEAOF、BGSAVE、DEBUG、SAVE、 SHUTDOWN、SLAVEOF、KEYS、 REPLICAOF。<div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">  <b>⚠️注意</b><br/> 请谨慎配置该参数，错误地使用可能会导致服务不可用。</div>     | **✓**       | **✓**     |
| activerehashing           |   <li>是  <li>否  | 表示是否开启 rehashing 以节省内存空间。<li>取值`是` 表示开启。<li>取值`否` 表示不开启。    | **✓**       | **✓**     |
| appendonly                |  <li>是  <li>否  | 表示是否使用 AOF 持久化功能。<li>取值`是` 表示使用。<li>取值`否` 表示不使用。    | **✓**       | **✓**     |
| appendfsync               |  <li>everysec  <li>否 <li>一直有效  | 表示 AOF 的同步策略。<li>取值 `everysec`表示最多每秒调用一次 fsync<li>取值`否`表示 write 后不会有 fsync 调用。<li>取值`一直有效`表示每次 write 后都会调用 fsync。</li>    | **✓**       | **✓**     |
| maxclients                |  1~65000  | 表示同一时间允许最大的客户端连接数。默认为0，表示无限制，此时最大的客户端连接数为Redis 进程可以打开的最大文件描述符的数量。    | **✓**       | **✓**     |
| maxmemory-policy          | <li>volatile-lru  <li>volatile-random <li>volatile-ttl  <li>allkeys-lru <li>allkeys-random <li>noeviction | 表示当 Redis 内存占用达到最大的时候，使用何种策略来应对（删除）keys。LRU 表示最近最少使用的。LFU 表示最不常用的。TTL 表示设置过期时间。LRU，LFU 和 TTL 都是使用近似随机算法实现的。<li>volatile-lru：只从设置失效（expire set）的 Key 中选择最近最少使用的Key 进行删除。</li><li>volatile-random：只从设置失效（expire set）的Key中，随机选择一些Key进行删除。</li><li>volatile-ttl：只从设置失效（expire set）的Key中，选出存活时间（TTL）最短的Key进行删除。</li><li>allkeys-lru：优先删除掉最近最少使用的Key。</li><li>allkeys-random：随机选择一些Key进行删除。</li><li>noeviction：不删除任何Key，只是在写操作时返回错误。</li>      | **✓**       | **✓**     |
| maxmemory-samples         |  0～  | 表示 LRU 和 minimal TTL 算法不是特别精确，此项用来针对速度和精确性进行调优。<li>默认值为5。<li>设置为 10 可以非常近似真正的LRU但是会多消耗 CPU，设置为 3 速度很快但不是非常精确。  | **✓**       | **✓**     |
| min-slaves-max-lag        |  0～ | 表示当一个主节点有小于 N 个从节点并且每个从节点的延迟最大不超过 M 秒的时候，停止接受写操作。<li>默认值为 10，单位为秒（s）。     | **✓**       | **✓**     |
| min-slaves-to-write       |  0～ | 表示当一个主节点有小于 N 个从节点并且每个从节点的延迟最大不超过 M 秒的时候，停止接受写操作。 <li>默认值为 0，单位为秒（s）。  | **✓**       | **✓**     |
| no-appendfsync-on -rewrite |   <li>是  <li>否 | 表示当有 BGSAVE 或 BGREWRITEAOF 正在执行的时候，阻止 fsync() 的调用。<li>是：阻止</li><li>否：不阻止</li>     | **✓**       | **✓**     |
| notify-keyspace-events    |  -  | 表示指定 Redis 会发送哪些类型的通知。<li>  `K`：键空间通知，所有通知以__keyspace@<db>__为前缀。</li><li>`E`：键事件通知，所有通知以__keyevent@<db>__为前缀。</li><li>`g`：DEL、EXPIRE、RENAME 等类型无关的通用命令的通知。</li><li>`$`：字符串命令的通知。</li> <li>`l`：列表命令的通知。</li><li>`s`：集合命令的通知。</li><li>`h`：哈希命令的通知。</li><li>`z`：有序集合命令的通知。</li><li>`x`：过期事件，每当有过期键被删除时发送。</li><li> `e`：驱逐（evict）事件，每当有键因为 maxmemory 策略而被删除时发送。</li><li> `A`：参数 g$lshzxe 的别名。</li><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">  <b>说明</b><br/>- 开启键空间通知将消耗 CPU 计算资源，故该通知默认关闭。</br>- 如果定义服务器发送某些通知，输入参数需必选 `K` 或 `E`；如订阅键事件中驱逐事件相关的通知，参数填写为“Ee”；如订阅发送所有类型的通知，参数填写为“AKE”。</div>   | **✓**       | **✓**     |
| repl-backlog -size         | 16384~  | 表示主节点保存 repl_backlog 的大小。<li>默认值 `1048576`，单位为字节（Byte）。       | **✓**       | **✓**     |
| repl-backlog-ttl          |  0～  | 表示所有 slaves 不可用时，主节点保留 repl_backlog 多长时间。<li>默认值 `3600`，单位为秒（s）。    | **✓**       | **✓**     |
| repl-timeout              | 0～  | 表示主从复制超时时间。<li>默认值 `60`，单位为秒（s）。  | **✓**       | **✓**     |
| set-max-intset -entries    |  0～ | 表示当 Set 集合内的数据符合以下条件时，在多少个节点之前使用 intset 来编码。<li>  当集合内所有数据都是字符对象。</li><li> 都是基数为 10 的整数，范围为 64 位有符号整数。</li>    | **✓**       | **✓**     |
| slowlog-log-slower -than   |  -1~60000  | 表示当某项操作的执行时间超过设定的值后会被记录到慢日志。单位为微秒（μs）。<br/><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;">  <b>说明</b><br/>   负数会禁用慢日志，而零值会强制记录每个命令。</div>  | **✓**       | **✓**     |
| slowlog-max-len           |  0~1000  | 表示服务器最多保存多少条慢查询日志。     | **✓**       | **✓**     |
| tcp-keepalive             |  	0~2147483647 | 表示定时向客户端发送 tcp_ack 包来探测客户端是否存活。单位为秒（s）。默认为 0，表示不探测。  | **✓**       | **✓**     |
| 超时              |  0～  | 表示当客户端连接闲置时间达到该指定值时，将关闭连接。单位为秒（s）。  | **✓**       | **✓**     |
| zset-max-ziplist -entries  |  0～  | 表示当链表对象同时满足以下两个条件时，链表对象将使用 ziplist 编码，以节省内存空间：<li>排序集合对象的每个元素的字符串长度的字节数，均小于 zset-max-ziplist-value 指定值。</li><li>排序集合对象的元素数量，均小于 zset-max-ziplist-entries 指定值。</li>  | **✓**       | **✓**     |
| zset-max-ziplist -value    |  0～  | 表示当链表对象同时满足以下两个条件时，链表对象将使用 ziplist 编码，以节省内存空间：<li>排序集合对象的每个元素的字符串长度的字节数，均小于 zset-max-ziplist-value 指定值。</li><li>排序集合对象的元素数量，均小于 zset-max-ziplist-entries 指定值。</li> | **✓**       | **✓**     |
| lua-time-limit            |  0～  | 表示 Lua 脚本的执行超时时间(单位ms)。<br/>0 或负值表示没有限制。  | **✓**       | **✓**     |

## ziplist 编码参数

| 参数        | 取值范围   |  参数说明                          |  Redis 5.x | Redis 6.x |
| :----------| :--------  | :------------------------ | :----------- | :----------- | 
| hash-max-ziplist -entries  |  0~512  | 表示当哈希对象可以同时满足以下两个条件时，哈希对象使用 ziplist 编码：<li>哈希对象保存的所有键值对的键和值的字符串长度字节数，都小于 hash-max-ziplist-value 的值。</li><li>哈希对象保存的键值对数量，小于 hash-max-ziplist-entries 的值。</li> | **✓**       | **✓**     |
| hash-max-ziplist -value    |  0~64  | 表示当哈希对象可以同时满足以下两个条件时，哈希对象使用 ziplist 编码：<li>哈希对象保存的所有键值对的键和值的字符串长度字节数，都小于 hash-max-ziplist-value 的值。</li><li>哈希对象保存的键值对数量，小于 hash-max-ziplist-entries 的值。</li> |  **✓**       | **✓**     |
| latency-monitor-threshold | 0~600000 | 表示当有操作耗时超过设定的时间后会被记录下来。单位为毫秒（ms）。0表示禁用这个功能。  | **✓**       | **✓**     |
| list-max-ziplist -entries  |  0~512 | 表示当链表对象同时满足以下两个条件时，链表对象将使用 ziplist 编码：<li>链表对象保存的每个元素的字符串长度的字节数，均小于 list-max-ziplist-value 指定值。list中元素的数量和单个元素的大小在不超过设定的值时使用ziplist编码。</li><li>链表集合对象保存的元素数量，均小于 list-max-ziplist-entries 指定值。</li>     | **✓**       | **✓**     |
| list-max-ziplist -value    |  0~64  | 表示当链表对象同时满足以下两个条件时，链表对象将使用 ziplist 编码：<li>链表对象保存的每个元素的字符串长度的字节数，均小于 list-max-ziplist-value 指定值。list中元素的数量和单个元素的大小在不超过设定的值时使用ziplist编码。</li><li>链表集合对象保存的元素数量，均小于 list-max-ziplist-entries 指定值。</li>     | **✓**       | **✓**     |

## 监控服务参数

| 参数        | 取值范围   |  参数说明                          |  Redis 5.x | Redis 6.x |
| :----------| :--------  | :------------------------ | :----------- | :----------- | 
| Enable Node-Exporter      | <li>true  <li>false  | 表示是否开启 Node-Exporter 服务端口。<li>开启后默认端口为 9100。      | **✓**       | **✓**     |
| Enable redis-Exporter      | <li>true  <li>false  | 表示是否开启 Redis-Exporter 服务端口。<li>开启后默认端口为 9121。      | **✓**       | **✓**     |
| Enable zabbix      | <li>true  <li>false  | 表示是否开启 Zabbix 日志服务端口。<li>开启后默认端口为 10050。      | **✓**       | **✓**     |
| zabbix server      |  -  | 表示 Zabbix 服务器地址。默认为 127.0.0.1 。     | **✓**       | **✓**     |
| named-sessions      |  -  | 表示 Zabbix 服务命名。默认为 `redis`。      | **✓**       | **✓**     |

## 日志服务参数

| 参数        | 取值范围   |  参数说明                          |  Redis 5.x | Redis 6.x |
| :----------| :--------  | :------------------------ | :----------- | :----------- | 
| 开启文件查看控制台        | <li>false  <li>true  | 表示是否开启 Caddy 日志文件查看控制台。<li>取值`true` 表示开启。<li>取值`false` 表示关闭。<li>修改后不会重启 Redis。   | **✓**       | **✓**     |
| 文件查看用户名            | -  | 表示用来访问 Caddy 日志文件查看控制台的用户名。<li>默认值为 `admin`。<li>可以包含小写字母、数字、半角句点（.）和短横线（-)。<li>修改后不会重启 Redis。   | **✓**       | **✓**     |
| 文件查看密码              | -  | 表示用来访问 Caddy 日志文件查看控制台的密码。<li>可由数字、字母、下划线组成，默认为空表示不需要密码，可以直接访问。<li>修改后不会重启 Redis。    | **✓**       | **✓**     |
