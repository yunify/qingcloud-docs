---
title: "云服务器类型与存储类型"
description: 云服务器类型与存储类型关系
draft: false
weight: 15
keyword: QKE, 工作负载, 存储
---

- 创建 QKE 集群时：

  - 如果节点是基础型云服务器，默认使用 `基础型`（standard）硬盘作为挂载数据盘。

  - 如果节点是企业型 e3 云服务器，默认使用 `企业型 SSD`（ssd-enterpris）硬盘作为挂载数据盘。

- 集群使用过程中，默认的 Kubernetes 存储类型为`容量型云盘`(high-capacity)，即安装 KubeSphere 及内置组件时，系统会自动使用`容量型云盘`(high-capacity)进行挂盘。

