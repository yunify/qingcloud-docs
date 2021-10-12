---
title: "如何使用 SSH 密钥来访问云服务器？ "
description: Test description
draft: false
enableToc: false
weight: 110
---

您需要创建一个 SSH 密钥， 然后加载到你的云服务器上并下载私钥文件（例如 ``kp-1234abcd`` ），详情请参考 [SSH 密钥操作指南](/compute/ssh/manual/ssh)。

>**说明**
>在进行 SSH 连接之前，请确保在云服务器对应的防火墙下行规则中打开 TCP 22 号端口的访问。

**Linux下使用命令登录**

```
# chmod 600 /path/to/kp-1234abcd
# ssh -i /path/to/kp-1234abcd root@ip_address
```

**Windows 下使用 putty 登录**

很多 Windows 桌面用户都会使用著名的 PuTTY 作为 SSH 客户端来登录远程的 Linux 云服务器，但是 PuTTY 不支持 OpenSSH 的密钥格式，而是使用它自己的密钥格式。因此，PuTTY 提供了一个名为``puttygen``的密钥格式转换工具。

1. 首先下载 putty 和 puttygen：

[http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)

2. 转换密钥格式

启动 puttygen，点击 ``Conversions -> Import key``，选中您在青云中创建并下载的 SSH 密钥，文件名形如``kp-1234abcd``。然后点击 ``Save private key``，您将得到 PuTTY 格式的私钥，如kp-1234abcd.ppk

3. 配置登录

   1. 打开 putty。

   2. 点击 putty 左边导航的 connection -> data, auto-login username 处填入登录名：root
   3. 点击 putty 左边导航的 connection -> ssh -> auth, 最下面有 private key file for authantication 字样，点击旁边的 browse，选择之前生成的 kp-1234abcd.ppk 文件，确定。
   4. 点击 putty 左边导航的 session，host name 中填写云服务器的 公网IP 地址，例如1.2.3.4。
   5. 最后点击下面的 open 进行连接即可。

   如果想下次登录方便，可以点击 putty 左边导航的 session，在 save sessions 中填入名称并保存，将当前配置保存下来。

**Windows 下使用 SecureCRT 登录**

>注解
>推荐使用 SecureCRT 6.5 及以上版本，低版本会出现私钥无法导入的情况

1. 在青云控制台的**安全** > **SSH 密钥**里创建 SSH 密钥，将这个密钥加载到云服务器上并下载私钥文件，例如 kp-12345678；

2. 在 SecureCRT 上创建一个新连接，protocol 是 SSH2，hostname 是 公网IP 地址，username 为 root；

3. 右键选中这个 session，选择 Properties，在 **Connection** > **SSH2** 的 Authentication 面板里面，选中 PublicKey，点击右边的上箭头，将这个选项排到第一位；

4. 继续选中 PublicKey，点击右边的 Properties，选择 Use session public key setting，在下面的 Use identity or certificate file，导入下载的私钥文件 kp-12345678；

5. 连接即可。

较低版本的 SecureCRT 可能会遇到无法导入私钥的问题，因为低版本的 SecureCRT 会严格要求私钥需要和公钥共同存在，这种情况下，操作步骤如下：

1. 在青云控制台创建 SSH 密钥，将这个密钥加载到云服务器上并下载私钥文件，例如放置于 /path/to/kp-1234abcd ；

2. 在路径 /path/to/ 下创建新文件 kp-1234abcd.pub；

3. 在 SSH 密钥 kp-1234abcd 的详情页中找到公钥的字符串，并拷贝下来放入 kp-1234abcd.pub 文件中，并且在公钥内容前面加上加密方式，最终文件内容为：ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC90PM9PT........；

4. 在 SecureCRT 上创建一个新连接，protocol 是 SSH2，hostname 是公网 IP 地址，username 为 root；

5. 右键选中这个 session，选择 Properties，在 Connection -> SSH2 的 Authentication 面板里面，选中 PublicKey，点击右边的上箭头，将这个选项排到第一位；

6. 继续选中 PublicKey，点击右边的 Properties，选择 Use session public key setting，在下面的 Use identity or certificate file，导入下载的私钥文件 kp-12345678；

7. 连接即可。

**Windows 下使用 Xshell 登录**

推荐使用 Xshell 5 及以上版本

1. 在青云控制台的**安全** > **SSH 密钥**里创建 SSH 密钥，将这个密钥加载到云服务器上并下载私钥文件，例如 kp-12345678；

2. 在 Xshell 上 创建(New) 一个新 会话(Session) ，协议(Protocol) 是 SSH，云服务器(Host) 是公网 IP 地址；

3. 左侧标签中切换到 用户身份验证(Authentication)，右侧表单中 方法(Method) 选择 Public Key ，用户名(Username) 为 root ，点击 用户密钥(User Key) 左侧 浏览(Browse) 按钮；

4. 选择并 导入(Import) 刚才下载的私钥文件 kp-12345678；

5. 连接即可。
