---
title: "自动伸缩"
linkTitle: "自动伸缩"
weight: 1
collapsible: true
type: "product"

section1:
  title: 自动伸缩
  vice_title: 帮助用户基于监控数据动态地调节资源配置或集群规模，及时应对突增的系统压力，充分利用云计算的弹性特点来调节系统处理能力，且有效降低维护成本。 
  video: "https://pek3b.qingstor.com/yunify-qingcloud-docs/video/qs_qingcloud_autoscaling.mp4"
  video_img: "/images/video.png"


section2:
  title: 用户指南
  children:
    - title: 产品简介
      content: 产品简介
      url: "intro/intro"

    - title: 操作指南
      content: 学习上手如何创建自动伸缩策略，如何设置云服务器启动配置，以及查看历史记录等。
      url: "manual/autoscaling"

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
    - title: 了解：什么是自动伸缩
      content: 自动伸缩的介绍以及支持的资源类型。
      vice_title: 了解的第一步
      children:
        - title: 产品介绍
          url: "intro/intro" 

    - title: 上手：如何配置自动伸缩。
      content: 如何创建自动伸缩策略和进行云服务器启动配置。
      vice_title: 上手的第一步
      children: 
        - title: 创建自动伸缩策略
          url: "manual/autoscaling#创建自动伸缩策略"

        - title: 云服务器启动配置
          url: "manual/autoscaling#云服务器启动配置"
---

<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->