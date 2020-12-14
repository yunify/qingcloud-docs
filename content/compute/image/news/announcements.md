---
title: "安全公告"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
---

## 漏洞公告

9月4日，Linux社区公布了编号为CVE-2020-14386的内核漏洞。该漏洞源自Linux内核net/packet/af_packet.c，攻击者可以通过该漏洞实现越界写，可能造成提权和容器逃逸等风险。

## 详细描述

CVE-2020-14386是内核模块中存在的内存溢出漏洞。在高版本Linux系统（内核版本高于4.6）上，非特权用户以及K8s或Docker容器中的用户存在触发该漏洞的可能。该漏洞能够允许攻击者实现越界写，可能实现提权或容器逃逸。