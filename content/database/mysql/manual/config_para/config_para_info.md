---
title: "参数介绍"
description: 本小节主要介绍 MySQL Plus 常用配置项。 
keywords: MySQL Plus 常用配置项；
weight: 10
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持对 MySQL Plus 常用配置参数的管理。

本小节主要介绍 AppCenter 中各 MySQL Plus 配置参数的含义。

## 数据备份参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   启用对象存储服务   |       false 或 true  |  表示是否启用对象存储服务。默认为 false。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>集群备份功能需要先启用对象存储服务。</li></span>  |
|   Bucket_name      |  -       |   表示对象存储服务 Bucket 名称。可选择已创建桶。  |
|   Access_key_id    |    -  |  表示集群备份 API 密钥 ID。可选择已创建密钥。  |

## 高可用参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   Load_read_requests_ to_master      |  <li> All <li> All_exclude_master <li> Maininstance_exclude_master <li> Readinstance      |   表示数据库是否将读请求负载到 Master 节点，默认为 `All_exclude_master`，此时读请求只负载到 Follower 节点。 <li> `All`表示读请求负载到所有节点。 <li>`All_exclude_master` 表示负载到除 Master 外的其他节点。 <li>`Maininstance`表示负载到所有主实例。 <li>`Maininstance_exclude_master`表示负载到除 Master 外的其他主实例。 <li>`Readinstance`表示负载到所有只读实例。 |
|   Not_load_read_to_ much_delay_slave    |       0～172800  |  默认为0，忽略该机制。 <li>若设置大于0，则读 vip 新请求不会分发到延迟秒数大于该值的从节点。 <li>若 **Load_read_requests_to_nodes** 中的所有从节点延迟都满足该条件且剔除了 master，此时忽略该机制。  |
|   Election-timeout    |   10000、20000、30000 |  表示高可用组件选举超时时间。 <li>单位为毫秒。 <li>默认为 20000ms。  |
|   MSemi-sync-timeout- for-two-nodes    |   1000～10000 |  表示半同步超时参数，针对主实例数为2的集群有效。 <li>单位是毫秒。 <li>默认为10000ms。  |


## 日志参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   Audit_log_policy   |   <li> ALL <li> LOGINS <li> QUERIES <li> NONE |  表示写审计日志的策略。 <li> 可选择 `ALLL`、`OGINS`、`QUERIES` 和 `NONE` 四种策略。 <li> 默认为 `NONE`，此时不会记录审计日志。  |
|   Audit_log_format      |   <li> OLD <li> NEW <li> JSON       |   表示审计日志文件格式。 <br>- 可选择 `OLD`、`NEW` 和 `JSON` 三种格式。 <br>-  `OLD` 和 `NEW` 分别为旧的和新的 XML 格式。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Audit_log_rotate_ on_size    |   20971520~2147483648  |  表示单个审计日志文件大小。 <li> 默认为 `100 MB`，范围为 `20 MB` ~ `2 GB`。。 <li>  若该参数不是4096的整数倍，将下调到4096的整数倍。 |
|   Audit_log_rotations      |  6~48       |   表示保留审计日志文件数量。 <li> 默认为 `6`，支持最多保留 `48` 个文件。  |
|  Expire_logs_days      | 2~14        |   表示 binlog 日志文件保留时间，单位为天。 <li> 默认为 7天。 |
|   Binlog_cache_size  |   4096~3221225472 |  表示 binlog 事务语句日志缓存空间大小。 <li> 默认为 32768。  |
|   Binlog_stmt_ cache_size  |  4096~3221225472 |  表示 binlog 非事务语句日志缓存空间大小。  <li> 默认为 32768。 |
|   Sync_relay_log  |  0~ |  表示复制延迟。<li> 若设置为为 0，表示 MySQL 服务不会对中继日志文件进行同步操作，依赖于操作系统来定期进行同步。 <li> 若设置为为 N，表示每 N 个 sync_relay_log 事件后，对中继日志文件执行一次同步。<li> 默认为 1000。 |
|   Sync_relay_log_info |  0~ |  表示日志信息复制延迟。<li> 若设置为为 0，表示 MySQL 服务不会对 relay-log.info 文件进行同步操作，依赖于操作系统来定期进行同步。 <li> 若设置为为 N，表示每执行 N 个事务后将信息使用 fdatasync()同步到 relay-log.info 文件。  <li> 默认为 1000。 |

## 性能调优参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   端口      |  3306~8000        |   表示数据库端口。默认为3306。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Group_concat_max_len  |   4~4294967295 |  表示拼接字符串最大长度。<li> 默认为 1024。  |
|   Default-time-zone      |  -    |   表示默认工作时区。<li> 默认为东八区。  |
|   Default-storage-engine    |  <li> InnoDB <li> TokuDB  |  表示默认存储引擎。默认为 InnoDB 。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li><li> 仅 MySQL 5.7 支持 TokuDB 存储引擎。</li></span>|
|  Innodb_buffer_ pool_size      |  -1~       |   无论设置的值多少，最终都会上调到 innodb_buffer_pool_chunk_size * innodb_buffer_pool_instances 的整数倍。<br>- 若该值为-1，则将该参数设置为内存的60%。<br>- 若该值过大，最多只取内存的80% 。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Character_set_server  |   - |  表示服务器安装时指定的默认字符集设定。  |
|   Interactive_timeout      |  1~2147483      |   表示服务器关闭交互式连接前等待的时间，单位为秒。<li> 默认为 3600s。  |
|   Back_log    |   50~4096  |  表示 MySQL 缓存的尚未处理的连接数量。默认为 2048。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b>: <li>该参数修改后，数据库将重启。</li></span>  |
|   Ft_min_word_len  |  1~4 |  表示最小索引长度。默认为 4。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Key_buffer_size      |  1～1310720       |   表示指定索引缓冲区的大小。 默认为 33554432。 |
|   Log_bin_trust_ function_creators    |   0～1  |  表示控制是否可以信任存储函数创建者，不会创建写入二进制日志引起不安全事件的存储函数。 只有当二进制日志启用后才会起作用。<li> 若设置为0（默认值），用户不得创建或修改存储函数，除非用户同时具有 `CREATE ROUTINE或ALTER ROUTINE` 特权加`SUPER` 权限）。 设置为 0 还强制使用 `DETERMINISTIC` 特性或 `READS SQL DATA` 或 `NO SQL` 特性声明函数的限制。<li> 若设置为1，MySQL不会对创建存储函数实施限制。|
|  Long_query_time      | 0~300        |   表示慢查询日志时间，单位为秒。<li> 默认值为 3s。  |
|   Lower_case_table_ names  |  0～1 |  表示大小写敏感参数。默认为 0。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li><li>对于 MySQL 8.0 内核，勿修改该参数值。</li></span>|
|   Max_connections      |  1024~16384      |   表示最大连接数。 参数值设置较小，将影响数据库访问。<li> 默认为 1024。 |
|   Max_connect_errors  |   1~4294967295 |  表示最大连接错误次数。该参数是 MySQL 中与安全有关的计数器值，负责阻止过多尝试失败的客户端以防止暴力破解密码。 <li> 默认为 655360。 |
|   Query_cache_size      |  	0~    |   表示查询返回缓存空间大小。<li> 默认为 0。 |
|   Query_cache_type  |   关闭或开启  |  表示查询缓存功能。 <li> 默认为 `关闭`。 |
|   Sync_master_info |   0~ |   <li> 若设置为 1 表示每个 EVENT 都要执行刷盘操作(注意不是每个事务!)。 <li> 若设置为为 0，表示有操作系统来决定何时刷盘。 <li> 默认为 1000。  |
|   Table_open_cache  |  512~10240|  表示文件描述符的缓存大小。 <li> 默认为 2000。 |
|   Thread_cache_size |  0~16384|  表示线程缓存大小。 <li> 默认为 128。 |
|   Wait_timeout |   1~2147483 |   表示等待超时时间。 <li> 默认为 3600。  |
|   Innodb_ft_max_ token_size  |  10~84 |  表示 InnoDB 搜索索引最大长度。默认为 84。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Innodb_ft_min_ token_size  |  0~16 |  表示 InnoDB 搜索索引最小长度。默认为 3。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Sql_mode |  - |  表示 SQL 模式。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Slave_rows_search_ algorithms  |  512~10240|  控制如何在行中搜索匹配项。使用 Hash Scan 后，设置后会立即对所有复制通道生效。可设置为INDEX_SCAN、TABLE_SCAN、HASH_SCAN 中任意两个值组合，以逗号分隔。<li>默认值为 INDEX_SCAN，TABLE_SCAN。 |
|   Max_allowed_packet |  1024~1073741824|  表示限制 Server 接受的数据包大小。默认为 1073741824。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>若需修改该参数，须保证 `slave_pending_jobs_size_max` 值大于等于该参数值，否则可能会导致主从复制异常。</li></span>|
|   Slave_parallel_workers  |  0~1024 |  表示多线程并行复制。默认为 8。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Slave_pending_ jobs_size_max  |  1024~1073741824 |  表示多线程复制最大工作大小。默认为 1073741824。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Event_scheduler | 关闭、开启或已禁用 |  表示动态控制事件调度器功能。<li> 默认为`关闭`。  |
|   Innodb_print_all_ deadlocks  |  0、1|  表示死锁记录功能。<li>默认值为 0，表示关闭。 |
|   Skip-name-resolve |  0、1|  表示禁用 DNS 解析功能。默认为 0，表示关闭。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Autocommit | 0、1 |  表示自动提交功能。<li> 默认为1，表示自动提交。  |
|   Transaction_isolation  |  0、1|  表示隔离级别。<li>`read-uncommitted`表示读未提交，允许脏读。<li>`read-committed`（默认值）表示读提交，不允许脏读，但允许不可重复读。<li>`repeatable-read`表示可重复读，不允许脏读、不可重复读，但允许幻读。<li>`serializable`表示串行化，以上都不允许。 |
|   Innodb_log_buffer_size | 1048576~4294967295|  表示 InnoDB 的索引和数据块缓存大小。 默认为 16777216。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Innodb_log_file_size | 4194304~5497558138|  表示 InnoDB 的事物日志文件大小。默认为 1073741824。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Innodb_log_files_ in_group | 2~10|  表示 InnoDB 的控制日志文件数。默认为 2。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Validate_password_ policy  |  0、1|  表示密码校验策略。<li>`MEDIUM` (默认值）表示除了需要满足最小长度，还要同时包含数字、大小写字母和特殊字符。<li>`LOW`表示只需要满足最小长度即可。 |
|   Validate_password_ length | 4~8|  表示密码字符串的最小长度。 <li> 默认为 8。 |
|   Innodb_flush_method | fsync、O_DIRECT|  表示 Iinnodb数据文件及 redo log 的打开、刷写模式。 <br>- `fsync`(默认)表示调用fsync()去刷数据文件与 redo log 的 buffer。<br>- `O_DIRECT` 表示 InnoDB 使用O_DIRECT 打开数据文件，使用fsync()刷写数据文件跟redo log。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Innodb_use_native_aio | 0、1 |  表示 InnoDB 的 AIO 特性开关。默认为 1，表示开启。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|   Connection_control_failed_ connections_threshold  |  0~2147483647  |  表示允许账户连续登录失败的次数。<li>设置为 0，关闭该机制。 |
|   Connection_control_min_ connection_delay | 1000~2147483647 |  表示账户连续登录失败次数达到上限后的最小延迟响应时间，单位是毫秒。 <li> 默认为 1000。 |
|   Connection_control_max_ connection_delay  |  1000~2147483647  |  表示账户连续登录失败次数达到上限后的最大延迟响应时间，单位是毫秒。<li>设置为 2147483647。 |
|   Explicit_defaults_ for_timestamp | 0、1 |  表示决定 MySQL 服务端对 timestamp 列值的处理功能。 <li> 默认为 0，表示关闭。 |
|   Innodb_adaptive_ hash_index | 0、1 |  表示控制 InnoDB 频繁访问的数据缓存在主内存功能。 <li> 默认为 0，表示关闭。 |
|  Innodb_autoinc_ lock_mode | 0、1、2 |  表示控制在向有auto_increment 列的表插入数据时，相关锁的模式。<br>- 设置为 0，表示传统锁模式。 <br>- 设置为 1，表示InnoDB 使用轻量级别的 mutex 锁来获取自增锁，替代最原始的表级锁。<br>- 默认设置为 2，表示所有情况插入都使用轻量级别的 mutex 锁（只针对row模式）。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|
|  Performance_schema | 0、1 |  用于监控MySQL server在一个较低级别的运行过程中的资源消耗、资源等待等情况。默认设置为 1，表示开启该功能。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <li>该参数修改后，数据库将重启。</li></span>|

## 不可修改参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|<span style="display:inline-block;width:420px">参数说明</span>|
|:----|:----|:----|
|   内核    |  MySQL-5.6、5.7、8.0        |   表示当前数据库 MySQL 内核参数。 <li>不可修改。  |
|   Admit-defeat-heartbeat-count      |  5       |   表示高可用组件在连续失败心跳次数达到该值后发起选举。 <li>默认为5次，不可修改。  |
|   ClickHouse_http_port  |  8123~65535  |  表示分析实例ClickHouse 服务的 HTTP 端口。<li>默认为 8123。 |
|   ClickHouse_tcp_port | 9000~65535 |  表示分析实例ClickHouse 服务的 TP 端口。 <li> 默认为 9000。 |
