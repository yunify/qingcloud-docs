---
title: "Linux云服务器网卡丢失IP的处理方案"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false
---

## 问题背景

客户的云服务器无法登陆，经排查发现是云服务器的网卡没有获取到IP地址，如截图所示。

![image-20210218122347304](/compute/vm/_images/nic_loss_ip1.png)

### 1.可以执行命令 dhclient + 网卡名，以eth0例

```shell
dhclient eth0
```

### 2.重启网卡

```shell
ifdown eth0
ifup eth0
```



