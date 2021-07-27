---
title: "使用简介"
description: 本小节主要介绍 HBase 数据库使用指南简介。 
keywords: HBase 使用简介,
weight: 10
collapsible: false
draft: false
---


`HBase 客户端` 节点已自动完成相关配置，可通过 `Web 终端` 或 `连接 vpn` 登录直接使用。

- 通过 `Web 终端`登录。用户名：`ubuntu`，密码：`hbase`，通过 `sudo su` 可以切换到 `root` 用户。

- 若集群所在私有网络的 VPC 绑定了公网 IP，则可以在 VPC 网络的路由器上**配置 VPC 端口转发策略**，通过 ssh 登录 `HBase 客户端`。

> **说明：**
>
> 如创建集群时未创建 `HBase 客户端` 节点，可通过 `新增节点` 增加；以下场景均在 `root` 用户下完成。
