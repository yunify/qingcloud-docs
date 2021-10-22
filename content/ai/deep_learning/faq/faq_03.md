---
title: "运行 GPU 版容器，为什么会出现错误 libcuda.so.1: cannot open shared object file: No such file or directory？"
linkTitle: "运行 GPU 版容器，为什么会出现错误 libcuda.so.1: cannot open shared object file: No such file or directory？"
date: 2021-02-16T10:08:56+09:00
description:
draft: false
weight: 10
---

该错误因容器无法加载 CUDA 的链接库，可能是两个原因导致的:

- 错误的使用 docker 命令启动容器，GPU 版本的镜像必须通过 nvidia-docker 启动；
- 在 CPU 主机上运行 GPU 版容器。
