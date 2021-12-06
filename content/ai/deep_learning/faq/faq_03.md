---
title: "运行 GPU 版容器，提示错误 libcuda.so.1"
linkTitle: "运行 GPU 版容器，错误 libcuda.so.1"
description: 本小节主要介绍运行 GPU 版容器，错误 libcuda.so.1。 
keyword: 人工智能，深度学习，Deep Learning，GPU 版容器，错误 libcuda.so.1
weight: 20
collapsible: false
draft: false
---

## 问题现象

运行 GPU 版容器，提示错误 libcuda.so.1: cannot open shared object file: No such file or directory？

## 解决办法

该错误因容器无法加载 CUDA 的链接库，可能是两个原因导致的:

- 错误的使用 docker 命令启动容器，GPU 版本的镜像必须通过 nvidia-docker 启动；
- 在 CPU 主机上运行 GPU 版容器。
