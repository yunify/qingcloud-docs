---
title: "负载均衡器如何支持多证书"
description: Test description
weight: 50
draft: false
enableToc: false
---

## 场景说明

本文指导用户通过 HTTPS 和 SSL 监听器绑定多个 SSL 证书，实现同一个监听器根据多个域名自动选择 SSL 证书加密传输访问后端的需求。

## 前提条件

* 已创建负载均衡器和 HTTPS 监听器，具体步骤可已参考[负载均衡器操作指南](https://docsv3.qingcloud.com/network/loadbalancer/manual/lb_user_guide/)

* 已创建 SSL 证书并完成验证，具体步骤可以参考 SSL 证书[购买指南](https://docsv3.qingcloud.com/security/ssl/manual/user_guide/)、[验证指南](https://docsv3.qingcloud.com/security/ssl/manual/manualq/)

## 操作步骤

1、控制台访问计算机基础服务 => 网络 => 负载均衡器

2、点击负载均衡器资源 ID 进入详情配置页

3、选择监听协议为 HTTPS 的监听器，点击右上角的操作 => 修改

![img](../../_images/lb_bind_multi_cert.assets/image-20210731223446774.png?lastModify=1627742129)

4、在弹出的修改监听器属性中点击点击服务器证书，选择证书并添加

![image-20210731223532098](../../_images/lb_bind_multi_cert.assets/image-20210731223532098.png)