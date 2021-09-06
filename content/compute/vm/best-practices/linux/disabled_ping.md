---
title: "设置云服务器禁 ping"
date: 2020-08-20T17:08:56+09:00
description: test
weight: 20
draft: false
---

正常情况下，可以直接在云服务器上绑定一个安全组，添加一个 ICMP 协议的拒绝上行规则也可以。

此方法适用于不想给云服务器单独绑定一个安全组的场景。

## 方法一

```bash
#echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all
```

执行完成后，即时生效。

## 方法二

在 ```/etc/sysctl.conf``` 添加一条参数 ```net.ipv4.icmp_echo_ignore_all=1``` 

```bash
# vi /etc/sysctl.conf
...
net.ipv4.icmp_echo_ignore_all = 1   #加入该参数
...
# sysctl -p    #使参数即时生效
```

其实方法二跟方法一实现的原理是一样的，仔细观察可以看到```sysctl.conf```中的参数为方法一种sys目录下的路径。
