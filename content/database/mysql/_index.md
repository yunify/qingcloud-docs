---
title: "MySQL Plus"
linkTitle: "MySQL Plus"
weight: 1
collapsible: true
type: "product"

section1:
  title: MySQL Plus
  vice_title: 基于 MySQL 提供的数据库服务，支持一主多从高可用架构，集成 InnoDB + TokuDB 双存储引擎，支持自动备份、监控告警等管理功能
  video: "https://pek3a.qingstor.com/workshop/webhosting%20feb.16%20v3.mp4"
  video_img: "/images/video.png"

Section2:
  title: 用户指南
  children:
    - title: 操作指南
      content: 学习上手如何管理MySQL Plus集群，以及如何使用MySQL Plus提供的相关服务等。
      url: "manual/cluster_info"

    - title: 最佳实践
      content: 
      url: "best-practices/"

section3:
  title: 开发者指南
  children:
    - title: API 文档
      content: 如何使用 API 文档
      url: "/qingstor/guide/object_manage"

    - title: SDK 文档
      content: 如何使用 SDK 文档
      url: "/test/guide/object_manage"

    - title: CLI 文档
      content: 如何使用 CLI 文档
      url: "/qingstor/guide/object_manage/"

section4:
  children:
    - title: 了解
      content: 什么是MySQL Plus
      children:
        - title: 产品简介
          url: "/database/mysql/intro/introduction"

        - title: 产品系列
          url: "/database/mysql/intro/list"

        - title: 产品优势
          url: "/database/mysql/intro/superiority"

    - title: 进阶
      content: 学习如何如何创建、管理、使用MySQL Plus集群
      children: 
        - title: 创建MySQL Plus
          url: "/database/mysql/quickstart/quick_start"

        - title: MySQL集群信息
          url: "/database/mysql/manual/cluster_info"

        - title: MySQL Plus服务功能
          url: "/database/mysql/manual/service"
---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->