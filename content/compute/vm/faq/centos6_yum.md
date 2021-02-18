---
title: "CentOS6 yum源更新"
date: 2021-02-04T20:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---


1、先备份源文件：

```shell
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo-backup
```

2、编辑文件：vi /etc/yum.repos.d/CentOS-Base.repo

```shell
vi /etc/yum.repos.d/CentOS-Base.repo
[base]
name=CentOS-6
failovermethod=priority
baseurl=http://mirrors.sohu.com/centos/6.10/os/x86_64/
gpgcheck=0
```



3、清理软件源

```shell
yum clean all
```

4、建立源数据缓存

```shell
yum makecache
```





