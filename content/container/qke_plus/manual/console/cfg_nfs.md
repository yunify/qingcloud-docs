---
title: "对接 NFS 服务端"
description: 
draft: true
weight: 40
keyword: 青云, QingCloud, 云计算, 容器, QKE
---

本小节介绍如何使用 NFS 动态分配器来对接 NFS 服务端。

## 背景信息

QKE 预安装了 NFS 客户端程序，为了方便用户对接 NFS 服务端，QKE 预置了 [NFS 动态分配器](https://github.com/helm/charts/tree/master/stable/nfs-client-provisioner)，支持动态分配存储卷，分配和回收存储卷过程简便，可对接一个 NFS 服务端。

> **说明**
>
> 用户也可以使用 [Kubernetes 官方方法对接 NFS 服务端](https://kubernetes.io/docs/concepts/storage/volumes/#nfs)，这是一种静态分配存储卷方法，分配和回收存储卷过程复杂，可对接多个 NFS 服务端。

## 前提条件

用户对接 NFS 服务端时应确保 QKE 各节点有权限挂载 NFS 服务端文件夹。

## 操作步骤

以下步骤示例中，NFS 服务端 IP 为 192.168.0.4，NFS 共享文件夹为 /data。

### 安装 NFS 动态分配器

在 QKE client 节点，执行 Helm 命令，安装 NFS 分配器。

```
helm install --name-template nfs-csi main/nfs-client-provisioner --set nfs.server=192.168.0.4 --set nfs.path=/data --set image.repository=kubesphere/nfs-client-provisioner --namespace=kube-system
```

`QKE v1.0.1` 及更早版本请执行以下命令进行安装：

```
helm install --name ks /opt/kubernetes/k8s/addons/nfs-client-provisioner/ --set nfs.server=192.168.0.4 --set nfs.path=/data --namespace kube-system
```

预期回显信息：

```
NAME:   ks
LAST DEPLOYED: Tue May 14 20:20:44 2020
NAMESPACE: kube-system
STATUS: DEPLOYED
```

### 验证安装结果

执行以下命令，查看 NFS 动态分配器容器组是否正常运行。

```
kubectl get po -n kube-system | grep nfs-client
```

预期回显：

```
ks-nfs-client-provisioner-cc7f5db98-c4b2m   1/1     Running   0          6s
```

### 查看 NFS 存储类型

```
$ kubectl get sc nfs-client
NAME         PROVISIONER                               AGE
nfs-client   cluster.local/ks-nfs-client-provisioner   26m
```

### 创建和挂载 NFS 存储卷

现在可以通过动态创建 NFS 存储卷和工作负载挂载 NFS 存储卷了。

创建和挂载存储卷请参见[挂载云平台存储](../mount_storage/)。
