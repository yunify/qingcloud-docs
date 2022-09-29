---
title: "使用 L2TP"
keyword: VPC, VPN, PPTP
description: 介绍如何启用及配置 PPTP。
draft: false
weight: 20
---

本文为您介绍 Linux 客户端如何通过 L2TP 连接到 VPC 私有网络。

## 前提条件

- 客户端的私网网段与 VPC 的私网网段没有重叠。

  > **说明**
  >
  > 如果存在地址冲突，您可以将私有网络与 VPC 网络断开，再重新连接至 VPC 网络，并重新指定一个网络地址给您的私有网络。

- 客户端能够访问互联网。

## 启用 L2TP 服务

1. 登录管理控制台，选择**产品与服务** > **网络服务** > **VPC 网络**，进入 VPC 列表页面。

2. 找到您的 VPC 网络，点击 VPC 网络名称，进入详情页。

3. 切换至**管理配置**页签，然后在左侧点击 **VPN 服务**。

   <img src="/network/vpc/_images/vpn_service.png" style="zoom:50%;" />

4. 点击 **L2TP** 后面的**打开**，弹出**打开 PPTP 服务**对话框。

   <img src="/network/vpc/_images/webconsole_open_l2tp.png" style="zoom:50%;" />

5. 配置服务参数，点击**提交**。

   | 参数     | 说明                                                         |
   | -------- | ------------------------------------------------------------ |
   | 账户     | VPN 连接的认证用户名。<br/>用户名中不能包含特殊字符, 只能包含大小写字母或者数字, 或者[-_.] |
   | 密码     | VPN 连接的认证密码。<br/>密码至少 8 位，并包括大小写字母及数字。 |
   | PSK      | 预共享密钥，用于验证 L2TP/IPSec 连接的 Unicode 字符串。<br/>输入任意字符串即可。后续可修改。 |
   | 网络地址 | VPN 网络地址。<div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br/> VPN 网络地址不能跟您的本地网络存在冲突。</div> |
   
7. 可选：如果您需要添加多个用户，则点击**添加账户**继续添加。

7. 配置完成后，点击**应用修改**， 更新 VPC 配置。

8. 开启 L2TP 服务后，需要前往 VPC 网络使用的安全组规则中放行 UDP 下行 500 和 4500 端口以及 ESP 协议，以确保 VPN 端口流量可以通过，否则从外网无法接入您的 VPN 服务。

   <img src="/network/vpc/_images/l2tp_sg_rule.png" style="zoom:90%;" />

## 配置 L2TP 客户端

### Linux 客户端

以下操作以 Ubuntu 系统为例进行描述，其他 Linux 分发版操作方法类似。

配置 L2TP 客户端分为 L2TP、IPsec 两个部分。如果您想使用 IPsec 加密，请务必先完成 IPsec 部分的配置。

**IPsec 配置**

1. 安装依赖包。

   ```
   sudo apt-get install openswan
   ```

2. 修改 ``/etc/ipsec.conf`` 配置。

   ```
   version 2.0
   config setup
       protostack=netkey
       nat_traversal=yes
       keep_alive=60
       virtual_private=
       oe=off
   
   conn %default
       rekey=yes
       authby=secret
       auto=start
       type=tunnel
       keyexchange=ike
       phase2=esp
       pfs=yes
       dpddelay=15
       dpdtimeout=60
       dpdaction=restart
   
   conn <l2tp_name>
       authby=secret
       type=transport
       pfs=no
       auto=start
       left=%defaultroute
       leftprotoport=17/1701
       right=<l2tp_server_ip>
       rightprotoport=17/1701
   ```

   > **说明**
   >
   > 请将配置文件中的 `<xxx>`替换成您的配置：
   >
   > - `<l2tp_server_ip>`：VPC 网络的公网 IP。
   > - `<l2tp_name> `：IPsec 连接名（自定义）。

3. 修改 ``/etc/ipsec.secrets`` 配置。

   ```
   %any <l2tp_server_ip>: PSK "<psk>"
   ```

   > **说明**
   >
   > 请将配置文件中的 ``<xxx>`` 替换成您的配置：
   >
   > - ``<l2tp_server_ip>`` ：VPC 网络的公网 IP。
   > - ``<psk> ``：您配置的预共享密钥。

4. 重启服务。

   ```
   sudo service ipsec restart
   ```


5. 检查连接是否正常建立。

   ```
   ipsec auto status
   ```

**L2TP 配置**

1. 安装依赖包。

   ```
   sudo apt-get install xl2tpd ppp
   ```

2. 修改 ``/etc/xl2tpd/xl2tpd.conf`` 配置。

   ```
   [lac <lac_name>]
   lns = <l2tp_server_ip>
   refuse chap = yes
   refuse pap = yes
   require authentication = yes
   length bit = yes
   pppoptfile = /etc/ppp/<l2tp_name>
   ```

   > **说明**
   >
   > 请将配置文件中的 ``<xxx>`` 换成您的配置：
   >
   > - ``<lac_name>`` ：lac 命名（自定义）。
   > - ``<l2tp_server_ip>`` ：VPC 网络的公网 IP。
   > - ``<l2tp_name>`` ：ppp 配置的文件名（自定义）。

3. 新建 ``/etc/ppp/<l2tp_name>`` 配置文件，配置如下内容。

   ```
   +chap
   lock
   refuse-eap
   require-chap
   require-mschap
   require-mschap-v2
   noauth
   noccp
   nodefaultroute
   proxyarp
   name "<user_name>"
   password "<password>"
   ```

   > **说明**
   >
   > 请将配置文件中的 ``<xxx>`` 部分替换成您的配置：
   >
   > - ``<user_name>`` ：VPN 连接用户名。
   >
   > - ``<password>`` ：VPN 连接密码。

4. 重启服务。

   ```
   sudo service xl2tpd restart
   ```

   

5. 建立连接。

   ```
   sudo echo "c <lac_name>" > /var/run/xl2tpd/l2tp-control
   ```

   > **说明**
   >
   > - 请将 ``<lac_name>`` 替换成您的实际命名。
   > - 关闭连接使用: ``sudo echo “d <lac_name>” > /var/run/xl2tpd/l2tp-control``。

6. 添加路由。

   ```
   sudo ip route add <ip_network> dev <link_name>
   ```

   

   > **说明**
   > 请将配置中的 ``<xxx>`` 替换成您的配置：
   >
   > - ``<ip_network>`` ：VPC 下的私有网络地址段。
   > - ``<link_name>`` ：ppp 连接的网卡接口名字，通常以 ppp 开头。

### iOS 客户端

以下操作以 iOS 15 版本为例介绍如何连接 VPN，其他版本操作方法类似。

1. 进入手机**设置**界面，选择**通用** > **VPN与设置管理**。

2. 点击 **VPN** > **添加 VPN 配置**，进入**添加配置**界面。

3. 配置连接参数。

   - 类型：选择 L2TP。
   - 描述：自定义 VPN 连接名称。
   - 服务器：VPN服务器。输入 VPC 网络公网 IP。
   - 帐户：VPC L2TP 服务中创建的用户。
   - RSA SecurID：保持默认不开启即可。
   - 密码：VPC L2TP 服务中设置的用户密码。
   - 密钥：VPC L2TP 服务中设置的 PSK。

4. 点击**完成**。此时 VPN 连接状态显示为`未连接`。

5. 点击控制按钮，进行连接。连接成功后，显示`已连接`。

   <img src="/network/vpc/_images/ios_l2tp.jpg" style="zoom:20%;">

