---
title: "负载均衡"
description: test
weight: 50
draft: false
---

Inference Engine 的负载均衡由云原生技术 Envoy 实现，其每种角色的每个节点均运行着有着相同配置的 Envoy，因此用户的推理请求可发送到到任意节点，Envoy 将会把该节点收到的 HTTP/GRPC 推理请求负载均衡的转发到模型服务的各节点。Envoy 的配置可通过在浏览器中输入 ```<Node IP>:8001```访问：

- 访问 ```<Node IP>:8001``` 可查看 Envoy 的所有配置情况

  ![envoy_config](../../_images/6-envoy_mgmt.png)

- 访问 ```<Node IP>:8001/clusters``` 可以看到 envoy 后面具体由哪些模型服务节点提供推理服务，下图是一个由 3 个模型服务节点组成的集群

  ![envoy_config_clusters](../../_images/6-envoy_clusters.png)
