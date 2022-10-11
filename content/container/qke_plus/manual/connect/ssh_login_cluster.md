---
title: "通过 SSH 登录自管版集群节点"
description: 介绍如何通过 SSH 登录自管版集群 Master 节点。
draft: false
keyword: SSH登录集群,QKE自管版集群
weight: 20
---

为了方便您的集群管理与维护，QKE 自管版支持通过 SSH 方式登录到集群节点。本文介绍如何为自管版集群开通 SSH 登录，以及如何通过 SSH 方式连接到集群节点。

## 前提条件

当前集群为自管版 QKE 集群。

## 约束限制

自管版提供的 **SSH 登录集群**功能，默认登录的节点为主节点 `master1`（默认主机名），不能直接从本地登录到其他节点，但可通过 `master1` 节点登录到其他节点。

## 开启 SSH 登录

开启 SSH 登录，可选择使用 SSH 密钥登录或密码登录。

- **密钥登录**：登录用户为 **root**，登录方式参见 [SSH 密钥登录](#通过-ssh-密钥登录)。
- **密码登录**：登录用户为 **ubuntu**，登录方式参见[密码登录](#通过密码登录) 。

您可以在创建集群时或创建集群后，在集群参数配置中开启 **SSH 登录集群**的功能。具体操作方法如下：

#### 集群未创建

1. 在自管版集群创建页面的**环境配置参数**区域，找到 **K8s apiserver EIP** 参数。

   <img src="/container/qke_plus/_images/enable_ssh_login_oncreation.png" style="zoom:50%">

2. 选择**绑定已有公网 IP** 或**新建公网 IP**。

3. 点击 **SSH 登录集群**后的开关按钮，开启 SSH 登录集群功能。

4. 选择登录方式，支持通过 SSH 密钥或密码登录。

   - SSH 密钥：选择已创建好的 SSH 密钥。若未创建，点击**新建密钥**前往 **SSH 密钥**页面进行创建。

   - 密码：根据密码规则设置登录密码。登录用户为 **ubuntu**，不可修改。

     > **说明**
     >
     > 创建 SSH 密钥时，请及时下载私钥文件。

#### 集群已创建

1. 在**集群信息**页面的**环境参数**区域，找到 **K8s apiserver EIP** 参数，点击![参数配置](/container/qke_plus/_images/edit_icon.png)图标，参数值变为可编辑状态。

2. 选择一个可用的公网 IP 进行配置。若无可用的公网 IP，点击**新建 K8s apiserver EIP** 进行创建。

   <img src="/container/qke_plus/_images/enable_ssh_login.png" style="zoom:50%">

3. 点击 **SSH 登录集群**后的开关按钮，开启 SSH 登录集群功能。

4. 选择登录方式，支持通过 SSH 密钥或密码登录。

   - SSH 密钥：选择已创建好的 SSH 密钥。若未创建，点击**新建密钥**前往 **SSH 密钥**页面进行创建。

   - 密码：根据密码规则设置 SSH 登录密码。登录用户为 **ubuntu**，不可修改。

     > **说明**
     >
     > 创建 SSH 密钥时，请及时下载私钥文件。

5. 点击**确定**，保存配置。

## 登录主节点 master1 

#### 通过 SSH 密钥登录

在命令行终端中执行如下命令进行登录。

```
chmod 600 /path/to/kp-1234abcd
ssh -i /path/to/kp-1234abcd root@{k8s_apiserver_eip}
```

- `/path/to/kp-1234abcd`需要替换为保存在您本地的私钥文件路径。
- `{k8s_apiserver_eip}`需要替换为您配置的 **K8s_apiserver_EIP**。

#### 通过密码登录

1. 在命令行终端中执行如下命令。

   ```
   ssh ubuntu@{k8s_apiserver_eip}
   ```

   `{k8s_apiserver_eip}`需要替换为您配置的 **K8s_apiserver_EIP**。

2. 输入您设置的登录密码，按 **Enter** 即可登录。

## 登录其他节点

1. [登录到集群 master1 节点](#登录主节点-master1)。

2. 执行如下命令登录其他节点。

   **当前为 root 用户：**

   ```shell
   #可使用节点IP或节点主机名登录
   ssh <节点IP>|<节点主机名>
   ```

   **当前为 ubuntu 用户：**

   ```shell
   #可使用节点IP或节点主机名登录
   sudo ssh <节点IP>|<节点主机名>
   ```

   > **说明**
   >
   > - 可使用节点 IP 或节点主机名登录，选择其一即可。
   > - `<节点主机名>`为  `/etc/hosts`  文件中配置的 hostname，并非控制台上配置的节点名称。

   **例如**：

   当前已通过 ubuntu 用户登录到 master1 节点，需要登录某工作节点，其 IP 为 “192.168.1.2”，主机名为 “worker-p001”，则执行 `sudo ssh 192.168.1.2`  或者  `sudo ssh worker-p001`  进行登录。

3. 可选：ubuntu 用户登录其他节点时，首次登录该节点需要输入密码，再次登录则无需输入密码。

   > **说明**
   >
   > 登录密码与 ubuntu 用户密码一致。



