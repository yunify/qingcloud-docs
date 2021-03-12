---
title: "快速入门"
description: test
draft: false
---

## 创建 Redis Cluster APP

> 在创建 APP 之前，您需要创建一个 VPC 网络和关联一个私有网络，详情见 ([VPC 指南](https://docs.qingcloud.com/product/network/vpc))。

### 1. 基本设置

填写集群的名称，描述，选择应用的版本。

![](../../_images/step1.png)

在 `北京3区` 的用户可以根据实际需求选择「多可用区部署」和「单可用区部署」

![](../../_images/step1-1.png)

### 2. 节点设置

配置 Redis 节点，包括内存、主节点数量、实例类型等信息。

![](../../_images/step2.png)

### 3. 网络设置

选择服务部署的私有网络，可以选择之前创建的任意网络。

>`北京3区` 的用户需要注意：被选择私网的部署方式应与集群的部署方式保持一致，即都为 「多可用区部署」或者都为「单可用区部署」

![](../../_images/step3.png)

### 4. 服务环境参数设置

禁用 FLUSH 命令：为兼容 Redis 5.0.3 - QingCloud 1.2.1 之前的版本，自 Redis 5.0.3 - QingCloud 1.2.1 起添加了此项，默认是不禁用。由于该命令的误操作会对数据造成不可恢复的丢失，因此我们强烈建议在生产环境下禁用该命令。

![](../../_images/step4.png)

### 5. 部署

阅读并同意青云 AppCenter 用户协议后，即可马上部署应用。
