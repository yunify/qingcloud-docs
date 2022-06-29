---
title: "查看日志及数据文件"
description: 查看日志及数据文件。
keyword: 云计算,大数据,Storm,查看日志及数据文件
weight: 80
draft: false
---

Storm 集群还在各个节点上运行了 Logviewer 服务，该服务允许用户访问各个节点上的日志。

## 前提条件

配置 [VPN](/network/vpc/manual/vpn/)，确保本地可以访问集群网络。即可在本地浏览器里查看日志或下载相应节点的日志文件。

## 获取节点 IP

<img src="/bigdata/storm/_images/node_ip.png" alt="获取节点 IP" style="zoom:50%;" />

## 查看文件

在浏览器输入 http://<Storm 任意节点私有网络 IP>:8000/daemonlog?file=<log file name>，进入文件查看页面。

例如：
- http://masternode_ip:8000/daemonlog?file=nimbus.log
- http://slavenode_hostname:8000/daemonlog?file=worker.log
