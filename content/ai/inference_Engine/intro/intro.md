---
title: "什么是推理引擎"
description: 
draft: false
enableToc: false
weight: 10
keyword: 
---

## 产品介绍

训练和推理是机器/深度学习的两个重要组成部分。用户利用加速器 ( CPU/GPU/FPGA) 通过各种深度学习框架如 Tensorflow, PyTorch 等训练好模型后，将模型部署到生产环境、管理模型版本并提供 API 用于推理，是机器/深度学习产生价值的不可或缺的环节。

一个成熟的推理产品除了要支持多种推理框架、多种加速器（CPU/GPU）之外，还需要支持诸如推理 API (HTTP/GPRC) 负载均衡、模型上传、模型存储、模型部署、水平/垂直伸缩、推理引擎日志/推理 API 访问日志查看等诸多功能。

## 基本架构

![](../../_images/architecture.jpeg)

如上图所示，Inference Engine 推理引擎 由三种角色构成：

- 边缘代理/负载均衡器 ( Edge Proxy & Load Balancing ) : 采用云原生技术栈里的 Envoy 用作边缘代理和负载均衡器

- 模型服务 ( Model Serving ) : 加载模型并提供 HTTP/GRPC 推理服务的引擎，这里以 Tensorflow Serving 举例

- 模型库 ( Model Repo ) : 用于存储训练好的模型。用户既可以使用能私有部署、适用于私有云等不能访问外网环境并且兼容 S3 协议的私有对象存储 MinIO，也可以使用公有云兼容 S3 协议的对象存储比如 QingStor 对象存储， 来存储模型并供模型服务加载。此外，用户也可以上传模型到模型服务节点本地磁盘相应目录，并加载到 Tensorflow Serving，用做单节点试验用。

  > **注意**
  >
  > 需要注意的是 Inference Engine 虽然包含三种角色，但部署时只有模型服务 ( Model Serving ) 和模型库 ( Model Repo ) 两种类型的节点，在这两种类型的每个节点中都会包含 Envoy 用作边缘代理和负载均衡的用途。所以用户的推理请求可以发送到两种类型的任一节点，该节点的 Envoy 会将其负载均衡的分发到所有模型服务节点

