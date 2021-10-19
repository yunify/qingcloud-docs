---
title: "深度学习平台使用指南"
description: test
weight: 10
draft: false
---

## 前提条件

- 已登陆云服务器。

- 已经获得运行 docker 的权限。

  可以在每条命令之前使用 sudo ，也可以获得 root 用户的执行权限运行 docker。

  ```
  sudo su
  ```

## 操作步骤

1. 远程登陆深度学习平台，进入该界面。

   ![](../../_images/caffe_login.png)

2. 启动环境。

   1. 入门版

      ```python
      sudo docker run -it --rm --name CONTAIN_NAME -p HOST_PORT:CONTAIN_PORT \
      -v HOST_VOLUME:CONTAIN_VOLUME --net YOUR_DOCKER_NET --ip SPECIFIC_IP --expose=EXPOSED_PORTS \
      qingcloud/deeplearning:1.1-cpu /bin/bash
      ```

   2. 基础版

      ```python
      drun -it --rm --name CONTAIN_NAME -p HOST_PORT:CONTAIN_PORT \
      -v HOST_VOLUME:CONTAIN_VOLUME --net YOUR_DOCKER_NET --ip SPECIFIC_IP --expose=EXPOSED_PORTS \
      qingcloud/deeplearning:1.1-rocm26 /bin/bash
      ```

   3. 企业版

      ```python
      sudo nvidia-docker run -it --rm --name CONTAIN_NAME -p HOST_PORT:CONTAIN_PORT \
      -v HOST_VOLUME:CONTAIN_VOLUME --net YOUR_DOCKER_NET --ip SPECIFIC_IP --expose=EXPOSED_PORTS \
      qingcloud/deeplearning:1.1-cu91-cudnn7.1 /bin/bash
      ```

3. 查看容器名字、容器 IP 地址、端口映射。

   ```python
   sudo docker inspect your_contain_id | grep -i IPAddress
   ```

4. 启动训练操作。

   1. 单机训练启动。

      使用内置镜像 qingcloud/deeplearning:1.1-cu91-cudnn7.1 启动容器，并且通过 -v 参数挂载测试用例，测试用例在宿主机 /home/ubuntu/test 目录，若用户在容器启动时未挂载测试用例，则可以从[这里下载](https://github.com/QingCloudAppcenter/DeepLearning/tree/master/test)。

      ```python
      sudo nvidia-docker run -it --rm --name test -p 8888:8888 -p 6006:6006 -v /home/ubuntu/test:/root/test qingcloud/deeplearning:1.1-cu91-cudnn7.1 /bin/bash
      ```

   2. 分布式训练启动。

      容器版分布式训练，需要设置容器共享主机网络。这里采用两台主机 node1:192.168.1.4，node2:192.168.1.5 进行实验，在 node1 和 node2 上各启动一个容器。

      ```python
      sudo nvidia-docker run -it --rm --name test01 -v /home/ubuntu/test:/root/test --net host qingcloud/deeplearning:1.1-cu91-cudnn7.1 /bin/bash
      ```

      > **说明**
      >
      > 网络模式采用 host 模式，容器共享主机网络，即容器的 IP 地址分别为：192.168.1.4和192.168.1.5

      
