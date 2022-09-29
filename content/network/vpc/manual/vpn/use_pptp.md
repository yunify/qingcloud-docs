---
title: "使用 PPTP"
keyword: VPC, VPN, PPTP
description: 介绍如何启用及配置 PPTP。
draft: false
weight: 15
---

本文为您介绍 Windows 及 Linux 客户端如何通过 PPTP 连接到 VPC 私有网络。

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

4. 点击 **PPTP** 后面的**打开**，弹出**打开 PPTP 服务**对话框。

   <img src="/network/vpc/_images/webconsole_open_pptp.png" style="zoom:50%;" />

5. 配置服务参数，点击**提交**。

   | 参数       | 说明                                                         |
   | ---------- | ------------------------------------------------------------ |
   | 账户       | VPN 连接的认证用户名。<br/>用户名中不能包含特殊字符, 只能包含大小写字母或者数字, 或者[-_.] |
   | 密码       | VPN 连接的认证密码。<br/>密码至少 8 位，并包括大小写字母及数字。 |
   | 最大连接数 | 最多可同时连接的客户端个数。<br/>取值范围在 1~253 之间。     |
   | 网络地址   | VPN 网络地址。<div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br/> VPN 网络地址不能跟您的本地网络存在冲突。</div> |
   
7. 可选：如果您需要添加多个用户，则点击**添加账户**继续添加。

7. 配置完成后，点击**应用修改**， 更新 VPC 配置。

8. 开启 PPTP 服务后，需要前往 VPC 网络使用的安全组规则中设置允许 PPTP 服务器运行端口。（TCP 下行 1723 端口）通过，同时还需要允许 GRE 协议。

   <img src="/network/vpc/_images/pptp_sg_rule.png" style="zoom:50%;" />

## 配置 PPTP 客户端

### Windows 客户端

以下操作以 Windows 2019 为例进行介绍，其他 Windows 版本操作类似，可进行参考。

#### 创建连接

1. 右下角点击网络图标，选择**网络和 Internet 设置**，进入**网络和 Internet** 设置页面。

2. 在左侧点击**VPN** > **添加 VPN 连接**。

   <img src="/network/vpc/_images/win_pptp_1.png" style="zoom:85%;" />

3. 配置连接参数。

   <img src="/network/vpc/_images/win_pptp_2.png"  />

   - VPN 供应商：选择 **Windows （内置）**。
   - 连接名称：自定义。
   - 服务器名称或地址：输入 VPC 网络的公网 IP。
   - VPN 类型：选择**点对点隧道协议(PPTP)**。
   - 登录信息的类型：选择**用户名和密码**。
   - 用户名（可选）：在 PPTP 服务中创建的用户名。若不填写，则每次连接时进行输入。
   - 密码（可选）：在 PPTP 服务中设置的用户名。若不填写，则每次连接时进行输入。
   - 记住我的登录信息：勾选后，记住所设置的用户名及密码，无须每次连接进行输入。

4. 点击**保存**。

5. 点击 VPN 连接名称，然后点击**连接**。

   <img src="/network/vpc/_images/win_pptp_3.png" style="zoom:85%;"  />

6. VPN 网络连接已经创建后，需要再次连接时，您只需要点击桌面右下角的网络连接处，选择相应的网络连接，然后点击**连接**即可。

   <img src="/network/vpc/_images/win_pptp_4.png"  />

#### 取消 VPN 作为默认网关

连接 VPN 之后，默认情况下您本地默认网关会指向 VPN 服务器，即所有流量都会通过 VPN 服务器。 如果您不需要，可按如下步骤禁用：

1. 右下角点击网络图标，选择**网络和 Internet 设置**，进入**网络和 Internet** 设置页面。

2. 在 VPN 设置页面，点击**更改适配器选项**。

3. 右键点击对应的 VPN 连接，选择**属性**。

4. 选择**网络**页签，双击 **Internet 协议版本 4（TCP/IPv4）**。

5. 点击**高级**，取消勾选**在远程网络上使用默认网关**，点击**确定**。

   <img src="/network/vpc/_images/win_pptp_5.png"  />

6. 断开并重新连接 VPN。

#### 配置路由

取消**在远程网络上使用默认网关**后，你需要手动配置路由规则才能访问私有网络里的云服务器，具体操作如下：

1. 点击**开始**菜单，找到**所有程序** > **附件** > **命令提示符**，右键**以管理员身份运行**，进入命令行界面。

2. 输入命令`ipconfig`，查看当前 VPN 的地址（10.255开头）。

   ```
   ipconfig
   ```

3. 添加路由规则 。

   假设是 VPN 的地址为“10.255.1.2”，您要访问的私有网络地址是“192.168.1.0/24”，则添加规则如下。

   ```
   route add 192.168.1.0 mask 255.255.255.0 10.255.1.2
   ```

4. 测试是否可以正常访问私有网络 “192.168.1.0/24”。

   假设某云服务期私网 IP 为“192.168.1.2”，则输入如下命令。

   ```
   ping 192.168.1.2
   ```



### Linux 客户端

以下操作以 Ubuntu 系统为例进行描述，其他 Linux 分发版操作方法类似。

1. 安装 PPTP 客户端。

   ```
   sudo apt-get install pptp-linux
   ```

2. 修改 `/etc/ppp/chap-secrets` 文件，配置验证所需的用户名和密码，字符串之间用 Tab 键分隔。

   ```
   <user_name>	pptpd	<password>	*
   ```

   > **说明**
   >
   > 请将 ``<user_name> `` 及`<user_name>`替换成您的连接用户名及密码，例如: ``guest   pptpd   passw0rd   *``。

3. 新建 ``/etc/ppp/peers/<tunnel>`` 文件，并配置以下内容。

   > **说明**
   >
   > 请将`<xxx>` 内容替换成您的配置：
   >
   > - `<tunnel>` 是您定义的隧道名称， 例如`vpn`。
   >
   > - ``<vpn_server_ip>`` ：VPC  网络的公网 IP。
   > - ``<user_name>`` ： VPN 连接的用户名。

   ```
   pty "pptp <vpn_server_ip> --nolaunchpppd --nobuffer --loglevel 0"
   name <user_name>
   remotename pptpd
   require-mppe-128
   file /etc/ppp/options.pptp
   ipparam <tunnel>
   ```

4. 启动 VPN 客户端。

   ```
    pon <tunnel> persist
   ```

5. 配置路由规则。

   - 如果您希望通过 VPN 来访问 VPC 私有网络里的机器，你还需要手动配置路由规则。

      假设您需要访问的私有网络的网络地址为 “192.168.10.0/24”，则相应的路由配置为：

     ```
     ip route add 192.168.10.0/24 dev ppp0
     ```

     > **说明**
     >
     > `ppp0`为客户端连接的设备名。如果您只有一个 VPN 客户端正在运行，则默认设备一般为 `ppp0`；
     > 如果不是，您可以通过 `ifconfig` 命令来进行查看。

   - 如果您希望在每次启动客户端之后能自动配置路由规则，则可以将指令写成脚本，放置在 /etc/ppp/ip-up.d/ 下面。 例如，创建脚本文件 /etc/ppp/ip-up.d/add-route，内容如下:

     ```
     #!/bin/sh
     ip route add 192.168.10.0/24 dev $1
     ```

6. 如果你想断开 VPN 连接，执行如下命令。

   ```
   poff <tunnel>
   ```

   > **说明**
   >
   > 请将 ``<tunnel>`` 替换成你定义的隧道名称。

