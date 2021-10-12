---

title: "HTTPS访问报错400"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 20
draft: false
enableToc: false
---

## 背景介绍

当服务器无法理解对它的请求时，会发生400 Bad Request错误。 之所以称为400错误，是因为这是Web服务器用来描述这种错误的HTTP状态代码。

## 解决方法

### HTTP和HTTPS交互的问题

如果负载均衡器配置的是HTTP的监听器，但是后端采用的是HTTPS，Client端访问就会出现400错误，如下提供两种解决方式供参考。

1. 如果仍然想在后端配置了SSL ，负载均衡器的监听器则需要改成TCP的方式

   操作步骤：**负载均衡器** > **lb-xxxxxxx**，进入负载均衡器后修改监听器。

   ![modify_lb](../../../_images/modify_lb.jpg)

   ![lb_tcp](../../../_images/lb_tcp.jpg)

2. 如果后端采用HTTP，负载均衡器创建HTTPS监听器，HTTPS监听器加载SSL证书，由LB来做SSL证书的加载和卸载

   操作步骤：**负载均衡器** > **lb-xxxxxxx** > **创建监听器** ，HTTPS模板如下图。

   ![lb_ssl](../../../_images/lb_ssl.png)

### 仔细检查地址 

出现400错误的最常见原因是网址输入错误。 如果您自己在地址栏中输入了URL，则可能输入错误。 如果单击另一个网页上的链接并显示404错误，则也有可能在链接页面上键入了错误的链接。 检查地址，看看是否发现任何明显的错误。 另外，请检查URL中的特殊符号，尤其是您在URL中通常看不到的特殊符号。

### 清除浏览器的Cookie和缓存

许多网站报告400错误，因为它们正在读取的Cookie损坏或过旧。 某些浏览器扩展程序也可能会更改Cookie，并导致400错误。 您的浏览器也可能缓存了您试图打开的页面的损坏版本,操作步骤浏览器右上角处 -> 更多工具 -> 清除浏览数据 -> 清除数据

![de_cookie](../../../_images/de_cookie.jpg)

### 刷新您的DNS

您的计算机可能存储了过时DNS记录导致错误。 简单刷新DNS记录可能有助于解决问题。请参考已获得的有关如何在[Windows](https://www.howtogeek.com/343349/update-troubleshoot-browsing-issues-by-reloading-the-dns-client-cache-on-windows/)和[macOS](https://www.howtogeek.com/180356/how-to-reset-the-dns-cache-on-mac-os-x/)上重置DNS缓存的完整指南。

