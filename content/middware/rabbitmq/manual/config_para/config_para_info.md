---
title: "参数介绍"
description: 本小节主要介绍 RabbitMQ 常用配置项。 
keyword: 云计算,大数据,消息队列,中间件,RabbitMQ 常用配置项,RabbitMQ,参数含义
weight: 10
collapsible: false
draft: false
---

在管理控制台，支持对 RabbitMQ 常用配置参数的管理。

本小节主要介绍各配置参数的含义。

## 支持配置的参数

| <span style="display:inline-block;width:80px">参数</span> | <span style="display:inline-block;width:120px">取值范围</span> | <span style="display:inline-block;width:460px">参数说明</span> |
| :-------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| rabbitmq_default_user                                     | -                                                            | RabbitMQ 网页控制台管理员用户名。（此项配置在集群创建后不可修改） |
| rabbitmq_default_pass                                     | -                                                            | RabbitMQ 网页控制台默认管理员用户密码。初始密码为集群创建是配置的密码。 |
| haproxy_balance_policy                                    | -                                                            | 负载均衡策略。<li>roundrobin：轮询。 </li><li>leastconn：最小连接。</li><li>static-rr：静态权重。 </li><li>source：IP 哈希。 </li><li>uri：uri 哈希。 url_param：url_param 哈希。</li> |
| haproxy_web_port                                          | -                                                            | haproxy 监控界面端口。                                       |
| haproxy_username                                          | 1~876                                                        | haproxy 监控界面用户名。                                     |
| haproxy_password                                          | -                                                            | haproxy 监控界面密码。                                       |
| num_tcp_acceptors                                         | 10~200                                                       | 接受 TCP 侦听器连接的 Erlang 进程数。                        |
| handshake_timeout                                         | 5000~                                                        | AMQP 0-8/0-9/0-9-1 handshake （在 socket 连接和SSL 握手之后）的最大时间, 单位为`毫秒`。 |
| vm_memory_high_watermark                                  | -                                                            | 流程控制触发的内存阀值。**如果内存很小，可以适当加大，但不要超过 0.7**。 |
| vm_memory_high_watermark_paging_ratio                     | -                                                            | 高水位限制的分数，当达到阀值时，队列中消息会转移到磁盘上以释放内存。**内存紧张的情况，尅适当调小，不要小于 0.2**。 |
| disk_free_limit                                           | -                                                            | RabbitMQ 存储数据分区的可用磁盘空间限制。当可用空间值低于阀值时，流程控制将被触发。默认情况下，可用磁盘空间必须超过 50MB，默认值为 500MB。 |
| frame_max                                                 | -                                                            | 与客户端协商的允许最大 frame 大小。设置为`０`表示无限制，但在某些QPid 客户端会引发 bug。设置较大的值可以提高吞吐量，设置一个较小的值可能会提高延迟。 |
| channel_max                                               | -                                                            | 与客户端协商的允许最大 chanel 大小。设置为`０`表示无限制。该数值越大，则 broker 使用的内存就越高。 |
| heartbeat                                                 | -                                                            | 表示心跳延迟（单位为秒），服务器将在 connection.tune frame 中发送。如果设置为 0，心跳将被禁用。客户端可以不用遵循服务器的建议，禁用心跳可以在有大量连接的场景中提高性能，但可能会造成关闭了非活动连接的网络设备上的连接落下。 |
| collect_statistics                                        | -                                                            | 统计收集模式。主要与管理插件相关。                           |
| collect_statistics_interval                               | -                                                            | 统计收集时间间隔（单位为毫秒）。 主要针对于 management plugin。 |
| cluster_partition_handling                                | ignore<br />pause_minority<br />autoheal                     | 如何处理网络分区。                                           |
| cluster_keepalive_interval                                | -                                                            | 节点向其它节点发送存活消息和频率(毫秒)。<br />注意，这与 net_ticktime 是不同的。丢失存活消息不会引起节点掉线。 |
| background_gc_target_interval                             | -                                                            | GC 实际间隔将根据执行操作所需的时间而有所不同。              |
| background_gc_enabled                                     | <li> true </li><li> false </li>                              | 是否启用 GC，开启或许可以减少内存使用。                      |
| reverse_dns_lookups                                       | <li> true </li><li> false </li>                              | 设置为 true，可让客户端在连接时让 RabbitMQ 执行一个反向 DNS 查找，然后通过 rabbitmqctl 和管理插件来展现信息。 |
| tracing_user                                              | -                                                            | 用于创建追踪队列的用户。                                     |
| proxy_protocol                                            | <li> true </li><li> false </li>                              | 是否启用代理协议支持。一旦启用，客户端就不能直接连接到代理了，必须通过负载平衡器连接，此设置仅适用于 AMQP 客户端，其他协议类型的 MQTT 或 STOMP 有自己的设置来启用代理协议。有关更多信息，请参阅插件文档。 |
| Switch of log web console                                 | <li> true </li><li> false </li>                              | 日志管理控制台开关，true=开启，默认开启。                    |
