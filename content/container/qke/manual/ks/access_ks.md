---
title: "登录 KubeSphere"
description: 本小节介绍如何在本地通过公网访问 KubeSphere。
draft: false
weight: 10
keyword: 青云, QingCloud, 云计算, 容器, QKE, KubeSphere
---

如果您安装了 KubeSphere，则可以使用浏览器登录 KubeSphere 控制台。

本小节介绍如何在本地通过公网访问 KubeSphere。

## 前提条件

- 确认 KubeSphere 的后端都已正常运行。

  > **说明**
  >
  > 可使用 `kubectl get po -n kubesphere-system`	命令查看运行状态。返回信息中，若 **Status** 列均显示`Runing`则表示KubeSphere 后端正常运行。

- 确保用于访问的机器具备访问外网的能力。

## 背景信息

KubeSphere 控制台以 NodePort 的形式暴露在端口 30880。

首次登录 KubeSphere 请使用如下默认管理员账户及密码，登录后需要立即修改密码。

- **用户名**：`admin@kubesphere.io`

- **密码**：`P@88w0rd`

## 操作步骤

### 通过负载均衡器

1. 创建一个外部绑定的公网 IP。

2. 在集群参数中配置 **KubeSphere 控制台 EIP** 为创建好的公网 IP。系统将自动创建一个负载均衡器并绑定此 EIP。

   > **说明**
   >
   > 若您已经在创建集群时配置了此参数，则可直接使用配置的 EIP 进行访问，无须重新配置。

3. 在管理控制台的 QKE 集群详情页的 **KubeSphere 控制台链接**标签页找到 KubeSphere 控制台访问链接。

   ![](../../../_images/ks-console-url-display.png)·	

4. 单击链接即可访问 KubeSphere 控制台。

### 通过 VPC 端口转发

若 QKE 所属 VPC 网络绑定了公网 IP，您可以在 VPC 上设置端口转发到任一集群节点 (非Client节点) 的端口来访问 KubeSphere 控制台。

1. 进入 VPC 详情页，在**管理配置**标签页，点击**端口转发** > **添加规则**。

2. 配置转发规则。

   ![](../../../_images/kubesphere-port-forward.png)

   - **协议**：选择 `TCP`。

   - **源端口**：即外部访问端口，可以根据用户实际情况配置。此处示例为 `30880`。

   - **内网 IP**：表示 KubeSphere 的私有网络 IP 地址，设置为任一集群节点 (非Client节点) 的内网 IP 即可。

   - **内网端口**：默认`30880`，在实际使用中，您需要根据 `kubectl get svc -n kubesphere-system ks-console` 命令返回结果来查看具体端口号。

3. 点击**应用修改**使配置生效。

4. 在 VPC 详情页，点击 VPC 所绑定的安全组，进入该安全组的详情页。

5. 点击**添加规则**，放行转发规则中配置的**源端口**（本例中为 30880，请根据实际配置修改）。

   ![](../../../_images/kubesphere-firewall-rule.png)

6. 点击**应用修改**使配置生效。

   配置完成后，您就可以使用 `http://VPC公网IP:端口/` 地址来访问 KubeSphere 了。登录页面如下图：

   ​	![](../../../_images/kubesphere-login.png)


