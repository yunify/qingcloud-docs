---
title: "IOS 客户端如何连接L2TP-IPsecVPN？"
description: Test description
weight: 50
draft: false
enableToc: false

---

## 背景：

本文讲解如何使用 IOS 14 设备作为客户端连接 L2TP VPN



## 1.手机自带 VPN 软件连接 VPN

- 选择通用 > VPN > 添加VPN配置

- 类型：选择L2TP

- 服务器：VPC绑定公网IP地址

- 账户：VPC L2TP设置创建用户

- RSA SecurID： 默认不开启

- 密码：VPC L2TP设置密码

- 密钥：VPC L2TP设置 PSK



<img src="../_images/l2tp_1.jpg" width="60%" height="40%">

## 2.测试连接

手机移动端浏览器输入内网ip地址测试web服务，示例为访问内网web服务。



<img src="../_images/l2tp_2.jpg" width="60%" height="40%">