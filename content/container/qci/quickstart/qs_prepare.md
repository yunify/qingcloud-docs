---
title: "准备工作"
description: 负载均衡器快速入门准备工作。
keyword: QCI,弹性容器实例,
draft: false
weight: 2
---

创建 QCI 实例前，您需要完成本文中的准备工作。

## 创建 VPC 网络

QCI 实例部署在 VPC 私有网络中，您需要提前创建好一个 VPC 网络并连接到私有网络。

具体操作，请参见[创建 VPC 网络](/network/vpc/manual/vpcnet/10_create_vpc/)。

## 创建公网 IP 并绑定 VPC

如果 QCI 实例需要从 Docker Hub 拉取镜像，或您需要 QCI 实例的容器服务能够被公网访问，则需要为 QCI 实例所属的 VPC 网络绑定公网 IP。

- 本操作中，QCI 实例需要从 Docker Hub 拉取公有镜像，因此需要为 VPC 网络绑定公网 IP，使 QCI 实例具备外网访问能力。
- 若果您的 QCI 实例需要提供公网服务，也需要为 QCI 实例所属的 VPC 网络绑定公网 IP。

<!--如果您需要通过公网访问 QCI 实例部署的容器应用，您也可以通过 VPC 网络的公网 IP 进行端口转发。-->

具体操作，请参见 [VPC 网络绑定公网 IP](/network/vpc/manual/vpcnet/26_bind_eip/)。

 <!--创建硬盘（可选）-->

<!--根据业务需求，若您需要将数据持久化存储起来，则需要创建硬盘，在创建 QCI 实例时进行挂载。硬盘的类型需要与 QCI 云服务器类型匹配，具体规则可以参考[常见问题](/container/qci/faq/faq/) 中的容器组机器类型与硬盘类型的匹配策略部分 。-->



