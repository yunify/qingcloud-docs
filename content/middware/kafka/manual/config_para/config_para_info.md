---
title: "参数介绍"
description: 本小节主要介绍 Kafka 常用配置项。 
keyword: 云计算,大数据,消息队列,中间件,Kafka 常用配置项,Kafka,参数含义
weight: 10
collapsible: false
draft: false
---

在管理控制台，支持对 Kafka 常用配置参数的管理。

本小节主要介绍各配置参数的含义。


## 支持配置的参数

| <span style="display:inline-block;width:80px">参数</span> | <span style="display:inline-block;width:120px">取值范围</span> | <span style="display:inline-block;width:460px">参数说明</span> |
| :-------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| log.retention.bytes                                       | -1~1073741824000                                             | topic 每个分区的最大文件大小，单位为字节，超过该大小会触发删除策略。 |
| log.retention.hours                                       | 1~8760                                                       | 消息保留时间，单位为`小时`。                                 |
| log.segment.bytes                                         | 1048576~10737418240                                          | 段文件最大值，单位为`字节`。                                 |
| log.segment.delete.delay.ms                               | 0~                                                           | 段文件在索引中清除后保留的时间。                             |
| log.roll.hours                                            | 1~876                                                        | 段文件轮滚时间，单位为`小时`。                               |
| auto.create.topics.enable                                 | <li> true <li> false                                         | 是否允许自动创建 Topic。                                     |
| default.replication.factor                                | 1~10                                                         | 默认副本因子值。                                             |
| delete.topic.enable                                       | <li> true <li> false                                         | 是否允许使用命令行删除 Topic。                               |
| offsets.topic.replication.factor                          | 1~100                                                        | 内部 offset topic 的复制因子（设定更高的确保可用性）。<br>如果复制因子大于集群节点数，内部创建主题自动创建将会失败，直到集群大小符合这个复制因子的要求。 |
| log.cleanup.policy                                        | <li> delete  <li> compact                                    | 日志清理策略。`delete` 为直接删除；`compact` 为压缩。        |
| log.cleaner.enable                                        | <li> true <li> false                                         | 用于是否开启日志压缩。                                       |
| compression.type                                          | -                                                            | 用于主题的压缩策略。                                         |
| message.max.bytes                                         | 1024~1073741823                                              | 消息体的最大大小，单位为`字节`。                             |
| num.network.threads                                       | 1~                                                           | Broker 处理网络请求的线程数。                                |
| num.io.threads                                            | 1~20                                                         | Broker 处理磁盘 IO 的线程数。                                |
| num.partitions                                            | 1~100                                                        | Topic 默认分区数。                                           |
| num.recovery.threads.per.data.dir                         | 1~                                                           | 启动时数据恢复和关闭时刷盘的线程数。                         |
| num.replica.fetchers                                      | 1~10                                                         | 复制消息线程数。                                             |
| queued.max.requests                                       | 1~5000                                                       | 等待 IO 线程处理的请求队列最大数。                           |
| socket.receive.buffer.bytes                               | 1024~102400000                                               | 接收缓冲区大小。                                             |
| socket.send.buffer.bytes                                  | 1024~102400000                                               | 发送缓冲区大小。                                             |
| unclean.leader.election.enable                            | <li> true <li> false                                         | 是否启用不在 ISR 集合中的副本作为最后的选择，尽管这样做可能导致数据丢失。 |
| advertised.host.name                                      | -                                                            | 用于 worker 连接的域名。                                     |
| advertised.port                                           | -                                                            | 用于 worker 连接的端口，默认为 `9092`。                      |
| kafka-manager.basicAuthentication.enabled                 | <li> true <li> false                                         | Kafka Manager 是否开启登录验证。                             |
| kafka-manager.basicAuthentication.username                | -                                                            | Kafka Manager 登录用户名，默认为 `admin`。                   |
| kafka-manager.basicAuthentication.password                | -                                                            | Kafka Manager 登录密码，默认为 `password`。                  |
| kafka-manager.port                                        | -                                                            | Kafka Manager 启用端口，默认为 `9000`。                      |
| zabbix.agent.enable                                       | <li> true <li> false                                         | 用于决定是否开启 zabbix agent，默认为 `false`，不开启。      |
| zabbix.server.ip                                          | -                                                            | 若开启 zabbix agent，则需要手动设置为您想要连接的zabbix server 的 IP 地址，默认为 `127.0.0.1`。 |
| zabbix.agent.port                                         | 9000~65534                                                   | 用于连接的端口号，若主机存在防火墙，则需要开启该端口，默认为 `10050`。 |
| replica.lag.time.max.ms                                   | 6000~99999                                                   | leader 会将 follower 从 isr 中删除的时间间隔。               |
| group.max.session.timeout.ms                              | 0~9999999                                                    | 已注册消费者最长会话超时时长。                               |
| group.min.session.timeout.ms                              | 0~60000                                                      | 已注册消费者最短会话超时时长。                               |
| kafka 实例使用的 Scala 版本                               | -                                                            | Kafka 实例使用的 Scala 版本, 默认为 `2.11`，推荐使用 `2.12`。<br>该参数不支持通过界面进行修改。 |

