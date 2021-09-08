---
title: "安装及使用rz/sz工具"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 40
draft: false
enableToc: false
---

## 概述

rz，sz是Linux同Windows进行文件传输的命令行工具，优点就是不用再开一个SFTP工具登录上去上传下载文件，该工具需要借助XSHELL才能使用，不能直接在VNC上使用。

sz：将选定的文件发送（send）到本地机器。
rz：运行该命令会弹出一个文件选择窗口，从本地选择文件上传到Linux服务器。

## 安装与使用

### 安装lrzsz

```
yum install lrzsz  #在centos上面安装

sudo apt-get install lrzsz    #在ubuntu上面安装
```

### 下载文件到本地

```
sz filename   #下载一个文件

sz filename1 filename2     #下载多个文件

sz dir/*     #下载dir目录下的所有文件，不包含dir下的文件夹
```

![rzandsz01](../../../_images/rzandsz01.jpg)

### 上传文件到Linux云服务器

```
rz
```

![rzandsz02](../../../_images/rzandsz02.jpg)