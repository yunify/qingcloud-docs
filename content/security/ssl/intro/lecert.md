---
title: "LE证书介绍"
date: 2020-12-01T00:38:25+09:00
description: LE证书介绍
draft: false
enableToc: false
keyword: LE证书
weight: 5
---


Let’s Encrypt 证书简称 LE 证书，是一种永久免费的 SSL证书。Let’s Encrypt 是一个由非营利性组织互联网安全研究小组（ISRG）提供的免费、自动化和开放的证书颁发机构（CA）。借助 Let’s Encrypt 颁发的证书可以为我们的网站免费启用 HTTPS(SSL/TLS) 。

为了提高证书密钥的时效性，Let’s Encrypt 证书到期时间为3个月，每3个月需要重新续约。Let’s Encrypt 官方提供了几种证书的申请方式方法，可以通过自动化脚本实现证书的自动签发/续签。

申请LE证书成功，并将之应用于负载均衡器，或下载到任意云主机中使用。

当**应用于负载均衡器的LE证书**即将到期时，证书服务将自动发起证书续签申请，续签成功后替换证书密钥文件，并自动将新的证书应用于负载均衡等关联服务中。实现证书永久自动续约，无需担心证书到期。


在Console 打开SSL证书服务，点击购买SSL证书，在证书品牌选择 LetsEncrypt，即可创建LE证书订单。


![](../../_images/lessl1.png)