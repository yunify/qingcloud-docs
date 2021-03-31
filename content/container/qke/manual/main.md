---
title: "使用手册"
description: "使用手册"
draft: false
enableToc: false
weight: 10
---

## 登录节点

### 通过 VNC 登录

可以直接在青云控制台通过客户端节点的 VNC 窗口免密登录其他节点，客户端节点的用户名密码是 `root / <cluster id>`，初次登录会提示修改密码。建议选用至少 8 位字符的复杂密码增强安全性。

> **注意：** `v2.0.0 - KubeSphere v2.1.1` 及更老的版本，其初始化用户名密码为 `root / k8s`。

> 老版本升级之后再关闭重启集群，客户端节点密码会更新为新版本的初始密码

> ![VNC 登录](../../_images/vnc-login.png)

### 通过 SSH 登录

也可以先在集群参数配置 SSH Key，然后直接免密登录所有节点。注意 SSH 密钥格式，要以算法（比如 ssh-rsa）开头，参照下面表格中的说明。

> 注意：所有节点的 SSH 服务已禁止以密码形式登录，请按照本文档使用 SSH 密钥的形式来增强安全性。

> ![集群参数](../../_images/cluster_params.png)

| 参数 | 说明
| --- | ---
| 用户 SSH 公钥	| 以算法、密钥、注释（可省略）这三部分表示，三部分之间用空格隔开，如：ssh-rsa AAAA... user@i-xxx

## 命令行访问 K8s

通过公网 EIP 访问 Kubernetes 资源，需要以下几个步骤：

1. 更新 QKE 参数：在 QKE 配置 Kubernetes EIP 地址
1. 防火墙放行：确保 EIP 与 Kubernetes Apiserver 相连通
1. 下载 kubeconfig：复制 kubeconfig 内容到本地

> 此示例中，VPC 绑定的 EIP 为 139.198.14.13

### 更新 QKE 参数

QKE 的 Kubernetes EIP 地址可以在 QKE 创建时指定，也可以在 QKE 运行时更新。运行时修改 QKE 的 Kubernetes EIP 地址会造成 Kubernetes Apiserver 重启，不建议频繁更新。配置后，此 EIP 地址会自动更新到 Apiserver 的 TLS 证书中。

![](../../_images/access-kubernetes-qke-config.png)

### 防火墙放行

EIP 可以有两种方式与 K8s Apiserver 相连接：VPC 端口转发和通过负载均衡器。请确保 EIP 与 Kubernetes Apiserver 6443 端口相连通。

#### 通过 VPC 端口转发

对于 QKE 所在 VPC 绑定了 EIP 可以采用此方法。

找到访问 Kubernetes Apiserver 的私有网络 IP 地址。对于一个主节点的 QKE，到 QKE 详情页查询 QKE 主节点私有网络 IP 地址。

![](../../_images/access-kubernetes-vxnet-ip-single.png)

对于高可用的 QKE，访问 Kubernetes Apiserver 的私有网络 IP 地址应为 QKE 创建时创建的私有网络负载均衡器的 IP，负载均衡器名为 QKE 集群 ID。

![](../../_images/access-kubernetes-vxnet-ip-ha-lb-ip.png)

VPC 配置转发规则，源端口可以根据用户实际情况配置，内网 IP 为访问 Kubernetes Apiserver 的私有网络 IP 地址，内网端口为 6443。

> 此示例中 VPC 端口转发源端口为 16443。

  ![](../../_images/acees-kubernetes-vpc-port-forward.png)

打开 VPC 网络绑定的防火墙下行端口。

![](../../_images/access-kubernetes-firewall.png)

将转发端口 16443 保存至 `Kubernetes 外网端口` 中。

> 该参数为 `v3.0.0 - KubeSphere v3.0.0` 版本新增参数，用来主动修改 kubeconfig。如果使用的是老版本 QKE，则只能使用默认的 `6443` 端口，不可修改。

![](../../_images/kubernetes-eport.png)

#### 通过负载均衡器

对于通过负载均衡器访问到 QKE Kubernetes Apiserver 的集群可以采用此方法。

将外部绑定类型 EIP 绑定至负载均衡器。

![](../../_images/access-kubernetes-lb-bind-eip.png)

### 下载 kubeconfig

> 请确保用户本地云服务器可访问 EIP。

在 Kubeconfig 标签页将 QKE 的 Kubernetes Kubeconfig 拷贝到用户本地云服务器，即可使用。

> **注意：** `v2.0.0 - KubeSphere v2.1.1` 及更老的版本需要修改 kubeconfig 文件中的 server 字段

> `v3.0.0 - KubeSphere v3.0.0` 该版本会主动修改该字段，其优先级为：kubernetes 外网访问地址 > 负载均衡器 vip > 第一个主节点 ip

![](../../_images/access-kubernetes-kubeconfig.png)

#### 通过 VPC 端口转发

通过 VPC 端口转发，server 的值应设置为 `https://VPC绑定EIP: VPC端口转发源端口`。示例为 `https://139.198.14.13:16443`。

```
$ cat admin.conf
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: ...
    server: https://139.198.14.13:16443
  name: kubernetes
contexts:
- context:
    cluster: kubernetes
    user: kubernetes-admin
  name: kubernetes-admin@kubernetes
current-context: kubernetes-admin@kubernetes
kind: Config
preferences: {}
users:
- name: kubernetes-admin
  user:
    client-certificate-data: ...
$ kubectl get no --kubeconfig admin.conf
NAME          STATUS   ROLES    AGE   VERSION
master1       Ready    master   12m   v1.17.9
master2       Ready    master   12m   v1.17.9
master3       Ready    master   12m   v1.17.9
worker-p001   Ready    worker   10m   v1.17.9
worker-p002   Ready    worker   10m   v1.17.9
worker-p003   Ready    worker   10m   v1.17.9
```

#### 通过负载均衡器

通过负载均衡器, server 的值应设置为 `https://负载均衡器绑定EIP: 6443`。示例为 `https://139.198.19.60:6443`。

```
$ cat admin.conf
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: ...
    server: https://139.198.19.60:6443
  name: kubernetes
contexts:
- context:
    cluster: kubernetes
    user: kubernetes-admin
  name: kubernetes-admin@kubernetes
current-context: kubernetes-admin@kubernetes
kind: Config
preferences: {}
users:
- name: kubernetes-admin
  user:
    client-certificate-data: ...
$ kubectl get no --kubeconfig admin.conf
NAME          STATUS   ROLES    AGE   VERSION
master1       Ready    master   15m   v1.17.9
master2       Ready    master   15m   v1.17.9
master3       Ready    master   15m   v1.17.9
worker-p001   Ready    worker   13m   v1.17.9
worker-p002   Ready    worker   13m   v1.17.9
worker-p003   Ready    worker   13m   v1.17.9
```

## 浏览器访问 KubeSphere

如果安装了 KubeSphere，请先确认 KubeSphere 的后端都已正常运行。

```
# kubectl get po -n kubesphere-system
NAME                                     READY   STATUS    RESTARTS   AGE
ks-apiserver-6c57768789-5rzqt            1/1     Running   0          12m
ks-apiserver-6c57768789-dmdzv            1/1     Running   0          12m
ks-apiserver-6c57768789-l294q            1/1     Running   0          12m
ks-console-9bc9c5df8-8gwfn               1/1     Running   0          14m
ks-console-9bc9c5df8-m2g6t               1/1     Running   0          14m
ks-console-9bc9c5df8-tg2d9               1/1     Running   0          14m
ks-controller-manager-6c7d5d5684-6mtn5   1/1     Running   0          12m
ks-controller-manager-6c7d5d5684-6zxf9   1/1     Running   0          12m
ks-controller-manager-6c7d5d5684-p4wsl   1/1     Running   0          12m
ks-installer-774447cd48-9glh6            1/1     Running   0          17m
openldap-0                               1/1     Running   0          15m
openldap-1                               1/1     Running   0          13m
redis-ha-haproxy-ffb8d889d-4r9mm         1/1     Running   0          15m
redis-ha-haproxy-ffb8d889d-jvmfl         1/1     Running   0          15m
redis-ha-haproxy-ffb8d889d-v4chq         1/1     Running   0          15m
redis-ha-server-0                        2/2     Running   0          15m
redis-ha-server-1                        2/2     Running   0          14m
redis-ha-server-2                        2/2     Running   0          13m
```

> 首次登录 KubeSphere 请使用如下默认管理员账户信息, 登录后务必及时修改密码！
>
> 用户名：`admin@kubesphere.io`
>
> 密码：`P@88w0rd`

### 通过 VPC 端口转发

KubeSphere Dashboard 以 NodePort 的形式暴露在端口 30880，您可以在 VPC 上设置端口转发到任一集群节点 (非Client节点) 的此端口来访问 KubeSphere Dashboard。还需要配置的如下图所示。

> 此示例中，端口是30880，在实际使用中，您需要根据 `kubectl get svc -n kubesphere-system ks-console` 命令返回结果来查看具体端口号。

![](../../_images/kubesphere-port-forward.png)

> 用户通过公网 IP 访问 KubeSphere Dashboard 需要配置 VPC 所绑定的防火墙的下行规则，放行通过公网 IP 对 30880 端口的访问。
>
> ![](../../_images/kubesphere-firewall-rule.png)

配置规则保存后，您就可以使用 VPC 的公网 IP 地址来访问 KubeSphere 了，如下图

![](../../_images/kubesphere-login.png)

### 通过负载均衡器

可在 QingCloud 控制台 QKE 集群详情页的 "KubeSphere 控制台链接" 标签页找到 KubeSphere 控制台访问链接。

![](../../_images/ks-console-url-display.png)

可直接单击链接访问 KubeSphere 控制台。

## 指定负载均衡器服务类型

从 `QKE v1.0.1` 版本起集成了 [QingCloud 负载均衡器插件](https://github.com/yunify/qingcloud-cloud-controller-manager) 支持将 KubeSphere 内部的服务和 QingCloud IaaS 的负载均衡器关联起来，通过负载均衡器将服务暴露给集群外部调用。LB 插件具体用法请参考[文档](https://github.com/yunify/qingcloud-cloud-controller-manager/blob/v1.3.4/docs/configure.md)。根据中国大陆工信部的规定，所有在大陆境内运行的服务都必须进行 ICP 备案。只要在互联网能访问并且使用大陆公网 IP 地址的域名都需要备案。

Service 的 type 设置为 LoadBalancer，然后在 metadata 中增加以下 annotations:

- `service.beta.kubernetes.io/qingcloud-load-balancer-type`
  
> 负载均衡器的承载能力类型，与 [create_loadbalancer](/development_docs/api/command_list/lb/create_loadbalancer/) 接口中的 loadbalancer_type 取值范围相同。
  
- `service.beta.kubernetes.io/qingcloud-load-balancer-eip-ids`
  
  > 负载均衡器上绑定的 EIP ID，最多支持4个，这个 annotation 表示要创建的是 “公网” 类型的负载均衡器。 EIP 必须是可用的 EIP，系统会自动创建负载均衡器。

以下是完整示例。

1）QingCloud 控制台创建公网 IP。

![](../../_images/lb-create-eip.png)

2）得到公网 IP 的 ID。

![](../../_images/lb-get-eip.png)

3）在 KubeSphere Dashboard 创建 LoadBalancer 类型服务。

![](../../_images/lb-select-service-type.png)
![](../../_images/lb-service-settings.png)
![](../../_images/lb-service-add-annotation.png)

4）通过公网 IP 访问到集群内部服务。

![](../../_images/lb-nginx-webpage.png)

## 挂载云平台块存储

从 `QKE v1.0.1` 版本起内置了 [QingCloud CSI](https://github.com/yunify/qingcloud-csi)，可以动态创建基于 QingCloud IaaS 上的硬盘的 PVC，并挂载到 Pod，当 Pod 迁移时，硬盘会自动随着 Pod 迁移到其他云服务器上。KubeSphere 的存储卷使用方法见[文档](https://kubesphere.com.cn/en/docs/installing-on-linux/introduction/storage-configuration/)。

### 使用 NeonSAN 硬盘

QKE 在支持 NeonSAN 硬盘的区创建了 neonsan 存储类型，用户可以在 KubeSphere 控制台创建 NeonSAN 存储卷。

#### 创建存储卷

创建存储卷时 "存储卷设置" 处的存储类型选择 "neonsan" 存储类型：

![](../../_images/storage-create-volume.png)

#### 创建工作负载

创建工作负载挂载 NeonSAN 存储卷：

![](../../_images/storage-create-workload.png)

## 对接 NFS 服务端

QKE 预安装了 NFS 客户端程序，用户对接 NFS 服务端时应确保 QKE 各节点有权限挂载 NFS 服务端文件夹。用户可以使用 [Kubernetes 官方方法对接 NFS 服务端](https://kubernetes.io/docs/concepts/storage/volumes/#nfs)，这是一种静态分配存储卷方法，分配和回收存储卷过程复杂，可对接多个 NFS 服务端。为了方便用户对接 NFS 服务端，QKE 预置了 [NFS 动态分配器](https://github.com/helm/charts/tree/master/stable/nfs-client-provisioner)，支持动态分配存储卷，分配和回收存储卷过程简便，可对接一个 NFS 服务端。

> 示例 NFS 服务端 IP 为 192.168.0.4，NFS 共享文件夹为 /data。

### 安装 NFS 分配器

在 QKE client 节点，执行 Helm 安装命令

```
$ helm install --name ks stable/nfs-client-provisioner --set nfs.server=192.168.0.4 --set nfs.path=/data --set image.repository=kubesphere/nfs-client-provisioner --namespace=kube-system
NAME:   ks
LAST DEPLOYED: Tue May 14 20:20:44 2020
NAMESPACE: kube-system
STATUS: DEPLOYED
```

> `QKE v1.0.1` 及更早版本请执行下面的命令：
> ```
> $ helm install --name ks /opt/kubernetes/k8s/addons/nfs-client-provisioner/ --set nfs.server=192.168.0.4 --set nfs.path=/data --namespace kube-system
> ```

### 验证安装结果

查看 NFS 动态分配器容器组在正常运行状态。

```
$ kubectl get po -n kube-system | grep nfs-client
ks-nfs-client-provisioner-cc7f5db98-c4b2m   1/1     Running   0          6s
```

### 查看 NFS 存储类型

```
$ kubectl get sc nfs-client
NAME         PROVISIONER                               AGE
nfs-client   cluster.local/ks-nfs-client-provisioner   26m
```

### 使用

现在可以通过动态创建 NFS 存储卷和工作负载挂载 NFS 存储卷了。
