---
title: "产品动态"
collapsible: false
weight: 10

product:
    - time: 2019-07-17
      title: 支持公网 IPv6 申请，并绑定到负载均衡器或主机
      content: 青云 QingCloud 支持两种 IPv6 连接公网的方案，第一种是通过 VPC 的双栈网络 DHCP 获取到 IPv6 地址，然后通过控制台为 IPv6 分配公网带宽的方式。第二种是您可以申请一个 IPv6 弹性公网 IP，并绑定到云服务器或者负载均衡器上。两种方式最大的区别在于：通过 VPC DHCP 获取的 IPv6 地址，在接入公网后，同时具备公网和 VPC 内网的访问能力；手动申请的 IPv6 地址只具有公网能力，无法与VPC内部的 IPv6 互通，逻辑与内网的 IPv4 是无法访问公网IPv4类似。您可以根据自己的网络需求和偏好进行选择。
      url: /network/eip/quickstart/ipv6_quick_start/

    - time: 2018-06-02
      title: 公网 IP 支持多可用区绑定
      content: 同一个公网 IP 地址可绑定到多可用区中的任意一台主机，当业务需要从一个可用区迁移到其他可用区时，服务端主机快速替换，IP地址保持不变，以快速迁移生产环境。
      url: /network/eip/manual/ipv4/outband_ipv4/#为云服务器绑定公网-ip

---

