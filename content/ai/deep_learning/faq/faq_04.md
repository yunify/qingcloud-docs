---
title: "容器启动后，目录 /root 下可能存在 test/ caffe/ opencv/ nccl/ 等文件夹，可以删除吗？"
linkTitle: "容器启动后，目录 /root 下可能存在 test/ caffe/ opencv/ nccl/ 等文件夹，可以删除吗？"
date: 2021-02-16T10:08:56+09:00
description:
draft: false
weight: 15
---

- test/ 存放当前镜像中的 Deep Learning 框架的测试文件，若不需测试可删除。
- caffe/ opencv/ nccl/ 为镜像制作过程中的中间文件，镜像中已经编译安装 caffe, opencv, nccl，不建议删除。
