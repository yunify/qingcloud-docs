---
title: "容器启动后，root 目录下文件夹可以删除吗？"
linkTitle: "容器启动后，root 目录下文件夹可以删除吗？"
description: 本小节主要介绍容器启动后，目录 /root 下可能存在 test/ caffe/ opencv/ nccl/ 等文件夹，可以删除吗？
keyword: 人工智能，深度学习，Deep Learning，容器启动，root 目录下文件夹，test/ caffe/ opencv/ nccl/
weight: 25
collapsible: false
draft: false
---

容器启动后，目录 /root 下可能生成 test/ caffe/ opencv/ nccl/ 等文件夹。

- test/ 存放当前镜像中的 Deep Learning 框架的测试文件，若不需测试可删除。
- caffe/ opencv/ nccl/ 为镜像制作过程中的中间文件，镜像中已经编译安装 caffe, opencv, nccl，不建议删除。
