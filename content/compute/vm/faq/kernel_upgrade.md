---
title: "Linux如何升级内核"
date: 2021-02-04T20:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---



### 1、查看当前内核版本

```
[root@i-ttws7jrq ~]# uname -r
3.10.0-1160.el7.x86_64
```

### 2、通过yum升级内核

>yum install -y kernel

安装完成后，回显如下类似信息：

```
Running transaction check
Running transaction test
Transaction test succeeded
Running transaction
  Installing : linux-firmware-20200421-80.git78c0348.el7_9.noarch                                                                                                                1/2 
  Installing : kernel-3.10.0-1160.15.2.el7.x86_64                                                                                                                                2/2 
  Verifying  : linux-firmware-20200421-80.git78c0348.el7_9.noarch                                                                                                                1/2 
  Verifying  : kernel-3.10.0-1160.15.2.el7.x86_64                                                                                                                                2/2 

Installed:
  kernel.x86_64 0:3.10.0-1160.15.2.el7                                                                                                                                               

Dependency Installed:
  linux-firmware.noarch 0:20200421-80.git78c0348.el7_9                                                                                                                               

Complete!
```



重启后即可使用新内核

```
[root@i-ttws7jrq ~]# uname -r
3.10.0-1160.15.2.el7.x86_64
```



<p></p>

