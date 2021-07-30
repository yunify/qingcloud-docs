---
title: "参数介绍"
description: 本小节主要介绍 ZooKeeper 常用配置项。 
keywords: ZooKeeper 常用配置项；
weight: 10
collapsible: false
draft: false
---



在 AppCenter 集群管理控制台，支持对 ZooKeeper 常用配置参数的管理。更多相关配置参数的说明和用法，可参考 [ZooKeeper 官方文档](https://zookeeper.apache.org/doc/r3.4.13/zookeeperAdmin.html#sc_configuration)。

本小节主要介绍 AppCenter 中各 ZooKeeper 配置参数的含义。

## 支持的配置参数

|配置名|默认值|说明|
|:--- |:--- |:--- |
| 启用管理员用户 | false | 管理员用户可以对集群、ZNodes及其数据，以及权限控制 (ACL) 进行管理。 |
| 管理员用户名 | super | 管理员用户的用户名（不启用可忽略）。命名规则：可以由小写字母（a～z）、数字（0～9）、特殊字符（-_）组成，必须以字母开头；取值范围4～12字符数。 |
| 管理员密码 | - | 管理员用户的密码（不启用可忽略）。可以由小写字母（a～z）、大写字母（A～Z）、数字（0～9）、特殊字符（!@#$%^&*()）组成；取值范围4～32字符数。 |
| tickTime | 2000 | ZooKeeper 最小时间单位 tick 的毫秒数，用来调整心跳和超时，比如 session 的最短超时时间为两个 tick。 |
| initLimit | 10 | 允许 Follower 跟 Leader 进行初始化连接和数据同步的最长时间，以 tick 为单位，如有需要可调大这个值，尤其是 ZooKeeper 管理的数据量很大的。 |
| syncLimit | 5 | 允许 Follower 同步数据的最长时间，以 tick 为单位，如果 Follower 的数据太旧，此 Follower 将被丢弃。 |
| maxClientCnxns | 1000 | 限制以 IP 地址标识的客户端与单个 ZooKeeper 节点的最大并发连接数，用来防止某些 DoS 攻击，包括 file descriptor exhaustion 。设为 0 表示不做限制。 |
| autopurge.snapRetainCount | 3 | 当自动清除功能 (Auto Purge) 开启时，所要保留的最新快照和事务日志文件数，其余文件将被清除。 |
| autopurge.purgeInterval | 0 | 自动清除功能的执行间隔，以小时为单位。默认值 0 表示不开启。 |
| 4lw.commands.whitelist | - | 允许用户使用的 4lw (4 字母命令)。注意 mntr 监控命令永远开启，平台用 mntr 命令来获取节点监控数据。 |
| tcpKeepAlive | false | 在 socket 层面启用 TCP keepalive 来防止节点之间意外断开。 |
| 启用文件查看控制台 | true | 开启后，支持通过此控制台（http://ip）查看、下载日志等文件。 |
| 文件查看用户名 | admin | 自录文件查看控制台的用户名（不启用可忽略）。命名规则：可以由小写字母（a～z）、数字（0～9）、特殊字符（-_）组成，必须以字母开头；取值范围4～12字符数。 |
| 文件查看密码 | admin| 登录文件查看控制台的密码（不启用可忽略）。可以由小写字母（a～z）、大写字母（A～Z）、数字（0～9）、特殊字符（!@#$%^&*()）组成；取值范围4～32字符数。 |
| 启用 REST 网关 | true| 开启后，可通过 REST 网关提供的 HTTP 接口访问 ZooKeeper 节点数据。 |
