---
title: "Caffe 使用指南"
description: test
weight: 20
draft: false
---

Caffe 支持 Python 接口，深度学习平台已经提供，目前不支持多机分布式训练，详情请见 [Caffe 文档](http://caffe.berkeleyvision.org/)。(企业版和入门版分别内置了不同版本的 Caffe ，基础版未内置 Caffe ，请依据硬件情况选择需要部署的版本。)

## caffe单机

### 企业版

```shell
cd /root/caffe-py3
./data/mnist/get_mnist.sh
./examples/mnist/create_mnist.sh
./build/tools/caffe train --solver=examples/mnist/lenet_solver.prototxt
```

### 入门版

```shell
cd /opt/caffe-py3
./data/mnist/get_mnist.sh
./examples/mnist/create_mnist.sh
./build/tools/caffe train --solver=examples/mnist/lenet_solver.prototxt
```

###  训练过程

<img src="../../_images/caffe_start.png" style="zoom:50%;" />

### 训练结果

<img src="../../_images/caffe_result.png" style="zoom:60%;" />

## PyCaffe 单机

```shell
cd /root/test/pycaffe
python mnist.py
```

### 训练过程

<img src="../../_images/pycaffe_start.png" style="zoom:60%;" />

### 训练结果

<img src="../../_images/pycaffe_result.png" style="zoom:60%;" />

### 单任务使用双 GPU

> **说明**
>
> PyCaffe 目前不支持多 GPU 训练，多 GPU 训练只能通过 [Caffe的C/C++途径实现](https://github.com/BVLC/caffe/blob/master/docs/multigpu.md)

```shell
cd ~/caffe && build/tools/caffe train --solver=models/bvlc_alexnet/solver.prototxt --gpu=0,1
```

![](../../_images/multip-gpu-caffe.png)
