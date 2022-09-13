---
title: "参数介绍"
description: 本小节主要介绍 Etcd 常用配置项。 
keyword: 云计算,消息队列,中间件,Etcd,常用配置项,
weight: 10
collapsible: false
draft: false
---

在管理控制台，支持对 Etcd 常用配置参数的管理。

本小节主要介绍各配置参数的含义。

## 参数介绍

| <span style="display:inline-block;width:80px">参数</span> | <span style="display:inline-block;width:120px">取值范围</span> | <span style="display:inline-block;width:440px">参数说明</span> |
| :-------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| etcd autocompact                                          | 0~                                                           | 自动清理历史数据的时间间隔，单位是`小时`。比如 `1` 表示每隔一小时清理一次数据。默认为 `0` 表示不自动清除。<br /><span style="display: block; background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br />请谨慎使用，在压缩修订版本之前的修订版本将无法访问。</span> |
| etcd quota-backend-bytes                                  | 2147483648~8589934592                                        | 存储大小限制，单位是字节。默认大小为 `2GB`，建议最大值为 `8GB`。 |
| node_exporter                                             | <li>true </li><li>false </li>                                | 是否开启 node_exporter，可以监控服务器 CPU、内存、磁盘、I/O 等信息。默认`不开启`。<br />开启后每个节点有自己的单独的 Node Exporter。Node Exporter 默认地址为 `http://IP:9100/metrics`。<br />开启 node_exporter 影响性能较小。 |
| etcd auth                                                 | <li>true </li><li>false </li>                                | 是否开启用户认证。默认`不开启`。<br />开启用户认证功能后，客户端连接 Etcd 集群时需要输入用户名和密码，否则将不能使用。 |
| etcd default-user                                         | -                                                            | 开启用户认证的用户名，默认为 `root` ，且**不可修改**。         |
| etcd default-passwd                                       | -                                                            | root 用户的密码，默认密码为 `root`。<br />您可以根据实际情况进行修改。修改时输入新的密码会直接覆盖原密码。 |

