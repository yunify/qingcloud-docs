---
title: "硬盘"
linkTitle: "硬盘"
weight: 1
collapsible: true
type: "product"

section1:
  title: 硬盘
  vice_title: 青云 QingCloud 平台支持多种块存储类型，包括：基础型、 SSD 企业型、企业级分布式 SAN 、容量型。
  video: "https://pek3a.qingstor.com/workshop/webhosting%20feb.16%20v3.mp4"
  video_img: "/images/video.png"

Section2:
  title: 用户指南
  children:
    - title: 基础型硬盘
      content: 基础型硬盘用户使用文档
      url: "/storage/disk/manual/basic_volume"

    - title: SSD 企业型硬盘
      content: SSD企业型硬盘用户使用文档
      url: "/storage/disk/manual/ssd_enterprise_volume"

    - title: 容量型硬盘
      content: 容量型硬盘用户使用文档
      url: "/storage/disk/manual/capacity_volume"

    - title: 企业级分布式SAN（NeonSAN）
      content: 企业级分布式SAN（NeonSAN）硬盘用户使用文档
      url: "/storage/disk/manual/neonsan_volume"

section3:
  title: 开发者指南
  children:
    - title: API 文档
      content: 如何使用 API 文档
      url: "/development_docs/api/"

    - title: SDK 文档
      content: 如何使用 SDK 文档
      url: "/development_docs/sdk/"

section4:
  children:
    - title: 了解：什么是硬盘
      content: 硬盘为用户提供开箱即用的操作系统与工具。
      vice_title: 了解的第一步
      children:
        - title: 产品概述（从这里进入示例目录）
          url: "/storage/disk/intro/introduction"

        - title: 产品优势
          url: "https://www.qingcloud.com/products/volume/"

        - title: 应用场景
          url: "https://www.qingcloud.com/products/volume/"

    - title: 上手：创建硬盘与部署应用
      content: 虚拟硬盘为用户提供可无限扩展的通用数据存储服务。
      vice_title: 上手的第一步
      children: 
        - title: 创建与使用青云硬盘
          url: "/storage/disk/quickstart/quick_start"

        - title: 主机系统盘扩容
          url: "/storage/disk/quickstart/system_volume_resize"

---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->