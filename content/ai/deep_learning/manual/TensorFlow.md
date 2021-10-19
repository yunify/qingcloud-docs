---

title: "TensorFlow 使用指南"
description: test
weight: 30
draft: false
---

TensorFlow 是一个端到端开源机器学习平台。它拥有一个全面而灵活的生态系统，其中包含各种工具、库和社区资源，可助力研究人员推动先进机器学习技术的发展，并使开发者能够轻松地构建和部署由机器学习提供支持的应用。

## 单机

测试用例为：~/test/tensorflow/mnist.py，进入容器后运行命令如下:

```shell
cd ~/test/tensorflow
python mnist.py
```

### 单任务使用双 GPU

```shell
wget https://github.com/QingCloudAppcenter/DeepLearning/raw/master/examples/tensorflow_multi_gpu_test.py
python tensorflow_multi_gpu_test.py
```

<img src="../../_images/multip-gpu-tf.png" style="zoom:60%;" />

### 多任务共享单 GPU

单 GPU 多任务共享方式，一般适用于 GPU 和显存需求不高的场景，同时启动多个容器分别运行一个任务，通过指定显存占用量的方式，实现多个任务共享 GPU 和显存。

以 TensorFlow 为例，只需要将任务的 Session 启动参数修改为指定的 Fraction 值(例如 0.4 )，即可限定该 Session 占用最多40%的显存。

```shell
gpu_options = tf.GPUOptions(per_process_gpu_memory_fraction=0.4)
sess = tf.Session(config=tf.ConfigProto(gpu_options=gpu_options))
```

> **说明**
>
> 多任务共享 GPU 方式，用户需要根据训练任务的运算量和数据量大小，选择运行任务的个数，以及每个任务的显存占用比例。

### 多任务分别运行于指定 GPU

如果主机有多个 GPU，TensorFlow 默认全部使用。如果想指定任务只使用指定 GPU，可以设置 CUDA_VISIBLE_DEVICES。

1. 任务1运行在第一块 GPU 上（ GPU 编号为0）。

   ```shell
   CUDA_VISIBLE_DEVICES=0 python mnist.py
   ```

   ![](../../_images/use_gpu0.png)

2. 任务2运行在第二块 GPU 上（ GPU 编号为1）。

   ```shell
   CUDA_VISIBLE_DEVICES=1 python mnist.py
   ```

   ![](../../_images/use_gpu1.png)

### 分布式

增加节点，在线扩容。在详情页点击**新增节点**按钮，可以对每个新增节点指定 IP 或选择自动分配。

TensorFlow 分布式训练需要指定 parameter server 和 worker 的 IP 地址和端口号（根据自己的 IP 进行修改）

#### 跨区分布式

青云深度学习平台支持跨区分布式TensorFlow训练，首先使用IPSec或GRE方式，连通两个集群的路由器。参考[IPSec隧道](https://docs.qingcloud.com/product/network/ipsec)。如果是异地路由器，则要求两个路由器都有公网IP地址，并为公网IP分配足够的带宽，依据实际训练数据交互的带宽需求，调整带宽到合适的值。两个路由器连通之后，集群中的深度学习节点将会在不同的网段，例如 192.168.1.2 和 192.168.2.2 但是相互之间的连通性和在一个局域网没有差别，在进行 TensorFlow 分布式训练时，只需按照实际地址，指定分布式训练节点 IP 地址即可。

下面是一个 parameter server 和两个 worker 进行分布式训练的示例。

**节点 1**

- 启动 parameter server

  ```shell
  cd /root/test/tensorflow
  GRPC_POLL_STRATEGY=poll  python mnist_dist.py --ps_hosts=192.168.1.6:2221 --worker_hosts=192.168.1.6:2223,192.168.1.7:2223 --job_name=ps --task_index=0
  ```

- 启动第一个 worker

  ```shell
  cd /root/test/tensorflow
  GRPC_POLL_STRATEGY=poll  python mnist_dist.py --ps_hosts=192.168.1.6:2221 --worker_hosts=192.168.1.6:2223,192.168.1.7:2223 --job_name=worker --task_index=0
  ```

 **节点 2**

- 启动第二个 worker （**注意：是在第二个节点即新增节点上启动**）

  ```shell
  cd /root/test/tensorflow
  GRPC_POLL_STRATEGY=poll  python mnist_dist.py --ps_hosts=192.168.1.6:2221 --worker_hosts=192.168.1.6:2223,192.168.1.7:2223 --job_name=worker --task_index=1
  ```

#### TensorFlow 分布式训练过程

![](../../_images/tensorflowdist_start.png)

#### TensorFlow 分布式训练结果

<img src="../../_images/tensorflowdist_result.png" style="zoom:60%;" />

### 开启 TensorBoard 服务

TensorFlow 中的 TensorBoard 提供了训练过程中丰富的信息，默认端口号为 `6006`。在某一节点上启动一下命令：

```shell
tensorboard --logdir=./tflog/
```

#### TensorBoard 展示结果

<img src="../../_images/tensorboard_graph.png" style="zoom:60%;" />

您可以通过如下方式之一查看 TensorBoard UI：

- 如需在 TensorBoard 中显示相关信息，需要编写相关代码。TensorBoard 详细用法请参考 [Github TensorBoard](https://github.com/tensorflow/tensorboard) 页面。
- 通过公网访问，您需要先申请一个公网 IP 绑定在路由器上，在路由器上设置端口转发，同时打开防火墙相应的下行端口。
- 或参考[ VPN 隧道指南](https://docs.qingcloud.com/product/network/vpn#vpn) 配置 VPN，通过私网 IP 地址访问。
