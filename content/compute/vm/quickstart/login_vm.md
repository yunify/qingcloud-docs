---
title: "步骤二：登录云服务器"
description: 本章节介绍如何登录云服务器
draft: false
weight: 20
keyword: 云计算, 青云, QingCloud, 云服务器，创建云服务器
---

本章节介绍如何快速登录云服务器。

## 前提条件

- 已获取管理控制台的账号和密码。
- 已创建云服务器。

## 方法一：Web 终端登录

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

## 方法二：SSH 登录（Linux）

如果创建云服务器时，设置为 SSH 密钥方式登录，那么在使用 SSH 登录之前，需要先打开防火墙的 TCP 22 端口。 

### 步骤一：创建并绑定 SSH 密钥

若已创建并绑定 SSH 密钥，可跳过此步骤。

若您创建云服务器时，没有绑定 SSH 密钥，请参照如下步骤，为云服务器创建并绑定 SSH 密钥。

1. 在左侧导航栏中，选择**计算 > SSH 密钥** ， 进入 **SSH 密钥**页面。

   ![](../../_images/vm_ssh_list.png)

2. 点击**创建** ，弹出**创建 SSH 密钥**窗口。

   <img src="../../_images/vm_ssh_win.png" style="zoom:50%;" />

3. 输入 SSH 密钥的名称，选择创建的方式，并选择加密方法。

4. 点击**提交**，弹出**下载 SSH 密钥的私钥**窗口。

   系统会立刻为您创建一对密钥对，您可以点击下载，下载私钥。私钥只能下载一次，请妥善保管。

5. 在 SSH 密钥列表页面，勾选已创建的 SSH 密钥，点击**加载到云服务器**。

   ![](../../_images/vm_ssh_bind.png)

6.  在弹出的选择云服务器窗口中，选择创建的云服务器，点击**提交**，完成 SSH 密钥绑定操作。 

   <img src="../../_images/vm_ssh_bind_win.png" style="zoom:50%;" />

7. 在云服务器详细信息页面的**配置**区域，可查看已绑定的 SSH 密钥。

   ![](../../_images/vm_ssh_bind_site.png)

### 步骤二：开放 TCP 22 端口

请确认 TCP 22 端口已打开，若未打开，请参照如下步骤打开 TCP 22 端口。

1. 进入云服务器列表页面。

2. 点击云服务器 ID，进入云服务器详情页面。

3. 在“绑定资源”区域，可以看到该云服务器正在使用的安全组。

   ![](../../_images/vm_security_group.png)

2. 点击**安全组**，进入安全组配置页面。

3. 点击**添加规则**，新建一个下行规则。

   ![](../../_images/vm_security_rule.png)

   需要关注如下参数。

   | 参数     | 取值     |
   | -------- | -------- |
   | 方向     | 下行规则 |
   | 行为     | 接受     |
   | 协议     | TCP      |
   | 起始端口 | 22       |

3. 点击**提交**，完成安全组规则的创建操作。
4. 点击**应用修改**，使配置生效。

### 步骤三：登录云服务器

#### 本地是 Linux 或 Mac 

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

#### 本地是 Windows

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

