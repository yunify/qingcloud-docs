---
title: "使用模型"
description: test
weight: 20
draft: false
---

部署好模型后，即可通过调用 HTTP/GRPC API 来使用模型。和 HTTP 相比，GRPC 具有更好的性能，推荐使用 GRPC API .

- HTTP 推理 API 调用

  HTTP 推理 API 的格式为: 

  ```http://<Any Node IP>:8080/v1/models/<model name>:predict```

  比如内置的两个模型可以分别通过如下 HTTP API 进行调用：

  ```shell
  # saved_model_half_plus_two_mkl 的 HTTP API 调用方法
  curl -d '{"instances": [1.0, 2.0, 5.0]}' -X POST http://<Any Node IP>:8080/v1/models/saved_model_half_plus_two_mkl:predict
  
  # resnet 模型的 HTTP API 的格式
  curl -d '{"instances": ["b64":"<base64 encode picture>"]}' -X POST http://<Any Node IP>:8080/v1/models/resnet:predict 
  
  # 为了方便测试 resnet 的 HTTP API，可通过如下方式：
  cd /opt/app/test
  source tfserving_venv/bin/activate
  python resnet_client.py
  deactivate
  ```

- GRPC 推理 API 调用

  调用 GRPC API 通常需要自己编写 client 程序，可参考下面 resnet 的例子：

  ```shell
  # 调用 resnet 模型的 GRPC API，可通过如下方式：
  cd /opt/app/test
  source tfserving_venv/bin/activate
  python resnet_client_grpc.py
  deactivate
  ```


