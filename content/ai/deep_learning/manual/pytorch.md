---
title: "PyTorch 使用指南"
description: test
weight: 30
draft: false
---

完整信息请见 [PyTorch文档](http://pytorch.org/)

## 单机

```shell
cd /home/ubuntu/test/pytorch
python mnist.py
```

### PyTorch 训练过程

![PyTorch 训练过程](../_images/pytorch_start.png)

### PyTorch 训练结果

![PyTorch 训练结果](../../_images/pytorch_result.png)

### 单任务使用双 GPU

##### 非容器版

```shell
wget https://github.com/QingCloudAppcenter/DeepLearning/raw/master/examples/pytorch_multi_gpu_test.py
python pytorch_multi_gpu_test.py
```

##### 容器版

```shell
cd /root/test/pytorch && python pytorch_multi_gpu_test.py
```

![Alt text](../_images/multip-gpu-pytorch.png)

> **说明**
>
> 若出现类似错误：Unexpected end of /proc/mounts line *，是[NVIDIA 驱动的问题](https://devtalk.nvidia.com/default/topic/1027077/container-pytorch/-quot-unexpected-end-of-proc-mounts-line-overlay-quot-on-p3-8xlarge/)，对运行结果无影响。

### 分布式

> **说明**
>
> PyTorch 分布式训练时，由于当前版本的 PyTorch 尚未支持 CPU 分布式训练，请选择 GPU 版本进行分布式训练。

**节点 1**

```shell
cd /home/ubuntu/test/pytorch
python mnist_dist.py
```

**节点 2**

```shell
cd /home/ubuntu/test/pytorch
python mnist_dist.py
```

**PyTorch 分布式训练过程**

![PyTorch 分布式训练过程](../_images/pytorchdist_start.png)

**PyTorch 分布式训练结果**

![PyTorch 分布式训练结果](../_images/pytorchdist_result.png)

跨区分布式：青云深度学习平台支持跨区分布式 PyTorch 训练，首先使用 IPSec 或 GRE 方式，连通两个集群的路由器。参考[IPSec隧道](https://docs.qingcloud.com/product/network/ipsec)。如果是异地路由器，则要求两个路由器都有公网 IP 地址，并为公网 IP 分配足够的带宽，依据实际训练数据交互的带宽需求，调整带宽到合适的值。两个路由器连通之后，集群中的深度学习节点将会在不同的网段，例如 192.168.1.2 和 192.168.2.2，但是相互之间的连通性和在一个局域网没有差别。

进行 Pytorch 分布式训练时，需要在分布式参数中指定 init_method 为 env 方式，参考代码[pytorch_mnist_dist.py](https://github.com/QingCloudAppcenter/DeepLearning/raw/master/examples/pytorch_multi_gpu_test.py)下载。以一台主机和一台从机为例，在两区节点都下载好分布式训练文件之后，启动命令如下：

**主机 (IP: 192.168.1.2)**

```shell
wget https://github.com/QingCloudAppcenter/DeepLearning/raw/master/examples/pytorch_multi_gpu_test.py
python pytorch_mnist_dist.py --master-addr 192.168.1.2 --rank 0
```

**从机 (IP:192.168.2.2)**

```shell
wget https://github.com/QingCloudAppcenter/DeepLearning/raw/master/examples/pytorch_multi_gpu_test.py
python pytorch_mnist_dist.py --master-addr 192.168.1.2 --rank 1
```

实际使用中，依据实际情况调整 world_size ， master_addr 和 master_port 等参数。
