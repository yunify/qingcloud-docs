---
title: "inodes被占满"
date: 2020-01-30T00:38:25+09:00
description: Test description
weight: 50
draft: false
enableToc: false
---
## 什么是inode?

Linux系统下文件数据储存在"块"中，而文件的元信息，例如文件的创建者、文件的创建日期、文件的大小等都存储在索引中，这个索引叫做inode。inode也占用硬盘空间，硬盘格式化的时候，操作系统自动将硬盘分成两个区域。一个是数据区，存放文件数据；另一个是inode区（inode table），存放inode所包含的信息。

## inode占满

inodes使用完与存储空间使用完相似，都是创建不了文件或无法正常执行一些命令。若发现磁盘空间还有，但无法创建文件，可以排查下是否是inode空间占满导致。

执行df  -i命令，可以查询inode的使用情况。

```shelll
df -i
```

![](../../../../_images/inodes_1.png)

或者在平台的云服务器详情页中可以看到 inode的监控。

![](../../../../_images/inodes_2.png)

## inodes占满的解决方法

### 1)分析占用数量多的目录

执行下述指令，分析根目录下的每个二级目录下有多少个文件。然后逐层进入inode占用最高的目录，继续执行指令，逐步定位占用过高空间的文件或目录。

```shell
for i in /*; do echo $i; find $i | wc -l; done
```

![](../../../../_images/inodes_3.png)

### 2)删除文件

定位到相应目录后，可以执行 find -exec命令，来删除无用的临时文件。/list 填写相应目录。

```shell
find /list -type f -exec rm {} \;
```

除了无用的临时文件，0字节的文件也会占用inode，应该也释放，使用以下命令遍历寻找0字节的文件，并删除。

```shell
find /list -type f -size 0 -exec rm {} \;
```

或者使用 xargs 命令删除大量小文件：

```shell
cd /list
ls | xargs rm -f
```

