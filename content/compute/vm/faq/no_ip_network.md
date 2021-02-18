---
title: "主机没有网卡ip"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false
---

执行 ip a 发现没有获取到网卡没有获取到ip

![image-20210218122347304](/compute/vm/_images/dhclient_ip_1.png)

可以执行命令 dhclient + 网卡名，例：

```shell
dhclient eth0
```



