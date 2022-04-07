---
title: "服务概述"
description: 介绍服务相关概念。
draft: false
keyword: 青云, QingCloud, 云计算, QKE, 服务
weight: 1
---

## 什么是服务

服务是将运行在一组 Pods 上的应用程序公开为网络服务的抽象方法。每一个服务后面都有很多对应的容器来提供支持，对外表现为一个单一访问接口。借助服务，应用可以方便的实现服务发现与负载均衡，并实现应用的零宕机升级。

服务有一个固定 IP 地址（在创建 QEK 集群时有一个 “Service 网段” 的设置，这个网段专门用于给服务分配 IP 地址），服务将访问它的流量转发给 Pod，具体转发给哪些 Pod 通过 Label 来选择，而且服务可以给这些 Pod 做负载均衡。

## 服务类型

Kubernetes 允许在您创建服务时，指定你所需要的服务类型。类型的取值及行为如下表说明。

| 服务类型     | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| ClusterIP    | 通过集群的内部 IP 暴露服务，即服务只能够在集群内部访问。 这也是默认的服务类型。<br/>当您的服务只需要在集群内部被访问时，请使用该类型。 |
| NodePort     | 在每个节点的 IP 上开放一个静态端口，通过静态端口对外暴露服务。`NodePort` 服务会路由到自动创建的 `ClusterIP` 服务。通过请求 `<节点 IP>:<节点端口>`，你可以从集群的外部访问一个 `NodePort` 服务。<br/><div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>注意</b><br/>除了测试以及非生产环境以外，不推荐在生产环境中直接通过集群节点对外甚至公网提供服务。从安全上考虑，使用该类型会直接暴露集群节点，容易受到攻击。</div> |
| LoadBalancer | 使用云提供商的负载均衡器向外部暴露服务。 外部负载均衡器可以将流量路由到自动创建的 `NodePort` 服务和 `ClusterIP` 服务上。<br/> `LoadBalancer`服务一般为需要暴露到公网的服务。 |
| externalName | 通过返回 `CNAME` 和对应值，可以将服务映射到 `externalName` 字段的内容（例如，`foo.bar.example.com`）。 无需创建任何类型代理。<div style="background-color: #D8ECDE; padding: 10px 24px; margin: 10px 0; border-left: 3px solid #00a971;"><b>说明</b><br/>需要使用 kube-dns 1.7 及以上版本或者 CoreDNS 0.0.8 及以上版本才能使用 `ExternalName` 类型。</div> |
| Headless     | Headless 服务即不需要 Cluster IP 的服务，可以在创建服务的时候指定 `spec.clusterIP=None`。<br/>Headless 服务包括两种类型：<ul><li>不指定 Selectors，但设置 externalName，通过 CNAME 记录处理</li><li>指定 Selectors，通过 DNS A 记录设置后端  Endpoints 列表</li></ul> |

