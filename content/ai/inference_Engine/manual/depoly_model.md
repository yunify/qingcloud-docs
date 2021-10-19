---
title: "部署模型"
description: test
weight: 10
draft: false
---

Inference Engine 中各节点的本地磁盘、私有对象存储 MinIO 、QingStor 对象存储中均内置了两个模型，默认加载的是 saved_model_half_plus_two_mkl：

- Tensorflow 官方演示模型 saved_model_half_plus_two_mkl
- resnet

用户可以通过修改 model.name 配置参数切换到其他模型。如果用户需要加载自己的模型，步骤如下：

- 上传模型到对象存储相应 bucket 比如 s3://models , 或者模型服务节点本地磁盘的 /data/models 目录

- 修改 models.name 参数为上传的模型目录名

  > **说明**
  >
  > 上传目录到对象存储通过 [s3cmd](https://docs.min.io/docs/s3cmd-with-minio.html) 命令，如下命令将本地的文件夹 /data/models/resnet 同步到 s3://models/ 目录下
  >
  > ```s3cmd sync /data/models/resnet s3://models/ ```

