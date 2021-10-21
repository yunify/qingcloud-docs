---
title: "什么是深度学习平台"
description: 
draft: false
enableToc: false
weight: 10
keyword: 
---

本文档仅对应青云深度学习平台 2.0 版本。

## 深度学习简介

2016 年 AlphaGo 战胜李世石，预示我们进入了 AI 时代。深度学习是 AI 的核心技术，在图像分类，自然语言处理，无人驾驶等众多领域显示出了强大的能力，各大巨头纷纷投入巨资研发。语音助手，人脸识别，外文翻译等等，AI 已融入到了我们生活的方方面面，极大了促进了社会的发展。其中，Caffe、TensorFlow、Keras、PyTorch 是主流的深度学习框架，拥有强大的社区支持，是实践深度学习不可或缺的工具。

### Caffe

Caffe 是一个被广泛使用的深度学习框架，由 BVLC 开发。

Caffe 容易上手，训练速度快，组件模块化，并拥有大量训练好的经典模型。

Caffe 在 GPU 上训练的性能很好，但只能支持单机多 GPU 的训练，不支持分布式多机训练。

### TensorFlow

TensorFlow 由 Google 大脑主导开发，是一个分布式系统上的大规模深度学习框架。移植性好，可以运行在移动设备上，并支持分布式多机多卡训练，支持多种深度学习模型。

TensorFlow 还有功能强大的可视化组件 TensorBoard，能可视化网络结构和训练过程，对于观察复杂的网络结构和监控长时间、大规模的训练很有帮助。

### PyTorch

PyTorch 从 Torch 发展而来，并经过了大量改进，由 FaceBook AI 团队主导开发。

不同于 TensorFlow，PyTorch 采用动态计算图的方式，并提供良好的 Python 接口，代码简单灵活，使用起来非常方便。内存分配也经过了优化，能支持分布式多机训练。

### Keras

Keras 是一个高层神经网络 API，由 Python 编写，通过调用其他深度学习框架来进行计算，如 TensorFlow、 Theano 以及 CNTK。

 Keras 高度模块化，能快速搭建神经网络，并且非常容易上手。

## 青云深度学习平台

深度学习平台基于 Docker 容器技术，将主流的深度学习框架做成 docker 镜像的形式，用户无需为环境进行繁琐的配置，直接运行容器化的深度学习应用，即可迅速开展训练和预测任务，提高了用户的开发和部署效率。

青云深度学习平台提供入门版、基础版和企业版三个版本。其中，

- 企业版搭载 NVIDIA Tesla P100 GPU，在 docker 宿主机中安装 NVIDIA Driver(387.26/418.87)，nvidia-docker2，Docker(18.09.6)。
- 基础版搭载 AMD GPU，在 docker 宿主机中安装 ROCm 2.6.22，Docker(18.09.7)。
- 入门版 docker 宿主机上安装 Docker(18.09.6)，宿主机上预置了一个 docker 镜像，镜像中均安装 Caffe(1.0，基础版硬件不支持未内置)，TensorFlow(1.12.0/1.14.0)，Keras(2.2.4/2.3.1)，PyTorch(1.1.0/1.2.0) 框架。