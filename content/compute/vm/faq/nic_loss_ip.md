---
title: "网卡丢失ip"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false
---

执行 ip a 发现网卡没有获取到ip

![image-20210218122347304](/compute/vm/_images/nic_loss_ip1.png)

1、可以执行命令 dhclient + 网卡名，以eth0例：

```shell
dhclient eth0
```

2、重启网卡

```shell
ifdown eth0
ifup eth0
```



