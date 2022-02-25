---
title: "使用 kubectl 连接集群"
description: 介绍如何使用 kubectl 工具连接 Kubernetes 集群
draft: false
enableToc: false
weight: 30
keyword: 青云, QingCloud, 云计算, kubectl, K8s
---

本小节将指导您如何在本地使用 kubectl 工具连接到集群。

> **说明**
>
> kubectl 是标准的 Kubernetes 命令行管理工具，您可以通过 Kubectl 来管理和控制 QKE 集群。

## 通过负载均衡器

对于高可用的 QKE （三个主节点）或配置了**K8s apiserver EIP** 的集群，可通过负载均衡器连接集群。

### 步骤一：安装 kubectl

在本地电脑下载并安装 kubectl，具体安装操作请参见[安装和设置 kubectl](https://kubernetes.io/docs/tasks/kubectl/install/?spm=a2c4g.11186623.0.0.18417aa2PRtXQX)。

> **说明**
>
> 请确保您的电脑可以访问外网。

### 步骤二：配置集群公网访问

#### 已配置 **K8s apiserver EIP**

若您在创建 QKE 集群时，配置了 **K8s apiserver EIP**，系统将会自动创建一个负载均衡器并绑定此 EIP，您可以直接通过该公网 IP 连接集群，无需另行配置。

> **说明**
>
>  **K8s apiserver EIP** 仅支持在创建集群时进行配置，创建后不可修改。

![](../../_images/apiserver_eip_cfg.png)

#### 未配置 **K8s apiserver EIP**

若您在创建高可用 QKE 集群时，未配置 **K8s apiserver EIP** 参数，则需要手动为负载均衡器绑定公网 IP。

1. 在**公网 IP** 页面，申请一个外部绑定的公网 IP。

2. 在**负载均衡器**页面，找到以集群 ID 命名的负载均衡器，将公网 IP 绑定到该负载均衡器。

3. 在集群**配置参数**标签页中，点击**修改属性**，将参数 **Kubernets EIP 地址** 的值设置为上述负载均衡器的公网 IP，点击**保存**。

   > **说明**
   >
   > 修改 **Kubernets EIP 地址**，将对应修改 `kubeconfig` 文件中的`serve` 字段的 IP 。

   ![](../../_images/k8s_eip_cfg.png)

   ​	

4. 待更新完成后，在 **kubeconfig** 标签页中，可以查看到配置文件中`serve` 字段的 IP 已变更为负载均衡器的公网 IP，表示通过此地址来连接到集群。

   ![](../../_images/kubeconfig_server_value.png)

### 步骤三：配置 Kubeconfig

kubectl 工具默认会从客户端机器的 `$HOME/.kube` 目录下查找名为`config`的文件，该文件用于存储所要管理集群的访问凭证，kubectl 会根据该配置文件连接至集群。

1. 在 **kubeconfig** 标签页中，复制配置文件中的内容。

   > **注意** 
   >
   > 请确保`server` 字段值为 `https://负载均衡器绑定EIP:6443`。

2. 将复制内容粘贴到 kubectl 客户端机器的 `$HOME/.kube/config` 文件中并保存退出。

   > **说明**
   >
   > 如果安装目录`$HOME/`下没有 `.kube` 目录和 `config` 文件，请自行创建。

### 步骤四：验证集群连通性

集群凭证配置完成后，您可以执行 **kubectl** 命令以验证集群的连通性。

以查看集群节点状态为例，执行以下命令：

```
kubectl get no --kubeconfig config
```

预期输出：

```
NAME          STATUS   ROLES                  AGE   VERSION
master1       Ready    control-plane,master   25h   v1.20.6
master2       Ready    control-plane,master   25h   v1.20.6
master3       Ready    control-plane,master   25h   v1.20.6
worker-p001   Ready    worker                 25h   v1.20.6
worker-p002   Ready    worker                 25h   v1.20.6
worker-p003   Ready    worker                 25h   v1.20.6
```



## 通过 VPC 端口转发

若您创建集群时未配置 **K8s apiserver EIP**，但集群所属 VPC 配置了公网 IP，您也可以通过 VPC 的端口转发功能来连接集群。

### 步骤一：安装 kubectl

在本地电脑下载并安装 kubectl，具体安装操作请参见[安装和设置 kubectl](https://kubernetes.io/docs/tasks/kubectl/install/?spm=a2c4g.11186623.0.0.18417aa2PRtXQX)。

> **说明**
>
> 请确保您的电脑可以访问外网。

### 步骤二：配置集群公网访问

2. 进入集群所属 VPC 的详情页面，在**管理配置**标签页，点击**端口转发** > **添加规则**。

   ![](../../_images/vpc_forward_add.png)

3. 配置转发规则，点击**提交**。

   ![](../../_images/vpc_forward_rule.png)

   **源端口**：即外部访问端口，可以根据用户实际情况配置。此处示例为 16443。

   **内网 IP**：表示访问 Kubernetes Apiserver 的私有网络 IP 地址。

   > **说明**
   >
   > - 对于一个主节点的 QKE，应为主节点的私有网络 IP 地址。
   > - 对于三个主节点的 QKE，应为 QKE 创建时创建的私有网络负载均衡器的 IP，负载均衡器名为 QKE 集群 ID。

   **内网端口**：默认 6443。

4. 点击**应用修改**使配置生效。

5. 在 VPC 详情页，点击 VPC 所绑定的安全组，进入该安全组的详情页。

   ![](../../_images/vpc_sg.png)

6. 点击**添加规则**，放行转发规则中配置的**源端口**（本例中为 16443，请根据实际配置修改）。

   ![](../../_images/sg_rule.png)

7. 点击**应用修改**使配置生效。

8. 在 QKE 集群**配置参数**标签页中，点击**修改属性**，配置 **Kubernets EIP 地址** 及  **Kubernets EIP 端口**的值。

   > **说明**
   >
   > 修改 **Kubernets EIP 地址** 及 **Kubernets EIP 端口**，将对应修改 `kubeconfig` 文件中的`serve` 字段的 IP 及端口。

   **Kubernets EIP 地址**：应设置为 VPC 网络的公网 IP。

   **Kubernets EIP 端口**：应设置为端口转发规则中配置的**源端口**。

   ![](../../_images/k8s_eip_and_port.png)

9. 待更新完成后，在 **kubeconfig** 标签页中，可以查看到配置文件中`serve` 字段的 IP 及端口 已变更为上述配置的 **Kubernets EIP 地址** 及  **Kubernets EIP 端口**的值，表示通过此地址来连接集群。

   ![](../../_images/kubeconfig_server_value_2.png)

### 步骤三：配置 Kubeconfig

kubectl 工具默认会从客户端机器的 `$HOME/.kube` 目录下查找名为`config`的文件，该文件用于存储所要管理集群的访问凭证，kubectl 会根据该配置文件连接至集群。

1. 在 **kubeconfig**  标签页中，复制配置文件中的内容。

   > **注意** 
   >
   > 请确保`server` 字段值为 `https://VPC绑定EIP:VPC端口转发源端口`。

2. 将复制内容粘贴到 kubectl 客户端机器的 `$HOME/.kube/config` 文件中并保存退出。

   > **说明**
   >
   > 如果安装目录`$HOME/`下没有 `.kube` 目录和 `config` 文件，请自行创建。

### 步骤四：验证集群连通性

集群凭证配置完成后，您可以执行 **kubectl** 命令以验证集群的连通性。

以查看集群节点状态为例，执行以下命令：

```
kubectl get no --kubeconfig config
```

预期输出：

```
NAME          STATUS   ROLES                  AGE   VERSION
master1       Ready    control-plane,master   25h   v1.20.6
master2       Ready    control-plane,master   25h   v1.20.6
master3       Ready    control-plane,master   25h   v1.20.6
worker-p001   Ready    worker                 25h   v1.20.6
worker-p002   Ready    worker                 25h   v1.20.6
worker-p003   Ready    worker                 25h   v1.20.6
```

