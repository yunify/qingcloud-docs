---
title: "准备工作"
description: 负载均衡器快速入门准备工作。
keyword: 负载均衡器,监听器,后端服务
draft: false
weight: 2
---

搭建负载均衡服务前，您需要根据业务需求规划负载均衡器实例的区域，并做好以下准备工作：

- **创建一个 VPC 网络**

  VPC 网络用于部署负载均衡器、后端云服务器。具体操作，请参考[创建 VPC 网络](/network/vpc/manual/vpcnet/10_create_vpc/)。

- **创建一个公网 IP**

  公网 IP 用于绑定负载均衡器实例。具体操作，请参考[创建公网 IP](/network/eip/manual/ipv4/outband_ipv4/#申请外部绑定的-ipv4-公网-ip)。

- **创建两台云服务器，并在云服务器搭建后端服务**

  使用云服务器作为负载均衡器的后端服务器。

  本教程以 HTTP 转发为例，在两台云服务器上（vm1 及 vm2）部署 Nginx 服务，并在 vm1 和 vm2 分别返回一个带有类似 “This is vm1!” 和 “This is vm2!” 的页面用于标识云服务器。

  具体操作，请参考[创建云服务器](/compute/vm/quickstart/create_vm/)和 [部署 Nginx](../centos_nginx/)。

  > **说明**
  >
  > 本操作中，云服务器需要创建并绑定公网 IP，作为本次示例中配置云服务器后端业务所需，用户实际使用时，需要根据自身业务规划确定云服务器是否绑定公网 IP。

