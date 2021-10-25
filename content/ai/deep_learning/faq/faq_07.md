---
title: "pip 安装 Python module 速度比较慢怎么办"
linkTitle: "pip 安装 Python module 速度比较慢怎么办"
date: 2021-02-16T10:08:56+09:00
description:
draft: false
weight: 30
---

建议更改 pip 源以提升安装速度，创建 /root/.pip/ 文件夹，新建 pip.conf 文件，文件内容为

```shell
[global]
timeout = 6000
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn
```

