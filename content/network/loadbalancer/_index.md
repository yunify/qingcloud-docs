---
title: "负载均衡"
linkTitle: "负载均衡"
weight: 50
collapsible: true
type: "product"


section1:
  title: 负载均衡
  vice_title: 负载均衡是将来自多个公网地址的访问流量分发到多台云服务器上的流量分发控制服务，并支持自动检测并隔离不可用的云服务器，从而提高业务的服务能力和可用性。
  # todo add qingstor introduction video
  video: "https://pek3b.qingstor.com/yunify-qingcloud-docs/video/qs_qingcloud_lb.mp4"
  video_img: "/images/video.png"

Section2:
  title: 用户指南
  children:
    - title: 产品简介
      content: 产品简介
      url: "/network/loadbalancer/intro/introduction"

    - title: 计费指南
      content: 计费指南
      url: "/network/loadbalancer/billing/price"

    - title: 快速入门
      content: 快速入门
      url: "/network/loadbalancer/quickstart/quick_start"

    - title: 操作指南
      content: 操作指南
      url: "/network/loadbalancer/manual/lb_user_guide"

    - title: 最佳实践
      content: 最佳实践
      url: "/network/loadbalancer/best-practices/lb_border"

    - title: 常见问题
      content: 常见问题
      url: "/network/loadbalancer/faq/lb_faq"

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
    - title: 了解：什么是负载均衡
      content: 负载均衡器可以将来访问流量分配到多台云服务器，从而提高业务的服务能力和可用性。
      vice_title: 了解的第一步
      children:
        - title: 产品简介
          url: "/network/loadbalancer/intro/introduction"

        - title: 产品优势
          url: "/network/loadbalancer/intro/advantage"

        - title: 应用场景
          url: "/network/loadbalancer/intro/senario"

    - title: 上手：搭建负载均衡
      content: 搭建基于各个协议的负载均衡。
      vice_title: 上手的第一步
      children:
        - title: 搭建负载均衡
          url: "/network/loadbalancer/quickstart/quick_start"       
---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->