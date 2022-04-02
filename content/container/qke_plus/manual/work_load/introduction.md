---
title: "工作负载概述"
description: 介绍工作负载相关概念及功能。
draft: false
keyword: 青云, QingCloud, 云计算, QKE, 工作负载
weight: 1
---

## 什么是工作负载

工作负载是在 Kubernetes 上运行的应用程序，您可以在 Kubernetes 上的一组或多组 Pod 中运行它。工作负载是对 Pod 组的抽象模型，用于描述容器化应用的实际运行载体。

## 工作负载类型

工作负载包括以下类型：

- **无状态工作负载**：即 Kubernetes 中的 “Deployment”，支持弹性伸缩与滚动升级。适用于运行完全独立、功能相同的场景。
- **有状态工作负载**：即 Kubernetes 中的 “StatefulSet”，支持实例有序部署和删除，支持持久化存储，适用于实例间存在互访的场景。
- **守护进程**：即 Kubernetes 中的 “DaemonSet”，确保全部（或者某些）节点上运行一个 Pod。DaemonSet 会在指定的节点上都部署定义的 Pod，确保这些节点都运行守护进程 Pod。适用集群的日志、监控等部署场景。
- **任务**：即 Kubernetes 中的 “Job”，指运行一次性的任务。使用场景为在创建工作负载前，执行任务，将镜像上传至镜像仓库。
- **定时任务**：即 Kubernetes 中的 “CronJob”，指根据指定时间周期性运行的任务。适用于执行数据备份或者发送邮件的场景。



