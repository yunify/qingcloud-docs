---
title: "国内云服务器无法访问 GitHub"
description: test
draft: false
weight: 10
---

由于Github的部署环境，国内访问GitHub 会异常缓慢，在clone仓库时经常会非常慢，甚至会出现GitHub 的web界面因为无法登陆。

下面我们通过修改系统hosts文件的办法，直接访问GitHub的CDN节点，从而达到加速的目的。

## 获取GitHub官方CDN地址
访问http://github.com.ipaddress.com/
![github](../../../_images/github1.png)

记录下查询到的IP地址。

## 修改系统Hosts文件
### Windows云服务器修改Hosts文件

1. 打开系统hosts文件(需管理员权限).

2. 在路径：`C:\Windows\System32\drivers\etc` 的 hosts 文件最后添加第一步获取到的IP地址及域名

   如：140.82.112.3     github.com

```
# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#   127.0.0.1       localhost
#   ::1             localhost

140.82.112.3     github.com
```

#### 刷新系统DNS缓存

1. 打开系统命令行（管理员身份）或 powershell。

2. 运行 ipconfig /flushdns 手动刷新系统DNS缓存。
   ![github](../../../_images/github2.png)

### Linux云服务器修改Hosts文件

编辑Hosts文件，在文件最后添加如下内容。
```bash
#vi /etc/hosts
    140.82.112.3     github.com
```

现在打开GitHub ，clone一个项目到本地速度会有所提升