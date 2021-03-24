---
title: "SSH密钥"
date: 2020-01-30T00:38:25+09:00
description: Test description
draft: false
enableToc: false
keyword: SSH, QingCloud,ssh密钥
---


## 通过 SSH 密钥连接云服务器
>注解
相对于用户名密码方式，密钥方式拥有更强的安全性，也可以很大程度阻止暴力破解的发生。目前常用的密钥都是非对称性的加密方式，云服务器内置公钥，而用户则拥有私钥。由于采用非对称加密，入侵者试图通过公钥去破解私钥难度会远远超出密码的破解。

### 1. 准备密钥

首先，需要在 QingCloud 控制台创建密钥，您也可以使用自己原有的密钥。

![](/compute/ssh/manual/_images/creat-sshkey.png)

### 2. 云服务器加载上密钥

您可以在创建云服务器时选择密钥

![](/compute/ssh/manual/_images/creat-instance-key.png)

也可以给现有云服务器加载密钥,选择云服务器右键 - ssh 密钥 - 加载

![](/compute/ssh/manual/_images/add-instance-key.png)

### 3. 配置好弹性 IP 和防火墙

在连接云服务器之前，请确保您的云服务器已经绑定了弹性公网 IP，[防火墙放行](https://docsv3.qingcloud.com/security/security_group/manual/sg_setting/) TCP 22 端口。

### 4. 将密钥转换为正确的格式

如果您用的是 PuTTY ，您需要用 PuTTYgen 将私钥转换为 PuTTY 支持的格式 ( .ppk ) ，点击 Load 加载您的私钥

![](/compute/ssh/manual/_images/putty-key-transmit.png)

### 5. 打开软件，选择密钥

然后在 PuTTY 的配置页面 `Connection` 的 `Auth` 选择您的私钥

![](/compute/ssh/manual/_images/putty-ssh.png)

### 6. 输入 IP 地址

最后，在 `Session` 页面输入 IP 地址，点击 Open

![](/compute/ssh/manual/_images/putty-session.png)



>注解
如果您已经尝试采用上述的步骤，仍然无法连接至您的云服务器。建议您提交工单，我们的工程师会尽快帮您解决问题。