---
title: "pip 安装 Python module 速度比较慢怎么办"
linkTitle: "pip 安装 Python module 速度比较慢"
description: 本小节主要介绍pip 安装 Python module 速度比较慢怎么办？
keyword: 人工智能，深度学习，Deep Learning，Python module，pip
weight: 40
collapsible: false
draft: false
---

建议更改 pip 源以提升安装速度，创建 /root/.pip/ 文件夹，新建 pip.conf 文件，文件内容为

```shell
[global]
timeout = 6000
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn
```
