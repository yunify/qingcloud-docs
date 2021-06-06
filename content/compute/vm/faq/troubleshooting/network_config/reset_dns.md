---
title: "resolv 文件的 DNS 被重置怎么办？"
description: Test description
weight: 40
draft: false
enableToc: false
---

## 概述

编辑 `/etc/resolv.conf` 文件，修改 DNS 。重启服务器后，DNS 被还原为之前默认的 DNS 配置。具体解决方式参考以下方法

## 解决方法

一、关闭 NetworkManager

```
# systemctl stop NetworkManager.service
# systemctl disable NetworkManager
```

二、修改网卡配置，增加 “PEERDNS=no” 参数

```
vi /etc/sysconfig/network-scripts/ifcfg-eth0
PEERDNS=no   
```
