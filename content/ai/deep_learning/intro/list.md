---
title: "产品系列"
description: 本小节主要介绍 Deep Learning 产品系列。 
keywords: Deep Learning 产品系列和版本规格 
weight: 20
collapsible: false
draft: false
---

青云 QingCloud 深度学习平台全新升级，推出入门版、基础版、企业版三种版本，可应对不同场景对深度学习的需求。

## 系列介绍

| <span style="display:inline-block;width:60px">系列</span> | <span style="display:inline-block;width:80px">GPU型号</span> | <span style="display:inline-block;width:280px">系列说明</span> | <span style="display:inline-block;width:80px">支持区域</span> |
| :-------------------------------------------------------- | ------------------------------------------------------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| 入门版                                                    | -                                                            | 搭载第二代英特尔<sup>®</sup>至强<sup>®</sup> 可扩展处理器，通过 DL Boosting 的 VNNI 技术及 Intel 优化的深度学习框架（TensorFlow、Caffe、PyTorch 等），在图像分类、图像目标检测、自然语言处理、推荐系统及强化学习等深度学习的性能大幅提升。 | 所有区域                                                     |
| 基础版                                                    | AMD GPU                                                      | 入门版预装英特尔针对 CPU 优化过的 Caffe ( Intel 1.1 ) 、TensorFlow (1.12.0 )、Keras ( 2.2.4 )、PyTorch ( 1.1.0 ) 最新深度学习框架。面向企业级生产环境推出的双节点数据库版本，采用一主两从的高可用架构，提供数据库的高可用保障。 | -                                                            |
| 企业版                                                    | NVIDIA Tesla P100                                            | 面向金融级生产环境推出的三节点数据库版本，采用多主单写的三主节点架构，保证数据的强一致性，提供金融级可靠性。 | 上海1区、广东2区、北京3区                                    |


## 系列规格

不同的区域，不同系列对应不同的节点规格。
| <span style="display:inline-block;width:60px">系列</span> | <span style="display:inline-block;width:60px">版本</span> | <span style="display:inline-block;width:140px">节点规格</span> | <span style="display:inline-block;width:180px">存储空间</span> | <span style="display:inline-block;width:70px">节点数量</span> | <span style="display:inline-block;width:90px">支持区域</span> |
| :-------------------------------------------------------- | --------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 入门版                                                    | v2.0.1c                                                   | <li>8核16G <li>8核32G <li> 8核64G <li> 16核32G <li> 16核64G<li> 16核128G <li> 32核128G | 企业型 SSD 本地盘：10G~2000G<br />容量型云盘：10G~2000G<br />通用型 SSD 云盘：100G~20000G | 1～50                                                        | 所有区域                                                     |
| 基础版                                                    | v2.0a                                                     | -                                                            | -                                                            | -                                                            | -                                                            |
| 企业版                                                    | v1.3-cuda10.0                                             | 节点类型：超高性能型<br />CPU：4核、8核、12核核16核<br />内存：32G、48G 和 64G<br />GPU：1~2<br />GPU类型：0表示Tesla P100 | 10G~1000G                                                    | 1～4                                                         | 上海1区                                                      |
| 企业版                                                    | v2.0n-cuda9.1<br />v2.0n-cuda10.0                         | <li>16核64G1GPU<li>32核128G2GPU                              | 容量型云盘：10G~2000G<br />通用型 SSD 云盘：100G~20000G      | 1～8                                                         | 上海1区-A                                                    |

## 内置镜像

| <span style="display:inline-block;width:60px">系列</span> | 版本           | Python 版本 | <span style="display:inline-block;width:80px">加速库版本</span> | <span style="display:inline-block;width:200px">内置镜像</span> | <span style="display:inline-block;width:200px">描述</span> |
| --------------------------------------------------------- | :------------- | :---------: | :----------------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------------- |
| 入门版                                                    | v2.0.1c        |   2.7/3.6   | MKLDNN 0.18.0                                                | qingcloud/deeplearning:1.1-cpu-optimize                      | Intel CPU 优化，AVX/AVX2 指令集和 MKLDNN 库加速            |
| 基础版                                                    | v2.0a          |   2.7/3.6   | ROCm 2.6.22                                                  | qingcloud/deeplearning:1.1-rocm26                            | GPU 训练，ROCm 加速                                        |
| 企业版                                                    | v2.0n-cuda9.1  |   2.7/3.6   | CUDA 9.1                                                     | qingcloud/deeplearning:1.1-cu91-cudnn7.1                     | GPU 训练，CUDA 9.1 和 cuDNN 7.1 加速                       |
| 企业版                                                    | v2.0n-cuda10.0 |   2.7/3.6   | CUDA 10.0                                                    | qingcloud/deeplearning:1.1-cu10.0-cudnn7.6                   | GPU 训练，CUDA 10.0 和 cuDNN 7.6 加速                      |

为满足用户对不同 Deep Learning 框架版本、Python 版本和 CUDA 版本的需求，青云深度学习平台提供了匹配不同版本的多个 [docker image](https://hub.docker.com/u/qingcloud/)，用户可依据需要拉取，多个版本的 docker image 以及获取命令见 [image 获取命令](#docker_images_pulls)。

