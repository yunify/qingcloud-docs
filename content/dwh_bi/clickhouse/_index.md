---
title: "ClickHouse"
linkTitle: "ClickHouse"
weight: 01
collapsible: true
type: "product"

section1:
  title: ClickHouse
  vice_title: QingCloud ClickHouse 是一款深度定制的 ClickHouse 集群应用。
  # todo add qingstor introduction video
  # video: "https://pek3a.qingstor.com/workshop/webhosting%20feb.16%20v3.mp4"
  # video_img: "/images/video.png"

section2:
  title: 用户指南
  children:
    - title: 动态与公告
      content: 产品动态
      url: "news/product_news/"

    - title: 产品简介
      content: 什么是 ClickHouse
      url: "intro/introduction/"

    - title: 计费指南
      content: 计费指南
      url: "billing/price/"

    - title: 快速入门
      content: 快速入门
      url: "quickstart/create_cluster/"

    - title: 操作指南
      content: 学习上手如何创建、查看及应用 ClickHouse 等。
      url: "manual/cluster_lifecycle/check_cluster/"

    - title: 最佳实践
      content: ClickHouse 最佳实践
      url: "best-practices/benchmark_test/"

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
    - title: 了解
      content: 什么是 ClickHouse
      vice_title: 了解的第一步
      children:
        - title: 产品简介
          url: "intro/introduction/"
        
        - title: 版本介绍
          url: "intro/version/"

    - title: 进阶
      content: 学习如何创建、管理、使用 ClickHouse 集群
      vice_title: 上手的第一步
      children: 
        - title: 创建 ClickHouse
          url: "quickstart/create_cluster/"

        - title: 访问 ClickHouse
          url: "quickstart/access_clickhouse/"

        - title: ClickHouse 集群信息
          url: "manual/cluster_lifecycle/check_cluster/"
  
 
---

<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->