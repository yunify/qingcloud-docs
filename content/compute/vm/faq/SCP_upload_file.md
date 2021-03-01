---

title: "本地Linux主机使用SCP上传文件到Linux云服务器"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 120
draft: false
enableToc: false
---



**操作场景**

本节介绍本地Linux主机通过SCP向Linux云服务器传输文件的操作步骤。

**操作步骤**

**上传文件**

在本地Linux操作系统主机上执行以下命令，传输文件到Linux操作系统云服务器。

```
scp 本地主机文件地址 用户名@弹性公网IP:云服务器文件地址

例如：将本地文件 /test.txt 上传至弹性公网IP地址为139.198.x.x的云服务器对应目录下，命令如下：

scp /test.txt root@139.198.x.x:/home

根据提示输入登录密码，即可完成上传。
```

**下载文件**

在本地Linux操作系统主机上执行以下命令，下载云服务器上的文件到本地主机。

```
scp 用户名@弹性公网IP:云服务器文件地址 本地主机文件地址

例如，将弹性公网IP地址为139.198.x.x的云服务器文件/test.txt 下载至本地对应目录下，命令如下：

scp root@139.198.x.x:/test.txt /home

根据提示输入登录密码，即可完成文件下载。
```

