---
title: "公网 DNS 转发如何使用"
linkTitle: "公网 DNS 转发如何使用"
description:
draft: false
weight: 1
---

>前提条件：创建 VPC，并绑定公网 IP  
>使用场景：VPC 多个主机需要指定相同的 DNS 服务器地址

## 1、打开 VPC 下的 DNS 服务

![image-20210517184604163](../_images/how_to_use_public_network_DNS_forwarding.assets/image-20210517184604163.png)

这里不需要使用 PTR 记录，可以选择不开启

## 2、添加公网 DNS 服务器

![image-20210517184803261](../_images/how_to_use_public_network_DNS_forwarding.assets/image-20210517184803261.png)

常用的 DNS 服务器有：114.114.114.114、8.8.8.8等。

![image-20210517184908779](../_images/how_to_use_public_network_DNS_forwarding.assets/image-20210517184908779.png)

## 3、主机内部指定 DNS 服务器地址

### 1、重启网络

以 CentOS 7.9为例：

```bash
systemctl restart NetworkManager
```

### 2、直接指定 DNS 服务器地址

```bash
vim /etc/resolv.conf
nameserver 192.168.255.254		#指定VPC网段最后一个IP地址
```

![image-20210517185802390](../_images/how_to_use_public_network_DNS_forwarding.assets/image-20210517185802390.png)

## 4、移除公网 DNS 转发

1、可以删除指定的公网 DNS 服务器地址，使用青云默认配置。
![image-20210517190209536](../_images/how_to_use_public_network_DNS_forwarding.assets/image-20210517190209536.png)

2、关闭 DNS 服务
关闭 DNS 服务需要在云服务器内部重启网络、或者重新指定公网 DNS 服务器地址(参照第3步)，否则 DNS 无法正常使用。

