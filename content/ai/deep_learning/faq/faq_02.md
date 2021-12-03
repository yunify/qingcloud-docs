---
title: "为什么在 import tensorflow 的时候，提示 no module named tensorflow？"
linkTitle: "import tensorflow 提示 no module named tensorflow？"
description: 本小节主要介绍为什么在 import tensorflow 的时候，提示 no module named tensorflow？。 
keyword: 人工智能，深度学习，Deep Learning，import tensorflow，no module named tensorflow
weight: 15
collapsible: false
draft: false
---

由于容器中可能存在多个版本的 Python(2.7,3.5,3.6)，若使用的当前镜像的名称类似 tensorflow1.8-py36-cu91-cudnn7.1，则表示 TensorFlow 安装在 Python3.6 的包目录下，应该使用 Python3.6 运行，总之，应根据镜像名字运行对相应版本的 Python。

GPU 版和 CPU 版的宿主机中预装一个默认的镜像，它使用的是 Python2.7，则只能通过2.7版本的 Python 运行。
