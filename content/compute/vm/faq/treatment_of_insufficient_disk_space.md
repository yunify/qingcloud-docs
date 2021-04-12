---
title: "云服务器磁盘空间容量不足处理"
description: Test description
weight: 50
draft: false
enableToc: false
---
# 问题现象

用户使用云服务器时，往往会遇到磁盘使用空间占满导致业务无法正常运行。

# 处理方法

遇到磁盘空间不足的报错时候，首先使用df -h查看磁盘空间使用情况。

```sehll
df -h
```

![](../_images/disk_space1.jpg) 

查看容量用尽的目录，进入到相应的目录中，此处以根目录为例，执行du -h --max-depth=1命令。

```shell
cd /
du -h --max-depth=1
```

![](../_images/disk_space1.jpg) 

定位到占用空间大的目录后，进入到相应的目录，继续执行 du  -h --max-depth=1命令。

```shell
du  -h --max-depth=1
```

通过逐层定位，最后找出占用大空间的文件，再结合业务需要，看是否有可以删除的文件，若无可删除的文件，则可以考虑扩容磁盘。

