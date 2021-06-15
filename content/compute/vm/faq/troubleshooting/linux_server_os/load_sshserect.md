---
title: " 云服务器加载 SSH 秘钥失败"
description: Test description
weight: 20
draft: false
enableToc: false
---

## 现象

使用青云控制台云服务器加载 SSH 秘钥失败

![load_sshserect01](../../../_images/load_sshserect01.png)

## 解决办法

1.进入主机重启一下 gapd 服务

```
systemctl restart gapd  #Centos
service gapd restart    #Ubuntu
```

2.在控制台重新加载 SSH 秘钥

![load_sshserect02](../../../_images/load_sshserect02.jpg)

