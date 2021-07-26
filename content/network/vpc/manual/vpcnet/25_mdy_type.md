---
title: "修改 VPC 规格类型"
linkTitle: "修改 VPC 规格类型"
date: 2021-05-19T10:08:56+09:00
description:
draft: false
weight: 25
---

## 操作场景

当已创建 VPC 网络已不适用您当前的网络规模，您可以对 VPC 网络进行规格升级或降级。

## 操作须知

- 免费型 VPC 不支持直接升级到其他规格。
- 若您当前使用的非免费型 VPC 网络绑定了公网 IP 或告警策略，降为免费型 VPC 过程中，将自动进行解绑，且降级后无法恢复。
- 若您当前使用的非免费型 VPC 网络中运行着弹性容器实例（QCI）、AppCenter 集群、边界路由器等需要访问外网的业务，降为免费型 VPC 后将无法访问外网。
- 若因误操作导致部署在 VPC 网络中的业务无法访问外网或无法被外网访问，您可以 [提交工单](https://console.qingcloud.com/tickets/) 向青云技术支持寻求帮助。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)。

2. 在控制台导航栏中，选择**产品与服务** > **网络服务** > **VPC网络**，进入**VPC网络**页面。

3. 找到需要更改的 VPC 网络，点击**更多操作** > **扩容**。

4. 在弹出的页面中，修改类型，点击**提交**。

   若修改为免费型 ，将在页面下方显示如下图所示提示信息，请仔细阅读提示信息，谨慎修改。

   <img src="/network/vpc/_images/501025_mdy_type.png" alt="mdy_type" style="zoom:50%;" />

   

   

   

