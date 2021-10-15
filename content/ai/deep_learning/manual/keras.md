---

title: "Keras 使用指南"
description: test
weight: 50
draft: false
---

Keras 默认使用 TensorFlow 来计算，目前青云平台上也只支持 TensorFlow 作为其计算框架。详情请见 [Keras 文档](https://keras.io/)。

## 单机

```shell
cd /root/test/keras
python mnist.py
```

### 训练过程

![](../../_images/keras_start.png)

### 训练结果

![](../../_images/keras_result.png)

### 单任务使用双 GPU 训练

```shell
wget https://github.com/QingCloudAppcenter/DeepLearning/raw/master/examples/keras_multi_gpu_test.py
pip install pytest six
python keras_multi_gpu_test.py
```

<img src="../../_images/multip-gpu-keras.png" style="zoom:60%;" />
