---
title: "NAT 网关"
linkTitle: "NAT 网关"
weight: 5
collapsible: true
type: "product"

section1:
  title: NAT网关
  vice_title: NAT 网关 (Network Address Transmition Gateway) 是一个分布式的网络地址转换服务，可以为私有网络的云服务器提供复用公网 IP 的能力，用户的多个私有网络可以通过一个统一的 NAT 网关访问公网或提供互联网服务。
 # video: "https://pek3b.qingstor.com/yunify-qingcloud-docs/video/qs_qingcloud_nat.mp4"
 # video_img: "/images/video.png"

section2:
  title: 用户指南
  children:
    - title: 产品简介
      content: 什么是 NAT 网关
      url: "intro/nat_gateway/"

    - title: 计费指南
      content: NAT 网关计费说明
      url: "billing/nat_price/"

    - title: 快速入门
      content: 快速上手使用 NAT 网关
      url: "quickstart/snat_qs/"
      
    - title: 操作指南
      content: NAT 网关详细操作指导
      url: "manual/mge_nat/create_nat/"
  
    - title: 最佳实践
      content: NAT 网关最佳实践场景
      url: "best-practices/multi_nat_access_internet/"
      
    - title: 常见问题
      content: NAT 网关常见问题解答
      url: "faq/nat_faq"


section3:
  title: 开发者指南
  children:
    - title: API 文档
      content: 如何使用 API 文档
      url: "api/api_overview/"

    - title: SDK 文档
      content: 如何使用 SDK 文档
      url: "/development_docs/sdk/"

    - title: CLI 文档
      content: 如何使用 CLI 文档
      url: "/development_docs/cli/"


section4:
  children:
    - title: 了解：什么是 NAT 网关
      content: NAT 网关是一个分布式的网络地址转换服务。
      vice_title: 了解的第一步
      children:
        - title: 产品简介
          url: "intro/nat_gateway/"

    - title: 上手：NAT 网关操作
      content: 多台云服务器可以通过 NAT 网关的公网 IP 访问互联网或提供公网服务。
      vice_title: 上手的第一步
      children:
        - title: 通过 SNAT 功能实现访问公网服务
          url: "quickstart/snat_qs/" 

        - title: 通过 DNAT 功能实现提供公网服务
          url: "quickstart/dnat_qs/" 

---

