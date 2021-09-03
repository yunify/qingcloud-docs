---
 title: "上传文件到云服务器"
description: Test description
weight: 40
draft: false
enableToc: false
---

客户购买了云服务器，希望将将本地文件上传至云服务器中，以下文档会介绍不同操作系统的场景下，如何将文件同步到云服务器中

## 本地 Windows 计算机上传文件到 Windows 云服务器

### 前提条件


Windows 云服务器具备公网访问能力

### 操作步骤

1. 在电脑桌面中使用 **WIN＋R**组合键，打开**运行**窗口，输入 `mstsc` 命令并回车即可弹出远程桌面连接对话框。

2. 单击**显示选项**。

   <img src="/compute/vm/_images/upload_file_01.png" width="60%" height="40%">

3. 在**常规**页签中，输入云服务器的公网 IP 地址和用户名 Administrator。

   <img src="/compute/vm/_images/upload_file_02.png" width="60%" height="40%">

4. 选择**本地资源**页签，确认本地设备和资源下的**剪切板**处于勾选状态。

   <img src="/compute/vm/_images/upload_file_03.png" width="60%" height="40%">

5. 单击**详细信息**。

6. 在**驱动器**多选框列表，勾选要上传到 Windows 云服务器上的文件所在的本地磁盘。

   <img src="/compute/vm/_images/upload_file_04.png" width="60%" height="40%">

7. 点击**确定**，登录 Windows 云服务器。

8. 单击 **开始** > **计算机**。

   在出现的 Windows 云服务器上可看到本地硬盘的信息。

9. 在云服务器中，双击进入本地磁盘，将需要上传的文件复制到 Windows 云服务器。

## 本地 Windows 计算机使用 WinSCP 上传文件到 Linux 云服务器

### 操作场景

WinSCP 工具可以实现在本地与远程计算机之间安全地复制文件。通过  WinSCP 可以直接使用服务器账户密码访问服务器，无需在服务器端做任何配置。
通常本地 Windows 计算机将文件上传至 Linux 服务器一般会采用 WinSCP 工具。本节为您介绍本地 Windows 计算机使用 WinSCP 工具，上传文件至 Linux 云服务器的操作方法。本例中云服务器操作系统为 CentOS。

### 操作步骤

1. 下载 WinSCP 客户端并安装。<a href="https://winscp.net/" target="_blank">下载 WinSCP</a>

2. 安装 WinSCP。

3. 启动 WinSCP，启动后界面如下：

   <img src="/compute/vm/_images/upload_file_05.png" width="60%" height="40%">

**填写说明**：

- 协议：选填 SFTP 或者 SCP 均可。
- 云服务器名：云服务器的公网 IP。登录管理控制台即可查看对应云服务器的公网 IP。
- 端口：默认 22。
- 用户名：云服务器的用户名。
- 密码：购买云服务器设置的密码。

4. 单击**登录**，进入 WinSCP 文件传输界面。

5. 登录成功之后，您可以选择左侧本地计算机的文件，拖拽到右侧的远程云服务器，完成文件上传到云服务器。

## 本地 Linux 计算机使用 SCP 上传文件到 Linux 云服务器

### 操作场景


本节介绍本地 Linux 计算机通过 SCP 向 Linux 云服务器传输文件的操作步骤。

### 操作步骤

**上传文件**

在本地 Linux 操作系统的计算机上执行以下命令，传输文件到 Linux 操作系统云服务器。

```
scp 本地计算机文件地址 用户名@弹性公网IP:云服务器文件地址

例如：将本地文件 /test.txt 上传至弹性公网IP地址为139.198.x.x的云服务器对应目录下，命令如下：

scp /test.txt root@139.198.x.x:/home

根据提示输入登录密码，即可完成上传。
```

**下载文件**

在本地 Linux 操作系统计算机上执行以下命令，下载云服务器上的文件到本地云服务器。

```
scp 用户名@弹性公网IP:云服务器文件地址 本地计算机文件地址

例如，将弹性公网IP地址为139.198.x.x的云服务器文件/test.txt 下载至本地对应目录下，命令如下：

scp root@139.198.x.x:/test.txt /home

根据提示输入登录密码，即可完成文件下载。
```

## 本地 Windows 计算机使用 Xftp 上传文件到绑定秘钥的 Ubuntu 云服务器

Xftp 是一个功能强大的 [SFTP](https://baike.baidu.com/item/SFTP/1184182)、 [FTP](https://baike.baidu.com/item/FTP/13839) 文件传输软件。本例中云服务器操作系统为 Ubuntu，并且绑定了 SSH 秘钥

### 操作步骤

1. 下载并安装 Xftp。

2. 启动 Xftp，启动后界面如下：

   <img src="/compute/vm/_images/upload_file_06.png" width="60%" height="40%">

**填写说明**：

- 名称：随意填写，方便记忆
- 主机：云服务器的公网 IP。登录管理控制台即可查看对应云服务器的公网 IP。
- 协议：默认 sftp 即可
- 端口：默认 22。
- 方法：按照实际情况填写。(本示例选择 Public Key)

3. 点击**确定**，进入到**会话**界面

   <img src="/compute/vm/_images/upload_file_07.png" width="60%" height="40%">

4. 选中**会话**，点击**连接**，输入用户名 root ( SSH 秘钥的用户都是 root )

   <img src="/compute/vm/_images/upload_file_08.png" width="60%" height="40%">

5. 点击**确定**，选中 Public Key -浏览-用户秘钥

   <img src="/compute/vm/_images/upload_file_09.png" width="60%" height="40%">

6. 导入 SSH 秘钥私钥

   <img src="/compute/vm/_images/upload_file_10.png" width="60%" height="40%">

7. 选中私钥，点击**确定**

   <img src="/compute/vm/_images/upload_file_11.png" width="60%" height="40%">

8. 点击**确定**

   <img src="/compute/vm/_images/upload_file_12.png" width="60%" height="40%">

9. 登录成功之后，您可以选择左侧本地计算机的文件，拖拽到右侧的远程云服务器，完成文件上传到云服务器。

   <img src="/compute/vm/_images/upload_file_13.png" width="60%" height="40%">
