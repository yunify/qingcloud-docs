---
title: "版本历史"
description: "版本历史"
draft: false
enableToc: false
weight: 10
---

## 3.0.0

1. 升级到 Docker 19.03.11
1. 升级到 Kubernetes 1.17.9
1. 升级到 QingCloud CSI v1.2.0
1. 升级到 Helm 3.2.1
1. 升级到 KubeSphere 3.0.0
1. 新增支持自定义 K8s 组件参数
1. K8s 节点默认使用易读名称方便使用
1. 增强安全性，客户端节点默认使用集群 ID 作为初始密码并支持绑定 SSH 密钥

## 2.0.0

1. 升级到 Ubuntu 18.04.3 LTS 64 bit
1. 升级到 Docker 19.03.4
1. 升级到 Kubernetes 1.16.7
1. 升级到 QingCloud CSI v1.1.1
1. 升级到 QingCloud Cloud Controller Manager v1.4.4
1. 升级到 Helm 2.14.3
1. 升级到 KubeSphere 2.1.1
1. 新增支持 GPU 节点
1. 同时支持多种类型的工作节点

## 1.0.1

1. 基于 Ubuntu 18.04.1 LTS 64 bit 操作系统
1. 内置 KubeSphere 高级版 v2.0.2 提供 Kubernetes 管理运维、DevOps、微服务治理等功能
1. 内置 QingCloud Cloud Controller Manager v1.3.6，可自动创建云平台负载均衡器并暴露服务
1. 内置 NFS，Ceph RBD，Glusterfs 客户端程序
1. 优化 KubeSphere console 链接地址显示
1. 禁止将 Qingcloud 镜像仓库地址设置为 registry mirror
1. QKE 集群自动伸缩
1. 删除私有镜像仓库服务环境参数
1. 优化预制资源名
1. 内置 KubeSphere v2.0.2
1. 删除 Harbor 和 Gitlab 容器镜像
1. 在支持的区创建 NeonSAN 存储类型
1. 支持 EIP 访问 Kubernetes
1. 新增安装 KubeSphere 选项，默认安装
1. insecure registry 输入正则检查
1. 内置 arping
1. 删除 latest tag 的容器镜像
1. 内置 NFS 动态分配 Helm Chart
1. 在 Qingcloud 控制台显示 Kubeconfig
1. 启用 kube 和系统资源保留
1. 启用 Docker 日志 rotation
1. 修复 hosts aliases 输入参数检测缺陷
1. 修复 max pods 参数在工作节点失效缺陷
1. 修复审计日志文件路径输入参数检测缺陷
1. 修复创建集群时创建软链接失败缺陷

## 1.0.0

1. 内置 Kubernetes v1.13.5
1. 基于 KubeSphere 高级版 v2.0.1 提供 Kubernetes 管理运维、DevOps、微服务治理等功能
1. 集成 QingCloud CSI v0.2.1，Pod 可直接挂载云平台块存储
1. 集成 QingCloud Cloud Controller Manager v1.3.4，可自动创建云平台负载均衡器并暴露服务
1. 支持 Master 节点高可用
1. 可选内置或者外置 etcd 集群
1. 可选内置或者外置 ES 服务
