---
title: "部署方式"
description: 本小节主要介绍 Inference Engine的三种部署方式。 
weight: 20
collapsible: false
draft: false
---

Inference Engine 有 3 种部署方式。

- 单模型服务节点 + 本地模型存储
- 多模型服务节点 + 私有对象存储模型库 ( MinIO 对象存储 )
- 多模型服务节点 + 公有云对象存储模型库  ( QingStor 对象存储或其他兼容 S3 协议的公有云对象存储)

> **说明**
>
> 3 种部署方式部署的各种角色的节点均可通过 ```root``` 或 ```ubuntu``` 用户以密码 ```p12cHANgepwD``` 访问

### 单模型服务节点 + 本地模型存储

本部署方式只部署一个模型服务节点，模型保存在该模型服务节点的本地系统盘，无需部署模型库节点。

仅适用于试验性用途或者低访问量的情况。

- 服务详情

  ![](../../_images/1.1-single_node.png)

- 模型存储

  模型存储在模型服务节点的 /data/models 目录下，内置了 resnet 和 Tensorflow 官方演示模型 saved_model_half_plus_two_mkl 两个模型

  ![本地模型存储](../../_images/1.1.1-models.png)

- 服务配置

  此种部署方式需要将配置参数的 s3.type 设为 none

  ![](../../_images/1.1.2-single_node_config.png)

### 多模型服务节点 + 私有对象存储模型库

本部署方式部署多个模型服务节点以及一个模型库节点，模型保存在模型库节点的 MinIO 对象存储中。

适用于无法访问公网的私有云部署或没有公有云对象存储访问权限的场景。

- 服务详情

  ![多服务节点+模型存储库](../../_images/1.2-with_modelrepo.png)

- 模型存储

  模型保存在 MinIO 对象存储中，MinIO 对象存储的模型存储路径为 /data/minio/data/models 目录，内置了 resnet 和 Tensorflow 官方演示模型 saved_model_half_plus_two 两个模型。可以直接用 linux 文件系统命令将模型拷贝到 MinIO 的模型存储目录中，也可以使用 s3cmd 来管理 MinIO 中的数据，用法详见 [s3cmd 命令详解](https://docs.min.io/docs/s3cmd-with-minio.html) 。

  ![模型存储库](../../_images/1.2.2-models.png)

- 服务配置

  此种部署方式需要将配置参数的 s3.type 设为 minio

  > **注意**
  >
  > MinIO 的 access key 默认为 `AKIAIOSXODNN7EXAMPLE` 
  >
  > ​                        secret key 默认为 `wJalrXUtqFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`
  >
  > ​		二者均可以通过配置参数 s3.access.key 和 s3.secret.key 设为用户自定义的 key

  ![服务配置](../../_images/1.2.1-with_modelrepo_config.png)

### 多模型服务节点 + 公有云对象存储模型库

本部署方式部署多个模型服务节点，本地不部署模型库节点，模型保存在 QingStor 对象存储模型库中。

适用于可以访问公网，并有公有云对象存储访问权限的场景，模型存储成本相对较低。

- 服务详情

  ![多服务节点+公有云对象存储](../../_images/1.3.1-qingstor.png)

- 模型存储

  模型保存在公有云对象存储中，比如模型放在 QingStor 对象存储的 Bucket  `models` 中，则模型库根目录就要设为 s3://models 

  > **说明**
  >
  > s3://models 为青云公开的模型存储库，s3://datasets 为青云公开的数据集
  >
  > 任何青云用户都可以用自己的 key 访问，或者直接访问url 比如 http://datasets.pek3b.qingstor.com/test/cat.jpg

  ![模型存储库](/../../_images/1.3.3-qingstor-bucket1.png)

  ![模型存储库](../../_images/1.3.3-qingstor-bucket2.png)

  ![模型存储库](../../_images/1.3.3-qingstor-bucket3.png)

- 服务配置

  此种部署方式需要将配置参数的 s3.type 设为 QingStor , 并更改相应的 access/secret key 为自己的 key

  ![服务配置](../../_images/1.3.2-qingstor-config.png)

> **说明**
>
> s3.type 设为 QingStor 并设置相应的 key 后, QingStor 对象存储也可以用 s3cmd 访问，用法详见 [s3cmd 命令详解](https://docs.min.io/docs/s3cmd-with-minio.html) 。
>
> ![s2cmd](../../_images/1.3.4-qingstor-s3cmd.png)



