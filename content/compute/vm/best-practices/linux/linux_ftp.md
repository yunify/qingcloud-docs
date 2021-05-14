---
title: "Linux部署FTP服务"
description: Test description
weight: 50
draft: false
enableToc: false

---

## 准备环境

操作系统：CentOS 7.5 64bit

 Vsftpd:  3.0.2



## 1.安装FTP服务

### 1.1 安装vsftpd

```
yum install -y vsftpd

```

 ![ftp_](../../_images/ftp_1.png )

### 1.2 启动vsftpd服务

● **运行下面命令启动FTP服务**

```
systemctl start vsftpd.service
```

● **设置FTP服务开机自启动**

```
systemctl enable vsftpd.service
```



 ● **查看FTP服务监听的端口**

```
netstat -antup | grep ftp
```

**●出现如下图所示界面，表示FTP服务已启动，监听的端口号为21。此时，Vsftpd默认已开启匿名访问功能，您无需输入用户名密码即可登录FTP服务器，但没有修改或上传文件的权限**
 ![ftp_](../../_images/ftp_2.png )

### 1.3  主动模式设置

● **主动模式适用于局域网（内网）环境下，青云云平台使用公网FTP服务，请使用被动模式**

●**主动模式下vsftpd.conf参数设置**

```
vim /etc/vsftpd/vsftpd.conf
#修改参数如下，没有修改的为默认值
chroot_local_user=YES    #全部用户被限制在主目录
chroot_list_enable=YES   #启用例外用户名单
chroot_list_file=/etc/vsftpd/chroot_list  #指定例外用户列表文件，列表中的用户不被锁定在主目录
allow_writeable_chroot=YES  
local_root=/var/ftp/test #设置本地用户登录后所在的目录
```
 ![ftp_](../../_images/ftp_3.png )

### 1.4  被动模式设置

●**被动模式下vsftpd.conf配置参数设置**

```
vim /etc/vsftpd/vsftpd.conf

#修改参数如下，没有修改的为默认值

local_root=/var/ftp/test     #设置本地用户登录后所在目录
chroot_local_user=YES        #全部用户被限制在主目录
chroot_list_enable=YES       #启用例外用户名单
chroot_list_file=/etc/vsftpd/chroot_list  #指定例外用户列表文件，列表中用户不被锁定在主目录
allow_writeable_chroot=YES
pasv_enable=YES                    #开启被动模式
pasv_address=<FTP服务器公网IP地址>  #公网IP
pasv_min_port=<port number>          #设置被动模式下，建立数据传输可使用的端口范围的最小值
pasv_max_port=<port number>          #设置被动模式下，建立数据传输可使用的端口范围的最大值
```
 ![ftp_](../../_images/ftp_4.png )

**●  被动模式下设置端口范围：建议把端口范围设置在一段比较高的范围内，例如20000-21000，有助于提高访问FTP服务器的安全性。**

**● 被动模式用公网FTP使用，如果在VPC网络下主机部署FTP服务，还需VPC网络端口转发中设置转发配置文件中pasv_min_port和pasv_max_port之间的所有端口和TCP 21 端口**。

 ![ftp_](../../_images/ftp_5.png )

●**安全组也需放行VPC网络端口转发的FTP服务员源端口**

 ![ftp_](../../_images/ftp_6.png )
 ![ftp_](../../_images/ftp_7.png )

## 2.客户端测试

### 2.1  主动模式测试

●**介于主动模式主要用于局域网内（内网）使用，本次测试客户端为内网云服务器，使用IFTP客户匿名用户登入测试如下**
 ![ftp_](../../_images/ftp_8.png )

### 2.2  被动模式测试

●**浏览器地址栏中输入ftp://<FTP服务器公网IP地址>:FTP端口，例如：ftp://139.198.xxx.xxx 21**

![ftp_](../../_images/ftp_9.png )