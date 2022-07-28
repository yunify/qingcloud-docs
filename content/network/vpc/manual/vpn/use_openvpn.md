---
title: "使用 OpenVPN"
keyword: VPC, VPN, OpenVPN
description: 介绍如何启用及配置 OpenVPN。
draft: false
weight: 10
---

本文为您介绍 Linux、Mac、Windows 客户端如何通过 OpenVPN 连接到 VPC 私有网络。

## 前提条件

- 客户端的私网网段与 VPC 的私网网段没有重叠。

  > **说明**
  >
  > 如果存在地址冲突，您可以将私有网络与 VPC 网络断开，再重新连接至 VPC 网络，并重新指定一个网络地址给您的私有网络。

- 客户端能够访问互联网。

## 启用 PPTP 服务

1. 登录管理控制台，选择**产品与服务** > **网络服务** > **VPC 网络**，进入 VPC 列表页面。

2. 找到您的 VPC 网络，点击 VPC 网络名称，进入详情页。

3. 切换至**管理配置**页签，然后在左侧点击 **VPN 服务**。

   <img src="/network/vpc/_images/vpn_service.png" style="zoom:50%;" />

4. 点击 **OpenVPN** 后面的**打开**，弹出**打开 OpenVPN 服务**对话框。

   <img src="/network/vpc/_images/webconsole_open_vpn.png" alt="VPN参数配置" style="zoom:50%;" />

5. 配置 OpenVPN 参数，点击**提交**。

   | 参数     | 说明                                                         |
   | -------- | ------------------------------------------------------------ |
   | 端口     | 服务运行端口。<br/>取值范围在 1~65535 之间，默认 1194。      |
   | 协议     | VPN 连接使用的协议。<br/>支持 UDP（默认） 及 TCP。           |
   | 验证方式 | 客户端连接认证方式。<br/>支持以下三种：<ul><li>证书</li><li>用户名/密码</li><li>证书+用户名/密码</li></ul>推荐使用“证书”或“证书+用户名/密码”认证，以获得更高的安全性。若使用包含“用户名/密码”的验证方式，还需要添加对应的可授权账户列表。 |
   | 网络地址 | VPN 网络地址。<div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br/> VPN 网络地址不能跟您的本地网络存在冲突。</div> |
   | 附加配置 | 推送网络配置到客户端。<br/>例如配置 :`push "192.168.10.0  255.255.255.0"`，当客户端向 VPN 服务器请求建立连接成功后，客户端上将添加以上推送的路由配置。 |

6. 可选：如果您需要使用 `用户名/密码`的验证方式，则点击**添加账户**，配置账户信息并提交。

   - 账户：用户名中不能包含特殊字符, 只能包含大小写字母或者数字, 或者[-_.]
   - 密码：密码至少 8 位，并包括大小写字母及数字。
   - IP 地址：为用户分配 IP 地址。可选自动分配或为账户指定 /30 网段内的有效 IP 地址。

7. 配置完成后，点击**应用修改**， 更新 VPC 配置。

8. 开启 OpenVPN 服务后，需要前往 VPC 网络使用的安全组规则中放行 OpenVPN 服务器的运行端口。

   例如：本文中配置的协议为`UDP`，端口为 `1194`，则需要放行 UDP 下行 1194 端口。
   
   <img src="/network/vpc/_images/openvpn_sg_rule.png" style="zoom:50%;" />

## 配置 OpenVPN 客户端

本文主要以“证书”验证方式为例进行客户端配置介绍，若您使用了“用户名/密码”的验证方式，请参见[用户名/密码验证](/network/vpc/manual/vpn/use_openvpn/#用户名密码验证)进行配置。

启用 OpenVPN 服务后，将出现**下载证书**的按钮，如下图所示。

<img src="/network/vpc/_images/openvpn_config_done.png" style="zoom:50%;" />

点击**下载证书**，即可获取到文件名为 `<vpc_id>-certs.zip` 的 zip 包， 里面有配置 OpenVPN 客户端的必备的证书密钥文件：

- <vpc_id>.crt：SSL 客户端证书
- <vpc_id>.key： SSL 客户端私钥
- <vpc_id>.takey：OpenVPN TLS Auth 密钥
- yunify-ca.crt：云平台 CA 根证书

除以上四个文件， zip 包中还包含了客户端配置文件样例，可作为参考：

- <vpc_id>.ovpn：Windows/Mac  配置文件
- <vpc_id>.conf：Linux 配置文件

下文将详细介绍不同操作系统的客户端如何配置。

### Windows 客户端

1. 点击**下载证书 (Windows)**，获取到文件名为 `<vpc_id>-certs.zip` 的 zip 包，然后解压。

2. 下载并安装 [OpenVPN客户端（Windows版本）](https://openvpn.net/vpn-client/)。

   >**说明**
   >
   >- 推荐使用 OpenVPN 官方客户端2.3.6和以上版本。
   >
   >- 按照默认选项安装即可。如非必要，请勿自主勾选选项。缺省情况下，OpenVPN 将被安装到 `C:\Program Files\OpenVPN` 目录中。

3. 将上述步骤1中下载的 zip 包中的所有文件拷贝到 `C:\Program Files\OpenVPN\config` 目录中。

4. 打开配置样例文件“rtr-xxxxxxxx.ovpn”，修改并保存配置。

   以下为配置示例：

   > **说明**
   >
   > 请将配置文件中的`<xxx>` 部分替换成您的配置：
   >
   > - 协议、端口、证书文件、密钥文件需要与您的 OpenVPN 配置及下载的证书密钥文件名一致。
   >
   > - `<your-router-eip>`需要替换为 VPC 网络的公网 IP 地址。

   ```
   client
   dev tun
   proto <udp>
   remote <your-router-eip> <1194>
   resolv-retry infinite
   nobind
   persist-key
   persist-tun
   ca yunify-ca.crt
   cert <rtr-xxxxxxxx.crt>
   key <rtr-xxxxxxxx.key>
   tls-auth <rtr-xxxxxxxx.takey> 1
   cipher AES-256-CBC
   comp-lzo
   mssfix 1400
   ```

5. 启动 OpenVPN 客户端，在任务栏右下角点击 OpenVPN 图标 ，然后点击**连接**建立 VPN 连接。

   <img src="/network/vpc/_images/win_oneopenvpn_connect.png" style="zoom:50%;" />

### Linux 客户端

以下操作以 Ubuntu 系统为例进行描述，其他 Linux 分发版操作方法类似。

1. 点击**下载证书 (Linux)**，获取到文件名为 `<vpc_id>-certs.zip` 的 zip 包，然后解压。

1. 安装 OpenVPN。

   ```
   sudo apt-get install openvpn
   ```

2. 将上述步骤1下载的 zip 包中的配置文件放入 `/etc/openvpn` 目录中。

4. 打开配置样例文件“rtr-xxxxxxxx.conf”，修改配置。

   以下为配置示例：

   > **说明**
   >
   > 请将配置文件中的`<xxx>` 部分替换成您的配置：
   >
   > - 协议、端口、证书文件、密钥文件需要与您的 OpenVPN 配置及下载的证书密钥文件名一致。
   > - `<your-router-eip>`需要替换为 VPC 网络的公网 IP 地址。
   > - `<user` ` 及 <group>` 定义运行 openvpn 的用户及用户组，请分别查询您本地系统的 `/etc/password` 和 `/etc/group` 文件。

   ```
   client
   dev tun
   proto <udp>
   remote <your-router-eip> 1194
   resolv-retry infinite
   nobind
   user <nobody>
   group <nogroup>
   persist-key
   persist-tun
   ca yunify-ca.crt
   cert <rtr-xxxxxxxx.crt>
   key <rtr-xxxxxxxx.key>
   tls-auth <rtr-xxxxxxxx.takey> 1
   cipher AES-256-CBC
   comp-lzo
   mssfix 1400
   ```

5. 执行以下命令连接 VPN。

   ```
   sudo service openvpn start
   ```

### Mac 客户端（Tunnelblick）

1. 点击**下载证书 (Mac)**，获取到文件名为 `<vpc_id>-certs.zip` 的 zip 包，然后解压。

1. 下载并安装 [Tunnelblick](https://tunnelblick.net/downloads.html)。

3. 将上述步骤1下载的 zip 包中的配置文件解压到同一目录中。打开后缀为 .ovpn 的配置文件，根据需要修改配置。

   配置样例如下：

   > **说明**
   >
   > 请将配置文件中的`<xxx>` 部分替换成您的配置：
   >
   > - 协议、端口、证书文件、密钥文件需要与您的 OpenVPN 配置及下载的证书密钥文件名一致。
   > - `<your-router-eip>`需要替换为 VPC 网络的公网 IP 地址。
   > - `<user` ` 及 <group>` 定义运行 openvpn 的用户及用户组，请分别查询您本地系统的 `/etc/password` 和 `/etc/group` 文件。

   ```
   client
   dev tun
   proto <udp>
   remote <your-router-eip> 1194
   resolv-retry infinite
   nobind
   user <nobody>
   group <nogroup>
   persist-key
   persist-tun
   ca yunify-ca.crt
   cert <rtr-xxxxxxxx.crt>
   key <rtr-xxxxxxxx.key>
   tls-auth <rtr-xxxxxxxx.takey.key> 1
   cipher AES-256-CBC
   comp-lzo
   mssfix 1400
   ```

4. 在 Tunnelblick 面板中添加 .ovpn 配置文件，或双击 .ovpn 文件便可将配置添加到 Tunnelblick，然后便可以发起 VPN连接。

   <img src="/network/vpc/_images/tunnelblick_connect.png" style="zoom:50%;" />

### Mac 客户端（OpenVPN）

1. 点击**下载证书 (Mac)**，获取到文件名为 `<vpc_id>-certs.zip` 的 zip 包，然后解压。

2. 执行以下命令安装 OpenVPN 客户端。

   ```
   brew install openvpn
   ```

3. 删除 OpenVPN 默认配置文件。

   ```
   rm /usr/local/etc/openvpn/*
   ```

4. 将步骤1中解压好的所有配置文件拷贝到配置目录。

   ```
   cp <rtr-xxx-certs>/* /usr/local/etc/openvpn/
   ```

   > **说明**
   >
   > 请将`<rtr-xxx-certs>`替换为您的配置文件解压目录。

5. 打开后缀为 .ovpn 的配置文件，修改为您的实际配置并保存。

   配置样例如下：

   > **说明**
   >
   > 请将配置文件中的`<xxx>` 部分替换成您的配置：
   >
   > - 协议、端口、证书文件、密钥文件需要与您的 OpenVPN 配置及下载的证书密钥文件名一致。
   > - `<your-router-eip>`需要替换为 VPC 网络的公网 IP 地址。
   > - `<user` ` 及 <group>` 定义运行 openvpn 的用户及用户组，请分别查询您本地系统的 `/etc/password` 和 `/etc/group` 文件。

   ```
   client
   dev tun
   proto <udp>
   remote <your-router-eip> 1194
   resolv-retry infinite
   nobind
   user <nobody>
   group <nogroup>
   persist-key
   persist-tun
   ca yunify-ca.crt
   cert <rtr-xxxxxxxx.crt>
   key <rtr-xxxxxxxx.key>
   tls-auth <rtr-xxxxxxxx.takey.key> 1
   cipher AES-256-CBC
   comp-lzo
   mssfix 1400
   ```

5. 执行以下命令发起 VPN 连接。

   ```
   sudo /usr/local/opt/openvpn/sbin/openvpn --config /usr/local/etc/openvpn/<rtr-xxxxxxxx>.ovpn
   ```

### 用户名/密码验证

如果您的 OpenVPN 开启了 “用户名/密码” 验证方式，你需要在连接的时候输入用户名和密码。或者您也可以通过配置文件来实现无须手动输入密码，操作方式如下：

1. 在客户端的配置文件中添加 `auth-user-pass password.txt` 其中 “password.txt” 是用于保存用户名/密码信息的文件。

   > **说明**
   >
   > 如果是 Mac 系统，不需要 password.txt 文件，配置文件中 auth-user-pass 后面也不需要写文件名，只保留 “auth-user-pass” 。连接 VPN 时会提示输入账号密码，并支持保存到 Mac 系统的 Keychain 中。

   样例如下：

   ```
   client
   dev tun
   proto <udp>
   remote <your-router-eip> 1194
   resolv-retry infinite
   nobind
   user nobody
   group nogroup
   persist-key
   persist-tun
   ca yunify-ca.crt
   cert <rtr-xxxxxxxx.crt>
   key <rtr-xxxxxxxx.key>
   tls-auth <rtr-xxxxxxxx.takey.key> 1
   auth-user-pass password.txt
   cipher AES-256-CBC
   comp-lzo
   mssfix 1400
   ```

2. 在 “password.txt” 文件中，添加用户名及密码。

   password.txt 文件样例如下，用户名和密码分为两行存放。

   ```
   <user_name>
   <password>
   ```

   

