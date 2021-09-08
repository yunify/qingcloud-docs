---
title: "更改云服务器类型"
date: 2020-02-12T21:08:00+09:00
description: Test description
weight: 20
draft: false
enableToc: false
---

## 操作说明

客户购买了云服务器，在体验的过程中，觉得基础型云服务器无法满足业务需求，需要更换为企业型云服务器，会涉及如下操作；做配置调整之前需要将云服务器关机。

## 操作步骤

### 按需计费的云服务器

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **计算** > **云服务器**，进入域名列表页。

2. 右键云服务器的ID，选择**更多操作** > 更改类型，如下图：

   ![more-types](/compute/vm/_images/more-types.jpg)

### 合约计费的云服务器

合约云服务器更改类型需要先在合约界面解绑资源后再进行更改

![change_config](/compute/vm/_images/change_config.png)

![unbundling](/compute/vm/_images/unbundling.png)

解绑后再对云服务器的类型进行更改，步骤如下：

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **计算** > **云服务器**，进入域名列表页。

2. 右键云服务器的ID，选择**更多操作** > 更改类型

   ![more-types](/compute/vm/_images/more-types.jpg)

3. 云服务器配置更改完成后需要对合约配置进行更改

   ![upgrade](/compute/vm/_images/upgrade.png)

4. 当云服务器类型与合约类型一致后，再进行绑定

   ![bunding](/compute/vm/_images/bunding.png)