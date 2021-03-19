---
title: "Redis standalone"
linkTitle: "Redis standalone"
weight: 11
collapsible: true
type: "product"

section1:
  title: Redis standalone
  vice_title:    Redis 是一个使用ANSI C编写的开源、支持网络、基于内存、可选持久性的键值对存储数据库。Redis standalone on QingCloud 将 Redis 封装成 App，采用 Redis 最近的稳定版本 3.2.9 构建，支持在 AppCenter 上一键部署，在原生 Redis 的基础上增加了其易用性、高可用的特性。

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
      url: "quickstart/quick_start/"

    - title: 操作指南
      content: 学习上手如何管理 Redis standalone 集群，以及如何使用 Redis standalone 提供的相关服务等。
      url: "manual/cluster_info/"

    - title: 最佳实践
      content: Redis standalone 的最佳实践
      url: "best-practices/data_transfer/"

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
      content: 什么是 Redis standalone
      children:
        - title: 产品简介
          url: "intro/introduction/"

    - title: 进阶
      content: 学习如何如何创建、管理、使用 Redis standalone 集群
      children: 
        - title: 创建 Redis standalone
          url: "quickstart/quick_start/"

        - title: Redis standalone 集群信息
          url: "manual/cluster_info/"

        - title: Redis standalone 服务功能
          url: "manual/service/"
---


<!-- type: "product" 这个参数表明这是一个产品index页面 -->
<!-- section1 为产品index页面 主标题 副标题 video  video_img为视频图片  -->
<!-- section2 为产品index页面 第一个大块的用户文档配置  -->
<!-- section3 为产品index页面 第二个大块的开发者文档配置  -->
<!-- section4 为产品index页面 第三个大块的学习路径配置  -->