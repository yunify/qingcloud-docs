---
title: "为什么在 import tensorflow 的时候显示 no module named tensorflow？"
date: 2021-02-16T10:08:56+09:00
description:
draft: false
weight: 3
---

由于容器中可能存在多个版本的 Python(2.7, 3.5, 3.6)，若使用的当前镜像的名称类似 tensorflow1.8-py36-cu91-cudnn7.1，则表示 TensorFlow 安装在 Python 3.6 的包目录下，应该使用 Python 3.6 运行，总之，应根据镜像名字运行对相应版本的 Python 。新版本容器镜像同时安装有 Python 2.7 和 Python 3.6，分别使用 python/pip 和 python3/pip3 命令操作，使用和进行包配置时，请注意当前使用的 Python 版本。

