---
title: "Centos安装图形化桌面"
date: 2021-02-15T21:37:25+09:00
description: Test description
weight: 50
draft: false
keyword: 云计算, 青云, QingCloud, 云服务器，centos图形化桌面
---

青云 CentOS 7.x 镜像默认为最小化部署，需要自行安装图形化桌面。

本次示例为安装 GNOME 图形化的具体步骤，以Cen tOS7.x为例，仅供参考。

## 1、首先更新系统

```
yum upgrade
```

## 2、在命令行下输入下面的命令来依赖包

```
yum update grub2-common
yum install fwupdate-efi
```

## 3、输入以下命令安装图形化组件

```
sudo yum group install 'GNOME Desktop' 'Graphical Administration Tools'
```

## 4、 更新系统的运行级别

```
ln -sf /lib/systemd/system/graphical.taget /etc/systemd/system/default.target
```

## 5、重启系统

```
reboot -h now
```

