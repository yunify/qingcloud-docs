---
title: "参数介绍"
description: 本小节主要介绍 RocketMQ 常用配置项。 
keyword: 数据库,RocketMQ,关系型数据库,RocketMQ,常用配置项,
weight: 10
collapsible: false
draft: false
---

在管理控制台，支持对 RocketMQ 常用配置参数的管理。

本小节主要介绍各配置参数的含义。

## Broker 参数

| <span style="display:inline-block;width:80px">参数</span> | <span style="display:inline-block;width:120px">取值范围</span> | <span style="display:inline-block;width:440px">参数说明</span> |
| :-------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| MQ 集群名称                                               | -                                                            | RocketMQ 集群的名称。                                        |
| 数据文件保存时长                                          | 1~                                                           | 数据文件（commitlog）在服务器上保留的最长时间，单位为`小时`。 |
| 过期数据文件删除时间                                      | 0~23                                                         | 清除过期数据文件（commitlog）的时间，以 24 小时制（整点）表示。 |
| Broker 主从复制模式                                       | <li>SYNC <li>ASYNC                                           | <li>SYNC（同步模式）：每条消息数据复制到所有从节点，才会通知客户端。<li>ASYNC（异步模式）：每条消息数据在主节点处理完成，就立即通知给客户端。 |
| 数据持久化方式                                            | <li>SYNC_FLUSH <li>ASYNC_FLUSH                               | 消息数据持久化（刷盘）模式。<li>SYNC_FLUSH（同步模式）：每条消息成功写入磁盘后才通知客户端。<li>ASYNC_FLUSH（异步模式）：消息批量写到磁盘，性能更高。 |

## 网页控制台参数

| <span style="display:inline-block;width:120px">参数</span> | <span style="display:inline-block;width:440px">参数说明</span> |
| :--------------------------------------------------------- | :----------------------------------------------------------- |
| RocketMQ 控制台用户名                                      | 网页控制台登录用户名，默认为 `admin`，拥有管理者权限。       |
| RocketMQ 控制台密码                                        | 网页控制台登录用户名对应的密码。<li>默认开启密码登录，默认密码为 `password`。<li>密码为空：表示不需要密码登录，可以直接访问。 |

## 公共参数

|<span style="display:inline-block;width:80px">参数</span> |<span style="display:inline-block;width:120px">取值范围</span>|参数说明|
|:----|:----|:----|
| 开启文件查看 |  <li>true <li>false  | 是否开启文件管理控制台。默认为 `false`，即关闭文件管理控制台。 |
| 文件查看用户名                                            | -                                                            | 文件管理控制台登录用户名，默认`admin`。<br>修改该参数不会重启 Broker。 |
| 文件查看密码                                              | -                                                            | 文件管理控制台登录用户名对应的密码，默认为空表示不需要密码，可以直接访问。<br>修改该参数不会重启 Broker。 |

