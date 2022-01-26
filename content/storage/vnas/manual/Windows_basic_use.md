---
title: "Windows 客户端配置及访问"
date: 2021-11-22T17:08:56+09:00
description: 本小节主要介绍Windows 客户端配置及访问的相关操作。
draft: false
weight: 3
keyword: 云计算, 青云, QingCloud, 文件存储, Virtual NAS, vNAS
---

## 客户端连接共享存储目标

**访问Samba共享存储目标**

Windows 系统上默认安装了 Samba 客户端，在 Windows 地址栏中输入地址：\ <vNAS 服务器地址> \ <共享目录> ，在弹出登录框中输入用户名和密码，即可访问 Samba 的共享数据。

**访问 NFS 共享存储目标**

1. 点击 **开始** > **控制面板** > **程序和功能** > **打开和关闭Windows功能** > **NFS客户端**，勾选 NFS 服务，即开启 Windows NFS 客户端服务。

2. 打开 **命令行窗口**，输入如下命令：

   ```
   mount xx.xx.xx.xx:/mnt/nfs F:
   ```

   > **说明**
   >
   > + 命令行中，xx.xx.xx.xx 表示 vNAS 服务器地址。
   > + /mnt/nfs 表示共享目录。
   > + F: 表示客户端目录为F盘。
   > + Windows 客户端建议使用 Samba 服务。

## 客户端断开共享存储目标

**断开 Samba 共享存储目标**

1. 点击 **我的电脑** > **设备和驱动器** ，选择需要断开的网络驱动即可。

**断开 NFS 共享存储目标**

1. 打开 **命令行窗口**，输入如下命令：

```
umount F:
```

> 说明：
>
> + 命令行中，F: 表示客户端目录为F盘。