---
title: "云服务器类型与存储类型"
description: 云服务器类型与存储类型关系
draft: false
weight: 15
keyword: QKE, 工作负载, 存储
---

系统会根据集群节点的云服务器类型自动指定 Kubernetes 的默认存储类型：

- 如果节点是基础型云服务器，那么默认的 Kubernetes 存储类型就是 `基础型`（standard）。
- 如果节点是企业型 e3 云服务器，那么默认的 Kubernetes 存储类型就是 `企业型 SSD`（ssd-enterpris）。

而安装 KubeSphere 及内置组件时，系统会自动使用`容量型云盘`(high-capacity)进行挂盘。

