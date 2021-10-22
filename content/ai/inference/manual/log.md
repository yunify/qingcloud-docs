---
title: "查看日志"
description: test
weight: 30
draft: false
---

访问任意节点的 8090 端口可以查看 Tensorflow serving , Envoy 的运行日志，还可以浏览本地存储的模型。

```<Node IP>:8090```

![log2](../../_images/3-log2.png)

![log3](../../_images/3-log3.png)

![models](../../_images/3-models1.png)

##  推理引擎日志

推理引擎的日志保存在 ```tensorflow_serving.log``` 中。

##  推理 API 访问日志

打开配置参数中的 ```enable.access.log``` 开关后，将能查看推理 HTTP/GRPC API 的访问日志，可以看到每个推理请求由后端哪个节点处理，如果有多个模型服务节点，则将会看到推理请求会负载均衡的分配到各节点处理，该日志保存在推理请求访问节点的 ```envoy.log``` 中。

如下图所示 HTTP/GRPC 推理请求被负载均衡的分配到集群的 3 个模型服务节点中去：

![envoy.log](../../_images/5-accesslog.png)

