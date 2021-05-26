---
title: "快速创建 Memcached 集群"
description: 本小节主要介绍如何快速创建 Memcached。 
keywords: memcached 实例
data: 2021-05-14T00:38:25+09:00
weight: 1
collapsible: false
draft: false
---


## 前提条件

已创建一个 VPC 网络和关联一个私有网络，操作指导请参见 [VPC 指南](../../../../network/vpc/quick-start/base/)。

## 操作步骤

### 基本设置

填写基本信息，包括名称和描述。

![](../../_images/step1.png)

### 节点设置

配置 Memcached 节点，包括 CPU, 内存等信息。

每个 Memcached 缓存服务可包含 N 个独立的节点，N 最小为1。若可指定**节点数量**为2，即 Memcached 缓存服务将拥有2个用于存储和访问的节点。

> 注意：
> Memcached 的所有节点是可读可写的。
> 由于 Memcached 不支持持久化，当 Memcached 节点重启时，位于内存的缓存空间会被重置。

![](../../_images/step2.png)

### 网络设置

选择服务部署的私有网络，可以选择之前创建的任意网络。

![](../../_images/step3.png)

### 服务环境参数设置

![](../../_images/step4.png)

### 用户协议确认

阅读并同意青云 AppCenter 用户协议后，点击**提交**部署应用。

![](../../_images/step5.png)

### 查看集群

1. 在**集群管理**页面，可查看 Memcached 集群版本、区域、状态等基本信息。
   
   ![集群基本信息](../../_images/basic_info.png)

2. 点击 Memcached 集群 ID，进入集群详情页面，可查看 Memcached 集群基本属性、节点、配置参数、告警等详情信息。

   ![集群详细信息](../../_images/detail_info.png)