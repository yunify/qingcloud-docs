---
title: "Deep Learning 性能测试"
description: test
weight: 40
draft: false
---

为了让用户快速了解深度学习平台的性能指标以便于选择，我们使用 TensorFlow [性能测试代码](https://github.com/tensorflow/benchmarks)中的 CNN Benchmark ，对常用硬件配置组合进行了测试。
我们选择 ResNet-50 模型，调用 Python 3.6 + TensorFlow 1.7.0 环境，使用合成数据进行测试。

青云深度学习平台性能测试表

| 运行环境      | CPU             | Memory | GPU  | BatchSize | 项目 | Images/Sec (step time) |
| ------------- | --------------- | ------ | ---- | --------- | ---- | ---------------------- |
| CUDA 9.1      | 8核(默认)       | 32G    | 1    | 64        | 训练 | 199.09 (5.02ms)        |
| CUDA 9.1      | 8核(默认)       | 32G    | 1    | 64        | 推理 | 632.51 (1.58ms)        |
| CUDA 9.1      | 8核(默认)       | 32G    | 2    | 64        | 训练 | 382.38 (2.62ms)        |
| CUDA 9.1      | 8核(默认)       | 32G    | 2    | 64        | 推理 | 1102.66 (0.91ms)       |
| CPU (无优化)  | 8核(默认)       | 32G    | 0    | 32        | 训练 | 1.91 (523.56ms)        |
| CPU (无优化)  | 8核(默认)       | 32G    | 0    | 32        | 推理 | 8.36 (119.62ms)        |
| CPU (无优化)  | 16核(默认)      | 32G    | 0    | 32        | 训练 | 2.62 (381.68ms)        |
| CPU (无优化)  | 16核(默认)      | 32G    | 0    | 32        | 推理 | 11.44 (87.41ms)        |
| CPU (MKL优化) | 8核(Broadwell)  | 32G    | 0    | 32        | 训练 | 12.55 (79.68ms)        |
| CPU (MKL优化) | 8核(Broadwell)  | 32G    | 0    | 32        | 推理 | 37.78 (26.47ms)        |
| CPU (MKL优化) | 16核(Broadwell) | 32G    | 0    | 32        | 训练 | 16.15 (61.92ms)        |
| CPU (MKL优化) | 16核(Broadwell) | 32G    | 0    | 32        | 推理 | 48.65 (20.55ms)        |

TensorFlow 官方性能测试情况，请参见
[官方GPU版性能测试](https://www.tensorflow.org/performance/benchmarks)
[官方CPU版性能测试](https://www.tensorflow.org/performance/performance_guide#optimizing_for_cpu)

> <span style="color:red">为了便于用户对比，我们选择和官方各项测试接近的硬件配置和相同的 BatchSize 。</span>

> <span style="color:red">因为 CPU 无优化版本仅支持 NHWC 数据格式，所以除了 CPU (无优化版)测试，其他测试中使用的数据格式均为 NCHW 。</span>

> <span style="color:red">CPU 版本测试中，使用常用优化方式，设置 intra_op 等于物理核个数， inter_op 为 1， kmp_blocktime 为 30（对本测试用例的 ResNet-50 模型和 BatchSize 32，适用该值，其他任务需要依据实际情况调整）。参考[CPU 优化参考](https://www.tensorflow.org/performance/performance_guide#optimizing_for_cpu)</span>。
