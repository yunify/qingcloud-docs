---
title: "DNAT 规则 FAQ"
descriptipn: 介绍 DNAT 相关常见问题。
draft: false
weight: 5
keyword: QingCloud, 云计算, 青云, NAT网关, DNAT, 常见问题
---

## DNAT 规则中，公网端口可以使用 80 及 443 端口吗？

若您需要开放 80/443 端口，必须先进行 ICP 备案才可使用。在此之前，80/443 端口的服务将被禁用。更多备案详情请参见[备案常见问题](https://beian.qingcloud.com/icp)。

## MongoDB 节点能否使用 DNAT 功能或 VPC 端口转发功能进行访问？

MongoDB 及 Redis Cluster 集群不宜使用 DNAT 端口转发方式进行访问，因 MongoDB 及 Redis Cluster 通常使用集群模式进行连接，若您使用端口转发方式进行连接，集群节点会直接读取转发的配置去访问其它节点，导致访问超时。

若您有此需求，可通过 VPC 网络的 [VPN 功能](/network/vpc/manual/vpn/)进行访问。

