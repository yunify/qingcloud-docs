---
title: "负载均衡器如何支持多证书？"
description: 指导用户通过 HTTPS 和 SSL 监听器绑定多个 SSL 证书。
keyword: 负载均衡器,证书
weight: 50
draft: false
---

## 操作场景

本文指导用户通过 HTTPS 和 SSL 监听器绑定多个 SSL 证书，实现同一个监听器根据多个域名自动选择 SSL 证书加密传输访问后端的需求。

## 前提条件

* 已创建 HTTPS/SSL 监听器，具体步骤可参考[添加 HTTPS 监听器](/network/loadbalancer/manual/monitor/create_https_monitor/)、[添加 SSL 监听器](/network/loadbalancer/manual/monitor/create_https_monitor/)。

* 已创建 SSL 证书并完成验证，具体步骤可参考 SSL 证书[购买指南](/site/ssl/manual/user_guide/)、[验证指南](/site/ssl/manual/manualq/)。

## 操作步骤

1. 登录管理控制台，选择**产品与服务** > **网络服务** > **负载均衡器**，进入**负载均衡器**页面。

2. 在负载均衡器列表，找到目标实例，点击实例 ID 号，进入实例详情页。

3. 选择监听协议为 HTTPS 或 SSL 的监听器，点击右上角的**操作** > **修改**。

   ![img](../../_images/image-20210731223446774.png)

4. 在弹出的修改监听器属性中点击**添加服务器证书**，选择证书并添加即可。

   > **说明**
   >
   > 可通过多次点击**添加服务器证书**来添加多个证书。

   ![image-20210731223532098](../../_images/image-20210731223532098.png)