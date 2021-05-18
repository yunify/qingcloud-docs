---
title: "快速创建 Redis Standalone 实例"
description: 本小节主要介绍如何快速创建 Redis Standalone 实例。 
keywords: redis standalone 实例创建
data: 2021-05-14T00:38:25+09:00
weight: 1
collapsible: false
draft: false
---


本小节以 Redis 5.0.10 - QingCloud 3.0.1 版本为例快速创建Redis Standalone 实例。

## 前提条件

已创建一个 VPC 网络和关联一个私有网络，操作指导请参见 [VPC 指南](../../../../network/vpc/quick-start/base/)。

## 操作步骤

### 基本配置

填写集群的名称，描述，选择应用的版本，计费方式及自动备份时间。自动备份时间默认关闭。

![服务名称](../../_images/base_step_1.png)

> 说明：仅 `北京3区` 可选择「多可用区部署」或「单可用区部署」。

### 配置节点

选择节点类型、核数、内存、磁盘大小和数量（后续可以随时调整），单节点集群仅供测试使用，正式环境建议使用三节点保证高可用。

![配置节点](../../_images/base_step_2.png) 

### 选择私有网络

选择已经创建好的私有网络。

> - 对于 `北京3区` 创建集群的用户需要注意，集群的部署方式应与私网的部署方式保持一致，需要同时为 「多可用区部署」或者同时为「单可用区部署」.
> - 对于 _Redis 5.0.3 - QingCloud 1.2.1_ 节点之间的防火墙必须放行 TCP/22 和 TCP/6379 这两个端口，否则会导致服务异常。
> - 对于其他版本的必须放行 TCP/26379 和 TCP/6379 这两个端口，否则会导致服务异常。

![选择私有网络](../../_images/base_step_3.png)

### 配置 Redis 环境参数

Redis Standalone on QingCloud 提供了 **Redis** 大部分配置参数，您可以根据需要修改相应的参数。

![配置环境变量](../../_images/base_step_4.png) 


- _requirepass_ : 设置 **Redis** 服务的密码。注意密码长度以保证安全， `Redis 5.0.3 - QingCloud 1.2.2` 及之后的版本添加了对密码的限定，可由数字、字母或 `!@#$%^&*()./;` 组成，且最少6位。

- _禁用 FLUSH 命令_ : 为了兼容之前版本的 APP，默认是不禁用 FLUSHALL 和 FLUSHDB 命令的。由于该命令的误操作会对数据造成不可恢复的丢失，因此我们强烈建议在生产环境下禁用该命令。

### 用户协议确认

阅读并同意青云 AppCenter 用户协议后，即可马上部署应用。

![用户协议确认](../../_images/base_step_5.png) 
