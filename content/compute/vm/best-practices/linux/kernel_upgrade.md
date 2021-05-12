---
title: "Linux系统升级内核版本"
date: 2021-02-04T20:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---

## 背景
在使用Linux发行版的时候，很多人都会遇到各种各样的问题，比如：**网卡不能使用，亮度不能调节，触摸板不能识别，蓝牙不能使用，应用软件要求的内核版本不符等等**，这些都和Linux的内核有关系。

### 1、查看当前内核版本

```
[root@i-ttws7jrq ~]# uname -r
3.10.0-514.el7.x86_64

[root@i-ttws7jrq ~]# uname -a
Linux k8s-master 3.10.0-514.el7.x86_64 #1 SMP Tue Nov 22 16:42:41 UTC 2016 x86_64 x86_64 x86_64 GNU/Linux

[root@i-ttws7jrq ~]# cat /etc/redhat-release 
CentOS Linux release 7.3.1611 (Core) 

```

### 2、升级内核
#### 更新yum源
```
[root@i-ttws7jrq ~]# yum -y update
```
启用 ELRepo 仓库
ELRepo 仓库是基于社区的用于企业级 Linux 仓库，提供对 RedHat Enterprise (RHEL) 和 其他基于 RHEL的 Linux 发行版（CentOS、Scientific、Fedora 等）的支持。

#### 导入ELRepo仓库的公共密钥
```
[root@i-ttws7jrq ~]# rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
```
#### 安装ELRepo仓库的yum源
```
[root@i-ttws7jrq ~]# rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-3.el7.elrepo.noarch.rpm
```

### 3、查看可用的系统内核包
```
[root@i-ttws7jrq ~]# yum --disablerepo="*" --enablerepo="elrepo-kernel" list available
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * elrepo-kernel: mirrors.tuna.tsinghua.edu.cn
elrepo-kernel                                                                                                                                                                 | 2.9 kB  00:00:00     
elrepo-kernel/primary_db                                                                                                                                                      | 1.8 MB  00:00:03     
Available Packages
kernel-lt.x86_64                                                                                  4.4.155-1.el7.elrepo                                                                  elrepo-kernel
kernel-lt-devel.x86_64                                                                            4.4.155-1.el7.elrepo                                                                  elrepo-kernel
kernel-lt-doc.noarch                                                                              4.4.155-1.el7.elrepo                                                                  elrepo-kernel
kernel-lt-headers.x86_64                                                                          4.4.155-1.el7.elrepo                                                                  elrepo-kernel
kernel-lt-tools.x86_64                                                                            4.4.155-1.el7.elrepo                                                                  elrepo-kernel
kernel-lt-tools-libs.x86_64                                                                       4.4.155-1.el7.elrepo                                                                  elrepo-kernel
kernel-lt-tools-libs-devel.x86_64                                                                 4.4.155-1.el7.elrepo                                                                  elrepo-kernel
kernel-ml.x86_64                                                                                  4.18.7-1.el7.elrepo                                                                   elrepo-kernel
kernel-ml-devel.x86_64                                                                            4.18.7-1.el7.elrepo                                                                   elrepo-kernel
kernel-ml-doc.noarch                                                                              4.18.7-1.el7.elrepo                                                                   elrepo-kernel
kernel-ml-headers.x86_64                                                                          4.18.7-1.el7.elrepo                                                                   elrepo-kernel
kernel-ml-tools.x86_64                                                                            4.18.7-1.el7.elrepo                                                                   elrepo-kernel
kernel-ml-tools-libs.x86_64                                                                       4.18.7-1.el7.elrepo                                                                   elrepo-kernel
kernel-ml-tools-libs-devel.x86_64                                                                 4.18.7-1.el7.elrepo                                                                   elrepo-kernel
perf.x86_64                                                                                       4.18.7-1.el7.elrepo                                                                   elrepo-kernel
python-perf.x86_64                                                                                4.18.7-1.el7.elrepo                                                                   elrepo-

```
### 4、安装最新版本内核

```
[root@i-ttws7jrq ~]# yum --enablerepo=elrepo-kernel install kernel-ml
```
>enablerepo 选项开启 CentOS 系统上的指定仓库。默认开启的是 elrepo，这里用 elrepo-kernel 替换

### 5、设置grub2
内核安装好后，需要设置为默认启动选项并重启后才会生效

**查看系统上的所有可用内核：**
```
[root@i-ttws7jrq ~]# sudo awk -F\' '$1=="menuentry " {print i++ " : " $2}' /etc/grub2.cfg
0 : CentOS Linux (4.18.7-1.el7.elrepo.x86_64) 7 (Core)
1 : CentOS Linux (3.10.0-862.11.6.el7.x86_64) 7 (Core)
2 : CentOS Linux (3.10.0-514.el7.x86_64) 7 (Core)
3 : CentOS Linux (0-rescue-063ec330caa04d4baae54c6902c62e54) 7 (Core)
```
**设置新的内核为grub2的默认版本**
>服务器上存在4 个内核，我们要使用 4.18 这个版本，可以通过 grub2-set-default 0 命令或编辑 /etc/default/grub 文件来设置

**方法1、通过 grub2-set-default 0 命令设置**

其中 0 是上面查询出来的可用内核
```
[root@i-ttws7jrq ~]# grub2-set-default 0
```
**方法2、编辑 /etc/default/grub 文件**

设置 GRUB_DEFAULT=0，通过上面查询显示的编号为 0 的内核作为默认内核：
```
[root@i-ttws7jrq ~]# vim /etc/default/grub
GRUB_TIMEOUT=5
GRUB_DISTRIBUTOR="$(sed 's, release .*$,,g' /etc/system-release)"
GRUB_DEFAULT=0
GRUB_DISABLE_SUBMENU=true
GRUB_TERMINAL_OUTPUT="console"
GRUB_CMDLINE_LINUX="crashkernel=auto rd.lvm.lv=cl/root rhgb quiet"
GRUB_DISABLE_RECOVERY="true"
```
**生成 grub 配置文件并重启**
```
[root@i-ttws7jrq ~]#  grub2-mkconfig -o /boot/grub2/grub.cfg
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-4.18.7-1.el7.elrepo.x86_64
Found initrd image: /boot/initramfs-4.18.7-1.el7.elrepo.x86_64.img
Found linux image: /boot/vmlinuz-3.10.0-862.11.6.el7.x86_64
Found initrd image: /boot/initramfs-3.10.0-862.11.6.el7.x86_64.img
Found linux image: /boot/vmlinuz-3.10.0-514.el7.x86_64
Found initrd image: /boot/initramfs-3.10.0-514.el7.x86_64.img
Found linux image: /boot/vmlinuz-0-rescue-063ec330caa04d4baae54c6902c62e54
Found initrd image: /boot/initramfs-0-rescue-063ec330caa04d4baae54c6902c62e54.img
done

[root@i-ttws7jrq ~]# reboot
```

### 6、重启查看新的内核版本

```
[root@i-ttws7jrq ~]# uname -r
3.10.0-1160.15.2.el7.x86_64
```
### 7、删除旧内核（可选）
**查看系统中全部的内核：**
```
[root@i-ttws7jrq ~]#  rpm -qa | grep kernel
kernel-3.10.0-514.el7.x86_64
kernel-ml-4.18.7-1.el7.elrepo.x86_64
kernel-tools-libs-3.10.0-862.11.6.el7.x86_64
kernel-tools-3.10.0-862.11.6.el7.x86_64
kernel-3.10.0-862.11.6.el7.x86_64
```
**方法1、yum remove 删除旧内核的 RPM 包**
```
[root@i-ttws7jrq ~]# yum remove kernel-3.10.0-514.el7.x86_64 \
kernel-tools-libs-3.10.0-862.11.6.el7.x86_64 \
kernel-tools-3.10.0-862.11.6.el7.x86_64 \
kernel-3.10.0-862.11.6.el7.x86_64
```
**方法2、yum-utils 工具**

如果安装的内核不多于 3 个，yum-utils 工具不会删除任何一个。只有在安装的内核大于 3 个时，才会自动删除旧内核。

安装yum-utils
```
[root@i-ttws7jrq ~]# yum install yum-utils
```
删除旧版本　　
```
[root@i-ttws7jrq ~]# package-cleanup --oldkernels
```