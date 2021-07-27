---
title: "CentOS6更新yum源"
date: 2021-02-04T20:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---

## 问题背景

由于centos6的版本有点老了，很多镜像站都不在维护centos6的yum源；新建的centos6云服务器我们已经更新了yum源，之前创建的centos6云服务器的yum源需要手动更新一下，可以参考以下步骤。

### 1.先备份源文件

```shell
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo-backup
```

### 2.编辑文件：vi /etc/yum.repos.d/CentOS-Base.repo

```shell
vi /etc/yum.repos.d/CentOS-Base.repo
[base]
name=CentOS-6
failovermethod=priority
baseurl=http://mirrors.sohu.com/centos/6.10/os/x86_64/
gpgcheck=0
```



### 3.清理软件源

```shell
yum clean all
```

### 4.建立源数据缓存

```shell
yum makecache
```





