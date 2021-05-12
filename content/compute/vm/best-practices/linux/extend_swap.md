---
title: "扩容swap大小"
description: test
draft: false
---

### 第1步：在根目录下新建一个文件夹swap
```
mkdir /swap
```
### 第2步：使用dd命令生成一个空文件, 给swap划分一块4G大小的空间
```
cd /swap
dd if=/dev/zero of=swap.img bs=1M count=4096
```
### 第3步：使用mkswap命令将生成的空文件格式化为swap格式
```
mkswap swap.img
```
### 第4步: 激活swap
```
swapon swap.img
```
### 第5步：执行free -m查看
```
free -m
            total     used      free      shared  buff/cache   available
Mem:        990       110       68         6        811         728
Swap:       5119      0         5119
```
### 第6步：并将分区信息写入/etc/fstab, 添加如下信息
```
vi /etc/fstab
  /swap/swap.img swap swap defaults 0 0
```

