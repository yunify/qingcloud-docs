---
title: "Windows 云服务器文件共享"
description: test
draft: false
---

## Windows  Server端配置

### 开启必要的服务组件

我们这里以共享Windows Server 2016系统下的文件为例，进入到【服务器管理器】-【工具】-【服务】
![服务](../../../_images/win_share_1.png)

找到【Server】【Function Discovery Resource Publication】【SSDP Discovery】【UPnP Device Host 】【Computer Browser】这5个服务，并开启，右键【Server】-【属性】
![服务](../../../_images/win_share_2.png)

【启动类型】选择【自动】，并点击【应用】
![服务](../../../_images/win_share_3.png)

选择【启动】并点击【确定】
![服务](../../../_images/win_share_4.png)

剩下的【Function Discovery Resource Publication】【SSDP Discovery】【UPnP Device Host 】【computer browser】也进行同样的操作
>注解
>共享无法开启网络发现主要原因是“网络发现”所依赖的服务没有启用，或者被禁用。

### 配置网卡选项

打开 【控制面板】 –> 【控制面板】 –> 【控制面板】，点击左侧的【更改适配器设置】
![更改适配器设置](../../../_images/win_share_5.png)

右键网卡-【属性】
![更改适配器设置](../../../_images/win_share_6.png)

在弹出的对话框中勾中【Microsoft网络客户端】和【Microsoft网络的文件和打印机共享】  并点击【确定】
![更改适配器设置](../../../_images/win_share_7.png)

点击左侧的【更改高级共享设置】
![更改高级共享设置](../../../_images/win_share_8.png)

确保网络为【当前配置文件】 项下的各个与共享相关的选项都启用了
![更改高级共享设置](../../../_images/win_share_9.png)

### 安装SMB 1.0/CIFS文件共享支持

进入【服务器管理器】，选择【管理】-【添加角色和功能】
![添加角色和功能](../../../_images/win_share_10.png)

选择【功能】-【SMB 1.0/CIFS文件共享支持】【SMBBandwidth Limit 】，点击【下一步】
![添加角色和功能](../../../_images/win_share_11.png)

然后选择【安装】
![添加角色和功能](../../../_images/win_share_12.png)

等待安装结束
![添加角色和功能](../../../_images/win_share_13.png)

### 配置防火墙入站\出站规则

在【网络和共享中心】选择左下角的【Windows防火墙】
![配置防火墙入站\出站规则](../../../_images/win_share_14.png)

选择【高级设置】
![配置防火墙入站\出站规则](../../../_images/win_share_15.png)

选择【入站规则】
![配置防火墙入站\出站规则](../../../_images/win_share_16.png)

找到如下规则，都选择启用
![配置防火墙入站\出站规则](../../../_images/win_share_17.png)

### 创建文件进行共享

在云服务器1中创建一个文件夹client1，右键该文件夹-【属性】
![创建文件进行共享](../../../_images/win_share_18.png)

选择【共享】标签页-【共享】
![创建文件进行共享](../../../_images/win_share_19.png)

选择一个共享用户，这里我们选择everyone，然后点击【添加】
![创建文件进行共享](../../../_images/win_share_20.png)
![创建文件进行共享](../../../_images/win_share_21.png)

根据需求选择权限，这里我们选择【读取/写入】
![创建文件进行共享](../../../_images/win_share_22.png)

点击【共享】后，会显示你的文件夹已共享，点击【完成】
![创建文件进行共享](../../../_images/win_share_23.png)

我们进入client1文件夹，创建一个text文档
![创建文件进行共享](../../../_images/win_share_24.png)

## Windows客户端访问

我们登陆另一台Windows云服务器，同样需要重复上述1.1-1.4的配置步骤，配置完成后进入到【我的电脑】-【网络】
![Windows客户端访问](../../../_images/win_share_25.png)

可以看到2台云服务器已经位于同一个网络中，其中i-t8j3zdhd是之前创建了共享文件夹1的云服务器，双击i-t8j3zdhd云服务器，我们可以看到共享的文件夹client1和文件夹中的文件text
![Windows客户端访问](../../../_images/win_share_26.png)
![Windows客户端访问](../../../_images/win_share_27.png)

现在已经可以看到云服务器1中共享的内容了。
现在我们测试下客户端云服务器2的写入权限，在上边的文件路径中，我们创建一个文档text2
![Windows客户端访问](../../../_images/win_share_28.png)

然后我们登陆云服务器1，直接进入到C盘-client文件夹
![Windows客户端访问](../../../_images/win_share_29.png)

我们看到云服务器2创建的文件在云服务器1中也可以看到了。至此Windows间的文件共享已完成.

## Linux客户端访问


### 安装samba客户端
这里，我们以CentOS 7.7 64bit系统作为客户端
```bash
# yum install samba-client
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * base: ftp.sjtu.edu.cn
 * extras: mirrors.163.com
 * updates: ftp.sjtu.edu.cn
Resolving Dependencies
--> Running transaction check
---> Package samba-client.x86_64 0:4.10.4-11.el7_8 will be installed
--> Processing Dependency: samba-common-libs = 4.10.4-11.el7_8 for package: samba-client-4.10.4-11.el7_8.x86_64
--> Processing Dependency: samba-common = 4.10.4-11.el7_8 for package: samba-client-4.10.4-11.el7_8.x86_64
--> Processing Dependency: samba-common = 4.10.4-11.el7_8 for package: samba-client-4.10.4-11.el7_8.x86_64
--> Processing Dependency: samba-client-libs = 4.10.4-11.el7_8 for package: samba-client-4.10.4-11.el7_8.x86_64
--> Processing Dependency: libsmbclient = 4.10.4-11.el7_8 for package: samba-client-4.10.4-11.el7_8.x86_64
...

Installed:
  samba-client.x86_64 0:4.10.4-11.el7_8 
Dependency Installed:
  avahi-libs.x86_64 0:0.6.31-20.el7             cups-libs.x86_64 1:1.6.3-43.el7          gnutls.x86_64 0:3.3.29-9.el7_6                libarchive.x86_64 0:3.1.2-14.el7_7      
  libldb.x86_64 0:1.5.4-1.el7                   libsmbclient.x86_64 0:4.10.4-11.el7_8    libtalloc.x86_64 0:2.1.16-1.el7               libtdb.x86_64 0:1.3.18-1.el7            
  libtevent.x86_64 0:0.9.39-1.el7               libwbclient.x86_64 0:4.10.4-11.el7_8     nettle.x86_64 0:2.7.1-8.el7                   pyldb.x86_64 0:1.5.4-1.el7              
  pytalloc.x86_64 0:2.1.16-1.el7                python-tdb.x86_64 0:1.3.18-1.el7         samba-client-libs.x86_64 0:4.10.4-11.el7_8    samba-common.noarch 0:4.10.4-11.el7_8   
  samba-common-libs.x86_64 0:4.10.4-11.el7_8    samba-libs.x86_64 0:4.10.4-11.el7_8      trousers.x86_64 0:0.3.14-2.el7               
Complete!
```

### 登陆server端

```bash
# smbclient //192.168.2.21/client1
Enter SAMBA\root's password: 
Try "help" to get a list of possible commands.
smb: \>l
  .                                   D        0  Fri Jun 26 13:23:01 2020
  ..                                  D        0  Fri Jun 26 13:23:01 2020
  text.txt                            A        0  Fri Jun 26 11:42:21 2020
  text2.txt                           A        0  Fri Jun 26 13:22:58 2020

		12978687 blocks of size 4096. 9332037 blocks available
```
我们看到，已经可以看到server端的文件了。那么我们下一步需要把server端的共享目录挂载到本地

### 安装cifs-utils软件包

```bash
# yum instal cifs-utils
Loaded plugins: fastestmirror
No such command: instal. Please use /usr/bin/yum --help
[root@i-1mhlm0mp ~]# yum install cifs-utils
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * base: ftp.sjtu.edu.cn
 * extras: mirrors.163.com
 * updates: ftp.sjtu.edu.cn
Resolving Dependencies
--> Running transaction check
---> Package cifs-utils.x86_64 0:6.2-10.el7 will be installed
--> Processing Dependency: keyutils for package: cifs-utils-6.2-10.el7.x86_64
...
Installed:
  cifs-utils.x86_64 0:6.2-10.el7  
Dependency Installed:
  keyutils.x86_64 0:1.5.8-3.el7                                           Complete!
```

### Linux客户端挂载共享文件夹到本地
```bash
# mount -t cifs  //192.168.2.21/client1  /mnt/
Password for root@//192.168.2.21/client1:  
[root@i-1mhlm0mp ~]# df -h
Filesystem              Size  Used Avail Use% Mounted on
devtmpfs                486M     0  486M   0% /dev
tmpfs                   496M     0  496M   0% /dev/shm
tmpfs                   496M   13M  483M   3% /run
tmpfs                   496M     0  496M   0% /sys/fs/cgroup
/dev/vda1                20G  1.4G   18G   8% /
tmpfs                   100M     0  100M   0% /run/user/0
//192.168.2.21/client1   50G   14G   36G  29% /mnt
```
进入到/mnt挂载点，写入一些数据
```bash
# cd /mnt/
[root@i-1mhlm0mp mnt]# ll
total 0
-rwxr-xr-x 1 root root 0 Jun 26 13:22 text2.txt
-rwxr-xr-x 1 root root 0 Jun 26 11:42 text.txt
[root@i-1mhlm0mp mnt]# touch {1..5}
[root@i-1mhlm0mp mnt]# ls
1  2  3  4  5  text2.txt  text.txt
```

我们到server端看下是否可以看到Linux客户端写入的数据
![Windows客户端访问](../../../_images/win_share_30.png)

可以看到，Linux客户端写入的数据已经可以在server端看到了。