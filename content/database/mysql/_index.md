---
title: "MySQL Plus"
linkTitle: "MySQL Plus"
weight: 1
collapsible: true
type: "product"

section1:
  title: MySQL Plus
  vice_title: 基于 MySQL 提供的数据库服务，支持一主多从高可用架构，集成 InnoDB + TokuDB 双存储引擎，支持自动备份、监控告警等管理功能
  video: "https://pek3a.qingstor.com/workshop/CloudOperation_100P003C201908_MySQLPlus%E7%9A%84%E5%88%9B%E5%BB%BA%E5%92%8C%E4%BD%BF%E7%94%A8.mp4"
  video_img: "/images/video.png"

Section2:
  title: 用户指南
  children:
    - title: 产品简介
      content: 产品简介
      url: "intro/introduction"

    - title: 计费指南
      content: 计费指南
      url: "billing/price"

    - title: 快速入门
      content: 快速入门
      url: "quickstart/quick_start"

    - title: 操作指南
      content: 学习上手如何管理MySQL Plus集群，以及如何使用MySQL Plus提供的相关服务等。
      url: "manual/cluster_info"

    - title: 最佳实践
      content: 场景：MySQL Plus的数据迁移
      url: "best-practices/data_transfer"

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
      content: 什么是MySQL Plus
      vice_title: 了解的第一步
      children:
        - title: 产品简介
          url: "/database/mysql/intro/introduction"

        - title: 产品系列
          url: "/database/mysql/intro/list"

        - title: 产品特性
          url: "/database/mysql/intro/superiority"

    - title: 进阶
      content: 学习如何创建、管理、使用MySQL Plus集群
      vice_title: 上手的第一步
      children: 
        - title: 创建MySQL Plus
          url: "/database/mysql/quickstart/quick_start"

        - title: MySQL Plus集群信息
          url: "/database/mysql/manual/cluster_info"

        - title: MySQL Plus服务功能
          url: "/database/mysql/manual/service"
---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->