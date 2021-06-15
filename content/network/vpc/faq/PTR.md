---
title: "关闭/开启 PTR"
description: Test description
weight: 40
draft: false
enableToc: false
---

## 文档背景
DNS 服务器里面有两个区域，即“正向查找区域”和“反向查找区域”，正向查找区域就是通常所说的域名解析，反向查找区域即是 IP 反向解析，它得到作用是通过查找 IP 地址的 PTR 记录来得到该 IP 地址指向的域名。要成功得到域名就必须有该 IP 地址的 PTR 记录。PTR 及记录是邮件交换记录的一种，邮件交换记录中有A记录和 PTR 记录，A记录解析名字到地址，PTR 记录解析地址到名字。

青云 VPC 网络的内网 DNS 服务功能可以对 VPC 内部提供域名解析的服务，可以开启/关闭内网 DNS 服务。同时支持开启/关闭 PTR 解析类型-反向 DNS 解析。

路径：网络-VPC网络-管理配置-DNS服务

![ptr_1](../_images/ptr_1.png)

`注意：`  
`1.关闭 DNS 功能, 需要让云服务器重新获取 DHCP 解析, 更新本地 DNS 地址后才能生效。`  
`2.开启 DNS 功能, 需要让云服务器重新获取 DHCP 解析, 更新本地 DNS 地址后才能生效。`  
`3.关闭/开启 DNS 功能，开启/关闭 PTR 功能后，都需要点击 vi etc/passwd 的应用修改。`  

## 示例场景
### 1.例如设置域名 aa.localdomain 解析到 192.168.8.2，开启 PTR 记录测试结果如下：

```
[root@i-0026uq32 ~]# ping aa
PING aa.localdomain (192.168.8.2) 56(84) bytes of data.
64 bytes from aa.localdomain (192.168.8.2): icmp_seq=1 ttl=64 time=0.014 ms
64 bytes from aa.localdomain (192.168.8.2): icmp_seq=2 ttl=64 time=0.041 ms
^C
--- aa.localdomain ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1000ms
rtt min/avg/max/mdev = 0.014/0.027/0.041/0.014 ms
```

通过 dig 测试域名解析和 PTR 反向解析记录

```
[root@i-0026uq32 ~]# dig aa.localdomain

; <<>> DiG 9.11.4-P2-RedHat-9.11.4-26.P2.el7_9.5 <<>> aa.localdomain
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 19091
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 1, ADDITIONAL: 2

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;aa.localdomain.			IN	A

;; ANSWER SECTION:
aa.localdomain.		604800	IN	A	192.168.8.2

;; AUTHORITY SECTION:
localdomain.		604800	IN	NS	localhost.localdomain.

;; ADDITIONAL SECTION:
localhost.localdomain.	604800	IN	A	127.0.0.1

;; Query time: 0 msec
;; SERVER: 192.168.255.254#53(192.168.255.254)
;; WHEN: Tue May 18 14:08:58 CST 2021
;; MSG SIZE  rcvd: 99

```

```
[root@i-0026uq32 ~]# dig -x 192.168.8.2

; <<>> DiG 9.11.4-P2-RedHat-9.11.4-26.P2.el7_9.5 <<>> -x 192.168.8.2
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 28577
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 1, ADDITIONAL: 3

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 4096
;; QUESTION SECTION:
;2.8.168.192.in-addr.arpa.	IN	PTR

;; ANSWER SECTION:
2.8.168.192.in-addr.arpa. 604800 IN	PTR	aa.localdomain.

;; AUTHORITY SECTION:
168.192.in-addr.arpa.	604800	IN	NS	localhost.

;; ADDITIONAL SECTION:
localhost.		604800	IN	A	127.0.0.1
localhost.		604800	IN	AAAA	::1

;; Query time: 0 msec
;; SERVER: 192.168.255.254#53(192.168.255.254)
;; WHEN: Tue May 18 14:08:17 CST 2021
;; MSG SIZE  rcvd: 148
```

### 2.例如设置域名 aa.localdomain 解析到 192.168.8.2，关闭 PTR 记录测试结果如下：

```
[root@i-ets7af6q ~]# dig -x 192.168.8.2

; <<>> DiG 9.11.4-P2-RedHat-9.11.4-16.P2.el7_8.6 <<>> -x 192.168.8.2
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN, id: 26375
;; flags: qr aa rd ra; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 512
;; QUESTION SECTION:
;2.8.168.192.in-addr.arpa.	IN	PTR

;; AUTHORITY SECTION:
168.192.in-addr.arpa.	85914	IN	SOA	168.192.in-addr.arpa. . 0 28800 7200 604800 86400

;; Query time: 8 msec
;; SERVER: 114.114.114.114#53(114.114.114.114)
;; WHEN: Tue May 18 15:34:27 CST 2021
;; MSG SIZE  rcvd: 88

```

