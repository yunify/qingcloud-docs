---
title: "网卡多队列"
description: test
draft: false
weight: 15
---

## 网卡多队列

网卡多队列是利用 hash 算法，将网络流量分散到多个网卡队列中，交由多个 CPU 同时处理请求，利用CPU多核特性提高网络处理能力。开启这个功能后，云服务器挂载的网卡会有多队列功能，但是 Linux 系统还需要做相关配置，具体配置请查看文档（https://docs.qingcloud.com/product/faq/index.html#nic-multi-queue）。

















