---
title: "在 QKE 中使用文件存储 vNAS"
description: 介绍如何在 QKE 中安装及使用 KubeSphere。
draft: false
weight: 10
keyword: QKE,vNAS,NFS,共享存储
---

本文介绍如何在 QKE 中使用文件存储 vNAS 来实现持久化存储与共享存储。

## 前提条件

已创建 QKE 集群。具体操作请参见[创建 QKE 托管版集群](/container/qke_plus/quickstart/create_hosting_cluster/)。

## 准备工作

1. **创建文件存储 vNAS。**

   vNAS 所属 VPC 需要和 QKE 集群节点在同一个 VPC 内。具体操作，请参见[创建 NAS 服务器](/storage/vnas/manual/vnas_basic_operation/#创建-vnas-服务器)。

2. **创建共享存储目标。**

   创建一个 `NFS` 类型的共享存储目标，硬盘选择已挂载到 QKE 集群中的云硬盘资源。具体操作，请参见[创建共享存储目标](/storage/vnas/manual/vnas_basic_operation/#创建共享存储目标)。

   > **说明**
   >
   > 权限组不能为空，请选择已配置好的权限组及账户，确保需要进行挂载的 IP 地址或网段能够访问文件系统。账户及权限组配置，请参见[创建账户及权限组](/storage/vnas/manual/vnas_basic_operation/#账户)。

3. **安装 NFS CSI 驱动。**

   以使用 Helm 安装 csi v4.0.0 为例（请确保已安装 [Helm](https://helm.sh/zh/docs/intro/install/)）。

   1. 添加 chart 仓库。

      ```
      helm repo add csi-driver-nfs https://raw.githubusercontent.com/kubernetes-csi/csi-driver-nfs/master/charts
      ```

   2. 安装 NFS CSI。

      ```
      helm install csi-driver-nfs csi-driver-nfs/csi-driver-nfs --namespace kube-system --version v4.0.0
      ```

## 操作步骤

本操作以配置动态存储卷为例进行介绍。

### 步骤一：创建 StorageClass

1. 创建并复制以下内容到 pvc-vnas.yaml 文件中。

   ```
   apiVersion: storage.k8s.io/v1
   kind: StorageClass
   metadata:
     name: pvc-vnas
   provisioner: nfs.csi.k8s.io
   parameters:
     server: 172.22.xx.xx
     share: /mnt/vnas
   reclaimPolicy: Delete
   volumeBindingMode: Immediate
   mountOptions:
     - nconnect=8  # only supported on linux kernel version >= 5.3
     - nfsvers=4.1
   ```

   参数说明：

   - server：vNAS 服务器 IP 地址。在文件存储 vNAS 主页面可查看。
   - share：vNAS 共享存储目标的共享目录。在 **vNAS 服务器详情页面** > **共享存储目标**页签可查看。

2. 执行以下命令创建 StorageClass。

   ```
   kubectl create -f pvc-vnas.yaml
   ```

### 步骤二：创建 PVC

1. 创建并复制以下内容到 pvc-nfs-dynamic.yaml 文件中。

   ```
   apiVersion: v1
   kind: PersistentVolumeClaim
   metadata:
     name: pvc-nfs-dynamic
   spec:
     accessModes:
       - ReadWriteMany
     resources:
       requests:
         storage: 10Gi
     storageClassName: pvc-vnas
   ```

   参数说明：

   - name：PVC 名称。
   - accessModes：配置访问模式。
   - storage：声明应用存储使用量。
   - storageClassName：StorageClass 的名称，用于绑定 StorageClass。

2. 执行以下命令创建 PVC。

   ```
   kubectl create -f pvc-nfs-dynamic.yaml
   ```

### 步骤三：创建应用并挂载 PVC

1. 创建并复制以下内容到 deployment.yaml 文件中。

   ```
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: deployment-nginx
     labels:
       app: nginx
   spec:
     replicas: 1
     selector:
       matchLabels:
         app: nginx
     template:
       metadata:
         labels:
           app: nginx
       spec:
         containers:
         - name: nginx
           image: nginx:1.7.9
           ports:
           - containerPort: 80
           volumeMounts:
             - name: vnas-pvc
               mountPath: "/mnt/nfs"
         volumes:
           - name: vnas-pvc
             persistentVolumeClaim:
               claimName: pvc-nfs-dynamic
   ```

   参数说明：

   mountPath：vNAS 在容器中挂载的位置。

   claimName：PVC 的名称，用于绑定 PVC。本例中为 **pvc-nfs-dynamic**。

2. 执行以下命令便可以创建名为 deployment-vnas 应用。

   ```
   kubectl create -f deployment.yaml 
   ```

3. 执行以下命令查看 Pod 信息。

   ```
   kubectl get pod
   ```

   预期输出：

   ```
   
   NAME                                 READY   STATUS    RESTARTS   AGE
   deployment-nginx-5b5cdb85f6-n****    1/1     Running   0          32s
   ```

4. 执行以下命令查看挂载信息。

   ```
   kubectl exec -it  deployment-nginx-5b5cdb85f6-n**** -- df -h
   ```

   预期输出：

   ```
   Filesystem                        Size Used  Avail Capacity  Mounted on
   172.22.xx.xx/mnt/vnas/pvc-96****  20G   44M   19G    1%       /mnt/nfs
   ```

   





