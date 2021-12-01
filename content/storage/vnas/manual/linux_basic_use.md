---
title: "Linux客户端配置及访问"
date: 2021-11-22T17:08:56+09:00
description: Test description
draft: false
weight: 20
keyword: 青云，文件存储
---

## 安装客户端软件

**NFS 客户端配置**

```
当系统为Redhat/Centos时，执行如下命令：
yum install -y nfs-utils

当系统为Debian/Ubuntu时，执行如下命令：
apt-get install nfs-common
```

**Samba 客户端配置**

```
当系统为Redhat/Centos时，执行如下命令：
yum install -y samba-client
yum install -y cifs-utils

当系统为Debian/Ubuntu时，执行如下命令：
apt-get install samba-client
apt-get install cifs-utils
```

## 客户端连接共享存储目标

1. 访问 NFS 类型共享存储目标，执行如下命令进行挂载：

   ```
   Step1:创建挂载目录
   mkdir /mnt/nasdata
   
   Step2:挂载目录
   mount -t nfs xx.xx.xx.xx:/mnt/nas /mnt/nasdata
   ```

   > **说明**
   >
   > + 命令行中，xx.xx.xx.xx 表示 vNAS 服务器地址，可在文件存储 vNAS 主页面进行查看。
   > + /mnt/nas 表示创建的共享目录，可在 **vNAS 服务器详情页面** > **共享存储目标**页签进行查看。
   > + /mnt/nasdata 表示客户端挂载目录。

2. 访问 Samba 类型共享存储目标，执行如下命令进行挂载：

   ```
   Step1:创建挂载目录
   mkdir /mnt/nasdata
   
   Step2:挂载目录
   mount -t cifs -o username=smbtest,password=test123 //xx.xx.xx.xx/nas_smb /mnt/nasdata
   ```

   > **说明**
   >
   > + 命令行中，xx.xx.xx.xx 表示 vNAS 服务器地址，可在文件存储 vNAS 主页面进行查看。
   > + /mnt/nas 表示创建的共享目录，可在 **vNAS 服务器详情页面** > **共享存储目标**页签进行查看。
   > + /mnt/nasdata 表示客户端挂载目录。
   > + username=smbtest，password=test123 分别表示客户端的账户名和密码。

3. 执行如下命令，客户端断开共享存储目标：

   ```
   umount /mnt/nasdata
   ```

   > **说明**
   >
   > 如果要关闭或终止 vNAS 服务，以及修改共享存储目标硬盘，需要在客户端停止对共享存储目标的访问，并执行以上命令。

## 公网访问 vNAS 服务

由于通过公网访问 NAS 的 IO 延迟比较大，通常情况下不建议以这种方式访问。 如果有一些特殊的场景需要公网访问，需要在防火墙打开对应的服务端口，并在路由器端口转发中设置端口的对应关系。

- NFS 服务需要支持的端口为，2049（TCP/UDP），111（TCP/UDP），30001（TCP/UDP）。
- Samba 不能通过外网访问 Samba 协议提供的共享存储服务。