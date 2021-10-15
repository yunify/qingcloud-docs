---
title: "在Windows云服务器中配置PPTP VPN客户端"
date: 2021-02-16T10:08:56+09:00
description:
draft: false
weight: 1
---

## 项目介绍

客户希望自己在办公或者家庭网络能拨入到青云VPC的私有网络，以实现内网访问云上部署的业务，因为VPN隧道是加密通讯的，安全性比较可靠，另外使用起来比较方便；以下介绍的是如何在Windows云服务器部署PPTP客户端。

### 1.通过以下步骤找到VPN服务端开启入口

通过控制台==>网络==>VPC网络==>详情==>管理配置==>VPN服务==>PPTP服务==>开启

备注：可以设置最大连接数、自定义VPN网络地址，如图

<img src="../homer/pptp_01.png" width="60%" height="100%">

### 2.放行防火墙下行GRE协议以及TCP 1723端口协议，并应用修改防火墙，如图

<img src="../homer/pptp_02.png" width="60%" height="100%">

### 3.通过以下步骤找到本地VPN客户端开启入口

开始==>网络连接==>VPN==>添加VPN连接==>配置VPN连接信息==>保存

- VPN提供商：Windows内置

- 连接名称：自定义
- 服务器名称或者地址：填写VPC的EIP地址
- VPN类型：点对点隧道协议（PPTP）
- 用户名：填写自己配置的用户名
- 密码：填写自己设置的密码



可以参考以下截图 

<img src="../homer/pptp_03.png" width="60%" height="100%">

<img src="../homer/pptp_04.png" width="60%" height="100%">

###  4.本地拨入VPN测试

<img src="../homer/pptp_05.png" width="60%" height="100%">

​                                      <img src="../homer/pptp_06.png" width="60%" height="100%">

### 5.使用以下命令检查本地是否拨入成功

备注：拨入成功，虚拟网卡会获取到一个内网IP

```
ipconfig /all 
```

### 6.本地测试是否可以与青云的VPC内网互通



