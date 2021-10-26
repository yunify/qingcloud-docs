---
title: "云解析 DNS"
linkTitle: "云解析 DNS"
weight: 20
collapsible: true
type: "product"

section1:
  title: 云解析 DNS
  vice_title: 云解析 DNS 提供权威域名解析和全局流量负载均衡两大功能服务，以助用户便捷访问互联网。
  # todo add qingstor introduction video
  # video: "https://pek3a.qingstor.com/workshop/webhosting%20feb.16%20v3.mp4"
  # video_img: "/images/video.png"

Section2:
  title: 用户指南
  children:
    - title: 最新动态
      content: 产品动态
      url: "news/product_news"
    
    - title: 产品简介
      content: 产品简介
      url: "intro/introduction"

    - title: 快速入门
      content: 快速入门
      url: "quickstart/creatrecordset"

    - title: 操作指南
      content: 操作指南
      url: "manual/dnsrecord/mgtdomainlist"

    - title: 最佳实践
      content: 跨区域负载均衡
      url: "best-practices/cross_region"

    - title: 常见问题
      content: 常见问题
      url: "faq/faq"

section3:
  title: 开发者指南
  children:
    - title: API 文档
      content: 如何使用 API 文档
      url: "api/api_intro/"

    - title: SDK 文档
      content: 如何使用 SDK 文档
      url: "/development_docs/sdk/"

    - title: CLI 文档
      content: 如何使用 CLI 文档
      url: "/development_docs/cli/"

section4:
  children:
    - title: 了解：什么是云解析 DNS ？
      content: 云解析 DNS 提供权威域名解析和全局流量负载均衡两大功能服务。

      vice_title: 了解的第一步
      children:
        - title: 产品简介
          url: "intro/introduction"

        - title: DNS 功能特性
          url: "intro/dns_function"
        
        - title: GSLB 功能特性
          url: "intro/gslb_function"

    - title: 上手：快速使用云解析 DNS      
      content: 云解析 DNS 提供更稳定、更安全、更快速、更精准、更便捷的域名解析管理服务。
      vice_title: 上手的第一步
      children:
        - title: 配置域名解析记录
          url: "quickstart/creatrecordset"  
        
        - title: 配置 GSLB 实例
          url: "quickstart/creatgslbpolicy"        


---

<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->