---
title: "专业级云服务器"
date: 2020-01-30T00:40:25+09:00
description: Test description
draft: false
enableToc: false
weight: 20
keyword: 云服务器, QingCloud, 实例, 虚拟机
---

## GPU云服务器 g2

- 具备 GPU 加速计算能力的实例，可同时提供 GPU 和 CPU 计算资源，大幅提高机器学习及科学计算等大规模计算框架的运行速度，为搭建人工智能及高性能计算平台提供基础架构支持。主要应用场景包括人工智能深度学习、高性能计算、图形图像处理等领域。

  特点：

  - 两种GPU类型可选（NVIDIA Tesla P100、GEFORCE RTX 2080 Ti），专门为计算加速场景优化设计，可提供3584个并行计算核心，单精度浮点运算能力达9.3TFLOPS，双精度浮点运算能力达4.7TFLOPS。
  - CPU采用第二代英特尔®至强®金牌6240处理器，主频：2.6GHz，睿频最高可达3.9GHz
  - 配有全新的 Intel Advanced Vector Extension (AVX-512) 指令集，在深度学习的多种场景性能提升4倍
  - 处理器内存配比1:4
  - I/O优化
  - 支持 VPC 私有网络和基础网络
  - 系统盘支持企业级SSD硬盘，数据盘支持企业级SSD硬盘、容量型和企业级分布式 SAN



GPU云服务器 g2 包括的实例规格和性能指标如下：（内网带宽和显存待确定）

| 实例类型            | CPU  | 内存 | GPU                 | 内网带宽 |
| ------------------- | ---- | ---- | ------------------- | -------- |
| g2ntp100.4xlarge.r4 | 16核 | 64G  | 1*NVIDIA TESLA P100 | 6 Gbps   |
| g2ntp100.8xlarge.r4 | 32核 | 128G | 2*NVIDIA TESLA P100 | 12 Gbps  |

