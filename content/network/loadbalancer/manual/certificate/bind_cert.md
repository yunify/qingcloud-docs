---
title: "绑定/更换证书"
description: 介绍如何为监听器绑定或更换证书。
keyword: 负载均衡器,服务器证书,监听器
draft: false
weight: 20
---

本文介绍如何为监听器绑定证书及更换已绑定的证书。

## 操作场景

- 配置 HTTPS/SSL 监听器时，需要为监听器绑定服务器证书，您可以参考本章节绑定服务器证书。
- 若负载均衡器实例使用的证书已过期或者其它原因需要更换，您可以参考本章节更换服务器证书。

## 前提条件

已[创建服务器证书](../create_cert/)。

## 绑定证书

您可以在创建 HTTPS/SSL 监听器时绑定证书。详细操作，请参见[添加 HTTPS 监听器](/network/loadbalancer/manual/monitor/create_https_monitor/) 及 [添加 SSL 监听器](/network/loadbalancer/manual/monitor/create_ssl_monitor/)。

<img src="../../../_images/bind_cert.png" style="zoom:50%;" />

## 更换证书

您可以通过修改监听器来更换所绑定的证书。详细操作，请参见[修改监听器](/network/loadbalancer/manual/monitor/mge_monitor/)。

<img src="../../../_images/mdy_cert.png" style="zoom:50%;" />
