---
title: "性能测试"
description: test
weight: 40
draft: false
---

从下面的性能测试可以看出，全新推出的第二代 Intel 至强可扩展处理器 ( CascadeLake ) 因采用了 Intel DeepLearning Boost VNNI 技术，AI 推理性能和较老型号的 CPU Broadwell 相比有接近 100% 的提升。

> **说明**
>
> 目前第二代 Intel 至强可扩展处理器 ( CascadeLake ) 在 pek3 及 sh1 区各 zone 均有部署， 推荐在这两个区部署 Inference Engine 推理引擎。在其他区部署将使用较老型号的 CPU。

| 运行环境       | CPU               | Memory | GPU  | BatchSize | 分类 | Images/Sec(Step tIme) |
| -------------- | ----------------- | ------ | ---- | --------- | ---- | --------------------- |
| CPU (MKL 优化) | 16核(Broadwell)   | 32G    | 0    | 32        | 推理 | 48.65 (20.55ms)       |
| CPU (MKL 优化) | 16核(CascadeLake) | 32G    | 0    | 32        | 推理 | 88.95 (11.24ms)       |

