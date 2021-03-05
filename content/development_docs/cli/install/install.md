---
title: "CLI安装"
description: test
draft: false
---



qingcloud-cli 是管理青云资源的命令行接口 (_Command Line Interface_)， 可以通过它对资源进行查看、创建和操作。目前支持 Linux, Mac 及 Windows。 当前最新版本是 1.0.1

警告

qingcloud-cli 的使用受 API 访问配额的限制，具体请查看 [_概述_](../../../api/overview/) 中的 “API 请求配额限制”

## 安装

前提条件：系统已经安装 [python](https://www.python.org/downloads/) 和 [pip](https://pip.pypa.io/en/latest/installing.html)

然后便可通过 pip 安装 cli:

```
$ pip install qingcloud-cli
```

如果不是在 virtualenv 上安装，则需要 sudo

```
$ sudo pip install qingcloud-cli
```

如果你已安装 qingcloud-cli 并需要更新到最新版本，则可以:

```
$ pip install --upgrade qingcloud-cli
```

