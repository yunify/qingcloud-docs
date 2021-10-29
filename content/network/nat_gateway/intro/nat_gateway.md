---
title: "什么是 NAT 网关"
descriptipn: 青云NAT网关产品介绍
draft: false
weight: 1
keyword: QingCloud, 青云, NAT网关, NAT, SNAT, DNAT
---

NAT 网关 (Network Address Transmition Gateway) 是一个分布式的网络地址转换服务，可以为私有网络的主机提供复用公网 IP 的能力，用户的多个私有网络可以通过一个统一的 NAT 网关访问公网或提供互联网服务。

NAT 网关具备高达 10 Gbps 的转发能力以及 Region 级别的多活容灾能力，支持 SNAT 和 DNAT 功能：

- **SNAT 功能**

  创建 NAT 网关并为 NAT 网关绑定公网 IP 地址，然后通过 NAT 网关的 SNAT 功能，为 VPC 内无公网 IP 的云服务器提供访问公网的代理服务，实现 VPC 内的云服务器共享公网 IP，安全、高效的访问互联网，并可节省公网 IP 资源。

  ![snat_intro](../../_images/snat_intro.svg)

- **DNAT 功能**

  创建 NAT 网关并为 NAT 网关绑定公网 IP 地址，然后配置 DNAT 规则，实现 VPC 内无公网 IP 的云服务器通过 IP 映射或端口映射的方式提供互联网服务。

  >**说明**
  >
  >- 端口映射：NAT 网关会将指定协议和端口的公网 IP 请求转发到目标云服务器实例的指定协议和端口上。
  >- IP 映射：NAT 网关会将所有访问公网 IP 的请求都转发到目标云服务器实例上，目标云服务器实例也可以使用该公网 IP 主动访问公网。如果 NAT 网关既配置了DNAT IP 映射方式，又配置了 SNAT 条目，则云服务器实例会优先通过 DNAT IP 映射方式的公网 IP 访问公网。
  
  ![dnat_intro](../../_images/dnat_intro.svg)

