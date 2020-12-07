---
title: "连接实例"
description: test
draft: false
---


在连接实例前，请确保您的主机已经绑定了弹性公网 IP 或者采用NAT转发了相应的端口，并且您的`防火墙`放行了相应端口。
## 浏览器web连接
### 1. 登录 QingCloud 控制台

然后选择您主机所在的 Region 或者可用区，点击计算-主机，进入实例列表。

### 2. 点击图标，打开VNC

每个实例 ID （名称）右侧有个显示屏的图标，点击图标将打开一个远程连接 ( VNC ) 的会话

![](/compute/vm/manual/_images/web-signin.png)

### 3. 输入用户信息

依次输入用户名和密码即可

![](/compute/vm/manual/_images/web-vnc.png)

如果主机不接受您的密码，您可以先关闭主机，然后[修改主机密码](https://docs.qingcloud.com/product/faq/#id7)。

## Linux主机
如果您使用的是 Windows 操作系统，除了通过 QingCloud 控制台以外，您也可以通过软件连接至 Linux 主机，常见的软件有[PuTTY](https://www.putty.org/) ， [Xshell](https://www.netsarang.com/zh/xshell/)。

请注意，青云并不知道您的软件来源和用途，也不对其产生的任何的问题和纠纷负责。

### 通过用户名密码连接
>注解
相较于密钥，通过用户名和密码连接更加的简单易用

#### 1. 配置好弹性 IP 和防火墙

首先在连接主机之前，请确保您的主机已经绑定了弹性公网 IP，[防火墙放行](https://docs.qingcloud.com/product/security/security_group) TCP 22 端口。

![](/compute/vm/manual/_images/fw-ssh-22.png)

#### 2. 打开软件，输入 IP 地址

如果您用的是 Putty ，在 `Session` 页面输入 IP 地址，点击 Open

![](/compute/vm/manual/_images/putty-session.png)

#### 3. 输入用户信息

然后按照提示输入用户名和密码

![](/compute/vm/manual/_images/putty-login.png)

### 通过 SSH 密钥连接
>注解
相对于用户名密码方式，密钥方式拥有更强的安全性，也可以很大程度阻止暴力破解的发生。目前常用的密钥都是非对称性的加密方式，主机内置公钥，而用户则拥有私钥。由于采用非对称加密，入侵者试图通过公钥去破解私钥难度会远远超出密码的破解。

#### 1. 准备密钥

首先，需要在 QingCloud 控制台创建密钥，您也可以使用自己原有的密钥。

![](/compute/vm/manual/_images/creat-sshkey.png)

#### 2. 主机加载上密钥

您可以在创建主机时选择密钥

![](/compute/vm/manual/_images/creat-instance-key.png)

也可以给现有主机加载密钥,选择主机右键 - ssh 密钥 - 加载

![](/compute/vm/manual/_images/add-instance-key.png)

#### 3. 配置好弹性 IP 和防火墙

在连接主机之前，请确保您的主机已经绑定了弹性公网 IP，[防火墙放行](https://docs.qingcloud.com/product/security/security_group) TCP 22 端口。

#### 4. 将密钥转换为正确的格式

如果您用的是 PuTTY ，您需要用 PuTTYgen 将私钥转换为 PuTTY 支持的格式 ( .ppk ) ，点击 Load 加载您的私钥

![](/compute/vm/manual/_images/putty-key-transmit.png)

#### 5. 打开软件，选择密钥

然后在 PuTTY 的配置页面 `Connection` 的 `Auth` 选择您的私钥

![](/compute/vm/manual/_images/putty-ssh.png)

#### 6. 输入 IP 地址

最后，在 `Session` 页面输入 IP 地址，点击 Open

![](/compute/vm/manual/_images/putty-session.png)

## Windows主机
从安全考虑， QingCloud 上的 Windows 主机默认关闭了远程登录， 您首先需要通过浏览器 Web 方式登录到主机，并开启远程登录功能

### 第一部分  Windows Server  开启远程登录

#### 1. 浏览器打开VNC，连接 Windows Server

在 Web 登录页面，点击左上角 `Ctrl-Alt-Del` ，然后输入密码

![](/compute/vm/manual/_images/window-web-signin.png)

#### 2. 同意内部网络共享

登录后会弹出网络共享的界面，点击`是`，允许VPC内部的网络

![](/compute/vm/manual/_images/window-web-share.png)

#### 3. 打开系统属性

在主机中，点击下方文件管理器，依次点击 `此电脑` - `计算机` - `系统属性`

![](/compute/vm/manual/_images/windows-system-conf.jpg)

#### 4. 允许远程桌面连接

然后，点击 `远程设置` ，在远程桌面处选择`允许远程桌面连接`

![](/compute/vm/manual/_images/windows-connect-set.png)

### 第二部分  Windows 远程桌面连接

#### 1. 配置好弹性 IP 和防火墙

在启动远程桌面连接之前，请给您的主机绑定弹性 IP ，防火墙开启上下行的 `TCP` `3389` 端口，并`应用修改`

![](/compute/vm/manual/_images/fw-tcp-3389.png)

#### 2. 本地电脑启动远程桌面，输入用户信息

您需要通过 Windows 系统自带的`远程桌面连接`连接 Windows Server ，然后输入用户名密码即可

![](/compute/vm/manual/_images/windows-connect-1.png)


>注解
如果您已经尝试采用上述的步骤，仍然无法连接至您的主机。建议您提交工单，我们的工程师会尽快帮您解决问题。
