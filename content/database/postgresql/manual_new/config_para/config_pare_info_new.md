---
title: "参数介绍"
description: 本小节主要介绍 PostgreSQL 常用配置项。 
keyword: 常用配置项,PostgreSQL,关系型数据库,数据库
weight: 05
collapsible: false
draft: false

---

在 AppCenter 集群管理控制台，支持对 PostgreSQL 常用配置参数的管理，以下参数适用于PG 2.0 及以上版本。

本小节主要介绍 PostgreSQL 服务环境参数的含义，参数配置可在创建或修改时进行调整。

## 服务环境参数

| <span style="display:inline-block;width:60px">参数</span> | <span style="display:inline-block;width:110px">取值范围</span> | <span style="display:inline-block;width:390px">参数说明</span> |
| :-------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 內核                                                      | -                                                            | 数据库内核版本，创建时选择，集群创建成功后不支持修改。       |
| readonly_vip_include_slave                                | 默认为true。<ul><li>true</li><li>false</li></ul>             | 只读主实例，默认值 **true**。                                |
| synchronous_readonly                                      | <ul><li>先写入内存，后写入硬盘</li><li>同步写入内存和硬盘</li></ul> | 表示设置只读实例同步模式。 'async' 是流式传输的异步模式。 'sync' 是同步模式。 |
| console_log                                               | <ul><li>log</li><li>calls</li><li>mean_time</li><li>total_time</li><li>max_time</li></ul> | 主实例日志。                                                 |
| 端口                                                      | 1025 ~ 65534                                                 | 表示PostgreSQL 端口号，默认值为 **5432**。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <br>该参数修改后，将重启 postgresql 服务，请在业务低峰期进行操作。</span> |
| fsync                                                     | <ul><li>true</li><li>false</li></ul>                         | 表示强制将更新同步到磁盘，默认值为 **true**。                |
| full_page_writes                                          | <ul><li>true</li>                                            | 表示在检查点后第一次修改时将整页写入 WAL，默认值为 **true**。 |
| wal_compression                                           | <ul><li>true</li><li>false</li></ul>                         | 表示压缩写入 WAL 文件的整页写入，默认值为 **false**。        |
| jit                                                       | <ul><li>true</li><li>false</li></ul>                         | 表示允许 JIT 编译，默认值为 **false**。                      |
| autovacuum                                                | <ul><li>true</li><li>false</li></ul>                         | 表示启动 autovacuum 子进程，默认值为 **true**。              |
| synchronous_commit                                        | <ul><li>关闭</li><li>local</li><li>on</li><li>remote_write</li><li>remote_apply</li></ul> | 表示设置当前事务的同步级别。 'local' 表示流式传输的异步模式。 'on' 表示同步模式，默认值为 **on**。 |
| wal_level                                                 | <ul><li>Replica</li><li>logical</li></ul>                    | 表示设置写入 WALL 的信息级别。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <br/>该参数修改后，将重启 postgresql 服务，请在业务低峰期进行操作。</span> |
| temp_buffers                                              | 1 ~ 32768                                                    | 单位：MB<br>表示设置每个会话使用的最大临时缓冲区数，默认值为 **2**。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <br/>该参数修改后，可能将重启 postgresql 服务，请在业务低峰期进行操作。</span> |
| work_mem                                                  | 0 ~ 1024                                                     | 单位：MB<br>表示表示在写到临时磁盘文件之前被内部排序操作和哈希表使用的内存大小，根据内存大小自动设置值，默认值为内存的 0.0005。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <br/>该参数修改后，可能将重启 postgresql 服务，请在业务低峰期进行操作。</span> |
| maintenance_work_mem                                      | 0 ~ 1024                                                     | 单位：MB<br>表示表示在维护性操作（例如 VACUUM、CREATE INDEX 和 ALTER TABLE ADD FOREIGN KEY）中使用的最大的内存大小，根据内存大小自动设置值，默认为内存的 0.0625。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <br/>该参数修改后，可能将重启 postgresql 服务，请在业务低峰期进行操作。</span> |
| shared_buffers                                            | 0 ~ 64                                                       | 单位：GB<br>表示设置服务器使用的共享内存缓冲区的数量，根据内存大小自动设置值，默认为内存的 0.25。 <span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <br/>该参数修改后，将重启 postgresql 服务，请在业务低峰期进行操作。</span> |
| max_connections                                           | 0 ~ 262143                                                   | 表示设置每个 PostgreSQL 节点的最大并发连接数，max_connections = 机器剩余内存 /  (work_mem * 0.2 + temp_buffers + 2M 的栈内存)。<ul><li>假定只有1/5的连接会将work_mem全部用满</li><li>进程的堆的空间最多为10M，但是通常情况下都是小于2M</li><li>剩余内存 = 机器内存 - shared_buffers - maintenance_work_mem</li><li>当连接数max_connections不够用的时候，建议减小work_mem的设置。</li><li>当不需要很多连接的时候，手动减小max_connections 会自动增加work_mem的设置（work_mem设置为0自动优化时）</li><li>不建议手动设置其他参数。</li></ul><span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <ul><li>该参数修改后，将重启 postgresql 服务，请在业务低峰期进行操作。</li><li>由于参数自动调优，可能间接造成 max_connections 参数修改，进而引起postgresql 服务重启。</li><li>参数的下方<code>restart</code> 代表修改参数会重启；<code>restart-mayby</code>代码修改参数可能会重启；<code> unit </code>代表参数的单位；<code> 0 is automatic set </code>代表该参数会根据当前的主机配置进行自动设置</li></ul></span> |
| max_worker_processes                                      | 0 ~ 65536                                                    | 表示最大并发工作进程数，根据CPU数量自动设置值，默认为 CPU 的数量 * 2。<span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b>: <br/>该参数修改后，将重启 postgresql 服务，请在业务低峰期进行操作。</span> |
| wal_writer_delay                                          | 1 ~ 10000                                                    | 单位：ms<br> 表示表示WAL 写入器的活动轮次之间的延迟，默认值为 **10**。 |
| wal_writer_flush_after                                    | 1 ~ 1024                                                     | 单位：MB<br>表示WAL writer 写出的触发刷新的 WAL 数量，默认值为 **1**。 |
| commit_delay                                              | 0 ~ 100000                                                   | 单位：μs<br>表示设置事务提交和将 WAL 刷新到磁盘之间的延迟（，默认值为 **0**。 |
| commit_siblings                                           | 0 ~ 1000                                                     | 表示设置执行 commit_delay 之前的最小并发打开事务，默认值为 **5**。 |
| bgwriter_delay                                            | 10 ~ 10000                                                   | 单位：ms<br>表示回合之间的后台写入器睡眠时间，默认值为 **10**。 |
| bgwriter_lru_maxpages                                     | 0 ~ 1073741823                                               | 表示后台写入器每轮要刷新的最大 LRU 页数，默认值为 **1000**。 |
| bgwriter_flush_after                                      | 0 ~ 2048                                                     | 单位：kb<br>表示执行的写入刷新到磁盘的页数，默认值为 **512**。 |
| statement_timeout                                         | 0 ~ 2147483647                                               | 单位：ms<br>表示设置任何语句的最大允许持续时间，默认值为 **0**。 |
| idle_in_transaction_session_timeout                       | 0 ~ 2147483647                                               | 单位：ms<br>表示设置任何空闲事务的最大允许持续时间，默认值为 **86400000**。 |
| log_min_duration_statement                                | -1 ~ 2147483647                                              | 单位：ms<br>表示设置将记录语句的最短执行时间，默认值为 **10000**。 |
| checkpoint_timeout                                        | 30 ~ 86400                                                   | 单位：s<br>表示设置自动 WAL 检查点之间的最长时间，默认值为 **300**。 |
| autovacuum_vacuum_cost_delay                              | -1 ~ 100                                                     | 单位：ms<br>表示真空成本延迟时间，默认值为 **0**。           |
| autovacuum_vacuum_cost_limit                              | -1 ~ 10000                                                   | 表示打盹前可用的真空成本量，默认值为**10000**。              |
| autovacuum_vacuum_scale_factor                            | 0.01 ~ 100                                                   | 表示清空之前的元组更新或删除数，占 reltuples 的一小部分，默认值为 **0.02**。 |
| autovacuum_analyze_scale_factor                           | 0.01 ~ 100                                                   | 表示在分析之前插入、更新或删除的元组数，作为 reltuples 的一部分，默认值为 **0.05**。 |
| vacuum_defer_cleanup_age                                  | 0 ~ 1000000                                                  | 表示应该推迟 VACUUM 和 HOT 清理的事务数（如果有），并用于recoverydata事务数，默认值为 **1000**。 |
| seq_page_cost                                             | 0 ~ 100000000                                                | 表示设置计划者对顺序获取的磁盘页面成本的估值，默认值为 **1**。 |
| random_page_cost                                          | 0 ~ 100000000                                                | 表示设置计划者对非顺序获取磁盘页面成本的估值，默认值为 **1.1**。 |
| cpu_tuple_cost                                            | 0 ~ 100000000                                                | 表示设置计划者对处理每个元组的成本的估值，默认值为 **0.01**。 |
| cpu_index_tuple_cost                                      | 0 ~ 100000000                                                | 表示设置计划者对在索引扫描期间处理每个索引条目的成本的估值，默认值为 **0.005**。 |
| log_min_messages                                          | <ul><li>DEBUG5</li><li>DEBUG</li><li>INFO</li><li>NOTICE</li><li>WARNING</li><li>ERROR</li></ul> | 表示设置记录的消息级别，默认值为 WARNING。                   |
| log_statement                                             | <ul><li>-</li><li>ddl</li><li>mod</li><li>全部</li></ul>     | 表示设置记录的语句类型，默认值为 -。                         |