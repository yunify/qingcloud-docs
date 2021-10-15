---
title: "VPC 网络"
linkTitle: "VPC 网络"
weight: 2
collapsible: true
type: "product"

section1:
  title: VPC 网络
  vice_title: VPC 网络是 QingCloud 环境内用户专属的大型网络空间。在 VPC 网络内，您可以自定义 IP 地址范围、创建子网，并在子网内创建云服务器/数据库/大数据等各种云资源。
  # todo add qingstor introduction video
  video: "https://pek3b.qingstor.com/yunify-qingcloud-docs/video/qs_qingcloud_vpc_0723.mp4"
  video_img: "/images/video.png"

Section2:
  title: 用户指南
  children:
    # - title: 动态与公告
    #   content: 产品动态和公告
    #   url: "/storage/object-storage/news/history"

    - title: 产品简介
      content: 什么是 VPC 网络
      url: "/network/vpc/intro/10_intro"

    - title: 计费指南
      content: VPC 网络如何计费
      url: "/network/vpc/billing/price"

    - title: 快速入门
      content: 快速入门
      url: "/network/vpc/quick-start/10_qs_net_plan"

    - title: 操作指南
      content: 操作指南
      url: "/network/vpc/manual/vpcnet/10_create_vpc"

    - title: 最佳实践
      content: 最佳实践
      url: "/network/vpc/best-practices/best_practices"

    - title: 常见问题
      content: 常见问题
      url: "/network/vpc/faq/vpc_faq"

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
    - title: 了解：什么是 VPC 网络
      content: VPC 网络是 QingCloud 环境内用户专属的大型网络空间。在 VPC 网络内，您可以自定义 IP 地址范围、创建子网，并在子网内创建云服务器/数据库/大数据等各种云资源。
      vice_title: 了解的第一步
      children:
        - title: 产品简介
          url: "/network/vpc/intro/10_intro"

        - title: 产品优势
          url: "/network/vpc/intro/intro/#vpc-产品优势"
    - title: 上手：创建和管理 VPC 网络
      content: 创建VPC网络，查看VPC属性，管理配置，图形化页面。
      vice_title: 上手的第一步
      children:
        - title: 创建VPC
          url: "/network/vpc/manual/vpcnet/10_create_vpc"

---

<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->