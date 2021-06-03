---
title: "OpenVPN Mac客户端使用方法"
date: 2021-04-09T21:37:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false

---

## 背景说明

本文案例为MAC客户端以证书的方式连接openvpn。



1.执行以下命令安装OpenVPN客户端

```
brew install openvpn
```

**注意：如果尚未安装homebrew，先安装homebrew。**



2.OpenVPN配置完成，将证书下载到本地，选择MAC证书下载。执行下面命令删除默认配置文件：

```
rm /usr/local/etc/openvpn/*
```



3.执行下面命令将文件拷贝到配置目录

```
cp rtr-xxxxxxxx-certs.zip /usr/local/etc/openvpn/
```



4.解压证书文件

```
cd  /usr/local/etc/openvpn/
unzip /usr/local/etc/openvpn/rtr-xxxxxxxx-certs.zip
```



5.执行下面命令发起连接

```
sudo /usr/local/opt/openvpn/sbin/openvpn --config /usr/local/etc/openvpn/config.ovpn
```



6.测试连接

  ●方式一：使用ifconfig 命令查看是否已经产生 虚拟网络ip 地址 ：10.8.0 网段 ， 显示虚拟ip地址 表示成功创建链接。

```
tun0: flags=4305<UP,POINTOPOINT,RUNNING,NOARP,MULTICAST>  mtu 1500
        inet 10.8.0.26  netmask 255.255.255.255  destination 10.8.0.25
        inet6 fe80::d4df:646b:9319:6622  prefixlen 64  scopeid 0x20<link>
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 100  (UNSPEC)
 (UNSPEC)       
        RX packets 1  bytes 52 (52.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 4  bytes 184 (184.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

●方式二：ping VPC内网资源ip，如可ping通连接，则表示连接成功。