---
title: "常见问题"
linkTitle: "常见问题"
date: 2020-02-28T10:08:56+09:00
description:
draft: false
weight: 10
---

### 找不到 spack 命令

一般是因为i没有加载spack环境导致，执行如下命令加载：

`source /es01/software/spack/share/spack/setup-env.sh`

### 安装软件失败：configure: error: C compiler cannot create executables

加载相应的编译器

spack load [intel@19.1.3](mailto:intel@19.1.3)

![img](../_images/spack-install-failed.png)
