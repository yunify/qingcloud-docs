---
title: "如何配置 SSL 证书"
description: "常见问题"
draft: false
enableToc: false
weight: 5
---

若您需要配置 HTTPS 访问 Harbor，则必须创建 SSL 证书并添加到负载均衡器上。您可以使用受信任的第三方 CA 签署的证书，也可以使用自签名证书。

## 前提条件

已从 CA 获取证书或创建好自签名证书。

## 操作步骤

1. 登录 [QingCloud 管理控制台](https://console.qingcloud.com/login)，选择**产品与服务** > **网络** > **负载均衡器**，进入 **负载均衡器**页面。

2. 点击**服务器证书**页签，然后点击**创建**。

3. 填写证书信息，点击**提交**。

   <img src="/container/harbor/_images/faq05_create_cert.png" alt="cert" style="zoom:40%;" />

4. **可选**：回到**负载均衡器**页面，点击**创建**，创建一个负载均衡器。若已创建，请略过此步骤。

5. 点击负载均衡器 ID 号，进入**监听器**页面。

6. 点击**创建监听器**，创建使用 HTTPS 监听协议的监听器并添加已创建的服务器证书。

   <img src="/container/harbor/_images/faq05_create_https_monitor.png" alt="faq05_create_https_monitor" style="zoom:50%;" />

7. 点击**提交**，创建完成。

8. **可选**：若您使用的是自签名证书，还需要执行以下步骤。若您使用的是第三方 CA 颁发的合法证书，则无须执行此步骤。

   以下步骤以在 Linux 系统下操作为例。

   1.拷贝证书到 `/etc/docker/certs.d/yourdomain.com/`。若不存在相应目录，请先创建。

   ```
   cp domain.crt /etc/docker/certs.d/yourdomain.com/ca.crt
   ```

   > **说明**：
   >
   > 此处 `domain.crt` 为您创建的证书，`yourdomain.com` 为 Harbor 的域名地址。

    2.更新证书。

   ```
   update-ca-certificates
   ```

   

