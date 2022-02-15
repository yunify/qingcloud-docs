---
title: "连接云服务器"
description: 本章节介绍如何连接云服务器
draft: false
keyword: 云计算, 青云, QingCloud, 云服务器，连接云服务器
weight: 20
---


在连接实例前，请确保您的云服务器已经绑定了弹性公网 IP 或者采用NAT转发了相应的端口，并且您的`防火墙`放行了相应端口。
## Web终端
1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入域名列表页。

3. 每个实例 ID （名称）右侧有个显示屏的图标，点击图标将打开一个远程连接 ( VNC ) 的会话。

   ![](/compute/vm/manual/_images/web-signin.png)

4. 输入用户名和密码，按 **Enter**，登录云服务器。

   若云服务器不接受您的密码，您可以将云服务器关机后[重置云服务器的登录密码](/compute/vm/manual/vm/mgmt_vm/20_reset_pw/) 。

   ![](/compute/vm/manual/_images/web-vnc.png)

## Linux云服务器
如果您使用的是 Windows 操作系统，除了通过 QingCloud 控制台以外，您也可以通过软件连接至 Linux 云服务器，常见的软件有[PuTTY](https://www.putty.org/) 、[Xshell ](https://www.netsarang.com/zh/xshell/)等。

> **注意**
>
> 青云QingCloud 并不知道您的软件来源和用途，也不对其产生的任何的问题和纠纷负责。

### 通过用户名密码连接
>**注意**
>
>相较于密钥，通过用户名和密码连接更加的简单易用。

#### 步骤一：配置公网 IP 和防火墙

首先在连接云服务器之前，请确保您的云服务器已经绑定了弹性公网 IP，[防火墙放行](https://docsv3.qingcloud.com/security/security_group/manual/sg_setting/) TCP 22 端口。

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入域名列表页。

3. 点击云服务器的 ID 进入配置界面，在左侧选择**绑定资源** > **安全组**查看防火墙设置。

   <img src="../../../_images/fw-ssh-22.png" style="zoom:50%;" />

4. 添加安全组规则，并放行 TCP 22 端口。

   ![](../../../_images/fw-ssh-22_1.png)

#### 步骤二：登录云服务器

如下以 PuTTY 工具为例进行说明。

1. 在 `Session` 页面输入 IP 地址，点击 **Open**。

   ![](/compute/vm/manual/_images/putty-session.png)

2. 按照提示输入用户名和密码，按 **Enter**，登录云服务器。

   ![](/compute/vm/manual/_images/putty-login.png)

### 通过 SSH 密钥连接
>**注意**
>
>相对于用户名密码方式，密钥方式拥有更强的安全性，也可以很大程度阻止暴力破解的发生。
>
>目前常用的密钥都是非对称性的加密方式，云服务器内置公钥，而用户则拥有私钥。由于采用非对称加密，入侵者试图通过公钥去破解私钥难度会远远超出密码的破解。

#### 步骤一：准备密钥

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入域名列表页。

3. 点击**SSH 密钥**，进入 SSH 密钥页面。

4. 点击**创建**，创建 SSH 密钥。

   > **说明**
   >
   > 您也可以使用自己原有的密钥。

   <img src="../../_images/creat-sshkey.png" style="zoom:33%;" />

#### 步骤二：加载 SSH 密钥

- 创建云服务器时选择密钥。

  <img src="../../_images/creat-instance-key1.png" style="zoom:40%;" />

- 给现有云服务器加载密钥，右键点击云服务器 ID，选择**SSH 密钥** > **加载**。

  <img src="../../../_images/add-instance-key.png" style="zoom:33%;" />

#### 步骤三：配置公网 IP 和防火墙

在连接云服务器之前，请确保您的云服务器已经绑定了公网 IP，并放行[防火墙 TCP 22 端口](/security/security_group/manual/sg_setting/)。

#### 步骤四：

如下**以 PuTTY 和 PuTTYgen 工具为例**进行说明。

1. 使用 PuTTYgen 工具将将密钥转换为正确的格式。

   私钥转换为 PuTTY 支持的格式 ( .ppk ) ，点击 **Load** 加载您的私钥。

   ![](/compute/vm/manual/_images/putty-key-transmit.png)

2. 使用 PuTTY 工具登录云服务器。

   1. 在 PuTTY 的配置页面 `Connection` 的 `Auth` 选择您的私钥。

      ![](/compute/vm/manual/_images/putty-ssh.png)

   2. 在 `Session` 页面输入 IP 地址，点击 Open。

      ![](/compute/vm/manual/_images/putty-session.png)

## Windows 云服务器
从安全考虑， 青云QingCloud 上的 Windows 云服务器默认关闭了远程登录， 您首先需要通过浏览器 Web 方式登录到云服务器，并开启远程登录功能。

### 方式一：Windows Server  开启远程登录

1. 浏览器打开 VNC，连接 Windows Server。

2. 在 Web 登录页面，点击左上角 `Ctrl-Alt-Del` ，然后输入密码，按 Enter 登录到云服务器。

   ![](/compute/vm/manual/_images/window-web-signin.png)

3. 同意内部网络共享。

   登录后会弹出网络共享的界面，点击`是`，允许 VPC 内部的网络。

   <img src="../../../_images/window-web-share.png" style="zoom:80%;" />

4. 打开系统属性。

5. 在云服务器中，点击下方**文件管理器**，依次点击 `此电脑` > `计算机` > `系统属性`。

   <img src="../../../_images/windows-system-conf.jpg" style="zoom:80%;" />

6. 允许远程桌面连接。

   点击 `远程设置` ，在远程桌面处选择`允许远程桌面连接`。

   <img src="../../../_images/windows-connect-set.png" style="zoom:80%;" />

### 方式二：Windows 远程桌面连接

1. 配置公网 IP 和防火墙。

   在启动远程桌面连接之前，请给您的云服务器绑定公网 IP ，防火墙开启上下行的 `TCP` `3389` 端口，并`应用修改`。

   ![](/compute/vm/manual/_images/fw-tcp-3389.png)

2. 本地电脑启动远程桌面，输入用户信息。

   您需要通过 Windows 系统自带的`远程桌面连接`连接 Windows Server ，然后输入用户名密码即可。

   > 注意
   >
   > 如果您已经尝试采用上述的步骤，仍然无法连接至您的云服务器。建议您提交工单，青云QingCloud 技术支持工程师会尽快帮您解决问题。

   ![](/compute/vm/manual/_images/windows-connect-1.png)
