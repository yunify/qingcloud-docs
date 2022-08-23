---
title: "通过 SSH 登录自管版集群 Master 节点"
description: 介绍如何通过 SSH 登录自管版集群 Master 节点。
draft: false
keyword: SSH登录集群,QKE自管版集群
weight: 20
---

为了方便您的集群管理与维护，QKE 支持通过 SSH 方式登录自管版集群的 Master 节点。本文介绍如何为自管版集群开通 SSH 登录，以及如何通过 SSH 方式连接自管版集群的 Master 节点。

## 前提条件

已创建自管版 QKE 集群。

## 开启 SSH 登录

您需要在集群参数配置中开启 **SSH 登录集群**的功能。

1. 登录 QKE 控制台。

2. 在集群列表，点击目标集群的名称，进入**集群概览**页面。

3. 在左侧导航栏，点击**集群信息**，进入**集群信息**页面。

4. 在**环境参数**区域，找到 **K8s apiserver EIP** 参数，点击![参数配置](/container/qke_plus/_images/edit_icon.png)图标，参数值变为可编辑状态。

5. 选择一个可用的公网 IP 进行配置。若无可用的公网 IP，点击**新建 K8s apiserver EIP** 进行创建。

   <img src="/container/qke_plus/_images/enable_ssh_login.png" style="zoom:50%">

6. 点击**SSH 登录集群**后的开关按钮，开启 SSH 登录集群功能。

7. 选择一种认证方式，支持通过 SSH 密钥或用户名/密码登录。

   - SSH 密钥：选择已创建好的 SSH 密钥。若未创建，点击**新建密钥**前往 **SSH 密钥**页面进行创建。

   - 密码：根据密码规则设置 SSH 登录密码。默认用户为**ubuntu**。

     > **说明**
     >
     > 创建 SSH 密钥时，请及时下载私钥文件。

8. 点击**确定**，保存配置。

## 通过 SSH 密钥登录

在命令行终端中执行如下命令进行登录。

```
chmod 600 /path/to/kp-1234abcd
ssh -i /path/to/kp-1234abcd root@{k8s_apiserver_eip}
```

- `/path/to/kp-1234abcd`需要替换为保存在您本地的私钥文件路径。
- `{k8s_apiserver_eip}`需要替换为您配置的 **K8s_apiserver_EIP**。

## 通过密码登录

1. 在命令行终端中执行如下命令。

   ```
   ssh ubuntu@{k8s_apiserver_eip}
   ```

   `{k8s_apiserver_eip}`需要替换为您配置的 **K8s_apiserver_EIP**。

2. 输入您设置的登录密码，按 **Enter** 即可登录。
