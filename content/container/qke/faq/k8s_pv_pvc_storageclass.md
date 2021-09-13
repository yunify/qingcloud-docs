---
title: "Kubernetes 持久化存储体系"
description: "常见问题"
draft: false
enableToc: false
weight: 10
---

## Kubernetes 持久化存储体系

PVC 是一种 k8s 中比较常见的持久化存储方案，其后端一般是独立的存储系统如 NFS、iSCSI、cephfs 、glusterfs 等。这篇文章就简单的阐述一下这一套存储体系的大致内容。

### 基本概念

在学习 Kubernetes 的持久化存储体系之前，以下几个概念需要先了解一下

- Volume（卷） 所谓容器的 Volume，其实就是将一个宿主机上的目录，跟一个容器里的目录绑定挂载在了一起。在k8s中卷的类型有很多，不同类型的卷的功能都不一样，具体可以参照文档：[Kubernetes Volume _ Kubernetes(K8S)中文文档_Kubernetes中文社区](http://docs.kubernetes.org.cn/429.html#i)
- PV  描述的是持久化存储数据卷。所谓的“持久化 Volume”，指的就是这个宿主机上的目录，具备“持久性”。即：这个目录里面的内容，既不会因为容器的删除而被清理掉，也不会跟当前的宿主机绑定。
- PVC 描述的则是 Pod 所希望使用的持久化存储的属性，比如，Volume 存储的大小、可读写权限等等。
- StorageClass 对象的作用其实就是创建 PV 的模板。

下面的内容中会着重介绍一下 PV，PVC，StorageClass 等这三种 API 对象

### PV

PV 全称是 *PersistentVolume* ，是集群中的一块存储，由管理员配置或使用存储类动态配置。 它是集群中的资源，就像节点是集群资源一样。 PV 是与 Volumes 类似的卷插件，但具有独立于使用 PV 的任何单个 Pod 的生命周期。

其定义方式如下（以 NFS 类型的 PV 为例）

```
apiVersion: v1
kind: PersistentVolume
metadata: 
  name: nfs
spec: 
  storageClassName: manual
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteMany
  persistentVolumeReclaimPolicy: Retain
  nfs:
    server: 10.244.1.4
    path: "/"
```

可以看到，在这个 yaml 文件的 spec 中，我们在 spec 中声明了 storageClassName ，capacity ，accessModes ，persistentVolumeReclaimPolicy ，以及 NFS 的属性。那么这些参数的主要作用如下：

**storageClassName**： 此处声明 storageClass 的名字

**capacity**：设置存储空间大小

**accessModes**：设置访问模式。PV 支持三种访问模式，分别是：

- ReadWriteMany 多路读写，卷能被集群多个节点挂载并读写
- ReadWriteOnce 单路读写，卷只能被单一集群节点挂载读写
- ReadOnlyMany 多路只读，卷能被多个集群节点挂载且只能读

```
注意：这里的访问模型总共有三种，但是不同的存储类型支持的访问模型不同，具体支持什么需要查询官网。一个卷一次只能使用一种访问模式挂载，即使它支持多种访问模式。官方文档：https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes
```

**persistentVolumeReclaimPolicy**：设置回收策略，此处同样支持三种回收策略：

- Retain  -- 保留，需要手动回收。当删除与之绑定的 PVC 时候，这个 PV 被标记为 released（PVC 与 PV 解绑但还没有执行回收策略）且之前的数据依然保存在该 PV 上，但是该 PV 不可用，需要手动来处理这些数据并删除该 PV。
- Recycle -- 回收，当用户不再使用其存储卷时，他们可以从 API 中将 PVC 对象删除，从而允许 该资源被回收再利用。 回收策略 `Recycle` 已被废弃。取而代之的建议方案是使用动态供应。
- Delete  --  对于支持 `Delete` 回收策略的卷插件，当删除阈值绑定的 PVC 时，会将 PersistentVolume 对象从 Kubernetes 中移除，同时也会从外部基础设施（如 AWS EBS、GCE PD、Azure Disk 或 Cinder 卷）中移除所关联的存储资产。

##### Volume

前面有说到，PV 描述的是持久化存储数据卷，为了保证这个 Volume 基本持久性，Kubernetes 就做的工作，就是使用这些存储服务（NFS ，GlusterFS ，远程块存储），来为容器准备一个持久化的宿主机目录，以供将来进行绑定挂载时使用。而容器在这个目录里写入的文件，都会保存在远程存储中，从而使得这个目录具备了“持久性。

这个“持久化“的的过程主要分为如下两步，一般形象的称为”两阶段处理“：

- **第一阶段**  **Attach**

​        这一阶段主要是为虚拟机挂载磁盘。

```
当一个 pod 被调度到某个节点后，kubelet 就会为这个 pod 创建对应的 Volume 目录。如果pod 的 Volume 类型是远程块存储，那么 kubelet 就会调用对应的 api 为 node 加载一块磁盘。而如果你的后端存储是远程文件存储（比如 NFS）的话，kubelet 会直接从“第二阶段”（Mount）开始准备宿主机上的 Volume 目录。
```

- **第二阶段 Mount**

​       这一阶段主要是将挂载的磁盘进行格式化处理，并挂载到宿主机 Volume 目录上。

如上就是 Volume 持久化的过程了，对应地，在删除一个 PV 的时候，Kubernetes 也需要 Unmount 和 Dettach 两个阶段来处理。这个过程执行“反向操作”即可。

### PVC

PVC全称 PersistentVolumeClaim，表达的是用户对存储的请求。概念上与 Pod 类似。 Pod 会耗用节点资源，而 PVC 申领会耗用 PV 资源。Pod 可以请求特定数量的资源（CPU 和内存）；同样 PVC 申领也可以请求特定的大小和访问模式 。

其可以通过如下方式来定义。

```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: nfs
spec:
  accessModes:
    - ReadWriteMany
  storageClassName: manual
  resources:
    requests:
      storage: 1Gi
```

可以看到 PVC 中声明的东西很多和 PV 中声明的类似，主要是声明了 accessModes，storageClassName ，以及卷的容量。因为 PVC 主要是表达用户对存储的请求，所以**PVC 要真正被容器使用起来，就必须先和某个符合条件的 PV 进行绑定**。这里要检查的条件，包括两部分：

- 第一个条件，当然是 PV 和 PVC 的 spec 字段。比如，PV 的存储（storage）大小，就必须满足 PVC 的要求。
- 第二个条件，则是 PV 和 PVC 的 storageClassName 字段必须一样。

PVC 可以理解为持久化存储的“接口”，它提供了对某种持久化存储的描述，但不提供具体的实现；而这个持久化存储的实现部分则由 PV 负责完成。

###### Volume Controller

前面说到，PVC 必须和 PV 绑定之后才能被 pod 使用。但是这个绑定操作应该由谁来完成呢？其实在 k8s 中运行着一个单独的控制器 Volume Controller，它所维护的一个名叫 PersistentVolumeController 的控制循环，专门负责这个操作。

PersistentVolumeController 会不断地查看当前每一个 PVC，是不是已经处于 Bound（已绑定）状态。如果不是，那它就会遍历所有的、可用的 PV，并尝试将其与这个 PVC 进行绑定。而所谓将一个 PV 与 PVC 进行“绑定”，其实就是将这个 PV 对象的名字，填在了 PVC 对象的 spec.volumeName 字段上。

### StorageClass 

前面介绍 PVC 的时候有说到，PVC 需要和 PV 绑定之后才能供 pod 使用。所以，这也要求 PV 需要提前创建好，但是在生产中，尤其是在云平台上，这些操作不应该由人工来完成。而在 Kubernetes 为我们提供了一套可以自动创建 PV 的机制，即：Dynamic Provisioning。Dynamic Provisioning 机制工作的核心，在于一个名叫 StorageClass 的 API 对象。

**StorageClass 对象的作用，其实就是创建 PV 的模板。**

具体地说，StorageClass 对象会定义如下两个部分内容：

- 第一，PV 的属性。比如，存储类型、Volume 的大小等等。
- 第二，创建这种 PV 需要用到的存储插件。比如，Ceph 等等。

当用户创建了一个 PVC 的资源之后，Kubernetes 就会根据 PVC 中的 StroageClassName 找到对应的 StroageClass，然后就会调用该 StorageClass 声明的存储插件，创建出需要的 PV。

需要注意的是，虽然 Kubernetes 在绑定 PV 和 PVC 的时候会匹配 StroageClass 的名字，但是如果对于静态创建的 PV 和 PVC，即便你的 StroageClass 不存在（如文章中的名叫 manual 的 StorageClass 并不存在），但 Kubernetes 在做绑定决策的时候，它依然会考虑 PV 和 PVC 的 StorageClass 定义。

其次，如果你的集群已经开启了名叫 DefaultStorageClass 的 Admission Plugin，那么在定义存储时候即便没有声明 StorageClass，kubernetes也会为 PVC 和 PV 自动添加一个默认的 StorageClass；否则，PVC 的 storageClassName 的值就是“”，这也意味着它只能够跟 storageClassName 也是“”的 PV 进行绑定。

