---
title: "参数介绍"
description: 本小节主要介绍 PostgreSQL 常用配置项。 
keyword: PostgreSQL 常用配置项；
weight: 10
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持对 PostgreSQL 常用配置参数的管理。

本小节主要介绍 AppCenter 中各 PostgreSQL 不可修改配置参数的含义，可修改参数说明请参见**配置参数**页面具体参数说明。

## 不可修改参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   数据库版本    |  11、10、9        |   表示当前数据库 PostgreSQL 内核参数。 <li>不可修改。  |
|   数据库名称      |  -      |   表示新创建的数据库名称。 <li>默认为 `qingcloud`。<li>初始化集群的时候生效，创建后修改无效。  |
|   数据库用户名  |  -  |  表示新创建的数据库用户名。<li>默认为 `pguser`。<li>初始化集群的时候生效，创建后修改无效。 |
|   数据库密码 | - |  表示新创建的数据库密码。 <li> 默认为 `qingcloud1234`。  |

## pgpool 参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   serialize_accept    |   <li> on <li> 关闭       |   表示是否开启序列化连接请求。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>需同时设置 **child_life_time** 参数为 0 ，该参数才生效。</li><li>该参数修改后，将重启 pgpool。</li></span>  |
|   pgpool_port      |  1~65535     |   表示 pgpool 监听端口。 <br>- 默认值9999。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，将重启 pgpool。</li></span>  |
|   child_life_time  |  0~65535  |  表示以防止内存泄漏，终止 PGPoCII 空闲子进程的时间。<br>- 默认值 300，单位为秒。<br>- 取值 0，表示禁用该参数。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，将重启 pgpool。</li></span> |
|   connection_life_time | 0~65535 |  表示终止 PostgreSQL 连接的时间。 <br>- 默认值 600，单位为秒。<br>- 取值 0，表示禁用该参数。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，将重启 pgpool。</li></span> |
|   client_idle_limit    |   0~65535       |   表示自上次查询以来客户端连接的生存时间。 <br>- 单位为秒。<br>- 默认值 0，表示禁用该参数。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，将重启 pgpool。</li></span>  |
|   max_pool      |  1~8     |   表示每个 pgpool 子进程中缓存连接的最大数量。 <br>- 默认值 2。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，将重启 pgpool。</li></span>  |
|   num_init_children  |  1~5000 |  表示预先创建的 pgpool 服务进程的数量。<br>- 默认值100。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>受内存大小影响，该参数实际值可能小于设定值。</li><li>该参数修改后，将重启 pgpool。</li></span> |

## 数据同步

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   是否同步流复制    |   <li> 是 <li> 否       |   表示是否开启同步流复制。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>请基于自己的业务需求，慎重选择此参数。</li></span>  |
|   是否开启半同步模式    |   <li> 是 <li> 否       |   表示是否开启半同步模式。 在开启**同步流复制**前提下，从机节点异常无法完成数据同步时，主库将自动切换为异步流复制模式，确保业务不受阻塞。备库恢复正常后，主库恢复同步流复制。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>需同时开启同步流模式。</li></span>  |

## 高可用

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   load_read_request_to_primary      |  <li> 是 <li> 否     |   表示是否将读请求负载到主节点。 |
|  auto_failover  | <li> 是 <li> 否  |  表示当主节点down了时，从节点是否自动提升为主。|

## 性能优化

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   max_connections      |  <li> auto-optimized-conns <li> 20～     |   表示数据库的最大并发连接数。<br>- 默认值`auto-optimized-conns`，表示根据资源配置自动适配最大连接数。<br>- 若设置为数值，请输入大于20的整数。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，将重启数据库。</li></span>  |
|  wal_buffers  | -  |  表示用于还未写入磁盘的 WAL 数据的共享内存大小。<br>- 默认值 8MB。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，将重启数据库。</li></span>  |
|   work_mem | - |  表示在写到临时磁盘文件之前被内部排序操作和哈希表使用的内存大小。<li> 默认值 4MB。|
|   maintenance_work_mem    |   -      |   表示在维护性操作（例如 VACUUM、CREATE INDEX 和 ALTER TABLE ADD FOREIGN KEY）中使用的最大的内存大小。 <li> 默认值 64MB。 |
|   effective_cache_size      |  -     |   表示规划器对一个单一查询可用的有效磁盘缓冲区容量大小。<li> 默认值 4GB。 |
|   max_replication_slots  |  6～15|  表示 replication slots 的最大数量。<br>- 默认值10。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: </li><li>该参数修改后，将重启数据库。</li></span> |
|   checkpoint_timeout     |  -   |   表示自动 WAL 检查点之间的最长时间。<li>默认值 5分钟，以秒计。|
|  autovacuum | <li> on <li>关闭  |  表示控制服务器是否运行自动清理启动器后台进程。<li>默认值 `on`。 |
|   vacuum_cost_delay | 0~100 |  表示进程超过代价限制后将休眠的时间。<li> 默认值 0，单位为毫秒。|
|   autovacuum_naptime   |   -      |   表示自动清理在任意给定数据库上运行的最小延迟时间。 <li> 默认值 1min。 |
|   vacuum_cost_limit      |  0~10000    |   表示将导致清理进程休眠的累计代价。<li> 默认值 200。 |
|   bgwriter_delay  |  10~10000|  表示后台写入器活动轮次之间的延迟。<li>默认值 200。|
|   bgwriter_lru_multiplier      |  0～10     |   表示在每个轮次中，不超过这么多个缓冲区将被后台写入器写出。<li>默认值 2。|
|  wal_writer_delay  | 1~10000  |  表示WAL 写入器的活动轮次之间的延迟。<li> 默认值 200。 |
|   fsync | <li> on <li>关闭  |  表示是否开启 PostgreSQL 服务器将尝试确保更新被物理地写入到磁盘。<li> 默认值 `on`。|
|   commit_delay    |   0~100000     |   表示在一次 WAL 刷写被发起之前，commit_delay 增加的延迟时间。 <li> 默认值 0，单位为微秒。 |
|   commit_siblings      |  0~1000   |   表示在执行 commit_delay 延迟时，要求的并发活动事务的最小数量。<li> 默认值 5。 |
|   enable_bitmapscan  |  <li> on <li>关闭 |  表示是否允许查询规划器使用位图扫描计划类型。<li> 默认值 `on`。 |
|   enable_seqscan     |    <li> on <li>关闭 |  表示是否允许查询规划器使用顺序扫描计划类型。<li> 默认值 `on`。 |
|  full_page_writes | <li> on <li>关闭  |  表示 PostgreSQL 服务器在一个检查点之后的页面的第一次修改期间，是否将每个页面的全部内容写到 WAL 中。<li>默认值 `on`。 |
|   log_min_messages | <li> info <li>notice<li>warning <li>error<li>log <li>fetal<li>panic <li>debug 1<li>debug 2<li>debug 3<li>debug 4<li>debug 5 |  表示写入到服务器日志的消息级别。<li> 默认值 `error`。|
|   deadlock_timeout   |  0~1000   |   表示死锁检测之前在一个锁上等待的总时间。 <li> 默认值 1ms，单位为毫秒。 |
|   log_lock_waits      |  <li> on <li>关闭   |   表示当一个会话为获得一个锁等到超过 deadlock_timeout 时，是否要产生一个日志消息。<li> 默认值 `关闭`。 |
|   log_min_duration_statement |  -1~1000000|  表示如果语句运行至少指定的毫秒数，将导致记录每一个这种完成的语句的持续时间。<li>默认值 -1。|
|   temp_buffers     |  -   |   表示每个数据库会话使用的临时缓冲区的最大容量大小。<li> 默认值 8MB。 |
|   max_prepared_transactions  |  0~65536 |  表示同时处于 prepared 状态的事务的最大数量。<li> 默认值 256。 |
|   max_wal_senders     |    0～20 |  表示来自后备服务器或流式基础备份客户端的并发连接的最大数量，即同时运行 WAL 发送进程的最大数量。<br>- 默认值 10。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: </li><li>该参数修改后，将重启数据库。</li></span>  |
|  bgwriter_lru_maxpages | 0～1000  |  表示在每个轮次中，不超过这么多个缓冲区将被后台写入器写出。<li>默认值 100。 |
|   log_statement | <li>none <li>ddl<li>mod <li>全部|  表示被记录的 SQL 语句类型。<li> 默认值 `none`。|
|   shared_preload_libraries | <li>pg_stat_statements <li>pg_pathman<li> passwordcheck <li>timescaledb <li> pgaudit <li>pg_jieba.so<li>plugin_debugger <li>null |  表示预加载到服务器的共享库。<li> 默认选择 `passwordcheck`。<li> 空表示不预加载任何共享库。|
|   wal_level   | <li> replica <li>logical   |   wal_level 决定有多少信息被写入到 WAL 中。<br>- 默认值是最小的（minimal），其中只写入从崩溃或立即关机中恢复的所需信息。<br>- `replica` 增加 WAL 归档信息，同时包括只读服务器需要的信息。<br>- `logical` 主要用于 logical decoding 场景。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: </li><li>该参数修改后，将重启数据库。</li></span>   |
|   shared_buffers      |  <li> auto-optimized-sharedbuffers <li>关闭   |   表示服务器使用的共享内存缓冲区的大小。<li> 默认值 `auto-optimized-sharedbuffers`，表示根据资源配置适配大小。<br>- 若设置为数值，单位为 MB。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，将重启数据库。</li></span>   |
|   jit      |  <li> on <li>关闭   |   表示是否允许 jit 编译。<li> 默认值 `关闭`。 |
|   port |  1~65535 |  表示数据库端口。<li>默认值 5432。|
