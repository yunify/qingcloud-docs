---
title: "在windows云服务器中配置pptp vpn客户端"
linkTitle: "在windows云服务器中配置pptp vpn客户端"
date: 2021-02-16T10:08:56+09:00
description:
draft: false
weight: 1
---

## 项目介绍

客户希望自己在办公或者家庭网络能拨入到青云vpc的私有网络，以实现内网访问云上部署的业务，因为vpn隧道是加密通讯的，安全性比较可靠，另外使用起来比较方便；以下介绍的是如何在windows云服务器部署pptp客户端。

### 1.通过以下步骤找到vpn服务端开启入口

通过控制台==>网络==>vpc网络==>详情==>管理配置==>vpn服务==>pptp服务==>开启

备注：可以设置最大连接数、自定义vpn网络地址，如图

<img src="../homer/pptp_01.png" width="60%" height="100%">

### 2.放行防火墙下行gre协议以及tcp 1723端口协议，并应用修改防火墙，如图

<img src="../homer/pptp_02.png" width="60%" height="100%">

### 3.通过以下步骤找到本地vpn客户端开启入口

开始==>网络连接==>vpn==>添加vpn连接==>配置vpn连接信息==>保存

- vpn提供商：windows内置

- 连接名称：自定义
- 服务器名称或者地址：填写vpc的eip地址
- vpn类型：点对点隧道协议（PPTP）
- 用户名：填写自己配置的用户名
- 密码：填写自己设置的密码



可以参考以下截图 

<img src="../homer/pptp_03.png" width="60%" height="100%">

<img src="../homer/pptp_04.png" width="60%" height="100%">

###  4.本地拨入vpn测试

<img src="../homer/pptp_05.png" width="60%" height="100%">

​                                      <img src="../homer/pptp_06.png" width="60%" height="100%">

### 5.使用以下命令检查本地是否拨入成功

备注：拨入成功，虚拟网卡会获取到一个内网ip

```
ipconfig /all 
```

### 6.本地测试是否可以与青云的vpc内网互通



