---
title: "软件安装"
linkTitle: "软件安装"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 5
---

安装软件有两种目录：
1. 集群内用户都可用，需要在 opt 下创建spack； 
2. 仅自己可用，需要在 “home\用户目录“ 下创建spack目录，下面以这个为例讲解安装过程。

### 创建.spack目录

![img](../_images/spack-root.png)

### 拷贝公共软件的配置文件到.spack目录

![img](../_images/spack-config.png)

### 查找可安装的软件

![img](../_images/spack-find-soft.png)

### 安装软件

![img](../_images/spack-install-soft.png)

### 查找、加载本地软件

```
spack find

spack load software@version
```

### 查找加载公共软件

```
spack-pub find

spack-pub load software@version
```
