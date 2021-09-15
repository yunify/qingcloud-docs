---
title: "解决 df: no file systems processed"
date: 2020-05-14T17:08:56+09:00
description: test
draft: false
---

## 背景介绍

Linux 运维开发时，在使用 df 命令时，偶尔会遇到以下报错：

```
df: no file systems processed"
```
或者
```
“df：未处理文件系统”
```
## 解决方法

1. root 权限下，执行 `#cat /proc/mounts > /etc/mtab` 命令。

2. 让 /etc/mtab 与 /proc/mount 内容同步，然后再使用 `df -h` 就可以看到恢复正常了。