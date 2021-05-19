---

title: " 云服务器加载ssh秘钥失败"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 20
draft: false
enableToc: false
---

## 现象

使用青云控制台云服务器加载SSH秘钥失败

![load_sshserect01](../../../_images/load_sshserect01.png)

## 解决办法

1.进入主机重启一下gapd服务

```
systemctl restart gapd  #Centos
service gapd restart    #Ubuntu
```

2.在控制台重新加载SSH秘钥

![load_sshserect02](../../../_images/load_sshserect02.jpg)

