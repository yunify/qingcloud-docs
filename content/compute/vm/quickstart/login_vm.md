---
title: "步骤三：登录云服务器"
description: 本章节介绍如何登录云服务器
draft: false
weight: 30
keyword: 云计算, 青云, QingCloud, 云服务器，登录云服务器
---

本章节介绍如何快速登录云服务器。

## 登录方式

您可以根据云服务器的操作系统选择登录云服务器的方式。

| 登录方式                        | 满足条件                                                     |
| ------------------------------- | ------------------------------------------------------------ |
| Web 终端登录（Windows & Linux） | 登录用户名和密码                                             |
| SSH 登录（Linux）               | <ul><li>登录用户名</li><li>云服务器<a href="/compute/ssh/manual/ssh/">已绑定 SSH 密钥</a></li><li>云服务器<a href="/security/security_group/manual/sg_setting/">已开放 TCP 22 端口</a></li><li>云服务器<a href="/compute/vm/quickstart/app_public_ip/">已绑定公网 IP 地址</a></li></ul> |

## Web 终端登录

1. 登录 QingCloud 管理控制台。

2. 选择**产品与服务** > **计算** > **云服务器**，进入云服务器列表页面。

   ![](../../_images/vm_server_list.png)

3. 点击 **Web 终端**，弹出 **Web 终端** 窗口。  

   ![](../../_images/vm_web_win.png)

3. 在 Web 终端窗口中，输入您创建云服务器时设置的账号和密码，按 Enter，即可登录到云服务器。  

   - **Windows**

     <img src="../../_images/vm_web_win_win.png" style="zoom:50%;" />

   - **Linux**

     <img src="../../_images/vm_web_win_linux.png" style="zoom:50%;" />

## SSH 登录（Linux）

如果创建云服务器时，设置为 SSH 密钥方式登录，那么在使用 SSH 登录之前，需要先打开安全组规则的 TCP 22 端口。 

### 本地是 Linux 或 Mac 

通过本地 SSH 密钥（如：kp-1234abcd ）直接使用远程命令 SSH 安全地登录云服务器。

```
# chmod 600 /path/to/kp-1234abcd
# ssh -i /path/to/kp-1234abcd root@ip_address
```

例如：SSH 密钥`kp-1234abcd`，连接云服务器`172.31.45.132`。

```
# chmod 600 /path/to/kp-1234abcd
# ssh -i /path/to/kp-1234abcd root@172.31.45.132
```

### 本地是 Windows

使用 Xshell 5 及以上版本登录。

例如：在 Windows 下使用 SSH 密钥`kp-1234abcd`，云服务器IP地址 ` 172.31.45.132`。

1. 打开 Xshell。

2. 创建一个新会话，协议是 SSH，输入云服务器的 IP 地址。

   <img src="../../_images/vm_ssh_xshell_login.png" style="zoom:40%;" />

3. 点击**用户身份验证**，进入**用户身份验证**页面。

   <img src="../../_images/vm_ssh_xshell_auth.png" style="zoom:40%;" />

   参数说明，如下表所示。

   | 参数        | 参数说明                                                     |
   | ----------- | ------------------------------------------------------------ |
   | 方法(M)     | 选择“Public Key”。                                           |
   | 用户名(U)   | 输入“root”。                                                 |
   | 用户密钥(K) | 点击“浏览(B)”，导入绑定云服务器的 SSH 密钥公钥文件对应的私钥文件。 |

4. 点击**连接**，即可连接到云服务器。

