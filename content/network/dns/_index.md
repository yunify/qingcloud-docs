---
title: "DNS"
linkTitle: "DNS"
weight: 8
collapsible: true
type: "product"

section1:
  title: DNS
  vice_title: QingCloud DNS 是一款权威域名解析服务，将域名和 IP 地址相互解析映射，可视化智能域名解析管理，并跟踪域名解析状态，以助用户便捷访问互联网。
  # todo add qingstor introduction video
  # video: "https://pek3a.qingstor.com/workshop/webhosting%20feb.16%20v3.mp4"
  # video_img: "/images/video.png"

Section2:
  title: 用户指南
  children:
    - title: 产品简介
      content: 产品简介
      url: "/network/dns/intro/introduction"

    - title: 快速入门
      content: 快速入门
      url: "/network/dns/quickstart/creatrecordset"

    - title: 操作指南
      content: 操作指南
      url: "/network/dns/manual/mgtdomainlist"

    - title: 常见问题
      content: 常见问题
      url: "/network/dns/faq/faq"

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
    - title: 了解：什么是DNS服务？
      content: QingCloud DNS 是一款权威域名解析服务，可视化智能域名解析管理，并跟踪域名解析情况。

      vice_title: 了解的第一步
      children:
        - title: 产品简介
          url: "/network/dns/intro/introduction"

        - title: 功能特性
          url: "/network/dns/intro/function"

    - title: 上手：快速使用DNS服务
      content: DNS 提供更稳定、更安全、更快速、更精准、更便捷的域名解析管理服务。
      vice_title: 上手的第一步
      children:
        - title: 配置域名解析记录
          url: "/network/dns/quickstart/creatrecordset"  

        - title: 验证域名解析是否生效
          url: "/network/dns/quickstart/checkrecordset"       
---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->