---
title: "公网 IP"
linkTitle: "公网 IP"
weight: 10
collapsible: true
type: "product"

section1:
  title: 公网 IP
  vice_title: 公网 IP 是在互联网上合法的静态 IP 地址。用户可以将申请到的公网 IP 地址与任意云服务器/路由器/负载均衡器绑定。
  video: "https://pek3b.qingstor.com/yunify-qingcloud-docs/video/qs_qingcloud_eip.mp4"
  video_img: "/images/video.png"

Section2:
  title: 用户指南
  children:
    - title: 产品简介
      content: 产品简介
      url: "intro/introduction/"

    - title: 计费指南
      content: 计费指南
      url: "billing/price/"

    - title: 快速入门
      content: 快速入门
      url: "quickstart/ipv6_quick_start/"

    - title: 操作指南
      content: 操作指南
      url: "manual/ipv4/inband_ipv4/"

    #- title: 最佳实践
    #  content: 最佳实践
    #  url: "best-practices/lb_border"

    - title: 常见问题
      content: 常见问题
      url: "faq/faq/"

section3:
  title: 开发者指南
  children:
    - title: API 文档
      content: 如何使用 API 文档
      url: "/development_docs/api/"

    - title: SDK 文档
      content: 如何使用 SDK 文档
      url: "/development_docs/sdk/"

    - title: CLI 文档
      content: 如何使用 CLI 文档
      url: "/development_docs/cli/"


section4:
  children:
    - title: 了解：什么是公网 IP
      content: 公网 IP 是在互联网上合法的静态 IP 地址。
      vice_title: 了解的第一步
      children:
        - title: 产品简介
          url: "intro/introduction/"

    - title: 上手：绑定公网 IP
      content: 公网 IP 的绑定模式分为两类：外部绑定与内部绑定。
      vice_title: 上手的第一步
      children:
        - title: 外部绑定 IPv4 公网 IP
          url: "manual/ipv4/outband_ipv4/" 
        - title: 内部绑定 IPv4 公网 IP
          url: "manual/ipv4/inband_ipv4/"  
        - title: 外部绑定 IPv6 公网 IP
          url: "manual/ipv6/outband_ipv6/"      
        - title: 内部绑定 IPv6 公网 IP
          url: "manual/ipv6/inband_ipv6/"  

---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->