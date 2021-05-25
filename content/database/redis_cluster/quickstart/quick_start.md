---
title: "快速创建 Redis Cluster 应用"
description: 本小节主要介绍如何快速创建 Redis Cluster。 
keywords: redis cluster 实例
data: 2021-05-14T00:38:25+09:00
weight: 1
collapsible: false
draft: false
---


## 前提条件

已创建一个 VPC 网络和关联一个私有网络，操作指导请参见 [VPC 指南](../../../../network/vpc/quick-start/base/)。

## 操作步骤

### 基本设置

填写集群的名称，描述，选择应用的版本。

![](../../_images/step1.png)

> 说明：仅 `北京3区` 支持选择「多可用区部署」和「单可用区部署」。


### 节点设置

配置 Redis 节点，包括内存、主节点数量、实例类型等信息。

![](../../_images/step2.png)

### 网络设置

选择服务部署的私有网络，可以选择之前创建的任意网络。

>`北京3区` 的用户需要注意：被选择私网的部署方式应与集群的部署方式保持一致，即都为 「多可用区部署」或者都为「单可用区部署」

![](../../_images/step3.png)

### 服务环境参数设置

禁用 FLUSH 命令：为兼容 Redis 5.0.3 - QingCloud 1.2.1 之前的版本，自 Redis 5.0.3 - QingCloud 1.2.1 起添加了此项，默认是不禁用。由于该命令的误操作会对数据造成不可恢复的丢失，因此我们强烈建议在生产环境下禁用该命令。

![](../../_images/step4.png)

### 用户协议确认

阅读并同意青云 AppCenter 用户协议后，即可马上部署应用。

![](../../_images/step5.png)
