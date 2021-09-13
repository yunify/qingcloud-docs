---
title: "通过 SSH 密钥访问主机"
description: 本小节主要介绍青立方® 超融合易捷版 通过 SSH 密钥访问主机。 
keywords: 青立方® 超融合易捷版，通过 SSH 密钥访问主机
weight: 20
collapsible: false
draft: false
---



> **注意**
> 
> SSH 密钥只能用于连接 root 用户。

本小节主要介绍如何通过 SSH 密钥访问主机。

## 前提条件

- 已将密钥加载到主机。

> **注意**
> 
> 在进行 SSH 连接之前，请确保在主机对应的防火墙**下行规则**中打开 TCP 22 号端口的访问。

## Linux 和 Mac OS

下载 SSH 密钥 (如 kp-1234abcd) 至本地后，Linux 和 Mac OS 下，使用下面的命令登录：

```shell
$ chmod 600 /path/to/kp-1234abcd
$ ssh -i /path/to/kp-1234abcd root@ip_address
```

使用 SSH 密钥连接主机 172.31.45.132 为示例。

```shell
chmod 600 /path/to/kp-1234abcd
ssh -i /path/to/kp-1234abcd root@172.31.45.132
```

![ SSH 密钥连接主机](../../../_images/ssh_key_host.png)

## Windows

### Windows 下用 putty

PuTTY 作为 Windows 桌面 SSH 客户端来登录远程的 Linux 主机，但是 PuTTY 不支持 OpenSSH 的密钥格式，而是使用它自己的密钥格式。因此，PuTTY 提供了一个名为 puttygen 的密钥格式转换工具。

1. 下载 putty 和 puttygen。[点击下载](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)
2. 转换密钥格式。

   启动 puttygen，点击 **Conversions** > **Import key**，选中您在青云中创建并下载的 SSH 密钥，文件名形如 `kp-1234abcd`。点击 **Save private key**，您将得到 PuTTY 格式的私钥，如 kp-1234abcd.ppk。

3. 配置登录。

   1. 打开 putty。
   
   2. 点击 putty 左边导航的 **connection** > **data**, **auto-login username** 处填入登录名：root

   3. 点击 putty 左边导航的 **connection** > **ssh** > **aut**h, 最下面有 “private key file for authantication” 字样，点击旁边的 **browse**，选择之前生成的 kp-1234abcd.ppk 文件，并确定配置。

   4. 点击 putty 左边导航的 **session**，**host name** 中填写主机的 IP 地址，例如1.2.3.4。

   5. 点击 **open** 进行连接即可。

   如果想下次登录方便，可以点击 putty 左边导航的 **session**，在 **save sessions** 中填入名称并保存，将当前配置保存下来。

### Windows 下使用高版本 SecureCRT

> **注意**
>
> 推荐使用 SecureCRT 6.5 及以上版本，低版本会出现私钥无法导入的情况。

1. 将密钥加载到主机上并下载私钥文件，例如 kp-12345678。

2. 在 SecureCRT 上创建一个新连接，**protocol** 是 **SSH2**，hostname 是 IP 地址，username 为 root。
3. 右键选中这个 session，选择 **Properties**，在 **Connection** > **SSH2** 的 Authentication 面板里面，选中 PublicKey，点击右边的上箭头，将这个选项排到第一位。
4. 继续选中 **PublicKey**，点击右边的 **Properties**，选择 Use session public key setting，在下面的 Use identity or certificate file，导入下载的私钥文件 kp-12345678。
5. 连接即可。

### Windows 下使用低版本 SecureCRT

在较低版本的 SecureCRT 可能会遇到无法导入私钥的问题，因为低版本的 SecureCRT 会严格要求私钥需要和公钥共同存在，这种情况下，操作步骤如下：

1. 在控制台创建 SSH 密钥，将这个密钥加载到主机上并下载私钥文件，例如放置于 /path/to/kp-1234abcd。
2. 在路径 /path/to/ 下创建新文件 kp-1234abcd.pub。
3. 在 SSH 密钥 kp-1234abcd 的详情页中找到公钥的字符串，并拷贝下来放入 kp-1234abcd.pub 文件中，并且在公钥内容前面加上加密方式，最终文件内容为：ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC90PM9PT……..。
4. 在 SecureCRT 上创建一个新连接，protocol 是 SSH2，hostname 是 IP 地址，username 为 root。
5. 右键选中这个 session，选择 Properties，在 Connection -> SSH2 的 Authentication 面板里面，选中 PublicKey，点击右边的上箭头，将这个选项排到第一位。
6. 继续选中 PublicKey，点击右边的 Properties，选择 Use session public key setting，在下面的 Use identity or certificate file，导入下载的私钥文件 kp-12345678。
7. 连接即可。

### Windows 下使用 Xshell

推荐使用 Xshell 5 及以上版本。

1. 将这个密钥加载到主机上并下载私钥文件，例如 kp-12345678。
2. 在 Xshell 上 创建 (New) 一个新 会话(Session) ，协议(Protocol) 是 SSH，主机(Host) 是 IP 地址。
3. 左侧标签中切换到 用户身份验证(Authentication)，右侧表单中 方法(Method) 选择 Public Key ，用户名(Username) 为 root ，点击 用户密钥(User Key) 左侧 浏览(Browse) 按钮。
4. 选择并 导入(Import) 刚才下载的私钥文件 kp-12345678。
5. 连接即可。
