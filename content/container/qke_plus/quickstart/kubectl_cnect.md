---
title: "使用 kubectl 连接集群"
description: 介绍如何使用 kubectl 工具连接 Kubernetes 集群
draft: false
weight: 40
keyword: 青云, QingCloud, 云计算, kubectl, K8s
---

本小节将指导您如何在本地使用 kubectl 工具连接到集群。

> **说明**
>
> kubectl 是标准的 Kubernetes 命令行管理工具，您可以通过 Kubectl 来管理和控制 QKE 集群。

## 前提条件

- 集群已成功创建并正常运行。
- 已配置 **K8s apiserver EIP**。具体操作请参见[集群参数配置](/container/qke_plus/manual/mgt_cluster/paras_cfg/)。

## 操作步骤

### 步骤一：安装 kubectl

在本地电脑下载并安装 kubectl，具体安装操作请参见[安装和设置 kubectl](https://kubernetes.io/docs/tasks/kubectl/install/?spm=a2c4g.11186623.0.0.18417aa2PRtXQX)。

> **说明**
>
> 请确保您的电脑可以访问外网。

### 步骤二：配置 Kubeconfig

kubectl 工具默认会从客户端机器的 `$HOME/.kube` 目录下查找名为`config`的文件，该文件用于存储所要管理集群的访问凭证，kubectl 会根据该配置文件连接至集群。

1. 在**集群信息**页面，点击 **查看 kubeconfig**，然后点击**复制**，复制 kubeconfig 文件中的内容。

   > **注意** 
   >
   > 请确保`server` 字段值为 `https://K8s apiserver EIP:443`。

2. 将 kubeconfig 内容拷贝到 kubectl 客户端机器的 `$HOME/.kube/config` 文件中并保存退出。

   > **说明**
   >
   > 如果安装目录`$HOME/`下没有 `.kube` 目录和 `config` 文件，请自行创建。

### 步骤三：验证集群连通性

集群凭证配置完成后，您可以执行 **kubectl** 命令以验证集群的连通性。

以查看集群节点状态为例，执行以下命令：

```
kubectl get no --kubeconfig config
```

预期输出：

```
NAME          STATUS   ROLES                  AGE     VERSION
master1       Ready    control-plane,master   10m     v1.21.5
master2       Ready    control-plane,master   10m     v1.21.5
master3       Ready    control-plane,master   10m     v1.21.5
worker-p001   Ready    worker                 9m52s   v1.21.5
worker-p002   Ready    worker                 9m46s   v1.21.5
```

